import { FolderOpen, ArrowRight, Clock, CheckCircle } from "lucide-react";
import Link from "next/link";

export default function PortalDashboardPage() {
    return (
        <div className="animate-in fade-in duration-500">
            <div className="mb-8">
                <h1 className="text-3xl font-bold font-sans text-white uppercase tracking-tight mb-2">Pulpit <span className="text-[var(--color-brand-orange)]">Klienta</span></h1>
                <p className="font-mono text-sm text-gray-400">Podsumowanie Twoich aktywnych kampanii i projektów widoczne od razu po zalogowaniu.</p>
            </div>

            {/* Metrics Row */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">

                <div className="bg-[#0a0a0a] border border-[#333] p-6 hover:border-[var(--color-brand-orange)] transition-colors brutal-shadow">
                    <div className="flex justify-between items-start mb-4">
                        <p className="font-mono text-xs text-gray-500 uppercase tracking-widest">Aktywne Projekty</p>
                        <FolderOpen className="w-5 h-5 text-[var(--color-brand-orange)]" />
                    </div>
                    <h3 className="text-4xl font-bold text-white font-sans">2</h3>
                </div>

                <div className="bg-[#0a0a0a] border border-[#333] p-6 hover:border-[var(--color-brand-orange)] transition-colors brutal-shadow">
                    <div className="flex justify-between items-start mb-4">
                        <p className="font-mono text-xs text-gray-500 uppercase tracking-widest">Oczekujące zadania</p>
                        <Clock className="w-5 h-5 text-[var(--color-brand-orange)]" />
                    </div>
                    <h3 className="text-4xl font-bold text-white font-sans">4</h3>
                </div>

                <div className="bg-[#0a0a0a] border border-[#333] p-6 hover:border-[var(--color-brand-orange)] transition-colors brutal-shadow">
                    <div className="flex justify-between items-start mb-4">
                        <p className="font-mono text-xs text-gray-500 uppercase tracking-widest">Zakończone procesy</p>
                        <CheckCircle className="w-5 h-5 text-green-500" />
                    </div>
                    <h3 className="text-4xl font-bold text-white font-sans">12</h3>
                </div>

            </div>

            {/* Recent Activity Table (Mock) */}
            <div className="bg-[#0a0a0a] border border-[#333] brutal-shadow overflow-hidden">
                <div className="px-6 py-4 border-b border-[#333] flex justify-between items-center bg-[#111]">
                    <h2 className="font-bold font-sans text-white uppercase tracking-wide">Ostatnie aktualizacje plików</h2>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full text-left font-mono text-sm">
                        <thead className="bg-[#050505] text-gray-500 text-xs uppercase tracking-wider">
                            <tr>
                                <th className="px-6 py-4 border-b border-[#222]">Nazwa pliku</th>
                                <th className="px-6 py-4 border-b border-[#222]">Projekt</th>
                                <th className="px-6 py-4 border-b border-[#222]">Data wgrania</th>
                                <th className="px-6 py-4 border-b border-[#222] text-right">Akcja</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-[#222] text-gray-300">
                            <tr className="hover:bg-[#111] transition-colors group">
                                <td className="px-6 py-4 font-bold text-white group-hover:text-[var(--color-brand-orange)]">Spot_IP_Draft_v2.mp4</td>
                                <td className="px-6 py-4">Kampania Wideo Investment Partners</td>
                                <td className="px-6 py-4 text-gray-500">Dziś, 14:30</td>
                                <td className="px-6 py-4 text-right">
                                    <span className="text-[var(--color-brand-orange)] inline-flex items-center cursor-pointer text-xs font-bold uppercase tracking-widest">
                                        Pobierz <ArrowRight className="ml-1 w-3 h-3 group-hover:translate-x-1 transition-transform" />
                                    </span>
                                </td>
                            </tr>
                            <tr className="hover:bg-[#111] transition-colors group">
                                <td className="px-6 py-4 font-bold text-white group-hover:text-[var(--color-brand-orange)]">Scenariusz_Rolki_Social_Media.pdf</td>
                                <td className="px-6 py-4">Obsługa Social Media</td>
                                <td className="px-6 py-4 text-gray-500">Wczoraj, 09:15</td>
                                <td className="px-6 py-4 text-right">
                                    <span className="text-[var(--color-brand-orange)] inline-flex items-center cursor-pointer text-xs font-bold uppercase tracking-widest">
                                        Pobierz <ArrowRight className="ml-1 w-3 h-3 group-hover:translate-x-1 transition-transform" />
                                    </span>
                                </td>
                            </tr>
                            <tr className="hover:bg-[#111] transition-colors group">
                                <td className="px-6 py-4 font-bold text-white group-hover:text-[var(--color-brand-orange)]">Wycena_Dodatkowa_Q3.pdf</td>
                                <td className="px-6 py-4">Bieżąca Obsługa Współpracy</td>
                                <td className="px-6 py-4 text-gray-500">12.05.2025</td>
                                <td className="px-6 py-4 text-right">
                                    <span className="text-[var(--color-brand-orange)] inline-flex items-center cursor-pointer text-xs font-bold uppercase tracking-widest">
                                        Pobierz <ArrowRight className="ml-1 w-3 h-3 group-hover:translate-x-1 transition-transform" />
                                    </span>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    );
}
