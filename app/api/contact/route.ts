import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import { ConfirmationEmail } from '@/components/emails/ConfirmationEmail';
import { NotificationEmail } from '@/components/emails/NotificationEmail';
import { render } from '@react-email/render';
import React from 'react';
import { runSecurityChecks, createSecurityResponse, sanitizeInput, MAX_LENGTHS } from '@/lib/security';
import { checkRateLimit, createRateLimitResponse, getClientIp, RATE_LIMITS } from '@/lib/rate-limit';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
    try {
        // ── Rate Limiting ───────────────────────────────────────
        const clientIp = getClientIp(request);
        const rateLimitResult = checkRateLimit('contact', clientIp, RATE_LIMITS.contact);

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
        const name = sanitizeInput(body.name, MAX_LENGTHS.name);
        const email = sanitizeInput(body.email, MAX_LENGTHS.email);
        const message = sanitizeInput(body.message, MAX_LENGTHS.message);

        // Validate required fields
        if (!name || !email || !message) {
            return NextResponse.json(
                { error: 'Missing required fields: name, email, message' },
                { status: 400 }
            );
        }

        // Basic email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return NextResponse.json(
                { error: 'Invalid email address' },
                { status: 400 }
            );
        }

        // Render emails to HTML manually for better compatibility
        const confirmationHtml = await render(React.createElement(ConfirmationEmail, { name }));
        const notificationHtml = await render(React.createElement(NotificationEmail, { name, email, message }));

        // Send confirmation email to user
        await resend.emails.send({
            from: 'DKW Group <noreply@dkwgroup.net>',
            to: [email],
            subject: 'Dziękujemy za wiadomość — DKW Group',
            html: confirmationHtml,
        });

        // Send notification email to DKW Group team
        await resend.emails.send({
            from: 'Formularz DKW Group <noreply@dkwgroup.net>',
            to: ['contact.dkwgroup@gmail.com'],
            replyTo: email,
            subject: `Nowe zapytanie od ${name}`,
            html: notificationHtml,
        });

        return NextResponse.json(
            { success: true, message: 'Emails sent successfully' },
            { status: 200 }
        );
    } catch (error) {
        console.error('Contact form error:', error);
        return NextResponse.json(
            { error: 'Failed to send email. Please try again later.' },
            { status: 500 }
        );
    }
}
