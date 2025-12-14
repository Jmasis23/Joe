import React from 'react';
import Button from './Button';
import { Calendar } from 'lucide-react';

const FinalCTA: React.FC = () => {
  const openCalendar = () => {
    // @ts-ignore
    if (window.Calendly) {
      // @ts-ignore
      window.Calendly.initPopupWidget({
        url: 'https://calendly.com/scalingwithsalesjoe/free-30-minute-strategy-session'
      });
    }
  };

  return (
    <section id="audit" className="py-24 bg-dark-900 relative overflow-hidden border-t border-white/5">
       {/* Background Glow */}
       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-neon/5 rounded-full blur-[100px] pointer-events-none"></div>
       
       {/* Texture overlay */}
       <div className="absolute inset-0 opacity-20" style={{backgroundImage: 'radial-gradient(rgba(204, 255, 0, 0.2) 1px, transparent 1px)', backgroundSize: '40px 40px'}}></div>
       
       <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">
            Your GHL Should Be an Asset, <br/> 
            <span className="text-neon drop-shadow-[0_0_15px_rgba(204,255,0,0.3)]">Not a Headache.</span>
          </h2>
          <p className="text-xl text-gray-400 mb-10 font-medium max-w-2xl mx-auto">
            Next 3 audit slots open this week. Secure your free review now.
          </p>
          
          <div className="bg-white/5 p-8 rounded-3xl inline-block backdrop-blur-md border border-white/10 shadow-2xl relative group">
             {/* Hover Glow on Card */}
             <div className="absolute -inset-1 bg-gradient-to-r from-neon/0 via-neon/20 to-neon/0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-lg"></div>
             
             <div className="relative z-10">
                <Button onClick={openCalendar} className="bg-neon text-black hover:bg-neon-dim border-2 border-transparent text-lg px-12 py-4 shadow-[0_0_20px_rgba(204,255,0,0.4)] hover:shadow-[0_0_30px_rgba(204,255,0,0.6)] transition-all transform hover:-translate-y-1">
                    <Calendar className="mr-2 h-5 w-5" />
                    Book Your Free Audit
                </Button>
                <p className="mt-4 text-sm text-gray-500 font-semibold">No credit card required. 15-minute Strategy Call.</p>
             </div>
          </div>
       </div>
    </section>
  );
};

export default FinalCTA;