"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function StatsSection() {
    const sectionRef = useRef<HTMLElement>(null);
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            if (!sectionRef.current) return;
            const rect = sectionRef.current.getBoundingClientRect();
            // Start parallax when section starts coming into view
            const scrollPercent = (window.innerHeight - rect.top) / (window.innerHeight + rect.height);
            setScrollY(scrollPercent);
        };
        window.addEventListener("scroll", handleScroll, { passive: true });
        handleScroll(); // initial call
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <section ref={sectionRef} className="py-16 bg-[#050505] border-b border-[#333] relative overflow-hidden">

            {/* Background image with parallax and darkening overlay */}
            <div className="absolute inset-0 z-0 overflow-hidden">
                <div
                    className="absolute inset-0 w-full h-[150%]"
                    style={{
                        transform: `translateY(${(scrollY - 0.5) * 100}px)`,
                        transition: 'transform 0.1s ease-out'
                    }}
                >
                    <Image
                        src="/portfolio-photos/e364656d-2780-4a39-ab5d-4edddd77a4d5_rw_600.webp"
                        alt=""
                        fill
                        className="object-cover brightness-[0.18] blur-[1px]"
                    />
                </div>
                {/* Dark overlay to ensure text readability */}
                <div className="absolute inset-0 bg-black/40 z-10"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">

                    <div className="flex flex-col items-center md:items-start group">
                        <div className="text-3xl lg:text-4xl font-bold font-sans text-white mb-3 tracking-tighter w-full border-b-2 border-[#333] pb-3 group-hover:border-[var(--color-brand-orange)] transition-colors inline-block decoration-2">
                            <span className="text-[var(--color-brand-orange)]">+10 mln</span> wyświetleń organicznych
                        </div>
                        <p className="text-gray-400 font-mono text-sm leading-relaxed max-w-sm mt-2">
                            wygenerowane w 6 miesięcy od startu kanału Kokpit Kamila
                        </p>
                    </div>

                    <div className="flex flex-col items-center md:items-start group">
                        <div className="text-4xl lg:text-5xl font-bold font-sans text-white mb-4 tracking-tighter w-full border-b-2 border-[#333] pb-4 group-hover:border-[var(--color-brand-orange)] transition-colors inline-block decoration-2">
                            <span className="text-[var(--color-brand-orange)]">+450 000</span> subskrybentów
                        </div>
                        <p className="text-gray-400 font-mono text-sm leading-relaxed max-w-sm mt-2">
                            w ciągu 5 lat prowadzenia kanału
                        </p>
                    </div>

                    <div className="flex flex-col items-center md:items-start group">
                        <div className="text-4xl lg:text-5xl font-bold font-sans text-white mb-4 tracking-tighter w-full border-b-2 border-[#333] pb-4 group-hover:border-[var(--color-brand-orange)] transition-colors inline-block decoration-2">
                            <span className="text-[var(--color-brand-orange)]">Setki</span> osób
                        </div>
                        <p className="text-gray-400 font-mono text-sm leading-relaxed max-w-sm mt-2">
                            zarejestrowało się do udziału w konkursie edukacyjnym metamorfozy finansowej
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
}
