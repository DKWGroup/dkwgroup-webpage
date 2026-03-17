import Image from "next/image";
import { Link } from "@/src/i18n/routing";

export default function StudioSection() {
    return (
        <section className="bg-[#050505] py-16 border-b border-[#333] overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold font-sans tracking-tight mb-6 uppercase text-white leading-tight">
                            Studio nagrań <br />
                            <span className="text-[var(--color-brand-orange)]">wideo<br />i podcastów</span><br />
                            w Katowicach
                        </h2>

                        <p className="text-gray-400 font-mono text-base leading-relaxed mb-8 border-l-4 border-[var(--color-brand-orange)] pl-5">
                            Dla firm, ekspertów, trenerów i twórców internetowych, którzy chcą nagrywać profesjonalne podcasty i wideo bez martwienia się o technikalia.
                        </p>

                        <Link
                            href="https://podcastkatowice.pl"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center px-8 py-4 bg-[#111] border-2 border-[#333] text-white font-bold uppercase tracking-wider hover:border-[var(--color-brand-orange)] hover:text-[var(--color-brand-orange)] transition-colors brutal-shadow text-sm md:text-base"
                        >
                            Odwiedź podcastkatowice.pl
                        </Link>
                    </div>

                    <div className="relative w-full aspect-video border-2 border-[#333] brutal-shadow overflow-hidden group">
                        <Image
                            src="/photos/IMG_2753.webp"
                            alt="Studio podcastowe DKW Group w Katowicach"
                            fill
                            className="object-cover transition-all duration-700 group-hover:scale-[1.03]"
                        />
                        <div className="absolute top-0 right-0 w-16 h-16 bg-[var(--color-brand-orange)] opacity-0 group-hover:opacity-20 transition-opacity rounded-bl-full pointer-events-none z-10"></div>
                    </div>

                </div>
            </div>
        </section>
    );
}
