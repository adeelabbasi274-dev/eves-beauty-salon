import React, { useState } from 'react';
import { Eye, X, Sparkles, SlidersHorizontal, ChevronRight, ChevronLeft } from 'lucide-react';
import { GALLERY_ITEMS } from '../data/salonData';
import { GalleryItem } from '../types';

export const GallerySection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [activeLightboxItem, setActiveLightboxItem] = useState<GalleryItem | null>(null);
  const [sliderPositions, setSliderPositions] = useState<{ [key: string]: number }>({ 'g-4': 50 });

  const categories = [
    'All',
    'Bridal Makeup',
    'Hair Styling',
    'Hair Coloring',
    'Nails',
    'Skin Care',
    'Before & After',
    'Salon Interior',
  ];

  const filteredGallery = GALLERY_ITEMS.filter(
    (item) => activeCategory === 'All' || item.category === activeCategory
  );

  const handleSliderMove = (itemId: string, pos: number) => {
    setSliderPositions((prev) => ({ ...prev, [itemId]: pos }));
  };

  return (
    <section id="gallery" className="py-8 sm:py-10 bg-[#FFF8F5] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-1.5 mb-6">
          <span className="text-[10px] font-bold uppercase tracking-widest text-[#B76E79] bg-[#F8C8DC]/30 px-3 py-0.5 rounded-full border border-[#B76E79]/20 inline-block">
            Our Transformations
          </span>
          <h2 className="font-playfair text-xl sm:text-2xl font-extrabold text-[#5A2D3C]">
            Visual Masterpiece Gallery
          </h2>
        </div>

        {/* Category Filters */}
        <div className="flex items-center justify-center gap-1.5 overflow-x-auto pb-2 mb-6 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3 py-1 rounded-full text-xs font-semibold transition-all cursor-pointer shrink-0 ${
                activeCategory === cat
                  ? 'bg-[#5A2D3C] text-white shadow-sm border border-[#D4AF37]/30'
                  : 'bg-white text-slate-700 hover:bg-[#F8C8DC]/30 border border-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Masonry / Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3.5">
          {filteredGallery.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl overflow-hidden hover:shadow-md transition-all duration-300 group border border-[#F8C8DC]/40 flex flex-col justify-between"
            >
              {/* Image or Before & After Interactive Card */}
              {item.beforeAfter ? (
                <div className="relative h-40 sm:h-48 overflow-hidden select-none bg-slate-200">
                  {/* Before Image */}
                  <img
                    src={item.beforeAfter.before}
                    alt="Before"
                    className="absolute inset-0 w-full h-full object-cover"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                  {/* After Image with Clip */}
                  <div
                    className="absolute inset-0 overflow-hidden"
                    style={{ width: `${sliderPositions[item.id] || 50}%` }}
                  >
                    <img
                      src={item.beforeAfter.after}
                      alt="After"
                      className="absolute inset-0 w-full h-full object-cover max-w-none"
                      style={{ width: '100%', height: '100%' }}
                      loading="lazy"
                      referrerPolicy="no-referrer"
                    />
                  </div>

                  {/* Slider Control Handle */}
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={sliderPositions[item.id] || 50}
                    onChange={(e) => handleSliderMove(item.id, Number(e.target.value))}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-30"
                  />
                  <div
                    className="absolute top-0 bottom-0 w-1 bg-white shadow-2xl z-20 pointer-events-none"
                    style={{ left: `${sliderPositions[item.id] || 50}%` }}
                  >
                    <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-[#5A2D3C] border-2 border-white text-white flex items-center justify-center text-xs shadow-md">
                      <SlidersHorizontal className="w-4 h-4" />
                    </div>
                  </div>

                  <span className="absolute top-3 left-3 bg-black/60 text-white text-[10px] px-2 py-0.5 rounded backdrop-blur-sm z-10">
                    Before / After
                  </span>
                </div>
              ) : (
                <div className="relative h-64 overflow-hidden bg-slate-100">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <button
                      onClick={() => setActiveLightboxItem(item)}
                      className="p-3 rounded-full bg-white/90 text-[#5A2D3C] hover:bg-[#D4AF37] hover:text-white transition-colors shadow-lg cursor-pointer transform group-hover:scale-110"
                    >
                      <Eye className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              )}

              {/* Item Info Footer */}
              <div className="p-4 space-y-1">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#B76E79]">
                  {item.category}
                </span>
                <h4
                  onClick={() => setActiveLightboxItem(item)}
                  className="font-playfair text-sm font-bold text-[#5A2D3C] hover:text-[#B76E79] cursor-pointer line-clamp-1"
                >
                  {item.title}
                </h4>
                <p className="text-slate-500 text-xs line-clamp-2">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Preview Modal */}
      {activeLightboxItem && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 animate-fadeIn">
          <div className="relative max-w-4xl w-full bg-[#2A1A1F] rounded-3xl overflow-hidden border border-[#D4AF37]/40 shadow-2xl">
            <button
              onClick={() => setActiveLightboxItem(null)}
              className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/50 text-white hover:bg-[#B76E79] transition-colors cursor-pointer"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="h-80 md:h-[450px] bg-black">
                <img
                  src={activeLightboxItem.image}
                  alt={activeLightboxItem.title}
                  className="w-full h-full object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className="p-6 md:p-8 space-y-4 flex flex-col justify-between text-white">
                <div className="space-y-3">
                  <span className="text-xs font-bold uppercase tracking-widest text-[#D4AF37]">
                    {activeLightboxItem.category}
                  </span>
                  <h3 className="font-playfair text-2xl font-bold text-white">
                    {activeLightboxItem.title}
                  </h3>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    {activeLightboxItem.description}
                  </p>
                </div>

                <div className="pt-6 border-t border-white/10 flex items-center justify-between">
                  <span className="text-xs text-amber-200">Eve's Beauty Salon Portfolio</span>
                  <button
                    onClick={() => setActiveLightboxItem(null)}
                    className="text-xs bg-[#B76E79] text-white px-4 py-2 rounded-full font-medium"
                  >
                    Close Preview
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
