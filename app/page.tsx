'use client';

import React, { useState, useEffect } from 'react';
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
  ChevronLeft,
  Quote,
  Star,
  CheckCircle,
  Plus,
  Minus,
  Phone,
  Volume2,
  VolumeX
} from 'lucide-react';
import { SERVICES, REVIEWS, PROCESS, FAQS } from '../constants';

const BackgroundMusic = () => {
  // Generate ID only on client side to avoid hydration mismatch
  const [playerId, setPlayerId] = useState<string>("");

  useEffect(() => {
    setPlayerId(`youtube-player-${Math.random().toString(36).substr(2, 9)}`);
  }, []);

  useEffect(() => {
    if (!playerId) return; // Wait for client-side ID generation

    let playerInstance: any = null;

    const initPlayer = () => {
      if ((window as any).YT && (window as any).YT.Player) {
        playerInstance = new (window as any).YT.Player(playerId, {
          height: '1',
          width: '1',
          videoId: 'ElDaTAueHHo',
          host: 'https://www.youtube-nocookie.com',
          playerVars: {
            'autoplay': 1,
            'controls': 0,
            'loop': 1,
            'playlist': 'ElDaTAueHHo',
            'playsinline': 1,
            'enablejsapi': 1,
            'origin': window.location.origin
          },
          events: {
            'onReady': (event: any) => {
              event.target.setVolume(15);
              event.target.playVideo();

              // Mobile fallback: Try to play on first interaction
              const handleInteraction = () => {
                if (playerInstance && typeof playerInstance.getPlayerState === 'function') {
                  const state = playerInstance.getPlayerState();
                  // If unstarted or cued, try to play
                  if (state === -1 || state === 5 || state === 2) { 
                    event.target.playVideo();
                  }
                }
              };

              // Add listeners for common interactions
              ['click', 'touchstart', 'scroll', 'keydown'].forEach(evt => 
                document.addEventListener(evt, handleInteraction, { once: true })
              );
            },
            'onStateChange': (event: any) => {
               // Optional: could handle state changes here
            }
          }
        });
      }
    };

    if (!(window as any).YT) {
      if (!document.querySelector('script[src="https://www.youtube.com/iframe_api"]')) {
        const tag = document.createElement('script');
        tag.src = "https://www.youtube.com/iframe_api";
        const firstScriptTag = document.getElementsByTagName('script')[0];
        firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag);
      }
      // Append to existing callback or create new
      const oldCallback = (window as any).onYouTubeIframeAPIReady;
      (window as any).onYouTubeIframeAPIReady = () => {
        if (oldCallback) oldCallback();
        initPlayer();
      };
    } else {
      initPlayer();
    }

    // NUCLEAR CLEANUP
    return () => {
      // 1. Try API destroy
      if (playerInstance && typeof playerInstance.destroy === 'function') {
        try { playerInstance.destroy(); } catch (e) { console.error("API destroy failed", e); }
      }
      
      // 2. Force DOM removal of the specific element if it still exists
      const element = document.getElementById(playerId);
      if (element) {
        element.remove();
      }

      // 3. Fallback: Remove any iframe that might have replaced our div but kept the ID
      const frame = document.querySelector(`iframe[id="${playerId}"]`);
      if (frame) {
        frame.remove();
      }
    };
  }, [playerId]);

  // Don't render anything until we have a client-side ID
  if (!playerId) return null;

  // Render a div with the unique ID
  return (
    <div className="absolute top-0 left-0 w-px h-px opacity-0 pointer-events-none overflow-hidden">
      <div id={playerId} />
    </div>
  );
};

export default function Home() {
  const router = useRouter();
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [currentReview, setCurrentReview] = useState(0);
  const [isMusicPlaying, setIsMusicPlaying] = useState(true);

  const toggleMusic = () => {
    setIsMusicPlaying(!isMusicPlaying);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentReview((prev) => (prev + 1) % REVIEWS.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextReview = () => {
    setCurrentReview((prev) => (prev + 1) % REVIEWS.length);
  };

  const prevReview = () => {
    setCurrentReview((prev) => (prev - 1 + REVIEWS.length) % REVIEWS.length);
  };

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
            <h1 className="text-3xl md:text-6xl lg:text-7xl font-medium text-white mb-8 leading-[1.2] font-serif">
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

            <div className="mt-10 flex flex-col sm:flex-row items-center gap-8 justify-center md:justify-start relative z-50">
              <button 
                onClick={() => scrollToSection('werkwijze-in-beeld')}
                className="flex items-center gap-4 text-white group cursor-pointer hover:text-[#D4AF37] transition-all"
              >
                <div className="relative">
                  <div className="absolute inset-0 bg-[#D4AF37]/60 rounded-full animate-ping-small pointer-events-none" />
                  <div className="relative w-14 h-14 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20 group-hover:bg-[#D4AF37] group-hover:border-[#D4AF37] transition-all group-hover:scale-110 shadow-xl">
                    <Play fill="currentColor" size={20} className="ml-1 transition-colors group-hover:text-[#0F172A]" />
                  </div>
                </div>
                <div className="text-left">
                  <span className="block text-[10px] font-black uppercase tracking-[0.3em] text-[#D4AF37] mb-1">Onze Video</span>
                  <span className="block text-xs font-bold tracking-widest uppercase">Bekijk ons in actie</span>
                </div>
              </button>

              <button 
                onClick={toggleMusic}
                className="flex items-center gap-4 text-white group cursor-pointer hover:text-[#D4AF37] transition-all"
              >
                <div className="relative">
                  {isMusicPlaying && <div className="absolute inset-0 bg-[#D4AF37]/60 rounded-full animate-ping-small pointer-events-none" />}
                  <div className="relative w-14 h-14 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20 group-hover:bg-[#D4AF37] group-hover:border-[#D4AF37] transition-all group-hover:scale-110 shadow-xl">
                    {isMusicPlaying ? (
                      <Volume2 size={20} className="transition-colors group-hover:text-[#0F172A]" />
                    ) : (
                      <VolumeX size={20} className="transition-colors group-hover:text-[#0F172A]" />
                    )}
                  </div>
                </div>
                <div className="text-left">
                  <span className="block text-[10px] font-black uppercase tracking-[0.3em] text-[#D4AF37] mb-1">Achtergrond Muziek</span>
                  <span className="block text-xs font-bold tracking-widest uppercase">{isMusicPlaying ? 'Pauzeren' : 'Afspelen'}</span>
                </div>
              </button>
            </div>
            
            {/* Hidden Music Player Container */}
            {isMusicPlaying && <BackgroundMusic />}
          </div>
        </div>

        {/* Scroll Indicator */}
        <div 
          onClick={() => scrollToSection('over-ons')}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 cursor-pointer group z-20 animate-fade-in delay-700"
        >
          <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white/50 group-hover:text-[#D4AF37] transition-colors duration-300">Scroll</span>
          <div className="w-[26px] h-[42px] rounded-full border border-white/20 group-hover:border-[#D4AF37]/50 flex justify-center p-2 transition-colors duration-300 backdrop-blur-sm bg-white/5">
            <div className="w-1 h-1.5 bg-[#D4AF37] rounded-full animate-scroll-down" />
          </div>
        </div>
      </section>

      {/* Over Ons */}
      <section id="over-ons" className="py-16 md:py-32 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 items-center">
            <ScrollReveal className="order-2 lg:order-1">
              <span className="text-[#D4AF37] font-black tracking-[0.4em] uppercase text-xs mb-4 block">WIE ZIJN WIJ</span>
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-medium text-[#0F172A] font-serif italic leading-tight mb-8">Passie voor <span className="text-[#D4AF37]">Perfectie</span></h2>
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
            <ScrollReveal delay={200} className="order-1 lg:order-2 relative scale-90 origin-center">
              <div className="absolute -inset-4 border border-[#D4AF37]/20 rounded-[3rem] -z-10 translate-x-4 translate-y-4" />
              <div className="rounded-[3rem] overflow-hidden shadow-2xl aspect-[4/5]">
                <img 
                  src="https://images-website-bloompixel.s3.eu-north-1.amazonaws.com/KingDam.bouw/Home/result-back-view-three-men-protective-helmets-holding-hands-his-waist-standing-construction-site-loo.webp" 
                  alt="KingDam Vakmanschap" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="relative mt-6 md:absolute md:-bottom-12 md:-left-12 bg-[#0F172A]/95 backdrop-blur-xl text-white p-6 md:p-8 rounded-[2rem] shadow-2xl flex items-center gap-6 border border-[#D4AF37]/30 hover:scale-105 transition-transform duration-500 hover:shadow-[#D4AF37]/20 hover:border-[#D4AF37]/60 group mx-auto md:mx-0 w-fit">
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
      <section className="py-12 md:py-16 bg-[#0F172A] text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
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
                  <p className="text-3xl md:text-4xl font-black mb-1 font-serif text-white">{stat.num}</p>
                  <p className="text-[9px] uppercase tracking-[0.3em] text-slate-400 font-black text-center">{stat.label}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Vakmanschap in elke meter summary section */}
      <section id="diensten-summary" className="py-16 md:py-32 bg-slate-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <ScrollReveal className="flex flex-col lg:flex-row items-end justify-between mb-16 md:mb-24 gap-8">
            <div className="lg:w-2/3">
              <span className="text-[#D4AF37] font-black tracking-[0.4em] uppercase text-xs mb-4 block">ONZE EXPERTISES</span>
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-medium text-[#0F172A] font-serif italic leading-tight">Vakmanschap in elke meter</h2>
            </div>
            <p className="lg:w-1/3 text-slate-500 text-lg italic">
              Of het nu gaat om nieuwbouw of renovatie, wij bieden de meest efficiënte technische oplossingen voor elk type vloer.
            </p>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-12 text-left">
            {SERVICES.slice(0, 3).map((service, i) => (
              <ScrollReveal key={service.id} delay={i * 100} className="p-8 md:p-12 bg-white rounded-[3rem] border border-slate-200 shadow-xl group hover:bg-[#0F172A] transition-all duration-500 hover:shadow-2xl hover:border-[#0F172A]">
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
      <section id="diensten" className="py-16 md:py-32 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-[0.03]">
          <div className="absolute top-0 left-0 w-96 h-96 bg-[#D4AF37] rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#0F172A] rounded-full blur-[100px] translate-x-1/2 translate-y-1/2" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <ScrollReveal className="flex flex-col items-center text-center mb-16 md:mb-24">
            <span className="text-[#D4AF37] font-black tracking-[0.4em] uppercase text-xs mb-4 block">ONZE EXPERTISES</span>
            <h2 className="text-3xl md:text-5xl lg:text-7xl font-medium text-[#0F172A] font-serif mb-8 italic text-center">Onze Oplossingen</h2>
            <div className="w-24 h-[3px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mb-10" />
            <p className="text-slate-500 max-w-2xl mx-auto text-xl leading-relaxed italic text-center">
              Geavanceerde methodieken voor maximaal wooncomfort en een duurzame toekomst.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-x-8 md:gap-y-12 text-left">
            {SERVICES.map((service, index) => (
              <ScrollReveal 
                key={service.id} 
                delay={index * 100}
                className="group relative bg-slate-100 p-8 md:p-12 rounded-[4rem] transition-all duration-500 hover:bg-[#0F172A] hover:-translate-y-2 hover:shadow-[0_30px_60px_-15px_rgba(15,23,42,0.3)] border border-slate-200 shadow-lg"
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
      <section id="werkwijze-in-beeld" className="py-16 md:py-20 bg-[#0F172A] relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#D4AF37]/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#D4AF37]/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            
            {/* Image Side */}
            <ScrollReveal className="relative lg:sticky lg:top-32 order-2 lg:order-1 scale-90 origin-center">
              <div className="relative group max-w-md mx-auto lg:max-w-none">
                {/* Decorative border frame */}
                <div className="absolute -inset-3 border border-[#D4AF37]/30 rounded-[2.5rem] translate-x-3 translate-y-3 transition-transform duration-500 group-hover:translate-x-2 group-hover:translate-y-2" />
                
                <div className="aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl relative">
                  <img 
                    src="https://images-website-bloompixel.s3.eu-north-1.amazonaws.com/KingDam.bouw/Home/service-man-instelling-house-heating-system-floor.webp" 
                    alt="Werkwijze" 
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 grayscale-[20%] group-hover:grayscale-0"
                  />
                  <div className="absolute inset-0 bg-[#0F172A]/40 group-hover:bg-[#0F172A]/20 transition-all duration-500" />
                  
                  {/* Play Button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <button className="w-20 h-20 bg-[#D4AF37]/90 backdrop-blur-md rounded-full flex items-center justify-center text-[#0F172A] hover:scale-110 transition-transform duration-500 shadow-[0_0_40px_-10px_rgba(212,175,55,0.6)] group-hover:shadow-[0_0_60px_-10px_rgba(212,175,55,0.8)]">
                      <Play size={28} fill="currentColor" className="ml-1" />
                    </button>
                  </div>
                </div>

                {/* Stat Badge */}
                <div className="relative mt-4 md:mt-0 md:absolute md:-bottom-6 md:-right-6 bg-[#0F172A] border border-[#D4AF37]/30 p-6 rounded-[1.5rem] shadow-2xl max-w-[180px] mx-auto md:mx-0 flex flex-col items-center md:block text-center md:text-left">
                  <p className="text-3xl font-serif font-bold text-[#D4AF37] mb-1">100%</p>
                  <p className="text-slate-400 text-[10px] uppercase tracking-widest leading-relaxed">Tevredenheid Garantie</p>
                </div>
              </div>
            </ScrollReveal>

            {/* Content Side */}
            <div className="order-1 lg:order-2">
              <ScrollReveal delay={200}>
                <div className="flex items-center gap-4 mb-4">
                   <div className="h-px w-12 bg-[#D4AF37]" />
                   <span className="text-[#D4AF37] font-black tracking-[0.4em] uppercase text-xs">ONZE WERKWIJZE</span>
                </div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-white font-serif mb-6 leading-tight">
                  Van Plan tot <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#FCD34D]">Warmte</span>
                </h2>
                <p className="text-slate-400 text-base mb-10 leading-relaxed border-l-2 border-[#D4AF37]/20 pl-6">
                  Een zorgeloos proces, ontworpen voor uw comfort. Wij nemen de leiding, zodat u enkel hoeft te genieten van het eindresultaat.
                </p>
              </ScrollReveal>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {PROCESS.map((step, index) => (
                  <ScrollReveal key={step.number} delay={300 + (index * 100)} className="group relative">
                    <div className="relative h-full bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-[1.5rem] hover:bg-[#D4AF37] transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_20px_40px_-10px_rgba(212,175,55,0.2)] flex flex-col justify-between">
                      <div className="flex justify-between items-start mb-4">
                        <div className="w-12 h-12 rounded-xl bg-[#D4AF37]/10 border border-[#D4AF37]/20 flex items-center justify-center text-[#D4AF37] font-serif font-bold text-lg group-hover:bg-white group-hover:text-[#D4AF37] transition-all duration-500">
                          {step.number}
                        </div>
                        <ArrowRight className="w-5 h-5 text-[#D4AF37]/50 group-hover:text-[#0F172A] group-hover:-rotate-45 transition-all duration-500" />
                      </div>
                      
                      <div>
                        <h4 className="text-lg font-bold text-white mb-2 group-hover:text-[#0F172A] transition-colors">{step.title}</h4>
                        <p className="text-sm text-slate-400 group-hover:text-[#0F172A]/80 transition-colors leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>

              <div className="mt-10 flex justify-center md:justify-start">
                 <button 
                  onClick={() => navigateTo('/gallery')}
                  className="group bg-[#D4AF37] text-white px-8 py-4 rounded-xl font-black text-sm tracking-widest hover:bg-white hover:text-[#0F172A] transition-all shadow-xl shadow-[#D4AF37]/20 flex items-center gap-3"
                >
                  BEKIJK ONZE PROJECTEN
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-24 bg-white relative overflow-hidden text-left">
        {/* Subtle Background Decor */}
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-[#D4AF37]/5 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
        
        <div className="max-w-3xl mx-auto px-4 relative z-10">
          <ScrollReveal className="text-center">
            <span className="text-[#D4AF37] font-black tracking-[0.4em] uppercase text-xs mb-4 block">FAQ</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-[#0F172A] font-serif mb-8 md:mb-12 leading-tight">Veelgestelde <span className="text-[#D4AF37]">Vragen</span></h2>
          </ScrollReveal>
          
          <div className="space-y-4">
            {FAQS.map((faq, i) => (
              <ScrollReveal key={i} delay={i * 100} className={`transition-all duration-500 rounded-[1.5rem] border ${activeFaq === i ? 'bg-white border-[#D4AF37]/30 shadow-xl shadow-[#D4AF37]/5' : 'bg-slate-50 border-slate-100 hover:border-[#D4AF37]/30'}`}>
                <button onClick={() => setActiveFaq(activeFaq === i ? null : i)} className="w-full flex justify-between items-center text-left p-6">
                  <span className={`text-lg font-bold pr-8 transition-colors ${activeFaq === i ? 'text-[#D4AF37]' : 'text-[#0F172A]'}`}>{faq.q}</span>
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-500 shrink-0 ${activeFaq === i ? 'bg-[#D4AF37] text-white rotate-180' : 'bg-white text-[#0F172A] border border-slate-200'}`}>
                    {activeFaq === i ? <Minus size={18}/> : <Plus size={18}/>}
                  </div>
                </button>
                <div className={`overflow-hidden transition-all duration-500 ${activeFaq === i ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}`}>
                    <p className="text-slate-600 text-base leading-relaxed px-6 pb-6 border-t border-slate-100/50 pt-4">
                        {faq.a}
                    </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-16 md:py-20 bg-[#0F172A] text-white relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <ScrollReveal className="text-center mb-12">
            <span className="text-[#D4AF37] font-black tracking-[0.4em] uppercase text-xs mb-4 block">TESTIMONIALS</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-white font-serif mb-6">Klanten over <span className="text-[#D4AF37]">KingDam</span></h2>
          </ScrollReveal>

          <div className="relative">
            {/* Carousel Container */}
            <div className="overflow-hidden">
              <div 
                className="flex transition-transform duration-700 ease-[cubic-bezier(0.25,0.1,0.25,1)]" 
                style={{ transform: `translateX(-${currentReview * 100}%)` }}
              >
                {REVIEWS.map((review) => (
                  <div key={review.id} className="w-full flex-shrink-0 px-4">
                    <div className="bg-white/5 backdrop-blur-md p-8 md:p-12 rounded-[2.5rem] border border-white/10 relative group hover:border-[#D4AF37]/30 transition-colors mx-auto max-w-2xl">
                      <Quote className="absolute top-8 left-8 text-[#D4AF37]/20 w-8 h-8 md:w-12 md:h-12" />
                      
                      <div className="flex flex-col items-center text-center relative z-10">
                        <div className="flex gap-1 mb-6">
                          {[...Array(review.rating)].map((_, i) => (
                            <Star key={i} size={20} fill="#D4AF37" className="text-[#D4AF37]" />
                          ))}
                        </div>
                        
                        <p className="text-lg md:text-2xl text-slate-200 font-serif italic mb-8 leading-relaxed">"{review.text}"</p>
                        
                        <div className="flex items-center gap-4">
                          <div className="w-14 h-14 bg-gradient-to-br from-[#D4AF37] to-[#B8860B] rounded-full flex items-center justify-center text-[#0F172A] font-bold text-xl shadow-lg shadow-[#D4AF37]/20">
                            {review.name.charAt(0)}
                          </div>
                          <div className="text-left">
                            <p className="font-bold text-white text-lg">{review.name}</p>
                            <p className="text-xs text-[#D4AF37] uppercase tracking-widest">{review.date}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-between w-full absolute top-1/2 -translate-y-1/2 px-2 md:px-0 pointer-events-none z-20">
              <button 
                onClick={prevReview}
                className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white flex items-center justify-center hover:bg-[#D4AF37] hover:border-[#D4AF37] transition-all duration-300 group pointer-events-auto md:-ml-16"
                aria-label="Previous review"
              >
                <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 group-hover:-translate-x-0.5 transition-transform" />
              </button>
              <button 
                onClick={nextReview}
                className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white flex items-center justify-center hover:bg-[#D4AF37] hover:border-[#D4AF37] transition-all duration-300 group pointer-events-auto md:-mr-16"
                aria-label="Next review"
              >
                <ChevronRight className="w-5 h-5 md:w-6 md:h-6 group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>

            {/* Dots Indicator */}
            <div className="flex justify-center gap-3 mt-8">
              {REVIEWS.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentReview(index)}
                  className={`h-2 rounded-full transition-all duration-500 ${
                    currentReview === index ? 'w-8 bg-[#D4AF37]' : 'w-2 bg-white/20 hover:bg-white/40'
                  }`}
                  aria-label={`Go to review ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-32 relative overflow-hidden">
        {/* Parallax Background */}
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url('https://images-website-bloompixel.s3.eu-north-1.amazonaws.com/KingDam.bouw/Home/service-man-instelling-house-heating-system-floor-_1_.webp')`,
            backgroundAttachment: 'fixed',
            backgroundPosition: 'center',
            backgroundSize: 'cover'
          }}
        />
        {/* Overlay for readability */}
        <div className="absolute inset-0 bg-white/60 z-0 backdrop-blur-[1px]" />

        <ScrollReveal className="max-w-5xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-5xl lg:text-7xl font-medium text-[#0F172A] font-serif mb-8">Klaar voor de <span className="text-[#D4AF37]">Toekomst?</span></h2>
          <p className="text-lg md:text-xl text-slate-600 mb-12 max-w-2xl mx-auto">
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
