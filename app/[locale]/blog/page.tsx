import BlogHero from "@/components/BlogHero";
import BlogList from "@/components/BlogList";
import Contact from "@/components/Contact";
import AnimatedSection from "@/components/AnimatedSection";

export default function BlogPage() {
    return (
        <>
            <BlogHero />
            <AnimatedSection animation="fade-up">
                <BlogList />
            </AnimatedSection>
            <AnimatedSection animation="fade-up">
                <Contact />
            </AnimatedSection>
        </>
    );
}
