import React, { useEffect } from 'react';

const FinalCTA: React.FC = () => {
  useEffect(() => {
    // @ts-ignore
    if (window.Calendly) {
      // @ts-ignore
      window.Calendly.initInlineWidget({
        url: 'https://calendly.com/scalingwithsalesjoe/free-30-minute-strategy-session',
        parentElement: document.getElementById('calendly-inline-widget'),
        prefill: {},
        utm: {}
      });
    }
  }, []);

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
          
          <div className="w-full max-w-4xl mx-auto bg-dark-800/50 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden shadow-2xl">
              <div 
                id="calendly-inline-widget" 
                style={{ minWidth: '320px', height: '700px' }} 
              ></div>
          </div>
       </div>
    </section>
  );
};

export default FinalCTA;