import { MessageSquare, Clapperboard, Video, Edit } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";

const ICONS = [
    <MessageSquare key="msg" className="w-8 h-8 text-[var(--color-brand-orange)]" />,
    <Clapperboard key="clap" className="w-8 h-8 text-[var(--color-brand-orange)]" />,
    <Video key="vid" className="w-8 h-8 text-[var(--color-brand-orange)]" />,
    <Edit key="edit" className="w-8 h-8 text-[var(--color-brand-orange)]" />
];

interface ServiceProcessProps {
    bgImage?: string;
}

export default function ServiceProcess({ bgImage }: ServiceProcessProps) {
    const t = useTranslations("ServiceProcess");

    return (
        <section className="relative py-24 border-b border-[#333] overflow-hidden">
            {bgImage && (
                <div className="absolute inset-0 z-0">
                    <Image
                        src={bgImage}
                        alt=""
                        fill
                        className="object-cover opacity-30"
                    />
                    <div className="absolute inset-0 bg-black/80"></div>
                </div>
            )}
            {!bgImage && <div className="absolute inset-0 bg-[#050505] -z-10"></div>}

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold font-sans tracking-tight uppercase text-white mb-4">
                        {t("heading_1")} <span className="text-[var(--color-brand-orange)]">{t("heading_2")}</span> {t("heading_3")}
                    </h2>
                    <p className="text-gray-400 font-mono text-xs leading-relaxed max-w-2xl mx-auto">
                        {t("description")}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {Array.from({ length: 4 }).map((_, index) => (
                        <div
                            key={index}
                            className="bg-[#0a0a0a]/80 backdrop-blur-sm border border-[#333] p-8 hover:border-[var(--color-brand-orange)] transition-colors brutal-shadow text-center flex flex-col items-center group"
                        >
                            <div className="mb-6 group-hover:scale-110 transition-transform duration-300">
                                {ICONS[index]}
                            </div>
                            <h3 className="text-base font-bold font-sans tracking-wide uppercase text-white mb-4 group-hover:text-[var(--color-brand-orange)] transition-colors">
                                {t(`items.${index}.title`)}
                            </h3>
                            <p className="text-gray-400 font-mono text-xs leading-relaxed">
                                {t(`items.${index}.description`)}
                            </p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
