import { useTranslations } from "next-intl";

export default function ContactHero() {
    const t = useTranslations("ContactHero");

    return (
        <section className="pt-24 pb-8 bg-[#0a0a0a]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h1 className="text-4xl md:text-5xl font-bold font-sans tracking-tight text-white mb-4">
                        {t("heading_1")} <span className="text-[var(--color-brand-orange)]">{t("heading_2")}</span>
                    </h1>
                    <p className="text-gray-400 font-mono text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
                        {t("description")}
                    </p>
                </div>
            </div>
        </section>
    );
}
