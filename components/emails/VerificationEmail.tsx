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
                <Section style={header}>
                    <Heading style={h1}>DKW Group</Heading>
                </Section>
                <Section style={content}>
                    <Text style={paragraph}>Cześć {name || 'miłośniku marketingu'}!</Text>
                    <Text style={paragraph}>
                        Dziękujemy za zainteresowanie naszym newsletterem. Abyśmy mogli przesyłać Ci wartościowe treści i obiecane materiały, musimy potwierdzić Twój adres e-mail.
                    </Text>
                    <Text style={paragraph}>
                        To tylko jedno kliknięcie:
                    </Text>
                    <Section style={buttonContainer}>
                        <Link style={button} href={verificationUrl}>
                            POTWIERDZAM ZAPIS (KLIKNIJ TUTAJ)
                        </Link>
                    </Section>
                    <Text style={paragraph}>
                        Jeśli to nie Ty zapisałeś się do newslettera, po prostu zignoruj tę wiadomość.
                    </Text>
                    <Text style={paragraph}>
                        Pozdrawiamy,<br />
                        Zespół DKW Group
                    </Text>
                </Section>
                <Hr style={hr} />
                <Section style={footer}>
                    <Text style={footerText}>
                        DKW Group | Zygmunta Krasińskiego 29, Katowice
                    </Text>
                    <Text style={footerText}>
                        Działamy zgodnie z RODO. Twoje dane są u nas bezpieczne.
                    </Text>
                </Section>
            </Container>
        </Body>
    </Html>
);

export default VerificationEmail;

const main = {
    backgroundColor: '#050505',
    fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
    margin: '0 auto',
    padding: '20px 0 48px',
    maxWidth: '580px',
};

const header = {
    padding: '30px',
    textAlign: 'center' as const,
};

const h1 = {
    color: '#ff6a00',
    fontSize: '32px',
    fontWeight: 'bold',
    margin: '0',
    textTransform: 'uppercase' as const,
};

const content = {
    padding: '30px',
    backgroundColor: '#0a0a0a',
    border: '1px solid #333',
};

const paragraph = {
    fontSize: '16px',
    lineHeight: '26px',
    color: '#ccc',
};

const buttonContainer = {
    textAlign: 'center' as const,
    margin: '30px 0',
};

const button = {
    backgroundColor: '#ff6a00',
    borderRadius: '0px',
    color: '#000',
    fontSize: '16px',
    fontWeight: 'bold',
    textDecoration: 'none',
    textAlign: 'center' as const,
    display: 'inline-block',
    padding: '16px 32px',
};

const hr = {
    borderColor: '#333',
    margin: '20px 0',
};

const footer = {
    textAlign: 'center' as const,
};

const footerText = {
    fontSize: '12px',
    color: '#666',
    lineHeight: '18px',
    margin: '4px 0',
};
