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
    Img,
} from '@react-email/components';
import * as React from 'react';

interface VerificationEmailProps {
    name?: string;
    verificationUrl: string;
}

export const VerificationEmail = ({
    name,
    verificationUrl,
}: VerificationEmailProps) => (
    <Html>
        <Head />
        <Preview>Potwierdź swój zapis do newslettera DKW Group</Preview>
        <Body style={main}>
            <Container style={container}>
                {/* Header with Brand Logo/Text */}
                <Section style={headerSection}>
                    <Text style={brandText}>DKW <span style={orangeText}>GROUP</span></Text>
                </Section>

                {/* Main Content Box with Brutal Shadow effect */}
                <Section style={contentBox}>
                    <Heading style={h1}>KROK 1: <span style={orangeText}>WERYFIKACJA</span></Heading>
                    
                    <Text style={paragraph}>
                        Cześć {name || 'miłośniku marketingu'}!
                    </Text>
                    
                    <Text style={paragraph}>
                        Dziękujemy za zainteresowanie naszym newsletterem. Abyśmy mogli przesyłać Ci wartościowe treści i obiecane materiały, musimy potwierdzić Twój adres e-mail.
                    </Text>

                    <Text style={paragraph}>
                        Kliknij poniższy przycisk, aby dokończyć proces:
                    </Text>

                    <Section style={buttonContainer}>
                        <Link style={button} href={verificationUrl}>
                            POTWIERDZAM ADRES E-MAIL
                        </Link>
                    </Section>

                    <Text style={smallText}>
                        Jeśli to nie Ty zapisałeś się do newslettera, po prostu zignoruj tę wiadomość. Link wygaśnie za 24h.
                    </Text>
                </Section>

                {/* Footer Section */}
                <Section style={footer}>
                    <Text style={footerBrand}>DKW GROUP STRATEGY & VIDEO</Text>
                    <Text style={footerText}>
                        Zygmunta Krasińskiego 29, Katowice | dkwgroup.net
                    </Text>
                    <Hr style={hr} />
                    <Text style={legalText}>
                        Wiadomość wysłana automatycznie w celu weryfikacji konta. <br />
                        © {new Date().getFullYear()} DKW Group. Wszystkie prawa zastrzeżone.
                    </Text>
                </Section>
            </Container>
        </Body>
    </Html>
);

export default VerificationEmail;

// --- STYLES ---

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
    // Note: box-shadow is simulation of "brutal" look
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

const smallText = {
    color: '#666666',
    fontSize: '12px',
    lineHeight: '20px',
    marginTop: '24px',
    fontStyle: 'italic',
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

const footerText = {
    color: '#666666',
    fontSize: '10px',
    margin: '0',
};

const hr = {
    borderColor: '#222222',
    margin: '20px 0',
};

const legalText = {
    color: '#444444',
    fontSize: '10px',
    lineHeight: '16px',
};
