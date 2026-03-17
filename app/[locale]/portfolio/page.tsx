"use client";

import { Link } from "@/src/i18n/routing";
import { ArrowRight, Filter, X, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect, useCallback } from "react";
import { useTranslations } from "next-intl";

type CategoryFilter = "all" | "video" | "photo";

import Image from "next/image";
import { PORTFOLIO_ITEMS_DATA, PortfolioItem } from "@/src/data/portfolio";
import AnimatedSection from "@/components/AnimatedSection";

export default function PortfolioPage() {
    const [filter, setFilter] = useState<CategoryFilter>("all");
    const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
    const [touchStartX, setTouchStartX] = useState<number>(0);
    const [touchEndX, setTouchEndX] = useState<number>(0);

    const t = useTranslations("Portfolio");

    const filteredItems = filter === "all"
        ? PORTFOLIO_ITEMS_DATA
        : PORTFOLIO_ITEMS_DATA.filter((item) => item.type === filter);

    const openLightbox = (index: number) => {
        setLightboxIndex(index);
    };

    const closeLightbox = () => {
        setLightboxIndex(null);
    };

    const nextImage = useCallback(() => {
        if (lightboxIndex !== null) {
            setLightboxIndex((prev) => (prev === filteredItems.length - 1 ? 0 : prev! + 1));
        }
    }, [lightboxIndex, filteredItems.length]);

    const prevImage = useCallback(() => {
        if (lightboxIndex !== null) {
            setLightboxIndex((prev) => (prev === 0 ? filteredItems.length - 1 : prev! - 1));
        }
    }, [lightboxIndex, filteredItems.length]);

    // Keyboard handlers
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (lightboxIndex === null) return;
            if (e.key === "ArrowRight") nextImage();
            if (e.key === "ArrowLeft") prevImage();
            if (e.key === "Escape") closeLightbox();
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [lightboxIndex, nextImage, prevImage]);

    // Swipe handlers
    const handleTouchStart = (e: React.TouchEvent) => {
        setTouchStartX(e.targetTouches[0].clientX);
    };

    const handleTouchMove = (e: React.TouchEvent) => {
        setTouchEndX(e.targetTouches[0].clientX);
    };

    const handleTouchEnd = () => {
        if (!touchStartX || !touchEndX) return;
        const distance = touchStartX - touchEndX;
        const isLeftSwipe = distance > 50;
        const isRightSwipe = distance < -50;

        if (isLeftSwipe) {
            nextImage();
        } else if (isRightSwipe) {
            prevImage();
        }

        // Reset values
        setTouchStartX(0);
        setTouchEndX(0);
    };

    return (
        <>
            {/* Hero */}
            <section className="pt-28 pb-12 bg-[#050505] border-b border-[#333]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl">
                        <p className="text-[var(--color-brand-orange)] font-mono text-xs uppercase tracking-widest mb-4 font-bold">
                            {t("hero_label")}
                        </p>
                        <h1 className="text-4xl md:text-5xl font-bold font-sans tracking-tight mb-5 uppercase leading-[1.1] text-white">
                            {t("hero_title_1")} <span className="text-[var(--color-brand-orange)]">{t("hero_title_2")}</span>
                        </h1>
                        <p className="text-gray-400 text-base md:text-lg font-mono leading-relaxed max-w-2xl">
                            {t("hero_description")}
                        </p>
                    </div>
                </div>
            </section>

            {/* Filter Bar */}
            <section className="py-6 bg-[#050505] border-b border-[#333] sticky top-20 z-40">
                <AnimatedSection animation="fade-up">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center gap-4 font-mono text-sm">
                        <Filter className="w-4 h-4 text-gray-500" />
                        {(["all", "video", "photo"] as const).map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setFilter(cat)}
                                className={`px-4 py-2 uppercase tracking-wider font-bold border transition-colors ${filter === cat
                                    ? "bg-[var(--color-brand-orange)] text-black border-[var(--color-brand-orange)]"
                                    : "bg-transparent text-gray-400 border-[#333] hover:border-[var(--color-brand-orange)] hover:text-white"
                                    }`}
                            >
                                {t(`filter_${cat}`)}
                            </button>
                        ))}
                    </div>
                </div>
                </AnimatedSection>
            </section>

            {/* Portfolio Grid */}
            <section className="py-12 bg-[#0a0a0a]">
                <AnimatedSection animation="fade-up" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
                        {filteredItems.map((item, index) => {
                            return (
                                <div
                                    key={`${item.type}-${index}`}
                                    className="break-inside-avoid group cursor-pointer"
                                    onClick={() => openLightbox(index)}
                                >
                                    <div
                                        className={`relative bg-[#111] border-2 border-[#333] overflow-hidden transition-all duration-300 group-hover:border-[var(--color-brand-orange)] group-hover:-translate-y-1 brutal-shadow pointer-events-none`}
                                    >
                                        {/* Media Content */}
                                        <div className={`relative w-full ${item.type === 'video' ? 'aspect-video' : 'aspect-[4/5] sm:aspect-[3/4]'}`}>
                                            {item.type === 'video' ? (
                                                <iframe
                                                    src={`https://www.youtube.com/embed/${item.src}?rel=0`}
                                                    title="YouTube Video"
                                                    className="absolute inset-0 w-full h-full"
                                                    allowFullScreen
                                                />
                                            ) : (
                                                <Image
                                                    src={item.src}
                                                    alt={`Realizacja DKW Group - Fotografia ${index + 1}`}
                                                    fill
                                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                                    className="object-cover"
                                                    loading="lazy"
                                                />
                                            )}
                                        </div>

                                        {/* Category tag */}
                                        <div className="absolute top-3 left-3 z-30 pointer-events-none">
                                            <span className={`px-2 py-1 text-[10px] shadow-md font-mono font-bold uppercase tracking-wider ${item.type === "video"
                                                ? "bg-[var(--color-brand-orange)] text-black"
                                                : "bg-white text-black"
                                                }`}>
                                                {item.type === "video" ? t("tag_video") : t("tag_photo")}
                                            </span>
                                        </div>

                                        {/* Decorative corners */}
                                        <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-[var(--color-brand-orange)] opacity-0 group-hover:opacity-100 transition-opacity -translate-x-0.5 -translate-y-0.5 z-30 pointer-events-none"></div>
                                        <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-[var(--color-brand-orange)] opacity-0 group-hover:opacity-100 transition-opacity translate-x-0.5 translate-y-0.5 z-30 pointer-events-none"></div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    {/* Empty state */}
                    {filteredItems.length === 0 && (
                        <div className="text-center py-24">
                            <p className="text-gray-500 font-mono text-sm uppercase tracking-wider">
                                {t("empty")}
                            </p>
                        </div>
                    )}
                </AnimatedSection>
            </section>

            {/* CTA */}
            <section className="py-16 bg-[#050505] border-t border-[#333]">
                <AnimatedSection animation="scale" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold font-sans tracking-tight uppercase text-white mb-6">
                        {t("cta_title")}
                    </h2>
                    <p className="text-gray-400 font-mono text-sm leading-relaxed mb-8 max-w-2xl mx-auto">
                        {t("cta_description")}
                    </p>
                    <Link
                        href="/kontakt"
                        className="inline-flex items-center justify-center px-8 py-4 bg-[var(--color-brand-orange)] text-black font-bold uppercase tracking-wider hover:bg-[var(--color-brand-orange-hover)] transition-colors brutal-shadow text-sm font-mono"
                    >
                        {t("cta_button")}
                        <ArrowRight className="ml-2 w-5 h-5" />
                    </Link>
                </AnimatedSection>
            </section>

            {/* Lightbox / Full-screen overlay */}
            {lightboxIndex !== null && (
                <div
                    className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 backdrop-blur-sm transition-opacity"
                    onClick={closeLightbox}
                    onTouchStart={handleTouchStart}
                    onTouchMove={handleTouchMove}
                    onTouchEnd={handleTouchEnd}
                >
                    <button
                        onClick={closeLightbox}
                        className="absolute top-6 right-6 text-white hover:text-[var(--color-brand-orange)] transition-colors z-[110]"
                        aria-label="Close"
                    >
                        <X size={32} />
                    </button>

                    <button
                        onClick={(e) => { e.stopPropagation(); prevImage(); }}
                        className="absolute left-2 md:left-6 text-white hover:text-[var(--color-brand-orange)] transition-colors z-[110] p-2 bg-black/50 rounded-full"
                        aria-label="Previous"
                    >
                        <ChevronLeft size={36} />
                    </button>

                    <div className="relative w-full max-w-5xl max-h-[90vh] flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
                        {filteredItems[lightboxIndex].type === 'video' ? (
                            <div className="w-full aspect-video border-2 border-[#333] brutal-shadow">
                                <iframe
                                    src={`https://www.youtube.com/embed/${filteredItems[lightboxIndex].src}?autoplay=1&rel=0`}
                                    title="YouTube Video"
                                    className="w-full h-full"
                                    allow="autoplay; fullscreen"
                                    allowFullScreen
                                />
                            </div>
                        ) : (
                            <Image
                                src={filteredItems[lightboxIndex].src}
                                alt={`Powiększona realizacja DKW Group - Fotografia ${lightboxIndex + 1}`}
                                width={1200}
                                height={1200}
                                className="object-contain max-h-[85vh] w-auto border-2 border-[#333] brutal-shadow"
                                unoptimized={filteredItems[lightboxIndex].src.endsWith('.svg')}
                                priority
                            />
                        )}
                    </div>

                    <button
                        onClick={(e) => { e.stopPropagation(); nextImage(); }}
                        className="absolute right-2 md:right-6 text-white hover:text-[var(--color-brand-orange)] transition-colors z-[110] p-2 bg-black/50 rounded-full"
                        aria-label="Next"
                    >
                        <ChevronRight size={36} />
                    </button>

                    <div className="absolute bottom-6 font-mono text-sm tracking-widest text-[var(--color-brand-orange)] font-bold">
                        {lightboxIndex + 1} / {filteredItems.length}
                    </div>
                </div>
            )}
        </>
    );
}
