import { Link } from "@/src/i18n/routing";
import { ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";

const CASE_STUDY_COUNT = 3;

const CASE_STUDY_LINKS = [
    "/case-studies/obsluga-kanalu-grzegorz-kusz-agent-specjalny",
    "/case-studies/kampania-reklamowa-dla-investment-partners",
    "/case-studies/obsluga-kanalu-youtube-dla-eksperta-lotniczego"
];

export default function CaseStudies() {
    const t = useTranslations("CaseStudies");

    return (
        <section id="case-studies" className="py-20 bg-[#050505] border-b border-[#333] scroll-mt-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold font-sans tracking-tight uppercase text-white mb-2">
                            {t("heading_1")} <span className="text-[var(--color-brand-orange)]">{t("heading_2")}</span>
                        </h2>
                        <div className="w-24 h-2 bg-[var(--color-brand-orange)] mt-6"></div>
                    </div>

                    <Link
                        href="/case-studies"
                        className="hidden md:inline-flex items-center text-sm font-bold font-mono text-[var(--color-brand-orange)] hover:text-white transition-colors uppercase tracking-wider"
                    >
                        {t("viewAll")}
                        <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {Array.from({ length: CASE_STUDY_COUNT }).map((_, index) => {
                        const bgImages = [
                            "/casestudy-kusz/9b006bf7-ecaf-4fd9-b67c-020b154cf73b.webp",
                            null,
                            "/casestudy-kokpitkamila/5f75cd15-9344-4900-9293-d01f74483bc4.webp"
                        ];
                        const bgImage = bgImages[index];

                        return (
                            <Link
                                key={index}
                                href={CASE_STUDY_LINKS[index]}
                                className="bg-[#0a0a0a] border border-[#333] p-6 flex flex-col h-full hover:border-[var(--color-brand-orange)] transition-colors brutal-shadow relative group block overflow-hidden"
                            >
                                {bgImage && (
                                    <div
                                        className="absolute inset-0 z-0 opacity-10 blur-sm group-hover:blur-md transition-all duration-500 bg-cover bg-center mix-blend-luminosity brightness-50"
                                        style={{ backgroundImage: `url('${bgImage}')` }}
                                    ></div>
                                )}

                                {/* Top Accent Bar */}
                                <div className="absolute top-0 left-0 w-full h-1 bg-[#222] group-hover:bg-[var(--color-brand-orange)] transition-colors z-10"></div>

                                <p className="relative z-10 text-gray-500 font-mono text-xs uppercase tracking-widest mb-4">
                                    {t(`items.${index}.client`)} <span className="text-[var(--color-brand-orange)]">•</span> {t(`items.${index}.category`)}
                                </p>

                                <h3 className="relative z-10 text-xl font-bold font-sans tracking-wide uppercase text-white mb-4 group-hover:text-[var(--color-brand-orange)] transition-colors">
                                    {t(`items.${index}.title`)}
                                </h3>

                                <p className="relative z-10 text-gray-400 font-mono text-sm leading-relaxed mb-6 flex-grow">
                                    {t(`items.${index}.description`)}
                                </p>

                                <div
                                    className="relative z-10 mt-auto pt-4 border-t border-[#333] text-sm font-bold font-mono text-white group-hover:text-[var(--color-brand-orange)] transition-colors flex items-center justify-between uppercase tracking-wider shadow-black drop-shadow-md"
                                >
                                    {t("viewCaseStudy")}
                                    <ArrowRight className="w-4 h-4 transform group-hover:translate-x-2 transition-transform shadow-black drop-shadow-md" />
                                </div>
                            </Link>
                        );
                    })}
                </div>

                <div className="mt-12 text-center">
                    <Link
                        href="/case-studies"
                        className="inline-flex items-center justify-center px-8 py-4 bg-[var(--color-brand-orange)] text-black font-bold uppercase tracking-wider hover:bg-[var(--color-brand-orange-hover)] transition-colors brutal-shadow text-sm font-mono w-full md:w-auto"
                    >
                        {t("viewMore")}
                    </Link>
                </div>

            </div>
        </section>
    );
}
