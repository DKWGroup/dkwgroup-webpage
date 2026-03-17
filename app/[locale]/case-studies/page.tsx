import CaseStudiesHero from "@/components/CaseStudiesHero";
import CaseStudiesList from "@/components/CaseStudiesList";
import Contact from "@/components/Contact";
import AnimatedSection from "@/components/AnimatedSection";

export default function CaseStudiesPage() {
    return (
        <>
            <CaseStudiesHero />
            <AnimatedSection animation="fade-up">
                <CaseStudiesList />
            </AnimatedSection>
            <AnimatedSection animation="fade-up">
                <Contact />
            </AnimatedSection>
        </>
    );
}
