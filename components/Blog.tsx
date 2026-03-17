import { Link } from "@/src/i18n/routing";
import { ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";

export default function Blog() {
    const t = useTranslations("Blog");

    return (
        <section id="blog" className="py-16 bg-[#0a0a0a] border-b border-[#333]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Compact horizontal layout */}
                <Link href="/blog" className="block border border-[#333] bg-[#050505] brutal-shadow group overflow-hidden">
                    <div className="flex flex-col md:flex-row">

                        {/* Thumbnail — compact square */}
                        <div className="relative w-full md:w-80 lg:w-96 flex-shrink-0 aspect-[16/9] md:aspect-auto overflow-hidden">
                            <Image
                                src="/photos/blog/b57d1cf4-3390-4f29-8a35-781704c7c65e.webp"
                                alt="Blog post thumbnail"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-[var(--color-brand-orange)] opacity-0 group-hover:opacity-10 transition-opacity"></div>
                        </div>

                        {/* Content */}
                        <div className="p-6 md:p-8 flex flex-col justify-center flex-grow">
                            <div className="flex items-center gap-3 mb-3">
                                <span className="text-[var(--color-brand-orange)] font-mono text-[10px] uppercase tracking-widest font-bold">
                                    {t("heading_1")} {t("heading_2")}
                                </span>
                                <span className="w-8 h-px bg-[#444]"></span>
                                <span className="text-gray-500 font-mono text-[10px] uppercase tracking-widest">
                                    {t("post_date")} • {t("post_author")}
                                </span>
                            </div>

                            <h3 className="text-xl md:text-2xl font-bold font-sans tracking-tight uppercase text-white mb-4 group-hover:text-[var(--color-brand-orange)] transition-colors leading-tight">
                                {t("post_title")}
                            </h3>

                            <div className="inline-flex items-center text-xs font-bold font-mono text-gray-400 group-hover:text-[var(--color-brand-orange)] transition-colors uppercase tracking-widest mt-auto">
                                {t("readMore")}
                                <ArrowRight className="ml-2 w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                            </div>
                        </div>

                    </div>
                </Link>

            </div>
        </section>
    );
}
