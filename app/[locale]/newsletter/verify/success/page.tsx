import { Link } from "@/src/i18n/routing";
import { CheckCircle, ArrowRight } from "lucide-react";

export default function VerificationSuccessPage() {
    return (
        <main className="min-h-screen bg-[#050505] flex items-center justify-center p-4 selection:bg-[var(--color-brand-orange)] selection:text-white">
            <div className="max-w-xl w-full text-center animate-in fade-in zoom-in duration-500">
                <div className="relative mb-8 inline-block">
                    <div className="absolute inset-0 bg-[var(--color-brand-orange)] opacity-20 blur-3xl rounded-full scale-150 animate-pulse"></div>
                    <CheckCircle className="w-24 h-24 text-[var(--color-brand-orange)] mx-auto relative z-10" />
                </div>
                
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 uppercase tracking-tight font-sans">
                    Zapis Potwierdzony!
                </h1>
                
                <p className="text-gray-400 font-mono text-lg leading-relaxed mb-12">
                    Dziękujemy za potwierdzenie adresu e-mail. Twój zapis do newslettera jest już aktywny. Obiecane materiały (jeśli dotyczy) są już w drodze na Twoją skrzynkę!
                </p>
                
                <Link
                    href="/"
                    className="inline-flex items-center justify-center px-8 py-4 bg-[var(--color-brand-orange)] text-black font-bold uppercase tracking-widest hover:bg-[var(--color-brand-orange-hover)] transition-all brutal-shadow group"
                >
                    Wróć do strony głównej
                    <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-2 transition-transform" />
                </Link>
            </div>
        </main>
    );
}
