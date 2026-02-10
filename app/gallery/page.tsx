'use client';

import React, { useState } from 'react';
import { LayoutGrid, Play, Image as ImageIcon, Film } from 'lucide-react';
import { GALLERY, VIDEOS } from '../../constants';

export default function Gallery() {
  const [activeTab, setActiveTab] = useState<'photos' | 'videos'>('photos');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // Function to determine grid span based on index
  const getGridClass = (index: number) => {
    // Pattern: Big, Small, Small, Big, Small, Small...
    // 0: col-span-2 row-span-2 (Big)
    // 1: col-span-1 row-span-1 (Small)
    // 2: col-span-1 row-span-1 (Small)
    // 3: col-span-2 row-span-2 (Big)
    // ...
    // Or a more random-looking pattern:
    // 0: Big (2x2)
    // 1: Tall (1x2)
    // 2: Small (1x1)
    // 3: Wide (2x1)
    // 4: Small (1x1)
    
    // Simple Masonry-like pattern
    const pattern = index % 6;
    if (pattern === 0) return 'md:col-span-2 md:row-span-2';
    if (pattern === 3) return 'md:col-span-2 md:row-span-1';
    if (pattern === 4) return 'md:col-span-1 md:row-span-2';
    return 'md:col-span-1 md:row-span-1';
  };

  return (
    <>
      <div className="pt-32 pb-32 min-h-screen bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="relative text-center mb-24">
            {/* Decorative Background Blob */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[#D4AF37]/5 rounded-full blur-3xl -z-10" />

            {/* Badge */}
            <div className="inline-block mb-6 animate-fade-in-up">
              <span className="px-4 py-1.5 rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/5 backdrop-blur-sm text-[#D4AF37] text-[10px] font-black tracking-[0.3em] uppercase">
                Exclusief Vakmanschap
              </span>
            </div>

            {/* Title */}
            <h1 className="text-6xl md:text-7xl font-medium text-[#0F172A] font-serif mb-8 tracking-tight">
              Onze <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-br from-[#D4AF37] to-[#8a701f]">
                Portfolio
                <svg className="absolute -bottom-2 w-full h-3 text-[#D4AF37] opacity-40" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="2" fill="none" />
                </svg>
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-slate-500 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-12 font-light">
              Een visuele reis door onze projecten, waar techniek en esthetiek samenkomen.
              <br/>
              <span className="text-[#D4AF37] font-serif italic mt-2 block">"Kwaliteit en stabiliteit in elke meter."</span>
            </p>
            
            {/* Toggle Switch */}
            <div className="inline-flex bg-white/80 backdrop-blur-md p-2 rounded-full shadow-2xl shadow-[#D4AF37]/10 border border-[#D4AF37]/20 relative z-10 transition-transform hover:scale-105 duration-300">
              <button 
                onClick={() => setActiveTab('photos')}
                className={`px-8 py-4 rounded-full text-xs md:text-sm font-black tracking-widest uppercase transition-all duration-300 flex items-center gap-3 ${
                  activeTab === 'photos' 
                    ? 'bg-gradient-to-r from-[#D4AF37] to-[#b59230] text-white shadow-lg shadow-[#D4AF37]/30 scale-105' 
                    : 'text-slate-400 hover:text-[#0F172A] hover:bg-[#D4AF37]/5'
                }`}
              >
                <ImageIcon size={18} className={activeTab === 'photos' ? 'animate-pulse' : ''} />
                Foto's
              </button>
              <button 
                onClick={() => setActiveTab('videos')}
                className={`px-8 py-4 rounded-full text-xs md:text-sm font-black tracking-widest uppercase transition-all duration-300 flex items-center gap-3 ${
                  activeTab === 'videos' 
                    ? 'bg-gradient-to-r from-[#D4AF37] to-[#b59230] text-white shadow-lg shadow-[#D4AF37]/30 scale-105' 
                    : 'text-slate-400 hover:text-[#0F172A] hover:bg-[#D4AF37]/5'
                }`}
              >
                <Film size={18} className={activeTab === 'videos' ? 'animate-pulse' : ''} />
                Video's
              </button>
            </div>
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px] grid-flow-dense">
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
                  <div className="absolute inset-0 bg-[#0F172A]/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                     <div className="w-16 h-16 bg-[#D4AF37] rounded-full flex items-center justify-center text-white scale-0 group-hover:scale-100 transition-transform duration-300">
                       <LayoutGrid size={24} />
                     </div>
                  </div>
                  <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-[#0F172A]/90 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                    <span className="text-[#D4AF37] text-[10px] font-black uppercase tracking-widest block mb-1">{item.category}</span>
                    <p className="text-white font-serif text-lg">{item.description}</p>
                  </div>
                </div>
              ))
            ) : (
              VIDEOS.map((item, index) => (
                <div 
                  key={item.id} 
                  className={`group relative bg-slate-900 rounded-[2rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all border border-slate-800 cursor-pointer ${getGridClass(index)}`}
                >
                  <img 
                    src={item.thumbnail} 
                    alt={item.description} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 opacity-80 group-hover:opacity-60" 
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                     <div className="w-20 h-20 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center text-white group-hover:bg-[#D4AF37] group-hover:border-[#D4AF37] group-hover:scale-110 transition-all duration-500 shadow-xl">
                       <Play size={32} fill="currentColor" className="ml-1" />
                     </div>
                  </div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="bg-[#0F172A]/80 backdrop-blur-md p-4 rounded-2xl border border-white/10">
                      <span className="text-[#D4AF37] text-[10px] font-black uppercase tracking-widest block mb-1">{item.category}</span>
                      <p className="text-white font-serif text-lg">{item.description}</p>
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