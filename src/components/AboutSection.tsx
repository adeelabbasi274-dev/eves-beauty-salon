import React from 'react';
import { Award, ShieldCheck, HeartHandshake, Sparkles, Star, Users, CheckCircle } from 'lucide-react';
import { BEAUTICIANS, SALON_INFO } from '../data/salonData';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-8 sm:py-10 bg-white relative overflow-hidden">
      {/* Decorative Blur Orbs */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-[#F8C8DC]/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#D4AF37]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Welcome & Story Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-center mb-8">
          <div className="space-y-3">
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#B76E79] bg-[#F8C8DC]/30 px-3 py-0.5 rounded-full border border-[#B76E79]/20 inline-block">
              Welcome to Eve's Beauty Salon
            </span>
            <h2 className="font-playfair text-xl sm:text-2xl font-bold text-[#5A2D3C] leading-tight">
              12+ Years of Elevating Feminine Grace
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
              Bringing world-class, hygienic, and personalized beauty care to ladies across Jalalpur Jattan and Gujrat district.
            </p>

            {/* Checklist */}
            <div className="grid grid-cols-2 gap-2 text-xs font-medium text-slate-700 pt-1">
              <div className="flex items-center gap-1.5">
                <CheckCircle className="w-3.5 h-3.5 text-[#B76E79]" /> 100% Original Brands
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle className="w-3.5 h-3.5 text-[#B76E79]" /> UV Sterilized Tools
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle className="w-3.5 h-3.5 text-[#B76E79]" /> Private AC Parlor
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle className="w-3.5 h-3.5 text-[#B76E79]" /> Trained Artists
              </div>
            </div>
          </div>

          {/* Salon Interior Visual Collage */}
          <div className="relative">
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-md border-2 border-white">
              <img
                src="https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=800&q=80"
                alt="Eve's Beauty Salon Reception Lounge"
                className="w-full h-[220px] sm:h-[260px] object-cover"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>

        {/* Certified Beauticians Section */}
        <div className="mt-8 pt-6 border-t border-slate-100">
          <div className="text-center max-w-xl mx-auto space-y-1 mb-6">
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#B76E79]">
              Meet Our Artistry Team
            </span>
            <h3 className="font-playfair text-lg sm:text-xl font-bold text-[#5A2D3C]">
              Certified Beauticians & Specialists
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {BEAUTICIANS.map((b) => (
              <div
                key={b.id}
                className="bg-[#FFF8F5] rounded-2xl overflow-hidden border border-[#F8C8DC]/60 hover:shadow-lg transition-all group"
              >
                <div className="h-60 overflow-hidden relative">
                  <img
                    src={b.photo}
                    alt={b.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-md px-2.5 py-1 rounded-full text-xs font-bold text-amber-600 flex items-center gap-1 shadow-sm">
                    <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    {b.rating}
                  </div>
                </div>

                <div className="p-5 space-y-2">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#B76E79] block">
                    {b.experience} Experience
                  </span>
                  <h4 className="font-playfair text-lg font-bold text-[#5A2D3C]">{b.name}</h4>
                  <p className="text-slate-500 text-xs font-medium">{b.role}</p>
                  <p className="text-slate-600 text-xs leading-relaxed line-clamp-2 pt-1">{b.bio}</p>

                  <div className="pt-2 flex flex-wrap gap-1">
                    {b.specialty.map((spec, i) => (
                      <span
                        key={i}
                        className="text-[10px] bg-white border border-[#F8C8DC] text-slate-700 px-2 py-0.5 rounded-md"
                      >
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
