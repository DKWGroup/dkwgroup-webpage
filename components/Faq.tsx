"use client";

import { useState } from "react";
import { Link } from "@/src/i18n/routing";
import { Plus, Minus, ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";

const FAQ_COUNT = 5;

export default function Faq() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);
    const t = useTranslations("Faq");

    return (
        <section id="faq" className="py-16 bg-[#050505] border-b border-[#333]">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold font-sans tracking-tight uppercase text-white mb-5">
                        {t("heading_1")} <span className="text-[var(--color-brand-orange)]">{t("heading_2")}</span>
                    </h2>
                    <p className="text-gray-400 font-mono text-sm leading-relaxed max-w-2xl mx-auto">
                        {t("subtitle")}
                    </p>
                </div>

                <div className="space-y-4 mb-14">
                    {Array.from({ length: FAQ_COUNT }).map((_, index) => (
                        <div
                            key={index}
                            className={`border border-[#333] bg-[#0a0a0a] transition-all duration-200 ${openIndex === index ? 'border-[var(--color-brand-orange)] brutal-shadow' : 'hover:border-gray-500'}`}
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                            >
                                <span className={`font-bold font-sans tracking-wide uppercase pr-4 ${openIndex === index ? 'text-[var(--color-brand-orange)]' : 'text-white'}`}>
                                    {t(`items.${index}.question`)}
                                </span>
                                <span className={`flex-shrink-0 w-8 h-8 flex items-center justify-center border transition-colors ${openIndex === index ? 'border-[var(--color-brand-orange)] text-[var(--color-brand-orange)]' : 'border-[#333] text-gray-500'}`}>
                                    {openIndex === index ? <Minus size={16} /> : <Plus size={16} />}
                                </span>
                            </button>

                            <div
                                className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
                            >
                                <div className="p-6 pt-0 border-t border-[#222] mt-4">
                                    <p className="text-gray-400 font-mono text-sm leading-relaxed">
                                        {t(`items.${index}.answer`)}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* CTA Section */}
                <div className="bg-[#0a0a0a] border-2 border-[var(--color-brand-orange)] p-6 md:p-10 brutal-shadow text-center relative overflow-hidden">
                    {/* Decorative lines */}
                    <div className="absolute top-0 left-0 w-full h-1 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyMCAyMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMiIgaGVpZ2h0PSIyMCIgZmlsbD0iI0ZGQTUwMCIgLz48L3N2Zz4=')] opacity-20"></div>

                    <h3 className="text-2xl font-bold font-sans tracking-tight uppercase text-white mb-3 relative z-10">
                        {t("ctaTitle")}
                    </h3>
                    <p className="text-gray-400 font-mono text-sm leading-relaxed mb-6 max-w-2xl mx-auto relative z-10">
                        {t("ctaDescription")}
                    </p>
                    <Link
                        href="/kontakt"
                        className="inline-flex items-center justify-center px-8 py-4 bg-[var(--color-brand-orange)] text-black font-bold uppercase tracking-wider hover:bg-[var(--color-brand-orange-hover)] transition-colors relative z-10 text-sm font-mono shadow-[4px_4px_0_0_#fff]"
                    >
                        {t("ctaButton")}
                        <ArrowRight className="ml-2 w-5 h-5" />
                    </Link>
                </div>

            </div>
        </section>
    );
}
