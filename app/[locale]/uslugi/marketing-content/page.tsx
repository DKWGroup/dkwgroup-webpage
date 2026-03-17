import { Link } from "@/src/i18n/routing";
import { ArrowRight, Video, FileText, Megaphone, LineChart, Target, Zap, CheckCircle2 } from "lucide-react";
import Contact from "@/components/Contact";
import MarketingContentFaq from "@/components/MarketingContentFaq";
import { useTranslations } from "next-intl";
import AnimatedSection from "@/components/AnimatedSection";

export default function MarketingContentServicePage() {
    const t = useTranslations("MarketingContentServicePage");

    const TYPES_ICONS = [
        <Video key="video" />,
        <FileText key="filetext" />,
        <Megaphone key="megaphone" />,
        <LineChart key="linechart" />
    ];

    const STRATEGY_ICONS = [
        <Target key="target" className="w-8 h-8 text-[#444] group-hover:text-[var(--color-brand-orange)] transition-colors flex-shrink-0" />,
        <Zap key="zap" className="w-8 h-8 text-[#444] group-hover:text-[var(--color-brand-orange)] transition-colors flex-shrink-0" />,
        <LineChart key="linechart-2" className="w-8 h-8 text-[#444] group-hover:text-[var(--color-brand-orange)] transition-colors flex-shrink-0" />
    ];

    return (
        <>
            {/* Hero Section */}
            <section className="pt-32 pb-24 bg-[#0a0a0a] border-b border-[#333]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 border border-[#333] bg-[#111] mb-6">
                            <span className="w-2 h-2 rounded-full bg-[var(--color-brand-orange)]"></span>
                            <span className="text-[10px] font-bold font-mono text-gray-400 uppercase tracking-widest">{t("hero_badge")}</span>
                        </div>
                        <h1 className="text-5xl md:text-6xl font-bold font-sans tracking-tight text-white mb-6 uppercase">
                            {t("hero_title_1")} <br /><span className="text-[var(--color-brand-orange)]">{t("hero_title_2")}</span>
                        </h1>
                        <p className="text-gray-400 font-mono text-lg md:text-xl leading-relaxed max-w-3xl mx-auto mb-10">
                            {t("hero_description")}
                        </p>
                        <Link
                            href="#kontakt"
                            className="inline-flex items-center justify-center px-8 py-4 bg-[var(--color-brand-orange)] text-black font-bold uppercase tracking-wider hover:bg-[#e65c00] transition-colors text-sm font-mono brutal-shadow group"
                        >
                            {t("hero_cta")}
                            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>
                </div>
            </section>

            {/* Rodzaje Treści */}
            <section className="py-24 bg-[#050505] border-b border-[#333]">
                <AnimatedSection animation="fade-up" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold font-sans text-white mb-4 tracking-tight uppercase">
                            {t("types_title_1")} <span className="text-[var(--color-brand-orange)]">{t("types_title_2")}</span>
                        </h2>
                        <p className="text-gray-400 font-mono text-sm leading-relaxed max-w-2xl mx-auto">
                            {t("types_desc")}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {Array.from({ length: 4 }).map((_, idx) => (
                            <div key={idx} className="bg-[#0a0a0a] border border-[#333] p-8 brutal-shadow group hover:border-[var(--color-brand-orange)] transition-colors">
                                <div className="text-[var(--color-brand-orange)] mb-6 group-hover:scale-110 transition-transform origin-left">
                                    {TYPES_ICONS[idx]}
                                </div>
                                <h3 className="text-lg font-bold text-white mb-4 uppercase tracking-wide">{t(`types_items.${idx}.title`)}</h3>
                                <p className="text-gray-400 font-mono text-xs leading-relaxed">{t(`types_items.${idx}.desc`)}</p>
                            </div>
                        ))}
                    </div>
                </AnimatedSection>
            </section>

            {/* Strategiczne podejście / Korzyści */}
            <section className="py-24 bg-[#0a0a0a] border-b border-[#333]">
                <AnimatedSection animation="fade-right" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

                        {/* Strategiczne podejście */}
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold font-sans text-white mb-6 tracking-tight uppercase border-b border-[#333] pb-6">
                                {t("strategy_title_1")} <span className="text-[var(--color-brand-orange)]">{t("strategy_title_2")}</span>
                            </h2>
                            <p className="text-gray-400 font-mono text-sm leading-relaxed mb-10">
                                {t("strategy_desc")}
                            </p>

                            <div className="space-y-6">
                                {Array.from({ length: 3 }).map((_, idx) => (
                                    <div key={idx} className="flex gap-4 p-6 border border-[#333] bg-[#111] hover:border-[var(--color-brand-orange)] transition-colors group">
                                        {STRATEGY_ICONS[idx]}
                                        <div>
                                            <h3 className="text-white font-bold uppercase tracking-wide mb-2">{t(`strategy_items.${idx}.title`)}</h3>
                                            <p className="text-gray-400 font-mono text-xs leading-relaxed">{t(`strategy_items.${idx}.desc`)}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Korzyści */}
                        <div className="bg-[#111] border border-[#333] p-8 md:p-12 brutal-shadow relative">
                            <div className="absolute -top-4 -right-4 bg-[var(--color-brand-orange)] text-black px-4 py-2 font-bold font-mono text-xs uppercase tracking-widest hidden md:block">
                                {t("benefits_badge")}
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold font-sans text-white mb-8 tracking-tight uppercase">
                                {t("benefits_title_1")} <br /><span className="text-[var(--color-brand-orange)]">{t("benefits_title_2")}</span>
                            </h2>

                            <div className="grid grid-cols-1 gap-4 mb-10">
                                {Array.from({ length: 6 }).map((_, i) => (
                                    <div key={i} className="flex gap-3 items-center border-b border-[#333] pb-3 last:border-0 last:pb-0">
                                        <CheckCircle2 className="w-5 h-5 text-[var(--color-brand-orange)] flex-shrink-0" />
                                        <p className="text-white font-mono text-xs leading-relaxed uppercase">{t(`benefits_items.${i}`)}</p>
                                    </div>
                                ))}
                            </div>

                            <Link
                                href="#kontakt"
                                className="w-full inline-flex items-center justify-center px-8 py-4 bg-[var(--color-brand-orange)] text-black font-bold uppercase tracking-wider hover:bg-[#e65c00] transition-colors text-xs font-mono brutal-shadow group"
                            >
                                {t("benefits_cta")}
                                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </div>

                    </div>
                </AnimatedSection>
            </section>

            {/* Proces tworzenia */}
            <section className="py-24 bg-[#050505] border-b border-[#333]">
                <AnimatedSection animation="fade-up" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="mb-16 text-center">
                        <h2 className="text-3xl md:text-4xl font-bold font-sans text-white mb-4 tracking-tight uppercase">
                            {t("process_title_1")} <span className="text-[var(--color-brand-orange)]">{t("process_title_2")}</span>
                        </h2>
                        <p className="text-gray-400 font-mono max-w-2xl mx-auto text-sm leading-relaxed">
                            {t("process_desc")}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {Array.from({ length: 4 }).map((_, idx) => (
                            <div key={idx} className="bg-[#111] border border-[#333] p-8 group hover:border-[var(--color-brand-orange)] transition-colors relative overflow-hidden brutal-shadow">
                                <div className="absolute top-4 right-4 text-6xl font-bold font-sans text-[#222] opacity-50 pointer-events-none group-hover:text-[var(--color-brand-orange)] group-hover:opacity-10 transition-colors">
                                    {idx + 1}
                                </div>
                                <h3 className="text-xl font-bold text-white mb-4 relative z-10 uppercase">{t(`process_items.${idx}.title`)}</h3>
                                <p className="text-gray-400 font-mono text-xs leading-relaxed relative z-10">{t(`process_items.${idx}.desc`)}</p>
                            </div>
                        ))}
                    </div>
                </AnimatedSection>
            </section>

            {/* Zunifikowane FAQ */}
            <AnimatedSection animation="reveal">
                <MarketingContentFaq />
            </AnimatedSection>

            {/* Zakończenie CTA */}
            <section className="bg-[#050505]">
                <AnimatedSection animation="scale" className="bg-[var(--color-brand-orange)] p-12 md:p-24 text-center border-b border-[#333] max-w-7xl mx-auto my-12 brutal-shadow">
                    <h2 className="text-4xl md:text-5xl font-bold font-sans tracking-tight text-black mb-6 uppercase">
                        {t("cta_title_1")} <span className="text-white">{t("cta_title_2")}</span>
                    </h2>
                    <p className="font-mono text-black/80 font-bold mb-8 max-w-2xl mx-auto text-sm">
                        {t("cta_desc")}
                    </p>
                    <Link
                        href="#kontakt"
                        className="inline-flex items-center justify-center px-8 py-4 bg-black text-white font-bold uppercase tracking-wider hover:bg-[#222] transition-colors text-sm font-mono brutal-shadow group"
                    >
                        {t("cta_button")}
                        <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform text-[var(--color-brand-orange)]" />
                    </Link>
                </AnimatedSection>
                <AnimatedSection animation="fade-up">
                    <Contact />
                </AnimatedSection>
            </section>
        </>
    );
}
