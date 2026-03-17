import * as React from 'react';

interface ConfirmationEmailProps {
    name: string;
}

export const ConfirmationEmail: React.FC<ConfirmationEmailProps> = ({ name }) => (
    <div style={{
        fontFamily: "'Space Grotesk', 'Segoe UI', Arial, sans-serif",
        backgroundColor: '#0a0a0a',
        color: '#ffffff',
        padding: '0',
        margin: '0',
    }}>
        <table
            width="100%"
            cellPadding="0"
            cellSpacing="0"
            style={{ maxWidth: '600px', margin: '0 auto', backgroundColor: '#111111', borderCollapse: 'collapse' }}
        >
            {/* Header */}
            <tr>
                <td style={{
                    padding: '32px 40px 24px',
                    borderBottom: '2px solid #FF6A00',
                }}>
                    <h1 style={{
                        margin: '0',
                        fontSize: '24px',
                        fontWeight: 700,
                        letterSpacing: '-0.5px',
                        color: '#ffffff',
                    }}>
                        DKW <span style={{ color: '#FF6A00' }}>Group</span>
                    </h1>
                </td>
            </tr>

            {/* Body */}
            <tr>
                <td style={{ padding: '40px' }}>
                    <h2 style={{
                        margin: '0 0 24px',
                        fontSize: '22px',
                        fontWeight: 700,
                        color: '#ffffff',
                        lineHeight: '1.3',
                    }}>
                        Dziękujemy za wiadomość!
                    </h2>

                    <p style={{
                        margin: '0 0 20px',
                        fontSize: '15px',
                        lineHeight: '1.7',
                        color: '#b0b0b0',
                    }}>
                        Cześć <strong style={{ color: '#ffffff' }}>{name}</strong>,
                    </p>

                    <p style={{
                        margin: '0 0 20px',
                        fontSize: '15px',
                        lineHeight: '1.7',
                        color: '#b0b0b0',
                    }}>
                        Otrzymaliśmy Twoją wiadomość i dziękujemy za kontakt. Nasz zespół zapozna się z nią
                        i skontaktuje się z Tobą najszybciej jak to możliwe.
                    </p>

                    {/* Highlight Box */}
                    <div style={{
                        backgroundColor: '#1a1a1a',
                        border: '1px solid #333',
                        borderLeft: '3px solid #FF6A00',
                        padding: '20px 24px',
                        margin: '24px 0',
                    }}>
                        <p style={{
                            margin: '0 0 8px',
                            fontSize: '14px',
                            fontWeight: 700,
                            color: '#FF6A00',
                            textTransform: 'uppercase' as const,
                            letterSpacing: '1px',
                        }}>
                            Czas odpowiedzi
                        </p>
                        <p style={{
                            margin: '0',
                            fontSize: '15px',
                            lineHeight: '1.6',
                            color: '#e0e0e0',
                        }}>
                            Odpowiadamy w ciągu <strong>maksymalnie 24 godzin</strong>. Zwykle zajmuje nam to
                            od <strong>1 do 3 godzin</strong> od otrzymania wiadomości.
                        </p>
                    </div>

                    <p style={{
                        margin: '24px 0 0',
                        fontSize: '15px',
                        lineHeight: '1.7',
                        color: '#b0b0b0',
                    }}>
                        Pozdrawiamy,<br />
                        <strong style={{ color: '#ffffff' }}>Zespół DKW Group</strong>
                    </p>
                </td>
            </tr>

            {/* Footer */}
            <tr>
                <td style={{
                    padding: '24px 40px',
                    borderTop: '1px solid #222',
                    backgroundColor: '#0a0a0a',
                }}>
                    <p style={{
                        margin: '0 0 8px',
                        fontSize: '12px',
                        color: '#666',
                        lineHeight: '1.5',
                    }}>
                        DKW Group — Agencja Kreatywna
                    </p>
                    <p style={{
                        margin: '0',
                        fontSize: '12px',
                        color: '#555',
                        lineHeight: '1.5',
                    }}>
                        Zygmunta Krasińskiego 29, 40-019 Katowice · 
                        <a href="https://dkwgroup.pl" style={{ color: '#FF6A00', textDecoration: 'none' }}>dkwgroup.pl</a>
                    </p>
                </td>
            </tr>
        </table>
    </div>
);

export default ConfirmationEmail;
