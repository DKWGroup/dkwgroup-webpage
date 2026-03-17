import { Link } from "@/src/i18n/routing";
import { ArrowRight, Camera } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";

interface ServiceDetailHeroProps {
    bgImage?: string;
    isAltLayout?: boolean;
}

export default function ServiceDetailHero({ bgImage, isAltLayout = false }: ServiceDetailHeroProps) {
    const t = useTranslations("ServiceDetailHero");

    return (
        <section className="relative pt-32 pb-24 border-b border-[#333] overflow-hidden">
            {bgImage && (
                <div className="absolute inset-0 z-0">
                    <Image
                        src={bgImage}
                        alt=""
                        fill
                        className="object-cover opacity-40"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-[#0a0a0a]/80 to-transparent"></div>
                </div>
            )}
            {!bgImage && <div className="absolute inset-0 bg-[#0a0a0a] -z-10"></div>}

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className={`flex flex-col ${isAltLayout ? 'lg:flex-row lg:text-left items-start' : 'text-center items-center'} gap-12`}>
                    <div className={isAltLayout ? 'lg:w-2/3' : 'w-full'}>
                        <h1 className="text-4xl md:text-5xl font-bold font-sans tracking-tight text-white mb-6 uppercase leading-[1.1]">
                            {t("heading_1")} <span className="text-[var(--color-brand-orange)]">{t("heading_2")}</span>
                        </h1>
                        <p className="text-gray-400 font-mono text-base md:text-lg leading-relaxed max-w-3xl mb-10">
                            {t("description")}
                        </p>
                        <Link
                            href="#kontakt"
                            className="inline-flex items-center justify-center px-8 py-4 bg-[var(--color-brand-orange)] text-black font-bold uppercase tracking-wider hover:bg-[var(--color-brand-orange-hover)] transition-colors text-sm font-mono brutal-shadow"
                        >
                            {t("cta")}
                            <ArrowRight className="ml-2 w-5 h-5" />
                        </Link>
                    </div>

                    {isAltLayout && (
                        <div className="lg:w-1/3 flex justify-center lg:justify-end items-center">
                            <div className="relative w-64 h-64 md:w-[450px] md:h-[450px] flex items-center justify-center">
                                <div className="absolute inset-0 bg-[var(--color-brand-orange)] opacity-20 blur-[100px] rounded-full animate-pulse"></div>
                                <div className="animate-3d-camera relative z-10 w-full h-full flex items-center justify-center">
                                    <Image 
                                        src="/brain/92b3ba81-f523-4312-bfa4-1af604c3e4e1/cinema_camera_3d_render_1773755206945.png"
                                        alt="Cinema Camera 3D"
                                        width={600}
                                        height={600}
                                        className="object-contain drop-shadow-[0_0_50px_rgba(255,106,0,0.3)]"
                                        priority
                                    />
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}
