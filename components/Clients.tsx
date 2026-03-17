import { useTranslations } from "next-intl";
import Image from "next/image";

export default function Clients() {
    const t = useTranslations("Clients");

    // List of logos from /public/logos
    const CLIENT_LOGOS = [
        { name: "Akademia Lutowania", src: "/logos/akademia-lutowania.webp" },
        { name: "Contenty", src: "/logos/contenty.webp" },
        { name: "Grzegorz Kusz", src: "/logos/gk.webp" },
        { name: "GlowUP", src: "/logos/glowup.webp" },
        { name: "Investment Partners", src: "/logos/inp.svg" },
        { name: "MKHelicopters", src: "/logos/mkhelicopters.webp" },
        { name: "WellDone", src: "/logos/welldone.webp" }
    ];

    // Triplicate for a truly seamless infinite scroll
    const SCROLLING_LOGOS = [...CLIENT_LOGOS, ...CLIENT_LOGOS, ...CLIENT_LOGOS];

    return (
        <section id="zaufali" className="py-16 bg-[#0a0a0a]/50 border-y border-[#1a1a1a] overflow-hidden relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 relative z-10">
                <div className="text-center">
                    <h2 className="text-lg md:text-xl lg:text-2xl font-normal font-sans tracking-tight text-gray-500 animate-fade-in-up">
                        {t("heading_1")} {t("heading_2")}
                    </h2>
                </div>
            </div>

            {/* Marquee Track Container */}
            <div className="relative w-full max-w-[1300px] mx-auto overflow-hidden group py-10 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
                <div className="flex w-max items-center shrink-0 animate-marquee group-hover:[animation-play-state:paused] gap-12 md:gap-24 px-4">
                    {SCROLLING_LOGOS.map((client, index) => (
                        <div
                            key={index}
                            className="flex items-center justify-center shrink-0 opacity-60 hover:opacity-100 grayscale hover:grayscale-0 transition-all duration-500 h-6 md:h-10 lg:h-12"
                        >
                            <Image
                                src={client.src}
                                alt={client.name}
                                width={400}
                                height={200}
                                className="object-contain w-auto h-full mix-blend-lighten"
                                style={{ width: 'auto' }}
                                unoptimized={client.src.endsWith('.svg')}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
