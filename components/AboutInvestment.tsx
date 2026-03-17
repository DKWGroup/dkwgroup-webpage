"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";

export default function AboutInvestment() {
    const t = useTranslations("AboutInvestment");

    return (
        <section className="py-16 bg-[#050505] border-b border-[#333] relative overflow-hidden">

            {/* Przeogromna ikona ludzików - SVG directly for maximum control */}
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.3"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="absolute pointer-events-none z-0 text-gray-400"
                style={{
                    top: '-10%',
                    left: '-15%',
                    width: '80%',
                    height: '120%',
                    opacity: 0.05,
                }}
            >
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                    <div className="order-2 lg:order-2 relative">
                        <div className="bg-[#111] border border-[#333] brutal-shadow overflow-hidden group relative">
                            <Image
                                src="/portfolio-photos/afe7f77f-5905-458a-9fd4-f1c90174a269_rw_600.webp"
                                alt="DKW Group Współpraca"
                                width={800}
                                height={600}
                                className="w-full h-auto object-contain transition-all duration-700 group-hover:scale-[1.03]"
                            />
                        </div>
                        <div className="absolute -top-6 -right-6 w-24 h-24 border-t-4 border-r-4 border-[var(--color-brand-orange)] -z-10"></div>
                        <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-[#222] -z-10"></div>
                    </div>

                    <div className="order-1 lg:order-1">
                        <h2 className="text-3xl md:text-4xl font-bold font-sans tracking-tight mb-6 uppercase text-white leading-tight">
                            {t("heading_1")} <span className="text-[var(--color-brand-orange)]">{t("heading_2")}</span>
                        </h2>

                        <p className="text-gray-400 font-mono text-base leading-relaxed mb-5">
                            {t("paragraph_1")}
                        </p>
                        <p className="text-gray-400 font-mono text-base leading-relaxed mb-8">
                            {t("paragraph_2")}
                        </p>

                        <div className="border-l-4 border-[var(--color-brand-orange)] pl-6 py-2 relative z-10">
                            <p className="text-xl font-bold text-white mb-2 font-sans">
                                {t("highlight_title")}
                            </p>
                            <p className="text-gray-400 font-mono text-sm leading-relaxed">
                                {t("highlight_desc")}
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
