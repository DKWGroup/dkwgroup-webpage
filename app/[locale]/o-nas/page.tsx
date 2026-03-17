import AboutHero from "@/components/AboutHero";
import History from "@/components/History";
import Values from "@/components/Values";
import AlternativeTeam from "@/components/AlternativeTeam";
import Contact from "@/components/Contact";
import AnimatedSection from "@/components/AnimatedSection";

export default function AboutPage() {
    return (
        <>
            <AboutHero />

            <AnimatedSection animation="fade-right">
                <History />
            </AnimatedSection>

            <AnimatedSection animation="scale">
                <Values />
            </AnimatedSection>

            <AnimatedSection animation="reveal">
                <AlternativeTeam />
            </AnimatedSection>

            <AnimatedSection animation="fade-up">
                <Contact />
            </AnimatedSection>
        </>
    );
}
