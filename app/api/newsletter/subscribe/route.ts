import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '@/src/utils/supabase';
import { Resend } from 'resend';
import { render } from '@react-email/render';
import React from 'react';
import VerificationEmail from '@/components/emails/VerificationEmail';
import { runSecurityChecks, createSecurityResponse, sanitizeInput, MAX_LENGTHS } from '@/lib/security';
import { checkRateLimit, createRateLimitResponse, getClientIp, RATE_LIMITS } from '@/lib/rate-limit';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
    try {
        // ── Rate Limiting ───────────────────────────────────────
        const clientIp = getClientIp(request);
        const rateLimitResult = checkRateLimit('newsletter', clientIp, RATE_LIMITS.newsletter);

        if (!rateLimitResult.allowed) {
            return createRateLimitResponse(rateLimitResult);
        }

        const body = await request.json();

        // ── Anti-Bot Security Checks ────────────────────────────
        const securityResult = runSecurityChecks(body);
        if (!securityResult.passed) {
            return createSecurityResponse(securityResult.reason || 'unknown');
        }

        // ── Input Sanitization ──────────────────────────────────
        const email = sanitizeInput(body.email, MAX_LENGTHS.email);
        const name = body.name ? sanitizeInput(body.name, MAX_LENGTHS.name) : undefined;
        const source = body.source ? sanitizeInput(body.source, MAX_LENGTHS.source) : 'unknown';

        if (!email) {
            return NextResponse.json({ error: 'Email is required' }, { status: 400 });
        }

        // 1. Save or Update Subscriber as PENDING
        // We use upsert but we don't change status if they are already 'subscribed'
        const { data: existingSub } = await supabase
            .from('newsletter_subscribers')
            .select('status')
            .eq('email', email)
            .single();

        if (existingSub?.status === 'subscribed') {
            return NextResponse.json({ success: true, message: 'Already subscribed' });
        }

        const { data: subscriber, error: subError } = await supabase
            .from('newsletter_subscribers')
            .upsert(
                { 
                    email, 
                    name, 
                    source,
                    status: 'pending',
                    unsubscribed_at: null 
                },
                { onConflict: 'email' }
            )
            .select()
            .single();

        if (subError) throw subError;

        // 2. Send Verification Email
        const verificationUrl = `${process.env.NEXT_PUBLIC_APP_URL}/api/newsletter/verify?token=${subscriber.id}`;
        
        const emailHtml = await render(
            React.createElement(VerificationEmail, {
                name: name || '',
                verificationUrl
            })
        );

        await resend.emails.send({
            from: 'DKW Group <noreply@dkwgroup.net>',
            to: [email],
            subject: 'Potwierdź swój zapis do newslettera DKW Group',
            html: emailHtml,
        });

        return NextResponse.json({ success: true, pending: true });
    } catch (error: any) {
        console.error('Newsletter subscribe error:', error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
