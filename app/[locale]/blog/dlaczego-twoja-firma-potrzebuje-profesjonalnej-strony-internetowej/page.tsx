import Contact from "@/components/Contact";
import { Link } from "@/src/i18n/routing";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import AnimatedSection from "@/components/AnimatedSection";

export default function BlogPostPage() {
    return (
        <>
            <article className="bg-[#050505] min-h-screen text-white pt-24 pb-16 border-b border-[#333]">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">

                    <Link href="/blog" className="inline-flex items-center text-xs font-mono font-bold text-gray-500 hover:text-[var(--color-brand-orange)] transition-colors uppercase tracking-widest mb-12 group">
                        <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                        Powrót do bloga
                    </Link>

                    <header className="mb-12 border-b border-[#333] pb-12">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-sans tracking-tighter text-white mb-6 leading-tight">
                            Dlaczego Twoja firma potrzebuje profesjonalnej strony internetowej?
                        </h1>
                        <div className="flex items-center gap-4 text-gray-500 font-mono text-xs uppercase tracking-widest mb-8">
                            <span>28.05.2025</span>
                            <span className="w-1 h-1 bg-[var(--color-brand-orange)] rounded-full"></span>
                            <span>Kamil Krukowski</span>
                        </div>

                        <div className="relative w-full aspect-video border-2 border-[#333] brutal-shadow overflow-hidden group">
                            <Image
                                src="/photos/blog/b57d1cf4-3390-4f29-8a35-781704c7c65e.webp"
                                alt="Dlaczego Twoja firma potrzebuje profesjonalnej strony internetowej?"
                                fill
                                className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                            />
                        </div>
                    </header>

                    <AnimatedSection animation="fade-up">
                        <div className="font-sans text-gray-300 leading-relaxed space-y-6">
                            <p className="font-mono text-sm md:text-base border-l-2 border-[var(--color-brand-orange)] pl-6 text-gray-400 mb-10 italic">
                                W dzisiejszych czasach obecność w internecie to absolutna podstawa dla każdej firmy, niezależnie od jej wielkości czy branży. Strona internetowa to nie tylko wizytówka Twojej działalności, ale także potężne narzędzie, które może pomóc w budowaniu zaufania, pozyskiwaniu klientów i zwiększaniu sprzedaży. Dlaczego warto zainwestować w profesjonalną stronę internetową? Oto kilka kluczowych powodów.
                            </p>

                            <h2 className="text-2xl font-bold text-white mt-12 mb-4 tracking-tight">Strona internetowa to podstawa obecności w sieci</h2>
                            <p>
                                Internet to pierwsze miejsce, w którym klienci szukają informacji o firmach, produktach i usługach. Jeśli Twoja firma nie ma strony internetowej, tracisz szansę na dotarcie do potencjalnych klientów. Profesjonalna strona internetowa pozwala Ci być widocznym w sieci 24/7, co oznacza, że Twoja oferta jest dostępna dla klientów o każdej porze dnia i nocy.
                            </p>
                            <p>
                                Obecnie przez Google przechodzi średnio 99,000 zapytań co każdą sekundę. To nawet do <strong className="text-white">8.5 miliarda wyszukiwań na dzień!</strong> Są to ogromne liczby, które dowodzą tego jak ogromny ruch jest generowany na platformie Google. Dodatkowo z samego Internetu korzysta ponad 5.5 miliarda ludzi na świecie, co przedstawia również poniższy wykres.
                            </p>
                            <p>
                                Dzięki stronie internetowej możesz zaprezentować swoją firmę w sposób, który najlepiej oddaje jej charakter i wartości. To miejsce, w którym możesz opowiedzieć swoją historię, przedstawić ofertę i nawiązać kontakt z klientami. Bez strony internetowej Twoja firma może wydawać się mniej wiarygodna, a potencjalni klienci mogą wybrać konkurencję, która jest bardziej widoczna online.
                            </p>

                            <h2 className="text-2xl font-bold text-white mt-12 mb-4 tracking-tight">Budowanie zaufania i profesjonalnego wizerunku</h2>
                            <p>
                                Pierwsze wrażenie ma ogromne znaczenie, a w przypadku firm często to właśnie strona internetowa jest tym pierwszym kontaktem z klientem. Profesjonalnie zaprojektowana strona internetowa buduje zaufanie i pokazuje, że Twoja firma jest nowoczesna, solidna i godna uwagi.
                            </p>
                            <p>
                                Elementy takie jak estetyczny design, intuicyjna nawigacja i wartościowe treści sprawiają, że klienci chętniej wybierają Twoje usługi. Strona internetowa to także miejsce, w którym możesz zaprezentować opinie zadowolonych klientów, certyfikaty czy osiągnięcia, co dodatkowo wzmacnia Twój wizerunek.
                            </p>

                            <h2 className="text-2xl font-bold text-white mt-12 mb-4 tracking-tight">Pozyskiwanie klientów i zwiększanie sprzedaży</h2>
                            <p>
                                Strona internetowa to jedno z najskuteczniejszych narzędzi do pozyskiwania klientów. Dzięki odpowiedniej strukturze, atrakcyjnym treściom i funkcjonalnościom, takim jak formularze kontaktowe, systemy rezerwacji czy integracje z mediami społecznościowymi, możesz skutecznie zachęcać odwiedzających do podjęcia działania.
                            </p>
                            <p>
                                Dobrze zaprojektowana strona internetowa działa jak Twój najlepszy sprzedawca – pracuje dla Ciebie 24/7, generując zapytania i sprzedaż nawet wtedy, gdy Ty śpisz. To także idealne miejsce do prezentacji Twojej oferty w sposób przejrzysty i przekonujący, co zwiększa szanse na konwersję odwiedzających w klientów.
                            </p>

                            <h2 className="text-2xl font-bold text-white mt-12 mb-4 tracking-tight">Strona internetowa to inwestycja na lata</h2>
                            <p>
                                Profesjonalnie zaprojektowana strona internetowa to inwestycja, która przynosi korzyści przez wiele lat. Dzięki zastosowaniu nowoczesnych technologii i systemów CMS (Content Management System), możesz łatwo aktualizować treści, dodawać nowe funkcjonalności czy rozbudowywać witrynę w miarę rozwoju Twojej firmy. To elastyczne rozwiązanie, które dostosowuje się do zmieniających się potrzeb Twojego biznesu.
                            </p>

                            <h2 className="text-2xl font-bold text-white mt-12 mb-4 tracking-tight">Podsumowanie: Zainwestuj w rozwój swojej firmy</h2>
                            <p className="mb-10">
                                Profesjonalna strona internetowa to nie tylko wizytówka Twojej firmy, ale także kluczowe narzędzie wspierające rozwój biznesu. Buduje zaufanie, pomaga pozyskiwać klientów i zwiększa sprzedaż. Jeśli chcesz, aby Twoja firma była widoczna w internecie i wyróżniała się na tle konkurencji, nie zwlekaj z decyzją.
                            </p>

                            <div className="bg-[#111] border border-[#333] p-8 brutal-shadow my-12 text-center mx-auto md:max-w-xl">
                                <p className="font-bold text-white mb-6 uppercase tracking-widest text-lg">
                                    Zamów stronę internetową dopasowaną do Twoich potrzeb
                                </p>
                                <Link
                                    href="/kontakt"
                                    className="inline-flex items-center justify-center w-full md:w-auto bg-[var(--color-brand-orange)] hover:bg-[#e65c00] text-black font-bold uppercase tracking-widest px-8 py-4 transition-colors font-sans brutal-shadow text-sm"
                                >
                                    Skontaktuj się z nami już dziś!
                                </Link>
                                <p className="mt-6 text-xs font-mono text-gray-500 uppercase tracking-widest">
                                    Razem stworzymy stronę, która będzie pracować na sukces Twojej firmy.
                                </p>
                            </div>

                            <div className="pt-8 mt-16 border-t border-[#222]">
                                <h3 className="font-mono text-xs uppercase tracking-widest text-gray-500 mb-4 font-bold">Źródła</h3>
                                <ul className="space-y-3 font-mono text-xs break-all">
                                    <li>
                                        <a href="https://www.statista.com/statistics/617136/digital-population-worldwide/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[var(--color-brand-orange)] transition-colors underline underline-offset-4 decoration-[#333] hover:decoration-[var(--color-brand-orange)]">
                                            https://www.statista.com/statistics/617136/digital-population-worldwide/
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://seo.ai/blog/how-many-people-use-google" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[var(--color-brand-orange)] transition-colors underline underline-offset-4 decoration-[#333] hover:decoration-[var(--color-brand-orange)]">
                                            https://seo.ai/blog/how-many-people-use-google
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </AnimatedSection>
                </div>
            </article>
            <Contact />
        </>
    );
}
