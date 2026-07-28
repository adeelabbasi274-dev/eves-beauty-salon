import React, { useState, useEffect } from 'react';
import { MessageCircle, Phone, ArrowUp } from 'lucide-react';
import { SALON_INFO } from '../data/salonData';

interface FloatingControlsProps {
  onOpenBooking: () => void;
}

export const FloatingControls: React.FC<FloatingControlsProps> = ({ onOpenBooking }) => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [showCookieConsent, setShowCookieConsent] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Floating Action Buttons Stack (Right Bottom) */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3 pointer-events-auto">
        {/* Scroll to Top */}
        {showScrollTop && (
          <button
            onClick={handleScrollToTop}
            className="w-11 h-11 rounded-full bg-[#5A2D3C] hover:bg-[#B76E79] text-white shadow-lg flex items-center justify-center transition-all transform hover:scale-110 cursor-pointer border border-[#D4AF37]/40"
            title="Scroll to Top"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        )}

        {/* Floating WhatsApp Button */}
        <a
          href={`https://wa.me/${SALON_INFO.phoneRaw}?text=Hello%20Eve's%20Beauty%20Salon,%20I%20would%20like%20to%20inquire%20about%20booking.`}
          target="_blank"
          rel="noreferrer"
          className="w-14 h-14 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white shadow-2xl flex items-center justify-center transition-all transform hover:scale-110 border-2 border-white animate-bounce"
          style={{ animationDuration: '3s' }}
          title="WhatsApp Us Direct"
        >
          <MessageCircle className="w-7 h-7" />
        </a>
      </div>

      {/* Floating Click-to-Call (Left Bottom) */}
      <div className="fixed bottom-6 left-6 z-40 hidden sm:block">
        <a
          href={`tel:${SALON_INFO.phoneRaw}`}
          className="bg-white/95 backdrop-blur-md hover:bg-[#5A2D3C] text-[#5A2D3C] hover:text-white px-4 py-2.5 rounded-full shadow-lg border border-[#F8C8DC] transition-all flex items-center gap-2 text-xs font-bold"
        >
          <Phone className="w-4 h-4 text-[#B76E79]" />
          Call +92 303 9321980
        </a>
      </div>

      {/* Cookie Consent Banner */}
      {showCookieConsent && (
        <div className="fixed bottom-0 inset-x-0 z-50 bg-[#2A1A1F]/95 backdrop-blur-md text-white p-4 border-t border-[#D4AF37]/30 shadow-2xl animate-fadeIn">
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
            <p className="text-slate-300 text-center sm:text-left">
              🍪 We use cookies and local storage to personalize your salon appointment experience, remember preferences, and optimize local booking speed.
            </p>
            <div className="flex items-center gap-3 shrink-0">
              <button
                onClick={() => setShowCookieConsent(false)}
                className="bg-[#D4AF37] hover:bg-[#B76E79] text-[#2A1A1F] hover:text-white font-bold px-5 py-2 rounded-full transition-colors cursor-pointer"
              >
                Accept All
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
