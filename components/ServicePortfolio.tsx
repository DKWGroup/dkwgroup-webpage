import { Link } from "@/src/i18n/routing";
import { ArrowRight, Play } from "lucide-react";
import { useTranslations } from "next-intl";

const LINKS = [
    "#case-study-ip",
    "#case-study-kokpit"
];

export default function ServicePortfolio() {
    const t = useTranslations("ServicePortfolio");

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

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
                    {Array.from({ length: 2 }).map((_, index) => (
                        <div
                            key={index}
                            className="bg-[#050505] border border-[#333] hover:border-[var(--color-brand-orange)] transition-colors brutal-shadow p-6 flex flex-col group"
                        >
                            <div className="w-full aspect-video bg-[#111] border border-[#222] mb-6 relative overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-300">
                                <div className="absolute inset-0 bg-black opacity-30 group-hover:opacity-10 transition-opacity"></div>
                                {/* Play Button */}
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-[var(--color-brand-orange)] rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <Play className="w-8 h-8 text-black ml-1" fill="currentColor" />
                                </div>
                            </div>

                            <h3 className="text-2xl font-bold font-sans tracking-tight text-white mb-4 group-hover:text-[var(--color-brand-orange)] transition-colors">
                                {t(`items.${index}.title`)}
                            </h3>
                            <span className="text-[var(--color-brand-orange)] font-mono text-xs font-bold uppercase tracking-widest mb-4">
                                {t(`items.${index}.category`)}
                            </span>
                            <p className="text-gray-400 font-mono text-sm leading-relaxed mb-8 flex-grow">
                                {t(`items.${index}.description`)}
                            </p>

                            <div className="mt-auto border-t border-[#333] pt-4">
                                <Link
                                    href={LINKS[index]}
                                    className="inline-flex items-center text-gray-400 font-mono text-xs font-bold uppercase tracking-widest group-hover:text-[var(--color-brand-orange)] transition-colors"
                                >
                                    {t("viewCaseStudy")}
                                    <ArrowRight className="ml-2 w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center">
                    <Link
                        href="/projekty"
                        className="inline-flex items-center text-gray-400 hover:text-white transition-colors bg-[#111] border border-[#333] hover:border-[var(--color-brand-orange)] px-6 py-3 font-mono text-xs uppercase tracking-widest brutal-shadow"
                    >
                        {t("viewMore")}
                    </Link>
                </div>

            </div>
        </section>
    );
}
