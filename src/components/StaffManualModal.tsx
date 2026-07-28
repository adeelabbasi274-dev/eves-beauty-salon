import React from 'react';
import { X, BookOpen, CheckCircle, ShieldCheck, Heart, Sparkles, Phone } from 'lucide-react';
import { STAFF_MANUAL_SECTIONS, SALON_INFO } from '../data/salonData';

interface StaffManualModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const StaffManualModal: React.FC<StaffManualModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto animate-fadeIn">
      <div className="relative max-w-3xl w-full bg-white rounded-3xl overflow-hidden border border-[#F8C8DC] shadow-2xl my-8">
        {/* Modal Header */}
        <div className="bg-gradient-to-r from-[#5A2D3C] to-[#2A1A1F] text-white p-6 sm:p-8 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-2xl bg-amber-300/20 text-amber-300 border border-amber-300/40">
              <BookOpen className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-playfair text-2xl font-bold">Staff Onboarding & Protocol Manual</h3>
              <p className="text-xs text-pink-100/80">Eve's Beauty Salon • Operations Guidelines</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full bg-white/10 hover:bg-[#B76E79] text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[70vh] overflow-y-auto text-xs sm:text-sm text-slate-700">
          <div className="bg-[#FFF8F5] p-4 rounded-2xl border border-[#F8C8DC] text-xs space-y-1">
            <span className="font-bold text-[#5A2D3C] block">Welcome to the Team!</span>
            <p className="text-slate-600">
              This standard operational manual serves as the baseline for hygiene, client courtesy, and service excellence at Eve's Beauty Salon in Jalalpur Jattan.
            </p>
          </div>

          {STAFF_MANUAL_SECTIONS.map((sec, idx) => (
            <div key={idx} className="space-y-3 pt-2 border-b border-slate-100 pb-4">
              <h4 className="font-playfair text-lg font-bold text-[#5A2D3C] flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#B76E79]" /> {sec.title}
              </h4>
              <div className="space-y-2">
                {sec.content.map((item, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs text-slate-700">
                    <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}

          <div className="bg-[#5A2D3C] text-white p-4 rounded-2xl flex items-center justify-between text-xs">
            <div>
              <span className="font-bold block text-amber-200">Management Emergency Contact</span>
              <span>Owner & Salon Desk Line: {SALON_INFO.phone}</span>
            </div>
            <a
              href={`tel:${SALON_INFO.phoneRaw}`}
              className="bg-[#B76E79] hover:bg-amber-600 text-white font-bold px-3 py-1.5 rounded-lg flex items-center gap-1"
            >
              <Phone className="w-3.5 h-3.5" /> Call
            </a>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-slate-50 p-4 border-t border-slate-100 text-right">
          <button
            onClick={onClose}
            className="bg-[#5A2D3C] hover:bg-[#B76E79] text-white text-xs px-6 py-2 rounded-xl font-bold cursor-pointer"
          >
            I Acknowledge & Understand
          </button>
        </div>
      </div>
    </div>
  );
};
