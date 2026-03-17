import { CheckSquare } from "lucide-react";
import { useTranslations } from "next-intl";

export default function WhyUs() {
    const t = useTranslations("WhyUs");
    const numItems = 6;

    return (
        <section className="py-24 bg-[#0a0a0a] border-b border-[#333]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold font-sans tracking-tight uppercase text-white mb-6">
                        {t("heading_1")} <span className="text-[var(--color-brand-orange)]">{t("heading_2")}</span> {t("heading_3")}
                    </h2>
                    <p className="text-gray-400 font-mono text-sm leading-relaxed max-w-3xl mx-auto">
                        {t("description")}
                    </p>
                    <div className="w-24 h-2 bg-[var(--color-brand-orange)] mx-auto mt-8"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {Array.from({ length: numItems }).map((_, index) => (
                        <div
                            key={index}
                            className="bg-[#050505] border border-[#333] p-6 hover:border-[var(--color-brand-orange)] transition-all flex items-start gap-4 brutal-shadow group"
                        >
                            <div className="flex-shrink-0 mt-1">
                                <CheckSquare className="w-6 h-6 text-[var(--color-brand-orange)] group-hover:scale-110 transition-transform" />
                            </div>
                            <div>
                                <h3 className="text-lg font-bold font-sans tracking-wide uppercase text-white mb-2 group-hover:text-[var(--color-brand-orange)] transition-colors">
                                    {t(`items.${index}.title`)}
                                </h3>
                                <p className="text-gray-400 font-mono text-sm leading-relaxed">
                                    {t(`items.${index}.desc`)}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
