"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { Camera, Video, Youtube, Instagram, Linkedin, Facebook } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import AnimatedSection from "@/components/AnimatedSection";

export default function History() {
    const t = useTranslations("History");
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
        <section ref={sectionRef} className="py-16 bg-[#050505] border-b border-[#333] relative overflow-hidden">

            {/* Parallax Background Icons */}
            <div className="absolute inset-0 pointer-events-none z-0">
                <Camera
                    className="absolute w-24 h-24 text-gray-500 opacity-[0.04] rotate-12"
                    style={{ top: "8%", left: "5%", transform: `translateY(${scrollY * 0.3}px) rotate(12deg)` }}
                />
                <Video
                    className="absolute w-20 h-20 text-gray-500 opacity-[0.035] -rotate-[15deg]"
                    style={{ top: "20%", right: "10%", transform: `translateY(${scrollY * 0.5}px) rotate(-15deg)` }}
                />
                <Youtube
                    className="absolute w-28 h-28 text-gray-500 opacity-[0.03] rotate-6"
                    style={{ bottom: "15%", left: "8%", transform: `translateY(${scrollY * 0.35}px) rotate(6deg)` }}
                />
                <Instagram
                    className="absolute w-16 h-16 text-gray-500 opacity-[0.04] rotate-45"
                    style={{ bottom: "25%", right: "15%", transform: `translateY(${scrollY * 0.45}px) rotate(45deg)` }}
                />
                <Linkedin
                    className="absolute w-20 h-20 text-gray-500 opacity-[0.03] -rotate-[8deg]"
                    style={{ top: "50%", left: "40%", transform: `translateY(${scrollY * 0.4}px) rotate(-8deg)` }}
                />
                <Facebook
                    className="absolute w-18 h-18 text-gray-500 opacity-[0.035] rotate-[20deg]"
                    style={{ top: "10%", left: "60%", transform: `translateY(${scrollY * 0.55}px) rotate(20deg)` }}
                />
            </div>

            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                    <AnimatedSection animation="fade-right" className="order-2 lg:order-1">
                        <h2 className="text-3xl md:text-4xl font-bold font-sans tracking-tight uppercase text-white mb-6">
                            {t("heading_1")} <span className="text-[var(--color-brand-orange)]">{t("heading_2")}</span>
                        </h2>

                        <div className="space-y-4 text-gray-400 font-mono text-sm leading-relaxed">
                            <p>{t("paragraphs.0")}</p>
                            <p>{t("paragraphs.1")}</p>
                            <p>{t("paragraphs.2")}</p>
                        </div>

                        <div className="w-20 h-1.5 bg-[var(--color-brand-orange)] mt-8"></div>
                    </AnimatedSection>

                    <AnimatedSection animation="fade-left" className="order-1 lg:order-2 relative">
                        {/* Image Box */}
                        <div className="bg-[#111] border border-[#333] brutal-shadow flex items-center justify-center overflow-hidden group">
                            <Image
                                src="/photos/IMG_2753.webp"
                                alt="Historia DKW Group"
                                width={800}
                                height={800}
                                className="w-full h-auto object-contain transition-all duration-700 group-hover:scale-105"
                            />
                        </div>
                        {/* Decals background */}
                        <div className="absolute -top-4 -right-4 w-24 h-24 bg-[var(--color-brand-orange)] opacity-20 blur-2xl -z-10"></div>
                    </AnimatedSection>

                </div>
            </div>
        </section>
    );
}
