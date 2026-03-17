import { Link } from "@/src/i18n/routing";
import { useLocale } from "next-intl";

const FOOTER_LINKS_PL = [
    { label: "WITAMY", href: "/" as const },
    { label: "O NAS", href: "/o-nas" as const },
    { label: "USŁUGI", href: "/uslugi" as const },
    { label: "CASE STUDIES", href: "/case-studies" as const },
    { label: "BLOG", href: "/blog" as const },
    { label: "PORTFOLIO", href: "/portfolio" as const },
    { label: "KONTAKT", href: "/kontakt" as const },
];

const FOOTER_LINKS_EN = [
    { label: "WELCOME", href: "/" as const },
    { label: "ABOUT US", href: "/o-nas" as const },
    { label: "SERVICES", href: "/uslugi" as const },
    { label: "CASE STUDIES", href: "/case-studies" as const },
    { label: "BLOG", href: "/blog" as const },
    { label: "PORTFOLIO", href: "/portfolio" as const },
    { label: "CONTACT", href: "/kontakt" as const },
];

export default function Footer() {
    const locale = useLocale();
    const FOOTER_LINKS = locale === 'en' ? FOOTER_LINKS_EN : FOOTER_LINKS_PL;

    return (
        <footer className="bg-[#050505] border-t border-[#333333] pt-16 pb-8 text-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    {/* Logo & About */}
                    <div className="col-span-1 md:col-span-1">
                        <Link href="/" className="text-2xl font-bold font-sans tracking-tighter block mb-6">
                            DKW Group <span className="text-[var(--color-brand-orange)]">.</span>
                        </Link>
                        <h4 className="text-[var(--color-brand-orange)] font-mono mb-4 uppercase tracking-wider">
                            {locale === 'en' ? "About us" : "O nas"}
                        </h4>
                        <p className="text-gray-400 leading-relaxed">
                            {locale === 'en'
                                ? "DKW Group is a team of professionals specializing in video production, internet marketing and creating engaging content that helps brands stand out."
                                : "DKW Group to zespół profesjonalistów specjalizujących się w produkcji wideo, marketingu internetowym i tworzeniu angażujących treści, które pomagają markom wyróżnić się na rynku."}
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className="col-span-1">
                        <h4 className="text-[var(--color-brand-orange)] font-mono mb-6 uppercase tracking-wider">Menu</h4>
                        <ul className="space-y-3 font-mono">
                            {FOOTER_LINKS.map((item) => (
                                <li key={item.label}>
                                    <Link href={item.href} className="text-gray-400 hover:text-[var(--color-brand-orange)] hover:translate-x-1 inline-block transition-transform">
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Details */}
                    <div className="col-span-1 md:col-span-2">
                        <h4 className="text-[var(--color-brand-orange)] font-mono mb-6 uppercase tracking-wider">
                            {locale === 'en' ? "Contact" : "Kontakt"}
                        </h4>
                        <div className="space-y-4 font-mono text-gray-300">
                            <div className="p-4 border border-[#333] bg-[#0a0a0a] brutal-border hover:border-[var(--color-brand-orange)] transition-colors">
                                <p className="text-gray-500 mb-1 text-xs">Email</p>
                                <a href="mailto:contact.dkwgroup@gmail.com" className="hover:text-[var(--color-brand-orange)] text-base">
                                    contact.dkwgroup@gmail.com
                                </a>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
                                <div className="p-4 border border-[#333] bg-[#0a0a0a] brutal-border hover:border-[var(--color-brand-orange)] transition-colors">
                                    <p className="text-gray-500 mb-1 text-xs">Dawid</p>
                                    <a href="tel:+48517957875" className="hover:text-[var(--color-brand-orange)]">+48 517 957 875</a>
                                </div>
                                <div className="p-4 border border-[#333] bg-[#0a0a0a] brutal-border hover:border-[var(--color-brand-orange)] transition-colors">
                                    <p className="text-gray-500 mb-1 text-xs">Kamil</p>
                                    <a href="tel:+48881046689" className="hover:text-[var(--color-brand-orange)]">+48 881 046 689</a>
                                </div>
                                <div className="p-4 border border-[#333] bg-[#0a0a0a] brutal-border hover:border-[var(--color-brand-orange)] transition-colors">
                                    <p className="text-gray-500 mb-1 text-xs">Wiktoria</p>
                                    <a href="tel:+48537168645" className="hover:text-[var(--color-brand-orange)]">+48 537 168 645</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div className="pt-8 border-t border-[#222] text-center md:text-left flex flex-col md:flex-row justify-between items-center">
                    <p className="text-gray-600 font-mono text-xs">
                        {locale === 'en'
                            ? "© 2026 DKW Group. All rights reserved."
                            : "© 2026 DKW Group. Wszystkie prawa zastrzeżone."}
                    </p>
                    <div className="mt-4 md:mt-0 flex space-x-4">
                        {/* Opcjonalne linki / socjale można dorzucić tutaj */}
                    </div>
                </div>
            </div>
        </footer>
    );
}
