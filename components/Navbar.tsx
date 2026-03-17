"use client";

import { Link } from "@/src/i18n/routing";
import { Menu, X, ChevronDown, ChevronUp } from "lucide-react";
import { useState, useRef } from "react";
import { useLocale } from "next-intl";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import Image from "next/image";

/* ─── Service dropdown data ─── */
const SERVICE_DROPDOWN_PL = {
    pinnedLinks: [
        { label: "Wszystkie usługi", href: "/uslugi" as const },
    ],
    groups: [
        {
            title: "Pakiety i cennik",
            items: [
                { label: "One Day Pack", href: "/pakiety/one-day-pack" as const },
                { label: "Short-form Content", href: "/pakiety/short-form-content" as const },
            ],
        },
        {
            title: "Wideo & Audio",
            items: [
                { label: "Produkcja filmowa i wideo", href: "/uslugi/produkcja-wideo" as const },
                { label: "Nagrania dronem DJI i FPV", href: "/uslugi/nagrania-dronem" as const },
                { label: "Podcasty", href: "/uslugi/podcasty" as const },
                { label: "Realizacja na żywo", href: "/uslugi/live-streaming" as const },
            ],
        },
        {
            title: "Marketing & Web",
            items: [
                { label: "Prowadzenie mediów społecznościowych", href: "/uslugi/social-media-management" as const },
                { label: "Strony internetowe i SEO", href: "/uslugi/strony-internetowe" as const },
            ],
        },
    ],
};

const SERVICE_DROPDOWN_EN = {
    pinnedLinks: [
        { label: "All services", href: "/uslugi" as const },
    ],
    groups: [
        {
            title: "Packages & Pricing",
            items: [
                { label: "One Day Pack", href: "/pakiety/one-day-pack" as const },
                { label: "Short-form Content", href: "/pakiety/short-form-content" as const },
            ],
        },
        {
            title: "Video & Audio",
            items: [
                { label: "Film & video production", href: "/uslugi/produkcja-wideo" as const },
                { label: "DJI & FPV drone footage", href: "/uslugi/nagrania-dronem" as const },
                { label: "Podcasts", href: "/uslugi/podcasty" as const },
                { label: "Live streaming", href: "/uslugi/live-streaming" as const },
            ],
        },
        {
            title: "Marketing & Web",
            items: [
                { label: "Social Media Management", href: "/uslugi/social-media-management" as const },
                { label: "Websites & SEO", href: "/uslugi/strony-internetowe" as const },
            ],
        },
    ],
};

/* ─── Nav links ─── */
const NAV_LINKS_PL = [
    { label: "O NAS", href: "/o-nas" as const },
    { label: "USŁUGI", href: "/uslugi" as const, hasDropdown: true },
    { label: "CASE STUDIES", href: "/case-studies" as const },
    { label: "BLOG", href: "/blog" as const },
    { label: "PORTFOLIO", href: "/portfolio" as const },
];

const NAV_LINKS_EN = [
    { label: "ABOUT US", href: "/o-nas" as const },
    { label: "SERVICES", href: "/uslugi" as const, hasDropdown: true },
    { label: "CASE STUDIES", href: "/case-studies" as const },
    { label: "BLOG", href: "/blog" as const },
    { label: "PORTFOLIO", href: "/portfolio" as const },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
    const locale = useLocale();
    const NAV_LINKS = locale === "en" ? NAV_LINKS_EN : NAV_LINKS_PL;
    const ctaLabel = locale === "en" ? "CONTACT US!" : "SKONTAKTUJ SIĘ!";
    const dropdown = locale === "en" ? SERVICE_DROPDOWN_EN : SERVICE_DROPDOWN_PL;
    const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
    const [showDropdown, setShowDropdown] = useState(false);

    const handleMouseEnter = () => {
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
        setShowDropdown(true);
    };

    const handleMouseLeave = () => {
        timeoutRef.current = setTimeout(() => setShowDropdown(false), 150);
    };

    return (
        <header className="sticky top-0 z-50 w-full bg-[#050505] border-b border-[#333333] font-mono">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    {/* Logo Area */}
                    <div className="flex-shrink-0 flex items-center">
                        <Link href="/" className="flex items-center shrink-0">
                            <Image
                                src="/logo/DKW inverted.png"
                                alt="DKW Group Logo"
                                width={300}
                                height={200}
                                className="h-10 md:h-16 w-auto object-contain"
                                style={{ width: 'auto' }}
                                priority
                            />
                        </Link>
                    </div>

                    {/* Desktop Menu */}
                    <nav className="hidden md:flex space-x-6 items-center">
                        {NAV_LINKS.map((link) =>
                            link.hasDropdown ? (
                                /* ─── Services with Dropdown ─── */
                                <div
                                    key={link.label}
                                    className="relative"
                                    onMouseEnter={handleMouseEnter}
                                    onMouseLeave={handleMouseLeave}
                                >
                                    <Link
                                        href={link.href}
                                        className="text-sm text-gray-300 hover:text-[var(--color-brand-orange)] transition-colors uppercase tracking-wider inline-flex items-center gap-1"
                                    >
                                        {link.label}
                                        <ChevronDown
                                            className={`w-3.5 h-3.5 transition-transform duration-200 ${showDropdown ? "rotate-180" : ""}`}
                                        />
                                    </Link>

                                    {/* Safe area bridge — invisible element to fill the gap */}
                                    {showDropdown && (
                                        <div className="absolute left-0 w-full h-4 top-full" />
                                    )}

                                    {/* Dropdown Panel */}
                                    <div
                                        className={`absolute top-[calc(100%+1rem)] left-1/2 -translate-x-1/2 w-[640px] bg-white rounded shadow-[0_8px_32px_rgba(0,0,0,0.35)] border border-[#e0e0e0] transition-all duration-200 origin-top ${showDropdown
                                            ? "opacity-100 scale-100 pointer-events-auto"
                                            : "opacity-0 scale-95 pointer-events-none"
                                            }`}
                                    >
                                        {/* Pinned links */}
                                        <div className="border-b border-[#e5e5e5] px-6 py-4 flex gap-6">
                                            {dropdown.pinnedLinks.map((pl) => (
                                                <Link
                                                    key={pl.label}
                                                    href={pl.href}
                                                    className="text-xs font-bold uppercase tracking-wider text-[var(--color-brand-orange)] hover:text-black transition-colors"
                                                >
                                                    {pl.label}
                                                </Link>
                                            ))}
                                        </div>

                                        {/* Groups */}
                                        <div className="grid grid-cols-3 gap-0 divide-x divide-[#eee]">
                                            {dropdown.groups.map((group) => (
                                                <div key={group.title} className="px-6 py-5">
                                                    <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-gray-400 mb-3">
                                                        {group.title}
                                                    </p>
                                                    <ul className="space-y-1">
                                                        {group.items.map((item) => (
                                                            <li key={item.label}>
                                                                <Link
                                                                    href={item.href}
                                                                    className="block px-3 py-2 text-sm text-gray-700 hover:bg-[#f5f0eb] hover:text-[var(--color-brand-orange)] rounded transition-colors font-medium"
                                                                >
                                                                    {item.label}
                                                                </Link>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                <Link
                                    key={link.label}
                                    href={link.href}
                                    className="text-sm text-gray-300 hover:text-[var(--color-brand-orange)] transition-colors uppercase tracking-wider"
                                >
                                    {link.label}
                                </Link>
                            )
                        )}
                        <Link
                            href="/kontakt"
                            className="mr-4 px-5 py-2.5 bg-[var(--color-brand-orange)] text-black font-bold text-sm tracking-wider hover:bg-[var(--color-brand-orange-hover)] transition-colors brutal-shadow"
                        >
                            {ctaLabel}
                        </Link>
                        <LanguageSwitcher />
                    </nav>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center gap-3">

                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-white hover:text-[var(--color-brand-orange)] focus:outline-none p-2 border border-[#333] hover:border-[var(--color-brand-orange)] transition-colors"
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-[#0a0a0a] border-b border-[#333]">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        {NAV_LINKS.map((link) =>
                            link.hasDropdown ? (
                                <div key={link.label}>
                                    {/* Services toggle */}
                                    <button
                                        onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                                        className="w-full flex items-center justify-between px-3 py-3 text-base font-medium text-gray-300 hover:text-[var(--color-brand-orange)] hover:bg-[#111] transition-colors uppercase border-b border-[#222]"
                                    >
                                        {link.label}
                                        {mobileServicesOpen ? (
                                            <ChevronUp className="w-4 h-4" />
                                        ) : (
                                            <ChevronDown className="w-4 h-4" />
                                        )}
                                    </button>

                                    {/* Mobile sub-menu */}
                                    <div
                                        className={`overflow-hidden transition-all duration-300 ${mobileServicesOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
                                            }`}
                                    >
                                        {/* Pinned */}
                                        <div className="pl-6 py-2 border-b border-[#222]">
                                            {dropdown.pinnedLinks.map((pl) => (
                                                <Link
                                                    key={pl.label}
                                                    href={pl.href}
                                                    onClick={() => setIsOpen(false)}
                                                    className="block py-2 text-sm font-bold text-[var(--color-brand-orange)] uppercase tracking-wider"
                                                >
                                                    {pl.label}
                                                </Link>
                                            ))}
                                        </div>

                                        {dropdown.groups.map((group) => (
                                            <div key={group.title} className="pl-6 py-2">
                                                <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-gray-500 mb-1 px-3">
                                                    {group.title}
                                                </p>
                                                {group.items.map((item) => (
                                                    <Link
                                                        key={item.label}
                                                        href={item.href}
                                                        onClick={() => setIsOpen(false)}
                                                        className="block px-3 py-2 text-sm text-gray-400 hover:text-[var(--color-brand-orange)] transition-colors"
                                                    >
                                                        {item.label}
                                                    </Link>
                                                ))}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ) : (
                                <Link
                                    key={link.label}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className="block px-3 py-3 text-base font-medium text-gray-300 hover:text-[var(--color-brand-orange)] hover:bg-[#111] transition-colors uppercase border-b border-[#222]"
                                >
                                    {link.label}
                                </Link>
                            )
                        )}
                        <div className="p-4 flex flex-col gap-4 items-center">
                            <Link
                                href="/kontakt"
                                onClick={() => setIsOpen(false)}
                                className="block w-full text-center px-5 py-3 bg-[var(--color-brand-orange)] text-black font-bold text-sm tracking-wider uppercase"
                            >
                                {ctaLabel}
                            </Link>
                            <LanguageSwitcher />
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
}
