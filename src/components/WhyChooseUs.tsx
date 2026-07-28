import React from 'react';
import { Award, Crown, Sparkles, ShieldCheck, Tag, HeartHandshake, Smile, Flame, Sparkle } from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const reasons = [
    {
      icon: <Award className="w-6 h-6 text-[#D4AF37]" />,
      title: 'Experienced Professionals',
      desc: 'Certified beauticians and master stylists with over 12 years of hands-on salon experience.',
    },
    {
      icon: <Crown className="w-6 h-6 text-[#B76E79]" />,
      title: 'Bridal Specialists',
      desc: 'Dedicated bridal studio team specializing in HD airbrush makeup, dupatta drapes & jewelry styling.',
    },
    {
      icon: <Sparkles className="w-6 h-6 text-[#D4AF37]" />,
      title: '100% Premium Products',
      desc: 'We use strictly authentic imported cosmetics (MAC, NARS, Huda Beauty, L\'Oreal, Janssen).',
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-emerald-600" />,
      title: 'Hygienic Environment',
      desc: 'UV autoclave tool sterilization, disposable bed cover sets, and medical grade sanitation after every client.',
    },
    {
      icon: <Tag className="w-6 h-6 text-[#B76E79]" />,
      title: 'Affordable Packages',
      desc: 'Transparent pricing with money-saving bridal and pamper combo deals tailored for every budget.',
    },
    {
      icon: <Sparkle className="w-6 h-6 text-[#D4AF37]" />,
      title: 'Personalized Care',
      desc: 'One-on-one consultation before every treatment to match skin type, face structure, and preferences.',
    },
    {
      icon: <HeartHandshake className="w-6 h-6 text-[#B76E79]" />,
      title: 'Friendly & Polite Staff',
      desc: 'Courteous team dedicated to making every client feel respected, relaxed, and pampered.',
    },
    {
      icon: <Flame className="w-6 h-6 text-[#D4AF37]" />,
      title: 'Modern Equipment',
      desc: '7-in-1 Medical HydraFacial stations, UV gel curing lamps, steam pods, and ergonomic styling chairs.',
    },
    {
      icon: <Smile className="w-6 h-6 text-[#B76E79]" />,
      title: 'Comfortable Atmosphere',
      desc: 'Fully air-conditioned, private, fragrant ladies-only sanctuary in Jalalpur Jattan with hot tea service.',
    },
  ];

  return (
    <section className="py-12 sm:py-16 bg-[#FFF8F5] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-[#B76E79] bg-[#F8C8DC]/30 px-3 py-1 rounded-full border border-[#B76E79]/20 inline-block">
            Why Eve's Beauty Salon
          </span>
          <h2 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#5A2D3C]">
            9 Reasons Ladies Trust Us
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Discover why hundreds of brides and regular salon visitors choose Eve's Beauty Salon as their primary beauty and wellness destination.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((r, i) => (
            <div
              key={i}
              className="glass-card rounded-2xl p-6 hover:shadow-xl transition-all duration-300 border border-[#F8C8DC]/60 group flex items-start gap-4"
            >
              <div className="p-3.5 rounded-2xl bg-white shadow-sm border border-[#F8C8DC] shrink-0 group-hover:scale-110 transition-transform">
                {r.icon}
              </div>
              <div className="space-y-1">
                <h3 className="font-playfair font-bold text-lg text-[#5A2D3C] group-hover:text-[#B76E79] transition-colors">
                  {r.title}
                </h3>
                <p className="text-slate-600 text-xs leading-relaxed">{r.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
