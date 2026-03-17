import createMiddleware from 'next-intl/middleware';
import { routing } from './src/i18n/routing';

export default createMiddleware(routing);

export const config = {
    // Match only internationalized pathnames
    // We want to skip all paths that should NOT be localized: 
    // API routes, static files, admin dashboard, login routes.
    matcher: [
        // Wzorzec wyłapujący root ("/") oraz ścieżki które powinny uwzględniać język
        // Wykluczenia: _next (części Next.js), statyki (.*\\..*), pliki konfiguracyjne i API,
        // a także strony /admin, /login, /dashboard.
        '/((?!api|_next/static|_next/image|favicon.ico|admin|login|dashboard|.*\\..*).*)',
        '/'
    ]
};
