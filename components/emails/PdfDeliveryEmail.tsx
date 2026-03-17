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
        <Preview>Twoja darmowa checklista: {pdfTitle}</Preview>
        <Body style={main}>
            <Container style={container}>
                <Section style={header}>
                    <Heading style={h1}>DKW Group</Heading>
                </Section>
                <Section style={content}>
                    <Text style={paragraph}>Cześć {name || 'miłośniku marketingu'}!</Text>
                    <Text style={paragraph}>
                        Dziękujemy za zapisanie się do naszego newslettera. Zgodnie z obietnicą, przesyłamy Ci dostęp do: <strong>{pdfTitle}</strong>.
                    </Text>
                    <Section style={buttonContainer}>
                        <Link style={button} href={pdfUrl}>
                            POBIERZ PDF (KLIKNIJ TUTAJ)
                        </Link>
                    </Section>
                    <Text style={paragraph}>
                        Mamy nadzieję, że zawarte w nim wskazówki pomogą Ci wznieść Twój marketing na wyższy poziom.
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
                        Otrzymałeś tę wiadomość, ponieważ zapisałeś się na naszej stronie internetowej.
                    </Text>
                    <Link href={unsubscribeUrl} style={unsubscribeLink}>
                        Wypisz się z newslettera
                    </Link>
                </Section>
            </Container>
        </Body>
    </Html>
);

export default PdfDeliveryEmail;

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

const unsubscribeLink = {
    fontSize: '12px',
    color: '#ff6a00',
    textDecoration: 'underline',
};
