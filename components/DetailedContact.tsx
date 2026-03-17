"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, CheckCircle, AlertCircle, Loader2 } from "lucide-react";
import { useTranslations } from "next-intl";
import SuccessPopup from "./SuccessPopup";

export default function DetailedContact() {
    const t = useTranslations("DetailedContact");

    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("loading");

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            if (!res.ok) throw new Error("Failed to send");
            setStatus("success");
            setFormData({ name: "", email: "", message: "" });
        } catch {
            setStatus("error");
        }
    };

    return (
        <section className="pb-24 pt-8 bg-[#0a0a0a]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">

                    {/* Left Column - Contact Details */}
                    <div className="w-full lg:w-1/2 flex flex-col space-y-12">
                        <div>
                            <h2 className="text-3xl font-bold font-sans text-white mb-8 tracking-tight">
                                {t("heading_1")} <span className="text-[var(--color-brand-orange)]">{t("heading_2")}</span>
                            </h2>

                            <div className="space-y-8">
                                {/* Email Item */}
                                <div className="flex items-start gap-4 group">
                                    <div className="w-12 h-12 rounded-full border border-[#333] flex items-center justify-center bg-[#111] group-hover:border-[var(--color-brand-orange)] transition-colors flex-shrink-0">
                                        <Mail className="w-5 h-5 text-[var(--color-brand-orange)]" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold font-sans text-white uppercase tracking-wider mb-1 mt-1">{t("email")}</h3>
                                        <p className="font-mono text-gray-400 text-sm">contact.dkwgroup@gmail.com</p>
                                    </div>
                                </div>

                                {/* Phone Item */}
                                <div className="flex items-start gap-4 group">
                                    <div className="w-12 h-12 rounded-full border border-[#333] flex items-center justify-center bg-[#111] group-hover:border-[var(--color-brand-orange)] transition-colors flex-shrink-0">
                                        <Phone className="w-5 h-5 text-[var(--color-brand-orange)]" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold font-sans text-white uppercase tracking-wider mb-2 mt-1">{t("phone")}</h3>
                                        <div className="space-y-2 font-mono text-sm text-gray-400">
                                            <div className="flex bg-[#111] border border-[#222] px-3 py-1 w-fit"><span className="w-20 inline-block text-gray-500">Dawid:</span> <span className="text-white">+48 517 957 875</span></div>
                                            <div className="flex bg-[#111] border border-[#222] px-3 py-1 w-fit"><span className="w-20 inline-block text-gray-500">Kamil:</span> <span className="text-white">+48 881 046 689</span></div>
                                            <div className="flex bg-[#111] border border-[#222] px-3 py-1 w-fit"><span className="w-20 inline-block text-gray-500">Wiktoria:</span> <span className="text-white">+48 537 168 645</span></div>
                                        </div>
                                    </div>
                                </div>

                                {/* Location Item */}
                                <div className="flex items-start gap-4 group">
                                    <div className="w-12 h-12 rounded-full border border-[#333] flex items-center justify-center bg-[#111] group-hover:border-[var(--color-brand-orange)] transition-colors flex-shrink-0">
                                        <MapPin className="w-5 h-5 text-[var(--color-brand-orange)]" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold font-sans text-white uppercase tracking-wider mb-1 mt-1">{t("location")}</h3>
                                        <p className="font-mono text-gray-400 text-sm">{t("location_value")}</p>
                                    </div>
                                </div>

                            </div>
                        </div>

                        {/* Working Hours */}
                        <div className="pt-8 border-t border-[#222]">
                            <h3 className="font-bold font-sans text-white text-xl tracking-tight mb-6">{t("working_hours")}</h3>
                            <ul className="font-mono text-sm text-gray-400 space-y-3">
                                <li className="flex justify-between border-b border-[#222] pb-2">
                                    <span className="text-gray-300">{t("mon_fri")}</span>
                                    <span className="text-white">9:00 - 17:00</span>
                                </li>
                                <li className="flex justify-between border-b border-[#222] pb-2">
                                    <span className="text-gray-300">{t("sat")}</span>
                                    <span className="text-white">10:00 - 14:00</span>
                                </li>
                                <li className="flex justify-between">
                                    <span className="text-gray-300">{t("sun")}</span>
                                    <span className="text-[#FF6A00] font-bold uppercase tracking-wider">{t("closed")}</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Right Column - Form */}
                    <div className="w-full lg:w-1/2">
                        <div className="bg-[#111] border border-[#222] p-8 lg:p-10 brutal-shadow relative">
                            {/* Optional Decoration */}
                            <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-[var(--color-brand-orange)] m-4 opacity-50 pointer-events-none"></div>

                            {/* Success Popup */}
                            {status === "success" && (
                                <SuccessPopup
                                    title={t("success_title")}
                                    message={t("success_message")}
                                    onClose={() => setStatus("idle")}
                                />
                            )}

                            <h2 className="text-2xl font-bold font-sans text-white tracking-tight mb-8">{t("form_title")}</h2>

                            <form className="space-y-6 font-mono text-sm" onSubmit={handleSubmit}>
                                <div>
                                    <label htmlFor="detailed-name" className="block text-gray-400 mb-2 uppercase tracking-wider text-xs font-bold">{t("form_name")}</label>
                                    <input
                                        type="text"
                                        id="detailed-name"
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        placeholder={t("form_name_placeholder")}
                                        className="w-full bg-[#050505] border border-[#333] px-4 py-3 text-white focus:outline-none focus:border-[var(--color-brand-orange)] transition-colors"
                                        required
                                        disabled={status === "loading"}
                                    />
                                </div>

                                <div>
                                    <label htmlFor="detailed-email" className="block text-gray-400 mb-2 uppercase tracking-wider text-xs font-bold">{t("form_email")}</label>
                                    <input
                                        type="email"
                                        id="detailed-email"
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        placeholder={t("form_email_placeholder")}
                                        className="w-full bg-[#050505] border border-[#333] px-4 py-3 text-white focus:outline-none focus:border-[var(--color-brand-orange)] transition-colors"
                                        required
                                        disabled={status === "loading"}
                                    />
                                </div>

                                <div>
                                    <label htmlFor="detailed-message" className="block text-gray-400 mb-2 uppercase tracking-wider text-xs font-bold">{t("form_message")}</label>
                                    <textarea
                                        id="detailed-message"
                                        rows={5}
                                        value={formData.message}
                                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                        placeholder={t("form_message_placeholder")}
                                        className="w-full bg-[#050505] border border-[#333] px-4 py-3 text-white focus:outline-none focus:border-[var(--color-brand-orange)] transition-colors resize-none"
                                        required
                                        disabled={status === "loading"}
                                    ></textarea>
                                </div>

                                {/* Error Message */}
                                {status === "error" && (
                                    <div className="flex items-center gap-2 text-red-400 font-mono text-sm">
                                        <AlertCircle className="w-4 h-4 flex-shrink-0" />
                                        <span>{t("error_message")}</span>
                                    </div>
                                )}

                                <button
                                    type="submit"
                                    disabled={status === "loading"}
                                    className="w-full bg-[var(--color-brand-orange)] hover:bg-[var(--color-brand-orange-hover)] text-black font-bold uppercase tracking-widest py-4 transition-colors font-sans mt-4 brutal-shadow disabled:opacity-60 disabled:cursor-not-allowed"
                                >
                                    {status === "loading" ? (
                                        <span className="flex items-center justify-center gap-2">
                                            {t("sending")}
                                            <Loader2 className="w-5 h-5 animate-spin" />
                                        </span>
                                    ) : (
                                        t("form_submit")
                                    )}
                                </button>
                            </form>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
