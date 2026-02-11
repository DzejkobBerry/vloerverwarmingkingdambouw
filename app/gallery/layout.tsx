import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Galerij',
  description: 'Bekijk onze projecten en resultaten. Foto\'s van vloerverwarming installaties, frezen en professionele afwerking door KingDam Bouw.',
};

export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
