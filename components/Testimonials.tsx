import { ShieldCheck } from "lucide-react";

export default function Testimonials() {
    const TESTIMONIALS = [
        {
            name: "Jan Kowalski",
            role: "CEO, TechCompany",
            text: "Współpraca z DKW Group to była świetna decyzja. Profesjonalne podejście i niesamowite efekty w postaci świetnych materiałów video, które pomogły nam zwiększyć sprzedaż."
        },
        {
            name: "Anna Nowak",
            role: "Marketing Manager, BeautyBrand",
            text: "Zleciliśmy im obsługę naszych kampanii reklamowych i efekty przeszły nasze najśmielsze oczekiwania. Świetny kontakt, terminowość i pełne zrozumienie naszych potrzeb."
        },
        {
            name: "Piotr Wiśniewski",
            role: "Właściciel, FitnessClub",
            text: "Dzięki ich sesjom zdjęciowym i wideo nasz klub w końcu wygląda w internecie tak samo dobrze jak na żywo. Gorąco polecam!"
        },
        {
            name: "Grzegorz Zawadzki",
            role: "Właściciel, E-shop",
            text: "Social Media Management od DKW Group to game changer. Sprzedaż wzrosła o 40% w pierwszym kwartale. Wiedzą co robią!"
        },
        {
            name: "Magdalena K.",
            role: "Założycielka Kliniki Estetycznej",
            text: "Zasięgi naszych postów wystrzeliły w górę. Profesjonalizm i dbałość o estetykę marki na najwyższym poziomie."
        },
        {
            name: "Robert Milewski",
            role: "Dyrektor Operacyjny, LogiTrans",
            text: "Filmy korporacyjne wykonane przez zespół DKW oddają ducha naszej firmy. Współpraca przebiegła sprawnie i bezproblemowo."
        }
    ];

    return (
        <section className="py-16 bg-[#0a0a0a] border-b border-[#333] relative overflow-hidden">

            {/* Background Video - directly on section, no wrapper */}
            {/* Poprawka: Zwiększono przezroczystość/jasność wideo i dopasowano nakładkę bg-black */}
            <video
                src="/videos/na strone.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover z-0 opacity-40 brightness-75 pointer-events-none"
            />

            {/* Dark overlay poprawione z niestandardowego /49 na /60 */}
            <div className="absolute inset-0 bg-black/60 z-[1] pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold font-sans tracking-tight uppercase text-white mb-5">
                        Opinie <span className="text-[var(--color-brand-orange)]">Klientów</span>
                    </h2>
                    <p className="text-gray-400 font-mono text-sm leading-relaxed max-w-3xl mx-auto">
                        Sprawdź, co mówią o nas klienci, z którymi mieliśmy przyjemność współpracować.
                    </p>
                    <div className="w-20 h-1.5 bg-[var(--color-brand-orange)] mx-auto mt-6"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {TESTIMONIALS.map((testimonial, index) => (
                        <div
                            key={index}
                            className="bg-black border border-[#333] p-6 flex flex-col brutal-shadow hover:border-[var(--color-brand-orange)] transition-colors relative overflow-hidden group"
                        >
                            <div className="relative z-10 text-[var(--color-brand-orange)] text-3xl font-serif mb-3 leading-none">"</div>
                            <p className="relative z-10 text-gray-300 font-mono text-sm leading-relaxed mb-6 flex-grow">
                                {testimonial.text}
                            </p>
                            <div className="relative z-10 mt-auto border-t border-[#333] pt-4">
                                <div className="flex items-center gap-2 mb-1">
                                    <h4 className="text-white font-bold font-sans uppercase tracking-wide">{testimonial.name}</h4>
                                    <ShieldCheck className="w-4 h-4 text-emerald-500" />
                                </div>
                                <p className="text-gray-500 font-mono text-xs">{testimonial.role}</p>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
