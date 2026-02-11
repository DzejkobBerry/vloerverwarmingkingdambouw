'use client';

import React, { useState } from 'react';
import { LayoutGrid, Play, Image as ImageIcon, Film, X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';
import { GALLERY, VIDEOS } from '../../constants';

export default function Gallery() {
  const [activeTab, setActiveTab] = useState<'photos' | 'videos'>('photos');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // Function to determine grid span based on index
  const getGridClass = (index: number) => {
    // Mobile: always 1 col (handled by grid-cols-1)
    // Desktop (md+):
    // Pattern: Big, Small, Small, Big, Small, Small...
    const pattern = index % 6;
    if (pattern === 0) return 'md:col-span-2 md:row-span-2';
    if (pattern === 3) return 'md:col-span-2 md:row-span-1';
    if (pattern === 4) return 'md:col-span-1 md:row-span-2';
    return 'md:col-span-1 md:row-span-1';
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % GALLERY.length);
    }
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + GALLERY.length) % GALLERY.length);
    }
  };

  return (
    <>
      {lightboxIndex !== null && (
        <div 
          className="fixed inset-0 z-50 bg-[#0F172A]/95 backdrop-blur-xl flex items-center justify-center p-4 md:p-8 animate-fade-in"
          onClick={() => setLightboxIndex(null)}
        >
          <button 
            onClick={() => setLightboxIndex(null)}
            className="absolute top-4 right-4 md:top-8 md:right-8 w-12 h-12 rounded-full bg-white/10 hover:bg-[#D4AF37] text-white flex items-center justify-center transition-all duration-300 group z-50"
          >
            <X size={24} className="group-hover:rotate-90 transition-transform duration-300" />
          </button>

          <button 
            onClick={handlePrev}
            className="absolute left-4 md:left-8 w-12 h-12 md:w-16 md:h-16 rounded-full bg-white/10 hover:bg-[#D4AF37] text-white flex items-center justify-center transition-all duration-300 group z-50"
          >
            <ChevronLeft size={28} className="group-hover:-translate-x-1 transition-transform" />
          </button>

          <button 
            onClick={handleNext}
            className="absolute right-4 md:right-8 w-12 h-12 md:w-16 md:h-16 rounded-full bg-white/10 hover:bg-[#D4AF37] text-white flex items-center justify-center transition-all duration-300 group z-50"
          >
            <ChevronRight size={28} className="group-hover:translate-x-1 transition-transform" />
          </button>

          <div 
            className="relative max-w-7xl max-h-[85vh] rounded-[2rem] overflow-hidden shadow-2xl shadow-black/50"
            onClick={(e) => e.stopPropagation()}
          >
            <img 
              src={GALLERY[lightboxIndex].url} 
              alt={GALLERY[lightboxIndex].description} 
              className="w-full h-full max-h-[85vh] object-contain"
            />
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 bg-gradient-to-t from-black/90 to-transparent">
              <span className="text-[#D4AF37] font-black uppercase tracking-widest text-xs md:text-sm block mb-2">
                {GALLERY[lightboxIndex].category}
              </span>
              <p className="text-white font-serif text-xl md:text-3xl">
                {GALLERY[lightboxIndex].description}
              </p>
            </div>
          </div>
        </div>
      )}

      <div className="pt-24 pb-20 md:pt-32 md:pb-32 min-h-screen bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="relative text-center mb-12 md:mb-24">
            {/* Decorative Background Blob */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[200px] md:w-[600px] md:h-[400px] bg-[#D4AF37]/5 rounded-full blur-3xl -z-10" />

            {/* Badge */}
            <div className="inline-block mb-6 animate-fade-in-up">
              <span className="px-4 py-1.5 rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/5 backdrop-blur-sm text-[#D4AF37] text-[10px] font-black tracking-[0.3em] uppercase">
                Exclusief Vakmanschap
              </span>
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-medium text-[#0F172A] font-serif mb-8 tracking-tight">
              Onze <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-br from-[#D4AF37] to-[#8a701f]">
                Portfolio
                <svg className="absolute -bottom-2 w-full h-3 text-[#D4AF37] opacity-40" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="2" fill="none" />
                </svg>
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-slate-500 text-base md:text-xl max-w-2xl mx-auto leading-relaxed mb-12 font-light">
              Een visuele reis door onze projecten, waar techniek en esthetiek samenkomen.
              <br/>
              <span className="text-[#D4AF37] font-serif italic mt-2 block">"Kwaliteit en stabiliteit in elke meter."</span>
            </p>
            
            {/* Toggle Switch */}
            <div className="inline-flex bg-white/80 backdrop-blur-md p-2 rounded-full shadow-2xl shadow-[#D4AF37]/10 border border-[#D4AF37]/20 relative z-10 transition-transform hover:scale-105 duration-300">
              <button 
                onClick={() => setActiveTab('photos')}
                className={`px-6 py-3 md:px-8 md:py-4 rounded-full text-xs md:text-sm font-black tracking-widest uppercase transition-all duration-300 flex items-center gap-2 md:gap-3 ${
                  activeTab === 'photos' 
                    ? 'bg-gradient-to-r from-[#D4AF37] to-[#b59230] text-white shadow-lg shadow-[#D4AF37]/30 scale-105' 
                    : 'text-slate-400 hover:text-[#0F172A] hover:bg-[#D4AF37]/5'
                }`}
              >
                <ImageIcon size={16} className={`md:w-[18px] md:h-[18px] ${activeTab === 'photos' ? 'animate-pulse' : ''}`} />
                Foto's
              </button>
              <button 
                onClick={() => setActiveTab('videos')}
                className={`px-6 py-3 md:px-8 md:py-4 rounded-full text-xs md:text-sm font-black tracking-widest uppercase transition-all duration-300 flex items-center gap-2 md:gap-3 ${
                  activeTab === 'videos' 
                    ? 'bg-gradient-to-r from-[#D4AF37] to-[#b59230] text-white shadow-lg shadow-[#D4AF37]/30 scale-105' 
                    : 'text-slate-400 hover:text-[#0F172A] hover:bg-[#D4AF37]/5'
                }`}
              >
                <Film size={16} className={`md:w-[18px] md:h-[18px] ${activeTab === 'videos' ? 'animate-pulse' : ''}`} />
                Video's
              </button>
            </div>
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 auto-rows-[250px] md:auto-rows-[300px] grid-flow-dense">
            {activeTab === 'photos' ? (
              GALLERY.map((item, index) => (
                <div 
                  key={item.id} 
                  onClick={() => setLightboxIndex(index)} 
                  className={`group relative bg-white rounded-[2rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all border border-slate-100 cursor-zoom-in ${getGridClass(index)}`}
                >
                  <img 
                    src={item.url} 
                    alt={item.description} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" 
                  />
                  {/* Overlay with zoom hint */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center">
                    <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 flex flex-col items-center">
                      <div className="w-12 h-12 rounded-full bg-[#D4AF37]/90 flex items-center justify-center mb-3 shadow-lg">
                        <ZoomIn className="w-6 h-6 text-white" />
                      </div>
                      <span className="text-white font-medium tracking-wide text-sm uppercase">Vergroten</span>
                    </div>
                  </div>

                  {/* Content Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                    <span className="text-[#D4AF37] text-xs font-bold uppercase tracking-wider mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">
                      {item.category}
                    </span>
                    <p className="text-white font-serif text-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-100">
                      {item.description}
                    </p>
                  </div>

                  {/* Always visible hint (desktop & mobile) */}
                <div className="absolute top-4 right-4 bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-full flex items-center gap-2 border border-white/10 transition-transform duration-300 group-hover:scale-105 z-20">
                  <ZoomIn className="w-3.5 h-3.5 text-white/90" />
                  <span className="text-white/90 text-[10px] font-bold uppercase tracking-widest">Vergroten</span>
                </div>
                </div>
              ))
            ) : (
              VIDEOS.map((item, index) => (
                <div 
                  key={item.id} 
                  className={`group relative bg-slate-900 rounded-[2rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all border border-slate-800 cursor-default ${getGridClass(index)}`}
                >
                  <img 
                    src={item.thumbnail} 
                    alt={item.description} 
                    className="w-full h-full object-cover grayscale opacity-40 group-hover:opacity-30 transition-all duration-1000" 
                  />
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center z-10">
                     <div className="w-16 h-16 mb-4 bg-white/5 backdrop-blur-md border border-white/10 rounded-full flex items-center justify-center text-slate-400 group-hover:text-[#D4AF37] group-hover:border-[#D4AF37]/50 transition-all duration-500">
                       <Film size={28} />
                     </div>
                     <div className="bg-[#0F172A]/80 backdrop-blur-sm px-6 py-3 rounded-xl border border-white/10 group-hover:border-[#D4AF37]/30 transition-colors">
                       <span className="text-[#D4AF37] text-[10px] font-black uppercase tracking-[0.2em] block mb-1">Binnenkort</span>
                       <p className="text-white font-serif text-sm">Videomateriaal volgt spoedig</p>
                     </div>
                  </div>
                  <div className="absolute bottom-6 left-6 right-6 opacity-40 group-hover:opacity-100 transition-opacity">
                    <div className="bg-[#0F172A]/80 backdrop-blur-md p-4 rounded-2xl border border-white/10">
                      <span className="text-slate-500 text-[10px] font-black uppercase tracking-widest block mb-1">{item.category}</span>
                      <p className="text-slate-300 font-serif text-lg">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </>
  );
}