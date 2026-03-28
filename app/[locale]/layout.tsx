import type { Metadata } from "next";
import { Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "../globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HideOnPortal from "@/components/HideOnPortal";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '../../src/i18n/routing';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const baseUrl = "https://dkwgroup.net";
  const isEn = locale === "en";

  const title = isEn 
    ? "DKW Group | Creative Agency | Video, Marketing, Social Media"
    : "DKW Group | Agencja Kreatywna | Wideo, Marketing, Social Media";
  
  const description = isEn
    ? "Experts in creative marketing, video production, social media management, and modern website creation. Helping businesses grow, build trust online, and stand out."
    : "Eksperci od kreatywnego marketingu, wideofilmowania, obsługi social media i tworzenia nowoczesnych stron internetowych. Pomagamy firmom rosnąć i budować zaufanie online.";

  return {
    title,
    description,
    metadataBase: new URL(baseUrl),
    alternates: {
      canonical: "/",
      languages: {
        pl: "/pl",
        en: "/en",
      },
    },
    keywords: isEn 
      ? ["creative agency", "marketing agency", "video production", "websites", "social media", "podcasts", "drone filming", "live streaming"]
      : ["agencja kreatywna", "agencja marketingowa", "marketing", "AI", "produkcja wideo", "strony internetowe", "social media", "podcasty", "nagrania dronem"],
    authors: [{ name: "DKW Group Team" }],
    creator: "DKW Group",
    publisher: "DKW Group",
    openGraph: {
      title,
      description,
      url: baseUrl,
      siteName: "DKW Group",
      images: [
        {
          url: "/photos/IMG_3148.webp",
          width: 1200,
          height: 630,
          alt: "DKW Group Brand",
        }
      ],
      locale: isEn ? "en_US" : "pl_PL",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/photos/IMG_3148.webp"],
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function RootLayout({
  children,
  params
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body
        className={`${spaceGrotesk.variable} ${jetbrainsMono.variable} font-sans antialiased bg-black text-white`}
      >
        <NextIntlClientProvider messages={messages}>
          <HideOnPortal>
            <Navbar />
          </HideOnPortal>

          <main>{children}</main>

          <HideOnPortal>
            <Footer />
          </HideOnPortal>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
