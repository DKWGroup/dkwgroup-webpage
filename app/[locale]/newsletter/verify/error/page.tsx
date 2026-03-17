import { Link } from "@/src/i18n/routing";
import { XCircle, ArrowRight, RefreshCcw } from "lucide-react";

export default function VerificationErrorPage() {
    return (
        <main className="min-h-screen bg-[#050505] flex items-center justify-center p-4 selection:bg-[var(--color-brand-orange)] selection:text-white">
            <div className="max-w-xl w-full text-center animate-in fade-in zoom-in duration-500">
                <div className="relative mb-8 inline-block">
                    <div className="absolute inset-0 bg-red-600 opacity-20 blur-3xl rounded-full scale-150 animate-pulse"></div>
                    <XCircle className="w-24 h-24 text-red-500 mx-auto relative z-10" />
                </div>
                
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 uppercase tracking-tight font-sans">
                    Błąd Weryfikacji
                </h1>
                
                <p className="text-gray-400 font-mono text-lg leading-relaxed mb-12">
                    Link verifikacyjny jest nieprawidłowy lub wygasł. Spróbuj zapisać się ponownie lub skontaktuj się z nami, jeśli problem nadal występuje.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link
                        href="/"
                        className="inline-flex items-center justify-center px-8 py-4 bg-[#111] border border-[#333] text-white font-bold uppercase tracking-widest hover:border-[var(--color-brand-orange)] transition-all brutal-shadow group"
                    >
                        Strona główna
                    </Link>
                    <Link
                        href="/#newsletter"
                        className="inline-flex items-center justify-center px-8 py-4 bg-[var(--color-brand-orange)] text-black font-bold uppercase tracking-widest hover:bg-[var(--color-brand-orange-hover)] transition-all brutal-shadow group"
                    >
                        <RefreshCcw className="mr-3 w-5 h-5 group-hover:rotate-180 transition-transform duration-500" />
                        Spróbuj ponownie
                    </Link>
                </div>
            </div>
        </main>
    );
}
