"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { useTranslations } from "next-intl";

export default function ServiceFaq() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);
    const t = useTranslations("ServiceFaq");

    return (
        <section className="py-24 bg-[#050505] border-b border-[#333]">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold font-sans tracking-tight uppercase text-white mb-6">
                        {t("heading_1")} <span className="text-[var(--color-brand-orange)]">{t("heading_2")}</span>
                    </h2>
                    <p className="text-gray-400 font-mono text-sm leading-relaxed max-w-2xl mx-auto">
                        {t("description")}
                    </p>
                </div>

                <div className="space-y-4">
                    {[0, 1, 2, 3, 4].map((index) => (
                        <div
                            key={index}
                            className={`border border-[#333] bg-[#0a0a0a] transition-all duration-200 ${openIndex === index ? 'border-[var(--color-brand-orange)] brutal-shadow' : 'hover:border-gray-500'}`}
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full flex items-center justify-between p-6 text-left focus:outline-none focus:bg-[#111]"
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

            </div>
        </section>
    );
}
