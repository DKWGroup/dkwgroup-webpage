"use client";

import { useState, useEffect } from "react";
import { Plus, Edit2, Trash2, FileText, Loader2, Check, X, ToggleLeft, ToggleRight } from "lucide-react";
import { supabase } from "@/src/utils/supabase";
import { Link } from "@/src/i18n/routing";

interface Automation {
    id: string;
    title: string;
    description: string | null;
    pdf_url: string;
    trigger_key: string;
    is_active: boolean;
    created_at: string;
}

export default function AdminAutomationsPage() {
    const [automations, setAutomations] = useState<Automation[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentAutomation, setCurrentAutomation] = useState<Partial<Automation> | null>(null);
    const [isSaving, setIsSaving] = useState(false);

    useEffect(() => {
        fetchAutomations();
    }, []);

    const fetchAutomations = async () => {
        setIsLoading(true);
        try {
            const { data, error } = await supabase
                .from('newsletter_automations')
                .select('*')
                .order('created_at', { ascending: false });

            if (error) throw error;
            setAutomations(data || []);
        } catch (error: any) {
            console.error("Error:", error.message);
        } finally {
            setIsLoading(false);
        }
    };

    const handleSave = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!currentAutomation) return;
        setIsSaving(true);

        try {
            if (currentAutomation.id) {
                // Update
                const { error } = await supabase
                    .from('newsletter_automations')
                    .update({
                        title: currentAutomation.title,
                        description: currentAutomation.description,
                        pdf_url: currentAutomation.pdf_url,
                        trigger_key: currentAutomation.trigger_key,
                        is_active: currentAutomation.is_active
                    })
                    .eq('id', currentAutomation.id);
                if (error) throw error;
            } else {
                // Insert
                const { error } = await supabase
                    .from('newsletter_automations')
                    .insert([currentAutomation]);
                if (error) throw error;
            }

            setIsModalOpen(false);
            fetchAutomations();
        } catch (error: any) {
            alert("Błąd: " + error.message);
        } finally {
            setIsSaving(false);
        }
    };

    const toggleStatus = async (automation: Automation) => {
        try {
            const { error } = await supabase
                .from('newsletter_automations')
                .update({ is_active: !automation.is_active })
                .eq('id', automation.id);
            if (error) throw error;
            fetchAutomations();
        } catch (error: any) {
            alert("Błąd: " + error.message);
        }
    };

    const handleDelete = async (id: string) => {
        if (!confirm("Czy na pewno chcesz usunąć tę automatyzację?")) return;
        try {
            const { error } = await supabase
                .from('newsletter_automations')
                .delete()
                .eq('id', id);
            if (error) throw error;
            fetchAutomations();
        } catch (error: any) {
            alert("Błąd: " + error.message);
        }
    };

    return (
        <div className="animate-in fade-in duration-500 relative">
            
            {/* Header */}
            <div className="mb-10 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
                <div>
                    <h1 className="text-3xl font-bold font-sans text-white uppercase tracking-tight mb-2">
                        Newsletter: <span className="text-[var(--color-brand-orange)]">Automatyzacje PDF</span>
                    </h1>
                    <p className="font-mono text-sm text-gray-400">
                        Konfiguruj darmowe materiały PDF wysyłane automatycznie po zapisie.
                    </p>
                </div>

                <div className="flex gap-4">
                    <Link href="/admin/newsletter" className="px-6 py-3 border border-[#333] text-gray-400 hover:text-white uppercase tracking-widest font-bold transition-colors font-mono text-xs">
                        Powrót do listy
                    </Link>
                    <button
                        onClick={() => {
                            setCurrentAutomation({ title: "", description: "", pdf_url: "", trigger_key: "", is_active: true });
                            setIsModalOpen(true);
                        }}
                        className="flex items-center justify-center bg-[var(--color-brand-orange)] hover:bg-[var(--color-brand-orange-hover)] text-black font-bold uppercase tracking-widest px-6 py-3 transition-colors font-sans brutal-shadow"
                    >
                        <Plus className="w-4 h-4 mr-2" />
                        Dodaj Automatyzację
                    </button>
                </div>
            </div>

            {/* List */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {isLoading ? (
                    <div className="col-span-full py-20 flex justify-center">
                        <Loader2 className="w-10 h-10 text-[var(--color-brand-orange)] animate-spin" />
                    </div>
                ) : automations.length > 0 ? (
                    automations.map((auto) => (
                        <div key={auto.id} className="bg-[#0a0a0a] border border-[#333] brutal-shadow p-6 flex flex-col relative group transition-colors hover:border-[var(--color-brand-orange)]">
                            <div className="flex justify-between items-start mb-4">
                                <div className="p-3 bg-[#111] border border-[#333] group-hover:border-[var(--color-brand-orange)] transition-colors">
                                    <FileText className="w-6 h-6 text-[var(--color-brand-orange)]" />
                                </div>
                                <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                    <button onClick={() => { setCurrentAutomation(auto); setIsModalOpen(true); }} className="p-2 bg-[#111] border border-[#333] hover:text-[var(--color-brand-orange)]"><Edit2 className="w-4 h-4" /></button>
                                    <button onClick={() => handleDelete(auto.id)} className="p-2 bg-[#111] border border-[#333] hover:text-red-500"><Trash2 className="w-4 h-4" /></button>
                                </div>
                            </div>
                            
                            <h3 className="text-xl font-bold font-sans text-white uppercase tracking-tight mb-2 leading-tight">{auto.title}</h3>
                            <p className="font-mono text-xs text-gray-400 mb-6 flex-grow">{auto.description || "Brak opisu."}</p>
                            
                            <div className="space-y-3 pt-6 border-t border-[#333]">
                                <div className="flex justify-between items-center text-[10px] font-mono uppercase tracking-widest">
                                    <span className="text-gray-500">Klucz wyzwalacza:</span>
                                    <span className="text-[var(--color-brand-orange)] font-bold">{auto.trigger_key}</span>
                                </div>
                                <div className="flex justify-between items-center text-[10px] font-mono uppercase tracking-widest">
                                    <span className="text-gray-500">Status:</span>
                                    <button 
                                        onClick={() => toggleStatus(auto)}
                                        className={`flex items-center gap-1 font-bold ${auto.is_active ? 'text-green-500' : 'text-gray-500'}`}
                                    >
                                        {auto.is_active ? <ToggleRight className="w-4 h-4" /> : <ToggleLeft className="w-4 h-4" />}
                                        {auto.is_active ? 'AKTYWNY' : 'NIEAKTYWNY'}
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <div className="col-span-full py-20 text-center text-gray-500 border border-dashed border-[#333] bg-[#050505]">
                        Nie dodano jeszcze żadnych automatyzacji.
                    </div>
                )}
            </div>

            {/* Modal */}
            {isModalOpen && currentAutomation && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
                    <div className="bg-[#0a0a0a] border border-[#333] brutal-shadow w-full max-w-xl">
                        <div className="p-6 border-b border-[#333] flex justify-between items-center bg-[#111]">
                            <h2 className="text-xl font-bold font-sans text-white uppercase tracking-widest">Automatyzacja PDF</h2>
                            <button onClick={() => setIsModalOpen(false)} className="text-gray-400 hover:text-white text-2xl">&times;</button>
                        </div>
                        <form onSubmit={handleSave} className="p-8 space-y-6 font-mono text-sm">
                            <div className="space-y-4">
                                <div>
                                    <label className="block text-gray-400 mb-2 uppercase tracking-wider text-xs font-bold">Tytuł Materiału</label>
                                    <input 
                                        type="text" 
                                        className="w-full bg-[#050505] border border-[#333] px-4 py-3 text-white focus:border-[var(--color-brand-orange)] outline-none" 
                                        value={currentAutomation.title}
                                        onChange={(e) => setCurrentAutomation({...currentAutomation, title: e.target.value})}
                                        required 
                                    />
                                </div>
                                <div>
                                    <label className="block text-gray-400 mb-2 uppercase tracking-wider text-xs font-bold">Opis (Wewnętrzny)</label>
                                    <textarea 
                                        rows={2}
                                        className="w-full bg-[#050505] border border-[#333] px-4 py-3 text-white focus:border-[var(--color-brand-orange)] outline-none resize-none" 
                                        value={currentAutomation.description || ""}
                                        onChange={(e) => setCurrentAutomation({...currentAutomation, description: e.target.value})}
                                    />
                                </div>
                                <div>
                                    <label className="block text-gray-400 mb-2 uppercase tracking-wider text-xs font-bold">Link do PDF (np. /files/checklista.pdf)</label>
                                    <input 
                                        type="text" 
                                        className="w-full bg-[#050505] border border-[#333] px-4 py-3 text-white focus:border-[var(--color-brand-orange)] outline-none" 
                                        value={currentAutomation.pdf_url}
                                        onChange={(e) => setCurrentAutomation({...currentAutomation, pdf_url: e.target.value})}
                                        required 
                                    />
                                </div>
                                <div>
                                    <label className="block text-gray-400 mb-2 uppercase tracking-wider text-xs font-bold">Klucz Wyzwalacza (Trigger Key)</label>
                                    <input 
                                        type="text" 
                                        className="w-full bg-[#050505] border border-[#333] px-4 py-3 text-white focus:border-[var(--color-brand-orange)] outline-none" 
                                        placeholder="np. marketing-checklist"
                                        value={currentAutomation.trigger_key}
                                        onChange={(e) => setCurrentAutomation({...currentAutomation, trigger_key: e.target.value})}
                                        required 
                                    />
                                    <p className="text-[10px] text-gray-500 mt-2 italic">* Ten klucz musi być zgodny z parametrem 'source' wysyłanym z formularza.</p>
                                </div>
                            </div>

                            <div className="flex justify-end gap-4 pt-4 border-t border-[#333]">
                                <button type="button" onClick={() => setIsModalOpen(false)} className="px-6 py-3 text-gray-400 hover:text-white uppercase tracking-widest font-bold">Anuluj</button>
                                <button 
                                    type="submit" 
                                    disabled={isSaving}
                                    className="px-6 py-3 bg-[var(--color-brand-orange)] text-black uppercase tracking-widest font-bold font-sans brutal-shadow hover:bg-[#e65c00] transition-colors disabled:opacity-50"
                                >
                                    {isSaving ? "Zapisywanie..." : "Zapisz Zmiany"}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}

        </div>
    );
}
