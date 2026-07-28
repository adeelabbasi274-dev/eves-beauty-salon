import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, Calendar, Search, Menu, X, ShieldAlert, BookOpen, MapPin, Clock } from 'lucide-react';
import { SALON_INFO } from '../data/salonData';

interface HeaderProps {
  onOpenBooking: (serviceName?: string) => void;
  onOpenAdmin: () => void;
  onOpenManual: () => void;
  activeSection: string;
  setActiveSection: (section: string) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  onOpenBooking,
  onOpenAdmin,
  onOpenManual,
  activeSection,
  setActiveSection,
  searchQuery,
  setSearchQuery,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'About Us', id: 'about' },
    { name: 'Services', id: 'services' },
    { name: 'Gallery', id: 'gallery' },
    { name: 'Pricing', id: 'pricing' },
    { name: 'Testimonials', id: 'testimonials' },
    { name: 'Beauty Blog', id: 'blog' },
    { name: 'Contact', id: 'contact' },
  ];

  const handleNavClick = (id: string) => {
    setActiveSection(id);
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Top Banner Bar */}
      <div className="bg-[#5A2D3C] text-[#FFF8F5] text-xs py-2 px-4 hidden md:block border-b border-[#D4AF37]/30">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 text-amber-200">
              <MapPin className="w-3.5 h-3.5 text-[#D4AF37]" />
              {SALON_INFO.address}
            </span>
            <span className="flex items-center gap-1.5 text-pink-100">
              <Clock className="w-3.5 h-3.5 text-[#F8C8DC]" />
              Mon - Sat: 10AM - 8PM | Sun: 11AM - 6PM
            </span>
          </div>
          <div className="flex items-center gap-4">
            <button
              onClick={onOpenManual}
              className="hover:text-amber-300 transition-colors flex items-center gap-1 cursor-pointer"
            >
              <BookOpen className="w-3.5 h-3.5" />
              Staff Manual
            </button>
            <span className="text-pink-300/40">|</span>
            <button
              onClick={onOpenAdmin}
              className="hover:text-amber-300 transition-colors flex items-center gap-1 cursor-pointer font-medium text-amber-200"
            >
              <ShieldAlert className="w-3.5 h-3.5" />
              Admin Portal
            </button>
          </div>
        </div>
      </div>

      {/* Main Sticky Header */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-lg py-3 border-b border-[#F8C8DC]'
            : 'bg-[#FFF8F5]/90 backdrop-blur-sm py-4 border-b border-[#F8C8DC]/40'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <div
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#B76E79] via-[#D4AF37] to-[#5A2D3C] p-0.5 shadow-md group-hover:scale-105 transition-transform">
              <div className="w-full h-full bg-[#FFF8F5] rounded-full flex items-center justify-center font-playfair font-bold text-[#5A2D3C] text-xl">
                E
              </div>
            </div>
            <div>
              <span className="font-playfair text-xl sm:text-2xl font-bold tracking-tight text-[#5A2D3C] block leading-tight">
                Eve's <span className="text-[#B76E79]">Beauty Salon</span>
              </span>
              <span className="text-[10px] tracking-widest text-slate-500 uppercase font-medium block">
                Ladies Salon & Bridal Studio
              </span>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`text-xs font-medium uppercase tracking-widest transition-colors hover:text-[#B76E79] cursor-pointer relative py-1 ${
                  activeSection === link.id
                    ? 'text-[#B76E79] font-bold border-b-2 border-[#B76E79] pb-1'
                    : 'text-[#433838] hover:text-[#B76E79]'
                }`}
              >
                {link.name}
              </button>
            ))}
          </nav>

          {/* Action CTA Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Search Trigger */}
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              className="p-2 text-slate-600 hover:text-[#B76E79] hover:bg-[#F8C8DC]/20 rounded-full transition-colors cursor-pointer"
              title="Search Services & Beauty Tips"
            >
              <Search className="w-5 h-5" />
            </button>

            {/* Quick WhatsApp */}
            <a
              href={`https://wa.me/${SALON_INFO.phoneRaw}?text=Hello%20Eve's%20Beauty%20Salon,%20I%20would%20like%20to%20inquire%20about%20booking%20an%20appointment.`}
              target="_blank"
              rel="noreferrer"
              className="bg-emerald-500 hover:bg-emerald-600 text-white p-2.5 rounded-full transition-all hover:scale-105 shadow-sm"
              title="WhatsApp Us"
            >
              <MessageCircle className="w-4 h-4" />
            </a>

            {/* Book Appointment CTA */}
            <button
              onClick={() => onOpenBooking()}
              className="bg-gradient-to-r from-[#D4AF37] to-[#B76E79] hover:brightness-110 text-white px-6 py-2.5 rounded-full font-semibold text-[11px] uppercase tracking-widest shadow-[0_10px_25px_-5px_rgba(183,110,121,0.3)] transition-all flex items-center gap-2 cursor-pointer border border-amber-200/40"
            >
              <Calendar className="w-3.5 h-3.5 text-amber-200" />
              Book Now
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex items-center gap-2 sm:hidden">
            <button
              onClick={() => onOpenBooking()}
              className="bg-[#B76E79] text-white text-xs px-3 py-1.5 rounded-full flex items-center gap-1 shadow-sm"
            >
              <Calendar className="w-3.5 h-3.5" />
              Book
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-[#5A2D3C] hover:bg-[#F8C8DC]/30 transition-colors"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Search Bar Slide Down */}
        {searchOpen && (
          <div className="bg-white border-t border-b border-[#F8C8DC] py-3 px-4 shadow-inner animate-fadeIn">
            <div className="max-w-3xl mx-auto flex items-center gap-2">
              <Search className="w-5 h-5 text-slate-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search services (e.g. HydraFacial, Keratin, Bridal, Hair Cut)..."
                className="w-full bg-transparent focus:outline-none text-slate-800 text-sm py-1"
                autoFocus
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="text-xs text-slate-500 hover:text-slate-800"
                >
                  Clear
                </button>
              )}
              <button
                onClick={() => setSearchOpen(false)}
                className="text-xs text-[#B76E79] font-medium ml-2"
              >
                Close
              </button>
            </div>
          </div>
        )}

        {/* Mobile Nav Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white/95 backdrop-blur-xl border-b border-[#F8C8DC] px-4 pt-3 pb-6 shadow-xl animate-fadeIn">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`text-left px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                    activeSection === link.id
                      ? 'bg-[#F8C8DC]/30 text-[#5A2D3C] font-semibold border-l-4 border-[#B76E79]'
                      : 'text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  {link.name}
                </button>
              ))}

              <div className="pt-4 border-t border-slate-100 flex flex-col gap-3">
                <a
                  href={`tel:${SALON_INFO.phoneRaw}`}
                  className="w-full py-2.5 px-4 rounded-xl border border-[#B76E79] text-[#5A2D3C] text-sm font-medium flex items-center justify-center gap-2"
                >
                  <Phone className="w-4 h-4 text-[#B76E79]" />
                  Call Salon (+92 303 9321980)
                </a>

                <div className="flex items-center justify-between pt-2">
                  <button
                    onClick={() => {
                      setMobileMenuOpen(false);
                      onOpenManual();
                    }}
                    className="text-xs text-slate-600 hover:text-[#B76E79] flex items-center gap-1"
                  >
                    <BookOpen className="w-3.5 h-3.5" />
                    Staff Manual
                  </button>

                  <button
                    onClick={() => {
                      setMobileMenuOpen(false);
                      onOpenAdmin();
                    }}
                    className="text-xs text-[#5A2D3C] font-medium hover:text-[#B76E79] flex items-center gap-1"
                  >
                    <ShieldAlert className="w-3.5 h-3.5 text-[#D4AF37]" />
                    Admin Login
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
