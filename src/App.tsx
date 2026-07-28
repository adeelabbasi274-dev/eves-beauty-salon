import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ServicesSection } from './components/ServicesSection';
import { AboutSection } from './components/AboutSection';
import { BridalHighlight } from './components/BridalHighlight';
import { GallerySection } from './components/GallerySection';
import { PricingSection } from './components/PricingSection';
import { WhyChooseUs } from './components/WhyChooseUs';
import { TestimonialsSection } from './components/TestimonialsSection';
import { BlogSection } from './components/BlogSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';
import { AdminDashboard } from './components/AdminDashboard';
import { StaffManualModal } from './components/StaffManualModal';
import { FloatingControls } from './components/FloatingControls';
import { SAMPLE_APPOINTMENTS } from './data/salonData';
import { Appointment, AppointmentStatus, NotificationLog } from './types';

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('home');
  const [bookingModalOpen, setBookingModalOpen] = useState<boolean>(false);
  const [preselectedService, setPreselectedService] = useState<string>('');
  const [adminOpen, setAdminOpen] = useState<boolean>(false);
  const [staffManualOpen, setStaffManualOpen] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>('');

  const [appointments, setAppointments] = useState<Appointment[]>(SAMPLE_APPOINTMENTS);
  const [notificationLogs, setNotificationLogs] = useState<NotificationLog[]>([
    {
      id: 'log-1',
      appointmentRef: 'EVE-9421',
      recipientPhone: '+92 300 1234567',
      recipientEmail: 'zainab@example.com',
      channel: 'WhatsApp',
      type: 'Booking Confirmation',
      content: 'Your appointment for Royal Signature Bridal Makeup on 2026-07-28 is confirmed.',
      sentAt: '2026-07-26 10:16 AM',
      status: 'Delivered',
    },
  ]);

  const handleOpenBooking = (serviceName?: string) => {
    if (serviceName) {
      setPreselectedService(serviceName);
    } else {
      setPreselectedService('');
    }
    setBookingModalOpen(true);
  };

  const handleAddAppointment = (newApp: Appointment) => {
    setAppointments([newApp, ...appointments]);

    // Generate automated notification log
    const newLog: NotificationLog = {
      id: `log-${Date.now()}`,
      appointmentRef: newApp.bookingRef,
      recipientPhone: newApp.phone,
      recipientEmail: newApp.email,
      channel: 'WhatsApp',
      type: 'Booking Confirmation',
      content: `Booking ${newApp.bookingRef} confirmed for ${newApp.serviceName} on ${newApp.date} at ${newApp.time}.`,
      sentAt: new Date().toLocaleString(),
      status: 'Delivered',
    };
    setNotificationLogs([newLog, ...notificationLogs]);
  };

  const handleUpdateStatus = (
    id: string,
    newStatus: AppointmentStatus,
    paymentStatus?: 'Paid' | 'Pending'
  ) => {
    setAppointments((prev) =>
      prev.map((app) => {
        if (app.id === id) {
          const updated = { ...app, status: newStatus };
          if (paymentStatus) {
            updated.paymentStatus = paymentStatus;
          }
          return updated;
        }
        return app;
      })
    );
  };

  return (
    <div className="min-h-screen bg-[#FFF8F5] text-slate-800 font-poppins selection:bg-[#F8C8DC] selection:text-[#5A2D3C] flex flex-col justify-between">
      {/* Sticky Header */}
      <Header
        onOpenBooking={handleOpenBooking}
        onOpenAdmin={() => setAdminOpen(true)}
        onOpenManual={() => setStaffManualOpen(true)}
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />

      {/* Main Page Content */}
      <main className="flex-grow">
        {/* Quick View Navigation Tabs */}
        <Hero onOpenBooking={() => handleOpenBooking()} />

        {/* Section View Tabs for Fast Navigation */}
        <div className="bg-white border-y border-[#F8C8DC]/60 sticky top-[60px] z-30 shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between overflow-x-auto py-2.5 no-scrollbar gap-2 sm:gap-4 text-xs font-semibold uppercase tracking-wider">
              <button
                onClick={() => {
                  setActiveSection('all');
                  const el = document.getElementById('services');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className={`px-4 py-2 rounded-full transition-all cursor-pointer whitespace-nowrap ${
                  activeSection === 'all' || activeSection === 'home'
                    ? 'bg-[#5A2D3C] text-white shadow-sm'
                    : 'text-slate-600 hover:text-[#5A2D3C] hover:bg-[#F8C8DC]/30'
                }`}
              >
                Full Overview
              </button>
              <button
                onClick={() => {
                  setActiveSection('services');
                  const el = document.getElementById('services');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className={`px-4 py-2 rounded-full transition-all cursor-pointer whitespace-nowrap ${
                  activeSection === 'services'
                    ? 'bg-[#5A2D3C] text-white shadow-sm'
                    : 'text-slate-600 hover:text-[#5A2D3C] hover:bg-[#F8C8DC]/30'
                }`}
              >
                Services Menu
              </button>
              <button
                onClick={() => {
                  setActiveSection('pricing');
                  const el = document.getElementById('pricing');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className={`px-4 py-2 rounded-full transition-all cursor-pointer whitespace-nowrap ${
                  activeSection === 'pricing'
                    ? 'bg-[#5A2D3C] text-white shadow-sm'
                    : 'text-slate-600 hover:text-[#5A2D3C] hover:bg-[#F8C8DC]/30'
                }`}
              >
                Packages & Rates
              </button>
              <button
                onClick={() => {
                  setActiveSection('gallery');
                  const el = document.getElementById('gallery');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className={`px-4 py-2 rounded-full transition-all cursor-pointer whitespace-nowrap ${
                  activeSection === 'gallery'
                    ? 'bg-[#5A2D3C] text-white shadow-sm'
                    : 'text-slate-600 hover:text-[#5A2D3C] hover:bg-[#F8C8DC]/30'
                }`}
              >
                Gallery
              </button>
              <button
                onClick={() => {
                  setActiveSection('about');
                  const el = document.getElementById('about');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className={`px-4 py-2 rounded-full transition-all cursor-pointer whitespace-nowrap ${
                  activeSection === 'about'
                    ? 'bg-[#5A2D3C] text-white shadow-sm'
                    : 'text-slate-600 hover:text-[#5A2D3C] hover:bg-[#F8C8DC]/30'
                }`}
              >
                About & Reviews
              </button>
              <button
                onClick={() => {
                  setActiveSection('contact');
                  const el = document.getElementById('contact');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className={`px-4 py-2 rounded-full transition-all cursor-pointer whitespace-nowrap ${
                  activeSection === 'contact'
                    ? 'bg-[#5A2D3C] text-white shadow-sm'
                    : 'text-slate-600 hover:text-[#5A2D3C] hover:bg-[#F8C8DC]/30'
                }`}
              >
                Contact & Map
              </button>
            </div>
          </div>
        </div>

        {/* Services Section */}
        {(activeSection === 'all' || activeSection === 'home' || activeSection === 'services') && (
          <ServicesSection
            onSelectServiceToBook={handleOpenBooking}
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
          />
        )}

        {/* Royal Bridal Showcase Highlight */}
        {(activeSection === 'all' || activeSection === 'home' || activeSection === 'services') && (
          <BridalHighlight onOpenBooking={handleOpenBooking} />
        )}

        {/* Package & Service Rates Section */}
        {(activeSection === 'all' || activeSection === 'home' || activeSection === 'pricing') && (
          <PricingSection onOpenBooking={handleOpenBooking} />
        )}

        {/* Visual Gallery Section */}
        {(activeSection === 'all' || activeSection === 'home' || activeSection === 'gallery') && (
          <GallerySection />
        )}

        {/* About Us Section */}
        {(activeSection === 'all' || activeSection === 'about') && (
          <AboutSection />
        )}

        {/* Why Choose Us Section */}
        {(activeSection === 'about') && (
          <WhyChooseUs />
        )}

        {/* Testimonials Section */}
        {(activeSection === 'all' || activeSection === 'about') && (
          <TestimonialsSection />
        )}

        {/* Beauty Journal Blog Section */}
        {(activeSection === 'about') && (
          <BlogSection />
        )}

        {/* Contact & Map Section */}
        {(activeSection === 'all' || activeSection === 'home' || activeSection === 'contact') && (
          <ContactSection />
        )}
      </main>

      {/* Footer */}
      <Footer
        onOpenBooking={() => handleOpenBooking()}
        onOpenAdmin={() => setAdminOpen(true)}
        onOpenManual={() => setStaffManualOpen(true)}
        setActiveSection={setActiveSection}
      />

      {/* Modals & Floating Overlays */}
      <BookingModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
        preselectedService={preselectedService}
        onAddAppointment={handleAddAppointment}
      />

      <AdminDashboard
        isOpen={adminOpen}
        onClose={() => setAdminOpen(false)}
        appointments={appointments}
        onUpdateStatus={handleUpdateStatus}
        notificationLogs={notificationLogs}
      />

      <StaffManualModal
        isOpen={staffManualOpen}
        onClose={() => setStaffManualOpen(false)}
      />

      <FloatingControls onOpenBooking={() => handleOpenBooking()} />
    </div>
  );
}
