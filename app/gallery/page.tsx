'use client';

import React, { useState } from 'react';
import { LayoutGrid, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { GALLERY } from '../../constants';

export default function Gallery() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const nextImage = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % GALLERY.length);
    }
  };

  const prevImage = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + GALLERY.length) % GALLERY.length);
    }
  };

  return (
    <>
      <div className="pt-32 pb-32 min-h-screen bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-24">
            <h1 className="text-6xl font-medium text-[#0F172A] font-serif mb-6">Onze Portfolio</h1>
            <p className="text-slate-500 text-xl max-w-xl mx-auto leading-relaxed italic">"Kwaliteit en stabiliteit in elke meter."</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {GALLERY.map((item, index) => (
              <div key={item.id} onClick={() => setLightboxIndex(index)} className="group bg-white rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all border border-slate-100 cursor-zoom-in">
                <div className="relative aspect-square overflow-hidden">
                  <img src={item.url} alt={item.description} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
                  <div className="absolute inset-0 bg-[#0F172A]/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                     <div className="w-16 h-16 bg-[#D4AF37] rounded-full flex items-center justify-center text-white">
                       <LayoutGrid size={24} />
                     </div>
                  </div>
                  <div className="absolute bottom-6 left-6 bg-[#0F172A]/90 backdrop-blur-md px-5 py-2 rounded-xl text-white text-[10px] font-black uppercase tracking-widest">
                    {item.category}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {lightboxIndex !== null && (
        <div className="fixed inset-0 z-[200] bg-black/95 backdrop-blur-xl flex items-center justify-center" onClick={() => setLightboxIndex(null)}>
          <button className="absolute top-10 right-10 text-white p-4 hover:bg-white/10 rounded-full" onClick={() => setLightboxIndex(null)}><X size={32} /></button>
          <button className="absolute left-6 md:left-12 text-white p-4 hover:bg-white/10 rounded-full" onClick={prevImage}><ChevronLeft size={48} /></button>
          <div className="max-w-5xl w-full px-4 text-center" onClick={(e) => e.stopPropagation()}>
            <img src={GALLERY[lightboxIndex].url} className="max-h-[70vh] w-auto mx-auto rounded-3xl shadow-2xl border border-white/10" alt="Project" />
            <h3 className="text-white text-3xl font-serif mt-4 italic">{GALLERY[lightboxIndex].description}</h3>
          </div>
          <button className="absolute right-6 md:right-12 text-white p-4 hover:bg-white/10 rounded-full" onClick={nextImage}><ChevronRight size={48} /></button>
        </div>
      )}
    </>
  );
}
