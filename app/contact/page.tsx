'use client';

import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  Clock, 
  MapPin, 
  User, 
  MessageSquare, 
  Send,
  ArrowRight,
  CheckCircle,
  X,
  FileText
} from 'lucide-react';

export default function Contact() {
  const [showModal, setShowModal] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      const res = await fetch('https://www.bloompixel.studio/api/forms/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': process.env.NEXT_PUBLIC_API_KEY || 'bp_live_bgiyvtywjuwf8m9odqmrbka8'
        },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error('Er is een fout opgetreden bij het verzenden van het bericht.');

      setShowModal(true);
      setFormData({
        name: '',
        phone: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (err) {
      console.error(err);
      setError('Er is iets misgegaan. Probeer het later opnieuw of neem telefonisch contact op.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="relative min-h-screen bg-slate-900 overflow-hidden">
      {/* Success Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
          <div className="bg-white rounded-[2rem] p-8 md:p-12 max-w-lg w-full relative shadow-2xl animate-scale-up">
            <button 
              onClick={() => setShowModal(false)}
              className="absolute top-6 right-6 text-slate-400 hover:text-[#0F172A] transition-colors"
            >
              <X size={24} />
            </button>
            <div className="flex flex-col items-center text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6 text-green-600">
                <CheckCircle size={40} />
              </div>
              <h3 className="text-2xl md:text-3xl font-serif font-medium text-[#0F172A] mb-4">
                Bedankt voor uw bericht!
              </h3>
              <p className="text-slate-500 text-lg leading-relaxed mb-8">
                We hebben uw bericht in goede orde ontvangen. Ons team neemt zo spoedig mogelijk contact met u op.
              </p>
              <button 
                onClick={() => setShowModal(false)}
                className="bg-[#D4AF37] text-white px-10 py-4 rounded-xl font-bold tracking-wider hover:bg-[#B8860B] transition-all shadow-xl shadow-[#D4AF37]/20 w-full"
              >
                SLUITEN
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images-website-bloompixel.s3.eu-north-1.amazonaws.com/KingDam.bouw/Home/service-man-instelling-house-heating-system-floor.webp" 
          alt="Background" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0F172A] via-[#0F172A]/95 to-[#0F172A]"></div>
      </div>

      {/* Decorative Blobs */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#D4AF37]/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 z-0 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#D4AF37]/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/4 z-0 pointer-events-none" />

      <div className="relative z-10 pt-24 pb-16 md:pt-32 md:pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center mb-12 md:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/20 backdrop-blur-sm mb-6 animate-fade-in-up">
            <span className="w-2 h-2 rounded-full bg-[#D4AF37] animate-pulse"></span>
            <span className="text-[#D4AF37] text-xs font-bold tracking-[0.2em] uppercase">Neem Contact Op</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-medium text-white font-serif mb-6 leading-tight animate-fade-in-up delay-100">
            Start uw <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#F3E5AB]">Comfort Project</span>
          </h1>
          <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed font-light animate-fade-in-up delay-200">
            Heeft u vragen of wilt u een vrijblijvende offerte? Ons team van experts staat klaar om u te adviseren over de perfecte vloerverwarming.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Contact Information Column */}
          <div className="lg:col-span-5 space-y-6 md:space-y-8 animate-fade-in-left delay-300">
            {/* Info Cards */}
            <div className="grid gap-6">
              <div className="group bg-white/5 backdrop-blur-md p-6 md:p-8 rounded-[2rem] border border-white/10 hover:border-[#D4AF37]/50 transition-all duration-500 hover:bg-white/10">
                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 rounded-2xl bg-[#D4AF37]/20 flex items-center justify-center text-[#D4AF37] group-hover:scale-110 transition-transform duration-500 border border-[#D4AF37]/20 shrink-0">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h3 className="text-white font-serif text-xl mb-1">Telefonisch</h3>
                    <p className="text-slate-400 text-sm mb-3">Direct contact met een expert</p>
                    <a href="tel:+31613931051" className="text-lg md:text-xl font-bold text-white hover:text-[#D4AF37] transition-colors flex items-center gap-2 group-hover:translate-x-2 duration-300">
                      +31 6 1393 1051 <ArrowRight size={16} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                  </div>
                </div>
              </div>

              <div className="group bg-white/5 backdrop-blur-md p-6 md:p-8 rounded-[2rem] border border-white/10 hover:border-[#D4AF37]/50 transition-all duration-500 hover:bg-white/10">
                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 rounded-2xl bg-[#D4AF37]/20 flex items-center justify-center text-[#D4AF37] group-hover:scale-110 transition-transform duration-500 border border-[#D4AF37]/20 shrink-0">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h3 className="text-white font-serif text-xl mb-1">E-mail</h3>
                    <p className="text-slate-400 text-sm mb-3">Reactie binnen 24 uur</p>
                    <a href="mailto:info@vloerverwarmingkingdambouw.nl" className="text-sm md:text-base font-bold text-white hover:text-[#D4AF37] transition-colors flex items-center gap-2 group-hover:translate-x-2 duration-300">
                      info@vloerverwarmingkingdambouw.nl <ArrowRight size={16} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-[#D4AF37] p-6 md:p-8 rounded-[2rem] shadow-2xl shadow-[#D4AF37]/20 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-700"></div>
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-6">
                    <Clock className="text-white" size={28} />
                    <h3 className="text-2xl font-serif font-medium text-[#0F172A]">Openingstijden</h3>
                  </div>
                  <div className="space-y-4 text-[#0F172A]">
                    <div className="flex justify-between items-center border-b border-[#0F172A]/10 pb-2">
                      <span className="font-bold text-xs uppercase tracking-widest opacity-70">Maandag</span>
                      <span className="font-serif text-lg">07:00 - 20:00</span>
                    </div>
                    <div className="flex justify-between items-center border-b border-[#0F172A]/10 pb-2">
                      <span className="font-bold text-xs uppercase tracking-widest opacity-70">Dinsdag</span>
                      <span className="font-serif text-lg">07:00 - 20:00</span>
                    </div>
                    <div className="flex justify-between items-center border-b border-[#0F172A]/10 pb-2">
                      <span className="font-bold text-xs uppercase tracking-widest opacity-70">Woensdag</span>
                      <span className="font-serif text-lg">07:00 - 20:00</span>
                    </div>
                    <div className="flex justify-between items-center border-b border-[#0F172A]/10 pb-2">
                      <span className="font-bold text-xs uppercase tracking-widest opacity-70">Donderdag</span>
                      <span className="font-serif text-lg">07:00 - 20:00</span>
                    </div>
                    <div className="flex justify-between items-center border-b border-[#0F172A]/10 pb-2">
                      <span className="font-bold text-xs uppercase tracking-widest opacity-70">Vrijdag</span>
                      <span className="font-serif text-lg">07:00 - 20:00</span>
                    </div>
                    <div className="flex justify-between items-center border-b border-[#0F172A]/10 pb-2">
                      <span className="font-bold text-xs uppercase tracking-widest opacity-70">Za - Zo</span>
                      <span className="font-serif text-lg">Gesloten</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            

          </div>

          {/* Form Column */}
          <div className="lg:col-span-7 animate-fade-in-right delay-300">
            <div className="bg-white rounded-[2rem] md:rounded-[3rem] p-6 md:p-12 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#D4AF37]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
              
              <div className="relative z-10">
                <h3 className="text-2xl md:text-3xl font-serif font-medium text-[#0F172A] mb-2">Stuur een bericht</h3>
                <p className="text-slate-500 mb-8 md:mb-10 text-sm md:text-base">Vul het formulier in en wij nemen zo spoedig mogelijk contact met u op.</p>

                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="group">
                      <label className="block text-xs font-black uppercase tracking-widest text-slate-400 mb-2 ml-1 group-focus-within:text-[#D4AF37] transition-colors">Volledige Naam</label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400 group-focus-within:text-[#D4AF37] transition-colors">
                          <User size={18} />
                        </div>
                        <input 
                          type="text" 
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full bg-slate-50 border border-slate-200 text-[#0F172A] rounded-2xl py-3 md:py-4 pl-12 pr-4 focus:ring-2 focus:ring-[#D4AF37]/20 focus:border-[#D4AF37] outline-none transition-all placeholder:text-slate-300" 
                          placeholder="Uw naam"
                        />
                      </div>
                    </div>

                    <div className="group">
                      <label className="block text-xs font-black uppercase tracking-widest text-slate-400 mb-2 ml-1 group-focus-within:text-[#D4AF37] transition-colors">Telefoonnummer</label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400 group-focus-within:text-[#D4AF37] transition-colors">
                          <Phone size={18} />
                        </div>
                        <input 
                          type="tel" 
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                          pattern="^[+]?[0-9\s-]{10,}$"
                          title="Voer een geldig telefoonnummer in (minimaal 10 cijfers)"
                          className="w-full bg-slate-50 border border-slate-200 text-[#0F172A] rounded-2xl py-3 md:py-4 pl-12 pr-4 focus:ring-2 focus:ring-[#D4AF37]/20 focus:border-[#D4AF37] outline-none transition-all placeholder:text-slate-300" 
                          placeholder="06 1393 1051"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="group">
                    <label className="block text-xs font-black uppercase tracking-widest text-slate-400 mb-2 ml-1 group-focus-within:text-[#D4AF37] transition-colors">E-mailadres</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400 group-focus-within:text-[#D4AF37] transition-colors">
                        <Mail size={18} />
                      </div>
                      <input 
                        type="email" 
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full bg-slate-50 border border-slate-200 text-[#0F172A] rounded-2xl py-3 md:py-4 pl-12 pr-4 focus:ring-2 focus:ring-[#D4AF37]/20 focus:border-[#D4AF37] outline-none transition-all placeholder:text-slate-300" 
                        placeholder="naam@voorbeeld.nl"
                      />
                    </div>
                  </div>

                  <div className="group">
                    <label className="block text-xs font-black uppercase tracking-widest text-slate-400 mb-2 ml-1 group-focus-within:text-[#D4AF37] transition-colors">Onderwerp</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400 group-focus-within:text-[#D4AF37] transition-colors">
                        <FileText size={18} />
                      </div>
                      <input 
                        type="text" 
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full bg-slate-50 border border-slate-200 text-[#0F172A] rounded-2xl py-3 md:py-4 pl-12 pr-4 focus:ring-2 focus:ring-[#D4AF37]/20 focus:border-[#D4AF37] outline-none transition-all placeholder:text-slate-300" 
                        placeholder="Waar gaat het over?"
                      />
                    </div>
                  </div>

                  <div className="group">
                    <label className="block text-xs font-black uppercase tracking-widest text-slate-400 mb-2 ml-1 group-focus-within:text-[#D4AF37] transition-colors">Uw Bericht</label>
                    <div className="relative">
                      <div className="absolute top-4 left-0 pl-4 pointer-events-none text-slate-400 group-focus-within:text-[#D4AF37] transition-colors">
                        <MessageSquare size={18} />
                      </div>
                      <textarea 
                        rows={4} 
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        className="w-full bg-slate-50 border border-slate-200 text-[#0F172A] rounded-2xl py-3 md:py-4 pl-12 pr-4 focus:ring-2 focus:ring-[#D4AF37]/20 focus:border-[#D4AF37] outline-none transition-all placeholder:text-slate-300 resize-none" 
                        placeholder="Vertel ons over uw project..."
                      ></textarea>
                    </div>
                  </div>

                  {error && (
                    <div className="p-4 bg-red-50 border border-red-100 rounded-xl text-red-600 text-sm flex items-center gap-2">
                      <X size={16} /> {error}
                    </div>
                  )}

                  <button 
                    disabled={isSubmitting}
                    className="w-full bg-[#0F172A] text-white py-4 md:py-5 rounded-2xl font-bold tracking-wider hover:bg-[#D4AF37] transition-all duration-300 shadow-xl shadow-[#0F172A]/10 flex items-center justify-center gap-3 group active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'VERZENDEN...' : 'VERSTUUR BERICHT'}
                    {!isSubmitting && <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
