"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { m, LazyMotion, domAnimation } from "framer-motion";

export default function CaseStudiesHero() {
    const t = useTranslations("CaseStudiesHero");

    return (
        <LazyMotion features={domAnimation}>
            <section className="relative bg-[#050505] border-b border-[#333] pt-32 pb-24 overflow-hidden">
                {/* Background photo */}
                <Image
                    src="/portfolio-photos/50ffcd83-52fc-437e-a7ec-b38bc1e63a36_rw_600.webp"
                    alt=""
                    fill
                    className="object-cover opacity-25"
                    priority
                />
                {/* Dark overlay */}
                <div className="absolute inset-0 z-[1] bg-gradient-to-r from-black/80 via-black/60 to-black/40 pointer-events-none"></div>
                <div className="absolute inset-0 z-[1] bg-gradient-to-t from-[#050505] via-transparent to-transparent pointer-events-none"></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="max-w-3xl">
                        <m.div 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="inline-flex items-center gap-2 px-3 py-1.5 border border-[#333] bg-black/50 backdrop-blur-sm max-w-max mb-6"
                        >
                            <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-brand-orange)] animate-pulse"></span>
                            <span className="text-[10px] font-bold font-mono text-[var(--color-brand-orange)] uppercase tracking-widest">{t("badge")}</span>
                        </m.div>

                        <m.h1 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="text-4xl md:text-5xl lg:text-7xl font-black font-sans text-white uppercase tracking-tighter mb-6 leading-[0.9]"
                        >
                            {t("heading_1")}<br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-brand-orange)] to-[#ff8c33]">
                                {t("heading_2")}
                            </span>
                        </m.h1>

                        <m.p 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="text-gray-400 font-mono text-sm md:text-base leading-relaxed max-w-lg"
                        >
                            {t("description")}
                        </m.p>
                    </div>
                </div>
            </section>
        </LazyMotion>
    );
}
