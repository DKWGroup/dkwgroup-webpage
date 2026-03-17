import { ArrowUpRight } from "lucide-react";
import { Link } from "@/src/i18n/routing";
import { useTranslations } from "next-intl";
import Image from "next/image";

interface ServiceBenefitsProps {
    bgImage?: string;
}

export default function ServiceBenefits({ bgImage }: ServiceBenefitsProps) {
    const t = useTranslations("ServiceBenefits");

    return (
        <section className="relative py-24 border-b border-[#333] overflow-hidden">
            {bgImage && (
                <div className="absolute inset-0 z-0">
                    <Image
                        src={bgImage}
                        alt=""
                        fill
                        className="object-cover opacity-40"
                    />
                    <div className="absolute inset-0 bg-black/90"></div>
                </div>
            )}
            {!bgImage && <div className="absolute inset-0 bg-[#0a0a0a] -z-10"></div>}

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold font-sans tracking-tight uppercase text-white mb-4">
                        {t("heading_1")} <span className="text-[var(--color-brand-orange)]">{t("heading_2")}</span>
                    </h2>
                    <p className="text-gray-400 font-mono text-xs leading-relaxed max-w-2xl mx-auto">
                        {t("description")}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {[0, 1, 2, 3, 4].map((index) => (
                        <div
                            key={index}
                            className="group flex items-start gap-4 p-6 bg-[#050505]/80 backdrop-blur-sm border border-[#222] hover:border-[var(--color-brand-orange)] transition-colors brutal-shadow cursor-default"
                        >
                            <div className="flex-shrink-0 mt-1">
                                <ArrowUpRight className="w-6 h-6 text-[var(--color-brand-orange)] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                            </div>
                            <p className="font-mono text-gray-300 text-xs leading-relaxed group-hover:text-white transition-colors">
                                {t(`benefits.${index}`)}
                            </p>
                        </div>
                    ))}

                    {/* CTA Box filling the grid layout if necessary */}
                    <div className="group flex flex-col justify-center items-center gap-4 p-6 bg-[var(--color-brand-orange)] border border-[var(--color-brand-orange)] hover:bg-[#e65c00] transition-colors brutal-shadow cursor-pointer text-center">
                        <h3 className="text-black font-bold font-sans uppercase tracking-widest text-base">{t("cta_title")}</h3>
                        <Link
                            href="#kontakt"
                            className="inline-flex items-center text-black font-mono text-[10px] font-bold uppercase tracking-widest border-b border-black pb-1 hover:opacity-70 transition-opacity"
                        >
                            {t("cta_button")}
                        </Link>
                    </div>
                </div>

            </div>
        </section>
    );
}
