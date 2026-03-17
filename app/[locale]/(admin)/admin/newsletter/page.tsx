"use client";

import { useState, useEffect } from "react";
import { Mail, Search, Trash2, UserMinus, Loader2, ChevronLeft, ChevronRight, Settings } from "lucide-react";
import { supabase } from "@/src/utils/supabase";
import { Link } from "@/src/i18n/routing";

interface Subscriber {
    id: string;
    email: string;
    name: string | null;
    status: string;
    source: string;
    created_at: string;
}

export default function AdminNewsletterPage() {
    const [subscribers, setSubscribers] = useState<Subscriber[]>([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [statusFilter, setStatusFilter] = useState("all");
    const [isLoading, setIsLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalCount, setTotalCount] = useState(0);
    const pageSize = 20;

    useEffect(() => {
        fetchSubscribers();
    }, [currentPage, statusFilter]);

    const fetchSubscribers = async () => {
        setIsLoading(true);
        try {
            let query = supabase
                .from('newsletter_subscribers')
                .select('*', { count: 'exact' });

            if (statusFilter !== 'all') {
                query = query.eq('status', statusFilter);
            }

            if (searchTerm) {
                query = query.ilike('email', `%${searchTerm}%`);
            }

            const { data, count, error } = await query
                .order('created_at', { ascending: false })
                .range((currentPage - 1) * pageSize, currentPage * pageSize - 1);

            if (error) throw error;
            setSubscribers(data || []);
            setTotalCount(count || 0);
        } catch (error: any) {
            console.error("Error fetching subscribers:", error.message);
        } finally {
            setIsLoading(false);
        }
    };

    const handleUnsubscribe = async (id: string) => {
        if (!confirm("Czy na pewno chcesz wypisać tego użytkownika?")) return;
        
        try {
            const { error } = await supabase
                .from('newsletter_subscribers')
                .update({ status: 'unsubscribed', unsubscribed_at: new Date().toISOString() })
                .eq('id', id);

            if (error) throw error;
            fetchSubscribers();
        } catch (error: any) {
            alert("Błąd: " + error.message);
        }
    };

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        setCurrentPage(1);
        fetchSubscribers();
    };

    const totalPages = Math.ceil(totalCount / pageSize);

    return (
        <div className="animate-in fade-in duration-500 relative">
            
            {/* Header */}
            <div className="mb-10 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
                <div>
                    <h1 className="text-3xl font-bold font-sans text-white uppercase tracking-tight mb-2">
                        Newsletter: <span className="text-[var(--color-brand-orange)]">Subskrybenci</span>
                    </h1>
                    <p className="font-mono text-sm text-gray-400">
                        Zarządzaj listą mailingową i weryfikuj statusy subskrypcji.
                    </p>
                </div>

                <Link
                    href="/admin/newsletter/automations"
                    className="flex items-center justify-center bg-[#111] border border-[#333] hover:border-[var(--color-brand-orange)] text-white font-bold uppercase tracking-widest px-6 py-3 transition-colors font-sans brutal-shadow"
                >
                    <Settings className="w-4 h-4 mr-2 text-[var(--color-brand-orange)]" />
                    Konfiguruj Automatyzacje
                </Link>
            </div>

            {/* Main Interface */}
            <div className="bg-[#0a0a0a] border border-[#333] brutal-shadow overflow-hidden">
                
                {/* Toolbar */}
                <div className="p-4 border-b border-[#333] bg-[#111] flex flex-col md:flex-row justify-between gap-4">
                    <form onSubmit={handleSearch} className="relative w-full max-w-sm">
                        <input
                            type="text"
                            placeholder="Szukaj po e-mailu..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full bg-[#050505] border border-[#333] px-4 py-2.5 pl-10 text-white font-mono text-sm focus:outline-none focus:border-[var(--color-brand-orange)] transition-colors"
                        />
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                    </form>

                    <div className="flex gap-2 font-mono text-xs">
                        <button 
                            onClick={() => setStatusFilter('all')}
                            className={`px-4 py-2 border ${statusFilter === 'all' ? 'border-[var(--color-brand-orange)] text-white' : 'border-[#333] text-gray-400'} bg-[#050505] hover:border-[var(--color-brand-orange)] hover:text-white transition-colors uppercase tracking-widest`}
                        >
                            Wszyscy
                        </button>
                        <button 
                            onClick={() => setStatusFilter('subscribed')}
                            className={`px-4 py-2 border ${statusFilter === 'subscribed' ? 'border-[var(--color-brand-orange)] text-white' : 'border-[#333] text-gray-400'} bg-[#050505] hover:border-[var(--color-brand-orange)] hover:text-white transition-colors uppercase tracking-widest`}
                        >
                            Aktywni
                        </button>
                        <button 
                            onClick={() => setStatusFilter('unsubscribed')}
                            className={`px-4 py-2 border ${statusFilter === 'unsubscribed' ? 'border-[var(--color-brand-orange)] text-white' : 'border-[#333] text-gray-400'} bg-[#050505] hover:border-[var(--color-brand-orange)] hover:text-white transition-colors uppercase tracking-widest`}
                        >
                            Wypisani
                        </button>
                    </div>
                </div>

                {/* Table */}
                <div className="overflow-x-auto min-h-[400px] relative">
                    {isLoading ? (
                        <div className="absolute inset-0 flex items-center justify-center bg-black/20 z-10">
                            <Loader2 className="w-8 h-8 text-[var(--color-brand-orange)] animate-spin" />
                        </div>
                    ) : (
                        <table className="w-full text-left font-mono text-sm">
                            <thead className="bg-[#050505] text-gray-500 text-xs uppercase tracking-wider border-b border-[#222]">
                                <tr>
                                    <th className="px-6 py-4 font-bold">Data</th>
                                    <th className="px-6 py-4 font-bold">Email / Imię</th>
                                    <th className="px-6 py-4 font-bold">Źródło</th>
                                    <th className="px-6 py-4 font-bold">Status</th>
                                    <th className="px-6 py-4 font-bold text-right">Akcje</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-[#222] text-gray-300">
                                {subscribers.length > 0 ? (
                                    subscribers.map((sub) => (
                                        <tr key={sub.id} className="hover:bg-[#111] transition-colors group">
                                            <td className="px-6 py-4 text-gray-500 whitespace-nowrap">
                                                {new Date(sub.created_at).toLocaleDateString()}<br/>
                                                <span className="text-[10px]">{new Date(sub.created_at).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</span>
                                            </td>
                                            <td className="px-6 py-4">
                                                <p className="font-bold text-white uppercase tracking-wider">{sub.email}</p>
                                                <p className="text-xs text-gray-500 mt-0.5">{sub.name || "Anonim"}</p>
                                            </td>
                                            <td className="px-6 py-4">
                                                <span className="text-xs bg-[#111] border border-[#333] px-2 py-1 uppercase">{sub.source}</span>
                                            </td>
                                            <td className="px-6 py-4">
                                                <span className={`inline-flex items-center px-2 py-0.5 text-[10px] font-bold uppercase tracking-widest border ${
                                                    sub.status === 'subscribed' 
                                                    ? 'text-green-500 border-green-500 bg-green-500/10' 
                                                    : 'text-red-500 border-red-500 bg-red-500/10'
                                                }`}>
                                                    {sub.status === 'subscribed' ? 'AKTYWNY' : 'WYPISANY'}
                                                </span>
                                            </td>
                                            <td className="px-6 py-4 text-right">
                                                {sub.status === 'subscribed' && (
                                                    <button 
                                                        onClick={() => handleUnsubscribe(sub.id)}
                                                        className="text-gray-500 hover:text-red-500 transition-colors p-2 border border-transparent hover:border-red-900 hover:bg-red-950/20"
                                                        title="Wypisz ręcznie"
                                                    >
                                                        <UserMinus className="w-5 h-5" />
                                                    </button>
                                                )}
                                            </td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan={5} className="px-6 py-20 text-center text-gray-500">
                                            <Mail className="w-12 h-12 mx-auto mb-4 opacity-10" />
                                            Brak subskrybentów spełniających kryteria.
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    )}
                </div>

                {/* Pagination */}
                <div className="p-4 border-t border-[#333] bg-[#050505] flex justify-between items-center font-mono text-xs text-gray-400">
                    <div>
                        Wyświetlanie <span className="text-white">{(currentPage-1)*pageSize + 1}-{Math.min(currentPage*pageSize, totalCount)}</span> z <span className="text-white">{totalCount}</span>
                    </div>
                    <div className="flex gap-2">
                        <button 
                            disabled={currentPage === 1 || isLoading}
                            onClick={() => setCurrentPage(prev => prev - 1)}
                            className="p-2 border border-[#333] hover:border-[var(--color-brand-orange)] disabled:opacity-30 disabled:hover:border-[#333] transition-colors"
                        >
                            <ChevronLeft className="w-4 h-4" />
                        </button>
                        <button 
                            disabled={currentPage >= totalPages || isLoading}
                            onClick={() => setCurrentPage(prev => prev + 1)}
                            className="p-2 border border-[#333] hover:border-[var(--color-brand-orange)] disabled:opacity-30 disabled:hover:border-[#333] transition-colors"
                        >
                            <ChevronRight className="w-4 h-4" />
                        </button>
                    </div>
                </div>

            </div>

        </div>
    );
}
