"use client";

import Image from "next/image";
import React, { useState, useRef, useEffect } from "react";
import { LazyMotion, domAnimation, m, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { createPortal } from "react-dom";
import { useTranslations } from "next-intl";

// All available portfolio photos
const ALL_PORTFOLIO_IMAGES = [
    "/portfolio-photos/049a4d30-a665-483b-9054-6b1f1f036605_rw_600.webp",
    "/portfolio-photos/049b9eb1-f016-42a7-b68d-ac9604341e4e_rw_600.webp",
    "/portfolio-photos/069c54d6-020e-498c-89eb-e025c6c350ec_rw_600.webp",
    "/portfolio-photos/069d2c6b-3c9e-425a-9084-dd6148e70c12_rw_600.webp",
    "/portfolio-photos/0cdfc56b-23a1-465e-bcfa-7939200b83bf_rw_600.webp",
    "/portfolio-photos/0d5adc9f-e986-4b25-8526-65ce308f5f7f_rw_600.webp",
    "/portfolio-photos/16525e8c-a557-4b38-addb-47db41de14c0_rw_600.webp",
    "/portfolio-photos/16e5cfd0-9195-40f2-838d-ea3616add0cf_rw_600.webp",
    "/portfolio-photos/1a3ec254-55ae-473f-89f7-a54584e0d716_rw_600.webp",
    "/portfolio-photos/1e7fb7c5-cd55-4249-872c-ee1c230dd04b_rw_600.webp",
    "/portfolio-photos/25ff374b-c153-4d9e-bf28-bc4ef53578a3_rw_600.webp",
    "/portfolio-photos/2da5023c-4800-4b3d-bbf4-9e4fac11fc4a_rw_600.webp",
    "/portfolio-photos/2e31896e-dcb5-45cc-b969-a317c22d45be_rw_600.webp",
    "/portfolio-photos/2fc222ab-1875-4260-9d9e-ed4517a930ba_rw_600.webp",
    "/portfolio-photos/38e498db-d2ee-495f-b8c1-c3c5195cf2f9_rw_600.webp",
    "/portfolio-photos/46988c5f-063c-45af-9903-63d305aac922_rw_600.webp",
    "/portfolio-photos/4992ed1d-c00a-483c-a79e-fd18e4b28684_rw_600.webp",
    "/portfolio-photos/5011c1ef-edbe-4226-a177-9654ea496318_rw_600.webp",
    "/portfolio-photos/50ffcd83-52fc-437e-a7ec-b38bc1e63a36_rw_600.webp",
    "/portfolio-photos/53c390e8-d0c4-46ae-8cd2-55d3f56b3585_rw_600.webp",
    "/portfolio-photos/6310d573-4f44-42c1-be78-7fb5c77899ba_rw_600.webp",
    "/portfolio-photos/6ada456e-b927-4747-b584-0259cdc60659_rw_600.webp",
    "/portfolio-photos/6afb892b-9fcd-4c47-be04-0872f8bfb8b7_rw_600.webp",
    "/portfolio-photos/6edf6483-cc75-4061-8004-e892a62cdaca_rw_600.webp",
    "/portfolio-photos/7595251f-b1e4-45b7-b9eb-6bd858e14a44_rw_600.webp",
    "/portfolio-photos/76ad12e6-6966-4374-841f-32b1baad5255_rw_600.webp",
    "/portfolio-photos/82522780-066e-4c2b-b217-f6d29221c148_rw_600.webp",
    "/portfolio-photos/9001d016-c64f-4224-9765-6a4f6abf7baa_rw_600.webp",
    "/portfolio-photos/91ecfcb4-9710-4e7d-a6c3-41d30627b907_rw_600.webp",
    "/portfolio-photos/975b70b0-e1d6-40f7-8f5b-b0365bb6eaed_rw_600.webp",
    "/portfolio-photos/9fa60863-5493-4d36-9bb8-281525a081e7_rw_600.webp",
    "/portfolio-photos/9fe27075-00c3-450f-b278-77dc21105c31_rw_600.webp",
    "/portfolio-photos/a019fa1c-2e99-4e4a-ab90-6bc84aa18055_rw_600.webp",
    "/portfolio-photos/a03ff4e2-9a7e-43d1-b9cb-2064dcbf7ff6_rw_600.webp",
    "/portfolio-photos/a2181740-5af5-4366-bb46-76aef412ced6_rw_600.webp",
    "/portfolio-photos/a425da50-4e41-4719-b24c-2a6d9131ddbf_rw_600.webp",
    "/portfolio-photos/afe7f77f-5905-458a-9fd4-f1c90174a269_rw_600.webp",
    "/portfolio-photos/b0663644-808f-4795-9da9-d07c96b39c74_rw_600.webp",
    "/portfolio-photos/b726bc2c-4eb0-43da-9894-8b43de614966_rw_600.webp",
    "/portfolio-photos/b7babf96-a9c8-42c4-beb2-311b18249bce_rw_600.webp",
    "/portfolio-photos/bc776aa1-9d2d-40ac-aec3-7f366b4f4d8f_rw_600.webp",
    "/portfolio-photos/c44f07bb-0445-43ff-922b-585a24ad9d91_rw_600.webp",
    "/portfolio-photos/c7d31aa1-39c6-43cc-97a0-65616ae4902c_rw_600.webp",
    "/portfolio-photos/d329bcb7-6c95-4d91-9ceb-c85b12df6d6f_rw_600.webp",
    "/portfolio-photos/dcd60b4a-bf91-48ed-be6e-4f37e2e478fa_rw_600.webp",
    "/portfolio-photos/e0c3f477-3a83-4acd-a14f-58beecc90d1c_rw_600.webp",
    "/portfolio-photos/e364656d-2780-4a39-ab5d-4edddd77a4d5_rw_600.webp",
    "/portfolio-photos/e55a4c13-f006-438b-9513-66464dae5ade_rw_600.webp",
];

// Wybieramy na stałe dla stabilności 16 sztuk - dłuższy pas żeby było co przeciągać
const GALLERY_IMAGES = ALL_PORTFOLIO_IMAGES.slice(0, 16);

export default function ScrollingImages() {
    const carouselRef = useRef<HTMLDivElement>(null);
    const [isDragging, setIsDragging] = useState(false);
    const isMouseDown = useRef(false);
    const startX = useRef(0);
    const scrollLeftStart = useRef(0);
    
    // Lightbox state
    const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
    const [isMounted, setIsMounted] = useState(false);
    const t = useTranslations("ScrollingImages");

    useEffect(() => {
        setIsMounted(true);
    }, []);

    // Mouse drag-to-scroll handlers
    const handleMouseDown = (e: React.MouseEvent) => {
        if (!carouselRef.current) return;
        isMouseDown.current = true;
        setIsDragging(false);
        startX.current = e.pageX - carouselRef.current.offsetLeft;
        scrollLeftStart.current = carouselRef.current.scrollLeft;
    };

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!isMouseDown.current || !carouselRef.current) return;
        e.preventDefault();
        const x = e.pageX - carouselRef.current.offsetLeft;
        const walk = (x - startX.current) * 1.5;
        if (Math.abs(walk) > 5) setIsDragging(true);
        carouselRef.current.scrollLeft = scrollLeftStart.current - walk;
    };

    const handleMouseUp = () => {
        isMouseDown.current = false;
        setTimeout(() => setIsDragging(false), 50);
    };

    const handleImageClick = (e: React.MouseEvent, index: number) => {
        // Prevent click if we were just dragging
        if (isDragging) {
            e.preventDefault();
            e.stopPropagation();
            return;
        }
        setSelectedIndex(index);
    };

    const closeLightbox = () => {
        setSelectedIndex(null);
    };

    const showNext = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (selectedIndex !== null) {
            setSelectedIndex((selectedIndex + 1) % GALLERY_IMAGES.length);
        }
    };

    const showPrev = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (selectedIndex !== null) {
            setSelectedIndex((selectedIndex - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length);
        }
    };

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (selectedIndex === null) return;
            if (e.key === 'Escape') closeLightbox();
            if (e.key === 'ArrowRight') {
                setSelectedIndex((prev) => (prev !== null ? (prev + 1) % GALLERY_IMAGES.length : null));
            }
            if (e.key === 'ArrowLeft') {
                setSelectedIndex((prev) => (prev !== null ? (prev - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length : null));
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        // Lock body scroll when lightbox is open
        if (selectedIndex !== null) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
            document.body.style.overflow = 'unset';
        };
    }, [selectedIndex]);

    return (
        <LazyMotion features={domAnimation}>
            <section className="bg-[#050505] overflow-hidden border-b border-[#333] py-8">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-4 flex justify-between items-end">
                    <div>
                        <h2 className="text-xl md:text-2xl font-bold font-sans text-white uppercase tracking-tight">{t("heading_1")} <span className="text-[var(--color-brand-orange)]">{t("heading_2")}</span></h2>
                        <p className="text-gray-500 font-mono text-xs uppercase tracking-widest mt-1">{t("subheading")}</p>
                    </div>
                    {/* Wskaźnik przeciągania */}
                    <div className="hidden sm:flex gap-1">
                        <m.div 
                            animate={{ x: [-5, 0, -5] }} 
                            transition={{ repeat: Infinity, duration: 1.5 }}
                            className="w-8 h-[2px] bg-[var(--color-brand-orange)]/50"
                        />
                        <m.div 
                            animate={{ x: [5, 0, 5] }} 
                            transition={{ repeat: Infinity, duration: 1.5 }}
                            className="w-8 h-[2px] bg-white/50"
                        />
                    </div>
                </div>

                <div 
                    ref={carouselRef}
                    onMouseDown={handleMouseDown}
                    onMouseMove={handleMouseMove}
                    onMouseUp={handleMouseUp}
                    onMouseLeave={handleMouseUp}
                    className="relative w-full h-[40vh] md:h-[50vh] border-y border-[#333] cursor-grab active:cursor-grabbing overflow-x-auto scrollbar-hide scroll-smooth snap-x snap-mandatory"
                    style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                >
                    <div className="flex h-full w-max">
                        {GALLERY_IMAGES.map((src, index) => (
                            <div
                                key={index}
                                onClick={(e) => handleImageClick(e, index)}
                                className="relative h-full w-[60vw] sm:w-[50vw] md:w-[35vw] lg:w-[25vw] flex-shrink-0 group/img overflow-hidden border-r border-[#333] transition-all hover:z-10 bg-[#111] snap-start"
                            >
                                <Image
                                    src={src}
                                    alt={`Portfolio showcase ${index + 1}`}
                                    fill
                                    sizes="(max-width: 640px) 60vw, (max-width: 768px) 50vw, (max-width: 1024px) 35vw, 25vw"
                                    className="object-cover transition-transform duration-700 group-hover/img:scale-105 pointer-events-none"
                                />
                                {/* Subtle overlay */}
                                <div className="absolute inset-0 bg-black/20 group-hover/img:bg-transparent transition-colors duration-500 pointer-events-none"></div>
                                <div className="absolute bottom-4 left-4 bg-black/70 backdrop-blur-sm px-3 py-1.5 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center gap-2 border border-[#333] pointer-events-none">
                                    <span className="w-1.5 h-1.5 bg-[var(--color-brand-orange)] rounded-full animate-pulse"></span>
                                    <span className="text-[10px] font-mono text-white tracking-widest uppercase">{t("zoom_label")}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Lightbox Modal */}
            {isMounted && selectedIndex !== null && createPortal(
                <AnimatePresence>
                    <m.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md"
                        onClick={closeLightbox}
                    >
                        {/* Close button */}
                        <button
                            className="absolute top-6 right-6 z-50 p-2 text-white/50 hover:text-white bg-black/50 hover:bg-black border border-white/10 hover:border-white/30 transition-all rounded-full group outline-none"
                            onClick={(e) => { e.stopPropagation(); closeLightbox(); }}
                        >
                            <X className="w-6 h-6 group-hover:rotate-90 transition-transform duration-300" />
                        </button>

                        {/* Prev button */}
                        <button
                            className="absolute left-4 md:left-8 z-50 p-3 text-white/50 hover:text-white bg-black/50 hover:bg-black border border-white/10 hover:border-white/30 transition-all rounded-full group outline-none"
                            onClick={showPrev}
                        >
                            <ChevronLeft className="w-8 h-8 group-hover:-translate-x-1 transition-transform" />
                        </button>

                        {/* Image Container */}
                        <div className="relative w-full max-w-7xl max-h-[90vh] aspect-video px-4 md:px-24 flex flex-col items-center justify-center pointer-events-none">
                            <m.div
                                key={selectedIndex} // Klucz resetuje animację przy zmianie indeksu
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                                className="relative w-full h-[70vh] md:h-[80vh]"
                            >
                                <Image
                                    src={GALLERY_IMAGES[selectedIndex]}
                                    alt="Powiększone zdjęcie"
                                    fill
                                    className="object-contain"
                                    sizes="100vw"
                                    priority
                                />
                            </m.div>
                            
                            <div className="mt-4 bg-black/60 border border-[#333] backdrop-blur-sm px-4 py-2 flex items-center gap-2">
                                <span className="text-[var(--color-brand-orange)] font-bold font-mono text-sm">{selectedIndex + 1}</span>
                                <span className="text-gray-500 font-mono text-xs">/ {GALLERY_IMAGES.length}</span>
                            </div>
                        </div>

                        {/* Next button */}
                        <button
                            className="absolute right-4 md:right-8 z-50 p-3 text-white/50 hover:text-white bg-black/50 hover:bg-black border border-white/10 hover:border-white/30 transition-all rounded-full group outline-none"
                            onClick={showNext}
                        >
                            <ChevronRight className="w-8 h-8 group-hover:translate-x-1 transition-transform" />
                        </button>
                    </m.div>
                </AnimatePresence>,
                document.body
            )}
        </LazyMotion>
    );
}
