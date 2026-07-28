import React, { useState } from 'react';
import { Check, Sparkles, Calendar, Search, Shield, Zap } from 'lucide-react';
import { PACKAGES, SERVICES } from '../data/salonData';

interface PricingSectionProps {
  onOpenBooking: (serviceName?: string) => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({ onOpenBooking }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [pricingSearch, setPricingSearch] = useState<string>('');

  const filteredServices = SERVICES.filter((s) => {
    const matchCat = selectedCategory === 'all' || s.category === selectedCategory;
    const matchQuery =
      !pricingSearch ||
      s.name.toLowerCase().includes(pricingSearch.toLowerCase()) ||
      s.description.toLowerCase().includes(pricingSearch.toLowerCase());
    return matchCat && matchQuery;
  });

  return (
    <section id="pricing" className="py-8 sm:py-12 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-1.5 mb-8">
          <span className="text-[10px] font-bold uppercase tracking-widest text-[#B76E79] bg-[#F8C8DC]/30 px-3 py-0.5 rounded-full border border-[#B76E79]/20 inline-block">
            Combo Packages & Rates
          </span>
          <h2 className="font-playfair text-xl sm:text-2xl lg:text-3xl font-extrabold text-[#5A2D3C]">
            Luxury Pampering Packages
          </h2>
        </div>

        {/* Featured Combo Packages */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
          {PACKAGES.map((pkg) => (
            <div
              key={pkg.id}
              className={`rounded-2xl p-5 flex flex-col justify-between transition-all duration-300 relative ${
                pkg.popular
                  ? 'bg-gradient-to-b from-[#5A2D3C] to-[#2A1A1F] text-white shadow-lg border-2 border-[#D4AF37]'
                  : 'bg-[#FFF8F5] text-slate-800 border border-[#F8C8DC] shadow-sm hover:shadow-md'
              }`}
            >
              {/* Badge */}
              {pkg.badge && (
                <span
                  className={`absolute -top-3 left-1/2 -translate-x-1/2 text-[9px] font-bold uppercase tracking-widest px-3 py-0.5 rounded-full shadow-sm ${
                    pkg.popular ? 'bg-[#D4AF37] text-[#2A1A1F]' : 'bg-[#B76E79] text-white'
                  }`}
                >
                  {pkg.badge}
                </span>
              )}

              <div className="space-y-3 pt-1">
                <div>
                  <h3
                    className={`font-playfair text-lg font-bold ${
                      pkg.popular ? 'text-white' : 'text-[#5A2D3C]'
                    }`}
                  >
                    {pkg.title}
                  </h3>
                  <p className={`text-[11px] ${pkg.popular ? 'text-slate-300' : 'text-slate-600'}`}>
                    {pkg.description}
                  </p>
                </div>

                {/* Price Display */}
                <div className="flex items-baseline gap-2">
                  <span
                    className={`text-2xl font-extrabold ${
                      pkg.popular ? 'text-amber-300' : 'text-[#5A2D3C]'
                    }`}
                  >
                    Rs. {pkg.offerPricePKR.toLocaleString()}
                  </span>
                  <span
                    className={`text-xs line-through ${
                      pkg.popular ? 'text-slate-400' : 'text-slate-400'
                    }`}
                  >
                    Rs. {pkg.originalPricePKR.toLocaleString()}
                  </span>
                </div>

                {/* Included List */}
                <div className="space-y-1.5 pt-3 border-t border-slate-200/20">
                  <span
                    className={`text-[11px] font-semibold block ${
                      pkg.popular ? 'text-amber-200' : 'text-[#B76E79]'
                    }`}
                  >
                    Included Treatments:
                  </span>
                  {pkg.servicesIncluded.map((srv, i) => (
                    <div key={i} className="flex items-center gap-2 text-[11px]">
                      <Check
                        className={`w-3.5 h-3.5 shrink-0 ${
                          pkg.popular ? 'text-[#D4AF37]' : 'text-[#B76E79]'
                        }`}
                      />
                      <span className={pkg.popular ? 'text-slate-200' : 'text-slate-700'}>{srv}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Book Button */}
              <div className="pt-4">
                <button
                  onClick={() => onOpenBooking(pkg.title)}
                  className={`w-full py-2 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-sm ${
                    pkg.popular
                      ? 'bg-gradient-to-r from-[#D4AF37] to-[#B76E79] text-[#2A1A1F] hover:brightness-110'
                      : 'bg-[#5A2D3C] text-white hover:bg-[#B76E79]'
                  }`}
                >
                  <Calendar className="w-3.5 h-3.5" />
                  Book Package
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Complete Individual Service Rate List */}
        <div className="bg-[#FFF8F5] rounded-3xl p-6 sm:p-10 border border-[#F8C8DC]">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8">
            <div>
              <h3 className="font-playfair text-2xl font-bold text-[#5A2D3C]">
                Complete Service Rate Card
              </h3>
              <p className="text-xs text-slate-600">
                Transparent duration & pricing for individual salon services.
              </p>
            </div>

            {/* Category Filter Pills & Search */}
            <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
              <div className="relative flex-1 md:w-48">
                <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={pricingSearch}
                  onChange={(e) => setPricingSearch(e.target.value)}
                  placeholder="Search rates..."
                  className="w-full bg-white text-slate-800 text-xs pl-8 pr-3 py-1.5 rounded-full border border-slate-200 focus:outline-none"
                />
              </div>

              {['all', 'hair', 'makeup', 'skincare', 'nails', 'spa'].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 py-1.5 rounded-full text-xs font-medium capitalize cursor-pointer transition-colors ${
                    selectedCategory === cat
                      ? 'bg-[#5A2D3C] text-white'
                      : 'bg-white text-slate-600 hover:bg-[#F8C8DC]/30'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Pricing Table */}
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead>
                <tr className="border-b border-[#F8C8DC] text-[#5A2D3C] font-playfair text-sm uppercase">
                  <th className="py-3 px-4">Service Treatment</th>
                  <th className="py-3 px-4">Category</th>
                  <th className="py-3 px-4">Duration</th>
                  <th className="py-3 px-4">Price (PKR)</th>
                  <th className="py-3 px-4 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#F8C8DC]/40">
                {filteredServices.map((srv) => (
                  <tr key={srv.id} className="hover:bg-white/60 transition-colors">
                    <td className="py-3.5 px-4 font-semibold text-[#5A2D3C]">
                      {srv.name}
                      {srv.popular && (
                        <span className="ml-2 text-[9px] bg-amber-100 text-amber-800 px-2 py-0.5 rounded-full font-bold uppercase">
                          Popular
                        </span>
                      )}
                    </td>
                    <td className="py-3.5 px-4 text-slate-500 capitalize">{srv.category}</td>
                    <td className="py-3.5 px-4 text-slate-600">{srv.duration}</td>
                    <td className="py-3.5 px-4 font-bold text-[#B76E79]">
                      Rs. {srv.pricePKR.toLocaleString()}
                    </td>
                    <td className="py-3.5 px-4 text-right">
                      <button
                        onClick={() => onOpenBooking(srv.name)}
                        className="bg-[#5A2D3C] hover:bg-[#B76E79] text-white text-xs px-3.5 py-1.5 rounded-full font-medium transition-colors cursor-pointer"
                      >
                        Book
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};
