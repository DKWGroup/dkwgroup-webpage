"use client";

import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/src/i18n/routing";
import { ArrowRight, Mail, Loader2, CheckCircle2 } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

export default function NewsletterSection() {
    const t = useTranslations("Newsletter");
    const [email, setEmail] = useState("");
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const [honeypot, setHoneypot] = useState("");
    const [formLoadedAt, setFormLoadedAt] = useState<number>(0);

    useEffect(() => {
        setFormLoadedAt(Date.now());
    }, []);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('loading');

        try {
            const response = await fetch('/api/newsletter/subscribe', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    email,
                    source: 'marketing-checklist',
                    website: honeypot,
                    _formLoadedAt: formLoadedAt,
                }),
            });

            if (!response.ok) throw new Error('Subscription failed');

            setStatus('success');
            setEmail("");
        } catch (error) {
            console.error('Newsletter error:', error);
            setStatus('error');
        }
    };

    return (
        <section className="py-20 bg-[#050505] border-b border-[#333] relative overflow-hidden">
            {/* Decorative background element */}
            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-96 h-96 bg-[var(--color-brand-orange)] opacity-5 blur-[120px] rounded-full pointer-events-none"></div>
            
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="max-w-4xl mx-auto bg-[#0a0a0a] border-2 border-[#333] brutal-shadow p-8 md:p-12">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start lg:items-center">
                        
                        <div className="space-y-6">
                            <AnimatedSection animation="fade-right">
                                <h2 className="text-3xl md:text-4xl font-bold font-sans tracking-tight uppercase text-white">
                                    {t("heading_1")} <span className="text-[var(--color-brand-orange)]">{t("heading_2")}</span>
                                </h2>
                                <p className="text-gray-400 font-mono text-sm leading-relaxed">
                                    {t("description")}
                                </p>
                                <div className="flex flex-wrap items-center gap-3 text-[var(--color-brand-orange)] font-mono text-[10px] md:text-xs uppercase tracking-wider font-bold">
                                    <span className="hidden sm:block w-8 h-px bg-[var(--color-brand-orange)]"></span>
                                    <span>{t("tagline")}</span>
                                </div>
                            </AnimatedSection>
                        </div>

                        <div>
                            <AnimatedSection animation="fade-left" delay={0.2}>
                                {status === 'success' ? (
                                    <div className="bg-[#111] border-2 border-[var(--color-brand-orange)]/30 p-8 text-center animate-in zoom-in duration-300">
                                        <Mail className="w-12 h-12 text-[var(--color-brand-orange)] mx-auto mb-4 animate-bounce" />
                                        <h3 className="text-white font-bold uppercase tracking-widest mb-2">Potwierdź E-mail</h3>
                                        <p className="text-gray-400 font-mono text-xs leading-relaxed">Wysłaliśmy link weryfikacyjny na Twój adres. Kliknij go, aby dokończyć zapis i pobrać materiały.</p>
                                        <button 
                                            onClick={() => setStatus('idle')}
                                            className="mt-6 text-[var(--color-brand-orange)] font-mono text-[10px] uppercase tracking-widest hover:underline"
                                        >
                                            Zapisz inny e-mail
                                        </button>
                                    </div>
                                ) : (
                                    <form className="space-y-4" onSubmit={handleSubmit}>
                                        {/* Honeypot field — invisible to humans, attracts bots */}
                                        <div style={{ position: 'absolute', left: '-9999px', opacity: 0, height: 0, overflow: 'hidden' }} aria-hidden="true">
                                            <label htmlFor="newsletter-website">Website</label>
                                            <input
                                                type="text"
                                                id="newsletter-website"
                                                name="website"
                                                tabIndex={-1}
                                                autoComplete="off"
                                                value={honeypot}
                                                onChange={(e) => setHoneypot(e.target.value)}
                                            />
                                        </div>
                                        <div className="relative">
                                            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                                            <input
                                                type="email"
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                                placeholder={t("placeholder")}
                                                className="w-full bg-[#111] border-2 border-[#333] py-4 pl-12 pr-4 text-white font-mono text-sm focus:border-[var(--color-brand-orange)] outline-none transition-colors"
                                                required
                                                disabled={status === 'loading'}
                                            />
                                        </div>
                                        <button
                                            type="submit"
                                            disabled={status === 'loading'}
                                            className="w-full bg-[var(--color-brand-orange)] text-black font-bold py-4 px-2 uppercase tracking-wide hover:bg-[var(--color-brand-orange-hover)] transition-colors flex items-center justify-center group text-sm md:text-base disabled:opacity-50"
                                        >
                                            {status === 'loading' ? (
                                                <Loader2 className="w-5 h-5 animate-spin" />
                                            ) : (
                                                <>
                                                    <span className="text-center">{t("button")}</span>
                                                    <ArrowRight className="ml-2 w-5 h-5 shrink-0 group-hover:translate-x-1 transition-transform" />
                                                </>
                                            )}
                                        </button>
                                        {status === 'error' && (
                                            <p className="text-[10px] text-red-500 font-mono uppercase text-center mt-2">
                                                Wystąpił błąd. Spróbuj ponownie.
                                            </p>
                                        )}
                                        <p className="text-[10px] text-gray-600 font-mono uppercase text-center mt-4 leading-relaxed">
                                            {t("disclaimer")}
                                        </p>
                                    </form>
                                )}
                            </AnimatedSection>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}
