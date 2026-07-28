import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, ShieldCheck, Heart, Sparkles, FileText, Globe, X } from 'lucide-react';
import { SALON_INFO } from '../data/salonData';

interface FooterProps {
  onOpenBooking: () => void;
  onOpenAdmin: () => void;
  onOpenManual: () => void;
  setActiveSection: (section: string) => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenBooking,
  onOpenAdmin,
  onOpenManual,
  setActiveSection,
}) => {
  const [modalType, setModalType] = useState<'privacy' | 'terms' | 'sitemap' | 'robots' | null>(null);

  const handleNav = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#2A1A1F] text-white pt-16 pb-12 border-t-2 border-[#D4AF37]/30 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Col 1: About Salon */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-[#B76E79] to-[#D4AF37] p-0.5">
                <div className="w-full h-full bg-[#2A1A1F] rounded-full flex items-center justify-center font-playfair font-bold text-amber-200">
                  E
                </div>
              </div>
              <span className="font-playfair text-xl font-bold text-white">
                Eve's <span className="text-[#B76E79]">Beauty Salon</span>
              </span>
            </div>

            <p className="text-slate-300 text-xs leading-relaxed">
              Jalalpur Jattan's premiere ladies beauty salon & royal bridal studio. Dedicated to 100% hygienic, customized, and high-definition beauty care.
            </p>

            <div className="pt-2 text-xs text-amber-200 font-medium">
              Certified Beauticians • Original Cosmetics
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="space-y-4">
            <h4 className="font-playfair font-bold text-base text-amber-300">Quick Navigation</h4>
            <ul className="space-y-2 text-xs text-slate-300">
              <li>
                <button onClick={() => handleNav('home')} className="hover:text-[#F8C8DC] transition-colors">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('about')} className="hover:text-[#F8C8DC] transition-colors">
                  About Our Salon
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('services')} className="hover:text-[#F8C8DC] transition-colors">
                  Services Menu
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('gallery')} className="hover:text-[#F8C8DC] transition-colors">
                  Photo & Bridal Gallery
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('pricing')} className="hover:text-[#F8C8DC] transition-colors">
                  Packages & Pricing
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('testimonials')} className="hover:text-[#F8C8DC] transition-colors">
                  Customer Reviews
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('blog')} className="hover:text-[#F8C8DC] transition-colors">
                  Beauty Blog & Secrets
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Popular Services */}
          <div className="space-y-4">
            <h4 className="font-playfair font-bold text-base text-amber-300">Signature Treatments</h4>
            <ul className="space-y-2 text-xs text-slate-300">
              <li>Royal Signature Bridal Makeup</li>
              <li>Ultra HD Airbrush Base</li>
              <li>Brazilian Keratin Smoothing</li>
              <li>7-in-1 Medical HydraFacial</li>
              <li>24K Pure Gold Facial</li>
              <li>Acrylic Gel Nail Extensions</li>
              <li>Organic Rose & Milk Mani-Pedi</li>
            </ul>
          </div>

          {/* Col 4: Contact & Hours */}
          <div className="space-y-4 text-xs text-slate-300">
            <h4 className="font-playfair font-bold text-base text-amber-300">Salon Contact</h4>
            <div className="space-y-2">
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                <span>{SALON_INFO.address}</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <a href={`tel:${SALON_INFO.phoneRaw}`} className="hover:underline text-pink-200">
                  {SALON_INFO.phone}
                </a>
              </p>
              <p className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <span>Mon - Sat: 10AM - 8PM | Sun: 11AM - 6PM</span>
              </p>
            </div>

            <div className="pt-2 flex items-center gap-3">
              <button
                onClick={onOpenBooking}
                className="bg-[#B76E79] hover:bg-[#D4AF37] text-white hover:text-[#2A1A1F] font-bold px-4 py-2 rounded-full text-xs transition-colors cursor-pointer"
              >
                Book Appointment
              </button>
            </div>
          </div>
        </div>

        {/* SEO Technical Footer Links */}
        <div className="pt-8 border-t border-white/10 flex flex-wrap items-center justify-between gap-4 text-[11px] text-slate-400">
          <div className="flex flex-wrap items-center gap-4">
            <span>© {new Date().getFullYear()} Eve's Beauty Salon. All rights reserved.</span>
            <button onClick={() => setModalType('privacy')} className="hover:text-amber-200 underline">
              Privacy Policy
            </button>
            <button onClick={() => setModalType('terms')} className="hover:text-amber-200 underline">
              Terms of Service
            </button>
            <button onClick={() => setModalType('sitemap')} className="hover:text-amber-200 underline">
              XML Sitemap
            </button>
            <button onClick={() => setModalType('robots')} className="hover:text-amber-200 underline">
              Robots.txt
            </button>
          </div>

          <div className="flex items-center gap-4">
            <button onClick={onOpenManual} className="hover:text-amber-300">
              Staff User Manual
            </button>
            <button onClick={onOpenAdmin} className="text-amber-300 hover:underline font-bold">
              Admin Portal
            </button>
          </div>
        </div>
      </div>

      {/* Policy & SEO Modal */}
      {modalType && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 animate-fadeIn">
          <div className="bg-white text-slate-800 rounded-3xl p-6 sm:p-8 max-w-2xl w-full border border-[#F8C8DC] shadow-2xl relative space-y-4">
            <button
              onClick={() => setModalType(null)}
              className="absolute top-4 right-4 p-2 rounded-full bg-slate-100 hover:bg-[#B76E79] hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {modalType === 'privacy' && (
              <div className="space-y-3">
                <h3 className="font-playfair text-xl font-bold text-[#5A2D3C]">Privacy Policy</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Eve's Beauty Salon respects your privacy. Any phone numbers, emails, or booking data submitted via our website are strictly used for confirming appointments and sending appointment reminders. We never share or sell client data to third parties.
                </p>
              </div>
            )}

            {modalType === 'terms' && (
              <div className="space-y-3">
                <h3 className="font-playfair text-xl font-bold text-[#5A2D3C]">Terms & Conditions</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Appointments are held for up to 15 minutes past scheduled time. Please notify us at least 2 hours prior via WhatsApp or phone if you need to reschedule.
                </p>
              </div>
            )}

            {modalType === 'sitemap' && (
              <div className="space-y-3">
                <h3 className="font-playfair text-xl font-bold text-[#5A2D3C]">XML Sitemap Structure</h3>
                <pre className="bg-slate-900 text-amber-200 text-[10px] p-4 rounded-xl overflow-x-auto font-mono">
{`<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url><loc>https://evesbeautysalon.pk/</loc><priority>1.0</priority></url>
  <url><loc>https://evesbeautysalon.pk/#about</loc><priority>0.8</priority></url>
  <url><loc>https://evesbeautysalon.pk/#services</loc><priority>0.9</priority></url>
  <url><loc>https://evesbeautysalon.pk/#gallery</loc><priority>0.8</priority></url>
  <url><loc>https://evesbeautysalon.pk/#pricing</loc><priority>0.8</priority></url>
  <url><loc>https://evesbeautysalon.pk/#blog</loc><priority>0.7</priority></url>
</urlset>`}
                </pre>
              </div>
            )}

            {modalType === 'robots' && (
              <div className="space-y-3">
                <h3 className="font-playfair text-xl font-bold text-[#5A2D3C]">Robots.txt Directive</h3>
                <pre className="bg-slate-900 text-emerald-300 text-[10px] p-4 rounded-xl overflow-x-auto font-mono">
{`User-agent: *
Allow: /
Sitemap: https://evesbeautysalon.pk/sitemap.xml`}
                </pre>
              </div>
            )}
          </div>
        </div>
      )}
    </footer>
  );
};
