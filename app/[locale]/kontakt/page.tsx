import ContactHero from "@/components/ContactHero";
import DetailedContact from "@/components/DetailedContact";
import ContactMap from "@/components/ContactMap";
import AnimatedSection from "@/components/AnimatedSection";

export default function ContactPage() {
    return (
        <>
            <ContactHero />
            <AnimatedSection animation="fade-up">
                <DetailedContact />
            </AnimatedSection>
            <AnimatedSection animation="fade-up" delay={0.2}>
                <ContactMap />
            </AnimatedSection>
        </>
    );
}
