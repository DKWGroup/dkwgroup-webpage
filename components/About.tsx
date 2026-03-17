"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { Camera, Instagram, Linkedin, Facebook, Youtube, Video } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export default function About() {
    const t = useTranslations("About");
    const sectionRef = useRef<HTMLElement>(null);
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            if (!sectionRef.current) return;
            const rect = sectionRef.current.getBoundingClientRect();
            const offset = -rect.top / 6;
            setScrollY(offset);
        };
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <section ref={sectionRef} id="o-nas" className="py-16 bg-[#0a0a0a] border-b border-[#333] relative overflow-hidden">

            {/* Scattered Background Icons with Parallax */}
            <div className="absolute inset-0 pointer-events-none z-0">
                <Camera
                    className="absolute w-28 h-28 text-gray-500 opacity-[0.05] rotate-12"
                    style={{ top: "5%", left: "3%", transform: `translateY(${scrollY * 0.3}px) rotate(12deg)` }}
                />
                <Instagram
                    className="absolute w-20 h-20 text-gray-500 opacity-[0.043] -rotate-6"
                    style={{ top: "15%", right: "8%", transform: `translateY(${scrollY * 0.5}px) rotate(-6deg)` }}
                />
                <Linkedin
                    className="absolute w-36 h-36 text-gray-500 opacity-[0.036] rotate-[20deg]"
                    style={{ bottom: "20%", right: "20%", transform: `translateY(${scrollY * 0.4}px) rotate(20deg)` }}
                />
                <Facebook
                    className="absolute w-24 h-24 text-gray-500 opacity-[0.043] -rotate-12"
                    style={{ bottom: "8%", left: "12%", transform: `translateY(${scrollY * 0.6}px) rotate(-12deg)` }}
                />
                <Youtube
                    className="absolute w-32 h-32 text-gray-500 opacity-[0.036] rotate-6"
                    style={{ top: "45%", left: "35%", transform: `translateY(${scrollY * 0.35}px) rotate(6deg)` }}
                />
                <Video
                    className="absolute w-18 h-18 text-gray-500 opacity-[0.05] -rotate-[15deg]"
                    style={{ top: "25%", left: "60%", transform: `translateY(${scrollY * 0.55}px) rotate(-15deg)` }}
                />
                <Camera
                    className="absolute w-40 h-40 text-gray-500 opacity-[0.036] rotate-[30deg]"
                    style={{ bottom: "3%", right: "3%", transform: `translateY(${scrollY * 0.25}px) rotate(30deg)` }}
                />
                <Instagram
                    className="absolute w-16 h-16 text-gray-500 opacity-[0.043] rotate-45"
                    style={{ top: "65%", left: "48%", transform: `translateY(${scrollY * 0.45}px) rotate(45deg)` }}
                />
                <Video
                    className="absolute w-24 h-24 text-gray-500 opacity-[0.043] rotate-[10deg]"
                    style={{ top: "8%", left: "45%", transform: `translateY(${scrollY * 0.5}px) rotate(10deg)` }}
                />
                <Facebook
                    className="absolute w-20 h-20 text-gray-500 opacity-[0.05] -rotate-[25deg]"
                    style={{ top: "55%", right: "5%", transform: `translateY(${scrollY * 0.4}px) rotate(-25deg)` }}
                />
                <Youtube
                    className="absolute w-28 h-28 text-gray-500 opacity-[0.036] rotate-[15deg]"
                    style={{ bottom: "30%", left: "2%", transform: `translateY(${scrollY * 0.35}px) rotate(15deg)` }}
                />
                <Linkedin
                    className="absolute w-16 h-16 text-gray-500 opacity-[0.043] -rotate-[8deg]"
                    style={{ top: "35%", right: "40%", transform: `translateY(${scrollY * 0.6}px) rotate(-8deg)` }}
                />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                    <div className="order-2 lg:order-1 relative">
                        {/* Image with brutalist framing */}
                        <div className="bg-[#111] border border-[#333] brutal-shadow overflow-hidden group relative">
                            <Image
                                src="/portfolio-photos/6ada456e-b927-4747-b584-0259cdc60659_rw_600.webp"
                                alt="Zespół DKW Group na planie"
                                width={800}
                                height={600}
                                className="w-full h-auto object-contain transition-all duration-700 group-hover:scale-[1.03]"
                            />
                        </div>
                        {/* Decorative block */}
                        <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-[var(--color-brand-orange)] -z-10"></div>
                    </div>

                    <div className="order-1 lg:order-2">
                        <h2 className="text-3xl md:text-4xl font-bold font-sans tracking-tight mb-6 uppercase text-white">
                            {t("heading_1")} <span className="text-[var(--color-brand-orange)]">{t("heading_2")}</span>
                        </h2>

                        <p className="text-gray-400 font-mono text-base leading-relaxed mb-5">
                            {t("paragraph_1")}
                        </p>
                        <p className="text-gray-400 font-mono text-base leading-relaxed mb-8">
                            {t("paragraph_2")}
                        </p>

                        <div className="border-t border-[#333] pt-6">
                            <p className="text-xl font-bold text-white mb-2 font-sans leading-tight">
                                {t("stat_sales_title")}
                            </p>
                            <p className="text-gray-400 font-mono text-sm leading-relaxed">
                                {t("stat_sales_desc")}
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
