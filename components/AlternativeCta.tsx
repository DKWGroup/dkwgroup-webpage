"use client";

import { Link } from "@/src/i18n/routing";
import { ArrowRight } from "lucide-react";

export default function AlternativeCta() {
    return (
        <section className="bg-[#050505] border-b border-[#333] relative overflow-hidden py-10 md:py-0">
            {/* Background glowing decal */}
            <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[300px] h-[300px] bg-[var(--color-brand-orange)] opacity-[0.05] blur-[100px] pointer-events-none rounded-full"></div>
            
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center h-full">
                    
                    {/* Tekst - 7 kolumn */}
                    <div className="md:col-span-7 py-8 md:py-16 text-center md:text-left z-20">
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 border border-[#333] bg-black max-w-max mb-6">
                            <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-brand-orange)] animate-pulse"></span>
                            <span className="text-[10px] font-bold font-mono text-gray-400 uppercase tracking-widest">Darmowa Wycena</span>
                        </div>
                        
                        <h2 className="text-3xl lg:text-3xl font-bold font-sans text-white uppercase tracking-tight mb-3 leading-none">
                            Gotowy na <span className="text-[var(--color-brand-orange)]">skuteczne</span><br className="hidden lg:block"/> rozwiązania?
                        </h2>
                        
                        <p className="text-gray-400 font-mono text-sm leading-relaxed mb-6 max-w-lg mx-auto md:mx-0">
                            Umów się na darmową konsultację. Zbadamy możliwości i zaproponujemy strategię wideo skrojoną na miarę.
                        </p>
                        
                        <Link
                            href="#kontakt"
                            className="inline-flex items-center justify-center px-8 py-4 bg-[var(--color-brand-orange)] text-black font-bold uppercase tracking-widest text-sm font-mono brutal-shadow hover:bg-[var(--color-brand-orange-hover)] transition-all group shadow-[4px_4px_0_0_#333]"
                        >
                            Zarezerwuj termin
                            <ArrowRight className="ml-3 w-5 h-5 transition-transform group-hover:translate-x-2" />
                        </Link>
                    </div>

                    {/* Telefon Icon - 5 kolumn z absolutnym pozycjonowaniem wyciętym w overflow */}
                    <div className="md:col-span-5 h-[200px] md:h-[350px] relative hidden sm:block">
                        <div className="absolute top-1/2 right-0 -translate-y-1/2 md:translate-x-[10%] xl:translate-x-0 w-[280px] h-[280px] md:w-[550px] md:h-[550px] opacity-[0.9] flex items-center justify-end pointer-events-none transition-transform duration-700 hover:scale-105 origin-right">
                             {/* Growth / Sales Chart Illustration */}
                             <svg viewBox="0 0 120 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-2xl">
                                <defs>
                                    <linearGradient id="barGrad1" x1="0%" y1="0%" x2="0%" y2="100%">
                                        <stop offset="0%" stopColor="var(--color-brand-orange)" stopOpacity="0.6" />
                                        <stop offset="100%" stopColor="var(--color-brand-orange)" stopOpacity="0.15" />
                                    </linearGradient>
                                    <linearGradient id="barGrad2" x1="0%" y1="0%" x2="0%" y2="100%">
                                        <stop offset="0%" stopColor="var(--color-brand-orange)" stopOpacity="0.75" />
                                        <stop offset="100%" stopColor="var(--color-brand-orange)" stopOpacity="0.2" />
                                    </linearGradient>
                                    <linearGradient id="barGrad3" x1="0%" y1="0%" x2="0%" y2="100%">
                                        <stop offset="0%" stopColor="var(--color-brand-orange)" stopOpacity="0.9" />
                                        <stop offset="100%" stopColor="var(--color-brand-orange)" stopOpacity="0.3" />
                                    </linearGradient>
                                    <linearGradient id="barGrad4" x1="0%" y1="0%" x2="0%" y2="100%">
                                        <stop offset="0%" stopColor="var(--color-brand-orange)" />
                                        <stop offset="100%" stopColor="#cc5200" />
                                    </linearGradient>
                                    <linearGradient id="arrowGrad" x1="0%" y1="100%" x2="100%" y2="0%">
                                        <stop offset="0%" stopColor="var(--color-brand-orange)" stopOpacity="0.5" />
                                        <stop offset="100%" stopColor="var(--color-brand-orange)" />
                                    </linearGradient>
                                    <filter id="glowChart">
                                        <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                                        <feMerge>
                                            <feMergeNode in="coloredBlur"/>
                                            <feMergeNode in="SourceGraphic"/>
                                        </feMerge>
                                    </filter>
                                    <filter id="softGlow">
                                        <feGaussianBlur stdDeviation="1.5" result="coloredBlur"/>
                                        <feMerge>
                                            <feMergeNode in="coloredBlur"/>
                                            <feMergeNode in="SourceGraphic"/>
                                        </feMerge>
                                    </filter>
                                </defs>

                                {/* Grid lines (subtle) */}
                                <line x1="15" y1="30" x2="95" y2="30" stroke="#1a1a1a" strokeWidth="0.3" />
                                <line x1="15" y1="45" x2="95" y2="45" stroke="#1a1a1a" strokeWidth="0.3" />
                                <line x1="15" y1="60" x2="95" y2="60" stroke="#1a1a1a" strokeWidth="0.3" />
                                <line x1="15" y1="75" x2="95" y2="75" stroke="#1a1a1a" strokeWidth="0.3" />

                                {/* Base line / X axis */}
                                <line x1="15" y1="88" x2="100" y2="88" stroke="#333" strokeWidth="0.6" />

                                {/* Rising bars */}
                                <rect x="20" y="72" width="10" height="16" rx="1" fill="url(#barGrad1)" stroke="var(--color-brand-orange)" strokeWidth="0.2" strokeOpacity="0.3" />
                                <rect x="35" y="60" width="10" height="28" rx="1" fill="url(#barGrad2)" stroke="var(--color-brand-orange)" strokeWidth="0.2" strokeOpacity="0.4" />
                                <rect x="50" y="50" width="10" height="38" rx="1" fill="url(#barGrad2)" stroke="var(--color-brand-orange)" strokeWidth="0.2" strokeOpacity="0.5" />
                                <rect x="65" y="38" width="10" height="50" rx="1" fill="url(#barGrad3)" stroke="var(--color-brand-orange)" strokeWidth="0.2" strokeOpacity="0.6" />
                                <rect x="80" y="22" width="10" height="66" rx="1" fill="url(#barGrad4)" stroke="var(--color-brand-orange)" strokeWidth="0.3" strokeOpacity="0.8" />

                                {/* Growth trend line */}
                                <path d="M25 70 L40 58 L55 48 L70 36 L85 20" stroke="var(--color-brand-orange)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" opacity="0.7" filter="url(#softGlow)" />

                                {/* Trend dots */}
                                <circle cx="25" cy="70" r="1.5" fill="var(--color-brand-orange)" opacity="0.5" />
                                <circle cx="40" cy="58" r="1.5" fill="var(--color-brand-orange)" opacity="0.6" />
                                <circle cx="55" cy="48" r="1.5" fill="var(--color-brand-orange)" opacity="0.7" />
                                <circle cx="70" cy="36" r="1.5" fill="var(--color-brand-orange)" opacity="0.8" />
                                <circle cx="85" cy="20" r="2" fill="var(--color-brand-orange)" filter="url(#softGlow)" />

                                {/* Big upward arrow */}
                                <g filter="url(#glowChart)" opacity="0.85">
                                    <path d="M88 18 L85 10 L82 18" stroke="var(--color-brand-orange)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                                    <line x1="85" y1="10" x2="85" y2="20" stroke="var(--color-brand-orange)" strokeWidth="1.5" strokeLinecap="round" />
                                </g>

                                {/* Dollar sign - large, decorative, in background */}
                                <text x="98" y="55" fontFamily="monospace" fontSize="28" fontWeight="bold" fill="var(--color-brand-orange)" opacity="0.08" textAnchor="middle">$</text>
                                <text x="8" y="48" fontFamily="monospace" fontSize="16" fontWeight="bold" fill="var(--color-brand-orange)" opacity="0.06" textAnchor="middle">$</text>

                                {/* Small percentage indicator floating */}
                                <g opacity="0.6">
                                    <rect x="88" y="10" width="18" height="8" rx="2" fill="#111" stroke="var(--color-brand-orange)" strokeWidth="0.3" strokeOpacity="0.5" />
                                    <text x="97" y="16" fontFamily="monospace" fontSize="4.5" fill="var(--color-brand-orange)" textAnchor="middle" fontWeight="bold">+127%</text>
                                </g>
                            </svg>
                        </div>
                        
                        {/* Pomarańczowa poświata jako tło "wewnątrz ekranu" i wibracje na krawędzi */}
                        <div className="absolute top-1/2 right-12 -translate-y-1/2 md:translate-x-1/4 xl:translate-x-0 w-[150px] h-[250px] md:w-[280px] md:h-[480px] bg-[var(--color-brand-orange)]/10 blur-[40px] border border-[var(--color-brand-orange)]/20 shadow-[0_0_80px_rgba(255,102,0,0.1)] -z-10 rounded-[3rem]"></div>
                    </div>
                </div>
            </div>
        </section>
    );
}
