import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '@/src/utils/supabase';
import { Resend } from 'resend';
import { render } from '@react-email/render';
import React from 'react';
import PdfDeliveryEmail from '@/components/emails/PdfDeliveryEmail';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function GET(request: NextRequest) {
    const { searchParams } = new URL(request.url);
    const token = searchParams.get('token');

    if (!token) {
        return NextResponse.redirect(`${process.env.NEXT_PUBLIC_APP_URL}/newsletter/verify/error`);
    }

    try {
        // 1. Find and verify subscriber
        const { data: subscriber, error: fetchError } = await supabase
            .from('newsletter_subscribers')
            .select('*')
            .eq('id', token)
            .single();

        if (fetchError || !subscriber) {
            return NextResponse.redirect(`${process.env.NEXT_PUBLIC_APP_URL}/newsletter/verify/error`);
        }

        if (subscriber.status === 'subscribed') {
            return NextResponse.redirect(`${process.env.NEXT_PUBLIC_APP_URL}/newsletter/verify/success`);
        }

        // 2. Update status to subscribed
        const { error: updateError } = await supabase
            .from('newsletter_subscribers')
            .update({ status: 'subscribed' })
            .eq('id', token);

        if (updateError) throw updateError;

        // 3. Trigger Automation (PDF delivery) if applicable
        if (subscriber.source && subscriber.source !== 'unknown') {
            const { data: automation } = await supabase
                .from('newsletter_automations')
                .select('*')
                .eq('trigger_key', subscriber.source)
                .eq('is_active', true)
                .single();

            if (automation) {
                const unsubscribeUrl = `${process.env.NEXT_PUBLIC_APP_URL}/newsletter/unsubscribe/${subscriber.id}`;
                
                const emailHtml = await render(
                    React.createElement(PdfDeliveryEmail, {
                        name: subscriber.name || '',
                        pdfTitle: automation.title,
                        pdfUrl: automation.pdf_url,
                        unsubscribeUrl
                    })
                );

                await resend.emails.send({
                    from: 'DKW Group <noreply@dkwgroup.net>',
                    to: [subscriber.email],
                    subject: `Twoja darmowa checklista: ${automation.title}`,
                    html: emailHtml,
                });
            }
        }

        return NextResponse.redirect(`${process.env.NEXT_PUBLIC_APP_URL}/newsletter/verify/success`);

    } catch (error) {
        console.error('Newsletter verification error:', error);
        return NextResponse.redirect(`${process.env.NEXT_PUBLIC_APP_URL}/newsletter/verify/error`);
    }
}
