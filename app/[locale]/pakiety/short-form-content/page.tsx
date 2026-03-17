"use client";

import Contact from "@/components/Contact";
import Clients from "@/components/Clients";
import StatsCta from "@/components/StatsCta";
import { Link } from "@/src/i18n/routing";
import Image from "next/image";
import {
    ArrowRight, CheckCircle2, TrendingUp, Eye, Users, Zap, Clock, MapPin,
    Film, BarChart3, Target, Sparkles, ChevronDown, Phone, Mail,
    Camera, Video, Youtube, Instagram, Linkedin, Facebook, Clapperboard
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import AnimatedSection from "@/components/AnimatedSection";

/* ─── Parallax icon wrapper ─── */
function ParallaxIcons({ scrollY }: { scrollY: number }) {
    return (
        <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
            <Camera className="absolute w-24 h-24 text-gray-500 opacity-[0.035] rotate-12" style={{ top: "6%", left: "4%", transform: `translateY(${scrollY * 0.3}px) rotate(12deg)` }} />
            <Video className="absolute w-20 h-20 text-gray-500 opacity-[0.03] -rotate-[15deg]" style={{ top: "18%", right: "8%", transform: `translateY(${scrollY * 0.5}px) rotate(-15deg)` }} />
            <Youtube className="absolute w-28 h-28 text-gray-500 opacity-[0.025] rotate-6" style={{ bottom: "20%", left: "6%", transform: `translateY(${scrollY * 0.35}px) rotate(6deg)` }} />
            <Instagram className="absolute w-16 h-16 text-gray-500 opacity-[0.04] rotate-45" style={{ bottom: "30%", right: "12%", transform: `translateY(${scrollY * 0.45}px) rotate(45deg)` }} />
            <Linkedin className="absolute w-20 h-20 text-gray-500 opacity-[0.025] -rotate-[8deg]" style={{ top: "50%", left: "35%", transform: `translateY(${scrollY * 0.4}px) rotate(-8deg)` }} />
            <Facebook className="absolute w-18 h-18 text-gray-500 opacity-[0.03] rotate-[20deg]" style={{ top: "12%", left: "55%", transform: `translateY(${scrollY * 0.55}px) rotate(20deg)` }} />
            <Clapperboard className="absolute w-22 h-22 text-gray-500 opacity-[0.03] -rotate-[12deg]" style={{ bottom: "10%", right: "30%", transform: `translateY(${scrollY * 0.3}px) rotate(-12deg)` }} />
            <Film className="absolute w-16 h-16 text-gray-500 opacity-[0.035] rotate-[30deg]" style={{ top: "75%", left: "15%", transform: `translateY(${scrollY * 0.5}px) rotate(30deg)` }} />
        </div>
    );
}

const BENEFITS = [
    { icon: Eye, title: "Więcej wyświetleń", desc: "Algorytmy platform faworyzują krótkie filmy. Twoje treści dotrą do tysięcy osób, które nigdy by Cię nie znalazły. Średnio 3–10x więcej zasięgu niż zwykły post." },
    { icon: TrendingUp, title: "Szybszy wzrost konta", desc: "Rolki to najszybsza ścieżka do budowania społeczności. Regularne publikacje mogą przynieść setki nowych obserwujących tygodniowo." },
    { icon: Users, title: "Zaufanie i rozpoznawalność", desc: "Wideo buduje relację z odbiorcą szybciej niż jakikolwiek inny format. Twarz + wiedza = autorytet w branży." },
    { icon: Target, title: "Gotowe do publikacji", desc: "Nie musisz nic montować ani edytować. Dostajesz gotowe pliki z napisami, muzyką i efektami — wystarczy wrzucić na konto." },
    { icon: Zap, title: "Oszczędność czasu", desc: "Zamiast godzin prób z telefonem, w kilka godzin nagrywasz materiał na tygodnie. Twój czas to Twój największy zasób." },
    { icon: BarChart3, title: "Mierzalne rezultaty", desc: "Każda rolka to konkretne wyświetlenia, polubienia i nowi obserwujący. Wiesz dokładnie, co działa, i skalujesz to." },
];

const INCLUDES = [
    "Profesjonalne nagranie w studiu lub u Ciebie",
    "Oświetlenie, mikrofon, kamera kinowa",
    "Prompter z gotowym scenariuszem (jeśli potrzebujesz)",
    "Montaż z napisami, muzyką i efektami",
    "Formaty dostosowane pod TikTok, Reels, Shorts",
    "Gotowe pliki do bezpośredniej publikacji",
];

const FAQ_ITEMS = [
    { q: "Ile trwa nagranie jednej rolki?", a: "Średnio 10–15 minut na nagranie jednej rolki, wliczając przygotowanie i powtórki. Przy 10 rolkach nagranie trwa ok. 2–3 godzin." },
    { q: "Czy mogę nagrywać u siebie w firmie?", a: "Tak! Przyjeżdżamy z pełnym sprzętem do Twojej lokalizacji. Doliczamy jedynie koszt dojazdu (w promieniu 100 km od Katowic zwykle 100–200 zł)." },
    { q: "Jak wygląda nagranie w studiu?", a: "Nasze studio w Katowicach jest w pełni wyposażone — profesjonalne tło, oświetlenie, mikrofon i prompter. Przyjeżdżasz, siadasz i mówisz. My zajmujemy się resztą." },
    { q: "Czy muszę mieć pomysły na tematy?", a: "Nie musisz! Możemy wspólnie opracować tematy na podstawie tego, czym się zajmujesz. Znamy algorytmy i wiemy, jakie treści zbierają zasięgi." },
    { q: "Kiedy dostanę gotowe materiały?", a: "Standardowo w ciągu 5–7 dni roboczych. W pakiecie 20+ realizujemy priorytetowo — nawet w 72h." },
    { q: "W jakim formacie dostaję pliki?", a: "MP4 w pionie (9:16) z napisami i muzyką, gotowe do wrzucenia na TikTok, Instagram Reels i YouTube Shorts." },
    { q: "Czy mogę nagrać próbną rolkę?", a: "Tak — zamów pojedynczą rolkę za 250 zł netto i sprawdź jakość, zanim zdecydujesz się na pakiet." },
];

export default function ShortFormContentPage() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const offset = window.scrollY / 6;
            setScrollY(offset);
        };
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div ref={sectionRef}>
            {/* ─── Hero with bg photo ─── */}
            <section className="relative pt-28 pb-20 bg-[#050505] border-b border-[#333] overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image 
                        src="/photos/IMG_3148.webp" 
                        alt="" 
                        fill 
                        sizes="100vw"
                        className="object-cover" 
                        priority 
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/80 to-black/50"></div>
                </div>
                <ParallaxIcons scrollY={scrollY} />
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="max-w-3xl">
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 border border-[var(--color-brand-orange)]/30 bg-[var(--color-brand-orange)]/5 mb-6 backdrop-blur-sm">
                            <span className="w-2 h-2 rounded-full bg-[var(--color-brand-orange)] animate-pulse"></span>
                            <span className="text-[10px] font-bold font-mono text-[var(--color-brand-orange)] uppercase tracking-widest">Short-form Content</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-sans tracking-tighter text-white mb-4 leading-[1.1]">
                            Profesjonalne <span className="text-[var(--color-brand-orange)]">rolki</span><br />
                            od <span className="text-[var(--color-brand-orange)]">250 zł</span> za sztukę
                        </h1>
                        <p className="text-gray-300 font-mono text-sm leading-relaxed mb-8 max-w-xl">
                            TikTok, Reels, Shorts — krótkie filmy, które budują Twoją markę, przyciągają klientów i rosną organicznie. Nagrywamy w studiu w Katowicach lub przyjeżdżamy do Ciebie.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 mb-10">
                            <Link href="#kontakt" className="inline-flex items-center justify-center px-8 py-4 bg-[var(--color-brand-orange)] text-black font-bold uppercase tracking-wider text-sm font-mono brutal-shadow hover:bg-[var(--color-brand-orange-hover)] transition-colors">
                                Zamów rolki <ArrowRight className="ml-2 w-4 h-4" />
                            </Link>
                            <Link href="/portfolio" className="inline-flex items-center justify-center px-8 py-4 border border-white/20 text-white font-bold uppercase tracking-wider text-sm font-mono hover:border-[var(--color-brand-orange)] hover:text-[var(--color-brand-orange)] transition-colors backdrop-blur-sm">
                                Zobacz przykłady
                            </Link>
                        </div>
                        <div className="flex flex-wrap gap-6 font-mono text-sm">
                            <div><span className="text-[var(--color-brand-orange)] font-bold text-lg">250 zł</span><span className="text-gray-400 ml-1">/ rolka</span></div>
                            <div><span className="text-[var(--color-brand-orange)] font-bold text-lg">10+</span><span className="text-gray-400 ml-1">= taniej</span></div>
                            <div><span className="text-[var(--color-brand-orange)] font-bold text-lg">Studio</span><span className="text-gray-400 ml-1">lub u Ciebie</span></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ─── Clients bar ─── */}
            <AnimatedSection animation="fade-up">
                <Clients />
            </AnimatedSection>

            {/* ─── Benefits ─── */}
            <section className="py-20 bg-[#0a0a0a] border-b border-[#333] relative overflow-hidden">
                <ParallaxIcons scrollY={scrollY} />
                <AnimatedSection animation="fade-left" className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center mb-14">
                        <h2 className="text-3xl md:text-4xl font-bold font-sans tracking-tight text-white mb-4">
                            Co zyskujesz <span className="text-[var(--color-brand-orange)]">z rolkami?</span>
                        </h2>
                        <p className="text-gray-400 font-mono text-sm max-w-xl mx-auto">
                            Krótkie filmy to nie trend — to standard komunikacji, który przynosi realne wyniki
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {BENEFITS.map((b, i) => (
                            <div key={i} className="bg-[#050505] border border-[#333] p-6 hover:border-[var(--color-brand-orange)] transition-colors group brutal-shadow">
                                <b.icon className="w-6 h-6 text-[var(--color-brand-orange)] mb-4 group-hover:scale-110 transition-transform" />
                                <h3 className="text-white font-bold font-sans uppercase tracking-wide text-sm mb-2">{b.title}</h3>
                                <p className="text-gray-400 font-mono text-xs leading-relaxed">{b.desc}</p>
                            </div>
                        ))}
                    </div>
                </AnimatedSection>
            </section>

            {/* ─── What's included with bg photo ─── */}
            <section className="py-20 bg-[#050505] border-b border-[#333] relative overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image src="/portfolio-photos/a03ff4e2-9a7e-43d1-b9cb-2064dcbf7ff6_rw_600.webp" alt="" fill className="object-cover" />
                    <div className="absolute inset-0 bg-black/90"></div>
                </div>
                <AnimatedSection animation="fade-right" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <h2 className="text-3xl font-bold font-sans tracking-tight text-white mb-10 text-center">
                        Co zawiera <span className="text-[var(--color-brand-orange)]">każda rolka?</span>
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {INCLUDES.map((item, i) => (
                            <div key={i} className="flex items-start gap-3 p-4 bg-black/50 backdrop-blur-sm border border-white/10 hover:border-[var(--color-brand-orange)] transition-colors">
                                <CheckCircle2 className="w-5 h-5 text-[var(--color-brand-orange)] flex-shrink-0 mt-0.5" />
                                <span className="text-gray-300 font-mono text-sm">{item}</span>
                            </div>
                        ))}
                    </div>
                </AnimatedSection>
            </section>

            {/* ─── CTA #1 ─── */}
            <AnimatedSection animation="fade-up">
                <StatsCta />
            </AnimatedSection>

            {/* ─── Pricing ─── */}
            <section className="py-20 bg-[#0a0a0a] border-b border-[#333] relative overflow-hidden">
                <ParallaxIcons scrollY={scrollY} />
                <AnimatedSection animation="fade-down" className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center mb-14">
                        <h2 className="text-3xl md:text-4xl font-bold font-sans tracking-tight text-white mb-4">
                            Przejrzysty <span className="text-[var(--color-brand-orange)]">cennik</span>
                        </h2>
                        <p className="text-gray-400 font-mono text-sm">Im więcej zamawiasz, tym więcej oszczędzasz</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                        {/* Single */}
                        <div className="border border-[#333] bg-[#050505] p-8 brutal-shadow flex flex-col">
                            <h3 className="text-lg font-bold font-sans text-white uppercase tracking-tight mb-1">Pojedyncza rolka</h3>
                            <p className="text-gray-500 font-mono text-xs mb-6">Na próbę lub doraźnie</p>
                            <div className="mb-6">
                                <span className="text-4xl font-bold font-sans text-white">250</span>
                                <span className="text-gray-400 font-mono text-sm ml-1">zł netto / szt.</span>
                            </div>
                            <ul className="space-y-2 font-mono text-xs text-gray-300 mb-8 flex-grow">
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-[var(--color-brand-orange)] flex-shrink-0 mt-0.5" />1 rolka z montażem</li>
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-[var(--color-brand-orange)] flex-shrink-0 mt-0.5" />Napisy + muzyka</li>
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-[var(--color-brand-orange)] flex-shrink-0 mt-0.5" />Gotowe w 5–7 dni</li>
                            </ul>
                            <Link href="#kontakt" className="w-full text-center px-4 py-3 border border-[#333] text-white font-bold uppercase tracking-wider text-xs font-mono hover:border-[var(--color-brand-orange)] hover:text-[var(--color-brand-orange)] transition-colors">Zamów</Link>
                        </div>
                        {/* Pack 10 */}
                        <div className="border-2 border-[var(--color-brand-orange)] bg-[#050505] p-8 brutal-shadow flex flex-col relative">
                            <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-[var(--color-brand-orange)] text-black text-[10px] font-bold font-mono uppercase tracking-widest whitespace-nowrap">Najpopularniejszy</div>
                            <h3 className="text-lg font-bold font-sans text-white uppercase tracking-tight mb-1">Pakiet 10 rolek</h3>
                            <p className="text-gray-500 font-mono text-xs mb-6">Materiał na 2–3 tygodnie</p>
                            <div className="mb-2">
                                <span className="text-4xl font-bold font-sans text-[var(--color-brand-orange)]">220</span>
                                <span className="text-gray-400 font-mono text-sm ml-1">zł netto / szt.</span>
                            </div>
                            <p className="text-[var(--color-brand-orange)] font-mono text-xs font-bold mb-6">Oszczędzasz 300 zł</p>
                            <ul className="space-y-2 font-mono text-xs text-gray-300 mb-8 flex-grow">
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-[var(--color-brand-orange)] flex-shrink-0 mt-0.5" />10 rolek z montażem</li>
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-[var(--color-brand-orange)] flex-shrink-0 mt-0.5" />Napisy + muzyka + efekty</li>
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-[var(--color-brand-orange)] flex-shrink-0 mt-0.5" />Pomoc z tematami</li>
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-[var(--color-brand-orange)] flex-shrink-0 mt-0.5" />Gotowe w 5–7 dni</li>
                            </ul>
                            <Link href="#kontakt" className="w-full text-center px-4 py-3 bg-[var(--color-brand-orange)] text-black font-bold uppercase tracking-wider text-xs font-mono hover:bg-[var(--color-brand-orange-hover)] transition-colors">Zamów pakiet</Link>
                        </div>
                        {/* Pack 20+ */}
                        <div className="border border-[#333] bg-[#050505] p-8 brutal-shadow flex flex-col">
                            <h3 className="text-lg font-bold font-sans text-white uppercase tracking-tight mb-1">Pakiet 20+ rolek</h3>
                            <p className="text-gray-500 font-mono text-xs mb-6">Materiał na miesiąc+</p>
                            <div className="mb-2">
                                <span className="text-4xl font-bold font-sans text-white">190</span>
                                <span className="text-gray-400 font-mono text-sm ml-1">zł netto / szt.</span>
                            </div>
                            <p className="text-emerald-500 font-mono text-xs font-bold mb-6">Oszczędzasz 1 200 zł+</p>
                            <ul className="space-y-2 font-mono text-xs text-gray-300 mb-8 flex-grow">
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-[var(--color-brand-orange)] flex-shrink-0 mt-0.5" />20+ rolek z montażem</li>
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-[var(--color-brand-orange)] flex-shrink-0 mt-0.5" />Pełna postprodukcja</li>
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-[var(--color-brand-orange)] flex-shrink-0 mt-0.5" />Research tematów</li>
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-[var(--color-brand-orange)] flex-shrink-0 mt-0.5" />Priorytet — gotowe w 72h</li>
                                <li className="flex items-start gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-[var(--color-brand-orange)] flex-shrink-0 mt-0.5" />Mini-plan publikacji</li>
                            </ul>
                            <Link href="#kontakt" className="w-full text-center px-4 py-3 border border-[#333] text-white font-bold uppercase tracking-wider text-xs font-mono hover:border-[var(--color-brand-orange)] hover:text-[var(--color-brand-orange)] transition-colors">Zamów pakiet</Link>
                        </div>
                    </div>

                    {/* Studio vs On-location */}
                    <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                        <div className="bg-[#050505] border border-[#333] p-6 flex items-start gap-4">
                            <Film className="w-6 h-6 text-[var(--color-brand-orange)] flex-shrink-0" />
                            <div>
                                <h4 className="text-white font-bold font-sans text-sm uppercase tracking-wide mb-1">W studiu (Katowice)</h4>
                                <p className="text-gray-400 font-mono text-xs leading-relaxed">Profesjonalne studio z pełnym wyposażeniem — background, oświetlenie, prompter. Ceny jak wyżej, bez dodatkowych kosztów.</p>
                            </div>
                        </div>
                        <div className="bg-[#050505] border border-[#333] p-6 flex items-start gap-4">
                            <MapPin className="w-6 h-6 text-[var(--color-brand-orange)] flex-shrink-0" />
                            <div>
                                <h4 className="text-white font-bold font-sans text-sm uppercase tracking-wide mb-1">U Ciebie (dojazd)</h4>
                                <p className="text-gray-400 font-mono text-xs leading-relaxed">Przyjeżdżamy z pełnym sprzętem. Do ceny pakietu doliczamy jedynie koszt dojazdu (100 km od Katowic — zwykle 100–200 zł).</p>
                            </div>
                        </div>
                    </div>
                    <p className="text-center text-gray-600 font-mono text-[10px] mt-6">Wszystkie ceny netto. Wystawiamy faktury VAT.</p>
                </AnimatedSection>
            </section>

            {/* ─── CTA #2 ─── */}
            <AnimatedSection animation="fade-up">
                <StatsCta />
            </AnimatedSection>

            {/* ─── Process with bg photo ─── */}
            <section className="py-20 bg-[#050505] border-b border-[#333] relative overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image src="/photos/IMG_2596.webp" alt="" fill className="object-cover" />
                    <div className="absolute inset-0 bg-black/90"></div>
                </div>
                <AnimatedSection animation="fade-right" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <h2 className="text-3xl font-bold font-sans tracking-tight text-white mb-10 text-center">
                        Jak to <span className="text-[var(--color-brand-orange)]">wygląda?</span>
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                            { num: "01", title: "Umawiamy się", desc: "Wybierasz pakiet, ustalamy tematy i datę nagrania. Studio lub dojazd — Ty decydujesz." },
                            { num: "02", title: "Nagrywamy", desc: "Profesjonalny sprzęt, oświetlenie, prompter z gotowym scenariuszem. Nagrywasz — my kierujemy." },
                            { num: "03", title: "Dostajesz gotowe pliki", desc: "Montaż, napisy, muzyka, efekty. Pliki gotowe do wrzucenia prosto na TikTok, Reels, Shorts." },
                        ].map((step, i) => (
                            <div key={i} className="bg-black/50 backdrop-blur-sm border border-white/10 p-6 hover:border-[var(--color-brand-orange)] transition-colors relative group">
                                <span className="text-5xl font-bold font-sans text-white/10 group-hover:text-[var(--color-brand-orange)]/20 transition-colors absolute top-4 right-4">{step.num}</span>
                                <h3 className="text-white font-bold font-sans uppercase tracking-wide text-sm mb-2 relative z-10">{step.title}</h3>
                                <p className="text-gray-400 font-mono text-xs leading-relaxed relative z-10">{step.desc}</p>
                            </div>
                        ))}
                    </div>
                </AnimatedSection>
            </section>

            {/* ─── FAQ ─── */}
            <section className="py-20 bg-[#0a0a0a] border-b border-[#333] relative overflow-hidden">
                <ParallaxIcons scrollY={scrollY} />
                <AnimatedSection animation="reveal" className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center mb-14">
                        <h2 className="text-3xl font-bold font-sans tracking-tight text-white mb-3">
                            Pytania i <span className="text-[var(--color-brand-orange)]">odpowiedzi</span>
                        </h2>
                    </div>
                    <div className="space-y-3">
                        {FAQ_ITEMS.map((faq, i) => (
                            <details key={i} className="group bg-[#050505] border border-[#333] hover:border-[var(--color-brand-orange)] transition-colors">
                                <summary className="flex items-center justify-between p-5 cursor-pointer text-white font-bold font-sans text-sm uppercase tracking-wide list-none">
                                    {faq.q}
                                    <ChevronDown className="w-4 h-4 text-gray-500 group-open:rotate-180 transition-transform flex-shrink-0 ml-4" />
                                </summary>
                                <div className="px-5 pb-5 text-gray-400 font-mono text-sm leading-relaxed border-t border-[#222] pt-4">{faq.a}</div>
                            </details>
                        ))}
                    </div>
                </AnimatedSection>
            </section>

            {/* ─── CTA #3 ─── */}
            <AnimatedSection animation="fade-up">
                <StatsCta />
            </AnimatedSection>

            {/* ─── Final CTA ─── */}
            <section className="py-20 bg-[var(--color-brand-orange)] border-b border-[#333]">
                <AnimatedSection animation="scale" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-4xl md:text-5xl font-bold font-sans tracking-tighter text-black mb-4 uppercase">Zacznij budować<br />zasięgi już dziś</h2>
                    <p className="text-black/70 font-mono text-sm mb-10 max-w-xl mx-auto">Od 250 zł za profesjonalną rolkę. Nagrywamy w studiu lub przyjeżdżamy do Ciebie. Gotowe materiały — publikujesz i rośniesz.</p>
                    <div className="flex flex-wrap justify-center gap-4 mb-10 font-mono text-sm font-bold text-black">
                        <span className="flex items-center gap-2 bg-black/10 px-4 py-2 border border-black/20"><Sparkles className="w-4 h-4" /> Od 250 zł / rolka</span>
                        <span className="flex items-center gap-2 bg-black/10 px-4 py-2 border border-black/20"><Clock className="w-4 h-4" /> Gotowe w 5–7 dni</span>
                        <span className="flex items-center gap-2 bg-black/10 px-4 py-2 border border-black/20"><Film className="w-4 h-4" /> Studio lub dojazd</span>
                    </div>
                    <Link href="#kontakt" className="inline-flex items-center justify-center px-10 py-5 bg-black text-white font-bold uppercase tracking-widest text-sm font-mono hover:bg-[#222] transition-colors brutal-shadow">
                        Zamów rolki <ArrowRight className="ml-3 w-5 h-5" />
                    </Link>
                    <div className="mt-10 flex flex-col sm:flex-row justify-center gap-6">
                        <a href="tel:+48537168645" className="inline-flex items-center justify-center gap-2 text-black font-mono text-sm font-bold hover:underline"><Phone className="w-4 h-4" /> +48 537 168 645</a>
                        <a href="mailto:contact.dkwgroup@gmail.com" className="inline-flex items-center justify-center gap-2 text-black font-mono text-sm font-bold hover:underline"><Mail className="w-4 h-4" /> contact.dkwgroup@gmail.com</a>
                    </div>
                </AnimatedSection>
            </section>

            <AnimatedSection animation="fade-up">
                <Contact />
            </AnimatedSection>
        </div>
    );
}
