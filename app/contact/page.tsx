'use client';

import React from 'react';
import { 
  Phone, 
  Mail, 
  Clock, 
  Building2, 
  MapPin, 
  User, 
  FileText, 
  Send 
} from 'lucide-react';

export default function Contact() {
  return (
    <div className="pt-32 pb-32 min-h-screen bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-24 text-center">
          <span className="text-[#D4AF37] font-black tracking-[0.4em] uppercase text-xs mb-4 block animate-fade-in">CONTACTEER ONS</span>
          <h1 className="text-6xl md:text-7xl font-medium text-[#0F172A] font-serif mb-8 leading-tight italic animate-fade-in text-center">Laten we uw <span className="text-[#D4AF37]">comfort</span> bespreken.</h1>
          <p className="text-slate-500 text-xl leading-relaxed max-w-3xl mx-auto animate-fade-in">Klaar om de overstap naar premium vloerverwarming te maken? Vul het formulier in of neem direct contact op.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start text-left">
          <div className="lg:col-span-5 space-y-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
               <div className="bg-white p-8 rounded-[2.5rem] shadow-xl border border-white transition-all group">
                  <div className="w-12 h-12 bg-[#D4AF37]/10 rounded-2xl flex items-center justify-center text-[#D4AF37] mb-6">
                    <Phone size={20} />
                  </div>
                  <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">Bel ons</p>
                  <p className="text-xl font-bold text-[#0F172A]">+31 6 1234 5678</p>
               </div>
               <div className="bg-white p-8 rounded-[2.5rem] shadow-xl border border-white transition-all group">
                  <div className="w-12 h-12 bg-[#D4AF37]/10 rounded-2xl flex items-center justify-center text-[#D4AF37] mb-6">
                    <Mail size={20} />
                  </div>
                  <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">E-mail ons</p>
                  <p className="text-lg font-bold text-[#0F172A] break-all">info@kingdambouw.nl</p>
               </div>
            </div>

            <div className="bg-[#0F172A] text-white p-10 rounded-[3rem] shadow-2xl relative overflow-hidden">
               <div className="flex items-center gap-4 mb-8">
                  <Clock className="text-[#D4AF37]" size={24} />
                  <h3 className="text-2xl font-medium font-serif italic">Openingstijden</h3>
               </div>
               <div className="space-y-4">
                  {[{ day: "Maandag - Vrijdag", time: "07:00 - 20:00" }, { day: "Zaterdag", time: "Gesloten" }, { day: "Zondag", time: "Gesloten" }].map((item, i) => (
                    <div key={i} className="flex justify-between items-center border-b border-white/5 pb-3">
                      <span className="text-slate-400 font-bold text-sm uppercase tracking-widest">{item.day}</span>
                      <span className="text-white font-serif italic">{item.time}</span>
                    </div>
                  ))}
               </div>
            </div>

            <div className="bg-white p-10 rounded-[3rem] shadow-xl border border-white">
               <h3 className="text-2xl font-medium text-[#0F172A] font-serif italic mb-8">Bedrijfsgegevens</h3>
               <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-slate-50 p-3 rounded-xl text-slate-400"><Building2 size={20}/></div>
                    <div>
                      <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">Naam</p>
                      <p className="text-md font-bold text-[#0F172A]">KingDam Bouw V.O.F.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-slate-50 p-3 rounded-xl text-slate-400"><MapPin size={20}/></div>
                    <div>
                      <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">Adres</p>
                      <p className="text-md font-bold text-[#0F172A]">Hoofdstraat 123, 1011 AB Amsterdam</p>
                    </div>
                  </div>
               </div>
            </div>
          </div>

          <div className="lg:col-span-7 bg-white p-12 lg:p-20 rounded-[4rem] shadow-2xl border border-white">
            <h3 className="text-4xl font-medium text-[#0F172A] mb-4 font-serif italic">Stuur ons een bericht</h3>
            <p className="text-slate-500 mb-12 text-lg italic leading-relaxed">Vul de onderstaande velden in en wij nemen binnen 4 uur contact met u op.</p>
            <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-slate-400"><User size={12}/> Volledige Naam</label>
                  <input type="text" className="w-full bg-slate-50 border-transparent rounded-2xl p-6 focus:ring-2 focus:ring-[#D4AF37] focus:bg-white text-[#0F172A] transition-all outline-none border border-slate-100" placeholder="Jan de Vries" />
                </div>
                <div className="space-y-3">
                  <label className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-slate-400"><Phone size={12}/> Telefoonnummer</label>
                  <input type="tel" className="w-full bg-slate-50 border-transparent rounded-2xl p-6 focus:ring-2 focus:ring-[#D4AF37] focus:bg-white text-[#0F172A] transition-all outline-none border border-slate-100" placeholder="06 1234 5678" />
                </div>
              </div>
              <div className="space-y-3">
                <label className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-slate-400"><Mail size={12}/> E-mailadres</label>
                <input type="email" className="w-full bg-slate-50 border-transparent rounded-2xl p-6 focus:ring-2 focus:ring-[#D4AF37] focus:bg-white text-[#0F172A] transition-all outline-none border border-slate-100" placeholder="naam@domein.nl" />
              </div>
              <div className="space-y-3">
                <label className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-slate-400"><FileText size={12}/> Bericht</label>
                <textarea rows={6} className="w-full bg-slate-50 border-transparent rounded-2xl p-6 focus:ring-2 focus:ring-[#D4AF37] focus:bg-white text-[#0F172A] transition-all outline-none border border-slate-100" placeholder="Beschrijf uw project..."></textarea>
              </div>
              <button className="w-full bg-[#D4AF37] text-white py-8 rounded-[2rem] font-black text-xl hover:bg-[#B8860B] transition-all shadow-2xl flex items-center justify-center gap-4 active:scale-95 group">
                BERICHT VERZENDEN <Send size={24} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
