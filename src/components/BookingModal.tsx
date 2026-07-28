import React, { useState } from 'react';
import { X, Calendar, Clock, User, Phone, Mail, Sparkles, CheckCircle2, MessageCircle, CreditCard, ShieldCheck } from 'lucide-react';
import { BEAUTICIANS, SERVICES, SALON_INFO } from '../data/salonData';
import { Appointment, PaymentMethod } from '../types';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedService?: string;
  onAddAppointment: (appointment: Appointment) => void;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  preselectedService = '',
  onAddAppointment,
}) => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    date: new Date().toISOString().split('T')[0],
    time: '12:00 PM',
    serviceName: preselectedService || SERVICES[0].name,
    beauticianName: BEAUTICIANS[0].name,
    notes: '',
    paymentMethod: 'Cash at Salon' as PaymentMethod,
  });

  const [confirmationRef, setConfirmationRef] = useState<Appointment | null>(null);

  if (!isOpen) return null;

  const selectedServiceObj = SERVICES.find((s) => s.name === formData.serviceName) || SERVICES[0];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const bookingCode = `EVE-${Math.floor(1000 + Math.random() * 9000)}`;

    const newApp: Appointment = {
      id: `app-${Date.now()}`,
      bookingRef: bookingCode,
      fullName: formData.fullName,
      phone: formData.phone,
      email: formData.email || `${formData.fullName.toLowerCase().replace(/\s+/g, '')}@gmail.com`,
      date: formData.date,
      time: formData.time,
      category: selectedServiceObj.category,
      serviceName: formData.serviceName,
      beauticianName: formData.beauticianName,
      notes: formData.notes,
      status: 'Confirmed',
      paymentMethod: formData.paymentMethod,
      paymentStatus: formData.paymentMethod === 'Cash at Salon' ? 'Pending' : 'Paid',
      totalAmountPKR: selectedServiceObj.pricePKR,
      createdAt: new Date().toLocaleString(),
    };

    onAddAppointment(newApp);
    setConfirmationRef(newApp);
  };

  const handleCloseAll = () => {
    setConfirmationRef(null);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto animate-fadeIn">
      <div className="relative max-w-2xl w-full bg-white rounded-3xl overflow-hidden border border-[#F8C8DC] shadow-2xl my-8">
        {/* Modal Header */}
        <div className="bg-gradient-to-r from-[#5A2D3C] to-[#2A1A1F] text-white p-6 sm:p-8 flex justify-between items-center relative">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-widest text-amber-300 bg-white/10 px-3 py-1 rounded-full border border-amber-300/30 inline-block mb-2">
              Online Appointment Booking
            </span>
            <h3 className="font-playfair text-2xl font-bold">Reserve Your Pamper Session</h3>
            <p className="text-xs text-pink-100/80">Eve's Beauty Salon • Jalalpur Jattan</p>
          </div>

          <button
            onClick={handleCloseAll}
            className="p-2 rounded-full bg-white/10 hover:bg-[#B76E79] text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {confirmationRef ? (
          /* Confirmation Receipt View */
          <div className="p-6 sm:p-8 space-y-6 animate-fadeIn">
            <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-6 text-center space-y-3">
              <CheckCircle2 className="w-14 h-14 text-emerald-600 mx-auto" />
              <h4 className="font-playfair text-2xl font-bold text-emerald-900">
                Appointment Confirmed!
              </h4>
              <p className="text-xs text-emerald-800">
                Your booking request has been locked in. Receipt reference code:
              </p>
              <div className="inline-block bg-white text-[#5A2D3C] font-mono font-bold text-xl px-6 py-2 rounded-full border-2 border-[#D4AF37] shadow-sm">
                {confirmationRef.bookingRef}
              </div>
            </div>

            {/* Receipt Summary Table */}
            <div className="bg-[#FFF8F5] rounded-2xl p-5 border border-[#F8C8DC] space-y-2 text-xs text-slate-700">
              <div className="flex justify-between border-b border-slate-200/60 pb-2">
                <span className="font-medium text-slate-500">Client Name:</span>
                <span className="font-bold text-[#5A2D3C]">{confirmationRef.fullName}</span>
              </div>
              <div className="flex justify-between border-b border-slate-200/60 pb-2">
                <span className="font-medium text-slate-500">Service Treatment:</span>
                <span className="font-bold text-[#5A2D3C]">{confirmationRef.serviceName}</span>
              </div>
              <div className="flex justify-between border-b border-slate-200/60 pb-2">
                <span className="font-medium text-slate-500">Date & Time:</span>
                <span className="font-semibold">{confirmationRef.date} at {confirmationRef.time}</span>
              </div>
              <div className="flex justify-between border-b border-slate-200/60 pb-2">
                <span className="font-medium text-slate-500">Beautician:</span>
                <span className="font-semibold">{confirmationRef.beauticianName}</span>
              </div>
              <div className="flex justify-between border-b border-slate-200/60 pb-2">
                <span className="font-medium text-slate-500">Payment Method:</span>
                <span className="font-semibold text-emerald-700">{confirmationRef.paymentMethod}</span>
              </div>
              <div className="flex justify-between pt-1 text-sm font-extrabold text-[#5A2D3C]">
                <span>Total Amount:</span>
                <span className="text-[#B76E79]">Rs. {confirmationRef.totalAmountPKR.toLocaleString()}</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <a
                href={`https://wa.me/${SALON_INFO.phoneRaw}?text=Hello%20Eve's%20Salon,%20I%20just%20booked%20an%20appointment!%20Ref:%20${confirmationRef.bookingRef}%20for%20${confirmationRef.serviceName}%20on%20${confirmationRef.date}.`}
                target="_blank"
                rel="noreferrer"
                className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 rounded-xl text-xs flex items-center justify-center gap-2 shadow-md"
              >
                <MessageCircle className="w-4 h-4" />
                Send Confirmation to WhatsApp
              </a>

              <button
                onClick={handleCloseAll}
                className="w-full bg-[#5A2D3C] hover:bg-[#B76E79] text-white font-bold py-3 rounded-xl text-xs"
              >
                Done / Close Receipt
              </button>
            </div>
          </div>
        ) : (
          /* Form View */
          <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-4 text-xs sm:text-sm">
            {/* Full Name & Phone */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block font-medium text-slate-700 mb-1">Full Name *</label>
                <input
                  type="text"
                  required
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  placeholder="e.g. Zainab Bibi"
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:border-[#B76E79]"
                />
              </div>

              <div>
                <label className="block font-medium text-slate-700 mb-1">Phone Number *</label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="e.g. 0303 9321980"
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:border-[#B76E79]"
                />
              </div>
            </div>

            {/* Email & Date */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block font-medium text-slate-700 mb-1">Email Address</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="e.g. client@gmail.com"
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:border-[#B76E79]"
                />
              </div>

              <div>
                <label className="block font-medium text-slate-700 mb-1">Preferred Date *</label>
                <input
                  type="date"
                  required
                  value={formData.date}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:border-[#B76E79]"
                />
              </div>
            </div>

            {/* Time & Service */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block font-medium text-slate-700 mb-1">Time Slot *</label>
                <select
                  value={formData.time}
                  onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:border-[#B76E79]"
                >
                  <option value="10:30 AM">10:30 AM</option>
                  <option value="12:00 PM">12:00 PM (Noon)</option>
                  <option value="01:30 PM">01:30 PM</option>
                  <option value="03:00 PM">03:00 PM</option>
                  <option value="04:30 PM">04:30 PM</option>
                  <option value="06:00 PM">06:00 PM</option>
                  <option value="07:00 PM">07:00 PM</option>
                </select>
              </div>

              <div>
                <label className="block font-medium text-slate-700 mb-1">Select Service *</label>
                <select
                  value={formData.serviceName}
                  onChange={(e) => setFormData({ ...formData, serviceName: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:border-[#B76E79]"
                >
                  {SERVICES.map((srv) => (
                    <option key={srv.id} value={srv.name}>
                      {srv.name} (Rs. {srv.pricePKR.toLocaleString()})
                    </option>
                  ))}
                  <option value="Royal Bridal Complete Combo">
                    Royal Bridal Complete Combo (Rs. 35,000)
                  </option>
                </select>
              </div>
            </div>

            {/* Beautician & Payment Method */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block font-medium text-slate-700 mb-1">Preferred Beautician</label>
                <select
                  value={formData.beauticianName}
                  onChange={(e) => setFormData({ ...formData, beauticianName: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:border-[#B76E79]"
                >
                  {BEAUTICIANS.map((b) => (
                    <option key={b.id} value={b.name}>
                      {b.name} ({b.role})
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block font-medium text-slate-700 mb-1">Payment Method</label>
                <select
                  value={formData.paymentMethod}
                  onChange={(e) => setFormData({ ...formData, paymentMethod: e.target.value as PaymentMethod })}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:border-[#B76E79]"
                >
                  <option value="Cash at Salon">Cash at Salon Reception</option>
                  <option value="Credit/Debit Card">Credit / Debit Card Online</option>
                  <option value="JazzCash">JazzCash Mobile Wallet</option>
                  <option value="EasyPaisa">EasyPaisa Mobile Wallet</option>
                </select>
              </div>
            </div>

            {/* Notes */}
            <div>
              <label className="block font-medium text-slate-700 mb-1">Special Notes / Requests</label>
              <textarea
                rows={2}
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                placeholder="Mention allergies, hair length, or event specifics..."
                className="w-full px-4 py-2 rounded-xl border border-slate-200 focus:outline-none focus:border-[#B76E79]"
              />
            </div>

            {/* Price Preview Card */}
            <div className="bg-[#FFF8F5] p-3 rounded-xl border border-[#F8C8DC] flex justify-between items-center text-xs">
              <span className="font-semibold text-slate-700">Total Treatment Price:</span>
              <span className="font-extrabold text-[#5A2D3C] text-sm">
                Rs. {selectedServiceObj.pricePKR.toLocaleString()}
              </span>
            </div>

            <button
              type="submit"
              className="w-full py-3.5 bg-gradient-to-r from-[#B76E79] via-[#5A2D3C] to-[#B76E79] hover:brightness-110 text-white font-bold rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 text-sm cursor-pointer"
            >
              <Calendar className="w-4 h-4 text-amber-200" />
              Confirm Appointment Booking
            </button>
          </form>
        )}
      </div>
    </div>
  );
};
