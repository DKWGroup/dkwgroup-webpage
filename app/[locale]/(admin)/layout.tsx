"use client";

import { Link, useRouter } from "@/src/i18n/routing";
import { usePathname } from "next/navigation";
import { supabase } from "@/src/utils/supabase";
import {
    BarChart3,
    Users,
    FileEdit,
    Trello,
    Bot,
    LogOut,
    FolderOpen,
    Settings,
    Mail
} from "lucide-react";

// Rozbudowaną sieć linków dla admina (CMS / CRM)
const ADMIN_NAVIGATION = [
    { name: "Dashboard", href: "/admin" as const, icon: BarChart3 },
    { name: "Klienci", href: "/admin/crm" as const, icon: Users },
    { name: "Newsletter", href: "/admin/newsletter" as const, icon: Mail },
    { name: "Narzędzia", href: "/admin/cms" as const, icon: FileEdit },
    { name: "Ustawienia", href: "/admin/ustawienia" as const, icon: Settings },
];

const spaceGrotesk = { variable: "--font-space-grotesk" };
const jetbrainsMono = { variable: "--font-jetbrains-mono" };

export default function AdminLayout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    const router = useRouter();

    const handleLogout = async () => {
        await supabase.auth.signOut();
        router.push("/login");
    };

    return (
        <div className="flex bg-[#050505] min-h-screen text-white relative z-50 font-sans">

                    {/* Sidebar Admin Desktop */}
                    <aside className="hidden md:flex flex-col w-64 bg-[#0a0a0a] border-r border-[#333] fixed h-full z-40">
                        <div className="p-6 border-b border-[#333] bg-[#111]">
                            <Link href="/" className="text-xl font-bold tracking-tighter text-white">
                                <span className="text-[var(--color-brand-orange)]">Admin</span>Panel
                            </Link>
                            <div className="flex items-center gap-2 mt-2">
                                <div className="w-2 h-2 rounded-full bg-green-500"></div>
                                <p className="font-mono text-[10px] text-gray-500 uppercase tracking-widest">System Online</p>
                            </div>
                        </div>

                        <nav className="flex-1 overflow-y-auto py-6 space-y-1">
                            {ADMIN_NAVIGATION.map((item) => {
                                const isActive = pathname === item.href || pathname.startsWith(`${item.href}/`);
                                return (
                                    <Link
                                        key={item.name}
                                        href={item.href}
                                        className={`flex items-center gap-3 px-6 py-3.5 font-mono text-sm tracking-wide transition-all ${isActive
                                            ? "bg-[#111] border-l-4 border-[var(--color-brand-orange)] text-[var(--color-brand-orange)] font-bold shadow-[inset_0px_0px_10px_rgba(255,106,0,0.05)]"
                                            : "text-gray-400 border-l-4 border-transparent hover:text-white hover:bg-[#111] hover:border-[#333]"
                                            }`}
                                    >
                                        <item.icon className="w-5 h-5 flex-shrink-0" />
                                        {item.name}
                                    </Link>
                                );
                            })}
                        </nav>

                        <div className="p-4 border-t border-[#333] bg-[#050505]">
                            <button 
                                onClick={handleLogout}
                                className="flex items-center justify-center gap-2 px-4 py-3 w-full bg-[#111] border border-[#333] hover:border-[var(--color-brand-orange)] text-gray-400 hover:text-[var(--color-brand-orange)] transition-colors font-mono text-xs uppercase tracking-widest"
                            >
                                <LogOut className="w-4 h-4" />
                                Wyloguj (Admin)
                            </button>
                        </div>
                    </aside>

                    {/* Main Content Area */}
                    <main className="flex-1 md:ml-64 flex flex-col min-w-0">

                        {/* Topbar */}
                        <header className="h-16 bg-[#0a0a0a] border-b border-[#333] flex items-center justify-between px-6 z-30">
                            <div className="hidden sm:block font-mono text-xs text-gray-500 uppercase tracking-widest">
                                / Moduł Wewnętrzny
                            </div>

                            <div className="flex items-center gap-3">
                                <div className="text-right hidden sm:block">
                                    <p className="text-sm font-bold text-white">Administrator</p>
                                    <p className="text-[10px] font-mono text-[var(--color-brand-orange)] uppercase tracking-widest">Super Admin</p>
                                </div>
                                <div className="w-10 h-10 bg-[var(--color-brand-orange)] border border-black flex items-center justify-center font-bold text-black brutal-shadow">
                                    A
                                </div>
                            </div>
                        </header>

                        {/* Page Content */}
                        <div className="p-6 md:p-8 flex-1 overflow-y-auto bg-[#050505] relative">
                            {/* Subtle Grid Background for Admin Panel */}
                            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTAgMGg0MHY0MEgweiIgZmlsbD0ibm9uZSIvPjxwYXRoIGQ9Ik0wIDM5LjVoNDBWMGgwem0wLTFoMzlWMGgxem0wLTFoMzhWMGgxem0wLTFoMzdWMGgxem0wLTFoMzZWMGgxem0wLTFoMzVWMGgxem0wLTFoMzRWMGgxem0wLTFoMzNWMGgxem0wLTFoMzJWMGgxem0wLTFoMzFWMGgxem0wLTFoMzBWMGgxem0wLTFoMjlWMGgxem0wLTFoMjhWMGgxem0wLTFoMjdWMGgxem0wLTFoMjZWMGgxem0wLTFoMjVWMGgxem0wLTFoMjRWMGgxem0wLTFoMjNWMGgxem0wLTFoMjJWMGgxem0wLTFoMjFWMGgxem0wLTFoMjBWMGgxem0wLTFoMTlWMGgxem0wLTFoMThWMGgxem0wLTFoMTdWMGgxem0wLTFoMTZWMGgxem0wLTFoMTVWMGgxem0wLTFoMTRWMGgxem0wLTFoMTNWMGgxem0wLTFoMTJWMGgxem0wLTFoMTFWMGgxem0wLTFoMTBWMGgxem0wLTFoOVYwaDF6bTAtMWg4VjBoMXptMC0xaDdWMGgxem0wLTFoNlYwaDF6bTAtMWg1VjBoMXptMC0xaDRWMGgxem0wLTFoM1YwaDF6bTAtMWgyVjBoMXptMC0xaDFWMGgxeiIgZmlsbD0iIzIyMiIgZmlsbC1vcGFjaXR5PSIuMjUiLz48L3N2Zz4=')] opacity-30 pointer-events-none z-0"></div>

                            <div className="relative z-10">
                                {children}
                            </div>
                        </div>
                    </main>

        </div>
    );
}
