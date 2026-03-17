import Link from "next/link";
import { ArrowRight, Lock } from "lucide-react";

export default function LoginPage() {
    return (
        <div className="min-h-screen bg-[#050505] flex flex-col justify-center items-center p-4">
            {/* Brutal Background Decals */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
                <div className="absolute top-[10%] left-[5%] text-[20rem] font-bold text-[#0a0a0a] leading-none opacity-50 select-none">DKW</div>
                <div className="absolute bottom-[5%] right-[5%] text-[15rem] font-bold text-[#0a0a0a] leading-none opacity-50 select-none">GROUP</div>
            </div>

            <div className="w-full max-w-md relative z-10">
                {/* Logo Header */}
                <div className="text-center mb-10">
                    <Link href="/" className="inline-block text-3xl font-bold font-sans tracking-tighter text-white">
                        DKW Group <span className="text-[var(--color-brand-orange)]">.</span>
                    </Link>
                    <p className="font-mono text-gray-500 text-sm mt-3 uppercase tracking-widest">Portal & CMS Auth</p>
                </div>

                {/* Login Box */}
                <div className="bg-[#0a0a0a] border border-[#333] p-8 md:p-10 brutal-shadow w-full">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full border border-[#333] bg-[#111] mx-auto mb-6">
                        <Lock className="w-5 h-5 text-[var(--color-brand-orange)]" />
                    </div>
                    <h2 className="text-2xl font-bold font-sans text-center text-white tracking-tight uppercase mb-8">
                        Logowanie
                    </h2>

                    <form className="space-y-6 font-mono text-sm">
                        <div>
                            <label htmlFor="email" className="block text-gray-400 mb-2 uppercase tracking-wider text-xs font-bold">Adres Email</label>
                            <input
                                type="email"
                                id="email"
                                defaultValue="admin@dkwgroup.com"
                                placeholder="wprowadź email..."
                                className="w-full bg-[#050505] border border-[#333] px-4 py-3 text-white focus:outline-none focus:border-[var(--color-brand-orange)] transition-colors"
                            />
                        </div>

                        <div>
                            <div className="flex justify-between items-center mb-2">
                                <label htmlFor="password" className="block text-gray-400 uppercase tracking-wider text-xs font-bold">Hasło</label>
                                <a href="#" className="text-xs text-gray-600 hover:text-[var(--color-brand-orange)] transition-colors">Zapomniałeś?</a>
                            </div>
                            <input
                                type="password"
                                id="password"
                                defaultValue="********"
                                placeholder="wprowadź hasło..."
                                className="w-full bg-[#050505] border border-[#333] px-4 py-3 text-white focus:outline-none focus:border-[var(--color-brand-orange)] transition-colors tracking-widest"
                            />
                        </div>

                        <div className="pt-4 space-y-4">
                            {/* Mock Admin Login */}
                            <Link
                                href="/admin"
                                className="w-full flex items-center justify-center bg-[var(--color-brand-orange)] hover:bg-[var(--color-brand-orange-hover)] text-black font-bold uppercase tracking-widest py-3 transition-colors font-sans brutal-shadow"
                            >
                                Zaloguj jako Admin
                                <ArrowRight className="ml-2 w-4 h-4" />
                            </Link>

                            {/* Mock Client Login */}
                            <Link
                                href="/dashboard"
                                className="w-full flex items-center justify-center bg-[#111] border border-[#333] hover:border-[var(--color-brand-orange)] text-white hover:text-[var(--color-brand-orange)] font-bold uppercase tracking-widest py-3 transition-colors font-sans"
                            >
                                Zaloguj jako Klient
                            </Link>
                        </div>
                    </form>
                </div>

                <p className="text-center font-mono text-xs text-gray-600 mt-8">
                    System chroniony wewnętrznie. Dostęp do autoryzacji wyłącznie po kontakcie z administracją.
                </p>

            </div>
        </div>
    );
}
