"use client";

import { useState } from "react";
import { Link, useRouter } from "@/src/i18n/routing";
import { ArrowRight, UserPlus, Loader2 } from "lucide-react";
import { supabase } from "@/src/utils/supabase";

export default function RegisterPage() {
    const router = useRouter();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [fullName, setFullName] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [isSuccess, setIsSuccess] = useState(false);

    const handleRegister = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setError(null);

        try {
            const { data, error: authError } = await supabase.auth.signUp({
                email,
                password,
                options: {
                    data: {
                        full_name: fullName,
                    },
                },
            });

            if (authError) {
                setError(authError.message);
                return;
            }

            setIsSuccess(true);
            setTimeout(() => {
                router.push("/login");
            }, 3000);
        } catch (err: any) {
            setError("Wystąpił nieoczekiwany błąd podczas rejestracji.");
        } finally {
            setIsLoading(false);
        }
    };

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

                {/* Register Box */}
                <div className="bg-[#0a0a0a] border border-[#333] p-8 md:p-10 brutal-shadow w-full">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full border border-[#333] bg-[#111] mx-auto mb-6">
                        <UserPlus className="w-5 h-5 text-[var(--color-brand-orange)]" />
                    </div>
                    <h2 className="text-2xl font-bold font-sans text-center text-white tracking-tight uppercase mb-8">
                        Rejestracja
                    </h2>

                    {isSuccess ? (
                        <div className="text-center py-8">
                            <div className="bg-green-500/10 border border-green-500 text-green-500 p-4 mb-6 uppercase tracking-widest font-bold text-sm">
                                Konto utworzone pomyślnie!
                            </div>
                            <p className="font-mono text-gray-400 text-sm">
                                Sprawdź swoją skrzynkę e-mail, aby potwierdzić konto. Zaraz nastąpi przekierowanie do logowania...
                            </p>
                        </div>
                    ) : (
                        <form className="space-y-6 font-mono text-sm" onSubmit={handleRegister}>
                            {error && (
                                <div className="bg-red-500/10 border border-red-500 text-red-500 p-3 text-xs uppercase tracking-widest font-bold">
                                    {error}
                                </div>
                            )}
                            
                            <div>
                                <label htmlFor="fullName" className="block text-gray-400 mb-2 uppercase tracking-wider text-xs font-bold">Imię i Nazwisko</label>
                                <input
                                    type="text"
                                    id="fullName"
                                    value={fullName}
                                    onChange={(e) => setFullName(e.target.value)}
                                    placeholder="np. Jan Kowalski"
                                    className="w-full bg-[#050505] border border-[#333] px-4 py-3 text-white focus:outline-none focus:border-[var(--color-brand-orange)] transition-colors"
                                    required
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-gray-400 mb-2 uppercase tracking-wider text-xs font-bold">Adres Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="wprowadź email..."
                                    className="w-full bg-[#050505] border border-[#333] px-4 py-3 text-white focus:outline-none focus:border-[var(--color-brand-orange)] transition-colors"
                                    required
                                />
                            </div>

                            <div>
                                <label htmlFor="password" className="block text-gray-400 mb-2 uppercase tracking-wider text-xs font-bold">Hasło</label>
                                <input
                                    type="password"
                                    id="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder="minimum 6 znaków..."
                                    className="w-full bg-[#050505] border border-[#333] px-4 py-3 text-white focus:outline-none focus:border-[var(--color-brand-orange)] transition-colors tracking-widest"
                                    required
                                    minLength={6}
                                />
                            </div>

                            <div className="pt-4">
                                <button
                                    type="submit"
                                    disabled={isLoading}
                                    className="w-full flex items-center justify-center bg-[var(--color-brand-orange)] hover:bg-[var(--color-brand-orange-hover)] text-black font-bold uppercase tracking-widest py-3 transition-colors font-sans brutal-shadow disabled:opacity-50"
                                >
                                    {isLoading ? (
                                        <>
                                            <Loader2 className="mr-2 w-4 h-4 animate-spin" />
                                            Trwa rejestracja...
                                        </>
                                    ) : (
                                        <>
                                            Załóż Konto
                                            <ArrowRight className="ml-2 w-4 h-4" />
                                        </>
                                    )}
                                </button>
                            </div>
                        </form>
                    )}

                    <div className="mt-8 pt-6 border-t border-[#333] text-center">
                        <p className="text-gray-500 mb-2">Masz już konto?</p>
                        <Link href="/login" className="text-[var(--color-brand-orange)] hover:underline uppercase tracking-widest font-bold text-xs">
                            Zaloguj się
                        </Link>
                    </div>
                </div>

                <p className="text-center font-mono text-xs text-gray-600 mt-8">
                    Rejestracja dla klientów i partnerów DKW Group.
                </p>

            </div>
        </div>
    );
}
