import ServiceDetailHero from "@/components/ServiceDetailHero";
import ServiceProcess from "@/components/ServiceProcess";
import ServicePortfolio from "@/components/ServicePortfolio";
import ServiceOfferings from "@/components/ServiceOfferings";
import ServiceBenefits from "@/components/ServiceBenefits";
import ServiceFaq from "@/components/ServiceFaq";
import Contact from "@/components/Contact";
import AnimatedSection from "@/components/AnimatedSection";

export default function VideoProductionServicePage() {
    return (
        <>
            <ServiceDetailHero />
            <AnimatedSection animation="fade-up">
                <ServiceProcess />
            </AnimatedSection>
            <AnimatedSection animation="fade-left">
                <ServicePortfolio />
            </AnimatedSection>
            <AnimatedSection animation="fade-right">
                <ServiceOfferings />
            </AnimatedSection>
            <AnimatedSection animation="scale">
                <ServiceBenefits />
            </AnimatedSection>
            <AnimatedSection animation="reveal">
                <ServiceFaq />
            </AnimatedSection>
            <AnimatedSection animation="fade-up">
                <Contact />
            </AnimatedSection>
        </>
    );
}
