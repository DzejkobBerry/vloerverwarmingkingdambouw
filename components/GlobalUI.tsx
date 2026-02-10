'use client';

import React, { useState, useEffect } from 'react';
import { MessageCircle, ArrowUp } from 'lucide-react';

export default function GlobalUI() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <div 
        className={`fixed right-8 z-[100] transition-all duration-500 ease-in-out ${
          showScrollTop ? 'bottom-28' : 'bottom-8'
        }`}
      >
        <a 
          href="https://wa.me/31612345678" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="bg-[#10B981] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center justify-center group"
        >
          <MessageCircle size={26} />
          <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs group-hover:ml-3 transition-all duration-500 font-bold text-sm">WhatsApp</span>
        </a>
      </div>

      <div 
        className={`fixed bottom-8 right-8 z-[90] transition-all duration-500 ease-in-out ${
          showScrollTop ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0 pointer-events-none'
        }`}
      >
        <button 
          onClick={scrollToTop} 
          className="bg-white text-[#0F172A] p-3 rounded-full shadow-2xl hover:scale-110 transition-transform border border-slate-100 flex items-center justify-center"
        >
          <ArrowUp size={24} />
        </button>
      </div>
    </>
  );
}
