import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, MessageCircle, Send, CheckCircle2, Globe, ExternalLink } from 'lucide-react';
import { SALON_INFO } from '../data/salonData';

export const ContactSection: React.FC = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({ name: '', phone: '', email: '', subject: '', message: '' });
    }, 5000);
  };

  return (
    <section id="contact" className="py-8 sm:py-10 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-1.5 mb-8">
          <span className="text-[10px] font-bold uppercase tracking-widest text-[#B76E79] bg-[#F8C8DC]/30 px-3 py-0.5 rounded-full border border-[#B76E79]/20 inline-block">
            Get In Touch
          </span>
          <h2 className="font-playfair text-xl sm:text-2xl font-bold text-[#5A2D3C]">
            Visit Us or Contact Our Salon
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-start">
          {/* Contact Details & Google Map Card */}
          <div className="space-y-4">
            <div className="bg-[#FFF8F5] rounded-2xl p-5 border border-[#F8C8DC] shadow-sm space-y-4">
              <h3 className="font-playfair text-lg font-bold text-[#5A2D3C]">
                Salon Location & Info
              </h3>

              <div className="space-y-3 text-xs text-slate-700">
                <div className="flex items-start gap-2.5">
                  <div className="p-2 rounded-lg bg-white border border-[#F8C8DC] text-[#B76E79] shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-bold block text-[#5A2D3C]">Address</span>
                    <p className="text-slate-600">{SALON_INFO.address}</p>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <div className="p-2 rounded-lg bg-white border border-[#F8C8DC] text-[#B76E79] shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-bold block text-[#5A2D3C]">Phone & WhatsApp</span>
                    <a href={`tel:${SALON_INFO.phoneRaw}`} className="text-[#B76E79] hover:underline font-medium">
                      {SALON_INFO.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <div className="p-2 rounded-lg bg-white border border-[#F8C8DC] text-[#B76E79] shrink-0">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-bold block text-[#5A2D3C]">Working Hours</span>
                    <p className="text-slate-600">Mon - Sat: 10:00 AM - 08:00 PM | Sun: 11:00 AM - 06:00 PM</p>
                  </div>
                </div>
              </div>

              {/* Social Media & Google Business Links */}
              <div className="pt-3 border-t border-[#F8C8DC]/60 flex flex-wrap items-center gap-2">
                <a
                  href={SALON_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-[#5A2D3C] hover:bg-[#B76E79] text-white px-3 py-1.5 rounded-full text-xs font-semibold transition-all flex items-center gap-1 shadow-sm"
                >
                  <Globe className="w-3.5 h-3.5 text-[#D4AF37]" />
                  Google Business Profile
                  <ExternalLink className="w-3 h-3" />
                </a>

                <a
                  href={`https://wa.me/${SALON_INFO.phoneRaw}`}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-full text-xs font-semibold transition-all flex items-center gap-1.5 shadow-sm"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  WhatsApp Direct
                </a>
              </div>
            </div>

            {/* Interactive Google Map Box */}
            <div className="rounded-3xl overflow-hidden border border-[#F8C8DC] shadow-md h-72 relative">
              <iframe
                title="Eve's Beauty Salon Google Map Location"
                src={SALON_INFO.googleMapsEmbed}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Interactive Contact Form */}
          <div className="bg-[#FFF8F5] rounded-3xl p-6 sm:p-10 border border-[#F8C8DC] shadow-lg">
            <h3 className="font-playfair text-2xl font-bold text-[#5A2D3C] mb-2">
              Send Us a Message
            </h3>
            <p className="text-slate-600 text-xs sm:text-sm mb-6">
              Fill out the form below and our salon receptionist will respond promptly.
            </p>

            {formSubmitted ? (
              <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-6 text-center space-y-3 animate-fadeIn">
                <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
                <h4 className="font-playfair text-xl font-bold text-emerald-900">Message Received!</h4>
                <p className="text-xs text-emerald-800">
                  Thank you, {formData.name || 'Valued Client'}. Our team at Eve's Beauty Salon will call or message you shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-xs sm:text-sm">
                <div>
                  <label className="block font-medium text-slate-700 mb-1">Full Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Fatima Ahmed"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white focus:outline-none focus:border-[#B76E79]"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-medium text-slate-700 mb-1">Phone Number</label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="e.g. 0303 1234567"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white focus:outline-none focus:border-[#B76E79]"
                    />
                  </div>

                  <div>
                    <label className="block font-medium text-slate-700 mb-1">Email Address</label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. fatima@example.com"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white focus:outline-none focus:border-[#B76E79]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-medium text-slate-700 mb-1">Inquiry Subject</label>
                  <select
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white focus:outline-none focus:border-[#B76E79]"
                  >
                    <option value="">General Question</option>
                    <option value="Bridal Makeup">Bridal Makeup Booking</option>
                    <option value="Keratin / Extenso">Keratin / Hair Extenso Treatment</option>
                    <option value="Facial / Skincare">HydraFacial & Skincare</option>
                    <option value="Nail Art">Nail Extensions & Art</option>
                  </select>
                </div>

                <div>
                  <label className="block font-medium text-slate-700 mb-1">Message Details</label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Write your question or requested appointment date..."
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white focus:outline-none focus:border-[#B76E79]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 bg-gradient-to-r from-[#B76E79] to-[#5A2D3C] hover:from-[#5A2D3C] hover:to-[#B76E79] text-white font-bold rounded-xl shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-4 h-4 text-amber-200" />
                  Submit Inquiry
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
