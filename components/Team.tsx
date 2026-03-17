import { Link } from "@/src/i18n/routing";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { useTranslations } from "next-intl";

const TEAM_COUNT = 3;

export default function Team() {
    const t = useTranslations("Team");

    return (
        <section id="zespol" className="py-20 bg-[#050505] border-b border-[#333] scroll-mt-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold font-sans tracking-tight uppercase text-white mb-5">
                        {t("heading_1")} <span className="text-[var(--color-brand-orange)]">{t("heading_2")}</span>
                    </h2>
                    <div className="w-20 h-1.5 bg-[var(--color-brand-orange)] mx-auto"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto">
                    {Array.from({ length: TEAM_COUNT }).map((_, index) => {
                        const photos = [
                            "/photos/dawidmyszka.webp",
                            "/photos/kamilkrukowski.webp",
                            "/photos/wiktoriaskopek.png"
                        ];

                        return (
                            <div
                                key={index}
                                className="group flex flex-col items-center text-center"
                            >
                                {/* Photo holder with brutal shapes */}
                                <div className="relative mb-8 w-full max-w-[280px]">
                                    {/* Background offset shape */}
                                    <div className="absolute inset-0 bg-[var(--color-brand-orange)] translate-x-3 translate-y-3 border-2 border-[var(--color-brand-orange)]"></div>

                                    {/* Main image container */}
                                    <div className="relative h-[350px] bg-[#0a0a0a] border-2 border-[#333] z-10 flex items-center justify-center transition-all duration-300 overflow-hidden">
                                        <Image
                                            src={photos[index]}
                                            alt={t(`members.${index}.name`)}
                                            fill
                                            className="object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-500"
                                            sizes="(max-width: 768px) 100vw, 33vw"
                                        />
                                    </div>
                                </div>

                                <h3 className="text-xl font-bold font-sans tracking-wide uppercase text-white mb-2 group-hover:text-[var(--color-brand-orange)] transition-colors">
                                    {t(`members.${index}.name`)}
                                </h3>

                                <p className="text-gray-400 font-mono text-sm leading-relaxed">
                                    {t(`members.${index}.role`)}
                                </p>
                            </div>
                        );
                    })}
                </div>

                <div className="mt-14 text-center">
                    <Link
                        href="/o-nas"
                        className="inline-flex items-center justify-center px-8 py-4 bg-[var(--color-brand-orange)] text-black font-bold uppercase tracking-wider hover:bg-[var(--color-brand-orange-hover)] transition-colors brutal-shadow text-sm font-mono w-full sm:w-auto"
                    >
                        {t("cta")}
                        <ArrowRight className="ml-2 w-5 h-5" />
                    </Link>
                </div>

            </div>
        </section>
    );
}
