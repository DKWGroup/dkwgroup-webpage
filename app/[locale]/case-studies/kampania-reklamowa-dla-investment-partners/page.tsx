"use client";

import Contact from "@/components/Contact";
import { Link } from "@/src/i18n/routing";
import { ArrowLeft, CheckCircle2, Image as ImageIcon } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import { useTranslations } from "next-intl";

export default function InvestmentPartnersCaseStudyPage() {
    const t = useTranslations("InvestmentPartnersCaseStudy");

    // Realization items mapping
    const realizationKeys = ["0", "1"] as const;
    const resultsKeys = ["0", "1", "2", "3"] as const;

    return (
        <>
            <article className="bg-[#050505] min-h-screen text-white pt-24 pb-16 border-b border-[#333]">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

                    <Link href="/case-studies" className="inline-flex items-center text-xs font-mono font-bold text-gray-500 hover:text-[var(--color-brand-orange)] transition-colors uppercase tracking-widest mb-12 group">
                        <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                        {t("back")}
                    </Link>

                    <header className="mb-16">
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 border border-[#333] bg-[#111] mb-6">
                            <span className="w-2 h-2 rounded-full bg-[var(--color-brand-orange)]"></span>
                            <span className="text-[10px] font-bold font-mono text-gray-400 uppercase tracking-widest">{t("industry")}</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-sans tracking-tighter text-white mb-6 leading-tight">
                            {t("title_main")} <br />
                            <span className="text-[var(--color-brand-orange)]">{t("title_sub")}</span>
                        </h1>
                    </header>

                    <AnimatedSection animation="fade-up" className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-20">
                        {/* Lewa kolumna: Podsumowanie */}
                        <div className="md:col-span-5">
                            <div className="bg-[#0a0a0a] border border-[#333] p-8 brutal-shadow h-full">
                                <h3 className="text-xl font-bold font-sans text-white uppercase tracking-tight mb-4">
                                    {t("summary_title")}
                                </h3>
                                <p className="font-mono text-sm leading-relaxed text-gray-400">
                                    {t("summary_desc")}
                                </p>
                            </div>
                        </div>

                        {/* Prawa kolumna: Wprowadzenie */}
                        <div className="md:col-span-7 flex flex-col justify-center">
                            <h2 className="text-2xl font-bold font-sans text-white mb-6 tracking-tight">{t("intro_title")}</h2>
                            <div className="font-sans text-gray-300 leading-relaxed space-y-4">
                                <p>
                                    {t("intro_p1")}
                                </p>
                            </div>
                        </div>
                    </AnimatedSection>

                    {/* Sekcja: Proces Realizacji */}
                    <section className="mb-24">
                        <AnimatedSection animation="fade-right">
                            <h2 className="text-3xl font-bold font-sans text-white mb-10 tracking-tighter uppercase border-b border-[#333] pb-6">
                                {t("realization_title")}
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                                {realizationKeys.map((key, index) => (
                                    <div key={key} className="bg-[#111] border border-[#333] p-8 group hover:border-[var(--color-brand-orange)] transition-colors relative overflow-hidden md:col-span-2">
                                        <div className="absolute top-4 right-4 text-7xl font-bold font-sans text-[#222] opacity-50 pointer-events-none group-hover:text-[var(--color-brand-orange)] group-hover:opacity-10 transition-colors">
                                            {String(index + 1).padStart(2, '0')}
                                        </div>
                                        <h3 className="text-xl font-bold text-white mb-4 relative z-10">{t(`realization_items.${key}.title`)}</h3>
                                        <p className="text-gray-400 font-mono text-sm leading-relaxed relative z-10 mb-4">
                                            {t(`realization_items.${key}.desc`)}
                                        </p>
                                        <ul className="list-disc list-inside text-gray-300 font-mono text-sm space-y-2 relative z-10 ml-2">
                                            {[0, 1, 2, 3, 4].map((itemIdx) => {
                                                try {
                                                    const item = t(`realization_items.${key}.list.${itemIdx}`);
                                                    if (item) return <li key={itemIdx}>{item}</li>;
                                                } catch (e) { }
                                                return null;
                                            })}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        </AnimatedSection>
                    </section>

                    {/* Wideo Instagram 1 - Pod sekcją proces realizacji */}
                    <div className="mb-24 flex justify-center">
                        <div className="w-full max-w-[400px] border-2 border-[#333] p-4 bg-[#111] brutal-shadow relative">
                            <div className="absolute top-2 right-2 w-6 h-6 border-t-2 border-r-2 border-[var(--color-brand-orange)] pointer-events-none"></div>
                            <div className="absolute bottom-2 left-2 w-6 h-6 border-b-2 border-l-2 border-[var(--color-brand-orange)] pointer-events-none"></div>
                            <div className="relative w-full pb-[177.77%] overflow-hidden">
                                <iframe
                                    src="https://www.instagram.com/reel/C_LTeycsanE/embed"
                                    className="absolute top-0 left-0 w-full h-full border-0"
                                    allowFullScreen
                                    scrolling="no"
                                    allowTransparency
                                />
                            </div>
                        </div>
                    </div>


                    {/* Sekcja: Wyniki */}
                    <section className="mb-24">
                        <AnimatedSection animation="fade-left" className="bg-[var(--color-brand-orange)] text-black p-10 md:p-14 brutal-shadow border border-[#333]">
                            <h2 className="text-4xl md:text-5xl font-bold font-sans uppercase tracking-tighter mb-10 text-center">
                                {t("results_title")}
                            </h2>
                            <p className="text-center font-bold mb-8 text-black opacity-80">
                                {t("results_subtitle")}
                            </p>
                            <div className="space-y-6 max-w-2xl mx-auto">
                                {resultsKeys.map((key) => (
                                    <div key={key} className="flex items-start gap-4 bg-black/10 p-4 border border-black/20">
                                        <CheckCircle2 className="w-8 h-8 flex-shrink-0 mt-1" />
                                        <p className="font-bold text-lg leading-snug">
                                            {t.raw(`results_items.${key}`).value && (
                                                <span className="text-2xl font-black block mb-1">{t(`results_items.${key}.value`)}</span>
                                            )}
                                            {t(`results_items.${key}.desc`)}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </AnimatedSection>
                    </section>

                    {/* Sekcja: Galeria Zdjęć */}
                    <section className="mb-24">
                        <AnimatedSection animation="fade-up">
                            <h2 className="text-3xl font-bold font-sans text-white mb-10 tracking-tighter uppercase border-b border-[#333] pb-6">
                                {t("gallery_title")}
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="aspect-video bg-[#111] border border-[#333] flex flex-col items-center justify-center text-gray-500 hover:border-[var(--color-brand-orange)] transition-colors group brutal-shadow">
                                    <ImageIcon className="w-12 h-12 mb-4 opacity-50 group-hover:opacity-100 group-hover:text-[var(--color-brand-orange)] transition-all" />
                                    <span className="font-mono text-sm uppercase tracking-widest">Gallery image 1</span>
                                </div>
                                <div className="aspect-video bg-[#111] border border-[#333] flex flex-col items-center justify-center text-gray-500 hover:border-[var(--color-brand-orange)] transition-colors group brutal-shadow">
                                    <ImageIcon className="w-12 h-12 mb-4 opacity-50 group-hover:opacity-100 group-hover:text-[var(--color-brand-orange)] transition-all" />
                                    <span className="font-mono text-sm uppercase tracking-widest">Thumbnail 1</span>
                                </div>
                            </div>
                        </AnimatedSection>
                    </section>

                    {/* Wideo Instagram 2 - Pod galerią zdjęć */}
                    <div className="mb-24 flex justify-center">
                        <div className="w-full max-w-[400px] border-2 border-[#333] p-4 bg-[#111] brutal-shadow relative">
                            <div className="absolute top-2 right-2 w-6 h-6 border-t-2 border-r-2 border-[var(--color-brand-orange)] pointer-events-none"></div>
                            <div className="absolute bottom-2 left-2 w-6 h-6 border-b-2 border-l-2 border-[var(--color-brand-orange)] pointer-events-none"></div>
                            <div className="relative w-full pb-[177.77%] overflow-hidden">
                                <iframe
                                    src="https://www.instagram.com/reel/C_ZFjBWt8fO/embed"
                                    className="absolute top-0 left-0 w-full h-full border-0"
                                    allowFullScreen
                                    scrolling="no"
                                    allowTransparency
                                />
                            </div>
                        </div>
                    </div>


                    {/* Sekcja: Wnioski i Podsumowanie */}
                    <AnimatedSection animation="fade-up" className="space-y-12">
                        <div>
                            <h2 className="text-3xl font-bold font-sans text-white mb-6 tracking-tighter uppercase border-b border-[#333] pb-6">
                                {t("conclusions_title")}
                            </h2>
                            <div className="font-sans text-gray-300 leading-relaxed space-y-4">
                                <p>
                                    {t("conclusions_desc")}
                                </p>
                                <ul className="list-disc list-inside text-gray-400 font-mono text-sm space-y-2 ml-2">
                                    {[0, 1, 2, 3].map((idx) => (
                                        <li key={idx}>{t(`conclusions_items.${idx}`)}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <div className="bg-[#0a0a0a] border-l-4 border-[var(--color-brand-orange)] p-8">
                            <h2 className="text-2xl font-bold font-sans text-white mb-4 tracking-tight uppercase">
                                {t("final_summary_title")}
                            </h2>
                            <p className="font-mono text-sm leading-relaxed text-gray-400 mb-8">
                                {t("final_summary_desc")}
                            </p>

                            <div className="pt-8 border-t border-[#333]">
                                <p className="font-bold text-white mb-4 uppercase tracking-widest text-sm">
                                    {t("cta_title")}
                                </p>
                                <p className="text-gray-400 font-mono text-xs mb-6">
                                    {t("cta_desc")}
                                </p>
                                <Link
                                    href="/kontakt"
                                    className="inline-flex items-center justify-center bg-[var(--color-brand-orange)] hover:bg-[#e65c00] text-black font-bold uppercase tracking-widest px-6 py-3 transition-colors font-sans text-xs brutal-shadow"
                                >
                                    {t("cta_button")}
                                </Link>
                            </div>
                        </div>
                    </AnimatedSection>

                </div>
            </article>
            <Contact />
        </>
    );
}
