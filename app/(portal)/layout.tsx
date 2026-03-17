"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
    LayoutDashboard,
    FolderOpen,
    Settings,
    MessageSquare,
    LogOut,
    Bell
} from "lucide-react";

const PORTAL_NAVIGATION = [
    { name: "Pulpit", href: "/dashboard", icon: LayoutDashboard },
    { name: "Projekty", href: "/dashboard/projekty", icon: FolderOpen },
    { name: "Wiadomości", href: "/dashboard/wiadomosci", icon: MessageSquare },
    { name: "Ustawienia", href: "/dashboard/ustawienia", icon: Settings },
];

import { Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "../globals.css";

const spaceGrotesk = Space_Grotesk({
    variable: "--font-space-grotesk",
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
    variable: "--font-jetbrains-mono",
    subsets: ["latin"],
});

export default function PortalLayout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();

    return (
        <html lang="pl">
            <body className={`${spaceGrotesk.variable} ${jetbrainsMono.variable} font-sans antialiased bg-black text-white`}>
                <div className="flex bg-[#050505] min-h-screen text-white relative z-50">

                    {/* Sidebar Desktop */}
                    <aside className="hidden md:flex flex-col w-64 bg-[#0a0a0a] border-r border-[#333] fixed h-full z-40">
                        <div className="p-6 border-b border-[#333]">
                            <Link href="/" className="text-xl font-bold font-sans tracking-tighter">
                                DKW Group <span className="text-[var(--color-brand-orange)]">.</span>
                            </Link>
                            <p className="font-mono text-xs text-gray-500 mt-1 uppercase tracking-widest">Portal Klienta</p>
                        </div>

                        <nav className="flex-1 overflow-y-auto py-6 px-4 space-y-2">
                            {PORTAL_NAVIGATION.map((item) => {
                                const isActive = pathname === item.href;
                                return (
                                    <Link
                                        key={item.name}
                                        href={item.href}
                                        className={`flex items-center gap-3 px-4 py-3 font-mono text-sm tracking-wide transition-colors ${isActive
                                            ? "bg-[#111] border-l-2 border-[var(--color-brand-orange)] text-white"
                                            : "text-gray-400 hover:text-white hover:bg-[#111]"
                                            }`}
                                    >
                                        <item.icon className={`w-5 h-5 ${isActive ? "text-[var(--color-brand-orange)]" : ""}`} />
                                        {item.name}
                                    </Link>
                                );
                            })}
                        </nav>

                        <div className="p-4 border-t border-[#333]">
                            <Link href="/login" className="flex items-center gap-3 px-4 py-3 w-full text-gray-400 hover:text-[var(--color-brand-orange)] hover:bg-[#111] transition-colors font-mono text-sm">
                                <LogOut className="w-5 h-5" />
                                Wyloguj się
                            </Link>
                        </div>
                    </aside>

                    {/* Main Content Area */}
                    <main className="flex-1 md:ml-64 flex flex-col min-w-0">

                        {/* Topbar */}
                        <header className="h-16 bg-[#0a0a0a] border-b border-[#333] sticky top-0 z-30 flex items-center justify-between px-6">
                            <div className="font-mono text-sm text-gray-400">
                                Witaj, Jan Kowalski
                            </div>

                            <div className="flex items-center gap-4">
                                <button className="text-gray-400 hover:text-white relative">
                                    <Bell className="w-5 h-5" />
                                    <span className="absolute -top-1 -right-1 w-2 h-2 bg-[var(--color-brand-orange)] rounded-full text-[10px] flex items-center justify-center"></span>
                                </button>
                                <div className="w-8 h-8 rounded-full border border-[var(--color-brand-orange)] bg-[#111] flex flex-shrink-0 items-center justify-center font-bold font-sans text-white text-xs">
                                    JK
                                </div>
                            </div>
                        </header>

                        {/* Page Content */}
                        <div className="p-6 md:p-8 flex-1 overflow-y-auto bg-[#050505]">
                            {children}
                        </div>
                    </main>

                </div>
            </body>
        </html>
    );
}
