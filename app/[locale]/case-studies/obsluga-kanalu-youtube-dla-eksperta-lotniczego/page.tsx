import Contact from "@/components/Contact";
import { Link } from "@/src/i18n/routing";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import Image from "next/image";
import AnimatedSection from "@/components/AnimatedSection";

export default function KokpitKamilaCaseStudyPage() {
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
                            <span className="text-[10px] font-bold font-mono text-gray-400 uppercase tracking-widest">Lotnicza</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-sans tracking-tighter text-white mb-6 leading-tight">
                            Obsługa Kanału YouTube <br />
                            <span className="text-[var(--color-brand-orange)]">dla Eksperta Lotniczego</span>
                        </h1>
                        <h2 className="text-2xl font-mono text-gray-400 uppercase tracking-widest mt-4">Kamil Matyja - „Kokpit Kamila”</h2>
                    </header>

                    <AnimatedSection animation="fade-up" className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-20">
                        {/* Lewa kolumna: Podsumowanie */}
                        <div className="md:col-span-5">
                            <div className="bg-[#0a0a0a] border border-[#333] p-8 brutal-shadow h-full">
                                <h3 className="text-xl font-bold font-sans text-white uppercase tracking-tight mb-4">
                                    Podsumowanie projektu
                                </h3>
                                <p className="font-mono text-sm leading-relaxed text-gray-400">
                                    Dla Kamila Matyji stworzyliśmy profesjonalny kanał YouTube „Kokpit Kamila”, który szybko stał się wiodącą platformą edukacyjną o lotnictwie śmigłowcowym w Polsce. Dzięki wysokiej jakości produkcji i skutecznej strategii marketingowej kanał osiągnął milionowe wyświetlenia, zwiększając rozpoznawalność marki osobistej i budując zaangażowaną społeczność pasjonatów lotnictwa.
                                </p>
                            </div>
                        </div>

                        {/* Prawa kolumna: Wprowadzenie */}
                        <div className="md:col-span-7 flex flex-col justify-center">
                            <h2 className="text-2xl font-bold font-sans text-white mb-6 tracking-tight">Wprowadzenie i cel projektu</h2>
                            <div className="font-sans text-gray-300 leading-relaxed space-y-4">
                                <p>
                                    Kamil Matyja, doświadczony pilot śmigłowców i właściciel firmy MK Helicopters specjalizującej się w premium transporcie śmigłowcowym, potrzebował kompleksowej strategii budowania swojej marki osobistej w internecie. W Polsce wiedza ekspercka z zakresu lotnictwa śmigłowcowego stanowi niszę z ogromnym potencjałem, który pozostawał niewykorzystany.
                                </p>
                            </div>
                        </div>
                    </AnimatedSection>

                    {/* Sekcja: Strategia */}
                    <section className="mb-24">
                        <AnimatedSection animation="fade-right">
                            <h2 className="text-3xl font-bold font-sans text-white mb-10 tracking-tighter uppercase border-b border-[#333] pb-6">
                                Strategia
                            </h2>
                            <div className="bg-[#111] border border-[#333] p-8 md:p-12 brutal-shadow">
                                <p className="text-gray-300 font-mono text-base leading-relaxed mb-8">
                                    Nasza strategia opierała się na stworzeniu profesjonalnego kanału YouTube &quot;Kokpit Kamila&quot; z wysokiej jakości treściami edukacyjnymi, które:
                                </p>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="border border-[#333] p-6 bg-[#050505] hover:border-[var(--color-brand-orange)] transition-colors">
                                        <div className="text-[var(--color-brand-orange)] font-bold text-xl mb-3">01</div>
                                        <p className="text-gray-400 font-mono text-sm">
                                            Prezentują specjalistyczną wiedzę na temat śmigłowców i lotnictwa
                                        </p>
                                    </div>
                                    <div className="border border-[#333] p-6 bg-[#050505] hover:border-[var(--color-brand-orange)] transition-colors">
                                        <div className="text-[var(--color-brand-orange)] font-bold text-xl mb-3">02</div>
                                        <p className="text-gray-400 font-mono text-sm">
                                            Budują wizerunek eksperta w dziedzinie lotniczej
                                        </p>
                                    </div>
                                    <div className="border border-[#333] p-6 bg-[#050505] hover:border-[var(--color-brand-orange)] transition-colors">
                                        <div className="text-[var(--color-brand-orange)] font-bold text-xl mb-3">03</div>
                                        <p className="text-gray-400 font-mono text-sm">
                                            Docierają do zainteresowanych odbiorców poprzez wieloplatformową dystrybucję
                                        </p>
                                    </div>
                                    <div className="border border-[#333] p-6 bg-[#050505] hover:border-[var(--color-brand-orange)] transition-colors">
                                        <div className="text-[var(--color-brand-orange)] font-bold text-xl mb-3">04</div>
                                        <p className="text-gray-400 font-mono text-sm">
                                            Wyróżniają się na tle konkurencji zaawansowaną produkcją filmową
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </AnimatedSection>
                    </section>

                    {/* Sekcja: Realizacja */}
                    <section className="mb-24">
                        <AnimatedSection animation="fade-left">
                            <h2 className="text-3xl font-bold font-sans text-white mb-10 tracking-tighter uppercase border-b border-[#333] pb-6">
                                Realizacja
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="bg-[#111] border border-[#333] p-8 group hover:border-[var(--color-brand-orange)] transition-colors relative overflow-hidden md:col-span-2">
                                    <div className="absolute top-4 right-4 text-8xl font-bold font-sans text-[#222] opacity-50 pointer-events-none group-hover:text-[var(--color-brand-orange)] group-hover:opacity-10 transition-colors">R</div>
                                    <p className="text-gray-400 font-mono text-base leading-relaxed relative z-10 mb-6">
                                        Zapewniliśmy kompleksową obsługę kanału, która obejmowała:
                                    </p>
                                    <ul className="list-disc list-inside text-gray-300 font-mono text-sm space-y-3 relative z-10 ml-2">
                                        <li>Regularne nagrania materiałów merytorycznych o lataniu śmigłowcami</li>
                                        <li>Produkcję treści edukacyjnych dotyczących mechaniki i techniki lotniczej</li>
                                        <li>Zaawansowany montaż z wykorzystaniem wielu perspektyw (kokpit, ujęcia z drona, kamery naziemne)</li>
                                        <li>Tworzenie angażujących shortsów na platformy społecznościowe</li>
                                        <li>Strategiczne działania marketingowe zwiększające zasięg i zaangażowanie</li>
                                    </ul>
                                    <div className="mt-8 pt-6 border-t border-[#333]">
                                        <p className="font-sans text-white leading-relaxed italic border-l-2 border-[var(--color-brand-orange)] pl-4">
                                            Wyróżnikiem naszej produkcji była wyjątkowa jakość wizualna osiągnięta dzięki filmowaniu z wielu perspektyw, co znacząco podnosiło wartość edukacyjną materiałów.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </AnimatedSection>
                    </section>

                    {/* Sekcja: Wyniki */}
                    <section className="mb-24">
                        <AnimatedSection animation="fade-up">
                            <div className="bg-[var(--color-brand-orange)] text-black p-10 md:p-14 brutal-shadow border border-[#333]">
                                <h2 className="text-4xl md:text-5xl font-bold font-sans uppercase tracking-tighter mb-10 text-center">
                                    REZULTATY
                                </h2>
                                <p className="text-center font-bold mb-8 text-black opacity-80 uppercase tracking-widest text-sm">
                                    Efekty naszej współpracy przerosły oczekiwania:
                                </p>
                                <div className="space-y-6 max-w-2xl mx-auto">
                                    <div className="flex items-start gap-4 bg-black/10 p-4 border border-black/20 hover:bg-black/15 transition-colors">
                                        <CheckCircle2 className="w-8 h-8 flex-shrink-0 mt-1" />
                                        <p className="font-bold text-base md:text-lg leading-snug">
                                            <span className="text-2xl md:text-3xl font-black block mb-2">Ponad 3 miliony wyświetleń</span>
                                            Materiały na kanale YouTube osiągnęły taki wynik w krótkim czasie
                                        </p>
                                    </div>
                                    <div className="flex items-start gap-4 bg-black/10 p-4 border border-black/20 hover:bg-black/15 transition-colors">
                                        <CheckCircle2 className="w-8 h-8 flex-shrink-0 mt-1" />
                                        <p className="font-bold text-base md:text-lg leading-snug">
                                            <span className="text-2xl md:text-3xl font-black block mb-2">1,3 miliona wyświetleń</span>
                                            Pierwszy reel opublikowany na Instagramie
                                        </p>
                                    </div>
                                    <div className="flex items-start gap-4 bg-black/10 p-4 border border-black/20">
                                        <CheckCircle2 className="w-6 h-6 flex-shrink-0 mt-1" />
                                        <p className="font-bold text-base leading-snug">
                                            Znacząco wzrosła rozpoznawalność marki osobistej Kamila Matyji w branży lotniczej
                                        </p>
                                    </div>
                                    <div className="flex items-start gap-4 bg-black/10 p-4 border border-black/20">
                                        <CheckCircle2 className="w-6 h-6 flex-shrink-0 mt-1" />
                                        <p className="font-bold text-base leading-snug">
                                            Udało się skutecznie zagospodarować niszę edukacji lotniczej w polskim internecie
                                        </p>
                                    </div>
                                    <div className="flex items-start gap-4 bg-black/10 p-4 border border-black/20">
                                        <CheckCircle2 className="w-6 h-6 flex-shrink-0 mt-1" />
                                        <p className="font-bold text-base leading-snug">
                                            Zbudowano zaangażowaną społeczność pasjonatów lotnictwa
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </AnimatedSection>
                    </section>

                    {/* Sekcja: Wnioski i Podsumowanie */}
                    <section className="space-y-12 mb-24">
                        <AnimatedSection animation="fade-right">
                            <h2 className="text-3xl font-bold font-sans text-white mb-6 tracking-tighter uppercase border-b border-[#333] pb-6">
                                Wnioski
                            </h2>
                            <div className="font-sans text-gray-300 leading-relaxed space-y-4">
                                <p>
                                    Projekt &quot;Kokpit Kamila&quot; pozwolił nam rozwinąć umiejętności w zakresie:
                                </p>
                                <ul className="list-disc list-inside text-gray-400 font-mono text-sm space-y-2 ml-2 mb-6">
                                    <li>Produkcji treści specjalistycznych z wymagającego technicznie obszaru</li>
                                    <li>Filmowania w trudnych warunkach (kokpit śmigłowca, ujęcia powietrzne)</li>
                                    <li>Tworzenia angażujących treści edukacyjnych z kompleksowych tematów technicznych</li>
                                    <li>Budowania strategii wieloplatformowej dla treści specjalistycznych</li>
                                </ul>
                                <div className="bg-[#111] border border-[#333] p-6 mt-6">
                                    <p className="font-mono text-sm text-gray-300 leading-relaxed italic border-l-2 border-[var(--color-brand-orange)] pl-4">
                                        Nasza współpraca z MK Helicopters udowodniła, że nawet w wąskich, specjalistycznych niszach możliwe jest zbudowanie silnej obecności online przy zastosowaniu profesjonalnej produkcji wideo i przemyślanej strategii marketingowej.
                                    </p>
                                </div>
                            </div>
                        </AnimatedSection>
                    </section>

                    {/* Sekcja: Galeria Zdjęć */}
                    <section className="mb-24">
                        <AnimatedSection animation="fade-up">
                            <h2 className="text-3xl font-bold font-sans text-white mb-10 tracking-tighter uppercase border-b border-[#333] pb-6">
                                Galeria Zdjęć
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                {[
                                    "/casestudy-kokpitkamila/5f75cd15-9344-4900-9293-d01f74483bc4.webp",
                                    "/casestudy-kokpitkamila/80d52e2a-cf86-4909-975c-a967fdb5ff98.webp",
                                    "/casestudy-kokpitkamila/aa42a3c6-4de8-4dc3-a009-6e0673799ec8.webp"
                                ].map((src, idx) => (
                                    <div key={idx} className="relative w-full aspect-square border-2 border-[#333] hover:border-[var(--color-brand-orange)] transition-colors brutal-shadow overflow-hidden group">
                                        <Image
                                            src={src}
                                            alt={`Galeria ${idx + 1}`}
                                            fill
                                            className="object-cover transition-all duration-500 group-hover:scale-105"
                                        />
                                    </div>
                                ))}
                            </div>
                        </AnimatedSection>
                    </section>

                    {/* CTA Footer */}
                    <section>
                        <AnimatedSection animation="fade-up" className="bg-[#0a0a0a] border-l-4 border-[var(--color-brand-orange)] p-8">
                            <div className="pt-2">
                                <p className="font-bold text-white mb-4 uppercase tracking-widest text-base">
                                    Potrzebujesz podobnego rozwiązania?
                                </p>
                                <p className="text-gray-400 font-mono text-sm mb-6">
                                    Skontaktuj się z nami, aby omówić Twój projekt i poznać nasze możliwości.
                                </p>
                                <Link
                                    href="/kontakt"
                                    className="inline-flex items-center justify-center bg-[var(--color-brand-orange)] hover:bg-[#e65c00] text-black font-bold uppercase tracking-widest px-8 py-4 transition-colors font-sans text-sm brutal-shadow"
                                >
                                    Skontaktuj się z nami
                                </Link>
                            </div>
                        </AnimatedSection>
                    </section>

                </div>
            </article>
            <Contact />
        </>
    );
}
