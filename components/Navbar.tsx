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
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-xl py-4 px-4 flex flex-col gap-4">
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
                className="text-left text-slate-800 font-bold uppercase tracking-widest py-2 border-b border-slate-100 last:border-0"
              >
                {item.label}
              </button>
            ))}
        </div>
      )}
    </nav>
  );
}
