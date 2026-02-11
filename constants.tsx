
import React from 'react';
import { Shield, Hammer, Zap, Home, Thermometer, Droplets } from 'lucide-react';
import { Service, Review, ProcessStep, GalleryItem } from './types';

export const COLORS = {
  gold: '#D4AF37',
  goldDark: '#B8860B',
  black: '#0F172A',
  white: '#FFFFFF',
  slate: '#64748b'
};

export const SERVICES: Service[] = [
  {
    id: '1',
    title: 'Vlechten met Netten',
    description: 'Traditionele stabiliteit voor optimale warmteverdeling op stalen matten.',
    icon: <Shield className="w-8 h-8 text-[#D4AF37]" />,
  },
  {
    id: '2',
    title: 'Montage op Tackerplaat',
    description: 'Snelle installatie met hoogwaardige isolatieplaten voor optimale isolatiewaarde.',
    icon: <Hammer className="w-8 h-8 text-[#D4AF37]" />,
  },
  {
    id: '3',
    title: 'Frezen in dekvloer',
    description: 'Perfect voor renovaties zonder de vloer te verhogen. Direct klaar voor afwerking.',
    icon: <Zap className="w-8 h-8 text-[#D4AF37]" />,
  },
  {
    id: '4',
    title: 'Fermacell Montage',
    description: 'Lichtgewicht droogbouwsysteem, ideaal voor houten vloeren en renovatieprojecten.',
    icon: <Home className="w-8 h-8 text-[#D4AF37]" />,
  },
  {
    id: '5',
    title: 'Warmtepomp Koppeling',
    description: 'Volledige integratie met moderne, gasloze warmtepompsystemen voor lage temperatuur.',
    icon: <Thermometer className="w-8 h-8 text-[#D4AF37]" />,
  },
  {
    id: '6',
    title: 'Gietvloer & Zandcement',
    description: 'Professionele afwerking voor een perfect egaal resultaat na de installatie.',
    icon: <Droplets className="w-8 h-8 text-[#D4AF37]" />,
  },
];

export const PROCESS: ProcessStep[] = [
  { number: '01', title: 'Inmeten', description: 'Technische inspectie op locatie door onze experts.' },
  { number: '02', title: 'Offerte', description: 'Transparante prijsopgave binnen 24 uur na inspectie.' },
  { number: '03', title: 'Montage', description: 'Vakkundige installatie volgens de hoogste normen.' },
  { number: '04', title: 'Controle', description: 'Druktest en volledige systeemcontrole voor oplevering.' },
];

export const GALLERY: (GalleryItem & { description: string })[] = [
  { id: 'g1', url: 'https://images-website-bloompixel.s3.eu-north-1.amazonaws.com/KingDam.bouw/Projecten/WhatsApp+Image+2026-02-04+at+16.45.43_11zon.webp', category: 'Kwaliteit', description: 'Gegarandeerd Vakmanschap' },
  { id: 'g2', url: 'https://images-website-bloompixel.s3.eu-north-1.amazonaws.com/KingDam.bouw/Projecten/WhatsApp+Image+2026-02-04+at+16.45.44+(1)_11zon.webp', category: 'Service', description: 'Uitstekende Service' },
  { id: 'g3', url: 'https://images-website-bloompixel.s3.eu-north-1.amazonaws.com/KingDam.bouw/Projecten/WhatsApp+Image+2026-02-04+at+16.45.44+(2)_11zon.webp', category: 'Montage', description: 'Professionele Installatie' },
  { id: 'g4', url: 'https://images-website-bloompixel.s3.eu-north-1.amazonaws.com/KingDam.bouw/Projecten/WhatsApp+Image+2026-02-04+at+16.45.44+(3)_11zon.webp', category: 'Afwerking', description: 'Perfecte Afwerking' },
  { id: 'g5', url: 'https://images-website-bloompixel.s3.eu-north-1.amazonaws.com/KingDam.bouw/Projecten/WhatsApp+Image+2026-02-04+at+16.45.44+(4)_11zon.webp', category: 'Materiaal', description: 'Hoogwaardige Materialen' },
  { id: 'g6', url: 'https://images-website-bloompixel.s3.eu-north-1.amazonaws.com/KingDam.bouw/Projecten/WhatsApp+Image+2026-02-04+at+16.45.44+(6)_11zon.webp', category: 'Resultaat', description: 'Duurzaam Resultaat' },
  { id: 'g7', url: 'https://images-website-bloompixel.s3.eu-north-1.amazonaws.com/KingDam.bouw/Projecten/WhatsApp+Image+2026-02-04+at+16.45.44+(7)_11zon.webp', category: 'Comfort', description: 'Optimaal Wooncomfort' },
  { id: 'g8', url: 'https://images-website-bloompixel.s3.eu-north-1.amazonaws.com/KingDam.bouw/Projecten/WhatsApp+Image+2026-02-04+at+16.45.44+(8)_11zon.webp', category: 'Precisie', description: 'Nauwkeurige Uitvoering' },
  { id: 'g9', url: 'https://images-website-bloompixel.s3.eu-north-1.amazonaws.com/KingDam.bouw/Projecten/WhatsApp+Image+2026-02-04+at+16.45.44+(9)_11zon.webp', category: 'Expertise', description: 'Jarenlange Ervaring' },
  { id: 'g10', url: 'https://images-website-bloompixel.s3.eu-north-1.amazonaws.com/KingDam.bouw/Projecten/WhatsApp+Image+2026-02-04+at+16.45.44_11zon.webp', category: 'Betrouwbaar', description: 'Afspraak is Afspraak' },
  { id: 'g11', url: 'https://images-website-bloompixel.s3.eu-north-1.amazonaws.com/KingDam.bouw/Projecten/WhatsApp+Image+2026-02-08+at+00.00.53+(1)_11zon.webp', category: 'Totaal', description: 'Complete Oplossingen' },
  { id: 'g12', url: 'https://images-website-bloompixel.s3.eu-north-1.amazonaws.com/KingDam.bouw/Projecten/WhatsApp+Image+2026-02-08+at+00.00.53+(2)_11zon.webp', category: 'Efficiëntie', description: 'Energiezuinig Verwarmen' },
  { id: 'g13', url: 'https://images-website-bloompixel.s3.eu-north-1.amazonaws.com/KingDam.bouw/Projecten/WhatsApp+Image+2026-02-08+at+00.00.53+(3)_11zon.webp', category: 'Vakwerk', description: 'Meesterschap in Bouw' },
  { id: 'g14', url: 'https://images-website-bloompixel.s3.eu-north-1.amazonaws.com/KingDam.bouw/Projecten/WhatsApp+Image+2026-02-08+at+00.00.53_11zon.webp', category: 'Zorgvuldig', description: 'Oog voor Detail' },
  { id: 'g15', url: 'https://images-website-bloompixel.s3.eu-north-1.amazonaws.com/KingDam.bouw/Projecten/WhatsApp+Image+2026-02-08+at+00.11.59+(1)_11zon.webp', category: 'Partner', description: 'Uw Betrouwbare Partner' },
  { id: 'g16', url: 'https://images-website-bloompixel.s3.eu-north-1.amazonaws.com/KingDam.bouw/Projecten/WhatsApp+Image+2026-02-08+at+00.12.00+(1)_11zon.webp', category: 'Succes', description: 'Succesvolle Realisatie' },
  { id: 'g17', url: 'https://images-website-bloompixel.s3.eu-north-1.amazonaws.com/KingDam.bouw/Projecten/WhatsApp+Image+2026-02-08+at+00.12.00+(2)_11zon.webp', category: 'Warmte', description: 'Comfortabele Warmte' },
  { id: 'g18', url: 'https://images-website-bloompixel.s3.eu-north-1.amazonaws.com/KingDam.bouw/Projecten/WhatsApp+Image+2026-02-08+at+00.12.00+(3)_11zon.webp', category: 'Techniek', description: 'Technische Perfectie' },
  { id: 'g19', url: 'https://images-website-bloompixel.s3.eu-north-1.amazonaws.com/KingDam.bouw/Projecten/WhatsApp+Image+2026-02-08+at+00.12.00+(4)_11zon.webp', category: 'Esthetiek', description: 'Strakke Lijnen' },
  { id: 'g20', url: 'https://images-website-bloompixel.s3.eu-north-1.amazonaws.com/KingDam.bouw/Projecten/WhatsApp+Image+2026-02-08+at+00.12.00+(5)_11zon.webp', category: 'Tevredenheid', description: 'Klanttevredenheid Garantie' },
  { id: 'g21', url: 'https://images-website-bloompixel.s3.eu-north-1.amazonaws.com/KingDam.bouw/Projecten/WhatsApp+Image+2026-02-08+at+00.12.00+(6)_11zon.webp', category: 'Wonen', description: 'Modern Wooncomfort' },
  { id: 'g22', url: 'https://images-website-bloompixel.s3.eu-north-1.amazonaws.com/KingDam.bouw/Projecten/WhatsApp+Image+2026-02-08+at+00.12.00_11zon.webp', category: 'Duurzaam', description: 'Toekomstbestendig' },
  { id: 'g23', url: 'https://images-website-bloompixel.s3.eu-north-1.amazonaws.com/KingDam.bouw/Projecten/WhatsApp+Image+2026-02-08+at+00.12.01_11zon.webp', category: 'Snelheid', description: 'Snelle & Nette Service' },
  { id: 'g24', url: 'https://images-website-bloompixel.s3.eu-north-1.amazonaws.com/KingDam.bouw/Projecten/WhatsApp+Image+2026-02-08+at+00.15.26_11zon.webp', category: 'Netheid', description: 'Schoon Ogeleverd' },
  { id: 'g25', url: 'https://images-website-bloompixel.s3.eu-north-1.amazonaws.com/KingDam.bouw/Projecten/WhatsApp+Image+2026-02-08+at+00.16.48_11zon.webp', category: 'Certificaat', description: 'Gecertificeerd Vakwerk' },
  { id: 'g26', url: 'https://images-website-bloompixel.s3.eu-north-1.amazonaws.com/KingDam.bouw/Projecten/WhatsApp+Image+2026-02-08+at+00.18.36_11zon.webp', category: 'Renovatie', description: 'Specialist in Renovatie' },
  { id: 'g27', url: 'https://images-website-bloompixel.s3.eu-north-1.amazonaws.com/KingDam.bouw/Projecten/WhatsApp+Image+2026-02-08+at+00.19.08_11zon.webp', category: 'Innovatie', description: 'Nieuwste Technieken' },
  { id: 'g28', url: 'https://images-website-bloompixel.s3.eu-north-1.amazonaws.com/KingDam.bouw/Projecten/WhatsApp+Image+2026-02-09+at+12.55.34+(1)_11zon.webp', category: 'Flexibel', description: 'Oplossingen op Maat' },
  { id: 'g29', url: 'https://images-website-bloompixel.s3.eu-north-1.amazonaws.com/KingDam.bouw/Projecten/WhatsApp+Image+2026-02-09+at+12.55.34+(2)_11zon.webp', category: 'Vloer', description: 'Egaal & Strak' },
  { id: 'g30', url: 'https://images-website-bloompixel.s3.eu-north-1.amazonaws.com/KingDam.bouw/Projecten/WhatsApp+Image+2026-02-09+at+12.55.34+(3)_11zon.webp', category: 'Plezier', description: 'Jarenlang Woonplezier' },
  { id: 'g31', url: 'https://images-website-bloompixel.s3.eu-north-1.amazonaws.com/KingDam.bouw/Projecten/WhatsApp+Image+2026-02-09+at+12.55.34_11zon.webp', category: 'Klant', description: 'Tevreden Klanten' },
  { id: 'g32', url: 'https://images-website-bloompixel.s3.eu-north-1.amazonaws.com/KingDam.bouw/Projecten/WhatsApp+Image+2026-02-09+at+12.55.35_11zon.webp', category: 'KingDam', description: 'KingDam Kwaliteit' },
];

export const VIDEOS = [
  { id: 'v1', url: 'ElDaTAueHHo', category: 'Impressie', description: 'KingDam in Actie', thumbnail: 'https://images-website-bloompixel.s3.eu-north-1.amazonaws.com/KingDam.bouw/Home/result-back-view-three-men-protective-helmets-holding-hands-his-waist-standing-construction-site-loo.webp' },
  { id: 'v2', url: 'ElDaTAueHHo', category: 'Montage', description: 'Vloerverwarming Frezen', thumbnail: 'https://images-website-bloompixel.s3.eu-north-1.amazonaws.com/KingDam.bouw/Home/service-man-instelling-house-heating-system-floor.webp' },
  { id: 'v3', url: 'ElDaTAueHHo', category: 'Afwerking', description: 'Eindresultaat', thumbnail: 'https://images-website-bloompixel.s3.eu-north-1.amazonaws.com/KingDam.bouw/Home/service-man-instelling-house-heating-system-floor-_1_.webp' },
  { id: 'v4', url: 'ElDaTAueHHo', category: 'Projecten', description: 'Grote Projecten', thumbnail: 'https://images-website-bloompixel.s3.eu-north-1.amazonaws.com/KingDam.bouw/Home/result-back-view-three-men-protective-helmets-holding-hands-his-waist-standing-construction-site-loo.webp' },
  { id: 'v5', url: 'ElDaTAueHHo', category: 'Team', description: 'Ons Team', thumbnail: 'https://images-website-bloompixel.s3.eu-north-1.amazonaws.com/KingDam.bouw/Home/service-man-instelling-house-heating-system-floor.webp' },
];

export const FAQS = [
  { q: "Hoe lang duurt de installatie?", a: "Een gemiddelde woning van 60m2 installeren wij doorgaans binnen één werkdag." },
  { q: "Bieden jullie garantie?", a: "Zeker, wij bieden 10 jaar garantie op de installatie en 50 jaar op de kwaliteit van de buizen." },
  { q: "Is vloerverwarming mogelijk bij renovatie?", a: "Ja, door middel van frezen of droogbouwsystemen kunnen wij in bijna elke situatie vloerverwarming plaatsen." },
];

export const REVIEWS: Review[] = [
  { id: '1', name: 'Jan de Vries', rating: 5, text: 'Vakwerk! Snel gefreesd en alles netjes achtergelaten.', date: 'Januari 2024' },
  { id: '2', name: 'M. Bakker', rating: 5, text: 'Zeer tevreden over de Fermacell montage. Top communicatie.', date: 'Maart 2024' },
  { id: '3', name: 'R. Simons', rating: 5, text: 'Professioneel team met passie voor hun vak.', date: 'Februari 2024' },
  { id: '4', name: 'S. Jansen', rating: 5, text: 'Geweldige service en eerlijk advies. De vloer is heerlijk warm.', date: 'April 2024' },
  { id: '5', name: 'P. van der Meer', rating: 5, text: 'Afspraken nagekomen en keurig gewerkt. Een aanrader!', date: 'Mei 2024' },
  { id: '6', name: 'L. Koster', rating: 5, text: 'Vriendelijke monteurs die weten wat ze doen. Top resultaat.', date: 'Juni 2024' },
  { id: '7', name: 'K. Willems', rating: 5, text: 'Van offerte tot oplevering verliep alles vlekkeloos.', date: 'Juli 2024' },
];
