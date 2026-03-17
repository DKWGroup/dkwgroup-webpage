"use client";

import Contact from "@/components/Contact";
import { Link } from "@/src/i18n/routing";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import Image from "next/image";
import AnimatedSection from "@/components/AnimatedSection";
import { useTranslations } from "next-intl";

export default function KokpitKamilaCaseStudyPage() {
    const t = useTranslations("KokpitKamilaCaseStudy");

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
                        <h2 className="text-2xl font-mono text-gray-400 uppercase tracking-widest mt-4">{t("client")}</h2>
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

                    {/* Sekcja: Strategia */}
                    <section className="mb-24">
                        <AnimatedSection animation="fade-right">
                            <h2 className="text-3xl font-bold font-sans text-white mb-10 tracking-tighter uppercase border-b border-[#333] pb-6">
                                {t("strategy_title")}
                            </h2>
                            <div className="bg-[#111] border border-[#333] p-8 md:p-12 brutal-shadow">
                                <p className="text-gray-300 font-mono text-base leading-relaxed mb-8">
                                    {t("strategy_desc")}
                                </p>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {[0, 1, 2, 3].map((index) => (
                                        <div key={index} className="border border-[#333] p-6 bg-[#050505] hover:border-[var(--color-brand-orange)] transition-colors">
                                            <div className="text-[var(--color-brand-orange)] font-bold text-xl mb-3">0{index + 1}</div>
                                            <p className="text-gray-400 font-mono text-sm">
                                                {t(`strategy_items.${index}`)}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </AnimatedSection>
                    </section>

                    {/* Sekcja: Realizacja */}
                    <section className="mb-24">
                        <AnimatedSection animation="fade-left">
                            <h2 className="text-3xl font-bold font-sans text-white mb-10 tracking-tighter uppercase border-b border-[#333] pb-6">
                                {t("realization_title")}
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="bg-[#111] border border-[#333] p-8 group hover:border-[var(--color-brand-orange)] transition-colors relative overflow-hidden md:col-span-2">
                                    <div className="absolute top-4 right-4 text-8xl font-bold font-sans text-[#222] opacity-50 pointer-events-none group-hover:text-[var(--color-brand-orange)] group-hover:opacity-10 transition-colors">R</div>
                                    <p className="text-gray-400 font-mono text-base leading-relaxed relative z-10 mb-6">
                                        {t("realization_desc")}
                                    </p>
                                    <ul className="list-disc list-inside text-gray-300 font-mono text-sm space-y-3 relative z-10 ml-2">
                                        {[0, 1, 2, 3, 4].map((idx) => (
                                            <li key={idx}>{t(`realization_items.${idx}`)}</li>
                                        ))}
                                    </ul>
                                    <div className="mt-8 pt-6 border-t border-[#333]">
                                        <p className="font-sans text-white leading-relaxed italic border-l-2 border-[var(--color-brand-orange)] pl-4">
                                            {t("realization_highlight")}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </AnimatedSection>
                    </section>

                    {/* Sekcja: Wyniki */}
                    <section className="mb-24">
                        <AnimatedSection animation="fade-up">
                            <div className="bg-[var(--color-brand-orange)] text-black p-10 md:p-14 brutal-shadow border border-[#333]">
                                <h2 className="text-4xl md:text-5xl font-bold font-sans uppercase tracking-tighter mb-10 text-center">
                                    {t("results_title")}
                                </h2>
                                <p className="text-center font-bold mb-8 text-black opacity-80 uppercase tracking-widest text-sm">
                                    {t("results_subtitle")}
                                </p>
                                <div className="space-y-6 max-w-2xl mx-auto">
                                    <div className="flex items-start gap-4 bg-black/10 p-4 border border-black/20 hover:bg-black/15 transition-colors">
                                        <CheckCircle2 className="w-8 h-8 flex-shrink-0 mt-1" />
                                        <p className="font-bold text-base md:text-lg leading-snug">
                                            <span className="text-2xl md:text-3xl font-black block mb-2">{t("results_items.0.value")}</span>
                                            {t("results_items.0.desc")}
                                        </p>
                                    </div>
                                    <div className="flex items-start gap-4 bg-black/10 p-4 border border-black/20 hover:bg-black/15 transition-colors">
                                        <CheckCircle2 className="w-8 h-8 flex-shrink-0 mt-1" />
                                        <p className="font-bold text-base md:text-lg leading-snug">
                                            <span className="text-2xl md:text-3xl font-black block mb-2">{t("results_items.1.value")}</span>
                                            {t("results_items.1.desc")}
                                        </p>
                                    </div>
                                    {[2, 3, 4].map((idx) => (
                                        <div key={idx} className="flex items-start gap-4 bg-black/10 p-4 border border-black/20">
                                            <CheckCircle2 className="w-6 h-6 flex-shrink-0 mt-1" />
                                            <p className="font-bold text-base leading-snug">
                                                {t(`results_items.${idx}`)}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </AnimatedSection>
                    </section>

                    {/* Sekcja: Wnioski i Podsumowanie */}
                    <section className="space-y-12 mb-24">
                        <AnimatedSection animation="fade-right">
                            <h2 className="text-3xl font-bold font-sans text-white mb-6 tracking-tighter uppercase border-b border-[#333] pb-6">
                                {t("conclusions_title")}
                            </h2>
                            <div className="font-sans text-gray-300 leading-relaxed space-y-4">
                                <p>
                                    {t("conclusions_desc")}
                                </p>
                                <ul className="list-disc list-inside text-gray-400 font-mono text-sm space-y-2 ml-2 mb-6">
                                    {[0, 1, 2, 3].map((idx) => (
                                        <li key={idx}>{t(`conclusions_items.${idx}`)}</li>
                                    ))}
                                </ul>
                                <div className="bg-[#111] border border-[#333] p-6 mt-6">
                                    <p className="font-mono text-sm text-gray-300 leading-relaxed italic border-l-2 border-[var(--color-brand-orange)] pl-4">
                                        {t("conclusions_highlight")}
                                    </p>
                                </div>
                            </div>
                        </AnimatedSection>
                    </section>

                    {/* Sekcja: Galeria Zdjęć */}
                    <section className="mb-24">
                        <AnimatedSection animation="fade-up">
                            <h2 className="text-3xl font-bold font-sans text-white mb-10 tracking-tighter uppercase border-b border-[#333] pb-6">
                                {t("gallery_title")}
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                {[
                                    "/casestudy-kokpitkamila/5f75cd15-9344-4900-9293-d01f74483bc4.webp",
                                    "/casestudy-kokpitkamila/80d52e2a-cf86-4909-975c-a967fdb5ff98.webp",
                                    "/casestudy-kokpitkamila/aa42a3c6-4de8-4dc3-a009-6e0673799ec8.webp"
                                ].map((src, idx) => (
                                    <div key={idx} className="relative w-full aspect-square border-2 border-[#333] hover:border-[var(--color-brand-orange)] transition-colors brutal-shadow overflow-hidden group">
                                        <Image
                                            src={src}
                                            alt={`Galeria ${idx + 1}`}
                                            fill
                                            className="object-cover transition-all duration-500 group-hover:scale-105"
                                        />
                                    </div>
                                ))}
                            </div>
                        </AnimatedSection>
                    </section>

                    {/* CTA Footer */}
                    <section>
                        <AnimatedSection animation="fade-up" className="bg-[#0a0a0a] border-l-4 border-[var(--color-brand-orange)] p-8">
                            <div className="pt-2">
                                <p className="font-bold text-white mb-4 uppercase tracking-widest text-base">
                                    {t("cta_title")}
                                </p>
                                <p className="text-gray-400 font-mono text-sm mb-6">
                                    {t("cta_desc")}
                                </p>
                                <Link
                                    href="/kontakt"
                                    className="inline-flex items-center justify-center bg-[var(--color-brand-orange)] hover:bg-[#e65c00] text-black font-bold uppercase tracking-widest px-8 py-4 transition-colors font-sans text-sm brutal-shadow"
                                >
                                    {t("cta_button")}
                                </Link>
                            </div>
                        </AnimatedSection>
                    </section>

                </div>
            </article>
            <Contact />
        </>
    );
}
