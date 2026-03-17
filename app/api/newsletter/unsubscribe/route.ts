import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '@/src/utils/supabase';

export async function POST(request: NextRequest) {
    try {
        const { id } = await request.json();

        if (!id) {
            return NextResponse.json({ error: 'Subscriber ID is required' }, { status: 400 });
        }

        const { error } = await supabase
            .from('newsletter_subscribers')
            .update({ 
                status: 'unsubscribed',
                unsubscribed_at: new Date().toISOString()
            })
            .eq('id', id);

        if (error) throw error;

        return NextResponse.json({ success: true });
    } catch (error: any) {
        console.error('Newsletter unsubscribe error:', error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
