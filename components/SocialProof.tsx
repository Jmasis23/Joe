import React from 'react';
import { TESTIMONIALS } from '../constants';
import { Star, Quote } from 'lucide-react';

const SocialProof: React.FC = () => {
  return (
    <section id="testimonials" className="py-20 bg-dark-900 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Trust Badges */}
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-500 mb-20">
          {/* Using text placeholders for logos as per instruction to use simple visual styling */}
          {['GHL Certified Admin', 'Zapier Expert', 'HighLevel Affiliate', 'Stripe Partner'].map((badge) => (
            <span key={badge} className="text-lg font-bold text-gray-300 border border-white/10 px-4 py-2 rounded bg-white/5">
              {badge}
            </span>
          ))}
        </div>

        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Don't Just Take Our Word For It
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t) => (
            <div key={t.id} className="bg-dark-800 p-8 rounded-2xl border border-white/5 hover:border-neon/30 transition-all duration-300 relative group">
              <Quote className="absolute top-6 right-6 h-8 w-8 text-white/5 group-hover:text-neon/20 transition-colors" />
              
              <div className="flex space-x-1 mb-6">
                {[1,2,3,4,5].map(i => <Star key={i} className="h-4 w-4 text-neon fill-neon" />)}
              </div>
              
              <p className="text-gray-300 mb-6 italic leading-relaxed">
                "{t.quote}"
              </p>
              
              <div className="mt-auto">
                 <div className="flex items-center justify-between border-t border-white/10 pt-4">
                    <div>
                      <h4 className="text-white font-bold text-sm">{t.author}</h4>
                      <p className="text-gray-500 text-xs">{t.role}</p>
                    </div>
                    {t.metric && (
                      <div className="bg-neon/10 px-2 py-1 rounded text-neon text-xs font-bold border border-neon/20">
                        {t.metric}
                      </div>
                    )}
                 </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProof;