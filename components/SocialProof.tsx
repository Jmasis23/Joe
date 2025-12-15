import React, { useState, useEffect } from 'react';
import { TESTIMONIALS } from '../constants';
import { Star, Quote } from 'lucide-react';

const AnimatedCounter = ({ end, duration = 2000, suffix = "" }: { end: number; duration?: number; suffix?: string }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / duration, 1);
      
      setCount(Math.floor(end * percentage));

      if (progress < duration) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration]);

  return <span className="tabular-nums">{count}{suffix}</span>;
};

const SocialProof: React.FC = () => {
  return (
    <section id="testimonials" className="py-20 bg-dark-900 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Trust Badges / Stats Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {[
            { label: 'Accounts Fixed', value: 124, suffix: '+' },
            { label: 'Hours Saved', value: 150, suffix: '+' },
            { label: 'Money Saved', value: 200, suffix: 'k+' },
            { label: 'Client Satisfaction', value: 100, suffix: '%' },
          ].map((stat, idx) => (
             <div key={idx} className="text-center p-6 bg-dark-800/50 rounded-2xl border border-white/5 hover:border-neon/20 transition-colors">
                <div className="text-3xl md:text-4xl font-black text-white mb-2">
                   <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-xs text-gray-500 uppercase tracking-wider font-semibold">{stat.label}</div>
             </div>
          ))}
        </div>

        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Don't Just Take Our Word For It
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t) => (
            <div key={t.id} className="bg-dark-800 p-8 rounded-2xl border border-white/5 hover:border-neon/30 transition-all duration-300 relative group hover:shadow-[0_0_20px_rgba(204,255,0,0.05)] hover:-translate-y-1">
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