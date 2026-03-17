import { Link } from "@/src/i18n/routing";
import { ArrowRight, Play } from "lucide-react";
import { useTranslations } from "next-intl";

const PROJECT_LINKS = [
    "/case-studies/obsluga-kanalu-youtube-dla-eksperta-lotniczego",
    "/case-studies/kampania-reklamowa-dla-investment-partners"
];

export default function Projects() {
    const t = useTranslations("Projects");

    return (
        <section id="projekty" className="py-24 bg-[#0a0a0a] border-b border-[#333]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                    <div>
                        <h2 className="text-4xl md:text-5xl font-bold font-sans tracking-tight uppercase text-white mb-2">
                            {t("heading_1")} <span className="text-[var(--color-brand-orange)]">{t("heading_2")}</span>
                        </h2>
                        <div className="w-24 h-2 bg-[var(--color-brand-orange)] mt-6"></div>
                    </div>

                    <Link
                        href="/projekty"
                        className="hidden md:inline-flex items-center text-sm font-bold font-mono text-[var(--color-brand-orange)] hover:text-white transition-colors uppercase tracking-wider"
                    >
                        {t("viewAll")}
                        <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {PROJECT_LINKS.map((link, index) => (
                        <div key={index} className="group cursor-pointer">
                            {/* Video Thumbnail Placeholder */}
                            <div className="aspect-[16/9] bg-[#111] border-2 border-[#333] mb-6 brutal-shadow relative overflow-hidden flex items-center justify-center transition-all group-hover:border-[var(--color-brand-orange)]">
                                <div className="absolute inset-0 bg-[#050505] opacity-50 transition-opacity group-hover:opacity-20"></div>

                                <div className="w-16 h-16 bg-[var(--color-brand-orange)] flex items-center justify-center rounded-full z-10 transition-transform duration-300 group-hover:scale-110 group-hover:bg-[var(--color-brand-orange-hover)] text-black">
                                    <Play className="w-6 h-6 ml-1" fill="currentColor" />
                                </div>

                                {/* Abstract corner */}
                                <div className="absolute bottom-0 left-0 w-16 h-16 border-t-2 border-r-2 border-[#333] bg-[#0a0a0a] transition-colors group-hover:border-[var(--color-brand-orange)]"></div>
                            </div>

                            <div className="flex flex-col">
                                <p className="text-[var(--color-brand-orange)] font-mono text-xs uppercase tracking-widest mb-2 font-bold">
                                    {t(`items.${index}.subtitle`)}
                                </p>
                                <h3 className="text-2xl font-bold font-sans tracking-wide text-white mb-3 group-hover:text-[var(--color-brand-orange)] transition-colors">
                                    {t(`items.${index}.title`)}
                                </h3>
                                <p className="text-gray-400 font-mono text-sm leading-relaxed mb-6">
                                    {t(`items.${index}.description`)}
                                </p>

                                <Link
                                    href={link}
                                    className="inline-flex items-center px-6 py-3 border border-[#333] text-white tracking-wider text-xs uppercase font-mono font-bold hover:bg-[var(--color-brand-orange)] hover:text-black hover:border-[var(--color-brand-orange)] transition-colors self-start"
                                >
                                    {t("viewCaseStudy")}
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <Link
                        href="/projekty"
                        className="inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-[#333] text-white font-bold uppercase tracking-wider hover:border-[var(--color-brand-orange)] hover:text-[var(--color-brand-orange)] transition-colors brutal-shadow text-sm font-mono w-full md:w-auto"
                    >
                        {t("viewMore")}
                    </Link>
                </div>

            </div>
        </section>
    );
}
