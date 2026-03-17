import { Settings } from "lucide-react";

export default function UstawieniaPage() {
    return (
        <div className="animate-in fade-in duration-500 flex flex-col items-center justify-center min-h-[80vh] text-center">
            <div className="bg-[#0a0a0a] border border-[#333] p-12 brutal-shadow max-w-2xl w-full">
                <div className="w-20 h-20 bg-[#111] border border-[var(--color-brand-orange)] rounded-full flex items-center justify-center mx-auto mb-8">
                    <Settings className="w-10 h-10 text-[var(--color-brand-orange)] animate-spin-slow" />
                </div>
                <h1 className="text-3xl font-bold font-sans text-white uppercase tracking-tight mb-4">
                    Moduł <span className="text-[var(--color-brand-orange)]">Ustawień</span>
                </h1>
                <div className="inline-block bg-[var(--color-brand-orange)] px-4 py-1 text-black font-bold text-xs uppercase tracking-widest mb-6 font-mono brutal-shadow -rotate-2">
                    Wdrożenie w trakcie
                </div>
                <p className="font-mono text-sm text-gray-400 leading-relaxed max-w-lg mx-auto">
                    Zarządzanie kontami współpracowników, profilami autoryzacji oraz podłączeniami API i baz danych. Wkrótce dostępne.
                </p>
            </div>
        </div>
    );
}
