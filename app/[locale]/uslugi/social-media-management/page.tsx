import { Link } from "@/src/i18n/routing";
import { ArrowRight, TrendingUp, Users, Target, BarChart3, MessageSquare, ShieldCheck, CheckCircle2, AlertCircle, Zap, LineChart } from "lucide-react";
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

    const APPROACH_ICONS = [
        <Target key="target" className="w-7 h-7 text-[var(--color-brand-orange)]" />,
        <MessageSquare key="message" className="w-7 h-7 text-[var(--color-brand-orange)]" />,
        <Zap key="zap" className="w-7 h-7 text-[var(--color-brand-orange)]" />,
        <LineChart key="linechart" className="w-7 h-7 text-[var(--color-brand-orange)]" />
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

            {/* Section 1: Problem – Why your social media isn't working */}
            <section className="py-24 bg-[#050505] border-b border-[#333] relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-red-500/[0.02] to-transparent pointer-events-none" />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <AnimatedSection animation="fade-up">
                        <div className="text-center mb-16">
                            <div className="inline-flex items-center gap-2 px-4 py-2 border border-red-500/20 bg-red-500/5 mb-8">
                                <AlertCircle className="w-4 h-4 text-red-500" />
                                <span className="text-[11px] font-bold font-mono text-red-400 uppercase tracking-widest">{t("problem_badge")}</span>
                            </div>
                            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 uppercase tracking-tight">
                                {t("problem_title")}
                            </h2>
                            <p className="text-gray-400 font-mono text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
                                {t("problem_desc")}
                            </p>
                        </div>
                    </AnimatedSection>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                        <AnimatedSection animation="fade-right">
                            <div className="h-full p-8 md:p-10 bg-[#111] border border-red-500/20 relative group hover:border-red-500/40 transition-colors">
                                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-500/50 to-transparent" />
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="w-10 h-10 bg-red-500/10 flex items-center justify-center">
                                        <AlertCircle className="w-5 h-5 text-red-500" />
                                    </div>
                                    <h3 className="text-white font-bold uppercase tracking-wider text-sm">{t("agencies_title")}</h3>
                                </div>
                                <p className="text-gray-500 text-sm font-mono leading-relaxed">{t("agencies_problem")}</p>
                                <div className="mt-6 flex flex-wrap gap-2">
                                    {Array.from({ length: 3 }).map((_, i) => (
                                        <span key={i} className="px-3 py-1 text-[10px] font-mono font-bold uppercase tracking-wider bg-red-500/5 text-red-400/60 border border-red-500/10">
                                            {t(`agencies_tags.${i}`)}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </AnimatedSection>

                        <AnimatedSection animation="fade-left">
                            <div className="h-full p-8 md:p-10 bg-[#111] border border-[var(--color-brand-orange)]/20 relative group hover:border-[var(--color-brand-orange)]/50 transition-colors">
                                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[var(--color-brand-orange)] to-transparent" />
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="w-10 h-10 bg-[var(--color-brand-orange)]/10 flex items-center justify-center">
                                        <CheckCircle2 className="w-5 h-5 text-[var(--color-brand-orange)]" />
                                    </div>
                                    <h3 className="text-white font-bold uppercase tracking-wider text-sm">DKW Group</h3>
                                </div>
                                <p className="text-gray-400 text-sm font-mono leading-relaxed">{t("our_approach")}</p>
                                <div className="mt-6 flex flex-wrap gap-2">
                                    {Array.from({ length: 3 }).map((_, i) => (
                                        <span key={i} className="px-3 py-1 text-[10px] font-mono font-bold uppercase tracking-wider bg-[var(--color-brand-orange)]/5 text-[var(--color-brand-orange)]/70 border border-[var(--color-brand-orange)]/10">
                                            {t(`dkw_tags.${i}`)}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </AnimatedSection>
                    </div>
                </div>
            </section>

            {/* Section 2: Our Approach – What makes us different */}
            <section className="py-24 bg-[#0a0a0a] border-b border-[#333]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <AnimatedSection animation="fade-up">
                        <div className="text-center mb-16">
                            <p className="text-[var(--color-brand-orange)] font-mono text-xs uppercase tracking-widest mb-4 font-bold">{t("approach_badge")}</p>
                            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 uppercase tracking-tight">
                                {t("approach_title")}
                            </h2>
                            <p className="text-gray-400 font-mono text-sm leading-relaxed max-w-2xl mx-auto">
                                {t("approach_desc")}
                            </p>
                            <div className="w-24 h-1 bg-[var(--color-brand-orange)] mx-auto mt-8" />
                        </div>
                    </AnimatedSection>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {Array.from({ length: 4 }).map((_, i) => (
                            <AnimatedSection key={i} animation="scale" delay={i * 0.1}>
                                <div className="h-full p-8 bg-[#111] border border-[#333] hover:border-[var(--color-brand-orange)] transition-all duration-300 group relative overflow-hidden">
                                    <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-[var(--color-brand-orange)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                                    <div className="w-14 h-14 bg-[var(--color-brand-orange)]/10 flex items-center justify-center mb-6 group-hover:bg-[var(--color-brand-orange)]/20 transition-colors">
                                        {APPROACH_ICONS[i]}
                                    </div>
                                    <h3 className="text-white font-bold uppercase text-sm tracking-wider mb-3">{t(`approach_items.${i}.title`)}</h3>
                                    <p className="text-gray-500 text-xs font-mono leading-relaxed">{t(`approach_items.${i}.desc`)}</p>
                                </div>
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </section>

            {/* Numbers Section */}
            <section className="py-24 bg-[#050505] border-b border-[#333]">
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
            <section className="py-24 bg-[#0a0a0a] border-b border-[#333]">
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
                                    {t("benefits_cta")}
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

