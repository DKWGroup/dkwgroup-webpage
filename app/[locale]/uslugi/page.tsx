import ServicesHero from "@/components/ServicesHero";
import ServicesPageGrid from "@/components/ServicesPageGrid";
import WhyUs from "@/components/WhyUs";
import Contact from "@/components/Contact";
import AnimatedSection from "@/components/AnimatedSection";

export default function ServicesPage() {
    return (
        <>
            <ServicesHero />
            <AnimatedSection animation="fade-up">
                <ServicesPageGrid />
            </AnimatedSection>
            <AnimatedSection animation="fade-left">
                <WhyUs />
            </AnimatedSection>
            <AnimatedSection animation="fade-up">
                <Contact />
            </AnimatedSection>
        </>
    );
}
