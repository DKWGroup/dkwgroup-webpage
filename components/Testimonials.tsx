"use client";

import { ShieldCheck } from "lucide-react";
import { useTranslations } from "next-intl";

export default function Testimonials() {
    const t = useTranslations("Testimonials");
    const testimonialsCount = 6;

    return (
        <section className="py-16 bg-[#0a0a0a] border-b border-[#333] relative overflow-hidden">

            {/* Background Video - directly on section, no wrapper */}
            <video
                src="/videos/na strone.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover z-0 opacity-40 brightness-75 pointer-events-none"
            />

            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/60 z-[1] pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold font-sans tracking-tight uppercase text-white mb-5">
                        {t("heading_1")} <span className="text-[var(--color-brand-orange)]">{t("heading_2")}</span>
                    </h2>
                    <p className="text-gray-400 font-mono text-sm leading-relaxed max-w-3xl mx-auto">
                        {t("description")}
                    </p>
                    <div className="w-20 h-1.5 bg-[var(--color-brand-orange)] mx-auto mt-6"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {Array.from({ length: testimonialsCount }).map((_, index) => (
                        <div
                            key={index}
                            className="bg-black border border-[#333] p-6 flex flex-col brutal-shadow hover:border-[var(--color-brand-orange)] transition-colors relative overflow-hidden group h-full"
                        >
                            <div className="relative z-10 text-[var(--color-brand-orange)] text-3xl font-serif mb-3 leading-none">"</div>
                            <p className="relative z-10 text-gray-300 font-mono text-sm leading-relaxed mb-6 flex-grow">
                                {t(`items.${index}.text`)}
                            </p>
                            <div className="relative z-10 mt-auto border-t border-[#333] pt-4">
                                <div className="flex items-center gap-2 mb-1">
                                    <h4 className="text-white font-bold font-sans uppercase tracking-wide">{t(`items.${index}.name`)}</h4>
                                    <ShieldCheck className="w-4 h-4 text-emerald-500" />
                                </div>
                                <p className="text-gray-500 font-mono text-xs">{t(`items.${index}.role`)}</p>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
