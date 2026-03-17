import { Link } from "@/src/i18n/routing";
import { ArrowRight, Video, Wifi, MonitorPlay, MessageSquare, CheckCircle2, Tv2, CalendarDays, ExternalLink, Presentation, Users } from "lucide-react";
import Contact from "@/components/Contact";
import LiveStreamingFaq from "@/components/LiveStreamingFaq";
import { useTranslations } from "next-intl";
import AnimatedSection from "@/components/AnimatedSection";

export default function LiveStreamingServicePage() {
    const t = useTranslations("LiveStreamingServicePage");

    const CAPABILITIES_ICONS = [
        <Video key="video" />,
        <MonitorPlay key="monitor" />,
        <Wifi key="wifi" />,
        <MessageSquare key="msg" />
    ];

    const APPLICATIONS_ICONS = [
        <Presentation key="presentation" className="w-12 h-12 text-[#444] group-hover:scale-110 transition-transform group-hover:text-[var(--color-brand-orange)]" />,
        <Users key="users" className="w-12 h-12 text-[#444] group-hover:scale-110 transition-transform group-hover:text-[var(--color-brand-orange)]" />,
        <CalendarDays key="calendar" className="w-12 h-12 text-[#444] group-hover:scale-110 transition-transform group-hover:text-[var(--color-brand-orange)]" />
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
                        <h1 className="text-4xl md:text-5xl font-bold font-sans tracking-tight text-white mb-6 uppercase leading-tight">
                            {t("hero_title_1")} <span className="text-[var(--color-brand-orange)]">{t("hero_title_2")}</span>
                        </h1>
                        <p className="text-gray-400 font-mono text-base md:text-lg leading-relaxed max-w-3xl mx-auto mb-10">
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

            {/* Zaproszenie do Studio Zewnętrznego Podcastów dla streamingu stacjonarnego */}
            <section className="py-12 bg-black border-b border-[#333]">
                <AnimatedSection animation="fade-right" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="border-l-4 border-[var(--color-brand-orange)] bg-[#0a0a0a] p-8 md:p-12 brutal-shadow flex flex-col md:flex-row items-center justify-between gap-8 group">
                        <div className="max-w-2xl">
                            <h2 className="text-xl md:text-2xl font-bold uppercase tracking-tight text-white mb-2">
                                {t("studio_title_1")} <span className="text-[var(--color-brand-orange)]">{t("studio_title_2")}</span>
                            </h2>
                            <p className="text-gray-400 font-mono text-xs mt-4">
                                {t("studio_desc")}
                            </p>
                        </div>
                        <a
                            href="https://podcastkatowice.pl/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-white text-white font-bold uppercase tracking-wider hover:bg-white hover:text-black transition-colors text-xs font-mono w-full md:w-auto text-center"
                        >
                            {t("studio_cta")}
                            <ExternalLink className="ml-2 w-4 h-4" />
                        </a>
                    </div>
                </AnimatedSection>
            </section>

            {/* Nasze Możliwości */}
            <section className="py-24 bg-[#050505] border-b border-[#333]">
                <AnimatedSection animation="fade-up" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-2xl md:text-3xl font-bold font-sans text-white mb-4 tracking-tight uppercase">
                            {t("capabilities_title_1")} <span className="text-[var(--color-brand-orange)]">{t("capabilities_title_2")}</span>
                        </h2>
                        <p className="text-gray-400 font-mono text-xs leading-relaxed max-w-2xl mx-auto">
                            {t("capabilities_desc")}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {Array.from({ length: 4 }).map((_, idx) => (
                            <div key={idx} className="bg-[#0a0a0a] border border-[#333] p-8 brutal-shadow group hover:border-[var(--color-brand-orange)] transition-colors">
                                <div className="text-[var(--color-brand-orange)] mb-6 group-hover:scale-110 transition-transform origin-left">
                                    {CAPABILITIES_ICONS[idx]}
                                </div>
                                <h3 className="text-lg font-bold text-white mb-4 uppercase tracking-wide">{t(`capabilities_items.${idx}.title`)}</h3>
                                <p className="text-gray-400 font-mono text-xs leading-relaxed">{t(`capabilities_items.${idx}.desc`)}</p>
                            </div>
                        ))}
                    </div>
                </AnimatedSection>
            </section>

            {/* Profesjonalny sprzęt i Mobilne Studio */}
            <section className="py-24 bg-[#0a0a0a] border-b border-[#333]">
                <AnimatedSection animation="fade-left" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-2xl md:text-3xl font-bold font-sans text-white mb-6 tracking-tight uppercase border-b border-[#333] pb-6">
                                {t("equipment_title_1")} <span className="text-[var(--color-brand-orange)]">{t("equipment_title_2")}</span>
                            </h2>
                            <p className="text-gray-400 font-mono text-xs leading-relaxed mb-8">
                                {t("equipment_desc")}
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {Array.from({ length: 8 }).map((_, idx) => (
                                    <div key={idx} className="flex items-start gap-3 border border-[#333] p-3 text-sm font-mono text-gray-300">
                                        <CheckCircle2 className="w-5 h-5 text-[var(--color-brand-orange)] flex-shrink-0" />
                                        <span>{t(`equipment_items.${idx}`)}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="grid grid-cols-1 gap-6">
                            <div className="bg-[#111] border border-[var(--color-brand-orange)] p-8 md:p-12 brutal-shadow">
                                <Tv2 className="w-12 h-12 text-[var(--color-brand-orange)] mb-6" />
                                <h3 className="text-2xl font-bold font-sans text-white uppercase tracking-tight mb-4">
                                    {t("mobile_studio_title")}
                                </h3>
                                <p className="text-gray-400 font-mono text-xs leading-relaxed mb-8">
                                    {t("mobile_studio_desc")}
                                </p>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="border border-[#333] p-4 bg-black">
                                        <span className="block text-2xl font-bold text-white mb-1">{t("mobile_studio_badges.0.value")}</span>
                                        <span className="text-[10px] font-mono text-[var(--color-brand-orange)] uppercase tracking-widest">{t("mobile_studio_badges.0.label")}</span>
                                    </div>
                                    <div className="border border-[#333] p-4 bg-black">
                                        <span className="block text-xl font-bold text-white mb-1">{t("mobile_studio_badges.1.value")}</span>
                                        <span className="text-[10px] font-mono text-[var(--color-brand-orange)] uppercase tracking-widest">{t("mobile_studio_badges.1.label")}</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </AnimatedSection>
            </section>

            {/* Zastosowania transmisji */}
            <section className="py-24 bg-[#050505] border-b border-[#333]">
                <AnimatedSection animation="fade-up" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="mb-16">
                        <h2 className="text-2xl md:text-3xl font-bold font-sans text-white mb-4 tracking-tight uppercase">
                            {t("applications_title_1")} <span className="text-[var(--color-brand-orange)]">{t("applications_title_2")}</span>
                        </h2>
                        <p className="text-gray-400 font-mono text-xs leading-relaxed max-w-2xl">
                            {t("applications_desc")}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {Array.from({ length: 3 }).map((_, idx) => (
                            <div key={idx} className="bg-[#111] border border-[#333] brutal-shadow group overflow-hidden flex flex-col h-full hover:border-[var(--color-brand-orange)] transition-colors">
                                <div className="aspect-video bg-[#222] border-b border-[#333] flex items-center justify-center relative overflow-hidden">
                                    {APPLICATIONS_ICONS[idx]}
                                </div>
                                <div className="p-6 flex-grow">
                                    <h3 className="text-lg font-bold text-white mb-2 uppercase tracking-wide">{t(`applications_items.${idx}.title`)}</h3>
                                    <p className="text-gray-400 font-mono text-xs leading-relaxed">{t(`applications_items.${idx}.desc`)}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </AnimatedSection>
            </section>

            {/* Zunifikowane FAQ */}
            <AnimatedSection animation="reveal">
                <LiveStreamingFaq />
            </AnimatedSection>

            {/* Zakończenie CTA */}
            <section className="bg-[#050505]">
                <AnimatedSection animation="scale" className="bg-[var(--color-brand-orange)] p-12 md:p-24 text-center border-b border-[#333] max-w-7xl mx-auto my-12 brutal-shadow">
                    <h2 className="text-3xl md:text-4xl font-bold font-sans tracking-tight text-black mb-6 uppercase">
                        {t("cta_title_1")} <span className="text-white">{t("cta_title_2")}</span>
                    </h2>
                    <p className="font-mono text-black/80 font-bold mb-8 max-w-2xl mx-auto text-xs">
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
