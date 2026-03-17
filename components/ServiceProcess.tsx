import { MessageSquare, Clapperboard, Video, Edit } from "lucide-react";
import { useTranslations } from "next-intl";

const ICONS = [
    <MessageSquare key="msg" className="w-8 h-8 text-[var(--color-brand-orange)]" />,
    <Clapperboard key="clap" className="w-8 h-8 text-[var(--color-brand-orange)]" />,
    <Video key="vid" className="w-8 h-8 text-[var(--color-brand-orange)]" />,
    <Edit key="edit" className="w-8 h-8 text-[var(--color-brand-orange)]" />
];

export default function ServiceProcess() {
    const t = useTranslations("ServiceProcess");

    return (
        <section className="py-24 bg-[#050505] border-b border-[#333]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold font-sans tracking-tight uppercase text-white mb-4">
                        {t("heading_1")} <span className="text-[var(--color-brand-orange)]">{t("heading_2")}</span> {t("heading_3")}
                    </h2>
                    <p className="text-gray-400 font-mono text-sm leading-relaxed max-w-2xl mx-auto">
                        {t("description")}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {Array.from({ length: 4 }).map((_, index) => (
                        <div
                            key={index}
                            className="bg-[#0a0a0a] border border-[#333] p-8 hover:border-[var(--color-brand-orange)] transition-colors brutal-shadow text-center flex flex-col items-center group"
                        >
                            <div className="mb-6 group-hover:scale-110 transition-transform duration-300">
                                {ICONS[index]}
                            </div>
                            <h3 className="text-lg font-bold font-sans tracking-wide uppercase text-white mb-4 group-hover:text-[var(--color-brand-orange)] transition-colors">
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
