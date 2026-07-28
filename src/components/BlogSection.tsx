import React, { useState } from 'react';
import { BookOpen, Clock, ArrowRight, X, Sparkles, CheckCircle } from 'lucide-react';
import { BLOG_POSTS } from '../data/salonData';
import { BlogPost } from '../types';

export const BlogSection: React.FC = () => {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = [
    'All',
    'Bridal Makeup Tips',
    'Hair Care Guide',
    'Summer Skin Care',
    'Nail Trends',
  ];

  const filteredPosts = BLOG_POSTS.filter(
    (p) => activeCategory === 'All' || p.category === activeCategory
  );

  return (
    <section id="blog" className="py-12 sm:py-16 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-[#B76E79] bg-[#F8C8DC]/30 px-3 py-1 rounded-full border border-[#B76E79]/20 inline-block">
            Beauty Secrets & Expert Guides
          </span>
          <h2 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#5A2D3C]">
            Latest Beauty & Bridal Journal
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Read professional beauty tips, bridal skincare prep advice, keratin maintenance rules, and seasonal trends written by Eve's Beauty Salon beauticians.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center justify-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition-all cursor-pointer shrink-0 ${
                activeCategory === cat
                  ? 'bg-[#5A2D3C] text-white shadow-md border border-[#D4AF37]/30'
                  : 'bg-[#FFF8F5] text-slate-700 hover:bg-[#F8C8DC]/30 border border-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Blog Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredPosts.map((post) => (
            <div
              key={post.id}
              className="bg-[#FFF8F5] rounded-2xl overflow-hidden border border-[#F8C8DC]/60 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="relative h-48 overflow-hidden bg-slate-100">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <span className="absolute top-3 left-3 bg-[#5A2D3C] text-white text-[10px] font-bold px-2.5 py-1 rounded-full shadow-sm">
                    {post.category}
                  </span>
                </div>

                <div className="p-5 space-y-3">
                  <div className="flex items-center justify-between text-[11px] text-slate-500">
                    <span>{post.date}</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3 text-[#B76E79]" /> {post.readTime}
                    </span>
                  </div>

                  <h3
                    onClick={() => setSelectedPost(post)}
                    className="font-playfair text-base font-bold text-[#5A2D3C] group-hover:text-[#B76E79] transition-colors cursor-pointer line-clamp-2"
                  >
                    {post.title}
                  </h3>

                  <p className="text-slate-600 text-xs leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                </div>
              </div>

              <div className="p-5 pt-0">
                <button
                  onClick={() => setSelectedPost(post)}
                  className="text-xs font-bold text-[#B76E79] hover:text-[#5A2D3C] flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  Read Full Article <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Article Reader Modal */}
      {selectedPost && (
        <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-md flex items-center justify-center p-4 animate-fadeIn">
          <div className="relative max-w-3xl w-full bg-white rounded-3xl overflow-hidden border border-[#F8C8DC] shadow-2xl max-h-[90vh] flex flex-col">
            <button
              onClick={() => setSelectedPost(null)}
              className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/50 text-white hover:bg-[#B76E79] transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="overflow-y-auto p-6 sm:p-10 space-y-6">
              <span className="text-xs font-bold text-[#B76E79] uppercase tracking-widest bg-[#F8C8DC]/30 px-3 py-1 rounded-full border border-[#B76E79]/20 inline-block">
                {selectedPost.category}
              </span>

              <h2 className="font-playfair text-2xl sm:text-3xl font-bold text-[#5A2D3C]">
                {selectedPost.title}
              </h2>

              <div className="flex items-center gap-4 text-xs text-slate-500 border-b border-slate-100 pb-4">
                <span>By {selectedPost.author}</span>
                <span>•</span>
                <span>{selectedPost.date}</span>
                <span>•</span>
                <span>{selectedPost.readTime}</span>
              </div>

              <img
                src={selectedPost.image}
                alt={selectedPost.title}
                className="w-full h-64 sm:h-80 object-cover rounded-2xl shadow-md"
                referrerPolicy="no-referrer"
              />

              <div className="text-slate-700 text-sm leading-relaxed space-y-4 whitespace-pre-line">
                {selectedPost.content}
              </div>

              {/* Actionable Tips Box */}
              {selectedPost.tips && selectedPost.tips.length > 0 && (
                <div className="bg-[#FFF8F5] p-5 rounded-2xl border border-[#F8C8DC] space-y-3">
                  <h4 className="font-playfair font-bold text-[#5A2D3C] text-sm flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-[#D4AF37]" /> Key Takeaways & Salon Tips
                  </h4>
                  <div className="space-y-2">
                    {selectedPost.tips.map((tip, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-slate-700">
                        <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                        <span>{tip}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
