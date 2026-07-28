import React, { useState } from 'react';
import { Star, Quote, Plus, CheckCircle2, User, MessageSquare } from 'lucide-react';
import { TESTIMONIALS } from '../data/salonData';
import { Testimonial } from '../types';

export const TestimonialsSection: React.FC = () => {
  const [reviewsList, setReviewsList] = useState<Testimonial[]>(TESTIMONIALS);
  const [showReviewModal, setShowReviewModal] = useState<boolean>(false);
  const [newReview, setNewReview] = useState({
    name: '',
    review: '',
    rating: 5,
    service: 'Royal Signature Bridal Makeup',
    location: 'Jalalpur Jattan',
  });

  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newReview.name || !newReview.review) return;

    const item: Testimonial = {
      id: `rev-${Date.now()}`,
      name: newReview.name,
      photo: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
      rating: newReview.rating,
      review: newReview.review,
      service: newReview.service,
      date: 'Just now',
      location: newReview.location || 'Jalalpur Jattan',
      verified: true,
    };

    setReviewsList([item, ...reviewsList]);
    setShowReviewModal(false);
    setNewReview({ name: '', review: '', rating: 5, service: 'Royal Signature Bridal Makeup', location: 'Jalalpur Jattan' });
  };

  return (
    <section id="testimonials" className="py-8 sm:py-10 bg-[#FFF8F5] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
          <div className="space-y-1">
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#B76E79] bg-[#F8C8DC]/30 px-3 py-0.5 rounded-full border border-[#B76E79]/20 inline-block">
              Client Reviews
            </span>
            <h2 className="font-playfair text-xl sm:text-2xl font-bold text-[#5A2D3C]">
              Loved by Brides & Ladies Across Punjab
            </h2>
          </div>

          <button
            onClick={() => setShowReviewModal(true)}
            className="bg-[#5A2D3C] hover:bg-[#B76E79] text-white px-4 py-1.5 rounded-full text-xs font-semibold transition-all flex items-center gap-1.5 shadow-sm cursor-pointer shrink-0 self-start sm:self-auto"
          >
            <Plus className="w-3.5 h-3.5 text-[#D4AF37]" />
            Write Review
          </button>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {reviewsList.map((rev) => (
            <div
              key={rev.id}
              className="bg-white rounded-xl p-4 flex flex-col justify-between hover:shadow-md transition-all duration-300 border border-[#F8C8DC]/50 relative"
            >
              <Quote className="w-6 h-6 text-[#F8C8DC]/80 absolute top-3 right-3 pointer-events-none" />

              <div className="space-y-2">
                {/* Rating */}
                <div className="flex items-center gap-0.5 text-amber-400">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                {/* Review Quote */}
                <p className="text-slate-700 text-xs leading-relaxed italic line-clamp-3">
                  "{rev.review}"
                </p>
              </div>

              {/* Author Footer */}
              <div className="pt-3 mt-3 border-t border-slate-100 flex items-center gap-2.5">
                <img
                  src={rev.photo}
                  alt={rev.name}
                  className="w-8 h-8 rounded-full object-cover border border-[#B76E79]"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <div className="flex items-center gap-1">
                    <span className="font-playfair font-bold text-xs text-[#5A2D3C]">{rev.name}</span>
                    {rev.verified && (
                      <CheckCircle2 className="w-3 h-3 text-emerald-500" />
                    )}
                  </div>
                  <span className="text-[10px] text-slate-500 block">
                    {rev.service} • {rev.location}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Write a Review Modal */}
      {showReviewModal && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 animate-fadeIn">
          <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-lg w-full border border-[#F8C8DC] shadow-2xl space-y-6">
            <div className="flex justify-between items-center border-b border-slate-100 pb-4">
              <h3 className="font-playfair text-xl font-bold text-[#5A2D3C]">Share Your Experience</h3>
              <button
                onClick={() => setShowReviewModal(false)}
                className="text-slate-400 hover:text-slate-800 text-sm"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleSubmitReview} className="space-y-4 text-xs sm:text-sm">
              <div>
                <label className="block font-medium text-slate-700 mb-1">Your Full Name</label>
                <input
                  type="text"
                  required
                  value={newReview.name}
                  onChange={(e) => setNewReview({ ...newReview, name: e.target.value })}
                  placeholder="e.g. Mariam Fatima"
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:border-[#B76E79]"
                />
              </div>

              <div>
                <label className="block font-medium text-slate-700 mb-1">Service Received</label>
                <input
                  type="text"
                  required
                  value={newReview.service}
                  onChange={(e) => setNewReview({ ...newReview, service: e.target.value })}
                  placeholder="e.g. HydraFacial / Keratin Treatment"
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:border-[#B76E79]"
                />
              </div>

              <div>
                <label className="block font-medium text-slate-700 mb-1">Rating</label>
                <select
                  value={newReview.rating}
                  onChange={(e) => setNewReview({ ...newReview, rating: Number(e.target.value) })}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:border-[#B76E79]"
                >
                  <option value={5}>★★★★★ (5/5 Excellent)</option>
                  <option value={4}>★★★★☆ (4/5 Very Good)</option>
                  <option value={3}>★★★☆☆ (3/5 Good)</option>
                </select>
              </div>

              <div>
                <label className="block font-medium text-slate-700 mb-1">Your Review</label>
                <textarea
                  required
                  rows={3}
                  value={newReview.review}
                  onChange={(e) => setNewReview({ ...newReview, review: e.target.value })}
                  placeholder="Tell us about your experience at Eve's Beauty Salon..."
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:border-[#B76E79]"
                />
              </div>

              <div className="flex gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setShowReviewModal(false)}
                  className="w-full py-2.5 border border-slate-200 text-slate-600 rounded-xl"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="w-full py-2.5 bg-[#5A2D3C] text-white font-semibold rounded-xl hover:bg-[#B76E79]"
                >
                  Post Review
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};
