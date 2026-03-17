import { Link } from "@/src/i18n/routing";
import { ArrowRight, Mic, Video, Share2, Headphones, Layers, CheckCircle2, PlayCircle, ExternalLink } from "lucide-react";
import Contact from "@/components/Contact";
import PodcastFaq from "@/components/PodcastFaq";
import { useTranslations } from "next-intl";
import AnimatedSection from "@/components/AnimatedSection";

export default function PodcastServicePage() {
    const t = useTranslations("PodcastServicePage");

    const OFFER_ICONS = [
        <Mic key="mic" />, <Layers key="layers" />, <Share2 key="share" />, <Headphones key="headphones" />
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

            {/* Reklama Studio Zewnętrznego */}
            <section className="py-12 bg-black border-b border-[#333]">
                <AnimatedSection animation="fade-left" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="border-l-4 border-[var(--color-brand-orange)] bg-[#0a0a0a] p-8 md:p-12 brutal-shadow flex flex-col md:flex-row items-center justify-between gap-8 group">
                        <div className="max-w-2xl">
                            <h2 className="text-2xl md:text-3xl font-bold uppercase tracking-tight text-white mb-2">
                                {t("studio_title_1")} <span className="text-[var(--color-brand-orange)]">{t("studio_title_2")}</span>
                            </h2>
                            <p className="text-gray-400 font-mono text-sm mt-4">
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

            {/* Kompleksowa obsługa */}
            <section className="py-24 bg-[#050505] border-b border-[#333]">
                <AnimatedSection animation="fade-up" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold font-sans text-white mb-4 tracking-tight uppercase">
                            {t("offer_title_1")} <span className="text-[var(--color-brand-orange)]">{t("offer_title_2")}</span>
                        </h2>
                        <p className="text-gray-400 font-mono text-sm leading-relaxed max-w-2xl mx-auto">
                            {t("offer_desc")}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {Array.from({ length: 4 }).map((_, idx) => (
                            <div key={idx} className="bg-[#0a0a0a] border border-[#333] p-8 brutal-shadow group hover:border-[var(--color-brand-orange)] transition-colors">
                                <div className="text-[var(--color-brand-orange)] mb-6 group-hover:scale-110 transition-transform origin-left">
                                    {OFFER_ICONS[idx]}
                                </div>
                                <h3 className="text-lg font-bold text-white mb-4 uppercase tracking-wide">{t(`offer_items.${idx}.title`)}</h3>
                                <p className="text-gray-400 font-mono text-xs leading-relaxed">{t(`offer_items.${idx}.desc`)}</p>
                            </div>
                        ))}
                    </div>
                </AnimatedSection>
            </section>

            {/* Nasze realizacje / Case Studies widget */}
            <section className="py-24 bg-[#0a0a0a] border-b border-[#333]">
                <AnimatedSection animation="fade-right" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold font-sans text-white mb-4 tracking-tight uppercase">
                            {t("projects_title_1")} <span className="text-[var(--color-brand-orange)]">{t("projects_title_2")}</span>
                        </h2>
                        <p className="text-gray-400 font-mono text-sm leading-relaxed max-w-2xl">
                            {t("projects_desc")}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                        {/* Case Study 1 */}
                        <div className="bg-[#111] border border-[#333] p-8 brutal-shadow relative group hover:border-[var(--color-brand-orange)] transition-colors flex flex-col h-full">
                            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-100 group-hover:text-[var(--color-brand-orange)] transition-all pointer-events-none">
                                <PlayCircle className="w-16 h-16" />
                            </div>
                            <div className="inline-flex items-center gap-2 px-3 py-1.5 border border-[#333] bg-black max-w-max mb-6">
                                <span className="text-[10px] font-bold font-mono text-gray-400 uppercase tracking-widest">{t("projects_items.0.badge")}</span>
                            </div>
                            <h3 className="text-2xl font-bold font-sans text-white uppercase tracking-tight mb-2">{t("projects_items.0.title")}</h3>
                            <p className="text-[var(--color-brand-orange)] font-mono text-xs uppercase tracking-widest font-bold mb-6">{t("projects_items.0.category")}</p>
                            <p className="text-gray-400 font-mono text-sm leading-relaxed mb-8 flex-grow">
                                {t("projects_items.0.desc")}
                            </p>
                            <Link
                                href="/case-studies/obsluga-kanalu-grzegorz-kusz-agent-specjalny"
                                className="inline-flex items-center justify-between border-t border-[#333] pt-4 font-mono text-xs font-bold text-white uppercase tracking-widest hover:text-[var(--color-brand-orange)] transition-colors w-full"
                            >
                                {t("projects_items.0.cta")}
                                <ArrowRight className="w-4 h-4 ml-2 opacity-50 text-[var(--color-brand-orange)]" />
                            </Link>
                        </div>

                        {/* Case Study 2 */}
                        <div className="bg-[#111] border border-[#333] p-8 brutal-shadow relative group hover:border-[var(--color-brand-orange)] transition-colors flex flex-col h-full">
                            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-100 group-hover:text-[var(--color-brand-orange)] transition-all pointer-events-none">
                                <PlayCircle className="w-16 h-16" />
                            </div>
                            <div className="inline-flex items-center gap-2 px-3 py-1.5 border border-[#333] bg-black max-w-max mb-6">
                                <span className="text-[10px] font-bold font-mono text-gray-400 uppercase tracking-widest">{t("projects_items.1.badge")}</span>
                            </div>
                            <h3 className="text-2xl font-bold font-sans text-white uppercase tracking-tight mb-2">{t("projects_items.1.title")}</h3>
                            <p className="text-[var(--color-brand-orange)] font-mono text-xs uppercase tracking-widest font-bold mb-6">{t("projects_items.1.category")}</p>
                            <p className="text-gray-400 font-mono text-sm leading-relaxed mb-8 flex-grow">
                                {t("projects_items.1.desc")}
                            </p>
                            <Link
                                href="/case-studies"
                                className="inline-flex items-center justify-between border-t border-[#333] pt-4 font-mono text-xs font-bold text-white uppercase tracking-widest hover:text-[var(--color-brand-orange)] transition-colors w-full"
                            >
                                {t("projects_items.1.cta")}
                                <ArrowRight className="w-4 h-4 ml-2 opacity-50 text-[var(--color-brand-orange)]" />
                            </Link>
                        </div>
                    </div>
                </AnimatedSection>
            </section>

            {/* Nasze Studio & Korzyści*/}
            <section className="py-24 bg-[#050505] border-b border-[#333]">
                <AnimatedSection animation="fade-up" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

                        {/* Nasze Studio */}
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold font-sans text-white mb-6 tracking-tight uppercase border-b border-[#333] pb-6">
                                {t("equipment_title_1")} <span className="text-[var(--color-brand-orange)]">{t("equipment_title_2")}</span>
                            </h2>
                            <p className="text-gray-400 font-mono text-sm leading-relaxed mb-8">
                                {t("equipment_desc")}
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                                {Array.from({ length: 8 }).map((_, idx) => (
                                    <div key={idx} className="flex items-start gap-3 border border-[#333] p-3 text-sm font-mono text-gray-300">
                                        <CheckCircle2 className="w-5 h-5 text-[var(--color-brand-orange)] flex-shrink-0" />
                                        <span>{t(`equipment_items.${idx}`)}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="bg-[#111] border border-[#333] p-6 brutal-shadow text-center">
                                <h4 className="text-[var(--color-brand-orange)] font-bold uppercase mb-2">{t("equipment_box_1.title")}</h4>
                                <p className="font-mono text-xs text-gray-400 mb-4">{t("equipment_box_1.desc")}</p>
                                <hr className="border-[#333] my-4" />
                                <h4 className="text-[var(--color-brand-orange)] font-bold uppercase mb-2">{t("equipment_box_2.title")}</h4>
                                <p className="font-mono text-xs text-gray-400">{t("equipment_box_2.desc")}</p>
                            </div>
                        </div>

                        {/* Korzyści */}
                        <div className="bg-[#0a0a0a] border border-[#333] p-8 md:p-12 brutal-shadow">
                            <h2 className="text-3xl md:text-4xl font-bold font-sans text-white mb-6 tracking-tight uppercase">
                                {t("benefits_title_1")} <span className="text-[var(--color-brand-orange)]">{t("benefits_title_2")}</span>
                            </h2>
                            <p className="text-gray-400 font-mono text-sm leading-relaxed mb-8">
                                {t("benefits_desc")}
                            </p>

                            <div className="space-y-4 mb-10">
                                {Array.from({ length: 5 }).map((_, i) => (
                                    <div key={i} className="flex gap-4 p-4 border-l-4 border-[var(--color-brand-orange)] bg-[#111] hover:bg-[#1a1a1a] transition-colors">
                                        <p className="text-white font-mono text-xs leading-relaxed">{t(`benefits_items.${i}`)}</p>
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

            {/* Zunifikowane FAQ */}
            <AnimatedSection animation="reveal">
                <PodcastFaq />
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
