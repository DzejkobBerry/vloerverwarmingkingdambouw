import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Neem contact op met KingDam Bouw voor een vrijblijvende offerte of advies over vloerverwarming. Wij staan klaar voor al uw vragen.',
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
