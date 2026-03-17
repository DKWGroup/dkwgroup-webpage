import { Link } from "@/src/i18n/routing";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { useTranslations } from "next-intl";

export default function Hero() {
    const t = useTranslations("Hero");

    return (
        <section id="hero" className="relative min-h-[75vh] flex items-center bg-[#050505] overflow-hidden border-b border-[#333] pt-[16vh] pb-[12vh] scroll-mt-20">
            {/* Background Video */}
            <video
                src="/videos/film na strone podcast.mp4"
                autoPlay
                loop
                muted
                playsInline
                preload="none"
                className="absolute inset-0 w-full h-full object-cover z-0 opacity-40 brightness-50"
            />

            {/* Background brutalist accents over the video */}
            <div className="absolute top-0 right-0 w-[40vw] h-[100vh] bg-[var(--color-brand-orange)] opacity-10 rotate-12 blur-3xl translate-x-1/4 z-0"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
                <div className="max-w-4xl">
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold font-sans tracking-tight mb-6 uppercase leading-[1.05] drop-shadow-lg">
                        {t("title_1")} <span className="text-[var(--color-brand-orange)] block">{t("title_2")}</span> {t("title_3")}
                    </h1>

                    <p className="text-gray-300 text-sm md:text-base mb-10 max-w-2xl font-mono leading-relaxed drop-shadow-md">
                        {t("description")}
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 font-mono">
                        <Link
                            href="/kontakt"
                            className="inline-flex items-center justify-center px-8 py-4 bg-[var(--color-brand-orange)] text-black font-bold uppercase tracking-wider hover:bg-[var(--color-brand-orange-hover)] transition-colors brutal-shadow text-sm md:text-base"
                        >
                            {t("cta_contact")}
                            <ArrowRight className="ml-3 w-6 h-6" />
                        </Link>

                        <Link
                            href="/portfolio"
                            className="inline-flex items-center justify-center px-8 py-4 bg-black/50 backdrop-blur-sm border-2 border-[#333] text-white font-bold uppercase tracking-wider hover:border-[var(--color-brand-orange)] hover:text-[var(--color-brand-orange)] hover:bg-black/80 transition-all brutal-shadow text-sm md:text-base"
                        >
                            {t("cta_projects")}
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
