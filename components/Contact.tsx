"use client";

import { useState } from "react";
import { Send, CheckCircle, AlertCircle, Loader2 } from "lucide-react";
import { useTranslations } from "next-intl";
import { Link } from "@/src/i18n/routing";
import SuccessPopup from "./SuccessPopup";

export default function Contact() {
    const t = useTranslations("Contact");
    const tPrivacy = useTranslations("PrivacyPolicy");

    const [formData, setFormData] = useState({ name: "", email: "", message: "", acceptedPrivacy: false });
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!formData.acceptedPrivacy) {
            setStatus("error");
            return;
        }
        setStatus("loading");

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            if (!res.ok) throw new Error("Failed to send");
            setStatus("success");
            setFormData({ name: "", email: "", message: "", acceptedPrivacy: false });
        } catch {
            setStatus("error");
        }
    };

    return (
        <section id="kontakt" className="py-16 bg-[#0a0a0a] scroll-mt-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">

                    {/* Header & Info */}
                    <div>
                        <h2 className="text-2xl md:text-3xl font-bold font-sans tracking-tight uppercase text-white mb-5">
                            {t("heading_1")} <span className="text-[var(--color-brand-orange)]">{t("heading_2")}</span>
                        </h2>
                        <p className="text-gray-400 font-mono text-sm leading-relaxed mb-8">
                            {t("description")}
                        </p>

                        <div className="space-y-6">
                            <div>
                                <h4 className="text-[var(--color-brand-orange)] font-mono text-xs tracking-widest uppercase mb-2">{t("contactLabel")}</h4>
                                <div className="space-y-4">
                                    <a
                                        href="mailto:contact.dkwgroup@gmail.com"
                                        className="block text-base md:text-lg font-bold font-sans text-white hover:text-[var(--color-brand-orange)] transition-colors"
                                    >
                                        contact.dkwgroup@gmail.com
                                    </a>
                                    <a
                                        href="tel:+48517957875"
                                        className="block text-base md:text-lg font-bold font-sans text-white hover:text-[var(--color-brand-orange)] transition-colors"
                                    >
                                        +48 517 957 875
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Google Maps Embed */}
                        <div className="w-full mt-8 border border-[#333] brutal-shadow overflow-hidden">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2550.993435048678!2d19.03600251232603!3d50.25470690131951!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4716cffffcfaa243%3A0x87e5a9e2f009e709!2sPodcastKatowice%20%E2%80%93%20Studio%20podcastowe%20i%20wideo%20%7C%20Wynajem%20studia%20w%20Katowicach!5e0!3m2!1spl!2sat!4v1773643954275!5m2!1spl!2sat"
                                width="100%"
                                height="220"
                                style={{ border: 0, filter: "grayscale(1) invert(1) contrast(1.1) brightness(0.7)" }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="DKW Group - PodcastKatowice Studio"
                                className="w-full"
                            />
                        </div>
                    </div>

                    {/* Form */}
                    <div className="bg-[#050505] p-6 md:p-10 border-2 border-[#333] brutal-shadow relative">
                        <div className="absolute -top-4 -right-4 w-8 h-8 bg-[var(--color-brand-orange)]"></div>

                        {/* Success Popup */}
                        {status === "success" && (
                            <SuccessPopup
                                title={t("success_title")}
                                message={t("success_message")}
                                onClose={() => setStatus("idle")}
                            />
                        )}

                        <form className="space-y-6 font-mono text-xs" onSubmit={handleSubmit}>
                            <div>
                                <label htmlFor="contact-name" className="block text-gray-400 mb-2 uppercase tracking-wider">{t("nameLabel")}</label>
                                <input
                                    type="text"
                                    id="contact-name"
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    placeholder={t("namePlaceholder")}
                                    className="w-full bg-[#111] border border-[#333] p-4 text-white focus:outline-none focus:border-[var(--color-brand-orange)] transition-colors placeholder:text-gray-600"
                                    required
                                    disabled={status === "loading"}
                                />
                            </div>

                            <div>
                                <label htmlFor="contact-email" className="block text-gray-400 mb-2 uppercase tracking-wider">{t("emailLabel")}</label>
                                <input
                                    type="email"
                                    id="contact-email"
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    placeholder={t("emailPlaceholder")}
                                    className="w-full bg-[#111] border border-[#333] p-4 text-white focus:outline-none focus:border-[var(--color-brand-orange)] transition-colors placeholder:text-gray-600"
                                    required
                                    disabled={status === "loading"}
                                />
                            </div>

                            <div>
                                <label htmlFor="contact-message" className="block text-gray-400 mb-2 uppercase tracking-wider">{t("messageLabel")}</label>
                                <textarea
                                    id="contact-message"
                                    rows={5}
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                    placeholder={t("messagePlaceholder")}
                                    className="w-full bg-[#111] border border-[#333] p-4 text-white focus:outline-none focus:border-[var(--color-brand-orange)] transition-colors placeholder:text-gray-600 resize-none"
                                    required
                                    disabled={status === "loading"}
                                ></textarea>
                            </div>

                            <div className="flex items-start gap-3">
                                <input
                                    type="checkbox"
                                    id="privacy-policy"
                                    checked={formData.acceptedPrivacy}
                                    onChange={(e) => setFormData({ ...formData, acceptedPrivacy: e.target.checked })}
                                    className="mt-1 w-4 h-4 bg-[#111] border border-[#333] text-[var(--color-brand-orange)] focus:ring-[var(--color-brand-orange)] focus:ring-offset-0 rounded-none cursor-pointer"
                                    required
                                />
                                <label htmlFor="privacy-policy" className="text-gray-400 line-height-relaxed select-none cursor-pointer">
                                    {tPrivacy("checkbox")}{" "}
                                    <Link href="/polityka-prywatnosci" className="text-[var(--color-brand-orange)] hover:underline">
                                        {tPrivacy("link")}
                                    </Link>
                                </label>
                            </div>

                            {/* Error Message */}
                            {status === "error" && (
                                <div className="flex items-center gap-2 text-red-400 font-mono text-sm tracking-tight leading-tight">
                                    <AlertCircle className="w-4 h-4 flex-shrink-0" />
                                    <span>{!formData.acceptedPrivacy ? tPrivacy("error") : t("error_message")}</span>
                                </div>
                            )}

                            <button
                                type="submit"
                                disabled={status === "loading"}
                                className="w-full flex items-center justify-center px-8 py-4 bg-[var(--color-brand-orange)] text-black font-bold uppercase tracking-widest hover:bg-[var(--color-brand-orange-hover)] transition-colors group disabled:opacity-60 disabled:cursor-not-allowed"
                            >
                                {status === "loading" ? (
                                    <div className="flex items-center gap-4">
                                        <span className="animate-pulse">{t("sending")}</span>
                                        <div className="flex gap-1">
                                            <div className="w-2 h-2 bg-black animate-bounce [animation-delay:-0.3s]"></div>
                                            <div className="w-2 h-2 bg-black animate-bounce [animation-delay:-0.15s]"></div>
                                            <div className="w-2 h-2 bg-black animate-bounce"></div>
                                        </div>
                                    </div>
                                ) : (
                                    <>
                                        {t("submit")}
                                        <Send className="ml-3 w-5 h-5 transition-transform group-hover:translate-x-2 group-hover:-translate-y-1" />
                                    </>
                                )}
                            </button>
                        </form>
                    </div>

                </div>
            </div>
        </section>
    );
}
