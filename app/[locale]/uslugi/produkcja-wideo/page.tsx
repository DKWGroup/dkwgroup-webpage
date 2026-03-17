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
            <ServiceDetailHero 
                isAltLayout={true} 
                bgImage="/portfolio-photos/eaeb6c01-ef07-499d-b97e-9ab8981aa057_rw_1200.webp" 
            />
            <AnimatedSection animation="fade-up">
                <ServiceProcess bgImage="/portfolio-photos/16525e8c-a557-4b38-addb-47db41de14c0_rw_600.webp" />
            </AnimatedSection>
            <AnimatedSection animation="fade-left">
                <ServicePortfolio />
            </AnimatedSection>
            <AnimatedSection animation="fade-right">
                <ServiceOfferings 
                    hideBox={true} 
                    bgImage="/portfolio-photos/46988c5f-063c-45af-9903-63d305aac922_rw_600.webp" 
                />
            </AnimatedSection>
            <AnimatedSection animation="scale">
                <ServiceBenefits bgImage="/portfolio-photos/6310d573-4f44-42c1-be78-7fb5c77899ba_rw_600.webp" />
            </AnimatedSection>
            <AnimatedSection animation="reveal">
                <ServiceFaq bgImage="/portfolio-photos/a425da50-4e41-4719-b24c-2a6d9131ddbf_rw_600.webp" />
            </AnimatedSection>
            <AnimatedSection animation="fade-up">
                <Contact />
            </AnimatedSection>
        </>
    );
}
