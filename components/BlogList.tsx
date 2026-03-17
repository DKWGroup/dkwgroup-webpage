import { Link } from "@/src/i18n/routing";
import { ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";

export default function BlogList() {
    const t = useTranslations("BlogList");
    const numItems = 1; // 1 post in mock data

    return (
        <section className="py-24 bg-[#050505] border-b border-[#333]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {Array.from({ length: numItems }).map((_, index) => (
                        <Link
                            key={index}
                            href={`/blog/dlaczego-twoja-firma-potrzebuje-profesjonalnej-strony-internetowej`}
                            className="group flex flex-col bg-[#0a0a0a] border border-[#333] hover:border-[var(--color-brand-orange)] transition-colors brutal-shadow relative overflow-hidden block"
                        >
                            {/* Image Placeholder area */}
                            <div className="aspect-[4/3] w-full bg-[#111] border-b border-[#333] relative overflow-hidden">
                                <div className="absolute inset-0 bg-[#FF6A00] opacity-40 group-hover:opacity-60 transition-opacity mix-blend-color-dodge"></div>
                                {/* Decorative element resembling keyboard keys loosely inspired by the screen */}
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center gap-2 grayscale group-hover:grayscale-0 transition-all opacity-80">
                                    <div className="w-10 h-10 bg-[#ddd] flex items-center justify-center font-mono text-black font-bold border-b-4 border-gray-400">W</div>
                                    <div className="w-10 h-10 bg-[#ddd] flex items-center justify-center font-mono text-black font-bold border-b-4 border-gray-400">W</div>
                                    <div className="w-10 h-10 bg-[#ddd] flex items-center justify-center font-mono text-black font-bold border-b-4 border-gray-400">W</div>
                                </div>
                            </div>

                            {/* Content area */}
                            <div className="p-8 flex flex-col flex-grow">
                                <h2 className="text-2xl font-bold font-sans tracking-tight text-white mb-6 group-hover:text-[var(--color-brand-orange)] transition-colors leading-snug">
                                    {t(`items.${index}.title`)}
                                </h2>

                                <p className="text-gray-500 font-mono text-xs tracking-wider mb-8">
                                    {t(`items.${index}.date`)} &bull; {t(`items.${index}.author`)}
                                </p>

                                <div className="mt-auto pt-4 border-t border-[#333]">
                                    <div
                                        className="inline-flex items-center text-[var(--color-brand-orange)] font-bold text-sm tracking-wider hover:text-white transition-colors uppercase font-sans"
                                    >
                                        {t("readMore")}
                                        <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
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
