import React, { useState, useEffect } from 'react';
import { PROCESS_STEPS } from '../constants';
import { ScanSearch, ClipboardList, Terminal, ShieldCheck } from 'lucide-react';

const icons = [ScanSearch, ClipboardList, Terminal, ShieldCheck];

const Process: React.FC = () => {
  const [activeStep, setActiveStep] = useState(1);

  // Cycle through steps automatically
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev >= 4 ? 1 : prev + 1));
    }, 3000); // 3 seconds per step for readability
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="process" className="py-24 bg-dark-800 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            The Optimization Protocol
          </h2>
          <p className="text-gray-400">Systematic. Predictable. Scalable.</p>
        </div>

        {/* Animated Visual Pipeline (Desktop) */}
        <div className="hidden lg:block relative mb-20 px-12 select-none">
           {/* Background Track */}
           <div className="absolute top-1/2 left-0 w-full h-1 bg-white/5 -translate-y-1/2 rounded-full"></div>
           
           {/* Animated Fill Track */}
           <div 
             className="absolute top-1/2 left-0 h-1 bg-gradient-to-r from-neon to-neon-dim -translate-y-1/2 rounded-full transition-all duration-1000 ease-in-out shadow-[0_0_15px_rgba(204,255,0,0.5)]"
             style={{ width: `${((activeStep - 1) / 3) * 100}%` }}
           ></div>

           <div className="relative z-10 flex justify-between w-full">
              {PROCESS_STEPS.map((step, index) => {
                 const Icon = icons[index];
                 const isActive = activeStep === index + 1;
                 const isPast = activeStep > index + 1;
                 
                 return (
                   <div key={index} className="flex flex-col items-center relative">
                      {/* Connection Dot Background */}
                      <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-neon/5 rounded-full blur-xl transition-opacity duration-500 ${isActive ? 'opacity-100' : 'opacity-0'}`}></div>

                      {/* Icon Container */}
                      <div 
                        className={`
                          w-20 h-20 rounded-2xl flex items-center justify-center border-2 transition-all duration-500 z-20 bg-dark-900 cursor-pointer
                          ${isActive || isPast 
                            ? 'border-neon text-neon shadow-[0_0_20px_rgba(204,255,0,0.3)] scale-110' 
                            : 'border-white/10 text-gray-600'}
                        `}
                        onClick={() => setActiveStep(index + 1)}
                      >
                         <Icon className={`h-8 w-8 transition-transform duration-500 ${isActive ? 'scale-110' : ''}`} />
                      </div>
                      
                      {/* Pulse Ring for Active Step */}
                      {isActive && (
                        <div className="absolute top-0 left-0 w-20 h-20 rounded-2xl border border-neon animate-ping opacity-50 z-10"></div>
                      )}
                   </div>
                 )
              })}
           </div>
        </div>

        {/* Step Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
           {PROCESS_STEPS.map((step, index) => {
              const isActive = activeStep === index + 1;
              return (
                <div 
                   key={index}
                   className={`
                      relative p-6 rounded-2xl border transition-all duration-700 flex flex-col
                      ${isActive 
                        ? 'bg-white/5 border-neon/50 shadow-[0_0_30px_rgba(204,255,0,0.1)] transform lg:-translate-y-4' 
                        : 'bg-transparent border-white/5 opacity-50'}
                   `}
                   onClick={() => setActiveStep(index + 1)}
                >
                   {/* Mobile Icon (hidden desktop) */}
                   <div className="lg:hidden mb-6 flex justify-center">
                      <div className={`p-4 rounded-xl border ${isActive ? 'border-neon text-neon bg-neon/10' : 'border-white/10 text-gray-500'}`}>
                        {React.createElement(icons[index], { className: "h-6 w-6" })}
                      </div>
                   </div>

                   <div className="flex items-center justify-between mb-4">
                      <span className={`text-5xl font-black transition-colors duration-500 ${isActive ? 'text-white/10' : 'text-white/5'}`}>
                        0{step.number}
                      </span>
                      {isActive && <div className="h-2 w-2 rounded-full bg-neon animate-pulse shadow-[0_0_10px_#ccff00]"></div>}
                   </div>

                   <h3 className={`text-xl font-bold mb-3 transition-colors duration-500 ${isActive ? 'text-white' : 'text-gray-400'}`}>
                      {step.title}
                   </h3>
                   <p className="text-sm text-gray-500 leading-relaxed">
                      {step.description}
                   </p>
                </div>
              )
           })}
        </div>
      </div>
    </section>
  );
};

export default Process;