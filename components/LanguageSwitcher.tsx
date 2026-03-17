"use client";

import { useLocale } from 'next-intl';
import { usePathname, useRouter } from '@/src/i18n/routing';
import { useTransition } from 'react';

export default function LanguageSwitcher() {
    const locale = useLocale();
    const router = useRouter();
    const pathname = usePathname();
    const [isPending, startTransition] = useTransition();

    const switchLocale = (nextLocale: string) => {
        if (nextLocale === locale) return;
        startTransition(() => {
            router.replace(pathname, { locale: nextLocale });
        });
    };

    return (
        <div className={`inline-flex items-center gap-3 px-3 py-1.5 border border-[#333] bg-[#0a0a0a] brutal-shadow ${isPending ? 'opacity-50 pointer-events-none' : ''}`}>
            <button
                onClick={() => switchLocale('pl')}
                className={`text-lg leading-none transition-all duration-200 hover:-translate-y-1 ${locale === 'pl' ? 'opacity-100 grayscale-0 drop-shadow-md scale-110' : 'opacity-40 grayscale hover:grayscale-0 hover:opacity-100'}`}
                title="Polski"
                aria-label="Zmień na Polski"
            >
                🇵🇱
            </button>
            <div className="w-px h-4 bg-[#333]"></div>
            <button
                onClick={() => switchLocale('en')}
                className={`text-lg leading-none transition-all duration-200 hover:-translate-y-1 ${locale === 'en' ? 'opacity-100 grayscale-0 drop-shadow-md scale-110' : 'opacity-40 grayscale hover:grayscale-0 hover:opacity-100'}`}
                title="English"
                aria-label="Switch to English"
            >
                🇬🇧
            </button>
        </div>
    );
}
