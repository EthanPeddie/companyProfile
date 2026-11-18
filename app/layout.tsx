import type { Metadata, Viewport } from 'next';
import './globals.css';

export const viewport: Viewport = {
  themeColor: '#050B16',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL('https://thetandthu.com'),
  title: {
    default: 'THET & THU CO., LTD. | Building A Better Tomorrow Together',
    template: '%s | THET & THU CO., LTD.',
  },
  description:
    'Established Myanmar company uniting Polaris Tech Solution (bespoke enterprise software, ERP, POS, mobile apps) and Trust One Properties (domestic real estate advisory, land, luxury condominiums). Headquartered in Yangon.',
  keywords: [
    'THET & THU CO., LTD.',
    'Thet & Thu',
    'Polaris Tech Solution',
    'Trust One Properties',
    'Myanmar limited company',
    'Yangon custom software',
    'enterprise ERP Myanmar',
    'multi-store POS Myanmar',
    'Myanmar domestic real estate',
    'Grand Kan Yeik Thar Condo',
    'Star City Thanlyin properties',
  ],
  authors: [{ name: 'THET & THU CO., LTD.' }],
  creator: 'THET & THU CO., LTD.',
  publisher: 'THET & THU CO., LTD.',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: 'THET & THU CO., LTD. | Building A Better Tomorrow Together',
    description:
      'Established Myanmar company with over a decade of excellence. Uniting bespoke enterprise software architecture and verified domestic real estate advisory.',
    url: 'https://thetandthu.com',
    siteName: 'THET & THU CO., LTD.',
    images: [
      {
        url: '/images/thet-and-thu-logo.png',
        width: 1200,
        height: 630,
        alt: 'THET & THU CO., LTD.',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'THET & THU CO., LTD. | Building A Better Tomorrow Together',
    description:
      'Established company in Myanmar: Polaris Tech Solution (bespoke software) and Trust One Properties (domestic real estate).',
    images: ['/images/thet-and-thu-logo.png'],
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/images/thet-and-thu-logo.png',
  },
};

const corporateJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Corporation',
  name: 'THET & THU CO., LTD.',
  alternateName: 'သက်နှင့်သူ ကုမ္ပဏီလီမိတက်',
  url: 'https://thetandthu.com',
  logo: 'https://thetandthu.com/images/thet-and-thu-logo.png',
  image: 'https://thetandthu.com/images/thet-and-thu-logo.png',
  description:
    'Established Myanmar company uniting Polaris Tech Solution (bespoke enterprise software, ERP, POS, mobile apps) and Trust One Properties (domestic real estate advisory, land, luxury condominiums). Headquartered in Yangon.',
  foundingDate: '2014',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'No.(3), Room No.(9D), Grand Kan Yeik Thar Condo, Kan Yeik Thar Road',
    addressLocality: 'Mingalar Taung Nyunt Township',
    addressRegion: 'Yangon',
    postalCode: '11221',
    addressCountry: 'MM',
  },
  contactPoint: [
    {
      '@type': 'ContactPoint',
      telephone: '+95-9-505-6524',
      contactType: 'customer service',
      areaServed: 'MM',
      availableLanguage: ['en', 'my'],
    },
    {
      '@type': 'ContactPoint',
      telephone: '+95-9-443-212-306',
      contactType: 'corporate inquiries',
      areaServed: 'MM',
      availableLanguage: ['en', 'my'],
    },
  ],
  subOrganization: [
    {
      '@type': 'Organization',
      name: 'Polaris Tech Solution',
      alternateName: 'ပိုလာရစ် တက်ခ် ဆော့ဖ်ဝဲလ်',
      url: 'https://thetandthu.com/polaris',
      logo: 'https://thetandthu.com/images/polaris-logo.png',
      description:
        'Bespoke enterprise software, ERP, multi-store POS, and mobile system engineering.',
    },
    {
      '@type': 'Organization',
      name: 'Trust One Properties',
      alternateName: 'ထရပ်စ်ဝမ်း အိမ်ခြံမြေ',
      url: 'https://thetandthu.com/trust-one',
      logo: 'https://thetandthu.com/images/trust-one-logo.png',
      description:
        'Verified domestic Myanmar land, luxury condominiums, and commercial property advisory.',
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Cinzel:wght@500;600;700;800&family=Noto+Sans+Myanmar:wght@300;400;500;600;700&family=Plus+Jakarta+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,400&display=swap"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(corporateJsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-[#071326] text-slate-100 antialiased selection:bg-[#D4AF37]/30 selection:text-white">
        {children}
      </body>
    </html>
  );
}
