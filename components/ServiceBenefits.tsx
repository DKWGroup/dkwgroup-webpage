import { ArrowUpRight } from "lucide-react";
import { Link } from "@/src/i18n/routing";
import { useTranslations } from "next-intl";

export default function ServiceBenefits() {
    const t = useTranslations("ServiceBenefits");

    return (
        <section className="py-24 bg-[#0a0a0a] border-b border-[#333]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold font-sans tracking-tight uppercase text-white mb-4">
                        {t("heading_1")} <span className="text-[var(--color-brand-orange)]">{t("heading_2")}</span>
                    </h2>
                    <p className="text-gray-400 font-mono text-sm leading-relaxed max-w-2xl mx-auto">
                        {t("description")}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {[0, 1, 2, 3, 4].map((index) => (
                        <div
                            key={index}
                            className="group flex items-start gap-4 p-6 bg-[#050505] border border-[#222] hover:border-[var(--color-brand-orange)] transition-colors brutal-shadow cursor-default"
                        >
                            <div className="flex-shrink-0 mt-1">
                                <ArrowUpRight className="w-6 h-6 text-[var(--color-brand-orange)] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                            </div>
                            <p className="font-mono text-gray-300 text-sm leading-relaxed group-hover:text-white transition-colors">
                                {t(`benefits.${index}`)}
                            </p>
                        </div>
                    ))}

                    {/* CTA Box filling the grid layout if necessary */}
                    <div className="group flex flex-col justify-center items-center gap-4 p-6 bg-[var(--color-brand-orange)] border border-[var(--color-brand-orange)] hover:bg-[#e65c00] transition-colors brutal-shadow cursor-pointer text-center">
                        <h3 className="text-black font-bold font-sans uppercase tracking-widest text-lg">{t("cta_title")}</h3>
                        <Link
                            href="#kontakt"
                            className="inline-flex items-center text-black font-mono text-xs font-bold uppercase tracking-widest border-b border-black pb-1 hover:opacity-70 transition-opacity"
                        >
                            {t("cta_button")}
                        </Link>
                    </div>
                </div>

            </div>
        </section>
    );
}
