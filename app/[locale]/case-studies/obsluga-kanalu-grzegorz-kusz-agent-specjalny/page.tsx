"use client";

import Contact from "@/components/Contact";
import { Link } from "@/src/i18n/routing";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import Image from "next/image";
import AnimatedSection from "@/components/AnimatedSection";
import { useTranslations } from "next-intl";

export default function GrzegorzKuszCaseStudyPage() {
    const t = useTranslations("GrzegorzKuszCaseStudy");

    // Realization items mapping
    const realizationKeys = ["1", "2", "3", "4", "5"] as const;
    const resultsKeys = ["0", "1", "2"] as const;

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
                        <div className="mt-8 relative w-full aspect-video border-2 border-[#333] brutal-shadow overflow-hidden">
                            <Image
                                src="/casestudy-kusz/9b006bf7-ecaf-4fd9-b67c-020b154cf73b.webp"
                                alt="Grzegorz Kusz Header"
                                fill
                                className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                            />
                        </div>
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

                                {realizationKeys.map((key) => (
                                    <div key={key} className={`bg-[#111] border border-[#333] p-8 group hover:border-[var(--color-brand-orange)] transition-colors relative overflow-hidden ${key === "5" ? "md:col-span-2" : ""}`}>
                                        <div className="absolute top-4 right-4 text-6xl font-bold font-sans text-[#222] opacity-50 pointer-events-none group-hover:text-[var(--color-brand-orange)] group-hover:opacity-10 transition-colors">
                                            {key.padStart(2, '0')}
                                        </div>
                                        <h3 className="text-xl font-bold text-white mb-4 relative z-10">{t(`realization_items.${key}.title`)}</h3>
                                        <p className="text-gray-400 font-mono text-sm leading-relaxed relative z-10">
                                            {t(`realization_items.${key}.desc`)}
                                        </p>
                                    </div>
                                ))}

                            </div>
                        </AnimatedSection>
                    </section>

                    {/* Sekcja: Wyniki */}
                    <AnimatedSection animation="fade-left" className="mb-24">
                        <div className="bg-[var(--color-brand-orange)] text-black p-10 md:p-14 brutal-shadow border border-[#333]">
                            <h2 className="text-4xl md:text-5xl font-bold font-sans uppercase tracking-tighter mb-10 text-center">
                                {t("results_title")}
                            </h2>
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
                            <div className="mt-12 text-center">
                                <a
                                    href="https://www.youtube.com/@AgentSpecjalny"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center justify-center bg-black hover:bg-[#222] text-white font-bold uppercase tracking-widest px-8 py-4 transition-colors font-sans brutal-shadow text-sm"
                                >
                                    {t("view_channel")}
                                </a>
                            </div>
                        </div>
                    </AnimatedSection>

                    {/* Sekcja: Wnioski i Podsumowanie */}
                    <AnimatedSection animation="fade-up" className="space-y-12">
                        <div>
                            <h2 className="text-3xl font-bold font-sans text-white mb-6 tracking-tighter uppercase border-b border-[#333] pb-6">
                                {t("conclusions_title")}
                            </h2>
                            <div className="font-sans text-gray-300 leading-relaxed space-y-4">
                                <p>
                                    {t("conclusions_p1")}
                                </p>
                                <p>
                                    {t("conclusions_p2")}
                                </p>
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
