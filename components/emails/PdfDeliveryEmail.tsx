import {
    Body,
    Container,
    Head,
    Heading,
    Hr,
    Html,
    Link,
    Preview,
    Section,
    Text,
} from '@react-email/components';
import * as React from 'react';

interface PdfDeliveryEmailProps {
    name?: string;
    pdfTitle: string;
    pdfUrl: string;
    unsubscribeUrl: string;
}

export const PdfDeliveryEmail = ({
    name,
    pdfTitle,
    pdfUrl,
    unsubscribeUrl,
}: PdfDeliveryEmailProps) => (
    <Html>
        <Head />
        <Preview>Twoje materiały od DKW Group: {pdfTitle}</Preview>
        <Body style={main}>
            <Container style={container}>
                {/* Header */}
                <Section style={headerSection}>
                    <Text style={brandText}>DKW <span style={orangeText}>GROUP</span></Text>
                </Section>

                {/* Main Content Box */}
                <Section style={contentBox}>
                    <Heading style={h1}>MATERIAŁY: <span style={orangeText}>DOBRY WYBÓR</span></Heading>
                    
                    <Text style={paragraph}>
                        Cześć {name || 'miłośniku marketingu'}!
                    </Text>
                    
                    <Text style={paragraph}>
                        Dziękujemy za potwierdzenie zapisu. Zgodnie z obietnicą, przesyłamy Ci dostęp do: <strong>{pdfTitle}</strong>.
                    </Text>

                    <Section style={buttonContainer}>
                        <Link style={button} href={pdfUrl}>
                            POBIERZ MATERIAŁY (PDF)
                        </Link>
                    </Section>

                    <Text style={paragraph}>
                        Mamy nadzieję, że zawarte w nim wskazówki pomogą Ci wznieść Twój marketing na zupełnie nowy poziom. Jeśli będziesz potrzebować wsparcia w produkcji wideo lub strategii — jesteśmy do Twojej dyspozycji.
                    </Text>

                    <Text style={paragraph}>
                        Pozdrawiamy,<br />
                        <strong>Zespół DKW Group</strong>
                    </Text>
                </Section>

                {/* Footer Section */}
                <Section style={footer}>
                    <Text style={footerBrand}>DKW GROUP STRATEGY & VIDEO</Text>
                    <Hr style={hr} />
                    <Link href={unsubscribeUrl} style={unsubscribeLink}>
                        Wypisz się z newslettera
                    </Link>
                    <Text style={legalText}>
                        Zygmunta Krasińskiego 29, Katowice | dkwgroup.net <br />
                        Otrzymałeś tę wiadomość, ponieważ potwierdziłeś subskrypcję.
                    </Text>
                </Section>
            </Container>
        </Body>
    </Html>
);

export default PdfDeliveryEmail;

// --- STYLES (Synchronized with VerificationEmail) ---

const main = {
    backgroundColor: '#050505',
    color: '#ffffff',
    fontFamily: 'HelveticaNeue,Helvetica,Arial,sans-serif',
};

const container = {
    margin: '0 auto',
    padding: '40px 20px',
    maxWidth: '600px',
};

const headerSection = {
    textAlign: 'center' as const,
    marginBottom: '40px',
};

const brandText = {
    color: '#ffffff',
    fontSize: '24px',
    fontWeight: '900',
    letterSpacing: '2px',
    margin: '0',
};

const orangeText = {
    color: '#ff6a00',
};

const contentBox = {
    backgroundColor: '#0a0a0a',
    border: '2px solid #333333',
    padding: '40px',
    textAlign: 'left' as const,
    borderBottom: '6px solid #ff6a00',
    borderRight: '6px solid #ff6a00',
};

const h1 = {
    color: '#ffffff',
    fontSize: '28px',
    fontWeight: '900',
    margin: '0 0 24px 0',
    letterSpacing: '-0.5px',
    textTransform: 'uppercase' as const,
};

const paragraph = {
    color: '#cccccc',
    fontSize: '16px',
    lineHeight: '26px',
    margin: '16px 0',
};

const buttonContainer = {
    textAlign: 'center' as const,
    margin: '32px 0',
};

const button = {
    backgroundColor: '#ff6a00',
    color: '#000000',
    fontSize: '14px',
    fontWeight: '900',
    textDecoration: 'none',
    textAlign: 'center' as const,
    display: 'inline-block',
    padding: '18px 32px',
    textTransform: 'uppercase' as const,
    letterSpacing: '1px',
};

const footer = {
    marginTop: '40px',
    textAlign: 'center' as const,
};

const footerBrand = {
    color: '#ffffff',
    fontSize: '12px',
    fontWeight: '700',
    letterSpacing: '1px',
    margin: '0 0 8px 0',
};

const hr = {
    borderColor: '#222222',
    margin: '20px 0',
};

const unsubscribeLink = {
    fontSize: '11px',
    color: '#ff6a00',
    textDecoration: 'underline',
    display: 'block',
    marginBottom: '10px',
};

const legalText = {
    color: '#444444',
    fontSize: '10px',
    lineHeight: '16px',
};
