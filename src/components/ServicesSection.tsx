import React, { useState } from 'react';
import { Clock, CheckCircle2, Calendar, Sparkles, Scissors, Sparkle, Heart, Droplets, Smile, Search } from 'lucide-react';
import { SERVICES } from '../data/salonData';
import { ServiceCategory, ServiceItem } from '../types';

interface ServicesSectionProps {
  onSelectServiceToBook: (serviceName: string) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onSelectServiceToBook,
  searchQuery,
  setSearchQuery,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<ServiceCategory | 'all'>('all');

  const categories: { id: ServiceCategory | 'all'; name: string; icon: React.ReactNode }[] = [
    { id: 'all', name: 'All Services', icon: <Sparkles className="w-4 h-4" /> },
    { id: 'hair', name: 'Hair Care & Style', icon: <Scissors className="w-4 h-4" /> },
    { id: 'makeup', name: 'Bridal & Party Makeup', icon: <Sparkle className="w-4 h-4" /> },
    { id: 'skincare', name: 'Skin Care & Facials', icon: <Droplets className="w-4 h-4" /> },
    { id: 'nails', name: 'Nails & Beauty', icon: <Heart className="w-4 h-4" /> },
    { id: 'spa', name: 'Relaxing Spa', icon: <Smile className="w-4 h-4" /> },
  ];

  const filteredServices = SERVICES.filter((service) => {
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    const matchesSearch =
      !searchQuery ||
      service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="services" className="py-12 sm:py-16 bg-[#FFF8F5] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-1 mb-6">
          <span className="text-[10px] font-bold uppercase tracking-widest text-[#B76E79] bg-[#F8C8DC]/30 px-3 py-0.5 rounded-full border border-[#B76E79]/20 inline-block">
            Our Service Menu
          </span>
          <h2 className="font-playfair text-xl sm:text-2xl font-bold text-[#5A2D3C]">
            Beauty & Wellness Treatments
          </h2>
        </div>

        {/* Category Tabs & Local Search Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 mb-6">
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 w-full sm:w-auto no-scrollbar">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all flex items-center gap-1.5 shrink-0 cursor-pointer ${
                  selectedCategory === cat.id
                    ? 'bg-[#5A2D3C] text-white shadow-sm font-semibold'
                    : 'bg-white text-slate-700 hover:bg-[#F8C8DC]/20 border border-slate-200'
                }`}
              >
                {cat.icon}
                {cat.name}
              </button>
            ))}
          </div>

          {/* Quick Search */}
          <div className="relative w-full sm:w-48">
            <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Filter..."
              className="w-full bg-white text-slate-800 text-xs pl-8 pr-3 py-1.5 rounded-full border border-slate-200 focus:outline-none focus:border-[#B76E79]"
            />
          </div>
        </div>

        {/* Services Grid */}
        {filteredServices.length === 0 ? (
          <div className="text-center py-8 bg-white rounded-2xl border border-dashed border-slate-200">
            <p className="text-slate-500 text-xs mb-2">No services match your current filter query "{searchQuery}".</p>
            <button
              onClick={() => {
                setSelectedCategory('all');
                setSearchQuery('');
              }}
              className="text-[11px] bg-[#B76E79] text-white px-3 py-1 rounded-full font-medium"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredServices.map((service) => (
              <div
                key={service.id}
                className="bg-white rounded-xl overflow-hidden hover:shadow-md transition-all duration-300 flex flex-col justify-between border border-[#F8C8DC]/40"
              >
                <div>
                  {/* Service Image Header */}
                  <div className="relative h-36 overflow-hidden bg-slate-100">
                    <img
                      src={service.image}
                      alt={service.name}
                      className="w-full h-full object-cover"
                      loading="lazy"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

                    {/* Popular Badge */}
                    {service.popular && (
                      <span className="absolute top-2 right-2 bg-[#D4AF37] text-[#2A1A1F] text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full shadow-sm flex items-center gap-1">
                        <Sparkles className="w-2.5 h-2.5" /> Popular
                      </span>
                    )}

                    {/* Price Tag */}
                    <div className="absolute bottom-2 left-2 bg-white/95 backdrop-blur-md px-2.5 py-0.5 rounded-full text-[#5A2D3C] font-bold text-xs shadow-sm border border-[#F8C8DC]">
                      Rs. {service.pricePKR.toLocaleString()}
                    </div>

                    {/* Duration */}
                    <div className="absolute bottom-2 right-2 bg-[#2A1A1F]/80 backdrop-blur-md text-amber-200 text-[10px] px-2 py-0.5 rounded-full flex items-center gap-1">
                      <Clock className="w-2.5 h-2.5 text-[#D4AF37]" />
                      {service.duration}
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-3 space-y-1.5">
                    <div className="flex items-center justify-between">
                      <span className="text-[9px] uppercase tracking-widest font-semibold text-[#B76E79]">
                        {service.category}
                      </span>
                    </div>
                    <h3 className="font-playfair text-base font-bold text-[#5A2D3C]">
                      {service.name}
                    </h3>
                    <p className="text-slate-600 text-[11px] leading-snug line-clamp-2">
                      {service.description}
                    </p>
                  </div>
                </div>

                {/* Card Action Footer */}
                <div className="p-3 pt-0">
                  <button
                    onClick={() => onSelectServiceToBook(service.name)}
                    className="w-full bg-[#FFF8F5] hover:bg-[#5A2D3C] text-[#5A2D3C] hover:text-white border border-[#B76E79]/50 py-1.5 rounded-lg text-xs font-semibold transition-all duration-200 flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <Calendar className="w-3.5 h-3.5 text-[#B76E79]" />
                    Book Service
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
