import { Link } from "@/src/i18n/routing";
import { ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";

export default function ServiceDetailHero() {
    const t = useTranslations("ServiceDetailHero");

    return (
        <section className="pt-32 pb-24 bg-[#0a0a0a] border-b border-[#333]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h1 className="text-5xl md:text-6xl font-bold font-sans tracking-tight text-white mb-6 uppercase">
                        {t("heading_1")} <span className="text-[var(--color-brand-orange)]">{t("heading_2")}</span>
                    </h1>
                    <p className="text-gray-400 font-mono text-lg md:text-xl leading-relaxed max-w-3xl mx-auto mb-10">
                        {t("description")}
                    </p>
                    <Link
                        href="#kontakt"
                        className="inline-flex items-center justify-center px-8 py-4 bg-[var(--color-brand-orange)] text-black font-bold uppercase tracking-wider hover:bg-[var(--color-brand-orange-hover)] transition-colors text-sm font-mono brutal-shadow"
                    >
                        {t("cta")}
                        <ArrowRight className="ml-2 w-5 h-5" />
                    </Link>
                </div>
            </div>
        </section>
    );
}
