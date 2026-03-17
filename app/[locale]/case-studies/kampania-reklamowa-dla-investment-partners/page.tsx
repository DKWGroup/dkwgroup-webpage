import Contact from "@/components/Contact";
import { Link } from "@/src/i18n/routing";
import { ArrowLeft, CheckCircle2, Image as ImageIcon } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

export default function InvestmentPartnersCaseStudyPage() {
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
                            <span className="text-[10px] font-bold font-mono text-gray-400 uppercase tracking-widest">Finansowa</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-sans tracking-tighter text-white mb-6 leading-tight">
                            Kampania Reklamowa <br />
                            <span className="text-[var(--color-brand-orange)]">Dla Investment Partners</span>
                        </h1>
                    </header>

                    <AnimatedSection animation="fade-up" className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-20">
                        {/* Lewa kolumna: Podsumowanie */}
                        <div className="md:col-span-5">
                            <div className="bg-[#0a0a0a] border border-[#333] p-8 brutal-shadow h-full">
                                <h3 className="text-xl font-bold font-sans text-white uppercase tracking-tight mb-4">
                                    Podsumowanie projektu
                                </h3>
                                <p className="font-mono text-sm leading-relaxed text-gray-400">
                                    Dla Investment Partners stworzyliśmy skuteczną kampanię promocyjną dla projektu „Metamorfoza Finansowa” – bezpłatnej platformy edukacyjnej. Przygotowaliśmy angażujący spot reklamowy, który zwiększył zasięgi i przyciągnął setki uczestników. Kampania przyczyniła się do wzrostu rozpoznawalności marki i wzmocnienia jej pozycji jako eksperta w edukacji finansowej.
                                </p>
                            </div>
                        </div>

                        {/* Prawa kolumna: Wprowadzenie */}
                        <div className="md:col-span-7 flex flex-col justify-center">
                            <h2 className="text-2xl font-bold font-sans text-white mb-6 tracking-tight">Wprowadzenie i cel projektu</h2>
                            <div className="font-sans text-gray-300 leading-relaxed space-y-4">
                                <p>
                                    Investment Partners – renomowana firma doradztwa finansowego – powierzyła nam realizację kampanii reklamowej dla ogólnopolskiego projektu „Metamorfoza Finansowa”. Celem było skuteczne wypromowanie bezpłatnej platformy edukacyjnej oraz konkursu, trwającego od września 2023 do marca 2024 roku. Kluczowym zadaniem było dotarcie do szerokiego grona odbiorców i zachęcenie ich do udziału w inicjatywie wspierającej świadome zarządzanie finansami osobistymi.
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

                                <div className="bg-[#111] border border-[#333] p-8 group hover:border-[var(--color-brand-orange)] transition-colors relative overflow-hidden md:col-span-2">
                                    <div className="absolute top-4 right-4 text-7xl font-bold font-sans text-[#222] opacity-50 pointer-events-none group-hover:text-[var(--color-brand-orange)] group-hover:opacity-10 transition-colors">01</div>
                                    <h3 className="text-xl font-bold text-white mb-4 relative z-10">1. Opracowanie strategii marketingowej</h3>
                                    <p className="text-gray-400 font-mono text-sm leading-relaxed relative z-10 mb-4">
                                        Nasza strategia marketingowa opierała się na stworzeniu angażującego spotu reklamowego, który w przystępny sposób prezentował korzyści udziału w projekcie. Kluczowe etapy procesu obejmowały:
                                    </p>
                                    <ul className="list-disc list-inside text-gray-300 font-mono text-sm space-y-2 relative z-10 ml-2">
                                        <li>Opracowanie scenariusza podkreślającego wartość edukacyjną projektu „Metamorfoza Finansowa”</li>
                                        <li>Stworzenie profesjonalnego tekstu lektorskiego</li>
                                        <li>Kompleksową produkcję filmową, w tym nagrania z aktorami i organizację przestrzeni zdjęciowej</li>
                                        <li>Montaż końcowy oraz przygotowanie materiałów do dystrybucji</li>
                                        <li>Dystrybucję spotu v ramach kampanii reklamowej w mediach społecznościowych i na YouTube</li>
                                    </ul>
                                </div>

                                <div className="bg-[#111] border border-[#333] p-8 group hover:border-[var(--color-brand-orange)] transition-colors relative overflow-hidden md:col-span-2">
                                    <div className="absolute top-4 right-4 text-7xl font-bold font-sans text-[#222] opacity-50 pointer-events-none group-hover:text-[var(--color-brand-orange)] group-hover:opacity-10 transition-colors">02</div>
                                    <h3 className="text-xl font-bold text-white mb-4 relative z-10">2. Produkcja filmowa</h3>
                                    <p className="text-gray-400 font-mono text-sm leading-relaxed relative z-10 mb-4">
                                        Zrealizowaliśmy kompletny spot reklamowy, który w atrakcyjny sposób prezentował:
                                    </p>
                                    <ul className="list-disc list-inside text-gray-300 font-mono text-sm space-y-2 relative z-10 ml-2">
                                        <li>Czteromodułowy kurs finansowy</li>
                                        <li>Dziennik Metamorfozy Finansowej</li>
                                        <li>Poradniki zarządzania budżetem domowym</li>
                                        <li>Indywidualne konsultacje z planerem finansowym</li>
                                        <li>Spotkania live z ekspertami finansowymi</li>
                                    </ul>
                                </div>
                            </div>
                        </AnimatedSection>
                    </section>

                    {/* Wideo Instagram 1 - Pod sekcją proces realizacji */}
                    <div className="mb-24 flex justify-center">
                        <div className="w-full max-w-[400px] border-2 border-[#333] p-4 bg-[#111] brutal-shadow relative">
                            <div className="absolute top-2 right-2 w-6 h-6 border-t-2 border-r-2 border-[var(--color-brand-orange)] pointer-events-none"></div>
                            <div className="absolute bottom-2 left-2 w-6 h-6 border-b-2 border-l-2 border-[var(--color-brand-orange)] pointer-events-none"></div>
                            <div className="relative w-full pb-[177.77%] overflow-hidden">
                                <iframe
                                    src="https://www.instagram.com/reel/C_LTeycsanE/embed"
                                    className="absolute top-0 left-0 w-full h-full border-0"
                                    allowFullScreen
                                    scrolling="no"
                                    allowTransparency
                                />
                            </div>
                        </div>
                    </div>


                    {/* Sekcja: Wyniki */}
                    <section className="mb-24">
                        <AnimatedSection animation="fade-left" className="bg-[var(--color-brand-orange)] text-black p-10 md:p-14 brutal-shadow border border-[#333]">
                            <h2 className="text-4xl md:text-5xl font-bold font-sans uppercase tracking-tighter mb-10 text-center">
                                WYNIKI KAMPANII
                            </h2>
                            <p className="text-center font-bold mb-8 text-black opacity-80">
                                Kampania reklamowa dla projektu „Metamorfoza Finansowa” przyniosła wymierne efekty:
                            </p>
                            <div className="space-y-6 max-w-2xl mx-auto">
                                <div className="flex items-start gap-4 bg-black/10 p-4 border border-black/20">
                                    <CheckCircle2 className="w-8 h-8 flex-shrink-0 mt-1" />
                                    <p className="font-bold text-lg leading-snug">
                                        <span className="text-2xl font-black block mb-1">Ponad 30 000 wyświetleń</span>
                                        Spot reklamowy opublikowany na kanale YouTube „Grzegorz Kusz Agent Specjalny” zgromadził imponującą publikę.
                                    </p>
                                </div>
                                <div className="flex items-start gap-4 bg-black/10 p-4 border border-black/20">
                                    <CheckCircle2 className="w-6 h-6 flex-shrink-0 mt-1" />
                                    <p className="font-bold text-base leading-snug">
                                        Setki osób zarejestrowało się do udziału w konkursie edukacyjnym
                                    </p>
                                </div>
                                <div className="flex items-start gap-4 bg-black/10 p-4 border border-black/20">
                                    <CheckCircle2 className="w-6 h-6 flex-shrink-0 mt-1" />
                                    <p className="font-bold text-base leading-snug">
                                        Znacząco zwiększono rozpoznawalność marki <strong>Investment Partners</strong> w branży finansowej
                                    </p>
                                </div>
                                <div className="flex items-start gap-4 bg-black/10 p-4 border border-black/20">
                                    <CheckCircle2 className="w-6 h-6 flex-shrink-0 mt-1" />
                                    <p className="font-bold text-base leading-snug">
                                        Wzmocniono wizerunek firmy jako eksperta w dziedzinie edukacji finansowej i marketingu internetowego
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
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="aspect-video bg-[#111] border border-[#333] flex flex-col items-center justify-center text-gray-500 hover:border-[var(--color-brand-orange)] transition-colors group brutal-shadow">
                                    <ImageIcon className="w-12 h-12 mb-4 opacity-50 group-hover:opacity-100 group-hover:text-[var(--color-brand-orange)] transition-all" />
                                    <span className="font-mono text-sm uppercase tracking-widest">Gallery image 1</span>
                                </div>
                                <div className="aspect-video bg-[#111] border border-[#333] flex flex-col items-center justify-center text-gray-500 hover:border-[var(--color-brand-orange)] transition-colors group brutal-shadow">
                                    <ImageIcon className="w-12 h-12 mb-4 opacity-50 group-hover:opacity-100 group-hover:text-[var(--color-brand-orange)] transition-all" />
                                    <span className="font-mono text-sm uppercase tracking-widest">Thumbnail 1</span>
                                </div>
                            </div>
                        </AnimatedSection>
                    </section>

                    {/* Wideo Instagram 2 - Pod galerią zdjęć */}
                    <div className="mb-24 flex justify-center">
                        <div className="w-full max-w-[400px] border-2 border-[#333] p-4 bg-[#111] brutal-shadow relative">
                            <div className="absolute top-2 right-2 w-6 h-6 border-t-2 border-r-2 border-[var(--color-brand-orange)] pointer-events-none"></div>
                            <div className="absolute bottom-2 left-2 w-6 h-6 border-b-2 border-l-2 border-[var(--color-brand-orange)] pointer-events-none"></div>
                            <div className="relative w-full pb-[177.77%] overflow-hidden">
                                <iframe
                                    src="https://www.instagram.com/reel/C_ZFjBWt8fO/embed"
                                    className="absolute top-0 left-0 w-full h-full border-0"
                                    allowFullScreen
                                    scrolling="no"
                                    allowTransparency
                                />
                            </div>
                        </div>
                    </div>


                    {/* Sekcja: Wnioski i Podsumowanie */}
                    <AnimatedSection animation="fade-up" className="space-y-12">
                        <div>
                            <h2 className="text-3xl font-bold font-sans text-white mb-6 tracking-tighter uppercase border-b border-[#333] pb-6">
                                Wnioski
                            </h2>
                            <div className="font-sans text-gray-300 leading-relaxed space-y-4">
                                <p>
                                    Realizacja projektu „Metamorfoza Finansowa” pozwoliła nam:
                                </p>
                                <ul className="list-disc list-inside text-gray-400 font-mono text-sm space-y-2 ml-2">
                                    <li>Udoskonalić proces produkcji filmowej ukierunkowanej na konkretne cele biznesowe</li>
                                    <li>Zoptymalizować komunikację na planie filmowym i koordynację pracy z aktorami</li>
                                    <li>Skutecznie organizować przestrzeń zdjęciową pod kątem kampanii reklamowych</li>
                                    <li>Rozwinąć kompetencje w zakresie marketingu internetowego i promocji usług edukacyjnych</li>
                                </ul>
                            </div>
                        </div>

                        <div className="bg-[#0a0a0a] border-l-4 border-[var(--color-brand-orange)] p-8">
                            <h2 className="text-2xl font-bold font-sans text-white mb-4 tracking-tight uppercase">
                                Podsumowanie
                            </h2>
                            <p className="font-mono text-sm leading-relaxed text-gray-400 mb-8">
                                Efektywna współpraca z Investment Partners zaowocowała kampanią reklamową, która nie tylko przyciągnęła setki uczestników do projektu „Metamorfoza Finansowa”, ale również przyczyniła się do budowania świadomości finansowej wśród Polaków. Nasze doświadczenie w produkcji filmowej, marketingu internetowym i promocji w social media potwierdza skuteczność realizowanych przez nas kampanii reklamowych dla branży finansowej.
                            </p>

                            <div className="pt-8 border-t border-[#333]">
                                <p className="font-bold text-white mb-4 uppercase tracking-widest text-sm">
                                    Potrzebujesz podobnego rozwiązania?
                                </p>
                                <p className="text-gray-400 font-mono text-xs mb-6">
                                    Skontaktuj się z nami, aby omówić Twój projekt i poznaj nasze możliwości.
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
