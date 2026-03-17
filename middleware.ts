import createMiddleware from 'next-intl/middleware';
import { routing } from './src/i18n/routing';
import { NextRequest } from 'next/server';

const intlMiddleware = createMiddleware(routing);

export default function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl;

    // Check if the pathname is missing a locale
    const pathnameIsMissingLocale = routing.locales.every(
        (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
    );

    if (pathnameIsMissingLocale) {
        const acceptLanguage = request.headers.get('accept-language');
        const isPolish = acceptLanguage?.toLowerCase().includes('pl');
        const locale = isPolish ? 'pl' : 'en';

        return Response.redirect(
            new URL(`/${locale}${pathname === '/' ? '' : pathname}`, request.url)
        );
    }

    return intlMiddleware(request);
}

export const config = {
    // Match only internationalized pathnames
    matcher: [
        '/((?!api|_next/static|_next/image|favicon.ico|admin|login|dashboard|.*\\..*).*)',
        '/'
    ]
};
