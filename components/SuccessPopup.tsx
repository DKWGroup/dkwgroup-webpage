"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { CheckCircle } from "lucide-react";

interface SuccessPopupProps {
    isOpen?: boolean;
    title: string;
    message: string;
    onClose: () => void;
}

export default function SuccessPopup({ isOpen = true, title, message, onClose }: SuccessPopupProps) {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        if (isOpen) {
            // Prevent scrolling when popup is open
            document.body.style.overflow = 'hidden';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    if (!mounted || !isOpen) return null;

    return createPortal(
        <div className="fixed inset-0 flex items-center justify-center z-[9999] p-4 pointer-events-auto">
            {/* Backdrop with intense blur */}
            <div 
                className="absolute inset-0 bg-[#050505]/95 backdrop-blur-xl animate-in fade-in duration-500"
                onClick={onClose}
            />
            
            {/* Content Card */}
            <div className="bg-[#0a0a0a] border border-[#222] p-8 md:p-12 max-w-lg w-full text-center brutal-shadow relative z-10 animate-in fade-in zoom-in slide-in-from-bottom-8 duration-500 ease-out">
                {/* Decoration corners */}
                <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-[var(--color-brand-orange)] m-2 opacity-30 pointer-events-none"></div>
                <div className="absolute bottom-0 left-0 w-16 h-16 border-b-2 border-l-2 border-[var(--color-brand-orange)] m-2 opacity-30 pointer-events-none"></div>
                
                <div className="relative mb-8">
                    <div className="absolute inset-0 bg-[var(--color-brand-orange)] opacity-20 blur-2xl rounded-full scale-150"></div>
                    <CheckCircle className="w-20 h-20 text-[var(--color-brand-orange)] mx-auto relative z-10" />
                </div>

                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 font-sans tracking-tight uppercase">
                    {title}
                </h3>
                <p className="text-gray-400 font-mono text-sm md:text-base leading-relaxed mb-10">
                    {message}
                </p>
                <button
                    onClick={onClose}
                    className="w-full bg-[var(--color-brand-orange)] hover:bg-[var(--color-brand-orange-hover)] text-black font-bold uppercase tracking-widest py-4 transition-all duration-300 font-sans brutal-shadow hover:scale-[1.02] active:scale-[0.98]"
                >
                    OK
                </button>
            </div>
        </div>,
        document.body
    );
}
