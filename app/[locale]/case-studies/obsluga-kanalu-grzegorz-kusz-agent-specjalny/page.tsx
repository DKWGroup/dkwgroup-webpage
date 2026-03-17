import Contact from "@/components/Contact";
import { Link } from "@/src/i18n/routing";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import Image from "next/image";
import AnimatedSection from "@/components/AnimatedSection";

export default function GrzegorzKuszCaseStudyPage() {
    return (
        <>
            <article className="bg-[#050505] min-h-screen text-white pt-24 pb-16 border-b border-[#333]">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

                    <Link href="/case-studies" className="inline-flex items-center text-xs font-mono font-bold text-gray-500 hover:text-[var(--color-brand-orange)] transition-colors uppercase tracking-widest mb-12 group">
                        <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                        Wróć do wszystkich Case Studies
                    </Link>

                    <header className="mb-16">
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 border border-[#333] bg-[#111] mb-6">
                            <span className="w-2 h-2 rounded-full bg-[var(--color-brand-orange)]"></span>
                            <span className="text-[10px] font-bold font-mono text-gray-400 uppercase tracking-widest">Zdrowie i finanse</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-sans tracking-tighter text-white mb-6 leading-tight">
                            Obsługa Kanału Grzegorz Kusz <br />
                            <span className="text-[var(--color-brand-orange)]">- Agent Specjalny</span>
                        </h1>
                        <div className="mt-8 relative w-full aspect-video border-2 border-[#333] brutal-shadow overflow-hidden">
                            <Image
                                src="/casestudy-kusz/9b006bf7-ecaf-4fd9-b67c-020b154cf73b.webp"
                                alt="Grzegorz Kusz Header"
                                fill
                                className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                            />
                        </div>
                    </header>

                    <AnimatedSection animation="fade-up" className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-20">
                        {/* Lewa kolumna: Podsumowanie */}
                        <div className="md:col-span-5">
                            <div className="bg-[#0a0a0a] border border-[#333] p-8 brutal-shadow h-full">
                                <h3 className="text-xl font-bold font-sans text-white uppercase tracking-tight mb-4">
                                    Podsumowanie projektu
                                </h3>
                                <p className="font-mono text-sm leading-relaxed text-gray-400">
                                    Kompleksowa obsługa kanału – od nagrań po publikację. Zajmowaliśmy się produkcją i postprodukcją wideo, planowaniem publikacji oraz tworzeniem miniaturek i grafik, dbając o spójność i maksymalne zasięgi treści. 🚀
                                </p>
                            </div>
                        </div>

                        {/* Prawa kolumna: Wprowadzenie */}
                        <div className="md:col-span-7 flex flex-col justify-center">
                            <h2 className="text-2xl font-bold font-sans text-white mb-6 tracking-tight">Wprowadzenie i cel projektu</h2>
                            <div className="font-sans text-gray-300 leading-relaxed space-y-4">
                                <p>
                                    Od ponad 5 lat prowadzimy kompleksową obsługę kanału YouTube naszego klienta, który zgromadził już ponad 450 000 subskrybentów. Dzięki naszemu doświadczeniu i skutecznym strategiom, kanał dynamicznie się rozwija, a twórca może w pełni skupić się na dostarczaniu wartościowych treści dla swojej społeczności.
                                </p>
                            </div>
                        </div>
                    </AnimatedSection>

                    {/* Sekcja: Proces Realizacji */}
                    <section className="mb-24">
                        <AnimatedSection animation="fade-right">
                            <h2 className="text-3xl font-bold font-sans text-white mb-10 tracking-tighter uppercase border-b border-[#333] pb-6">
                                Proces realizacji
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                                <div className="bg-[#111] border border-[#333] p-8 group hover:border-[var(--color-brand-orange)] transition-colors relative overflow-hidden">
                                    <div className="absolute top-4 right-4 text-6xl font-bold font-sans text-[#222] opacity-50 pointer-events-none group-hover:text-[var(--color-brand-orange)] group-hover:opacity-10 transition-colors">01</div>
                                    <h3 className="text-xl font-bold text-white mb-4 relative z-10">1. Profesjonalne nagrania wideo</h3>
                                    <p className="text-gray-400 font-mono text-sm leading-relaxed relative z-10">
                                        Zapewniamy realizację nagrań z wykorzystaniem wysokiej klasy sprzętu, dbając o optymalne oświetlenie, czysty dźwięk oraz dynamiczne ujęcia. Dzięki temu każdy materiał wyróżnia się jakością i przyciąga uwagę widzów.
                                    </p>
                                </div>

                                <div className="bg-[#111] border border-[#333] p-8 group hover:border-[var(--color-brand-orange)] transition-colors relative overflow-hidden">
                                    <div className="absolute top-4 right-4 text-6xl font-bold font-sans text-[#222] opacity-50 pointer-events-none group-hover:text-[var(--color-brand-orange)] group-hover:opacity-10 transition-colors">02</div>
                                    <h3 className="text-xl font-bold text-white mb-4 relative z-10">2. Postprodukcja i montaż filmów</h3>
                                    <p className="text-gray-400 font-mono text-sm leading-relaxed relative z-10">
                                        Odpowiadamy za kompleksową postprodukcję: montaż, korekcję kolorów, dodawanie efektów wizualnych i dźwiękowych. Nasze działania sprawiają, że filmy są atrakcyjne, spójne i profesjonalne, co przekłada się na wyższe zaangażowanie odbiorców.
                                    </p>
                                </div>

                                <div className="bg-[#111] border border-[#333] p-8 group hover:border-[var(--color-brand-orange)] transition-colors relative overflow-hidden">
                                    <div className="absolute top-4 right-4 text-6xl font-bold font-sans text-[#222] opacity-50 pointer-events-none group-hover:text-[var(--color-brand-orange)] group-hover:opacity-10 transition-colors">03</div>
                                    <h3 className="text-xl font-bold text-white mb-4 relative z-10">3. Planowanie i strategia publikacji</h3>
                                    <p className="text-gray-400 font-mono text-sm leading-relaxed relative z-10">
                                        Tworzymy strategię publikacji dostosowaną do algorytmów YouTube, co pozwala osiągać maksymalne zasięgi i utrzymywać regularność treści. Analizujemy trendy oraz najlepsze godziny publikacji, aby zwiększyć widoczność kanału.
                                    </p>
                                </div>

                                <div className="bg-[#111] border border-[#333] p-8 group hover:border-[var(--color-brand-orange)] transition-colors relative overflow-hidden">
                                    <div className="absolute top-4 right-4 text-6xl font-bold font-sans text-[#222] opacity-50 pointer-events-none group-hover:text-[var(--color-brand-orange)] group-hover:opacity-10 transition-colors">04</div>
                                    <h3 className="text-xl font-bold text-white mb-4 relative z-10">4. Tworzenie miniaturek i grafik</h3>
                                    <p className="text-gray-400 font-mono text-sm leading-relaxed relative z-10">
                                        Projektujemy przyciągające uwagę miniaturki oraz grafiki zoptymalizowane pod CTR (Click-Through Rate). Dzięki temu filmy generują więcej kliknięć i wyświetleń, a kanał zyskuje rozpoznawalność.
                                    </p>
                                </div>

                                <div className="bg-[#111] border border-[#333] p-8 md:col-span-2 group hover:border-[var(--color-brand-orange)] transition-colors relative overflow-hidden">
                                    <div className="absolute top-4 right-4 text-7xl font-bold font-sans text-[#222] opacity-50 pointer-events-none group-hover:text-[var(--color-brand-orange)] group-hover:opacity-10 transition-colors">05</div>
                                    <h3 className="text-xl font-bold text-white mb-4 relative z-10">5. Optymalizacja treści pod SEO</h3>
                                    <p className="text-gray-400 font-mono text-sm leading-relaxed max-w-3xl relative z-10">
                                        Dbamy o odpowiednie tytuły, opisy, tagi i hashtagi, które wspierają pozycjonowanie filmów w wyszukiwarce YouTube oraz rekomendacjach platformy. Nasza optymalizacja SEO przekłada się na stały wzrost liczby subskrybentów i wyświetleń.
                                    </p>
                                </div>

                            </div>
                        </AnimatedSection>
                    </section>

                    {/* Sekcja: Wyniki */}
                    <AnimatedSection animation="fade-left" className="mb-24">
                        <div className="bg-[var(--color-brand-orange)] text-black p-10 md:p-14 brutal-shadow border border-[#333]">
                            <h2 className="text-4xl md:text-5xl font-bold font-sans uppercase tracking-tighter mb-10 text-center">
                                WYNIKI KAMPANII
                            </h2>
                            <div className="space-y-6 max-w-2xl mx-auto">
                                <div className="flex items-start gap-4 bg-black/10 p-4 border border-black/20">
                                    <CheckCircle2 className="w-8 h-8 flex-shrink-0 mt-1" />
                                    <p className="font-bold text-lg leading-snug">
                                        <span className="text-2xl font-black block mb-1">Ponad 450 000 subskrybentów</span>
                                        w ciągu 5 lat prowadzenia kanału
                                    </p>
                                </div>
                                <div className="flex items-start gap-4 bg-black/10 p-4 border border-black/20">
                                    <CheckCircle2 className="w-6 h-6 flex-shrink-0 mt-1" />
                                    <p className="font-bold text-base leading-snug">
                                        Regularny wzrost liczby wyświetleń i zaangażowania społeczności
                                    </p>
                                </div>
                                <div className="flex items-start gap-4 bg-black/10 p-4 border border-black/20">
                                    <CheckCircle2 className="w-6 h-6 flex-shrink-0 mt-1" />
                                    <p className="font-bold text-base leading-snug">
                                        Profesjonalny wizerunek twórcy i rozpoznawalność marki w branży
                                    </p>
                                </div>
                            </div>
                            <div className="mt-12 text-center">
                                <a
                                    href="https://www.youtube.com/@AgentSpecjalny"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center justify-center bg-black hover:bg-[#222] text-white font-bold uppercase tracking-widest px-8 py-4 transition-colors font-sans brutal-shadow text-sm"
                                >
                                    Zobacz kanał na YouTube
                                </a>
                            </div>
                        </div>
                    </AnimatedSection>

                    {/* Sekcja: Wnioski i Podsumowanie */}
                    <AnimatedSection animation="fade-up" className="space-y-12">
                        <div>
                            <h2 className="text-3xl font-bold font-sans text-white mb-6 tracking-tighter uppercase border-b border-[#333] pb-6">
                                Wnioski
                            </h2>
                            <div className="font-sans text-gray-300 leading-relaxed space-y-4">
                                <p>
                                    Wieloletnia, kompleksowa obsługa kanału YouTube potwierdziła, że sukces wideo marketingu wymaga spójnej strategii, wysokiej jakości produkcji oraz ciągłej optymalizacji pod SEO.
                                </p>
                                <p>
                                    Dzięki systematycznemu planowaniu publikacji, atrakcyjnym miniaturkom i skutecznej optymalizacji treści, kanał osiągnął imponujący wzrost subskrypcji i zaangażowania. Nasze doświadczenie pokazuje, że profesjonalna produkcja wideo i przemyślana strategia publikacji są kluczowe dla budowania silnej marki oraz długofalowego rozwoju w mediach społecznościowych.
                                </p>
                            </div>
                        </div>

                        <div className="bg-[#0a0a0a] border-l-4 border-[var(--color-brand-orange)] p-8">
                            <h2 className="text-2xl font-bold font-sans text-white mb-4 tracking-tight uppercase">
                                Podsumowanie
                            </h2>
                            <p className="font-mono text-sm leading-relaxed text-gray-400 mb-8">
                                Dzięki kompleksowej obsłudze kanału YouTube nasz klient może w pełni skoncentrować się na tworzeniu wartościowych treści, a my dbamy o każdy aspekt techniczny, kreatywny i promocyjny. Nasze doświadczenie w produkcji wideo, optymalizacji SEO i strategii publikacji gwarantuje skuteczny rozwój kanału oraz wzrost zasięgów w mediach społecznościowych.
                            </p>

                            <div className="pt-8 border-t border-[#333]">
                                <p className="font-bold text-white mb-4 uppercase tracking-widest text-sm">
                                    Potrzebujesz podobnego rozwiązania?
                                </p>
                                <p className="text-gray-400 font-mono text-xs mb-6">
                                    Skontaktuj się z nami, aby omówić Twój projekt i poznać nasze możliwości.
                                </p>
                                <Link
                                    href="/kontakt"
                                    className="inline-flex items-center justify-center bg-[var(--color-brand-orange)] hover:bg-[#e65c00] text-black font-bold uppercase tracking-widest px-6 py-3 transition-colors font-sans text-xs brutal-shadow"
                                >
                                    Skontaktuj się z nami
                                </Link>
                            </div>
                        </div>
                    </AnimatedSection>

                </div>
            </article>
            <Contact />
        </>
    );
}
