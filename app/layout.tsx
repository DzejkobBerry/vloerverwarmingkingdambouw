import { Plus_Jakarta_Sans, Cormorant_Garamond } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import GlobalUI from '@/components/GlobalUI';

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

export const metadata = {
  title: 'Vloerverwarming KingDam Bouw | Uw Specialist in Warmte',
  description: 'Specialisten in warme voeten en een gerust hart. Premium vloerverwarming.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="nl" className={`${jakarta.variable} ${cormorant.variable}`}>
      <body>
        <Navbar />
        {children}
        <GlobalUI />
        <Footer />
      </body>
    </html>
  );
}
