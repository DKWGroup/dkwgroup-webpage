import { useTranslations } from "next-intl";

export default function ProjectsHero() {
    const t = useTranslations("ProjectsHero");

    return (
        <section className="pt-32 pb-24 bg-[#0a0a0a] border-b border-[#333]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h1 className="text-5xl md:text-6xl font-bold font-sans tracking-tight uppercase text-white mb-6">
                        {t("heading_1")} <span className="text-[var(--color-brand-orange)]">{t("heading_2")}</span>
                    </h1>
                    <p className="text-gray-400 font-mono text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
                        {t("description")}
                    </p>
                </div>
            </div>
        </section>
    );
}
