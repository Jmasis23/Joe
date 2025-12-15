import React, { useState, useEffect } from 'react';
import { ArrowRight, CheckCircle, Mail, ChevronDown } from 'lucide-react';
import Button from './Button';
import { HeroBackground } from './HeroBackground';

const Hero: React.FC = () => {
  const scrollToAudit = () => {
    const element = document.getElementById('audit');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-dark-900 min-h-screen flex flex-col justify-center">
      {/* Background Elements */}
      <div className="absolute inset-0 w-full h-full">
        <HeroBackground />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_80%)] pointer-events-none"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Content */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            <div className="inline-flex items-center space-x-2 bg-white/5 border border-white/10 rounded-full px-3 py-1 mb-8 hover:bg-white/10 transition-colors cursor-default backdrop-blur-sm group">
              <span className="w-2 h-2 rounded-full bg-neon animate-pulse"></span>
              <span className="text-xs text-gray-300 uppercase tracking-wider font-semibold group-hover:text-white transition-colors">Available for Projects</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6 leading-tight">
              Hi, I'm <span className="text-neon">Joe Asis</span>. <br/>
              <span className="text-3xl md:text-4xl lg:text-5xl text-gray-400 block mt-2">
                Client Success Manager & GHL Expert
              </span>
            </h1>
            
            <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              I don't just "support" clients; I build the systems they need. From complex automation build-outs to AI chatbots and technical implementation—I save you time and make you money.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
              <Button variant="primary" size="lg" onClick={scrollToAudit} className="shadow-[0_0_20px_rgba(204,255,0,0.3)] hover:shadow-[0_0_30px_rgba(204,255,0,0.5)]">
                Work With Me
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" onClick={() => window.location.href='#about'}>
                View Experience
              </Button>
            </div>

            <div className="mt-8 flex items-center justify-center lg:justify-start space-x-6 text-sm text-gray-500">
              <div className="flex items-center">
                <CheckCircle className="h-4 w-4 text-neon mr-2" />
                <span>5 Years Experience</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-4 w-4 text-neon mr-2" />
                <span>100+ hrs saved</span>
              </div>
            </div>
          </div>

          {/* Visual - Photo of Joe */}
          <div className="relative order-1 lg:order-2 flex justify-center">
             {/* Glow behind image */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-neon/20 rounded-full blur-[60px] opacity-60 animate-pulse-slow"></div>
             
             <div className="relative z-10 w-72 h-72 md:w-96 md:h-96 rounded-full p-2 border-2 border-neon/30 bg-dark-900/50 backdrop-blur-sm">
                 <div className="w-full h-full rounded-full overflow-hidden border border-white/10 relative">
                     <img 
                        src="https://media.licdn.com/dms/image/v2/D5603AQGBcUSrjo2K1A/profile-displayphoto-crop_800_800/B56ZsAy.mcIcAI-/0/1765244932151?e=1767225600&v=beta&t=5wp1Q-24QBZ6wmFCL1Kddk70Zx4gmdCsI3R7onYFvX4" 
                        alt="Joe Asis" 
                        className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                     />
                     
                     {/* Floating Badge */}
                     <div className="absolute bottom-6 right-6 bg-black/80 backdrop-blur border border-neon/50 px-4 py-2 rounded-lg shadow-lg flex items-center space-x-2 transform rotate-3">
                        <div className="w-2 h-2 bg-neon rounded-full animate-ping"></div>
                        <span className="text-xs font-bold text-white">GHL Expert</span>
                     </div>
                 </div>
             </div>
          </div>
        </div>
      </div>

      {/* Hero Bottom Fade */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-dark-900 to-transparent z-20"></div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gray-500 animate-bounce cursor-pointer" onClick={() => document.getElementById('about')?.scrollIntoView({behavior:'smooth'})}>
         <ChevronDown className="h-6 w-6" />
      </div>
    </section>
  );
};

export default Hero;