import { Link } from "@/src/i18n/routing";
import {
    Video,
    Plane,
    Mic,
    MonitorPlay,
    Megaphone,
    Share2,
    Code,
    Camera,
    PlaySquare,
    ArrowRight
} from "lucide-react";
import { useTranslations } from "next-intl";
import { ReactNode } from "react";

// Definicje kategoryzacyjne
type ServiceMeta = { icon: ReactNode; href: string; id: number };

const CATEGORY_1_WIDEO_AUDIO: ServiceMeta[] = [
    { icon: <Video className="w-8 h-8 text-[var(--color-brand-orange)]" />, href: "/uslugi/produkcja-wideo", id: 0 },
    { icon: <Plane className="w-8 h-8 text-[var(--color-brand-orange)]" />, href: "/uslugi/nagrania-dronem", id: 1 },
    { icon: <Mic className="w-8 h-8 text-[var(--color-brand-orange)]" />, href: "/uslugi/podcasty", id: 2 },
    { icon: <MonitorPlay className="w-8 h-8 text-[var(--color-brand-orange)]" />, href: "/uslugi/live-streaming", id: 3 },
];

const CATEGORY_2_MARKETING_WEB: ServiceMeta[] = [
    { icon: <Megaphone className="w-8 h-8 text-[var(--color-brand-orange)]" />, href: "/uslugi/social-media-management", id: 4 },
    { icon: <Code className="w-8 h-8 text-[var(--color-brand-orange)]" />, href: "/uslugi/strony-internetowe", id: 6 },
];

const CATEGORY_3_PAKIETY: ServiceMeta[] = [
    { icon: <Camera className="w-8 h-8 text-[var(--color-brand-orange)]" />, href: "/pakiety/one-day-pack", id: 7 },
    { icon: <PlaySquare className="w-8 h-8 text-[var(--color-brand-orange)]" />, href: "/pakiety/short-form-content", id: 8 },
];

export default function ServicesPageGrid() {
    const t = useTranslations("ServicesPageGrid");

    const renderGridComponent = (items: ServiceMeta[]) => (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {items.map((meta) => (
                <Link
                    key={meta.id}
                    href={meta.href}
                    className="bg-[#0a0a0a] border border-[#333] p-8 flex flex-col h-full group hover:border-[var(--color-brand-orange)] transition-colors brutal-shadow relative overflow-hidden block"
                >
                    {/* Decorative Corner abstract shape */}
                    <div className="absolute top-0 right-0 w-24 h-24 bg-[var(--color-brand-orange)] opacity-0 group-hover:opacity-10 transition-opacity rounded-bl-full pointer-events-none"></div>

                    <div className="mb-6 group-hover:scale-110 transition-transform origin-left">
                        {meta.icon}
                    </div>

                    <h3 className="text-lg font-bold font-sans tracking-wide uppercase text-white mb-4 group-hover:text-[var(--color-brand-orange)] transition-colors">
                        {t(`items.${meta.id}.title`)}
                    </h3>

                    <p className="text-gray-400 font-mono text-[13px] leading-relaxed mb-8 flex-grow">
                        {t(`items.${meta.id}.description`)}
                    </p>

                    <div
                        className="inline-flex items-center text-xs font-bold font-mono text-gray-500 group-hover:text-[var(--color-brand-orange)] transition-colors uppercase tracking-widest mt-auto border-t border-[#333] pt-4"
                    >
                        {t("learnMore")}
                        <ArrowRight className="ml-2 w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-[var(--color-brand-orange)]" />
                    </div>
                </Link>
            ))}
        </div>
    );

    return (
        <section className="bg-[#050505] border-b border-[#333]">
            
            {/* Sekcja 1: Wideo & Audio */}
            <div className="pt-24 pb-16 border-b border-[#111]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="mb-12">
                        <h2 className="text-3xl font-bold font-sans tracking-tight uppercase text-white flex items-center gap-4">
                            <span className="w-8 h-1 bg-[var(--color-brand-orange)]"></span>
                            {t("category_1")}
                        </h2>
                    </div>
                    {renderGridComponent(CATEGORY_1_WIDEO_AUDIO)}
                </div>
            </div>

            {/* Sekcja 2: Marketing & Web */}
            <div className="py-16 border-b border-[#111]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="mb-12">
                        <h2 className="text-3xl font-bold font-sans tracking-tight uppercase text-white flex items-center gap-4">
                            <span className="w-8 h-1 bg-[var(--color-brand-orange)]"></span>
                            {t("category_2")}
                        </h2>
                    </div>
                    {renderGridComponent(CATEGORY_2_MARKETING_WEB)}
                </div>
            </div>

            {/* Sekcja 3: Pakiety i Cennik */}
            <div className="py-16 pb-24 border-b border-[#111]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="mb-12">
                        <h2 className="text-3xl font-bold font-sans tracking-tight uppercase text-white flex items-center gap-4">
                            <span className="w-8 h-1 bg-[var(--color-brand-orange)]"></span>
                            {t("category_3")}
                        </h2>
                    </div>
                    {renderGridComponent(CATEGORY_3_PAKIETY)}
                </div>
            </div>

        </section>
    );
}
