import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '@/src/utils/supabase';
import { Resend } from 'resend';
import { render } from '@react-email/render';
import React from 'react';
import PdfDeliveryEmail from '@/components/emails/PdfDeliveryEmail';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
    try {
        const { email, name, source } = await request.json();

        if (!email) {
            return NextResponse.json({ error: 'Email is required' }, { status: 400 });
        }

        // 1. Save or Update Subscriber
        const { data: subscriber, error: subError } = await supabase
            .from('newsletter_subscribers')
            .upsert(
                { 
                    email, 
                    name, 
                    source: source || 'unknown',
                    status: 'subscribed',
                    unsubscribed_at: null 
                },
                { onConflict: 'email' }
            )
            .select()
            .single();

        if (subError) throw subError;

        // 2. Check for Automation
        if (source) {
            const { data: automation, error: autoError } = await supabase
                .from('newsletter_automations')
                .select('*')
                .eq('trigger_key', source)
                .eq('is_active', true)
                .single();

            // If automation exists, send the email
            if (automation) {
                const unsubscribeUrl = `${process.env.NEXT_PUBLIC_APP_URL}/newsletter/unsubscribe/${subscriber.id}`;
                
                const emailHtml = await render(
                    React.createElement(PdfDeliveryEmail, {
                        name: name || '',
                        pdfTitle: automation.title,
                        pdfUrl: automation.pdf_url,
                        unsubscribeUrl
                    })
                );

                await resend.emails.send({
                    from: 'DKW Group <noreply@dkwgroup.net>',
                    to: [email],
                    subject: `Twoja darmowa checklista: ${automation.title}`,
                    html: emailHtml,
                });
            }
        }

        return NextResponse.json({ success: true });
    } catch (error: any) {
        console.error('Newsletter subscribe error:', error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
