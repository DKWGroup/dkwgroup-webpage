"use client";

import Contact from "@/components/Contact";
import Clients from "@/components/Clients";
import StatsCta from "@/components/StatsCta";
import { Link } from "@/src/i18n/routing";
import Image from "next/image";
import {
    ArrowRight, Clock, Camera, Film, Palette, Zap, MapPin, CheckCircle2,
    EyeOff, Timer, UsersRound, TrendingDown, FileText, ShieldCheck, Receipt,
    Users, Target, MapPinned, Brain, Scale, Sparkles, ChevronDown, Phone, Mail,
    Video, Youtube, Instagram, Linkedin, Facebook, Clapperboard
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

const PROBLEMS = [
    { icon: EyeOff, title: "Brak widoczności online", desc: "Twoja firma jest niewidoczna w social mediach. Konkurencja Cię wyprzedza." },
    { icon: Timer, title: "Brak czasu na content", desc: "Prowadzisz biznes i nie masz czasu na tworzenie materiałów marketingowych." },
    { icon: UsersRound, title: "Brak zespołu marketingowego", desc: "Nie masz ludzi ani wiedzy, żeby skutecznie promować firmę w sieci." },
    { icon: TrendingDown, title: "Nieefektywne działania", desc: "Próbujesz różnych rzeczy 'na czuja', ale nie widzisz rezultatów." },
];

const FEATURES = [
    { icon: Camera, title: "Profesjonalne nagrania", desc: "Kamera, dźwięk, oświetlenie — wszystko na najwyższym poziomie" },
    { icon: Film, title: "15 gotowych materiałów", desc: "Filmy na TikTok, Reels, YouTube Shorts i posty do social media" },
    { icon: FileText, title: "Kompletny montaż", desc: "Wszystkie materiały zmontowane i gotowe do publikacji" },
    { icon: Palette, title: "Dopasowanie do brandu", desc: "Kolory, czcionki, logo — wszystko zgodne z Twoim stylem" },
    { icon: Zap, title: "Szybka realizacja", desc: "Gotowe pliki otrzymujesz w ciągu 72 godzin" },
    { icon: MapPin, title: "Dojazd do klienta", desc: "Przyjeżdżamy do Ciebie w promieniu 100km od Katowic" },
];

const DELIVERABLES = [
    "1 dzień nagraniowy z dojazdem do klienta",
    "Produkcja do 15 materiałów wideo i foto",
    "Mini sesja zdjęciowa (portretowa, produktowa lub lifestyle)",
    "Montaż wszystkich materiałów",
    "Dopasowanie do Twojego brand boardu",
    "Gotowe paczki plików do wrzucenia na social media",
    "Wysyłka online w 72h",
    "Faktura VAT",
];

const WHY_US = [
    { icon: Users, title: "Kompleksowy marketing", desc: "Obsługujemy cały marketing — od planu po wdrożenie" },
    { icon: Target, title: "Znamy lokalny rynek", desc: "Rozumiemy lokalny rynek i wiemy, co działa tu i teraz" },
    { icon: ShieldCheck, title: "Działamy legalnie", desc: "Jesteśmy zarejestrowaną firmą, wystawiamy faktury VAT" },
    { icon: Brain, title: "Znamy algorytmy", desc: "Budujemy materiały pod zasięgi, nie dla sztuki" },
    { icon: Scale, title: "Jasne zasady", desc: "Wszystko na jasnych zasadach — bez niedomówień" },
    { icon: Sparkles, title: "Robimy content, strony, strategie", desc: "AI, automatyzacje i pełen stack marketingu" },
];

const CITIES = ["Katowice", "Gliwice", "Sosnowiec", "Bielsko-Biała", "Tychy", "Rybnik", "Dąbrowa Górnicza", "Częstochowa", "i okolice"];

const FAQ_ITEMS = [
    { q: "Jak przebiega dzień nagraniowy?", a: "Przyjeżdżamy na ustalone miejsce z pełnym sprzętem. Planujemy scenariusze z góry, nagrywamy materiały wg planu, a na koniec dnia mamy komplety surowego materiału do montażu." },
    { q: "Ile czasu zajmuje cały proces?", a: "Dzień nagraniowy to 1 dzień. Montaż i gotowe materiały otrzymujesz w ciągu 72h (PRO Pack) lub 7 dni roboczych (START Pack)." },
    { q: "Czy muszę mieć gotowy brand board?", a: "Nie — w pakiecie PRO pomożemy Ci go stworzyć. W pakiecie START dopasujemy się do Twoich dotychczasowych materiałów." },
    { q: "W jakich formatach otrzymam materiały?", a: "Domyślnie MP4 w pionie (9:16) idealne na Reels/TikTok/Shorts oraz w poziomie (16:9) na YouTube. Zdjęcia w JPEG/PNG." },
    { q: "Czy mogę wprowadzić poprawki do materiałów?", a: "Tak, w cenie zawarte są 2 rundy poprawek." },
    { q: "Czy dojeżdżacie poza Śląsk?", a: "Tak, dojeżdżamy w promieniu 100km od Katowic. Dalsze lokalizacje — skontaktuj się po indywidualną wycenę." },
    { q: "Czy robicie materiały w języku angielskim?", a: "Tak, obsługujemy klientów polsko- i anglojęzycznych." },
    { q: "Co jeśli jestem niezadowolony z rezultatów?", a: "Zależy nam na Twojej satysfakcji. Poprawiamy materiały w ramach umówionych rund poprawek, a nasze dotychczasowe realizacje mówią same za siebie." },
];

export default function OneDayPackPage() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            if (!sectionRef.current) return;
            const offset = window.scrollY / 6;
            setScrollY(offset);
        };
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div ref={sectionRef}>
            {/* ─── Hero with background photo ─── */}
            <section className="relative pt-28 pb-20 bg-[#050505] border-b border-[#333] overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image 
                        src="/photos/IMG_3355.webp" 
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
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <div className="inline-flex items-center gap-2 px-3 py-1.5 border border-[var(--color-brand-orange)]/30 bg-[var(--color-brand-orange)]/5 mb-6">
                                <span className="w-2 h-2 rounded-full bg-[var(--color-brand-orange)] animate-pulse"></span>
                                <span className="text-[10px] font-bold font-mono text-[var(--color-brand-orange)] uppercase tracking-widest">One Day Pack</span>
                            </div>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-sans tracking-tighter text-white mb-4 leading-[1.1]">
                                <span className="text-[var(--color-brand-orange)]">15</span> materiałów<br />
                                marketingowych<br />
                                w <span className="text-[var(--color-brand-orange)]">1 dzień</span>
                            </h1>
                            <p className="text-gray-300 font-mono text-sm leading-relaxed mb-8 max-w-md">
                                Profesjonalna produkcja contentu dla lokalnych biznesów. Nagrywamy, fotografujemy i montujemy wszystko w ciągu jednego dnia.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Link href="#kontakt" className="inline-flex items-center justify-center px-8 py-4 bg-[var(--color-brand-orange)] text-black font-bold uppercase tracking-wider text-sm font-mono brutal-shadow hover:bg-[var(--color-brand-orange-hover)] transition-colors">
                                    Zamów One Day Pack <ArrowRight className="ml-2 w-4 h-4" />
                                </Link>
                                <Link href="/portfolio" className="inline-flex items-center justify-center px-8 py-4 border border-white/20 text-white font-bold uppercase tracking-wider text-sm font-mono hover:border-[var(--color-brand-orange)] hover:text-[var(--color-brand-orange)] transition-colors backdrop-blur-sm">
                                    Zobacz realizacje
                                </Link>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            {[
                                { val: "56", label: "firm obsłużonych" },
                                { val: "+1000%", label: "przyrosty zasięgów" },
                                { val: "+20 mln", label: "wyświetleń" },
                                { val: "72h", label: "gotowe materiały" },
                            ].map((s, i) => (
                                <div key={i} className="bg-black/40 backdrop-blur-sm border border-white/10 p-6 brutal-shadow">
                                    <div className="text-3xl font-bold font-sans text-[var(--color-brand-orange)] mb-1">{s.val}</div>
                                    <div className="text-gray-400 font-mono text-xs uppercase tracking-widest">{s.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ─── Clients bar ─── */}
            <AnimatedSection animation="fade-up">
                <Clients />
            </AnimatedSection>

            {/* ─── Problem Section with bg photo ─── */}
            <section className="py-20 bg-[#0a0a0a] border-b border-[#333] relative overflow-hidden">
                <ParallaxIcons scrollY={scrollY} />
                <AnimatedSection animation="fade-up" className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center mb-14">
                        <h2 className="text-3xl md:text-4xl font-bold font-sans tracking-tight text-white mb-4">
                            Czy to brzmi <span className="text-[var(--color-brand-orange)]">znajomo?</span>
                        </h2>
                        <p className="text-gray-400 font-mono text-sm max-w-2xl mx-auto">
                            Większość lokalnych firm zmaga się z tymi samymi problemami w marketingu online
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                        {PROBLEMS.map((p, i) => (
                            <div key={i} className="bg-[#050505] border border-[#333] p-6 flex items-start gap-4 hover:border-red-500/50 transition-colors group">
                                <p.icon className="w-6 h-6 text-red-500 flex-shrink-0 mt-0.5" />
                                <div>
                                    <h3 className="text-white font-bold font-sans uppercase tracking-wide text-sm mb-1">{p.title}</h3>
                                    <p className="text-gray-500 font-mono text-xs leading-relaxed">{p.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <p className="text-center text-red-500 font-mono text-sm font-bold uppercase tracking-widest">
                        Rezultat: zastój w sprzedaży i brak nowych klientów
                    </p>
                </AnimatedSection>
            </section>

            {/* ─── Solution Section with bg photo ─── */}
            <section className="py-20 bg-[#050505] border-b border-[#333] relative overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image src="/portfolio-photos/b514375b-1c0d-46a5-9991-21667ae3599b_rw_1200.webp" alt="" fill className="object-cover" />
                    <div className="absolute inset-0 bg-black/90"></div>
                </div>
                <AnimatedSection animation="fade-right" className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center mb-14">
                        <h2 className="text-3xl md:text-4xl font-bold font-sans tracking-tight text-white mb-4">
                            Poznaj <span className="text-[var(--color-brand-orange)]">One Day Pack</span>
                        </h2>
                        <p className="text-gray-400 font-mono text-sm max-w-2xl mx-auto">
                            Jednodniowa usługa produkcji contentu marketingowego dla lokalnych biznesów. W ciągu jednego dnia nagrywamy, fotografujemy i montujemy 15 materiałów, które od razu możesz wrzucać na social media.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {FEATURES.map((f, i) => (
                            <div key={i} className="bg-black/50 backdrop-blur-sm border border-white/10 p-6 hover:border-[var(--color-brand-orange)] transition-colors group brutal-shadow">
                                <f.icon className="w-6 h-6 text-[var(--color-brand-orange)] mb-4 group-hover:scale-110 transition-transform" />
                                <h3 className="text-white font-bold font-sans uppercase tracking-wide text-sm mb-2">{f.title}</h3>
                                <p className="text-gray-400 font-mono text-xs leading-relaxed">{f.desc}</p>
                            </div>
                        ))}
                    </div>
                </AnimatedSection>
            </section>

            {/* ─── CTA #1 ─── */}
            <AnimatedSection animation="fade-up">
                <StatsCta />
            </AnimatedSection>

            {/* ─── Deliverables ─── */}
            <section className="py-20 bg-[#0a0a0a] border-b border-[#333] relative overflow-hidden">
                <ParallaxIcons scrollY={scrollY} />
                <AnimatedSection animation="fade-left" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <h2 className="text-3xl font-bold font-sans tracking-tight text-white mb-10 text-center">
                        Co dokładnie <span className="text-[var(--color-brand-orange)]">otrzymujesz?</span>
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {DELIVERABLES.map((d, i) => (
                            <div key={i} className="flex items-start gap-3 p-4 bg-[#050505] border border-[#333] hover:border-[var(--color-brand-orange)] transition-colors">
                                <CheckCircle2 className="w-5 h-5 text-[var(--color-brand-orange)] flex-shrink-0 mt-0.5" />
                                <span className="text-gray-300 font-mono text-sm">{d}</span>
                            </div>
                        ))}
                    </div>
                    <div className="text-center mt-10">
                        <Link href="#kontakt" className="inline-flex items-center justify-center px-8 py-4 bg-[var(--color-brand-orange)] text-black font-bold uppercase tracking-wider text-sm font-mono brutal-shadow hover:bg-[var(--color-brand-orange-hover)] transition-colors">
                            Sprawdź dostępność terminu <ArrowRight className="ml-2 w-4 h-4" />
                        </Link>
                    </div>
                </AnimatedSection>
            </section>

            {/* ─── Pricing with bg photo ─── */}
            <section className="py-20 bg-[#050505] border-b border-[#333] relative overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image src="/photos/IMG_2595.webp" alt="" fill className="object-cover" />
                    <div className="absolute inset-0 bg-black/92"></div>
                </div>
                <AnimatedSection animation="fade-up" className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center mb-14">
                        <h2 className="text-3xl md:text-4xl font-bold font-sans tracking-tight text-white mb-4">
                            Sprawdzone <span className="text-[var(--color-brand-orange)]">rezultaty</span>
                        </h2>
                        <p className="text-gray-400 font-mono text-sm">Dwa pakiety dopasowane do Twoich potrzeb i budżetu</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        {/* START Pack */}
                        <div className="border border-[#333] bg-black/60 backdrop-blur-sm p-8 brutal-shadow flex flex-col">
                            <h3 className="text-xl font-bold font-sans text-white uppercase tracking-tight mb-1">START Pack</h3>
                            <p className="text-gray-500 font-mono text-xs mb-6">Idealny na początek przygody z contentem</p>
                            <div className="mb-8">
                                <span className="text-4xl font-bold font-sans text-white">2,790</span>
                                <span className="text-gray-400 font-mono text-sm ml-2">zł netto</span>
                            </div>
                            <ul className="space-y-3 font-mono text-sm text-gray-300 mb-8 flex-grow">
                                {["1 dzień nagraniowy", "8 materiałów typu rolka¹", "Montaż + gotowe pliki", "Mini sesja zdjęciowa", "Dopasowanie do brandu", "Gotowe nagrania w 7 dni roboczych"].map((item, i) => (
                                    <li key={i} className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-[var(--color-brand-orange)] flex-shrink-0 mt-0.5" />{item}</li>
                                ))}
                            </ul>
                            <Link href="#kontakt" className="w-full text-center px-6 py-4 border-2 border-[#333] text-white font-bold uppercase tracking-wider text-sm font-mono hover:border-[var(--color-brand-orange)] hover:text-[var(--color-brand-orange)] transition-colors">
                                Zamów START Pack
                            </Link>
                        </div>
                        {/* PRO Pack */}
                        <div className="border-2 border-[var(--color-brand-orange)] bg-black/60 backdrop-blur-sm p-8 brutal-shadow flex flex-col relative">
                            <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-[var(--color-brand-orange)] text-black text-[10px] font-bold font-mono uppercase tracking-widest">Najlepszy wybór</div>
                            <h3 className="text-xl font-bold font-sans text-white uppercase tracking-tight mb-1">PRO Pack</h3>
                            <p className="text-gray-500 font-mono text-xs mb-6">Najlepszy wybór dla ambitnych firm</p>
                            <div className="mb-8">
                                <span className="text-4xl font-bold font-sans text-[var(--color-brand-orange)]">6,790</span>
                                <span className="text-gray-400 font-mono text-sm ml-2">zł netto</span>
                            </div>
                            <ul className="space-y-3 font-mono text-sm text-gray-300 mb-8 flex-grow">
                                {["Wszystko z START Pack", "15 materiałów typu rolka¹", "Research i analiza Twojej branży", "Propozycje pomysłów z najwyższym wskaźnikiem oglądalności", "2 dodatkowe filmy na YouTube", "Priorytetowa realizacja — gotowe w 72h", "Doradztwo marketingowe na miejscu", "Pomoc w stworzeniu brand boardu", "Dedykowany mini-plan publikacji"].map((item, i) => (
                                    <li key={i} className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-[var(--color-brand-orange)] flex-shrink-0 mt-0.5" />{item}</li>
                                ))}
                            </ul>
                            <Link href="#kontakt" className="w-full text-center px-6 py-4 bg-[var(--color-brand-orange)] text-black font-bold uppercase tracking-wider text-sm font-mono hover:bg-[var(--color-brand-orange-hover)] transition-colors">
                                Zamów PRO Pack
                            </Link>
                            <p className="text-center text-[var(--color-brand-orange)] font-mono text-xs mt-4 font-bold">Oszczędzasz 40% na materiale</p>
                        </div>
                    </div>
                    <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-6 text-gray-400 font-mono text-xs">
                        <div className="flex items-center gap-2"><ShieldCheck className="w-4 h-4 text-emerald-500" /> Jesteśmy legalną firmą</div>
                        <div className="flex items-center gap-2"><Receipt className="w-4 h-4 text-emerald-500" /> Wystawiamy faktury VAT</div>
                        <div className="flex items-center gap-2"><Scale className="w-4 h-4 text-emerald-500" /> Wszystko na jasnych zasadach</div>
                    </div>
                    <p className="text-center text-gray-600 font-mono text-[10px] mt-4">¹ Rolka to krótki film pionowy idealny na TikTok, Instagram Reels czy YouTube Shorts</p>
                </AnimatedSection>
            </section>

            {/* ─── CTA #2 ─── */}
            <AnimatedSection animation="fade-up">
                <StatsCta />
            </AnimatedSection>

            {/* ─── Why Us ─── */}
            <section className="py-20 bg-[#0a0a0a] border-b border-[#333] relative overflow-hidden">
                <ParallaxIcons scrollY={scrollY} />
                <AnimatedSection animation="fade-right" className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center mb-14">
                        <h2 className="text-3xl md:text-4xl font-bold font-sans tracking-tight text-white mb-3">
                            Dlaczego <span className="text-[var(--color-brand-orange)]">właśnie my?</span>
                        </h2>
                        <p className="text-gray-400 font-mono text-sm">6 powodów, dla których lokalne firmy wybierają DKW Group</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {WHY_US.map((w, i) => (
                            <div key={i} className="bg-[#050505] border border-[#333] p-6 hover:border-[var(--color-brand-orange)] transition-colors group">
                                <w.icon className="w-6 h-6 text-[var(--color-brand-orange)] mb-3" />
                                <h3 className="text-white font-bold font-sans text-sm uppercase tracking-wide mb-1">{w.title}</h3>
                                <p className="text-gray-500 font-mono text-xs leading-relaxed">{w.desc}</p>
                            </div>
                        ))}
                    </div>
                </AnimatedSection>
            </section>

            {/* ─── Coverage Area with bg photo ─── */}
            <section className="py-20 bg-[#050505] border-b border-[#333] relative overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image src="/portfolio-photos/eaeb6c01-ef07-499d-b97e-9ab8981aa057_rw_1200.webp" alt="" fill className="object-cover" />
                    <div className="absolute inset-0 bg-black/88"></div>
                </div>
                <AnimatedSection animation="fade-left" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                    <MapPinned className="w-10 h-10 text-[var(--color-brand-orange)] mx-auto mb-6" />
                    <h2 className="text-3xl font-bold font-sans tracking-tight text-white mb-3">
                        Zasięg <span className="text-[var(--color-brand-orange)]">działania</span>
                    </h2>
                    <p className="text-gray-400 font-mono text-sm mb-10">Dojeżdżamy do firm w promieniu 100 km od Katowic</p>
                    <div className="flex flex-wrap justify-center gap-3">
                        {CITIES.map((city, i) => (
                            <span key={i} className="px-4 py-2 bg-black/50 backdrop-blur-sm border border-white/10 font-mono text-sm text-gray-300 hover:border-[var(--color-brand-orange)] hover:text-[var(--color-brand-orange)] transition-colors">
                                {city}
                            </span>
                        ))}
                    </div>
                </AnimatedSection>
            </section>

            {/* ─── CTA #3 ─── */}
            <AnimatedSection animation="fade-up">
                <StatsCta />
            </AnimatedSection>

            {/* ─── FAQ ─── */}
            <section className="py-20 bg-[#0a0a0a] border-b border-[#333] relative overflow-hidden">
                <ParallaxIcons scrollY={scrollY} />
                <AnimatedSection animation="reveal" className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center mb-14">
                        <h2 className="text-3xl font-bold font-sans tracking-tight text-white mb-3">
                            Najczęściej zadawane <span className="text-[var(--color-brand-orange)]">pytania</span>
                        </h2>
                        <p className="text-gray-400 font-mono text-sm">Odpowiedzi na wszystkie wątpliwości przed zamówieniem</p>
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

            {/* ─── Contact info ─── */}
            <section className="py-16 bg-[#050505] border-b border-[#333]">
                <AnimatedSection animation="fade-right" className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-2xl font-bold font-sans text-white mb-3">Masz inne pytania?</h2>
                    <p className="text-gray-400 font-mono text-sm mb-8">Skontaktuj się z nami bezpośrednio — odpowiemy na wszystkie wątpliwości</p>
                    <div className="flex flex-col sm:flex-row justify-center gap-6">
                        <a href="tel:+48537168645" className="inline-flex items-center justify-center gap-2 text-white font-mono text-sm hover:text-[var(--color-brand-orange)] transition-colors"><Phone className="w-4 h-4 text-[var(--color-brand-orange)]" /> +48 537 168 645</a>
                        <a href="mailto:contact.dkwgroup@gmail.com" className="inline-flex items-center justify-center gap-2 text-white font-mono text-sm hover:text-[var(--color-brand-orange)] transition-colors"><Mail className="w-4 h-4 text-[var(--color-brand-orange)]" /> contact.dkwgroup@gmail.com</a>
                    </div>
                </AnimatedSection>
            </section>

            {/* ─── Final CTA ─── */}
            <section className="py-20 bg-[var(--color-brand-orange)] border-b border-[#333]">
                <AnimatedSection animation="scale" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-4xl md:text-5xl font-bold font-sans tracking-tighter text-black mb-4 uppercase">Gotowy na nowy poziom<br />widoczności?</h2>
                    <p className="text-black/70 font-mono text-sm mb-10 max-w-xl mx-auto">15 gotowych materiałów marketingowych w 72 godziny. Przestań czekać — zacznij działać już dziś.</p>
                    <div className="flex flex-wrap justify-center gap-4 mb-10 font-mono text-sm font-bold text-black">
                        <span className="flex items-center gap-2 bg-black/10 px-4 py-2 border border-black/20"><Clock className="w-4 h-4" /> Gotowe w 72h</span>
                        <span className="flex items-center gap-2 bg-black/10 px-4 py-2 border border-black/20"><Film className="w-4 h-4" /> 15 materiałów</span>
                        <span className="flex items-center gap-2 bg-black/10 px-4 py-2 border border-black/20"><Receipt className="w-4 h-4" /> Faktura VAT</span>
                    </div>
                    <Link href="#kontakt" className="inline-flex items-center justify-center px-10 py-5 bg-black text-white font-bold uppercase tracking-widest text-sm font-mono hover:bg-[#222] transition-colors brutal-shadow">
                        Zamów One Day Pack już teraz <ArrowRight className="ml-3 w-5 h-5" />
                    </Link>
                    <p className="text-black/60 font-mono text-xs mt-6">Ograniczona liczba terminów — nie czekaj!</p>
                </AnimatedSection>
            </section>

            <AnimatedSection animation="fade-up">
                <Contact />
            </AnimatedSection>
        </div>
    );
}
