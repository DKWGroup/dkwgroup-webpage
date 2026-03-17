import { Link } from "@/src/i18n/routing";
import {
  ArrowRight,
  Search,
  CheckCircle2,
  MonitorSmartphone,
  Code2,
  PaintBucket,
  Gauge,
  ShieldCheck,
  Share2,
  PlayCircle,
  ExternalLink,
} from "lucide-react";
import Contact from "@/components/Contact";
import WebsitesFaq from "@/components/WebsitesFaq";
import { useTranslations } from "next-intl";
import AnimatedSection from "@/components/AnimatedSection";

export default function WebsitesServicePage() {
  const t = useTranslations("WebsitesServicePage");

  const PROCESS_ICONS = [
    <Search key="search" />,
    <PaintBucket key="paint" />,
    <Code2 key="code" />,
    <Gauge key="gauge" />
  ];

  const OFFER_ICONS = [
    <MonitorSmartphone key="monitor" />,
    <Search key="search-1" />,
    <Search key="search-2" />,
    <Gauge key="gauge-1" />,
    <ShieldCheck key="shield" />,
    <Share2 key="share" />
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-24 bg-[#0a0a0a] border-b border-[#333]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 border border-[#333] bg-[#111] mb-6">
              <span className="w-2 h-2 rounded-full bg-[var(--color-brand-orange)]"></span>
              <span className="text-[10px] font-bold font-mono text-gray-400 uppercase tracking-widest">
                {t("hero_badge")}
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold font-sans tracking-tight text-white mb-6 uppercase leading-tight">
              {t("hero_title_1")} <br />
              <span className="text-[var(--color-brand-orange)]">{t("hero_title_2")}</span>
            </h1>
            <p className="text-gray-400 font-mono text-base md:text-lg leading-relaxed max-w-3xl mx-auto mb-10">
              {t("hero_description")}
            </p>
            <Link
              href="#kontakt"
              className="inline-flex items-center justify-center px-8 py-4 bg-[var(--color-brand-orange)] text-black font-bold uppercase tracking-wider hover:bg-[#e65c00] transition-colors text-sm font-mono brutal-shadow group"
            >
              {t("hero_cta")}
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Zaproszenie WebDKW */}
      <section className="py-12 bg-black border-b border-[#333]">
        <AnimatedSection animation="fade-right" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="border-l-4 border-[var(--color-brand-orange)] bg-[#0a0a0a] p-8 md:p-12 brutal-shadow flex flex-col md:flex-row items-center justify-between gap-8 group">
            <div className="max-w-2xl">
              <h2 className="text-xl md:text-2xl font-bold uppercase tracking-tight text-white mb-2">
                {t("webdkw_title_1")} <br />
                <span className="text-[var(--color-brand-orange)]">
                  {t("webdkw_title_2")}
                </span>
              </h2>
              <p className="text-gray-400 font-mono text-xs mt-4">
                {t("webdkw_desc")}
              </p>
            </div>
            <a
              href="https://webdkw.net/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-white text-white font-bold uppercase tracking-wider hover:bg-white hover:text-black transition-colors text-xs font-mono w-full md:w-auto text-center"
            >
              {t("webdkw_cta")}
              <ExternalLink className="ml-2 w-4 h-4" />
            </a>
          </div>
        </AnimatedSection>
      </section>

      {/* Nasz Proces Tworzenia */}
      <section className="py-24 bg-[#050505] border-b border-[#333]">
        <AnimatedSection animation="fade-up" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-3xl font-bold font-sans text-white mb-4 tracking-tight uppercase">
              {t("process_title_1")}{" "}
              <span className="text-[var(--color-brand-orange)]">
                {t("process_title_2")}
              </span>
            </h2>
            <p className="text-gray-400 font-mono text-xs leading-relaxed max-w-2xl mx-auto">
              {t("process_desc")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {Array.from({ length: 4 }).map((_, idx) => (
              <div
                key={idx}
                className="bg-[#0a0a0a] border border-[#333] p-8 brutal-shadow group hover:border-[var(--color-brand-orange)] transition-colors"
              >
                <div className="text-[var(--color-brand-orange)] mb-6 group-hover:scale-110 transition-transform origin-left">
                  {PROCESS_ICONS[idx]}
                </div>
                <h3 className="text-lg font-bold text-white mb-4 uppercase tracking-wide">
                  {t(`process_items.${idx}.title`)}
                </h3>
                <p className="text-gray-400 font-mono text-xs leading-relaxed">
                  {t(`process_items.${idx}.desc`)}
                </p>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </section>

      {/* Nasze realizacje w formie 3 Boxów Case Studies */}
      <section className="py-24 bg-[#0a0a0a] border-b border-[#333]">
        <AnimatedSection animation="fade-left" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold font-sans text-white mb-4 tracking-tight uppercase">
              {t("projects_title_1")}{" "}
              <span className="text-[var(--color-brand-orange)]">
                {t("projects_title_2")}
              </span>
            </h2>
            <p className="text-gray-400 font-mono text-xs leading-relaxed max-w-2xl">
              {t("projects_desc")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {Array.from({ length: 3 }).map((_, idx) => (
              <div key={idx} className="bg-[#111] border border-[#333] p-8 brutal-shadow relative group hover:border-[var(--color-brand-orange)] transition-colors flex flex-col h-full">
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-100 group-hover:text-[var(--color-brand-orange)] transition-all pointer-events-none">
                  <PlayCircle className="w-16 h-16" />
                </div>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 border border-[#333] bg-black max-w-max mb-6">
                  <span className="text-[10px] font-bold font-mono text-gray-400 uppercase tracking-widest">
                    {t(`projects_items.${idx}.badge`)}
                  </span>
                </div>
                <h3 className="text-xl font-bold font-sans text-white uppercase tracking-tight mb-2">
                  {t(`projects_items.${idx}.title`)}
                </h3>
                <p className="text-[var(--color-brand-orange)] font-mono text-xs uppercase tracking-widest font-bold mb-6">
                  {t(`projects_items.${idx}.client`)}
                </p>
                <p className="text-gray-400 font-mono text-xs leading-relaxed mb-8 flex-grow">
                  {t(`projects_items.${idx}.desc`)}
                </p>
                <Link
                  href="/case-studies"
                  className="inline-flex items-center justify-between border-t border-[#333] pt-4 font-mono text-xs font-bold text-white uppercase tracking-widest hover:text-[var(--color-brand-orange)] transition-colors w-full"
                >
                  {t("projects_cta")}
                  <ArrowRight className="w-4 h-4 ml-2 opacity-50 text-[var(--color-brand-orange)]" />
                </Link>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </section>

      {/* Co Oferujemy / Optymalizacja SEO & Korzyści */}
      <section className="py-24 bg-[#050505] border-b border-[#333]">
        <AnimatedSection animation="fade-up" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Co Oferujemy */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold font-sans text-white mb-6 tracking-tight uppercase border-b border-[#333] pb-6">
                {t("offer_title_1")}{" "}
                <span className="text-[var(--color-brand-orange)]">
                  {t("offer_title_2")}
                </span>
              </h2>
              <p className="text-gray-400 font-mono text-xs leading-relaxed mb-8">
                {t("offer_desc")}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                {Array.from({ length: 6 }).map((_, idx) => (
                  <div
                    key={idx}
                    className="flex flex-col gap-2 border border-[#333] p-4 text-sm font-mono text-gray-300 bg-[#111]"
                  >
                    <div className="text-[var(--color-brand-orange)]">
                      {OFFER_ICONS[idx]}
                    </div>
                    <span>{t(`offer_items.${idx}`)}</span>
                  </div>
                ))}
              </div>

              {/* SEO Highlight Box */}
              <div className="bg-[#111] border border-[var(--color-brand-orange)] p-8 brutal-shadow">
                <h3 className="text-xl font-bold font-sans text-white uppercase tracking-tight mb-4">
                  {t("seo_title")}
                </h3>
                <p className="text-gray-400 font-mono text-xs leading-relaxed">
                  {t("seo_desc")}
                </p>
              </div>
            </div>

            {/* Korzyści */}
            <div className="bg-[#0a0a0a] border border-[#333] p-8 md:p-12 brutal-shadow">
              <h2 className="text-2xl md:text-3xl font-bold font-sans text-white mb-6 tracking-tight uppercase">
                {t("benefits_title_1")} <br />
                <span className="text-[var(--color-brand-orange)]">
                  {t("benefits_title_2")}
                </span>
              </h2>
              <p className="text-gray-400 font-mono text-xs leading-relaxed mb-8">
                {t("benefits_desc")}
              </p>

              <div className="grid grid-cols-1 gap-4 mb-10">
                {Array.from({ length: 5 }).map((_, i) => (
                  <div
                    key={i}
                    className="flex gap-3 items-start border-l-4 border-[var(--color-brand-orange)] pl-4 py-2 hover:bg-[#111] transition-colors rounded-sm"
                  >
                    <CheckCircle2 className="w-5 h-5 text-[var(--color-brand-orange)] flex-shrink-0 mt-0.5" />
                    <p className="text-white font-mono text-xs leading-relaxed uppercase">
                      {t(`benefits_items.${i}`)}
                    </p>
                  </div>
                ))}
              </div>

              <Link
                href="#kontakt"
                className="w-full inline-flex items-center justify-center px-8 py-4 bg-[var(--color-brand-orange)] text-black font-bold uppercase tracking-wider hover:bg-[#e65c00] transition-colors text-xs font-mono brutal-shadow group"
              >
                {t("benefits_cta")}
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* Zunifikowane FAQ */}
      <AnimatedSection animation="reveal">
        <WebsitesFaq />
      </AnimatedSection>

      {/* Zakończenie CTA */}
      <section className="bg-[#050505]">
        <AnimatedSection animation="scale" className="bg-[var(--color-brand-orange)] p-12 md:p-24 text-center border-b border-[#333] max-w-7xl mx-auto my-12 brutal-shadow">
          <h2 className="text-3xl md:text-4xl font-bold font-sans tracking-tight text-black mb-6 uppercase">
            {t("cta_title_1")} <span className="text-white">{t("cta_title_2")}</span>
          </h2>
          <p className="font-mono text-black/80 font-bold mb-8 max-w-2xl mx-auto text-xs">
            {t("cta_desc")}
          </p>
          <Link
            href="#kontakt"
            className="inline-flex items-center justify-center px-8 py-4 bg-black text-white font-bold uppercase tracking-wider hover:bg-[#222] transition-colors text-sm font-mono brutal-shadow group"
          >
            {t("cta_button")}
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform text-[var(--color-brand-orange)]" />
          </Link>
        </AnimatedSection>
        <AnimatedSection animation="fade-up">
            <Contact />
        </AnimatedSection>
      </section>
    </>
  );
}
