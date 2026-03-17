import { FileEdit, Plus, Search } from "lucide-react";

export default function AdminCmsPage() {
    return (
        <div className="animate-in fade-in duration-500">

            <div className="mb-10 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
                <div>
                    <h1 className="text-3xl font-bold font-sans text-white uppercase tracking-tight mb-2">
                        System <span className="text-[var(--color-brand-orange)]">CMS</span>
                    </h1>
                    <p className="font-mono text-sm text-gray-400">
                        Zarządaj treścią landing page'y, bazą bloga i case-studies z poziomu interfejsu (Wkrótce).
                    </p>
                </div>

                <button className="flex items-center justify-center bg-[var(--color-brand-orange)] hover:bg-[var(--color-brand-orange-hover)] text-black font-bold uppercase tracking-widest px-6 py-3 transition-colors font-sans brutal-shadow">
                    <Plus className="w-4 h-4 mr-2" />
                    Dodaj nowy wpis
                </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">

                {/* Sidebar z filtrami (MOCK) */}
                <div className="lg:col-span-1 border border-[#333] bg-[#0a0a0a] h-fit p-6 brutal-shadow">
                    <h3 className="font-bold text-white uppercase tracking-widest mb-6 border-b border-[#222] pb-4">Struktura</h3>
                    <ul className="space-y-3 font-mono text-sm text-gray-400">
                        <li className="text-[var(--color-brand-orange)] font-bold cursor-pointer hover:underline">Artykuły Blogowe (12)</li>
                        <li className="cursor-pointer hover:text-white">Case Studies (4)</li>
                        <li className="cursor-pointer hover:text-white">Strony Usług (5)</li>
                        <li className="cursor-pointer hover:text-white">Członkowie zespołu (3)</li>
                        <li className="cursor-pointer hover:text-white">Ustawienia Nawigacji</li>
                    </ul>
                </div>

                {/* Lista zawartości (Zalążek - Empty State/Mock) */}
                <div className="lg:col-span-3 border border-[#333] bg-[#0a0a0a] p-8 brutal-shadow flex flex-col items-center justify-center min-h-[400px] text-center text-gray-500">

                    <FileEdit className="w-20 h-20 mb-6 text-[#222]" />
                    <h2 className="text-xl font-bold font-sans text-gray-300 uppercase tracking-widest mb-2">Moduł Edytora w Budowie</h2>
                    <p className="font-mono text-sm max-w-lg mb-8">Interfejs API do łączenia form kontentu (Tworzenie wizualne wpisów i zapisywanie do BD) czeka na backendowe powiązanie punktów styku z bazą (np. Supabase).</p>

                    <div className="relative w-full max-w-md">
                        <input type="text" placeholder="Szukaj mock contentu..." className="w-full bg-[#111] border border-[#333] px-4 py-3 pl-12 text-white font-mono text-sm opacity-50 cursor-not-allowed" disabled />
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                    </div>

                </div>

            </div>

        </div>
    );
}
