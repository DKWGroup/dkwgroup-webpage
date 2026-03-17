import { useTranslations } from "next-intl";
import AnimatedSection from "@/components/AnimatedSection";

export default function Values() {
    const t = useTranslations("Values");
    const numItems = 6;

    return (
        <section className="py-16 bg-[#0a0a0a] border-b border-[#333]">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

                <AnimatedSection animation="fade-down" className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold font-sans tracking-tight uppercase text-white mb-4">
                        {t("heading_1")} <span className="text-[var(--color-brand-orange)]">{t("heading_2")}</span>
                    </h2>
                </AnimatedSection>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {Array.from({ length: numItems }).map((_, idx) => (
                        <AnimatedSection key={idx} animation="scale" delay={idx * 0.1}>
                            <div
                                className="bg-[#050505] p-6 border border-[#333] hover:border-[var(--color-brand-orange)] transition-colors brutal-shadow relative group h-full flex flex-col"
                            >
                                <div className="mb-3">
                                    <span className="text-[var(--color-brand-orange)] font-sans font-bold text-2xl opacity-80 select-none">
                                        0{idx + 1}
                                    </span>
                                </div>
                                <h3 className="text-lg font-bold font-sans tracking-wide uppercase text-white mb-3 group-hover:text-[var(--color-brand-orange)] transition-colors">
                                    {t(`items.${idx}.title`)}
                                </h3>
                                <p className="text-gray-400 font-mono text-xs leading-relaxed">
                                    {t(`items.${idx}.desc`)}
                                </p>

                                <div className="absolute bottom-0 left-0 w-full h-1 bg-[var(--color-brand-orange)] scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
                            </div>
                        </AnimatedSection>
                    ))}
                </div>

            </div>
        </section>
    );
}
