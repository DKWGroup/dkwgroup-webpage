import Hero from "@/components/Hero";
import About from "@/components/About";
import AboutInvestment from "@/components/AboutInvestment";
import StatsSection from "@/components/StatsSection";
import StatsCta from "@/components/StatsCta";
import Services from "@/components/Services";
import ScrollingImages from "@/components/ScrollingImages";
import CaseStudies from "@/components/CaseStudies";
import StudioSection from "@/components/StudioSection";
import Testimonials from "@/components/Testimonials";
import Blog from "@/components/Blog";
import Team from "@/components/Team";
import Clients from "@/components/Clients";
import Faq from "@/components/Faq";
import Contact from "@/components/Contact";
import AnimatedSection from "@/components/AnimatedSection";
import AlternativeCta from "@/components/AlternativeCta";
import NewsletterSection from "@/components/NewsletterSection";
import type { Metadata } from "next";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  return {
    title: locale === 'pl'
      ? "DKW Group | Agencja Kreatywna | Wideo, Marketing, Social Media"
      : "DKW Group | Creative Agency | Video, Marketing, Social Media",
    description: locale === 'pl'
      ? "Skuteczny marketing, profesjonalna produkcja wideo i nowoczesne strony WWW. Poznaj DKW Group — agencję kreatywną z Katowic i zacznij z nami rosnąć."
      : "Effective marketing, professional video production, and modern websites. Meet DKW Group — a creative agency from Katowice, Poland. Start growing with us today.",
  };
}

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "DKW Group",
    "image": "https://dkwgroup.pl/photos/IMG_3148.webp",
    "@id": "https://dkwgroup.pl",
    "url": "https://dkwgroup.pl",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Zygmunta Krasińskiego 29",
      "addressLocality": "Katowice",
      "addressRegion": "Śląskie",
      "addressCountry": "PL"
    },
    "sameAs": [
      "https://www.youtube.com/@GrzegorzKusz-AgentSpecjalny"
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* Hero doesn't need external animation wrapper, it usually has its own or we want it visible immediately. */}
      {/* If you want it animated, you can wrap it but it might cause CLS on first load */}
      <Hero />
      
      <AnimatedSection animation="fade-up" delay={0.2}>
        <Clients />
      </AnimatedSection>
      
      <AnimatedSection animation="reveal">
        <About />
      </AnimatedSection>
      
      <AnimatedSection animation="fade-left">
        <AboutInvestment />
      </AnimatedSection>
      
      <AnimatedSection animation="scale">
        <StatsSection />
      </AnimatedSection>
      
      <AnimatedSection animation="fade-up">
        <StatsCta />
      </AnimatedSection>
      
      <AnimatedSection animation="fade-right">
        <Services />
      </AnimatedSection>
      
      <AnimatedSection animation="reveal">
        <ScrollingImages />
      </AnimatedSection>
      
      <AnimatedSection animation="fade-up">
        <CaseStudies />
      </AnimatedSection>

      <AnimatedSection animation="fade-down" delay={0.1}>
        <AlternativeCta />
      </AnimatedSection>
      
      <AnimatedSection animation="scale">
        <StudioSection />
      </AnimatedSection>
      
      <AnimatedSection animation="fade-left">
        <Testimonials />
      </AnimatedSection>
      
      <Blog />
      
      <NewsletterSection />
      
      <AnimatedSection animation="fade-up">
        <Team />
      </AnimatedSection>
      
      <AnimatedSection animation="reveal">
        <Faq />
      </AnimatedSection>
      
      <AnimatedSection animation="fade-up">
        <Contact />
      </AnimatedSection>
    </>
  );
}
