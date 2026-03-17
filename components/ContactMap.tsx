import { useTranslations } from "next-intl";

export default function ContactMap() {
    const t = useTranslations("ContactMap");

    return (
        <section className="bg-[#050505] border-b border-[#333] pb-24 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="w-full aspect-video lg:aspect-[21/9] bg-[#111] border-2 border-[#333] overflow-hidden grayscale hover:grayscale-0 transition-all duration-700 brutal-shadow p-2">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2550.993435048678!2d19.03600251232603!3d50.25470690131951!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4716cffffcfaa243%3A0x87e5a9e2f009e709!2sPodcastKatowice%20%E2%80%93%20Studio%20podcastowe%20i%20wideo%20%7C%20Wynajem%20studia%20w%20Katowicach!5e0!3m2!1spl!2sat!4v1773643954275!5m2!1spl!2sat"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen={false}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title={t("title")}
                        className="w-full h-full"
                    ></iframe>
                </div>
            </div>
        </section>
    );
}
