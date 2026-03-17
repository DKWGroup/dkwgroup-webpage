"use client";

import { Wrench, Plus, Loader2 } from "lucide-react";

export default function AdminToolsPage() {
    return (
        <div className="animate-in fade-in duration-500 relative">
            
            {/* Header */}
            <div className="mb-10 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
                <div>
                    <h1 className="text-3xl font-bold font-sans text-white uppercase tracking-tight mb-2">
                        System <span className="text-[var(--color-brand-orange)]">Narzędzia</span>
                    </h1>
                    <p className="font-mono text-sm text-gray-400">
                        Dodatkowe narzędzia administracyjne i konfiguracja systemowa.
                    </p>
                </div>

                <div className="flex gap-4">
                    <button
                        className="flex items-center justify-center bg-[var(--color-brand-orange)] hover:bg-[var(--color-brand-orange-hover)] text-black font-bold uppercase tracking-widest px-6 py-3 transition-colors font-sans brutal-shadow opacity-50 cursor-not-allowed"
                        disabled
                    >
                        <Plus className="w-4 h-4 mr-2" />
                        Dodaj Narzędzie
                    </button>
                </div>
            </div>

            {/* Empty State */}
            <div className="bg-[#0a0a0a] border border-[#333] brutal-shadow p-12 flex flex-col items-center justify-center text-center min-h-[400px]">
                <div className="w-20 h-20 bg-[#111] border border-[#333] rounded-full flex items-center justify-center mb-6">
                    <Wrench className="w-10 h-10 text-gray-600" />
                </div>
                <h2 className="text-xl font-bold font-sans text-gray-300 uppercase tracking-widest mb-2">Moduł Narzędzi Pusty</h2>
                <p className="font-mono text-sm max-w-sm text-gray-500 mx-auto">
                    Ta sekcja jest obecnie przygotowana do przyszłych rozszerzeń systemowych. 
                </p>
            </div>

        </div>
    );
}
