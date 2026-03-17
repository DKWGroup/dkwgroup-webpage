"use client";

import { useState, useEffect } from "react";
import { BarChart3, TrendingUp, Users, DollarSign, Loader2 } from "lucide-react";
import { supabase } from "@/src/utils/supabase";

export default function AdminDashboardPage() {
    const [stats, setStats] = useState({
        activeClients: 0,
        activeProjects: 0,
        totalBudget: 0,
        tasksToday: 0
    });
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchStats = async () => {
            setIsLoading(true);
            try {
                // 1. Aktywni Klienci
                const { count: clientsCount } = await supabase
                    .from('clients')
                    .select('*', { count: 'exact', head: true })
                    .eq('status', 'Aktywny');

                // 2. Aktywne Projekty
                const { count: projectsCount, data: projectsData } = await supabase
                    .from('projects')
                    .select('budget', { count: 'exact' })
                    .eq('status', 'W trakcie');

                // 3. Suma Budżetów
                const totalBudget = projectsData?.reduce((sum, p) => sum + (Number(p.budget) || 0), 0) || 0;

                // 4. Zadania na dziś
                const today = new Date().toISOString().split('T')[0];
                const { count: tasksCount } = await supabase
                    .from('tasks')
                    .select('*', { count: 'exact', head: true })
                    .eq('due_date', today)
                    .neq('status', 'Zrobione');

                setStats({
                    activeClients: clientsCount || 0,
                    activeProjects: projectsCount || 0,
                    totalBudget,
                    tasksToday: tasksCount || 0
                });
            } catch (error) {
                console.error("Error fetching dashboard stats:", error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchStats();
    }, []);

    const formatCurrency = (val: number) => {
        if (val >= 1000) return (val / 1000).toFixed(1) + "k";
        return val.toString();
    };

    return (
        <div className="animate-in fade-in duration-500 relative">
            {isLoading && (
                <div className="absolute inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-[2px]">
                    <Loader2 className="w-10 h-10 text-[var(--color-brand-orange)] animate-spin" />
                </div>
            )}

            <div className="mb-10 flex flex-col md:flex-row justify-between items-start md:items-end">
                <div>
                    <h1 className="text-3xl font-bold font-sans text-white uppercase tracking-tight mb-2">
                        Przegląd <span className="text-[var(--color-brand-orange)]">Systemu</span>
                    </h1>
                    <p className="font-mono text-sm text-gray-400">
                        Dane synchronizowane z bazą Supabase w czasie rzeczywistym.
                    </p>
                </div>
                <div className="mt-4 md:mt-0 px-4 py-2 border border-[#333] bg-[#0a0a0a] font-mono text-xs text-gray-400 brutal-shadow text-center">
                    <p className="uppercase tracking-widest text-[10px] mb-1">Status Bazy</p>
                    <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                        <span>Połączono poprawnie</span>
                    </div>
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
                        <h3 className="text-4xl font-bold text-white font-sans">{stats.activeClients}</h3>
                        <span className="text-green-500 font-mono text-xs font-bold mb-1 flex items-center">
                            LIVE
                        </span>
                    </div>
                </div>

                <div className="bg-[#0a0a0a] border border-[#333] p-6 brutal-shadow hover:border-gray-500 transition-colors">
                    <div className="flex justify-between items-start mb-4">
                        <p className="font-mono text-xs text-gray-500 uppercase tracking-widest">Aktywne Projekty</p>
                        <BarChart3 className="w-5 h-5 text-[var(--color-brand-orange)]" />
                    </div>
                    <div className="flex items-end gap-3">
                        <h3 className="text-4xl font-bold text-white font-sans">{stats.activeProjects}</h3>
                        <span className="text-green-500 font-mono text-xs font-bold mb-1 flex items-center">
                            PROD
                        </span>
                    </div>
                </div>

                <div className="bg-[#0a0a0a] border border-[#333] p-6 brutal-shadow hover:border-gray-500 transition-colors">
                    <div className="flex justify-between items-start mb-4">
                        <p className="font-mono text-xs text-gray-500 uppercase tracking-widest">Budżet Projektów</p>
                        <DollarSign className="w-5 h-5 text-[var(--color-brand-orange)]" />
                    </div>
                    <div className="flex items-end gap-3">
                        <h3 className="text-4xl font-bold text-white font-sans">{formatCurrency(stats.totalBudget)}</h3>
                        <span className="text-green-500 font-mono text-xs font-bold mb-1 flex items-center">
                            PLN
                        </span>
                    </div>
                </div>

                <div className="bg-[var(--color-brand-orange)] border border-black p-6 brutal-shadow">
                    <div className="flex justify-between items-start mb-4">
                        <p className="font-mono text-xs text-black uppercase tracking-widest font-bold">Zadania na dziś</p>
                    </div>
                    <div className="flex items-end gap-3">
                        <h3 className="text-4xl font-bold text-black font-sans">{stats.tasksToday}</h3>
                    </div>
                    <div className="mt-4 pt-4 border-t border-black/20 text-xs font-bold font-mono text-black">
                        PILNE DO WYKONANIA →
                    </div>
                </div>

            </div>

            {/* Main Graph Placeholder Area */}
            <div className="bg-[#0a0a0a] border border-[#333] brutal-shadow p-6 h-96 flex flex-col justify-center items-center text-center">
                <BarChart3 className="w-16 h-16 text-[#222] mb-4" />
                <h3 className="text-xl font-bold font-sans text-gray-400 uppercase tracking-widest mb-2">Statystyki CRM</h3>
                <p className="font-mono text-sm text-gray-600 max-w-md">Dane są teraz pobierane bezpośrednio z Twojej bazy Supabase. Powyższe liczniki odzwierciedlają aktualny stan projektów i klientów.</p>
            </div>

        </div>
    );
}
