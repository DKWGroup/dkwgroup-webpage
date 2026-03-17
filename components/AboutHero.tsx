"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";

export default function AboutHero() {
    const t = useTranslations("AboutHero");

    return (
        <section className="relative pt-28 pb-16 bg-[#0a0a0a] border-b border-[#333] overflow-hidden">
            {/* Background image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/photos/IMG_2596.webp"
                    alt="Praca DKW Group od kulis"
                    fill
                    sizes="100vw"
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-[#0a0a0a]"></div>
            </div>

            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center py-12 md:py-20">
                    <div className="w-16 h-1 bg-[var(--color-brand-orange)] mx-auto mb-8"></div>
                    <h1 className="text-4xl md:text-5xl font-bold font-sans tracking-tight uppercase text-white mb-5 leading-tight">
                        {t("heading_1")} <span className="text-[var(--color-brand-orange)]">{t("heading_2")}</span>
                    </h1>
                    <p className="text-gray-300 font-mono text-base leading-relaxed max-w-2xl mx-auto">
                        {t("description")}
                    </p>
                </div>
            </div>
        </section>
    );
}
