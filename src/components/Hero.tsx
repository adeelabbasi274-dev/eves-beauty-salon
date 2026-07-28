import React from 'react';
import { Calendar, Phone, MessageCircle, Star, Sparkles, Award, ShieldCheck, Heart } from 'lucide-react';
import { SALON_INFO, HERO_BANNER_IMG } from '../data/salonData';

interface HeroProps {
  onOpenBooking: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  return (
    <section id="home" className="relative min-h-[75vh] lg:min-h-[80vh] flex items-center overflow-hidden bg-[#2A1A1F]">
      {/* Background Hero Image with Glassmorphic Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={HERO_BANNER_IMG}
          alt="Eve's Beauty Salon Interior"
          className="w-full h-full object-cover object-center scale-105 opacity-35"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#2A1A1F] via-[#2A1A1F]/90 to-[#5A2D3C]/70" />
      </div>

      {/* Decorative Geometric Rings */}
      <div className="absolute top-1/2 right-12 -translate-y-1/2 w-[360px] h-[460px] border border-[#F8C8DC]/25 rounded-full -rotate-12 pointer-events-none hidden lg:block" />
      <div className="absolute top-1/2 right-24 -translate-y-1/2 w-[330px] h-[420px] border border-[#D4AF37]/20 rounded-full rotate-6 pointer-events-none hidden lg:block" />

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-14 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-7 space-y-4">
            {/* Geometric Accent Line & Subtitle */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-[1px] bg-[#B76E79]"></div>
              <span className="uppercase text-[11px] tracking-[0.3em] font-semibold text-[#F8C8DC]">
                Excellence in Beauty • Jalalpur Jattan
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-medium text-white leading-[1.15] tracking-tight">
              Reveal Your <span className="bg-gradient-to-r from-[#F8C8DC] via-[#D4AF37] to-[#B76E79] bg-clip-text text-transparent italic font-normal">Natural Beauty</span> with Expert Care
            </h1>

            {/* Subtitle */}
            <p className="text-xs sm:text-sm text-pink-100/80 max-w-lg font-sans leading-relaxed">
              Experience premium ladies-only treatments. From bespoke bridal makeups and 7-in-1 HydraFacials to keratin hair smoothing and organic spa therapy.
            </p>

            {/* Quick Contact Info Strip */}
            <div className="flex flex-wrap items-center gap-6 py-2 border-y border-white/10 text-xs">
              <div className="flex items-center gap-2">
                <span className="text-[10px] uppercase tracking-wider text-[#B76E79] font-bold">Call Us:</span>
                <span className="font-serif italic text-amber-200 font-bold">{SALON_INFO.phone}</span>
              </div>
              <div className="w-[1px] h-4 bg-white/20 hidden sm:block"></div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] uppercase tracking-wider text-[#B76E79] font-bold">Location:</span>
                <span className="text-slate-200">Jalalpur Jattan</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="pt-1 flex flex-wrap items-center gap-2.5">
              <button
                onClick={onOpenBooking}
                className="w-full sm:w-auto bg-gradient-to-r from-[#D4AF37] to-[#B76E79] hover:brightness-110 text-white font-bold px-6 py-2.5 rounded-full shadow-[0_10px_25px_-5px_rgba(183,110,121,0.3)] transition-all transform hover:-translate-y-0.5 flex items-center justify-center gap-2 text-[11px] uppercase tracking-widest cursor-pointer border border-amber-200/40"
              >
                <Calendar className="w-3.5 h-3.5 text-amber-200" />
                Book Appointment
              </button>

              <a
                href={`https://wa.me/${SALON_INFO.phoneRaw}?text=Hello%20Eve's%20Beauty%20Salon,%20I%20would%20like%20to%20book%20an%20appointment.`}
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-700 text-white font-medium px-5 py-2.5 rounded-full shadow-md transition-all flex items-center justify-center gap-2 text-[11px] uppercase tracking-wider"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                WhatsApp
              </a>

              <a
                href={`tel:${SALON_INFO.phoneRaw}`}
                className="w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white font-medium px-5 py-2.5 rounded-full border border-white/20 backdrop-blur-md transition-all flex items-center justify-center gap-2 text-[11px] uppercase tracking-wider"
              >
                <Phone className="w-3.5 h-3.5 text-[#F8C8DC]" />
                Call Direct
              </a>
            </div>

            {/* Trust Badges Bar */}
            <div className="pt-4 flex flex-wrap items-center gap-4 text-white/90 text-xs">
              <div className="flex items-center gap-1.5">
                <Award className="w-3.5 h-3.5 text-amber-300" />
                <span className="font-bold text-white text-[11px]">12+ Yrs Experience</span>
              </div>
              <span className="text-white/20">•</span>
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-pink-300" />
                <span className="font-bold text-white text-[11px]">100% Hygienic</span>
              </div>
              <span className="text-white/20">•</span>
              <div className="flex items-center gap-1.5">
                <Star className="w-3.5 h-3.5 fill-amber-300 text-amber-300" />
                <span className="font-bold text-white text-[11px]">4.9 Star Rating</span>
              </div>
            </div>

          </div>

          {/* Right Visual Column */}
          <div className="lg:col-span-5 relative flex items-center justify-center pt-4 lg:pt-0">
            {/* Geometric Oval Arch Mask Image Container */}
            <div className="w-[260px] sm:w-[300px] h-[360px] sm:h-[400px] bg-[#E5D5D5] rounded-[150px] overflow-hidden relative z-10 shadow-2xl border-4 border-white/20">
              <img
                src="https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=800&q=80"
                alt="Bridal Makeup Artistry"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2A1A1F]/80 via-transparent to-transparent"></div>
              <div className="absolute bottom-6 left-0 right-0 text-center text-white px-4">
                <p className="font-playfair italic text-lg">Royal Bridal Studio</p>
                <p className="text-[9px] uppercase tracking-[0.2em] mt-0.5 text-amber-200">Bespoke Makeover Packages</p>
              </div>
            </div>

            {/* Floating Glass Card (Top Right) */}
            <div className="absolute top-4 right-0 bg-white/90 backdrop-blur-md p-2.5 rounded-2xl z-20 shadow-xl border border-white/60 text-center w-32">
              <span className="text-base font-serif text-[#B76E79] font-bold italic block">15+</span>
              <p className="text-[8px] uppercase tracking-wider text-slate-700 font-bold">Years Artistry</p>
            </div>

            {/* Floating Glass Card (Bottom Left) */}
            <div className="absolute bottom-4 left-0 bg-white/90 backdrop-blur-md p-3 rounded-2xl z-20 shadow-xl border border-white/60 w-40">
              <div className="flex items-center gap-1 mb-0.5">
                <div className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]"></div>
                <span className="text-[8px] font-bold uppercase tracking-tighter text-[#5A2D3C]">HydraFacial Pro</span>
              </div>
              <p className="text-[11px] font-serif italic text-slate-800">"Best Glow Treatment!"</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

