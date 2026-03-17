import { MetadataRoute } from 'next';

const DOMAIN = 'https://dkwgroup.pl'; // Zmień na właściwą domenę

const routes = [
    '',
    '/o-nas',
    '/uslugi',
    '/uslugi/produkcja-wideo',
    '/uslugi/nagrania-dronem',
    '/uslugi/podcasty',
    '/uslugi/live-streaming',
    '/uslugi/marketing-content',
    '/uslugi/strony-internetowe',
    '/case-studies',
    '/case-studies/obsluga-kanalu-grzegorz-kusz-agent-specjalny',
    '/case-studies/kampania-reklamowa-dla-investment-partners',
    '/case-studies/obsluga-kanalu-youtube-dla-eksperta-lotniczego',
    '/blog',
    '/blog/dlaczego-twoja-firma-potrzebuje-profesjonalnej-strony-internetowej',
    '/portfolio',
    '/projekty',
    '/kontakt'
];

export default function sitemap(): MetadataRoute.Sitemap {
    return routes.map((route) => ({
        url: `${DOMAIN}/pl${route}`,
        lastModified: new Date(),
        alternates: {
            languages: {
                pl: `${DOMAIN}/pl${route}`,
                en: `${DOMAIN}/en${route}`,
            },
        },
    }));
}
