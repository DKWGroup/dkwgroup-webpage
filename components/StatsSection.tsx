"use client";

import Image from "next/image";
import { useEffect, useRef, useCallback } from "react";
import { useTranslations } from "next-intl";

export default function StatsSection() {
    const sectionRef = useRef<HTMLElement>(null);
    const parallaxRef = useRef<HTMLDivElement>(null);
    const rafRef = useRef<number | null>(null);
    const t = useTranslations("StatsSection");

    const updateParallax = useCallback(() => {
        if (!sectionRef.current || !parallaxRef.current) return;
        const rect = sectionRef.current.getBoundingClientRect();
        const scrollPercent = (window.innerHeight - rect.top) / (window.innerHeight + rect.height);
        parallaxRef.current.style.transform = `translateY(${(scrollPercent - 0.5) * 100}px)`;
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            if (rafRef.current) cancelAnimationFrame(rafRef.current);
            rafRef.current = requestAnimationFrame(updateParallax);
        };
        window.addEventListener("scroll", handleScroll, { passive: true });
        updateParallax(); // initial call
        return () => {
            window.removeEventListener("scroll", handleScroll);
            if (rafRef.current) cancelAnimationFrame(rafRef.current);
        };
    }, [updateParallax]);

    return (
        <section ref={sectionRef} className="py-16 bg-[#050505] border-b border-[#333] relative overflow-hidden">

            {/* Background image with parallax and darkening overlay */}
            <div className="absolute inset-0 z-0 overflow-hidden">
                <div
                    ref={parallaxRef}
                    className="absolute inset-0 w-full h-[150%]"
                    style={{ willChange: 'transform' }}
                >
                    <Image
                        src="/portfolio-photos/e364656d-2780-4a39-ab5d-4edddd77a4d5_rw_600.webp"
                        alt=""
                        fill
                        sizes="100vw"
                        quality={50}
                        className="object-cover brightness-[0.18] blur-[1px]"
                    />
                </div>
                {/* Dark overlay to ensure text readability */}
                <div className="absolute inset-0 bg-black/40 z-10"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">

                    <div className="flex flex-col items-center md:items-start group">
                        <div className="text-3xl lg:text-4xl font-bold font-sans text-white mb-3 tracking-tighter w-full border-b-2 border-[#333] pb-3 group-hover:border-[var(--color-brand-orange)] transition-colors inline-block decoration-2">
                            <span className="text-[var(--color-brand-orange)]">{t("stat_1_value")}</span> {t("stat_1_title")}
                        </div>
                        <p className="text-gray-400 font-mono text-sm leading-relaxed max-w-sm mt-2">
                            {t("stat_1_desc")}
                        </p>
                    </div>

                    <div className="flex flex-col items-center md:items-start group">
                        <div className="text-4xl lg:text-5xl font-bold font-sans text-white mb-4 tracking-tighter w-full border-b-2 border-[#333] pb-4 group-hover:border-[var(--color-brand-orange)] transition-colors inline-block decoration-2">
                            <span className="text-[var(--color-brand-orange)]">{t("stat_2_value")}</span> {t("stat_2_title")}
                        </div>
                        <p className="text-gray-400 font-mono text-sm leading-relaxed max-w-sm mt-2">
                            {t("stat_2_desc")}
                        </p>
                    </div>

                    <div className="flex flex-col items-center md:items-start group">
                        <div className="text-4xl lg:text-5xl font-bold font-sans text-white mb-4 tracking-tighter w-full border-b-2 border-[#333] pb-4 group-hover:border-[var(--color-brand-orange)] transition-colors inline-block decoration-2">
                            <span className="text-[var(--color-brand-orange)]">{t("stat_3_value")}</span> {t("stat_3_title")}
                        </div>
                        <p className="text-gray-400 font-mono text-sm leading-relaxed max-w-sm mt-2">
                            {t("stat_3_desc")}
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
}
