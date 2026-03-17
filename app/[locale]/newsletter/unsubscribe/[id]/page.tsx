"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import { Mail, CheckCircle2, Loader2, AlertTriangle, ArrowLeft } from "lucide-react";
import { Link } from "@/src/i18n/routing";

export default function UnsubscribePage() {
    const params = useParams();
    const id = params.id as string;
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

    const handleUnsubscribe = async () => {
        setStatus('loading');
        try {
            const res = await fetch('/api/newsletter/unsubscribe', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ id }),
            });

            if (!res.ok) throw new Error('Failed to unsubscribe');
            setStatus('success');
        } catch (error) {
            console.error(error);
            setStatus('error');
        }
    };

    return (
        <div className="min-h-[80vh] flex items-center justify-center p-4">
            <div className="max-w-md w-full bg-[#0a0a0a] border-2 border-[#333] brutal-shadow p-8 text-center relative overflow-hidden">
                {/* Background decoration */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--color-brand-orange)] opacity-5 blur-3xl -translate-y-16 translate-x-16 rounded-full pointer-events-none"></div>

                {status === 'idle' && (
                    <>
                        <div className="w-16 h-16 bg-[#111] border border-[#333] rounded-full flex items-center justify-center mx-auto mb-6">
                            <Mail className="w-8 h-8 text-gray-500" />
                        </div>
                        <h1 className="text-2xl font-bold font-sans text-white uppercase tracking-tight mb-4">Wypisz się z newslettera</h1>
                        <p className="text-gray-400 font-mono text-sm leading-relaxed mb-8">
                            Szkoda, że nas opuszczasz. Czy na pewno chcesz przestać otrzymywać od nas wiadomości?
                        </p>
                        <button
                            onClick={handleUnsubscribe}
                            className="w-full bg-[#ff6a00] text-black font-bold py-4 uppercase tracking-widest hover:bg-[#e65c00] transition-colors brutal-shadow"
                        >
                            Potwierdzam wypisanie
                        </button>
                        <Link href="/" className="inline-block mt-6 text-gray-500 hover:text-white transition-colors text-xs font-mono uppercase tracking-widest flex items-center justify-center gap-2">
                            <ArrowLeft className="w-3 h-3" /> Wróć na stronę główną
                        </Link>
                    </>
                )}

                {status === 'loading' && (
                    <div className="py-12 flex flex-col items-center">
                        <Loader2 className="w-12 h-12 text-[var(--color-brand-orange)] animate-spin mb-4" />
                        <p className="font-mono text-sm text-gray-400">Przetwarzanie Twojej prośby...</p>
                    </div>
                )}

                {status === 'success' && (
                    <>
                        <div className="w-16 h-16 bg-green-500/10 border border-green-500/30 rounded-full flex items-center justify-center mx-auto mb-6">
                            <CheckCircle2 className="w-8 h-8 text-green-500" />
                        </div>
                        <h1 className="text-2xl font-bold font-sans text-white uppercase tracking-tight mb-4 text-green-500">Zostałeś wypisany</h1>
                        <p className="text-gray-400 font-mono text-sm leading-relaxed mb-8">
                            Dziękujemy za dotychczasowy czas. Twój adres e-mail został pomyślnie usunięty z listy mailingowej.
                        </p>
                        <Link href="/" className="w-full inline-block border border-[#333] text-white font-bold py-4 uppercase tracking-widest hover:border-[var(--color-brand-orange)] transition-colors">
                            Wróć na stronę główną
                        </Link>
                    </>
                )}

                {status === 'error' && (
                    <>
                        <div className="w-16 h-16 bg-red-500/10 border border-red-500/30 rounded-full flex items-center justify-center mx-auto mb-6">
                            <AlertTriangle className="w-8 h-8 text-red-500" />
                        </div>
                        <h1 className="text-2xl font-bold font-sans text-white uppercase tracking-tight mb-4 text-red-500">Wystąpił błąd</h1>
                        <p className="text-gray-400 font-mono text-sm leading-relaxed mb-8">
                            Nie udało się przetworzyć Twojej prośby. Spróbuj ponownie później lub skontaktuj się z nami bezpośrednio.
                        </p>
                        <button
                            onClick={() => setStatus('idle')}
                            className="w-full border border-[#333] text-white font-bold py-4 uppercase tracking-widest hover:border-[var(--color-brand-orange)] transition-colors"
                        >
                            Spróbuj ponownie
                        </button>
                    </>
                )}
            </div>
        </div>
    );
}
