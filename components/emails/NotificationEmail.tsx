import * as React from 'react';

interface NotificationEmailProps {
    name: string;
    email: string;
    message: string;
}

export const NotificationEmail: React.FC<NotificationEmailProps> = ({ name, email, message }) => (
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
                        <span style={{
                            fontSize: '13px',
                            fontWeight: 400,
                            color: '#888',
                            marginLeft: '12px',
                        }}>
                            — Nowa wiadomość
                        </span>
                    </h1>
                </td>
            </tr>

            {/* Body */}
            <tr>
                <td style={{ padding: '40px' }}>
                    <h2 style={{
                        margin: '0 0 28px',
                        fontSize: '20px',
                        fontWeight: 700,
                        color: '#FF6A00',
                        textTransform: 'uppercase' as const,
                        letterSpacing: '1px',
                    }}>
                        📬 Nowe zapytanie z formularza
                    </h2>

                    {/* Name Field */}
                    <div style={{
                        backgroundColor: '#1a1a1a',
                        border: '1px solid #333',
                        padding: '16px 20px',
                        marginBottom: '12px',
                    }}>
                        <p style={{
                            margin: '0 0 4px',
                            fontSize: '11px',
                            fontWeight: 700,
                            color: '#FF6A00',
                            textTransform: 'uppercase' as const,
                            letterSpacing: '1.5px',
                        }}>
                            Imię
                        </p>
                        <p style={{
                            margin: '0',
                            fontSize: '16px',
                            color: '#ffffff',
                            fontWeight: 600,
                        }}>
                            {name}
                        </p>
                    </div>

                    {/* Email Field */}
                    <div style={{
                        backgroundColor: '#1a1a1a',
                        border: '1px solid #333',
                        padding: '16px 20px',
                        marginBottom: '12px',
                    }}>
                        <p style={{
                            margin: '0 0 4px',
                            fontSize: '11px',
                            fontWeight: 700,
                            color: '#FF6A00',
                            textTransform: 'uppercase' as const,
                            letterSpacing: '1.5px',
                        }}>
                            Email
                        </p>
                        <p style={{ margin: '0', fontSize: '16px', color: '#ffffff' }}>
                            <a href={`mailto:${email}`} style={{ color: '#FF6A00', textDecoration: 'none' }}>
                                {email}
                            </a>
                        </p>
                    </div>

                    {/* Message Field */}
                    <div style={{
                        backgroundColor: '#1a1a1a',
                        border: '1px solid #333',
                        borderLeft: '3px solid #FF6A00',
                        padding: '20px 24px',
                        marginBottom: '12px',
                    }}>
                        <p style={{
                            margin: '0 0 8px',
                            fontSize: '11px',
                            fontWeight: 700,
                            color: '#FF6A00',
                            textTransform: 'uppercase' as const,
                            letterSpacing: '1.5px',
                        }}>
                            Wiadomość
                        </p>
                        <p style={{
                            margin: '0',
                            fontSize: '15px',
                            lineHeight: '1.7',
                            color: '#e0e0e0',
                            whiteSpace: 'pre-wrap' as const,
                        }}>
                            {message}
                        </p>
                    </div>
                </td>
            </tr>

            {/* Footer */}
            <tr>
                <td style={{
                    padding: '20px 40px',
                    borderTop: '1px solid #222',
                    backgroundColor: '#0a0a0a',
                }}>
                    <p style={{
                        margin: '0',
                        fontSize: '12px',
                        color: '#555',
                        lineHeight: '1.5',
                    }}>
                        Wiadomość wysłana z formularza kontaktowego na stronie dkwgroup.pl
                    </p>
                </td>
            </tr>
        </table>
    </div>
);

export default NotificationEmail;
