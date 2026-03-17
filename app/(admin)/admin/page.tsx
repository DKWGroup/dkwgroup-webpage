import { BarChart3, TrendingUp, Users, DollarSign } from "lucide-react";

export default function AdminDashboardPage() {
    return (
        <div className="animate-in fade-in duration-500">

            <div className="mb-10 flex flex-col md:flex-row justify-between items-start md:items-end">
                <div>
                    <h1 className="text-3xl font-bold font-sans text-white uppercase tracking-tight mb-2">
                        Przegląd <span className="text-[var(--color-brand-orange)]">Systemu</span>
                    </h1>
                    <p className="font-mono text-sm text-gray-400">
                        Podsumowanie miesięczne DKW Group – Maj 2026
                    </p>
                </div>
                <div className="mt-4 md:mt-0 px-4 py-2 border border-[#333] bg-[#0a0a0a] font-mono text-xs text-gray-400 brutal-shadow">
                    Ostatnia aktualizacja: przed chwilą
                </div>
            </div>

            {/* KPI Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">

                <div className="bg-[#0a0a0a] border border-[#333] p-6 brutal-shadow hover:border-gray-500 transition-colors">
                    <div className="flex justify-between items-start mb-4">
                        <p className="font-mono text-xs text-gray-500 uppercase tracking-widest">Aktywni Klienci</p>
                        <Users className="w-5 h-5 text-[var(--color-brand-orange)]" />
                    </div>
                    <div className="flex items-end gap-3">
                        <h3 className="text-4xl font-bold text-white font-sans">18</h3>
                        <span className="text-green-500 font-mono text-xs font-bold mb-1 flex items-center">
                            +2 <TrendingUp className="w-3 h-3 ml-1" />
                        </span>
                    </div>
                </div>

                <div className="bg-[#0a0a0a] border border-[#333] p-6 brutal-shadow hover:border-gray-500 transition-colors">
                    <div className="flex justify-between items-start mb-4">
                        <p className="font-mono text-xs text-gray-500 uppercase tracking-widest">Aktywne Projekty</p>
                        <BarChart3 className="w-5 h-5 text-[var(--color-brand-orange)]" />
                    </div>
                    <div className="flex items-end gap-3">
                        <h3 className="text-4xl font-bold text-white font-sans">24</h3>
                        <span className="text-green-500 font-mono text-xs font-bold mb-1 flex items-center">
                            +5 <TrendingUp className="w-3 h-3 ml-1" />
                        </span>
                    </div>
                </div>

                <div className="bg-[#0a0a0a] border border-[#333] p-6 brutal-shadow hover:border-gray-500 transition-colors">
                    <div className="flex justify-between items-start mb-4">
                        <p className="font-mono text-xs text-gray-500 uppercase tracking-widest">Szacunkowy Przychód</p>
                        <DollarSign className="w-5 h-5 text-[var(--color-brand-orange)]" />
                    </div>
                    <div className="flex items-end gap-3">
                        <h3 className="text-4xl font-bold text-white font-sans">142k</h3>
                        <span className="text-green-500 font-mono text-xs font-bold mb-1 flex items-center">
                            +12% <TrendingUp className="w-3 h-3 ml-1" />
                        </span>
                    </div>
                </div>

                <div className="bg-[var(--color-brand-orange)] border border-black p-6 brutal-shadow">
                    <div className="flex justify-between items-start mb-4">
                        <p className="font-mono text-xs text-black uppercase tracking-widest font-bold">Zadania na dziś</p>
                    </div>
                    <div className="flex items-end gap-3">
                        <h3 className="text-4xl font-bold text-black font-sans">7</h3>
                    </div>
                    <div className="mt-4 pt-4 border-t border-black/20 text-xs font-bold font-mono text-black">
                        Przejdź do listy to-do →
                    </div>
                </div>

            </div>

            {/* Main Graph Placeholder Area */}
            <div className="bg-[#0a0a0a] border border-[#333] brutal-shadow p-6 h-96 flex flex-col justify-center items-center text-center">
                <BarChart3 className="w-16 h-16 text-[#222] mb-4" />
                <h3 className="text-xl font-bold font-sans text-gray-400 uppercase tracking-widest mb-2">Analiza Modułu (Zalążek)</h3>
                <p className="font-mono text-sm text-gray-600 max-w-md">W przyszłości pojawią się tutaj interaktywne wykresy konwersji, leadów opartych na zintegrowanej bazie Supabase/Prisma.</p>
            </div>

        </div>
    );
}
