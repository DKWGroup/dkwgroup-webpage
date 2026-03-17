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

export const metadata: Metadata = {
  title: "DKW Group | Agencja Kreatywna | Wideo, Marketing, Social Media",
  description: "Eksperci od kreatywnego marketingu, wideofilmowania, obsługi social media i tworzenia nowoczesnych stron internetowych. Pomagamy firmom rosnąć i budować zaufanie online.",
  keywords: ["agencja kreatywna", "agencja marketingowa", "marketing", "AI", "AI ADS", "produkcja wideo", "strony internetowe", "social media", "podcasty", "nagrania dronem", "live streaming", "marketing content", "Katowice", "Polska"],
  authors: [{ name: "DKW Group Team" }],
  creator: "DKW Group",
  publisher: "DKW Group",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "DKW Group | Zyskaj z Nami Przewagę w Internecie",
    description: "Profesjonalna produkcja wideo, zarządzanie social mediami, nowoczesne strony WWW. Wszystko, czego potrzebuje Twoja firma do sukcesu online.",
    url: "https://dkwgroup.pl",
    siteName: "DKW Group",
    images: [
      {
        url: "/photos/IMG_3148.webp", // Obrazek z portfolio lub specjalny Open Graph
        width: 1200,
        height: 630,
        alt: "Logo i Siedziba DKW Group - profesjonalne wsparcie wizerunkowe dla biznesu",
      }
    ],
    locale: "pl_PL",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "DKW Group | Wideo, Marketing, Strony Internetowe",
    description: "Kompleksowo wspieramy rozwój firm w sieci. Profesjonalne wideo, social media marketing i niezawodne strony www.",
    images: ["/photos/IMG_3148.webp"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

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
