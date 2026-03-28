import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
    return {
        rules: [
            // ── Allow good AI bots and search engines ───────────
            {
                userAgent: [
                    'Googlebot',
                    'Bingbot',
                    'GPTBot',           // ChatGPT
                    'Google-Extended',  // Gemini AI
                    'ChatGPT-User',    // ChatGPT browse
                    'PerplexityBot',    // Perplexity AI
                    'Applebot',        // Apple / Siri
                ],
                allow: '/',
                disallow: ['/api/', '/_next/'],
            },
            // ── Block known scraper/spam bots ───────────────────
            {
                userAgent: [
                    'AhrefsBot',
                    'SemrushBot',
                    'MJ12bot',
                    'DotBot',
                    'BLEXBot',
                    'PetalBot',
                    'MegaIndex',
                    'Bytespider',
                    'YandexBot',
                ],
                disallow: '/',
            },
            // ── Default: allow everything except API ────────────
            {
                userAgent: '*',
                allow: '/',
                disallow: ['/api/', '/_next/'],
            },
        ],
        sitemap: 'https://dkwgroup.pl/sitemap.xml',
    };
}
