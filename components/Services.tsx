import React, { useState } from 'react';
import { SERVICES } from '../constants';
import { Check, Clock, User, Zap, Database, GitBranch, LayoutTemplate } from 'lucide-react';
import Button from './Button';

const Services: React.FC = () => {
  const [activeTab, setActiveTab] = useState(SERVICES[0].id);

  const activeService = SERVICES.find(s => s.id === activeTab) || SERVICES[0];

  const scrollToAudit = () => {
    const element = document.getElementById('audit');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const renderVisual = () => {
    switch (activeService.id) {
        case 'cleanup':
            return (
                <div className="relative w-full h-full flex items-center justify-center p-8">
                    <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
                    <div className="relative z-10 w-full max-w-[280px] space-y-3">
                        {/* Stack of messy cards transforming into clean list */}
                        <div className="bg-dark-900 border border-white/10 rounded-lg p-3 shadow-lg transform translate-x-4 translate-y-4 opacity-50 rotate-3"></div>
                        <div className="bg-dark-900 border border-white/10 rounded-lg p-3 shadow-lg transform translate-x-2 translate-y-2 opacity-70 -rotate-2"></div>
                        <div className="bg-dark-800 border border-neon/50 rounded-lg p-4 shadow-xl shadow-neon/10">
                            <div className="flex items-center justify-between mb-3 border-b border-white/10 pb-2">
                                <div className="text-xs text-neon font-bold">OPTIMIZED</div>
                                <div className="h-2 w-2 rounded-full bg-neon"></div>
                            </div>
                            <div className="space-y-2">
                                <div className="h-2 w-full bg-white/10 rounded"></div>
                                <div className="h-2 w-2/3 bg-white/10 rounded"></div>
                                <div className="h-2 w-3/4 bg-white/10 rounded"></div>
                            </div>
                        </div>
                    </div>
                </div>
            );
        case 'automation':
            return (
                <div className="relative w-full h-full flex items-center justify-center">
                    <div className="absolute inset-0 flex items-center justify-center opacity-20">
                        <GitBranch className="w-48 h-48 text-neon" />
                    </div>
                    {/* Flowchart nodes */}
                    <div className="relative z-10 flex flex-col items-center space-y-4">
                        <div className="bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-lg text-xs text-white">Trigger: Form Submit</div>
                        <div className="h-6 w-0.5 bg-neon/50"></div>
                        <div className="bg-neon/20 backdrop-blur-md border border-neon/50 px-4 py-2 rounded-lg text-xs text-neon font-bold shadow-[0_0_15px_rgba(204,255,0,0.3)]">Wait 5 Minutes</div>
                        <div className="h-6 w-0.5 bg-neon/50"></div>
                        <div className="flex space-x-4">
                            <div className="bg-dark-800 border border-white/10 px-3 py-2 rounded-lg text-[10px] text-gray-400">SMS #1</div>
                            <div className="bg-dark-800 border border-white/10 px-3 py-2 rounded-lg text-[10px] text-gray-400">Email #1</div>
                        </div>
                    </div>
                </div>
            );
        default:
            return (
                <div className="relative w-full h-full flex items-center justify-center">
                     <div className="absolute inset-0 bg-gradient-to-br from-neon/5 to-transparent"></div>
                     <div className="p-8 border border-dashed border-white/20 rounded-full">
                         <activeService.icon className="h-16 w-16 text-white/50" />
                     </div>
                </div>
            );
    }
  }

  return (
    <section id="services" className="py-24 bg-dark-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Technical Excellence. <span className="text-neon">On Demand.</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Whether you need a one-time fix or a full system build, we have a specialized workflow for it.
          </p>
        </div>

        {/* Desktop Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {SERVICES.map((service) => (
            <button
              key={service.id}
              onClick={() => setActiveTab(service.id)}
              className={`
                px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 border
                ${activeTab === service.id 
                  ? 'bg-neon text-black border-neon shadow-lg shadow-neon/20 transform scale-105' 
                  : 'bg-dark-800 text-gray-400 border-white/5 hover:border-white/20 hover:text-white'}
              `}
            >
              {service.category}
            </button>
          ))}
        </div>

        {/* Content Card */}
        <div className="glass-panel rounded-3xl p-8 md:p-12 transition-all duration-500 bg-dark-800/50">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Text Content */}
            <div className="space-y-6 animate-fadeIn">
              <div className="flex items-center space-x-3 mb-4">
                 <div className="p-3 bg-neon/10 rounded-lg border border-neon/20">
                    <activeService.icon className="h-6 w-6 text-neon" />
                 </div>
                 <h3 className="text-2xl md:text-3xl font-bold text-white">{activeService.title}</h3>
              </div>
              
              <p className="text-gray-300 text-lg leading-relaxed border-l-2 border-white/10 pl-4">
                {activeService.description}
              </p>

              <div className="grid grid-cols-1 gap-3 py-4">
                {activeService.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center text-gray-400 group">
                    <div className="h-6 w-6 rounded-full bg-white/5 flex items-center justify-center mr-3 group-hover:bg-neon/20 transition-colors">
                        <Check className="h-3 w-3 text-neon" />
                    </div>
                    <span className="group-hover:text-gray-200 transition-colors">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-white/10">
                 <div className="flex items-center text-sm bg-black/20 px-3 py-2 rounded border border-white/5">
                    <User className="h-4 w-4 mr-2 text-gray-500" />
                    <span className="text-gray-400 mr-2">Best for: </span>
                    <span className="text-gray-200">{activeService.idealFor}</span>
                 </div>
                 <div className="flex items-center text-sm bg-black/20 px-3 py-2 rounded border border-white/5">
                    <Clock className="h-4 w-4 mr-2 text-gray-500" />
                    <span className="text-gray-400 mr-2">Timeline: </span>
                    <span className="text-gray-200">{activeService.timeline}</span>
                 </div>
              </div>

              <div className="pt-6">
                <Button variant="outline" onClick={scrollToAudit}>
                  Discuss Project
                </Button>
              </div>
            </div>

            {/* Visual/Image Area */}
            <div className="relative h-[400px] bg-dark-900 rounded-2xl border border-white/10 overflow-hidden shadow-2xl">
               {renderVisual()}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;