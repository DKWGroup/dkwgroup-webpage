import { Link } from "@/src/i18n/routing";
import { ArrowRight, Play } from "lucide-react";
import { useTranslations } from "next-intl";

const PROJECTS_LINKS = [
    "/case-studies/obsluga-kanalu-youtube-dla-eksperta-lotniczego",
    "/case-studies/kampania-reklamowa-dla-investment-partners",
    "/case-studies/obsluga-kanalu-grzegorz-kusz-agent-specjalny"
];

export default function DetailedProjectsList() {
    const t = useTranslations("DetailedProjectsList");

    return (
        <section className="py-24 bg-[#050505] border-b border-[#333]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="space-y-32">
                    {[0, 1, 2].map((index) => (
                        <div
                            key={index}
                            className={`flex flex-col lg:flex-row gap-12 lg:gap-20 items-center ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
                        >

                            {/* Media Container (Z-pattern) */}
                            <div className="w-full lg:w-1/2 relative group cursor-pointer">
                                {/* Offset decorative brutal border */}
                                <div className="absolute inset-0 bg-[#333] translate-x-3 translate-y-3 border border-[#444] -z-10 group-hover:translate-x-5 group-hover:translate-y-5 group-hover:bg-[var(--color-brand-orange)] group-hover:border-[var(--color-brand-orange)] transition-all duration-300"></div>

                                {/* Main Box - Video Thumbnail Placeholder */}
                                <div className="relative aspect-video bg-[#0a0a0a] border-2 border-[#333] z-10 flex items-center justify-center overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-500">
                                    <div className="absolute inset-0 bg-black opacity-40 group-hover:opacity-10 transition-opacity"></div>

                                    {/* Play Button Overlay */}
                                    <div className="w-20 h-20 rounded-full bg-[var(--color-brand-orange)] flex items-center justify-center translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 z-20">
                                        <Play className="w-8 h-8 text-black ml-1" fill="currentColor" />
                                    </div>

                                    {/* Optional corner branding */}
                                    <span className="absolute bottom-4 right-4 font-mono text-gray-500 text-xs font-bold uppercase tracking-widest z-10 opacity-50">DKW Play</span>
                                </div>
                            </div>

                            {/* Text & Metrics Content */}
                            <div className="w-full lg:w-1/2 flex flex-col items-start">
                                <span className="text-[var(--color-brand-orange)] font-mono text-xs font-bold uppercase tracking-widest mb-4">
                                    {t(`items.${index}.category`)}
                                </span>

                                <h2 className="text-3xl md:text-4xl font-bold font-sans tracking-tight uppercase text-white mb-6">
                                    {t(`items.${index}.title`)}
                                </h2>

                                <p className="text-gray-400 font-mono text-base leading-relaxed mb-10 max-w-xl">
                                    {t(`items.${index}.description`)}
                                </p>

                                {/* Metrics Brutal Grid */}
                                <div className="grid grid-cols-2 gap-4 mb-10 w-full max-w-xl">
                                    {[0, 1].map((mIndex) => (
                                        <div
                                            key={mIndex}
                                            className="bg-[#0a0a0a] border border-[#333] p-6 hover:border-[var(--color-brand-orange)] transition-colors"
                                        >
                                            <div className="text-[var(--color-brand-orange)] font-sans font-bold text-3xl mb-2">
                                                {t(`items.${index}.metrics.${mIndex}.value`)}
                                            </div>
                                            <div className="text-gray-500 font-mono text-xs uppercase tracking-widest">
                                                {t(`items.${index}.metrics.${mIndex}.label`)}
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                {/* Solid CTA Button */}
                                <Link
                                    href={PROJECTS_LINKS[index]}
                                    className="inline-flex items-center justify-center px-8 py-4 bg-[var(--color-brand-orange)] text-black font-bold uppercase tracking-wider hover:bg-[var(--color-brand-orange-hover)] transition-colors text-sm font-mono"
                                >
                                    {t("viewCaseStudy")}
                                    <ArrowRight className="ml-2 w-5 h-5" />
                                </Link>
                            </div>

                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
