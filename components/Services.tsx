import { Link } from "@/src/i18n/routing";
import {
    Video,
    Plane,
    Mic,
    MonitorPlay,
    Code,
    Megaphone,
    Share2,
    ArrowRight
} from "lucide-react";
import { useTranslations } from "next-intl";

const SERVICE_ICONS = [
    <Video key="v" className="w-8 h-8 text-[var(--color-brand-orange)]" />,
    <Plane key="p" className="w-8 h-8 text-[var(--color-brand-orange)]" />,
    <Mic key="m" className="w-8 h-8 text-[var(--color-brand-orange)]" />,
    <MonitorPlay key="mp" className="w-8 h-8 text-[var(--color-brand-orange)]" />,
    <Code key="c" className="w-8 h-8 text-[var(--color-brand-orange)]" />,
    <Megaphone key="mg" className="w-8 h-8 text-[var(--color-brand-orange)]" />,
    <Share2 key="s" className="w-8 h-8 text-[var(--color-brand-orange)]" />,
];

export default function Services() {
    const t = useTranslations("Services");

    return (
        <section id="uslugi" className="py-16 bg-[#050505] border-b border-[#333]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold font-sans tracking-tight uppercase text-white mb-2">
                            {t("heading_1")} <span className="text-[var(--color-brand-orange)]">{t("heading_2")}</span>
                        </h2>
                        <div className="w-24 h-2 bg-[var(--color-brand-orange)] mt-6"></div>
                    </div>

                    <Link
                        href="/uslugi"
                        className="hidden md:inline-flex items-center text-sm font-bold font-mono text-[var(--color-brand-orange)] hover:text-white transition-colors uppercase tracking-wider"
                    >
                        {t("viewAll")}
                        <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {SERVICE_ICONS.slice(0, 6).map((icon, index) => {
                        const hrefs = [
                            "/uslugi/produkcja-wideo",
                            "/uslugi/nagrania-dronem",
                            "/uslugi/podcasty",
                            "/uslugi/live-streaming",
                            "/uslugi/strony-internetowe",
                            "/uslugi/social-media-management"
                        ];

                        return (
                            <Link
                                key={index}
                                href={hrefs[index] || "/uslugi"}
                                className="bg-[#0a0a0a] border-2 border-[#333] p-6 brutal-shadow flex flex-col h-full group transition-all duration-300 hover:border-[var(--color-brand-orange)] hover:-translate-y-2 relative overflow-hidden block"
                            >
                                {/* Abstract decorative shape */}
                                <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--color-brand-orange)] opacity-0 group-hover:opacity-10 transition-opacity rounded-bl-full pointer-events-none z-0"></div>

                                <div className="relative z-10 mb-4 p-3 border border-[#333] inline-block bg-black group-hover:border-[var(--color-brand-orange)] transition-colors">
                                    {icon}
                                </div>

                                <h3 className="relative z-10 text-xl font-bold font-sans tracking-wide uppercase text-white mb-4 group-hover:text-[var(--color-brand-orange)] transition-colors">
                                    {t(`items.${index}.title`)}
                                </h3>

                                <p className="relative z-10 text-gray-400 font-mono text-sm leading-relaxed mb-6 flex-grow">
                                    {t(`items.${index}.description`)}
                                </p>

                                <div
                                    className="relative z-10 inline-flex items-center text-xs font-bold font-mono text-gray-400 group-hover:text-[var(--color-brand-orange)] transition-colors uppercase tracking-widest mt-auto shadow-black drop-shadow-md"
                                >
                                    {t("learnMore")}
                                    <ArrowRight className="ml-2 w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all shadow-black drop-shadow-md" />
                                </div>
                            </Link>
                        );
                    })}
                </div>

                <div className="mt-12 text-center md:hidden">
                    <Link
                        href="/uslugi"
                        className="inline-flex items-center justify-center w-full px-8 py-4 bg-[var(--color-brand-orange)] text-black font-bold uppercase tracking-wider brutal-shadow text-sm font-mono"
                    >
                        {t("viewAllServices")}
                    </Link>
                </div>

            </div>
        </section>
    );
}
