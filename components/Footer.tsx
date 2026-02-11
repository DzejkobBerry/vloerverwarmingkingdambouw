'use client';

import React from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { 
  Crown, 
  Phone, 
  Mail, 
  Clock, 
  Instagram, 
  Facebook, 
  Linkedin 
} from 'lucide-react';

export default function Footer() {
  const router = useRouter();
  const pathname = usePathname();

  const handleNavigation = (path: string, sectionId?: string) => {
    if (sectionId) {
      if (pathname === '/') {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        router.push(`/#${sectionId}`);
      }
    } else {
      router.push(path);
    }
  };

  return (
    <footer className="bg-[#0F172A] text-white py-8 relative overflow-hidden border-t border-white/5">
      <div className="max-w-[1400px] mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-4">
          
          <img 
            src="https://images-website-bloompixel.s3.eu-north-1.amazonaws.com/KingDam.bouw/Logo.KingDam.bouw1.webp" 
            alt="KingDam Bouw" 
            className="h-16 w-auto object-contain" 
          />

          <div className="hidden xl:flex flex-col items-start gap-4 border-l border-white/10 pl-6">
            <div className="flex items-center gap-6">
              {[
                { label: 'Home', action: () => handleNavigation('/') },
                { label: 'Over Ons', action: () => handleNavigation('/', 'over-ons') },
                { label: 'Projecten', action: () => handleNavigation('/gallery') },
                { label: 'Contact', action: () => handleNavigation('/contact') }
              ].map((item) => (
                <button key={item.label} onClick={item.action} className="text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-white transition-colors">
                  {item.label}
                </button>
              ))}
            </div>
            <div className="flex items-center gap-4">
              <Instagram size={18} className="text-slate-400 hover:text-[#D4AF37] transition-all cursor-pointer hover:scale-110" />
              <Facebook size={18} className="text-slate-400 hover:text-[#D4AF37] transition-all cursor-pointer hover:scale-110" />
              <Linkedin size={18} className="text-slate-400 hover:text-[#D4AF37] transition-all cursor-pointer hover:scale-110" />
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-6 lg:gap-10 border-l border-white/10 pl-6">
            <div className="flex items-center gap-3">
              <Clock size={16} className="text-[#D4AF37]" />
              <div className="text-[10px]">
                <span className="block font-black uppercase tracking-widest text-slate-400">Openingstijden</span>
                <span className="block text-white font-serif italic">Ma - Vr: 07:00 - 20:00 | Weekend: Gesloten</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-6 lg:gap-10 border-l border-white/10 pl-6">
            <div className="flex items-center gap-3">
              <Phone size={16} className="text-[#D4AF37]" />
              <span className="text-[10px] font-black uppercase tracking-widest text-white">+31 6 1393 1051</span>
            </div>
            <div className="flex items-center gap-3">
              <Mail size={16} className="text-slate-400" />
              <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">info@vloerverwarmingkingdambouw.nl</span>
            </div>
          </div>

        </div>

        <div className="mt-8 pt-6 border-t border-white/5 text-center flex flex-col md:flex-row justify-center items-center gap-2">
          <p className="text-[9px] font-black uppercase tracking-[0.4em] text-slate-600">
            © 2026 Vloerverwarming KingDam Bouw. Kwaliteit en Stabiliteit in elke meter.
          </p>
          <span className="text-slate-700 hidden md:inline">|</span>
          <a 
            href="https://bloompixel.studio" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-[9px] font-black uppercase tracking-[0.4em] text-slate-600 hover:text-[#D4AF37] transition-colors"
          >
            Website gerealiseerd door bloompixel.studio
          </a>
        </div>
      </div>
    </footer>
  );
}
