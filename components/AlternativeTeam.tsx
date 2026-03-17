import { Link } from "@/src/i18n/routing";
import { Mail, Phone, ArrowRight } from "lucide-react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import AnimatedSection from "@/components/AnimatedSection";

const TEAM_EMAILS = [
    "dm.mymyszka@gmail.com",
    "kamil.krukowski00@gmail.com",
    "wskopek.all@gmail.com"
];

const TEAM_PHONES = [
    "+48 517 957 875",
    "+48 881 046 689",
    "+48 537 168 645"
];

const TEAM_COUNT = 3;

export default function AlternativeTeam() {
    const t = useTranslations("AlternativeTeam");

    return (
        <section className="py-16 bg-[#050505] border-b border-[#333]">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold font-sans tracking-tight uppercase text-white mb-4">
                        {t("heading_1")} <span className="text-[var(--color-brand-orange)]">{t("heading_2")}</span>
                    </h2>
                </div>

                <div className="space-y-14 max-w-4xl mx-auto">
                    {Array.from({ length: TEAM_COUNT }).map((_, index) => {
                        const photos = [
                            "/photos/dawidmyszka.webp",
                            "/photos/kamilkrukowski.webp",
                            "/photos/wiktoriaskopek.png"
                        ];

                        return (
                            <AnimatedSection key={index} animation={index % 2 === 0 ? "fade-right" : "fade-left"} delay={0.1}>
                                <div
                                    className={`flex flex-col md:flex-row gap-6 lg:gap-10 items-center group ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
                                >
                                    {/* Photo */}
                                    <div className="w-full md:w-[38%] flex-shrink-0 relative">
                                        {/* Background offset shape */}
                                        <div className="absolute inset-0 bg-[var(--color-brand-orange)] translate-x-3 translate-y-3 border-2 border-[var(--color-brand-orange)] -z-10"></div>

                                        {/* Main image container — object-top to keep heads visible, object-cover to fill */}
                                        <div className="relative aspect-[3/4] w-full bg-[#0a0a0a] border-2 border-[#333] z-10 transition-all duration-300 overflow-hidden">
                                            <Image
                                                src={photos[index]}
                                                alt={t(`members.${index}.name`)}
                                                fill
                                                className="object-cover object-top"
                                                unoptimized={photos[index].endsWith('.svg')}
                                            />
                                        </div>
                                    </div>

                                    <div className="w-full md:w-[62%] flex flex-col pt-2 md:pt-0">
                                        <h3 className="text-xl lg:text-2xl font-bold font-sans tracking-wide uppercase text-white mb-1.5 group-hover:text-[var(--color-brand-orange)] transition-colors">
                                            {t(`members.${index}.name`)}
                                        </h3>

                                        <p className="text-[var(--color-brand-orange)] font-mono text-xs tracking-widest uppercase mb-4 font-bold">
                                            {t(`members.${index}.role`)}
                                        </p>

                                        <p className="text-gray-400 font-mono text-xs leading-relaxed mb-6">
                                            {t(`members.${index}.desc`)}
                                        </p>

                                        {/* Contact Data */}
                                        <div className="space-y-2 font-mono text-xs border-l-2 border-[#333] pl-4 group-hover:border-[var(--color-brand-orange)] transition-colors">
                                            <a href={`mailto:${TEAM_EMAILS[index]}`} className="flex items-center text-gray-300 hover:text-[var(--color-brand-orange)] transition-colors">
                                                <Mail className="w-3.5 h-3.5 mr-2.5 text-[var(--color-brand-orange)]" />
                                                {TEAM_EMAILS[index]}
                                            </a>
                                            <a href={`tel:${TEAM_PHONES[index].replace(/\s/g, '')}`} className="flex items-center text-gray-300 hover:text-[var(--color-brand-orange)] transition-colors">
                                                <Phone className="w-3.5 h-3.5 mr-2.5 text-[var(--color-brand-orange)]" />
                                                {TEAM_PHONES[index]}
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </AnimatedSection>
                        );
                    })}
                </div>

                <div className="mt-16 text-center">
                    <AnimatedSection animation="fade-up" delay={0.2}>
                        <Link
                            href="/kontakt"
                            className="inline-flex items-center justify-center px-8 py-4 bg-[var(--color-brand-orange)] text-black font-bold uppercase tracking-wider hover:bg-[var(--color-brand-orange-hover)] transition-colors brutal-shadow text-sm font-mono w-full sm:w-auto"
                        >
                            {t("cta")}
                            <ArrowRight className="ml-2 w-4 h-4" />
                        </Link>
                    </AnimatedSection>
                </div>

            </div>
        </section>
    );
}
