import { Plus_Jakarta_Sans, Cormorant_Garamond } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import GlobalUI from '@/components/GlobalUI';
import { Metadata } from 'next';

const jakarta = Plus_Jakarta_Sans({ 
  subsets: ['latin'],
  variable: '--font-jakarta',
  display: 'swap',
});

const cormorant = Cormorant_Garamond({ 
  subsets: ['latin'],
  variable: '--font-cormorant',
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
  style: ['normal', 'italic'],
});

export const metadata: Metadata = {
  title: {
    default: 'Vloerverwarming KingDam Bouw | Specialist in Vloerverwarming & Montage',
    template: '%s | Vloerverwarming KingDam Bouw'
  },
  description: 'KingDam Bouw is uw expert in vloerverwarming, frezen, montage en afwerking. Wij garanderen kwaliteit, comfort en duurzame oplossingen voor uw woning of bedrijf.',
  keywords: ['vloerverwarming', 'vloerverwarming frezen', 'vloerverwarming leggen', 'KingDam Bouw', 'vloerisolatie', 'warmtepomp', 'dekvloer', 'Nederland'],
  authors: [{ name: 'KingDam Bouw' }],
  creator: 'KingDam Bouw',
  publisher: 'KingDam Bouw',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://www.vloerverwarmingkingdambouw.nl'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Vloerverwarming KingDam Bouw | Specialist in Warmte',
    description: 'Specialisten in warme voeten en een gerust hart. Premium vloerverwarming en afwerking.',
    url: 'https://www.vloerverwarmingkingdambouw.nl',
    siteName: 'Vloerverwarming KingDam Bouw',
    images: [
      {
        url: 'https://images-website-bloompixel.s3.eu-north-1.amazonaws.com/KingDam.bouw/Home/service-man-instelling-house-heating-system-floor.webp',
        width: 1200,
        height: 630,
        alt: 'Vloerverwarming KingDam Bouw',
      },
    ],
    locale: 'nl_NL',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vloerverwarming KingDam Bouw',
    description: 'Specialist in vloerverwarming en montage.',
    images: ['https://images-website-bloompixel.s3.eu-north-1.amazonaws.com/KingDam.bouw/Home/service-man-instelling-house-heating-system-floor.webp'],
  },
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
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Vloerverwarming KingDam Bouw',
    image: 'https://images-website-bloompixel.s3.eu-north-1.amazonaws.com/KingDam.bouw/Home/service-man-instelling-house-heating-system-floor.webp',
    '@id': 'https://www.vloerverwarmingkingdambouw.nl',
    url: 'https://www.vloerverwarmingkingdambouw.nl',
    telephone: '+31613931051',
    email: 'info@vloerverwarmingkingdambouw.nl',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'NL'
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '07:00',
        closes: '20:00'
      }
    ],
    priceRange: '$$',
    description: 'Specialist in vloerverwarming, frezen en montage.'
  };

  return (
    <html lang="nl" className={`${jakarta.variable} ${cormorant.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <Navbar />
        {children}
        <GlobalUI />
        <Footer />
      </body>
    </html>
  );
}
