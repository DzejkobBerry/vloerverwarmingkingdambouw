'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import ScrollReveal from '../components/ScrollReveal';
import { 
  ArrowRight, 
  ShieldCheck, 
  Play, 
  Target, 
  Award, 
  Calendar, 
  Users, 
  Trophy, 
  Smile,
  ChevronRight,
  Star,
  CheckCircle,
  Plus,
  Minus,
  Phone
} from 'lucide-react';
import { SERVICES, REVIEWS, PROCESS, FAQS } from '../constants';

export default function Home() {
  const router = useRouter();
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const navigateTo = (path: string) => {
    router.push(path);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images-website-bloompixel.s3.eu-north-1.amazonaws.com/KingDam.bouw/Home/backgroundHero.webp" 
            className="w-full h-full object-cover grayscale-[10%]"
            alt="KingDam Vloerverwarming"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0F172A] via-[#0F172A]/80 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-transparent to-transparent opacity-90" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 w-full pt-20 text-center md:text-left">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-3 bg-[#D4AF37]/10 backdrop-blur-md border border-[#D4AF37]/30 px-5 py-2.5 rounded-full text-white mb-6 animate-fade-in">
              <ShieldCheck className="w-5 h-5 text-[#D4AF37]" />
              <span className="text-[10px] font-black uppercase tracking-[0.2em]">Hoogste Klantwaardering in de Regio</span>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-medium text-white mb-8 leading-[1.2] font-serif">
              Specialisten in warme voeten <br />
              <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-white via-[#D4AF37] to-[#B8860B]">en een gerust hart.</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl leading-relaxed mx-auto md:mx-0">
              Al 7 jaar specialist in premium vloerverwarming. Wij bouwen aan de toekomst van uw comfort met passie en vakmanschap.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-5 justify-center md:justify-start">
              <button 
                onClick={() => navigateTo('/contact')}
                className="w-full sm:w-auto bg-[#D4AF37] text-white px-10 py-5 rounded-2xl font-black text-base hover:bg-[#B8860B] transition-all shadow-2xl shadow-[#D4AF37]/30 flex items-center justify-center gap-3 active:scale-95 group"
              >
                VRAAG OFFERTE <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </button>
              <button 
                onClick={() => navigateTo('/gallery')}
                className="w-full sm:w-auto bg-white/5 backdrop-blur-md border border-white/20 text-white px-9 py-5 rounded-2xl font-bold text-base hover:bg-white/10 transition-all flex items-center justify-center gap-2"
              >
                ONZE PROJECTEN
              </button>
            </div>

            <div className="mt-10 flex justify-center md:justify-start">
              <button 
                onClick={() => scrollToSection('werkwijze-in-beeld')}
                className="flex items-center gap-4 text-white group cursor-pointer hover:text-[#D4AF37] transition-all"
              >
                <div className="relative">
                  <div className="absolute inset-0 bg-[#D4AF37]/60 rounded-full animate-ping-small" />
                  <div className="relative w-14 h-14 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20 group-hover:bg-[#D4AF37] group-hover:border-[#D4AF37] transition-all group-hover:scale-110 shadow-xl">
                    <Play fill="currentColor" size={20} className="ml-1 transition-colors group-hover:text-[#0F172A]" />
                  </div>
                </div>
                <div className="text-left">
                  <span className="block text-[9px] font-black uppercase tracking-[0.3em] text-[#D4AF37] mb-1">Onze Video</span>
                  <span className="block text-xs font-bold tracking-widest uppercase">Bekijk ons in actie</span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Over Ons */}
      <section id="over-ons" className="py-32 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <ScrollReveal className="order-2 lg:order-1">
              <span className="text-[#D4AF37] font-black tracking-[0.4em] uppercase text-xs mb-4 block">WIE ZIJN WIJ</span>
              <h2 className="text-5xl md:text-6xl font-medium text-[#0F172A] font-serif italic leading-tight mb-8">Passie voor <span className="text-[#D4AF37]">Perfectie</span></h2>
              <div className="space-y-6 text-slate-600 text-lg leading-relaxed">
                <p>
                  Met meer dan <strong>7 jaar ervaring</strong> is KingDam Bouw uitgegroeid tot een toonaangevende naam in de wereld van vloerverwarming. Onze reis begon met een simpele missie: elke woning voorzien van de meest efficiënte en duurzame warmte.
                </p>
                <p>
                  Wij begrijpen dat een vloer de fundering is van uw comfort. Daarom benaderen we elk project met een "koninklijke" precisie. Van traditionele vlechtmethoden tot moderne freestechnieken, onze vakmensen beheersen elk detail van het proces.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-6">
                  <div className="flex gap-4 items-start">
                    <div className="w-10 h-10 bg-slate-50 rounded-lg flex items-center justify-center text-[#D4AF37] flex-shrink-0 shadow-sm"><Target size={20}/></div>
                    <div>
                      <h4 className="font-bold text-[#0F172A] mb-1">Onze Missie</h4>
                      <p className="text-sm">Duurzame warmte toegankelijk maken voor iedereen.</p>
                    </div>
                  </div>
                  <div className="flex gap-4 items-start">
                    <div className="w-10 h-10 bg-slate-50 rounded-lg flex items-center justify-center text-[#D4AF37] flex-shrink-0 shadow-sm"><Award size={20}/></div>
                    <div>
                      <h4 className="font-bold text-[#0F172A] mb-1">Onze Visie</h4>
                      <p className="text-sm">De standaard zetten in premium installatietechniek.</p>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={200} className="order-1 lg:order-2 relative">
              <div className="absolute -inset-4 border border-[#D4AF37]/20 rounded-[3rem] -z-10 translate-x-4 translate-y-4" />
              <div className="rounded-[3rem] overflow-hidden shadow-2xl aspect-[4/5]">
                <img 
                  src="https://images-website-bloompixel.s3.eu-north-1.amazonaws.com/KingDam.bouw/Home/result-back-view-three-men-protective-helmets-holding-hands-his-waist-standing-construction-site-loo.webp" 
                  alt="KingDam Vakmanschap" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-12 -left-12 bg-[#0F172A]/95 backdrop-blur-xl text-white p-8 rounded-[2rem] shadow-2xl hidden md:flex items-center gap-6 border border-[#D4AF37]/30 hover:scale-105 transition-transform duration-500 hover:shadow-[#D4AF37]/20 hover:border-[#D4AF37]/60 group">
                <div className="w-16 h-16 rounded-2xl bg-[#D4AF37]/10 flex items-center justify-center border border-[#D4AF37]/20 group-hover:bg-[#D4AF37] transition-colors duration-500">
                   <Award size={32} className="text-[#D4AF37] group-hover:text-[#0F172A] transition-colors duration-500" />
                </div>
                <div>
                  <p className="text-5xl font-serif font-bold text-[#D4AF37] leading-none mb-1">7+</p>
                  <p className="text-[11px] uppercase font-black tracking-[0.2em] text-slate-400 group-hover:text-slate-300 transition-colors">Jaar Expertise</p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-[#0F172A] text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { num: '7+', label: 'Jaar Ervaring', icon: <Calendar className="w-6 h-6" /> },
              { num: '500+', label: 'Projecten Voltooid', icon: <Users className="w-6 h-6" /> },
              { num: '10j', label: 'Garantie op Werk', icon: <Trophy className="w-6 h-6" /> },
              { num: '100%', label: 'Klanttevredenheid', icon: <Smile className="w-6 h-6" /> },
            ].map((stat, i) => (
              <ScrollReveal key={i} delay={i * 100} className="relative group p-6 rounded-[2rem] bg-white/5 backdrop-blur-sm border border-white/10 hover:border-[#D4AF37]/40 transition-all duration-500 hover:-translate-y-1">
                <div className="relative flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-[#D4AF37]/10 flex items-center justify-center text-[#D4AF37] mb-4 border border-[#D4AF37]/20">
                    {stat.icon}
                  </div>
                  <p className="text-4xl font-black mb-1 font-serif text-white">{stat.num}</p>
                  <p className="text-[9px] uppercase tracking-[0.3em] text-slate-400 font-black text-center">{stat.label}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Vakmanschap in elke meter summary section */}
      <section id="diensten-summary" className="py-32 bg-slate-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <ScrollReveal className="flex flex-col lg:flex-row items-end justify-between mb-24 gap-8">
            <div className="lg:w-2/3">
              <span className="text-[#D4AF37] font-black tracking-[0.4em] uppercase text-xs mb-4 block">ONZE EXPERTISES</span>
              <h2 className="text-5xl md:text-6xl font-medium text-[#0F172A] font-serif italic leading-tight">Vakmanschap in elke meter</h2>
            </div>
            <p className="lg:w-1/3 text-slate-500 text-lg italic">
              Of het nu gaat om nieuwbouw of renovatie, wij bieden de meest efficiënte technische oplossingen voor elk type vloer.
            </p>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-left">
            {SERVICES.slice(0, 3).map((service, i) => (
              <ScrollReveal key={service.id} delay={i * 100} className="p-12 bg-white rounded-[3rem] border border-slate-200 shadow-xl group hover:bg-[#0F172A] transition-all duration-500 hover:shadow-2xl hover:border-[#0F172A]">
                <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center mb-8 shadow-sm group-hover:bg-[#D4AF37] transition-all duration-500">
                  <div className="group-hover:[&_svg]:text-white transition-all duration-500">
                    {service.icon}
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-[#0F172A] mb-4 group-hover:text-white transition-all font-serif">{service.title}</h3>
                <p className="text-slate-500 group-hover:text-slate-400 transition-all leading-relaxed">{service.description}</p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Redesigned "Onze Oplossingen" Section */}
      <section id="diensten" className="py-32 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-[0.03]">
          <div className="absolute top-0 left-0 w-96 h-96 bg-[#D4AF37] rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#0F172A] rounded-full blur-[100px] translate-x-1/2 translate-y-1/2" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <ScrollReveal className="flex flex-col items-center text-center mb-24">
            <span className="text-[#D4AF37] font-black tracking-[0.4em] uppercase text-xs mb-4 block">ONZE EXPERTISES</span>
            <h2 className="text-5xl md:text-7xl font-medium text-[#0F172A] font-serif mb-8 italic text-center">Onze Oplossingen</h2>
            <div className="w-24 h-[3px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mb-10" />
            <p className="text-slate-500 max-w-2xl mx-auto text-xl leading-relaxed italic text-center">
              Geavanceerde methodieken voor maximaal wooncomfort en een duurzame toekomst.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 text-left">
            {SERVICES.map((service, index) => (
              <ScrollReveal 
                key={service.id} 
                delay={index * 100}
                className="group relative bg-slate-100 p-12 rounded-[4rem] transition-all duration-500 hover:bg-[#0F172A] hover:-translate-y-2 hover:shadow-[0_30px_60px_-15px_rgba(15,23,42,0.3)] border border-slate-200 shadow-lg"
              >
                <span className="absolute top-10 right-10 text-8xl font-black text-black/[0.03] group-hover:text-white/[0.03] transition-colors font-sans pointer-events-none select-none">
                  0{index + 1}
                </span>
                
                <div className="relative w-20 h-20 bg-white rounded-3xl flex items-center justify-center mb-10 group-hover:bg-[#D4AF37] transition-all duration-500 shadow-sm shadow-slate-200 group-hover:shadow-[#D4AF37]/20 group-hover:scale-110">
                  <div className="group-hover:[&_svg]:text-white transition-all duration-500">
                    {service.icon}
                  </div>
                </div>

                <h3 className="relative text-2xl font-bold text-[#0F172A] mb-6 font-serif group-hover:text-white transition-colors duration-500">
                  {service.title}
                </h3>
                <p className="relative text-slate-500 leading-relaxed mb-10 group-hover:text-slate-400 transition-colors duration-500 text-lg">
                  {service.description}
                </p>

                <div className="relative flex items-center gap-3">
                  <button 
                    onClick={() => navigateTo('/contact')}
                    className="flex items-center gap-3 text-[11px] font-black text-[#D4AF37] uppercase tracking-[0.2em] group-hover:text-white transition-all"
                  >
                    OFFERTE AANVRAGEN 
                    <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform duration-300" />
                  </button>
                </div>

                <div className="absolute inset-0 rounded-[4rem] border-2 border-[#D4AF37] opacity-0 group-hover:opacity-10 transition-opacity pointer-events-none" />
              </ScrollReveal>
            ))}
          </div>
          
          <ScrollReveal delay={300} className="mt-24 pt-16 border-t border-slate-100 flex flex-wrap justify-center gap-12 md:gap-24 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
             <div className="flex items-center gap-3 font-black text-[10px] tracking-widest uppercase"><CheckCircle size={20} className="text-[#D4AF37]"/> 100% Gecertificeerd</div>
             <div className="flex items-center gap-3 font-black text-[10px] tracking-widest uppercase"><CheckCircle size={20} className="text-[#D4AF37]"/> A-Merk Materialen</div>
             <div className="flex items-center gap-3 font-black text-[10px] tracking-widest uppercase"><CheckCircle size={20} className="text-[#D4AF37]"/> 50 Jaar Garantie</div>
          </ScrollReveal>
        </div>
      </section>

      {/* Werkwijze */}
      <section id="werkwijze-in-beeld" className="py-32 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <ScrollReveal className="relative">
              <div className="aspect-video rounded-[2.5rem] overflow-hidden shadow-2xl relative group">
                <img 
                  src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80&w=1200" 
                  alt="Werkwijze" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-[#0F172A]/40 flex items-center justify-center group-hover:bg-[#0F172A]/30 transition-all">
                  <button className="w-24 h-24 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform border border-white/50">
                    <Play size={32} fill="currentColor" className="ml-2" />
                  </button>
                </div>
              </div>
              
              {/* Process Steps Overlay */}
              <div className="hidden lg:block absolute -right-10 top-1/2 -translate-y-1/2 space-y-4">
                {PROCESS.map((step, i) => (
                  <div key={i} className="bg-white p-4 rounded-xl shadow-lg border border-slate-100 flex items-center gap-4 w-64 hover:scale-105 transition-transform origin-left">
                    <span className="text-2xl font-black text-[#D4AF37] font-serif">{step.number}</span>
                    <div>
                      <p className="font-bold text-[#0F172A] text-sm">{step.title}</p>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollReveal>

            <div>
              <ScrollReveal delay={200}>
                <span className="text-[#D4AF37] font-black tracking-[0.4em] uppercase text-xs mb-4 block">ONZE WERKWIJZE</span>
                <h2 className="text-5xl md:text-6xl font-medium text-[#0F172A] font-serif mb-8 leading-tight">Van Plan tot <span className="text-[#D4AF37]">Warmte</span></h2>
                <p className="text-slate-600 text-lg mb-12 leading-relaxed">
                  Wij geloven in duidelijkheid. Ons proces is ontworpen om u volledig te ontzorgen, van het eerste contact tot de warme voeten. Geen verrassingen, enkel vakmanschap.
                </p>
              </ScrollReveal>

              <div className="space-y-8">
                {PROCESS.map((step, index) => (
                  <ScrollReveal key={step.number} delay={300 + (index * 100)} className="flex gap-6 group">
                    <div className="relative">
                      <div className="w-12 h-12 rounded-full border-2 border-[#D4AF37] flex items-center justify-center text-[#D4AF37] font-bold z-10 relative bg-white group-hover:bg-[#D4AF37] group-hover:text-white transition-colors">
                        {step.number}
                      </div>
                      <div className="absolute top-12 left-1/2 -translate-x-1/2 w-px h-full bg-slate-200 -z-0 last:hidden" />
                    </div>
                    <div className="pb-8">
                      <h4 className="text-xl font-bold text-[#0F172A] mb-2">{step.title}</h4>
                      <p className="text-slate-500">{step.description}</p>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-32 bg-[#0F172A] text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <ScrollReveal className="text-center mb-20">
            <span className="text-[#D4AF37] font-black tracking-[0.4em] uppercase text-xs mb-4 block">TESTIMONIALS</span>
            <h2 className="text-5xl md:text-6xl font-medium text-white font-serif mb-6">Klanten over <span className="text-[#D4AF37]">KingDam</span></h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {REVIEWS.map((review, index) => (
              <ScrollReveal key={review.id} delay={index * 100} className="bg-white/5 backdrop-blur-md p-10 rounded-[2.5rem] border border-white/10 hover:border-[#D4AF37]/50 transition-all hover:-translate-y-2">
                <div className="flex gap-1 mb-6">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} size={18} fill="#D4AF37" className="text-[#D4AF37]" />
                  ))}
                </div>
                <p className="text-lg text-slate-300 italic mb-8 leading-relaxed">"{review.text}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#D4AF37] rounded-full flex items-center justify-center text-[#0F172A] font-bold text-lg">
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-bold text-white">{review.name}</p>
                    <p className="text-xs text-[#D4AF37] uppercase tracking-widest">{review.date}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-32 bg-slate-50 relative overflow-hidden text-left">
        <div className="max-w-3xl mx-auto px-4">
          <ScrollReveal className="text-center">
            <h2 className="text-5xl md:text-6xl font-medium text-[#0F172A] font-serif mb-20 italic leading-tight">Veelgestelde Vragen</h2>
          </ScrollReveal>
          <div className="space-y-6">
            {FAQS.map((faq, i) => (
              <ScrollReveal key={i} delay={i * 100} className={`border-b border-slate-100 transition-all duration-500 ${activeFaq === i ? 'bg-white rounded-[2rem] px-8 py-4 shadow-sm' : 'py-8'}`}>
                <button onClick={() => setActiveFaq(activeFaq === i ? null : i)} className="w-full flex justify-between items-center text-left">
                  <span className="text-xl font-bold text-[#0F172A] pr-8">{faq.q}</span>
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center transition-all ${activeFaq === i ? 'bg-[#D4AF37] text-white rotate-180 shadow-lg shadow-[#D4AF37]/20' : 'bg-slate-200 text-[#0F172A]'}`}>{activeFaq === i ? <Minus size={20}/> : <Plus size={20}/>}</div>
                </button>
                <div className={`overflow-hidden transition-all duration-500 ${activeFaq === i ? 'max-h-96 opacity-100 mt-8' : 'max-h-0 opacity-0'}`}><p className="text-slate-600 text-lg italic leading-relaxed pb-8">{faq.a}</p></div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 bg-white relative overflow-hidden">
        <ScrollReveal className="max-w-5xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-5xl md:text-7xl font-medium text-[#0F172A] font-serif mb-8">Klaar voor de <span className="text-[#D4AF37]">Toekomst?</span></h2>
          <p className="text-xl text-slate-600 mb-12 max-w-2xl mx-auto">
            Vraag vandaag nog uw vrijblijvende offerte aan en ervaar het verschil van premium kwaliteit.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <button 
              onClick={() => navigateTo('/contact')}
              className="bg-[#D4AF37] text-white px-12 py-5 rounded-full font-black text-sm tracking-widest hover:bg-[#B8860B] transition-all shadow-xl hover:shadow-2xl shadow-[#D4AF37]/20 active:scale-95"
            >
              OFFERTE AANVRAGEN
            </button>
            <button 
              onClick={() => navigateTo('/contact')}
              className="bg-white text-[#0F172A] border border-slate-200 px-12 py-5 rounded-full font-black text-sm tracking-widest hover:bg-slate-50 transition-all shadow-lg hover:shadow-xl active:scale-95 flex items-center justify-center gap-2"
            >
              <Phone size={16} /> BEL DIRECT
            </button>
          </div>
        </ScrollReveal>
      </section>
    </>
  );
}
