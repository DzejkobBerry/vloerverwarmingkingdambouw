
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
  { id: 'g1', url: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=1200', category: 'Kwaliteit', description: 'Gegarandeerde Kwaliteit' },
  { id: 'g2', url: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=1200', category: 'Vakmanschap', description: 'Vakmanschap in Detail' },
  { id: 'g3', url: 'https://images.unsplash.com/photo-1621905252507-b354bcadcabc?auto=format&fit=crop&q=80&w=1200', category: 'Exclusiviteit', description: 'Koning in Comfort' },
  { id: 'g4', url: 'https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&q=80&w=1200', category: 'Duurzaamheid', description: 'Duurzaam Resultaat' },
  { id: 'g5', url: 'https://images.unsplash.com/photo-1621905251918-48416bd8575a?auto=format&fit=crop&q=80&w=1200', category: 'Innovatie', description: 'Innovatieve Technieken' },
  { id: 'g6', url: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80&w=1200', category: 'Precisie', description: 'Stabiliteit & Vertrouwen' },
  { id: 'g7', url: 'https://images.unsplash.com/photo-1518131359043-4e175050e181?auto=format&fit=crop&q=80&w=1200', category: 'Professionaliteit', description: 'Professionele Afwerking' },
  { id: 'g8', url: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1200', category: 'Comfort', description: 'Uw Comfort, Onze Zorg' },
  { id: 'g9', url: 'https://images.unsplash.com/photo-1585412727339-54e4bae3bbf9?auto=format&fit=crop&q=80&w=1200', category: 'Passie', description: 'Passie voor Warmte' },
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
];
