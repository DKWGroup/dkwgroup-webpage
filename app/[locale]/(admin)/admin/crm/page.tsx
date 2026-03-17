"use client";

import { useState, useEffect } from "react";
import { Users, Search, Plus, MoreHorizontal, CheckCircle, Clock, FileWarning, Loader2 } from "lucide-react";
import { supabase } from "@/src/utils/supabase";

interface Client {
    id: string;
    name: string;
    company: string | null;
    email: string;
    phone: string | null;
    status: string;
    created_at: string;
}

export default function AdminCrmPage() {
    const [clients, setClients] = useState<Client[]>([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [isSaving, setIsSaving] = useState(false);

    // Form state
    const [newClient, setNewClient] = useState({
        name: "",
        company: "",
        email: "",
        phone: "",
        notes: ""
    });

    useEffect(() => {
        fetchClients();
    }, []);

    const fetchClients = async () => {
        setIsLoading(true);
        try {
            const { data, error } = await supabase
                .from('clients')
                .select('*')
                .order('created_at', { ascending: false });

            if (error) throw error;
            setClients(data || []);
        } catch (error: any) {
            console.error("Error fetching clients:", error.message);
        } finally {
            setIsLoading(false);
        }
    };

    const handleAddClient = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSaving(true);
        try {
            const { error } = await supabase
                .from('clients')
                .insert([
                    {
                        name: newClient.name,
                        company: newClient.company || null,
                        email: newClient.email,
                        phone: newClient.phone || null,
                        notes: newClient.notes || null,
                        status: "Aktywny"
                    }
                ]);

            if (error) throw error;
            
            setIsModalOpen(false);
            setNewClient({ name: "", company: "", email: "", phone: "", notes: "" });
            fetchClients();
        } catch (error: any) {
            alert("Błąd podczas dodawania klienta: " + error.message);
        } finally {
            setIsSaving(false);
        }
    };

    // Filtrowanie klientów w interfejsie 
    const filteredClients = clients.filter(client =>
        client.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (client.company?.toLowerCase().includes(searchTerm.toLowerCase()) ?? false)
    );

    const getStatusStyle = (status: string) => {
        switch (status) {
            case "Aktywny": return "text-green-500 border-green-500 bg-green-500/10";
            case "Zakończony": return "text-gray-400 border-gray-600 bg-gray-900";
            case "Zagrożony": return "text-red-500 border-red-500 bg-red-500/10";
            case "W trakcie (Onboarding)": return "text-[var(--color-brand-orange)] border-[var(--color-brand-orange)] bg-[var(--color-brand-orange)]/10";
            default: return "text-gray-400 border-[#333] bg-[#111]";
        }
    };

    const getStatusIcon = (status: string) => {
        switch (status) {
            case "Aktywny": return <CheckCircle className="w-3 h-3 mr-1" />;
            case "Zakończony": return <CheckCircle className="w-3 h-3 mr-1" />;
            case "Zagrożony": return <FileWarning className="w-3 h-3 mr-1" />;
            case "W trakcie (Onboarding)": return <Clock className="w-3 h-3 mr-1" />;
            default: return null;
        }
    };

    return (
        <div className="animate-in fade-in duration-500 relative">

            {/* Header */}
            <div className="mb-10 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
                <div>
                    <h1 className="text-3xl font-bold font-sans text-white uppercase tracking-tight mb-2">
                        CRM: <span className="text-[var(--color-brand-orange)]">Klienci</span>
                    </h1>
                    <p className="font-mono text-sm text-gray-400">
                        Zarządaj aktywnymi projektami, bazą wiedzy klientów i przypisanymi rolami.
                    </p>
                </div>

                <button
                    onClick={() => setIsModalOpen(true)}
                    className="flex items-center justify-center bg-[var(--color-brand-orange)] hover:bg-[var(--color-brand-orange-hover)] text-black font-bold uppercase tracking-widest px-6 py-3 transition-colors font-sans brutal-shadow"
                >
                    <Plus className="w-4 h-4 mr-2" />
                    Dodaj Klienta
                </button>
            </div>

            {/* Main Table Interface */}
            <div className="bg-[#0a0a0a] border border-[#333] brutal-shadow overflow-hidden">

                {/* Table Toolbar */}
                <div className="p-4 border-b border-[#333] bg-[#111] flex flex-col md:flex-row justify-between gap-4">
                    <div className="relative w-full max-w-sm">
                        <input
                            type="text"
                            placeholder="Szukaj po nazwisku lub firmie..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full bg-[#050505] border border-[#333] px-4 py-2.5 pl-10 text-white font-mono text-sm focus:outline-none focus:border-[var(--color-brand-orange)] transition-colors"
                        />
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                    </div>

                    <div className="flex gap-2 font-mono text-xs">
                        <button className="px-4 py-2 border border-[#333] bg-[#050505] hover:border-[var(--color-brand-orange)] hover:text-white text-gray-400 transition-colors uppercase tracking-widest">Wszyscy</button>
                        <button className="px-4 py-2 border border-[#333] bg-[#050505] hover:border-[var(--color-brand-orange)] hover:text-white text-gray-400 transition-colors uppercase tracking-widest">Aktywni</button>
                    </div>
                </div>

                {/* Table Grid */}
                <div className="overflow-x-auto min-h-[300px] relative">
                    {isLoading ? (
                        <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                            <Loader2 className="w-8 h-8 text-[var(--color-brand-orange)] animate-spin" />
                        </div>
                    ) : (
                        <table className="w-full text-left font-mono text-sm">
                            <thead className="bg-[#050505] text-gray-500 text-xs uppercase tracking-wider border-b border-[#222]">
                                <tr>
                                    <th className="px-6 py-4 font-bold">ID (Skr.)</th>
                                    <th className="px-6 py-4 font-bold">Klient</th>
                                    <th className="px-6 py-4 font-bold">Kontakt</th>
                                    <th className="px-6 py-4 font-bold">Data dodania</th>
                                    <th className="px-6 py-4 font-bold">Status KPI</th>
                                    <th className="px-6 py-4 font-bold text-right">Opcje</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-[#222] text-gray-300">
                                {filteredClients.length > 0 ? (
                                    filteredClients.map((client, idx) => (
                                        <tr key={client.id} className="hover:bg-[#111] transition-colors group">
                                            <td className="px-6 py-4 text-gray-500 font-bold">{client.id.substring(0, 8)}</td>
                                            <td className="px-6 py-4">
                                                <p className="font-bold text-white uppercase tracking-wider">{client.name}</p>
                                                <p className="text-xs text-gray-500 mt-1">{client.company || "Brak firmy"}</p>
                                            </td>
                                            <td className="px-6 py-4">
                                                <p className="text-white">{client.email}</p>
                                                <p className="text-xs text-gray-500 mt-1">{client.phone || "Brak telefonu"}</p>
                                            </td>
                                            <td className="px-6 py-4 text-gray-500">{new Date(client.created_at).toLocaleDateString()}</td>
                                            <td className="px-6 py-4">
                                                <span className={`inline-flex items-center px-2.5 py-1 text-xs font-bold uppercase tracking-widest border ${getStatusStyle(client.status)}`}>
                                                    {getStatusIcon(client.status)}
                                                    {client.status}
                                                </span>
                                            </td>
                                            <td className="px-6 py-4 text-right">
                                                <button className="text-gray-500 hover:text-[var(--color-brand-orange)] transition-colors p-2 border border-transparent hover:border-[#333] hover:bg-[#050505]">
                                                    <MoreHorizontal className="w-5 h-5" />
                                                </button>
                                            </td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan={6} className="px-6 py-12 text-center text-gray-500 border-none">
                                            <Users className="w-12 h-12 mx-auto mb-4 opacity-50 text-[#222]" />
                                            Nie znaleziono klientów w bazie.
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    )}
                </div>

                {/* Pagination Mock */}
                <div className="p-4 border-t border-[#333] bg-[#050505] flex justify-between items-center font-mono text-xs text-gray-500">
                    <span>Wyświetlanie {filteredClients.length} z {clients.length} wpisów</span>
                    <div className="flex gap-2">
                        <button className="px-3 py-1.5 border border-[#333] hover:text-white transition-colors" disabled>Poprzednia</button>
                        <button className="px-3 py-1.5 border border-[#333] hover:text-white transition-colors">Następna</button>
                    </div>
                </div>

            </div>

            {/* Modal (Add Client) */}
            {isModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 animate-in fade-in">
                    <div className="bg-[#0a0a0a] border border-[#333] brutal-shadow w-full max-w-2xl max-h-[90vh] overflow-y-auto">
                        <div className="p-6 border-b border-[#333] flex justify-between items-center bg-[#111]">
                            <h2 className="text-xl font-bold font-sans text-white uppercase tracking-widest">Dodaj Nowego Klienta</h2>
                            <button onClick={() => setIsModalOpen(false)} className="text-gray-400 hover:text-white text-2xl leading-none">&times;</button>
                        </div>
                        <div className="p-8">
                            <form className="space-y-6 font-mono text-sm" onSubmit={handleAddClient}>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-gray-400 mb-2 uppercase tracking-wider text-xs font-bold">Imię i Nazwisko</label>
                                        <input 
                                            type="text" 
                                            className="w-full bg-[#050505] border border-[#333] px-4 py-3 text-white focus:border-[var(--color-brand-orange)] focus:outline-none" 
                                            value={newClient.name}
                                            onChange={(e) => setNewClient({...newClient, name: e.target.value})}
                                            required 
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-gray-400 mb-2 uppercase tracking-wider text-xs font-bold">Firma / Organizacja</label>
                                        <input 
                                            type="text" 
                                            className="w-full bg-[#050505] border border-[#333] px-4 py-3 text-white focus:border-[var(--color-brand-orange)] focus:outline-none" 
                                            value={newClient.company}
                                            onChange={(e) => setNewClient({...newClient, company: e.target.value})}
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-gray-400 mb-2 uppercase tracking-wider text-xs font-bold">Adres E-mail</label>
                                        <input 
                                            type="email" 
                                            className="w-full bg-[#050505] border border-[#333] px-4 py-3 text-white focus:border-[var(--color-brand-orange)] focus:outline-none" 
                                            value={newClient.email}
                                            onChange={(e) => setNewClient({...newClient, email: e.target.value})}
                                            required 
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-gray-400 mb-2 uppercase tracking-wider text-xs font-bold">Numer Telefonu</label>
                                        <input 
                                            type="tel" 
                                            className="w-full bg-[#050505] border border-[#333] px-4 py-3 text-white focus:border-[var(--color-brand-orange)] focus:outline-none" 
                                            value={newClient.phone}
                                            onChange={(e) => setNewClient({...newClient, phone: e.target.value})}
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-gray-400 mb-2 uppercase tracking-wider text-xs font-bold">Notatki (Brief)</label>
                                    <textarea 
                                        rows={4} 
                                        className="w-full bg-[#050505] border border-[#333] px-4 py-3 text-white focus:border-[var(--color-brand-orange)] focus:outline-none resize-none"
                                        value={newClient.notes}
                                        onChange={(e) => setNewClient({...newClient, notes: e.target.value})}
                                    ></textarea>
                                </div>

                                <div className="flex justify-end gap-4 pt-4 border-t border-[#333]">
                                    <button type="button" onClick={() => setIsModalOpen(false)} className="px-6 py-3 border border-[#333] text-gray-400 hover:text-white uppercase tracking-widest font-bold transition-colors">Anuluj</button>
                                    <button 
                                        type="submit" 
                                        disabled={isSaving}
                                        className="px-6 py-3 bg-[var(--color-brand-orange)] text-black uppercase tracking-widest font-bold font-sans brutal-shadow hover:bg-[#e65c00] transition-colors disabled:opacity-50"
                                    >
                                        {isSaving ? "Zapisywanie..." : "Utwórz Konto CRM"}
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            )}

        </div>
    );
}
