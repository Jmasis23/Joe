import React from 'react';
import { ArrowRight, X, Check } from 'lucide-react';
import { PAIN_POINTS } from '../constants';

const ProblemSolution: React.FC = () => {
  return (
    <section id="expertise" className="py-24 bg-dark-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            How I Solve <span className="text-neon">Business Problems</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            I specialize in identifying bottlenecks in your agency processes and fixing them with robust GoHighLevel automation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {PAIN_POINTS.map((point, idx) => (
            <div key={idx} className="group relative bg-dark-900 border border-white/5 rounded-2xl p-8 hover:border-neon/30 transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,0,0,0.5)]">
              {/* Hover gradient effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-neon/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl pointer-events-none"></div>
              
              <div className="flex items-start space-x-6 relative z-10">
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 rounded-xl bg-dark-800 border border-white/10 flex items-center justify-center group-hover:border-neon group-hover:text-neon text-gray-400 transition-all duration-300 shadow-lg">
                    <point.icon className="h-7 w-7" />
                  </div>
                </div>
                
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-neon transition-colors">{point.title}</h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-start p-3 bg-red-500/5 rounded-lg border border-red-500/10">
                      <X className="h-5 w-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                      <p className="text-gray-400 text-sm leading-relaxed">{point.problem}</p>
                    </div>
                    
                    <div className="flex items-center justify-center">
                        <ArrowRight className="h-5 w-5 text-gray-700 rotate-90" />
                    </div>
                    
                    <div className="flex items-start p-3 bg-neon/5 rounded-lg border border-neon/10">
                      <Check className="h-5 w-5 text-neon mr-3 mt-0.5 flex-shrink-0" />
                      <p className="text-gray-200 text-sm font-medium leading-relaxed">{point.solution}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;