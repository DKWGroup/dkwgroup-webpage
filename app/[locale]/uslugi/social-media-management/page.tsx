import { Link } from "@/src/i18n/routing";
import { ArrowRight, TrendingUp, Users, Target, BarChart3, MessageSquare, ShieldCheck, CheckCircle2, AlertCircle } from "lucide-react";
import Contact from "@/components/Contact";
import MarketingContentFaq from "@/components/MarketingContentFaq";
import { useTranslations } from "next-intl";
import AnimatedSection from "@/components/AnimatedSection";

export default function SocialMediaManagementPage() {
    const t = useTranslations("SocialMediaManagement");

    const STAT_ICONS = [
        <TrendingUp key="trending" className="w-6 h-6" />,
        <Users key="users" className="w-6 h-6" />,
        <BarChart3 key="barchart" className="w-6 h-6" />,
        <ShieldCheck key="shield" className="w-6 h-6" />
    ];

    return (
        <>
            {/* Hero Section */}
            <section className="pt-32 pb-24 bg-[#0a0a0a] border-b border-[#333] relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[var(--color-brand-orange)]/5 to-transparent pointer-events-none" />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="max-w-3xl">
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 border border-[#333] bg-[#111] mb-6">
                            <span className="w-2 h-2 rounded-full bg-[var(--color-brand-orange)] animate-pulse"></span>
                            <span className="text-[10px] font-bold font-mono text-gray-400 uppercase tracking-widest">{t("hero_badge")}</span>
                        </div>
                        <h1 className="text-4xl md:text-6xl font-bold font-sans tracking-tight text-white mb-6 uppercase leading-tight">
                            {t("hero_title_1")} <br />
                            <span className="text-[var(--color-brand-orange)]">{t("hero_title_2")}</span>
                        </h1>
                        <p className="text-gray-400 font-mono text-base md:text-lg leading-relaxed mb-10 border-l-2 border-[var(--color-brand-orange)] pl-6">
                            {t("hero_description")}
                        </p>
                        <Link
                            href="#kontakt"
                            className="inline-flex items-center justify-center px-10 py-5 bg-[var(--color-brand-orange)] text-black font-bold uppercase tracking-wider hover:bg-white transition-all text-sm font-mono brutal-shadow group"
                        >
                            {t("hero_cta")}
                            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>
                </div>
            </section>

            {/* Problem & Approach Section */}
            <section className="py-24 bg-[#050505] border-b border-[#333]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <AnimatedSection animation="fade-right">
                            <h2 className="text-3xl font-bold text-white mb-6 uppercase tracking-tight">
                                {t("problem_title")}
                            </h2>
                            <p className="text-gray-400 font-mono text-sm leading-relaxed mb-8 italic">
                                "{t("problem_desc")}"
                            </p>
                            <div className="space-y-6">
                                <div className="p-6 bg-[#111] border-l-4 border-red-500/50">
                                    <h3 className="text-white font-bold mb-2 uppercase flex items-center gap-2">
                                        <AlertCircle className="w-4 h-4 text-red-500" />
                                        Inne agencje
                                    </h3>
                                    <p className="text-gray-500 text-xs font-mono">{t("agencies_problem")}</p>
                                </div>
                                <div className="p-6 bg-[#111] border-l-4 border-[var(--color-brand-orange)]">
                                    <h3 className="text-white font-bold mb-2 uppercase">DKW Group</h3>
                                    <p className="text-gray-400 text-xs font-mono">{t("our_approach")}</p>
                                </div>
                            </div>
                        </AnimatedSection>
                        <AnimatedSection animation="fade-left" className="relative">
                            <div className="aspect-square bg-[#0a0a0a] border border-[#333] brutal-shadow p-8 flex flex-col justify-center">
                                <div className="space-y-8">
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 rounded-full bg-[var(--color-brand-orange)]/10 flex items-center justify-center flex-shrink-0">
                                            <Target className="w-6 h-6 text-[var(--color-brand-orange)]" />
                                        </div>
                                        <div>
                                            <h4 className="text-white font-bold uppercase text-sm mb-1">Precyzyjne targetowanie</h4>
                                            <p className="text-gray-500 text-[10px] font-mono leading-relaxed">Docieramy dokładnie tam, gdzie są Twoi klienci. Bez przepalania budżetu.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 rounded-full bg-[var(--color-brand-orange)]/10 flex items-center justify-center flex-shrink-0">
                                            <MessageSquare className="w-6 h-6 text-[var(--color-brand-orange)]" />
                                        </div>
                                        <div>
                                            <h4 className="text-white font-bold uppercase text-sm mb-1">Język korzyści</h4>
                                            <p className="text-gray-500 text-[10px] font-mono leading-relaxed">Piszemy tak, by budować pragnienie posiadania Twojego produktu lub usługi.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="absolute -bottom-6 -right-6 w-32 h-32 border-4 border-[var(--color-brand-orange)]/20 -z-10" />
                        </AnimatedSection>
                    </div>
                </div>
            </section>

            {/* Numbers Section */}
            <section className="py-24 bg-[#0a0a0a] border-b border-[#333]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-white uppercase tracking-tight mb-4">{t("numbers_title")}</h2>
                        <div className="w-24 h-1 bg-[var(--color-brand-orange)] mx-auto" />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {Array.from({ length: 4 }).map((_, idx) => (
                            <AnimatedSection key={idx} animation="scale" className="p-8 bg-[#111] border border-[#333] hover:border-[var(--color-brand-orange)] transition-colors group">
                                <div className="text-[var(--color-brand-orange)] mb-6 group-hover:scale-110 transition-transform flex justify-between items-center">
                                    {STAT_ICONS[idx]}
                                    <span className="text-[10px] font-mono text-gray-600">00{idx + 1}</span>
                                </div>
                                <div className="text-3xl font-bold text-white mb-2 font-mono">{t(`stats.${idx}.value`)}</div>
                                <div className="text-[var(--color-brand-orange)] text-[10px] font-bold uppercase mb-4 tracking-wider">{t(`stats.${idx}.label`)}</div>
                                <p className="text-gray-500 text-[10px] font-mono leading-relaxed">{t(`stats.${idx}.desc`)}</p>
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="py-24 bg-[#050505] border-b border-[#333]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-[#111] border border-[#333] p-12 md:p-20 relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-8 opacity-5">
                            <TrendingUp className="w-64 h-64 text-white" />
                        </div>
                        <div className="relative z-10">
                            <h2 className="text-3xl font-bold text-white mb-12 uppercase tracking-tight">
                                {t("benefits_title")}
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
                                {Array.from({ length: 6 }).map((_, i) => (
                                    <div key={i} className="flex gap-4 items-center border-b border-[#333] pb-4 group">
                                        <div className="w-8 h-8 rounded bg-[var(--color-brand-orange)] flex items-center justify-center flex-shrink-0 group-hover:rotate-12 transition-transform">
                                            <CheckCircle2 className="w-4 h-4 text-black" />
                                        </div>
                                        <p className="text-gray-300 font-mono text-xs leading-relaxed uppercase">{t(`benefits.${i}`)}</p>
                                    </div>
                                ))}
                            </div>
                            <div className="mt-16">
                                <Link
                                    href="#kontakt"
                                    className="inline-flex items-center justify-center px-10 py-5 bg-[var(--color-brand-orange)] text-black font-bold uppercase tracking-wider hover:bg-white transition-all text-sm font-mono brutal-shadow group"
                                >
                                    Zacznijmy generować wyniki
                                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <AnimatedSection animation="reveal">
                <MarketingContentFaq />
            </AnimatedSection>

            {/* Contact Section */}
            <section id="kontakt" className="py-24 bg-[#0a0a0a]">
                <AnimatedSection animation="fade-up">
                    <Contact />
                </AnimatedSection>
            </section>
        </>
    );
}

