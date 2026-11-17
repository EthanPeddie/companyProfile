import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://thetandthu.com'),
  title: {
    default: 'THET & THU CO., LTD. | Building A Better Tomorrow Together',
    template: '%s | THET & THU CO., LTD.',
  },
  description:
    'Established Myanmar corporate holding company uniting Polaris Tech Solution (bespoke enterprise software, ERP, POS, mobile apps) and Trust One Properties (domestic real estate advisory, land, luxury condominiums). Headquartered in Yangon.',
  keywords: [
    'THET & THU CO., LTD.',
    'Thet & Thu',
    'Polaris Tech Solution',
    'Trust One Properties',
    'Myanmar holding company',
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
      'Established Myanmar corporate holding company with over a decade of excellence. Uniting bespoke enterprise software architecture and verified domestic real estate advisory.',
    url: 'https://thetandthu.com',
    siteName: 'THET & THU CO., LTD.',
    images: [
      {
        url: '/images/thet-and-thu-logo.png',
        width: 1200,
        height: 630,
        alt: 'THET & THU CO., LTD. - Corporate Holding Group',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'THET & THU CO., LTD. | Building A Better Tomorrow Together',
    description:
      'Established holding company in Myanmar: Polaris Tech Solution (bespoke software) and Trust One Properties (domestic real estate).',
    images: ['/images/thet-and-thu-logo.png'],
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/images/thet-and-thu-logo.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-full flex flex-col bg-[#071326] text-slate-100 antialiased selection:bg-[#D4AF37]/30 selection:text-white">
        {children}
      </body>
    </html>
  );
}
