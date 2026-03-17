"use client";

import { Link } from "@/src/i18n/routing";
import { ArrowRight, Phone } from "lucide-react";
import { useTranslations } from "next-intl";

export default function StatsCta() {
    const t = useTranslations("StatsCta");

    return (
        <section className="bg-[#050505] border-b border-[#333] relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
                <div className="flex flex-col md:flex-row items-center justify-between gap-8">

                    {/* Left: CTA text */}
                    <div className="flex items-center gap-5">
                        <div className="hidden sm:flex w-14 h-14 items-center justify-center border-2 border-[var(--color-brand-orange)] bg-[var(--color-brand-orange)]/10 flex-shrink-0">
                            <Phone className="w-6 h-6 text-[var(--color-brand-orange)]" />
                        </div>
                        <div>
                            <h3 className="text-xl md:text-2xl font-bold font-sans text-white uppercase tracking-tight">
                                {t("heading")} <span className="text-[var(--color-brand-orange)]">{t("heading_highlight")}</span>
                            </h3>
                            <p className="text-gray-400 font-mono text-sm mt-2 max-w-xl">
                                {t("description")}
                            </p>
                        </div>
                    </div>

                    {/* Right: CTA button */}
                    <Link
                        href="#kontakt"
                        className="inline-flex items-center justify-center px-8 py-4 bg-[var(--color-brand-orange)] text-black font-bold uppercase tracking-widest text-sm font-mono brutal-shadow hover:bg-[var(--color-brand-orange-hover)] transition-colors group whitespace-nowrap flex-shrink-0"
                    >
                        {t("cta")}
                        <ArrowRight className="ml-3 w-5 h-5 transition-transform group-hover:translate-x-2" />
                    </Link>

                </div>
            </div>
        </section>
    );
}
