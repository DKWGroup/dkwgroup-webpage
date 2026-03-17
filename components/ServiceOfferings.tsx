import { CheckCircle2, Zap } from "lucide-react";
import { useTranslations } from "next-intl";

export default function ServiceOfferings() {
    const t = useTranslations("ServiceOfferings");

    return (
        <section className="py-24 bg-[#050505] border-b border-[#333]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">

                    {/* Left Side: Offerings List */}
                    <div className="w-full lg:w-1/2">
                        <h2 className="text-4xl font-bold font-sans tracking-tight uppercase text-white mb-6">
                            {t("heading_1")} <span className="text-[var(--color-brand-orange)]">{t("heading_2")}</span>
                        </h2>
                        <p className="text-gray-400 font-mono text-sm leading-relaxed mb-10 max-w-lg">
                            {t("description")}
                        </p>

                        <ul className="space-y-4 font-mono text-sm text-gray-300">
                            {Array.from({ length: 6 }).map((_, i) => (
                                <li key={i} className="flex items-center gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-[var(--color-brand-orange)] flex-shrink-0" />
                                    <span>{t(`items.${i}`)}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Right Side: Informational Box */}
                    <div className="w-full lg:w-1/2 relative">
                        <div className="absolute inset-0 bg-[var(--color-brand-orange)] translate-x-4 translate-y-4 -z-10 bg-opacity-40 pointer-events-none"></div>
                        <div className="bg-[#0a0a0a] border border-[#333] p-10 lg:p-14 brutal-shadow flex flex-col items-center text-center">
                            <div className="w-16 h-16 rounded-full border border-[var(--color-brand-orange)] flex items-center justify-center mb-8 rotate-12">
                                <Zap className="w-8 h-8 text-[var(--color-brand-orange)]" />
                            </div>
                            <h3 className="text-2xl font-bold font-sans uppercase text-white mb-4">{t("box_title")}</h3>
                            <p className="text-gray-400 font-mono text-sm leading-relaxed">
                                {t("box_desc")}
                            </p>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
}
