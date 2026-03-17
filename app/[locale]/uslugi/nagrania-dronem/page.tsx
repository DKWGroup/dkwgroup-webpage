import { Link } from "@/src/i18n/routing";
import { ArrowRight, Video, Plane, Shield, Zap, Info, CheckCircle2 } from "lucide-react";
import Contact from "@/components/Contact";
import DroneFaq from "@/components/DroneFaq";
import { useTranslations } from "next-intl";
import AnimatedSection from "@/components/AnimatedSection";

export default function DroneRecordingServicePage() {
    const t = useTranslations("DroneRecordingServicePage");

    const WHY_ICONS = [
        <CheckCircle2 key="check" className="w-6 h-6 text-[var(--color-brand-orange)] flex-shrink-0 mt-1" />
    ];

    const PROJECTS_ICONS = [
        <Video key="video" className="w-12 h-12 text-[#444] group-hover:scale-110 transition-transform" />
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
                            {t("hero_title_1")} <span className="text-[var(--color-brand-orange)]">{t("hero_title_2")}</span>
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

            {/* Profesjonalne nagrania z powietrza */}
            <section className="py-24 bg-[#050505] border-b border-[#333]">
                <AnimatedSection animation="fade-left" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold font-sans text-white mb-6 tracking-tight uppercase">
                                {t("professional_title_1")} <br /><span className="text-[var(--color-brand-orange)]">{t("professional_title_2")}</span>
                            </h2>
                            <div className="space-y-6 text-gray-400 font-mono text-sm md:text-base leading-relaxed">
                                <p>
                                    {t("professional_p1")}
                                </p>
                                <p>
                                    {t("professional_p2")}
                                </p>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div className="bg-[#111] border border-[#333] p-8 hover:border-[var(--color-brand-orange)] transition-colors brutal-shadow">
                                <Plane className="w-10 h-10 text-[var(--color-brand-orange)] mb-4" />
                                <h3 className="text-xl font-bold text-white mb-2 uppercase tracking-wide">{t("dji_title")}</h3>
                                <p className="text-gray-400 font-mono text-xs leading-relaxed">
                                    {t("dji_desc")}
                                </p>
                            </div>
                            <div className="bg-[#111] border border-[#333] p-8 hover:border-[var(--color-brand-orange)] transition-colors brutal-shadow">
                                <Zap className="w-10 h-10 text-[var(--color-brand-orange)] mb-4" />
                                <h3 className="text-xl font-bold text-white mb-2 uppercase tracking-wide">{t("fpv_title")}</h3>
                                <p className="text-gray-400 font-mono text-xs leading-relaxed">
                                    {t("fpv_desc")}
                                </p>
                            </div>
                        </div>
                    </div>
                </AnimatedSection>
            </section>

            {/* Dlaczego nagrania dronem? */}
            <section className="py-24 bg-[#0a0a0a] border-b border-[#333]">
                <AnimatedSection animation="fade-right" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold font-sans text-white mb-4 tracking-tight uppercase">
                            {t("why_title_1")} <span className="text-[var(--color-brand-orange)]">{t("why_title_2")}</span>
                        </h2>
                        <p className="text-gray-400 font-mono max-w-2xl text-sm leading-relaxed">
                            {t("why_desc")}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {Array.from({ length: 4 }).map((_, i) => (
                            <div key={i} className="flex gap-4 p-6 border border-[#333] bg-[#050505]">
                                {WHY_ICONS[0]}
                                <div>
                                    <h3 className="text-lg font-bold text-white mb-2 uppercase tracking-wide">{t(`why_items.${i}.title`)}</h3>
                                    <p className="text-gray-400 font-mono text-xs leading-relaxed">{t(`why_items.${i}.desc`)}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </AnimatedSection>
            </section>

            {/* Nasze realizacje */}
            <section className="py-24 bg-[#050505] border-b border-[#333]">
                <AnimatedSection animation="fade-up" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="mb-16 text-center">
                        <h2 className="text-3xl md:text-4xl font-bold font-sans text-white mb-4 tracking-tight uppercase">
                            {t("projects_title_1")} <span className="text-[var(--color-brand-orange)]">{t("projects_title_2")}</span>
                        </h2>
                        <p className="text-gray-400 font-mono max-w-2xl mx-auto text-sm leading-relaxed">
                            {t("projects_desc")}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {Array.from({ length: 3 }).map((_, idx) => (
                            <div key={idx} className="bg-[#111] border border-[#333] brutal-shadow group overflow-hidden flex flex-col h-full">
                                <div className="aspect-video bg-[#222] border-b border-[#333] flex items-center justify-center relative overflow-hidden">
                                    {PROJECTS_ICONS[0]}
                                </div>
                                <div className="p-6 flex-grow">
                                    <h3 className="text-lg font-bold text-white mb-2 uppercase tracking-wide group-hover:text-[var(--color-brand-orange)] transition-colors">{t(`projects_items.${idx}.title`)}</h3>
                                    <p className="text-gray-400 font-mono text-xs leading-relaxed">{t(`projects_items.${idx}.desc`)}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </AnimatedSection>
            </section>

            {/* Proces realizacji */}
            <section className="py-24 bg-[#0a0a0a] border-b border-[#333]">
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
                                    {t(`process_items.${idx}.step`)}
                                </div>
                                <h3 className="text-xl font-bold text-white mb-4 relative z-10 uppercase">{t(`process_items.${idx}.title`)}</h3>
                                <p className="text-gray-400 font-mono text-xs leading-relaxed relative z-10">{t(`process_items.${idx}.desc`)}</p>
                            </div>
                        ))}
                    </div>
                </AnimatedSection>
            </section>

            {/* FAQ */}
            <AnimatedSection animation="reveal">
                <DroneFaq />
            </AnimatedSection>

            {/* CTA i Kontakt */}
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
