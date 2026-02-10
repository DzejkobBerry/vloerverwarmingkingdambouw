'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { 
  Menu, 
  X, 
  Crown, 
  ArrowRight 
} from 'lucide-react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const pathname = usePathname();
  const router = useRouter();

  const isHome = pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scroll = `${totalScroll / windowHeight}`;
      setScrollProgress(Number(scroll));
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigation = (path: string, sectionId?: string) => {
    setIsMenuOpen(false);
    
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
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${scrolled || !isHome ? 'bg-white/95 backdrop-blur-md shadow-lg py-3' : 'bg-transparent py-2'}`}>
      <div 
        className="absolute top-0 left-0 h-[3px] bg-[#D4AF37] transition-all duration-150 ease-out z-[60]"
        style={{ width: `${scrollProgress * 100}%` }}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3 cursor-pointer group" onClick={() => handleNavigation('/')}>
            {!scrolled && isHome ? (
              <img 
                src="https://images-website-bloompixel.s3.eu-north-1.amazonaws.com/KingDam.bouw/Logo.KingDam.bouw1.webp" 
                alt="KingDam Bouw" 
                className="h-14 md:h-18 w-auto object-contain transition-transform group-hover:scale-105" 
              />
            ) : (
              <div className="flex items-center gap-2">
                 <img 
                  src="https://images-website-bloompixel.s3.eu-north-1.amazonaws.com/KingDam.bouw/Logo.KingDam.bouw2.webp" 
                  alt="KingDam Bouw" 
                  className="h-12 w-auto object-contain transition-transform group-hover:scale-105" 
                />
              </div>
            )}
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {[
              { label: 'Home', action: () => handleNavigation('/') },
              { label: 'Over Ons', action: () => handleNavigation('/', 'over-ons') },
              { label: 'Diensten', action: () => handleNavigation('/', 'diensten') },
              { label: 'Projecten', action: () => handleNavigation('/gallery') },
              { label: 'Contact', action: () => handleNavigation('/contact') }
            ].map((item) => (
              <button
                key={item.label}
                onClick={item.action}
                className={`text-xs font-black uppercase tracking-widest transition-all relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-[#D4AF37] after:transition-all hover:after:w-full ${scrolled || !isHome ? 'text-slate-600' : 'text-slate-100'}`}
              >
                {item.label}
              </button>
            ))}
            <button 
              onClick={() => handleNavigation('/contact')}
              className="bg-[#D4AF37] text-white px-7 py-2.5 rounded-full text-[10px] font-black tracking-widest hover:bg-[#B8860B] transition-all shadow-xl active:scale-95 flex items-center gap-2"
            >
              OFFERTE <ArrowRight size={12} />
            </button>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className={scrolled || !isHome ? 'text-[#0F172A]' : 'text-white'}>
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 z-[100] bg-slate-900/95 backdrop-blur-xl animate-fade-in">
           {/* Close Button */}
           <div className="absolute top-6 right-6 z-50">
             <button 
               onClick={() => setIsMenuOpen(false)}
               className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white border border-white/20 hover:bg-[#D4AF37] hover:border-[#D4AF37] transition-all duration-300"
             >
               <X size={24} />
             </button>
           </div>

           {/* Menu Items */}
           <div className="h-full flex flex-col justify-center px-8 gap-8">
              {[
                { label: 'Home', action: () => handleNavigation('/'), sub: 'Welkom bij KingDam' },
                { label: 'Over Ons', action: () => handleNavigation('/', 'over-ons'), sub: 'Onze Missie & Visie' },
                { label: 'Diensten', action: () => handleNavigation('/', 'diensten'), sub: 'Wat wij doen' },
                { label: 'Projecten', action: () => handleNavigation('/gallery'), sub: 'Bekijk ons werk' },
                { label: 'Contact', action: () => handleNavigation('/contact'), sub: 'Neem contact op' }
              ].map((item, index) => (
                <button
                  key={item.label}
                  onClick={item.action}
                  className="group flex flex-col items-start text-left border-b border-white/10 pb-6 last:border-0"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <span className="text-3xl font-serif font-medium text-white mb-2 group-hover:text-[#D4AF37] transition-colors duration-300 flex items-center gap-3">
                    {item.label}
                    <ArrowRight className="w-6 h-6 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 text-[#D4AF37]" />
                  </span>
                  <span className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-500 group-hover:text-slate-300 transition-colors">
                    {item.sub}
                  </span>
                </button>
              ))}
              
              <div className="mt-8">
                 <button 
                  onClick={() => handleNavigation('/contact')}
                  className="w-full bg-[#D4AF37] text-white py-4 rounded-xl font-black text-sm tracking-widest hover:bg-white hover:text-[#0F172A] transition-all flex items-center justify-center gap-2"
                >
                  OFFERTE AANVRAGEN <ArrowRight size={16} />
                </button>
              </div>
           </div>
        </div>
      )}
    </nav>
  );
}
