import { ArrowUpRight } from "lucide-react";
import { Link } from "@/src/i18n/routing";
import { useTranslations } from "next-intl";

export default function CaseStudiesList() {
    const t = useTranslations("CaseStudiesList");

    return (
        <section id="lista" className="py-24 bg-[#0a0a0a] border-b border-[#333]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {[0, 1, 2].map((index) => (
                        <Link
                            key={index}
                            href={index === 0 ? "/case-studies/obsluga-kanalu-grzegorz-kusz-agent-specjalny" : index === 1 ? "/case-studies/kampania-reklamowa-dla-investment-partners" : index === 2 ? "/case-studies/obsluga-kanalu-youtube-dla-eksperta-lotniczego" : `#szczegoly-${index}`}
                            className="group bg-[#050505] border border-[#333] hover:border-[var(--color-brand-orange)] transition-all duration-300 brutal-shadow flex flex-col h-full relative block"
                        >
                            {/* Badge Branżowy */}
                            <div className="absolute top-0 right-0 border-l border-b border-[#333] bg-[#111] px-4 py-2 flex items-center gap-2 group-hover:border-[var(--color-brand-orange)] transition-colors">
                                <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-brand-orange)]"></span>
                                <span className="font-mono text-[10px] font-bold text-gray-400 uppercase tracking-widest">{t(`items.${index}.industry`)}</span>
                            </div>

                            <div className="p-8 pt-16 flex flex-col flex-grow">
                                <h4 className="font-mono text-xs text-[var(--color-brand-orange)] font-bold uppercase tracking-widest mb-3">
                                    {t(`items.${index}.client`)}
                                </h4>
                                <h3 className="text-2xl font-bold font-sans text-white uppercase tracking-tight mb-4 group-hover:text-[var(--color-brand-orange)] transition-colors">
                                    {t(`items.${index}.title`)}
                                </h3>

                                <p className="text-gray-400 font-mono text-sm leading-relaxed mb-8 flex-grow">
                                    {t(`items.${index}.description`)}
                                </p>

                                <div
                                    className="inline-flex items-center justify-between w-full pt-4 border-t border-[#333] group-hover:border-[var(--color-brand-orange)] transition-colors mt-auto"
                                >
                                    <span className="font-mono text-xs font-bold text-white uppercase tracking-widest group-hover:text-[var(--color-brand-orange)]">
                                        {t("viewDetails")}
                                    </span>
                                    <div className="w-8 h-8 rounded-full border border-[#333] flex items-center justify-center bg-[#111] group-hover:bg-[var(--color-brand-orange)] group-hover:border-[var(--color-brand-orange)] transition-all">
                                        <ArrowUpRight className="w-4 h-4 text-gray-400 group-hover:text-black group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>

            </div>
        </section>
    );
}
