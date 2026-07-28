import React from 'react';
import { Crown, Sparkles, Check, Calendar, MessageCircle, Heart } from 'lucide-react';
import { BRIDAL_FEATURE_IMG, SALON_INFO } from '../data/salonData';

interface BridalHighlightProps {
  onOpenBooking: (serviceName?: string) => void;
}

export const BridalHighlight: React.FC<BridalHighlightProps> = ({ onOpenBooking }) => {
  return (
    <section className="py-8 sm:py-10 bg-gradient-to-br from-[#2A1A1F] via-[#5A2D3C] to-[#2A1A1F] text-white relative overflow-hidden">
      {/* Decorative Shimmer Particles */}
      <div className="absolute top-10 left-10 w-64 h-64 bg-[#D4AF37]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-64 h-64 bg-[#F8C8DC]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
          {/* Visual Showcase Box */}
          <div className="lg:col-span-5 relative group">
            <div className="relative z-10 rounded-2xl overflow-hidden border-2 border-[#D4AF37]/40 shadow-xl">
              <img
                src={BRIDAL_FEATURE_IMG}
                alt="Royal Pakistani Bridal Look at Eve's Salon"
                className="w-full h-[260px] sm:h-[300px] object-cover"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2A1A1F]/80 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-3 right-3 p-2.5 bg-black/40 backdrop-blur-md rounded-xl border border-[#D4AF37]/30">
                <span className="text-amber-300 font-playfair font-bold text-xs sm:text-sm block">
                  Signature Barat & Valima Look
                </span>
                <span className="text-[10px] text-slate-300">
                  Waterproof 24H High-Definition Coverage
                </span>
              </div>
            </div>

            {/* Floating Gold Crown Badge */}
            <div className="absolute -top-3 -right-3 z-20 bg-gradient-to-r from-[#D4AF37] to-[#B76E79] text-[#2A1A1F] font-bold px-3 py-1 rounded-full shadow-lg flex items-center gap-1 text-[10px] uppercase tracking-wider border border-amber-200">
              <Crown className="w-3.5 h-3.5 text-[#2A1A1F]" /> Royal Bridal Studio
            </div>
          </div>

          {/* Content Box */}
          <div className="lg:col-span-7 space-y-4">
            <div className="inline-flex items-center gap-1.5 bg-[#D4AF37]/20 border border-[#D4AF37]/40 px-3 py-0.5 rounded-full text-[10px] font-semibold text-amber-300">
              <Sparkles className="w-3 h-3 text-[#D4AF37]" />
              <span>Jalalpur Jattan's #1 Rated Bridal Studio</span>
            </div>

            <h2 className="font-playfair text-2xl sm:text-3xl font-bold text-white leading-tight">
              Royal Pakistani <span className="bg-gradient-to-r from-[#F8C8DC] via-[#D4AF37] to-[#F8C8DC] bg-clip-text text-transparent italic">Bridal Makeover</span>
            </h2>

            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
              Pre-bridal HydraFacials, custom hair extensions, 3D mink lashes, and dupatta drapery for Barat, Valima & Nikkah.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs pt-1">
              <div className="flex items-center gap-2 bg-white/5 p-2 rounded-lg border border-white/10">
                <Check className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
                <span className="text-slate-200 text-[11px]">24H Waterproof MAC/NARS Base</span>
              </div>
              <div className="flex items-center gap-2 bg-white/5 p-2 rounded-lg border border-white/10">
                <Check className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
                <span className="text-slate-200 text-[11px]">Dupatta & Jewelry Setting</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-2.5">
              <button
                onClick={() => onOpenBooking('Royal Signature Bridal Makeup')}
                className="bg-gradient-to-r from-[#D4AF37] via-[#B76E79] to-[#D4AF37] hover:brightness-110 text-[#2A1A1F] font-bold px-5 py-2 rounded-full shadow-md transition-all flex items-center gap-1.5 text-xs cursor-pointer"
              >
                <Calendar className="w-3.5 h-3.5" />
                Book Bridal Consultation
              </button>

              <a
                href={`https://wa.me/${SALON_INFO.phoneRaw}?text=Hello%20Eve's%20Beauty%20Salon,%20I%20am%20interested%20in%20Bridal%20Makeup%20packages%20and%20would%20like%20to%20consult.`}
                target="_blank"
                rel="noreferrer"
                className="bg-emerald-600 hover:bg-emerald-700 text-white font-medium px-4 py-2 rounded-full text-xs shadow-md transition-all flex items-center gap-1.5"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                WhatsApp Inquiry
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
