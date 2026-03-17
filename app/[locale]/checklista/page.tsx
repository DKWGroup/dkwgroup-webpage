"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/src/i18n/routing";
import { 
    CheckCircle2, 
    XCircle, 
    Sparkles, 
    Dumbbell, 
    Stethoscope, 
    Utensils, 
    ArrowRight, 
    ChevronDown, 
    Check,
    Loader2
} from "lucide-react";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import SuccessPopup from "@/components/SuccessPopup";
import { motion, useScroll, useTransform, useSpring, useInView } from "framer-motion";

// Reusable Mini CTA Component
const MiniCTA = ({ title, buttonText }: { title: string, buttonText: string }) => (
    <div className="w-full bg-[var(--color-brand-orange)] py-8 px-4 flex flex-col md:flex-row items-center justify-between brutal-shadow my-0 border-y-2 border-black z-20 relative">
        <div className="max-w-4xl">
            <h3 className="text-black text-xl md:text-2xl font-black uppercase tracking-tight mb-4 md:mb-0">
                {title}
            </h3>
        </div>
        <a href="#odbierz" className="whitespace-nowrap inline-flex items-center justify-center px-6 py-3 bg-black text-white font-bold uppercase hover:bg-gray-800 transition-colors brutal-shadow text-sm group shrink-0">
            {buttonText}
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </a>
    </div>
);

// Floating Parallax Icon Component
const ParallaxIcon = ({ children, x, y, delay = 0, speed = 1 }: { children: React.ReactNode, x: string, y: string, delay?: number, speed?: number }) => {
    return (
        <motion.div
            className="absolute opacity-10 pointer-events-none z-0"
            style={{ left: x, top: y }}
            animate={{
                y: ["-10px", "10px", "-10px"],
                rotate: [-5, 5, -5]
            }}
            transition={{
                duration: 4 * speed,
                repeat: Infinity,
                ease: "easeInOut",
                delay: delay
            }}
        >
            {children}
        </motion.div>
    );
};

export default function ChecklistLandingPage() {
    const t = useTranslations("ChecklistLanding");
    const [openFaq, setOpenFaq] = useState<number | null>(null);
    const [formData, setFormData] = useState({ name: "", email: "", acceptedPrivacy: false });
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
    const [privacyError, setPrivacyError] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        
        if (!formData.acceptedPrivacy) {
            setPrivacyError(true);
            return;
        }
        
        setPrivacyError(false);
        setStatus("loading");

        try {
            const response = await fetch('/api/newsletter/subscribe', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    name: formData.name,
                    email: formData.email,
                    source: "marketing-checklist",
                }),
            });

            if (response.ok) {
                setStatus("success");
                setFormData({ name: "", email: "", acceptedPrivacy: false });
            } else {
                setStatus("error");
            }
        } catch (error) {
            setStatus("error");
        }
    };

    return (
        <main className="bg-[#050505] min-h-screen text-white font-sans selection:bg-[var(--color-brand-orange)] selection:text-white">
            
            {/* 1. HERO SECTION */}
            <section className="relative pt-20 pb-20 md:pt-32 md:pb-32 px-4 overflow-hidden">
                <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-[var(--color-brand-orange)]/5 blur-[120px] rounded-full point-events-none"></div>
                
                <div className="max-w-4xl mx-auto text-center relative z-10">
                    <p className="text-[var(--color-brand-orange)] font-mono text-sm md:text-base font-bold tracking-widest uppercase mb-6 animate-fade-in-up">
                        {t("hero_sup")}
                    </p>
                    
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-8 leading-tight">
                        {t("hero_h1").split('. ')[0]}. <br className="hidden md:block"/>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">
                            {t("hero_h1").split('. ')[1]}
                        </span>
                    </h1>
                    
                    <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed font-mono">
                        {t("hero_sub")}
                    </p>
                    
                    <a href="#odbierz" className="inline-flex items-center justify-center px-8 py-4 bg-[var(--color-brand-orange)] text-black font-bold uppercase tracking-wider hover:bg-[var(--color-brand-orange-hover)] transition-all brutal-shadow text-sm font-mono group">
                        {t("hero_cta")}
                        <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </a>
                </div>
            </section>

            {/* 2. CONTRAST SECTION */}
            <section className="py-24 bg-[#050505] border-y border-[#222] relative overflow-hidden">
                {/* Parallax Background Icons */}
                <ParallaxIcon x="10%" y="15%" speed={1.2} delay={0}><CheckCircle2 className="w-24 h-24 text-[var(--color-brand-orange)]" /></ParallaxIcon>
                <ParallaxIcon x="80%" y="10%" speed={1.5} delay={1}><XCircle className="w-32 h-32 text-red-500" /></ParallaxIcon>
                <ParallaxIcon x="5%" y="70%" speed={0.8} delay={2}><XCircle className="w-20 h-20 text-red-500" /></ParallaxIcon>
                <ParallaxIcon x="85%" y="60%" speed={1.1} delay={0.5}><CheckCircle2 className="w-40 h-40 text-[var(--color-brand-orange)]" /></ParallaxIcon>
                <ParallaxIcon x="50%" y="85%" speed={1.3} delay={1.5}><CheckCircle2 className="w-16 h-16 text-[var(--color-brand-orange)]" /></ParallaxIcon>
                
                <div className="max-w-6xl mx-auto px-4 relative z-10">
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 uppercase">{t("contrast_h2")}</h2>
                    
                    <div className="grid md:grid-cols-2 gap-8 lg:gap-16">
                        {/* Pains */}
                        <div className="bg-[#111] p-8 brutal-border">
                            <ul className="space-y-6">
                                {[1, 2, 3, 4].map((i) => (
                                    <li key={i} className="flex gap-4 items-start">
                                        <XCircle className="w-6 h-6 text-red-500 shrink-0 mt-0.5" />
                                        <span className="text-gray-300 leading-relaxed font-mono text-sm md:text-base">
                                            {t(`contrast_pain_${i}` as any)}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        
                        {/* Gains */}
                        <div className="bg-[#111] p-8 brutal-border border-[var(--color-brand-orange)]/30 relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--color-brand-orange)]/5 blur-3xl"></div>
                            <ul className="space-y-6 relative z-10">
                                {[1, 2, 3, 4].map((i) => (
                                    <li key={i} className="flex gap-4 items-start">
                                        <CheckCircle2 className="w-6 h-6 text-green-500 shrink-0 mt-0.5" />
                                        <span className="text-gray-200 leading-relaxed font-mono text-sm md:text-base">
                                            {t(`contrast_gain_${i}` as any)}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* MINI CTA 1 */}
            <MiniCTA title={t("mini_cta_title")} buttonText={t("mini_cta_button")} />

            {/* 3. TARGET AUDIENCE */}
            <section className="py-24 w-full relative">
                {/* Background Image Setup */}
                <div className="absolute inset-0 z-0">
                    <Image 
                        src="/portfolio-photos/069c54d6-020e-498c-89eb-e025c6c350ec_rw_600.webp" 
                        alt="Portfolio background" 
                        fill 
                        className="object-cover opacity-10"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-[#050505]/70 to-[#050505]"></div>
                </div>

                <div className="max-w-7xl mx-auto px-4 relative z-10">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold uppercase mb-4">{t("target_h2")}</h2>
                        <p className="text-gray-400 font-mono">{t("target_sub")}</p>
                    </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {/* Beauty */}
                    <div className="bg-[#0a0a0a] border border-[#222] p-8 flex flex-col items-center text-center hover:border-[var(--color-brand-orange)] transition-colors group brutal-shadow">
                        <Sparkles className="w-12 h-12 text-[var(--color-brand-orange)] mb-6 group-hover:scale-110 transition-transform" />
                        <h3 className="font-bold uppercase tracking-wider">{t("target_1")}</h3>
                    </div>
                    {/* Fitness */}
                    <div className="bg-[#0a0a0a] border border-[#222] p-8 flex flex-col items-center text-center hover:border-[var(--color-brand-orange)] transition-colors group brutal-shadow">
                        <Dumbbell className="w-12 h-12 text-[var(--color-brand-orange)] mb-6 group-hover:scale-110 transition-transform" />
                        <h3 className="font-bold uppercase tracking-wider">{t("target_2")}</h3>
                    </div>
                    {/* Medical */}
                    <div className="bg-[#0a0a0a] border border-[#222] p-8 flex flex-col items-center text-center hover:border-[var(--color-brand-orange)] transition-colors group brutal-shadow">
                        <Stethoscope className="w-12 h-12 text-[var(--color-brand-orange)] mb-6 group-hover:scale-110 transition-transform" />
                        <h3 className="font-bold uppercase tracking-wider">{t("target_3")}</h3>
                    </div>
                    {/* Resto */}
                    <div className="bg-[#0a0a0a] border border-[#222] p-8 flex flex-col items-center text-center hover:border-[var(--color-brand-orange)] transition-colors group brutal-shadow">
                        <Utensils className="w-12 h-12 text-[var(--color-brand-orange)] mb-6 group-hover:scale-110 transition-transform" />
                        <h3 className="font-bold uppercase tracking-wider">{t("target_4")}</h3>
                    </div>
                </div>
                </div>
            </section>

            {/* 4. VALUE EXPANSION (6 Areas) */}
            <section className="py-24 bg-[#0a0a0a] border-y border-[#222]">
                <div className="max-w-6xl mx-auto px-4">
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 uppercase">{t("value_h2")}</h2>
                    
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[1, 2, 3, 4, 5, 6].map((i) => (
                            <div key={i} className="bg-[#111] border border-[#333] p-8 relative overflow-hidden group hover:border-[var(--color-brand-orange)] transition-colors">
                                <div className="text-7xl font-black text-[#222] absolute -top-4 -right-2 group-hover:text-[#333] transition-colors -z-0">
                                    0{i}
                                </div>
                                <div className="relative z-10">
                                    <h3 className="text-xl font-bold mb-4 uppercase text-[var(--color-brand-orange)]">
                                        {t(`value_${i}_title` as any)}
                                    </h3>
                                    <p className="text-gray-400 font-mono text-sm leading-relaxed">
                                        {t(`value_${i}_desc` as any)}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* MINI CTA 2 */}
            <MiniCTA title={t("mini_cta_title")} buttonText={t("mini_cta_button")} />

            {/* 5. AUTHORITY & 6. COST AWARENESS */}
            <section className="py-24 w-full relative">
                 {/* Background Image Setup */}
                 <div className="absolute inset-0 z-0 hidden md:block">
                    <Image 
                        src="/portfolio-photos/76ad12e6-6966-4374-841f-32b1baad5255_rw_600.webp" 
                        alt="Background" 
                        fill 
                        className="object-cover opacity-[0.05]"
                    />
                     <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-[#050505]/80 to-[#050505]"></div>
                </div>

                <div className="max-w-5xl mx-auto px-4 relative z-10">
                    <div className="grid md:grid-cols-2 gap-16 items-center mb-32">
                    <div className="relative">
                        <div className="absolute inset-0 bg-[var(--color-brand-orange)] translate-x-4 translate-y-4 border-2 border-[var(--color-brand-orange)]"></div>
                        <div className="relative h-[400px] md:h-[500px] bg-[#111] border-2 border-[#333] overflow-hidden z-10">
                            {/* NOTE: Using team image as placeholder for "Author" */}
                            <Image 
                                src="/portfolio-photos/6ada456e-b927-4747-b584-0259cdc60659_rw_600.webp" 
                                alt={t("bio_name")}
                                fill
                                className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                            />
                        </div>
                    </div>
                    <div>
                        <h3 className="text-2xl font-bold uppercase mb-2">{t("bio_name")}</h3>
                        <div className="w-12 h-1 bg-[var(--color-brand-orange)] mb-6"></div>
                        <p className="text-gray-400 font-mono leading-relaxed mb-8">
                            {t("bio_text")}
                        </p>
                    </div>
                </div>

                {/* Reality Check */}
                <div className="bg-[var(--color-brand-orange)] text-black p-8 md:p-12 brutal-shadow relative overflow-hidden">
                    <div className="relative z-10">
                        <h2 className="text-3xl md:text-4xl font-black uppercase mb-8">{t("cost_h2")}</h2>
                        
                        <div className="space-y-6 font-mono font-medium text-lg">
                            <p><span className="font-bold underline uppercase">{t("cost_fact_label")}</span> {t("cost_fact")}</p>
                            <p><span className="font-bold underline uppercase">{t("cost_conclusion_label")}</span> {t("cost_conclusion")}</p>
                            <p className="text-xl font-black bg-black text-white p-4 inline-block mt-4">
                                <span className="text-[var(--color-brand-orange)] uppercase">{t("cost_result_label")}</span> {t("cost_result")}
                            </p>
                        </div>
                        
                        <div className="mt-12">
                            <a href="#odbierz" className="inline-flex items-center text-xl font-bold uppercase hover:text-white transition-colors border-b-2 border-black hover:border-white pb-1 group">
                                {t("cost_cta")}
                                <ArrowRight className="ml-2 w-6 h-6 group-hover:translate-x-2 transition-transform" />
                            </a>
                        </div>
                    </div>
                </div>
                </div>
            </section>

            {/* 7. TESTIMONIALS */}
            <section className="py-24 bg-[#0a0a0a] border-y border-[#222]">
                <div className="max-w-5xl mx-auto px-4">
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 uppercase">{t("testimonials_h2")}</h2>
                    
                    <div className="grid md:grid-cols-2 gap-8">
                        {[1, 2].map((i) => (
                            <div key={i} className="bg-[#111] border border-[#333] p-8 flex flex-col justify-between">
                                <p className="text-lg font-mono text-gray-300 italic mb-8">
                                    "{t(`test_${i}_quote` as any)}"
                                </p>
                                <div className="flex items-center border-t border-[#333] pt-6 gap-4">
                                    <div className="w-12 h-12 bg-[#222] rounded-full flex items-center justify-center font-bold text-xl text-[var(--color-brand-orange)]">
                                        {t(`test_${i}_author` as any)[0]}
                                    </div>
                                    <div>
                                        <p className="font-bold uppercase">{t(`test_${i}_author` as any)}</p>
                                        <p className="text-sm text-[var(--color-brand-orange)] font-mono">{t(`test_${i}_role` as any)}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* MINI CTA 3 */}
            <MiniCTA title={t("mini_cta_title")} buttonText={t("mini_cta_button")} />

            {/* 8. FAQ */}
            <section className="py-24 w-full relative">
                {/* Background Image Setup */}
                <div className="absolute inset-0 z-0">
                    <Image 
                        src="/portfolio-photos/f00994ac-75b9-4e52-9bf1-6ffa62da844b_rw_600.webp" 
                        alt="FAQ background" 
                        fill 
                        className="object-cover opacity-[0.15] mix-blend-overlay"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-[#050505]"></div>
                </div>

                <div className="max-w-3xl mx-auto px-4 relative z-10">
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 uppercase">{t("faq_h2")}</h2>
                
                <div className="space-y-4">
                    {[1, 2, 3].map((i) => (
                        <div key={i} className="border border-[#333] bg-[#0a0a0a]">
                            <button 
                                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                                className="w-full text-left p-6 font-bold uppercase tracking-wider flex justify-between items-center hover:text-[var(--color-brand-orange)] transition-colors"
                            >
                                {t(`faq_${i}_q` as any)}
                                <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${openFaq === i ? 'rotate-180 text-[var(--color-brand-orange)]' : ''}`} />
                            </button>
                            <div 
                                className={`overflow-hidden transition-all duration-300 ${openFaq === i ? 'max-h-96' : 'max-h-0'}`}
                            >
                                <p className="px-6 pb-6 text-gray-400 font-mono text-sm leading-relaxed">
                                    {t(`faq_${i}_a` as any)}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
                </div>
            </section>

            {/* 9. LEAD CAPTURE FORM (Scroll Target) */}
            <section id="odbierz" className="py-32 bg-[#050505] relative overflow-hidden border-t border-[#333] scroll-mt-0">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#111] z-0"></div>
                
                <div className="max-w-xl mx-auto px-4 relative z-10">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-5xl font-bold uppercase mb-4">{t("form_h2")}</h2>
                        <p className="text-gray-400 font-mono text-lg">{t("form_sub")}</p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <input
                                type="text"
                                required
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                placeholder={t("form_name")}
                                className="w-full bg-[#0a0a0a] border border-[#333] px-5 py-4 text-white placeholder-gray-600 focus:outline-none focus:border-[var(--color-brand-orange)] font-mono transition-colors"
                            />
                        </div>
                        <div>
                            <input
                                type="email"
                                required
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                placeholder={t("form_email")}
                                className="w-full bg-[#0a0a0a] border border-[#333] px-5 py-4 text-white placeholder-gray-600 focus:outline-none focus:border-[var(--color-brand-orange)] font-mono transition-colors"
                            />
                        </div>

                        {/* Custom Checkbox */}
                        <div className="pt-2">
                            <label className="flex items-start cursor-pointer group">
                                <div className="relative flex items-center justify-center mt-1 mr-3 shrink-0">
                                    <input
                                        type="checkbox"
                                        checked={formData.acceptedPrivacy}
                                        onChange={(e) => {
                                            setFormData({ ...formData, acceptedPrivacy: e.target.checked });
                                            if (e.target.checked) setPrivacyError(false);
                                        }}
                                        className="peer sr-only"
                                    />
                                    <div className={`w-5 h-5 border-2 transition-colors ${privacyError ? 'border-red-500' : 'border-[#444] group-hover:border-[var(--color-brand-orange)]'} peer-checked:bg-[var(--color-brand-orange)] peer-checked:border-[var(--color-brand-orange)] flex items-center justify-center`}>
                                        <Check className={`w-3.5 h-3.5 text-black opacity-0 peer-checked:opacity-100 transition-opacity ${formData.acceptedPrivacy ? 'opacity-100' : ''}`} />
                                    </div>
                                </div>
                                <span className={`text-xs font-mono leading-relaxed ${privacyError ? 'text-red-400' : 'text-gray-400'}`}>
                                    {t("form_checkbox")}
                                </span>
                            </label>
                            {privacyError && (
                                <p className="text-red-500 text-xs font-mono mt-2 ml-8">
                                    {t("form_error")}
                                </p>
                            )}
                        </div>

                        <button
                            type="submit"
                            disabled={status === 'loading'}
                            className="w-full flex items-center justify-center px-8 py-5 bg-[var(--color-brand-orange)] text-black font-bold uppercase tracking-wider hover:bg-[var(--color-brand-orange-hover)] transition-all brutal-shadow disabled:opacity-70 disabled:cursor-not-allowed group text-lg mt-4"
                        >
                            {status === 'loading' ? (
                                <Loader2 className="w-6 h-6 animate-spin" />
                            ) : (
                                <>
                                    {t("form_cta")}
                                    <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform" />
                                </>
                            )}
                        </button>
                    </form>
                </div>
            </section>

            {/* Success Popup */}
            <SuccessPopup
                isOpen={status === 'success'}
                onClose={() => setStatus('idle')}
                title="Potwierdź E-mail!"
                message="Aby otrzymać checklistę, musisz potwierdzić swój adres. Wysłaliśmy link weryfikacyjny - sprawdź swoją skrzynkę (również folder SPAM)."
            />
        </main>
    );
}
