import React, { useState, useRef, useEffect } from 'react';
import { ArrowRight, CheckCircle, AlertTriangle, LayoutDashboard, Users, MessageSquare, BarChart3, Settings, TrendingUp, Bell, MoveHorizontal } from 'lucide-react';
import Button from './Button';
import { HeroBackground } from './HeroBackground';

const Hero: React.FC = () => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const openCalendar = () => {
    // @ts-ignore
    if (window.Calendly) {
      // @ts-ignore
      window.Calendly.initPopupWidget({
        url: 'https://calendly.com/scalingwithsalesjoe/free-30-minute-strategy-session'
      });
    }
  };

  const handleMouseDown = () => setIsDragging(true);
  
  const handleMove = (clientX: number) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
      const percentage = (x / rect.width) * 100;
      setSliderPosition(percentage);
    }
  };

  useEffect(() => {
    const handleGlobalMouseUp = () => setIsDragging(false);
    const handleGlobalMouseMove = (e: MouseEvent) => {
      if (isDragging) {
        handleMove(e.clientX);
      }
    };

    window.addEventListener('mouseup', handleGlobalMouseUp);
    window.addEventListener('mousemove', handleGlobalMouseMove);

    return () => {
      window.removeEventListener('mouseup', handleGlobalMouseUp);
      window.removeEventListener('mousemove', handleGlobalMouseMove);
    };
  }, [isDragging]);

  const handleTouchMove = (e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX);
  };

  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-dark-900">
      {/* Background Elements */}
      <div className="absolute inset-0 w-full h-full">
        <HeroBackground />
        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_80%)] pointer-events-none"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center space-x-2 bg-white/5 border border-white/10 rounded-full px-3 py-1 mb-8 hover:bg-white/10 transition-colors cursor-default backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-neon animate-pulse"></span>
              <span className="text-xs text-gray-300 uppercase tracking-wider font-semibold">Accepting New Projects for Oct</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6 leading-tight">
              Stop Wrestling With <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400 inline-block mt-2 relative drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]">
                GoHighLevel.
              </span>
            </h1>
            
            <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Get back to growing your agency. We handle the GHL clean-up, complex automation build-outs, and technical implementation so you don't have to.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
              <Button variant="primary" size="lg" onClick={openCalendar}>
                Book a Free GHL Audit
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" onClick={() => window.location.href='#testimonials'}>
                See Case Studies
              </Button>
            </div>

            <div className="mt-8 flex items-center justify-center lg:justify-start space-x-6 text-sm text-gray-500">
              <div className="flex items-center">
                <CheckCircle className="h-4 w-4 text-neon mr-2" />
                <span>Certified Expert</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-4 w-4 text-neon mr-2" />
                <span>100+ Accounts Fixed</span>
              </div>
            </div>
          </div>

          {/* Visual - Interactive Slider "Before/After" */}
          <div className="relative mx-auto w-full max-w-lg lg:max-w-full perspective-1000 select-none">
             {/* Glow behind container */}
             <div className="absolute -inset-1 bg-gradient-to-r from-red-500/20 to-neon/20 rounded-2xl blur-xl opacity-50"></div>
             
             <div 
                ref={containerRef}
                className="relative rounded-xl border border-white/10 bg-dark-800 shadow-2xl overflow-hidden aspect-[16/10] group cursor-col-resize touch-none"
                onMouseDown={handleMouseDown}
                onTouchStart={handleMouseDown}
                onTouchMove={handleTouchMove}
             >
                
                {/* === LAYER 1: CLEAN (AFTER) - The Base Layer === */}
                {/* This layer is always fully rendered, appearing on the right side as dragging reveals it */}
                <div className="absolute inset-0 bg-dark-800 flex flex-col">
                    {/* Chrome */}
                    <div className="h-10 bg-dark-900 border-b border-white/5 flex items-center justify-between px-4">
                      <div className="flex space-x-2">
                        <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                      </div>
                      <div className="hidden sm:block h-6 w-1/3 bg-dark-800 rounded-md border border-white/5 mx-auto"></div>
                      <div className="w-16"></div> 
                    </div>

                    <div className="flex-1 flex relative overflow-hidden">
                        {/* Clean Sidebar */}
                        <div className="w-16 bg-dark-900 border-r border-white/5 flex flex-col items-center py-4 space-y-6">
                            <div className="w-8 h-8 bg-neon/20 rounded-full mb-4 flex items-center justify-center">
                                <div className="w-4 h-4 bg-neon rounded-full"></div>
                            </div>
                            {[LayoutDashboard, Users, MessageSquare, BarChart3, Settings].map((Icon, i) => (
                                <Icon key={i} className={`h-5 w-5 text-gray-300 hover:text-neon transition-colors`} />
                            ))}
                        </div>

                        {/* Clean Content */}
                        <div className="flex-1 bg-dark-800 p-6">
                            <div className="flex justify-between items-center mb-6">
                                <div>
                                <h3 className="text-white font-bold text-lg">Agency Dashboard</h3>
                                <p className="text-gray-500 text-xs">Updated 2 mins ago</p>
                                </div>
                                <div className="flex items-center space-x-3">
                                <div className="px-2 py-1 bg-neon/10 border border-neon/20 rounded text-neon text-xs font-mono">
                                    All Systems Operational
                                </div>
                                <Bell className="h-4 w-4 text-gray-400" />
                                </div>
                            </div>

                            <div className="grid grid-cols-3 gap-4 mb-6">
                                {[
                                { label: 'Revenue', value: '$12,450', change: '+12%', color: 'text-white' },
                                { label: 'Active Leads', value: '142', change: '+24', color: 'text-neon' },
                                { label: 'Meetings', value: '8', change: 'Today', color: 'text-white' },
                                ].map((stat, i) => (
                                <div key={i} className="bg-dark-900/50 border border-white/5 p-3 rounded-lg">
                                    <div className="text-gray-500 text-[10px] uppercase tracking-wider mb-1">{stat.label}</div>
                                    <div className={`text-xl font-bold ${stat.color}`}>{stat.value}</div>
                                    <div className="text-[10px] text-green-400 flex items-center mt-1">
                                    <TrendingUp className="h-3 w-3 mr-1" /> {stat.change}
                                    </div>
                                </div>
                                ))}
                            </div>

                            <div className="bg-dark-900/50 border border-white/5 rounded-lg p-4">
                                <div className="text-xs font-semibold text-gray-400 mb-3 border-b border-white/5 pb-2">RECENT AUTOMATIONS</div>
                                {[1, 2, 3].map((_, i) => (
                                <div key={i} className="flex items-center justify-between py-2 border-b border-white/5 last:border-0">
                                    <div className="flex items-center space-x-3">
                                        <div className="h-6 w-6 rounded-full bg-neon/20 flex items-center justify-center">
                                            <CheckCircle className="h-3 w-3 text-neon" />
                                        </div>
                                        <div>
                                            <div className="text-sm text-white">Lead Nurture Sequence</div>
                                            <div className="text-[10px] text-gray-500">Triggered by Form Submit</div>
                                        </div>
                                    </div>
                                    <div className="text-[10px] text-gray-500">Just now</div>
                                </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* === LAYER 2: MESSY (BEFORE) - The Top Layer === */}
                {/* This layer sits on top and is clipped from the right side based on slider position */}
                <div 
                    className="absolute inset-0 bg-dark-800 flex flex-col border-r border-red-500/20"
                    style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
                >
                     {/* Chrome */}
                     <div className="h-10 bg-dark-900 border-b border-white/5 flex items-center justify-between px-4">
                      <div className="flex space-x-2">
                        <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                      </div>
                      <div className="hidden sm:block h-6 w-1/3 bg-dark-800 rounded-md border border-white/5 mx-auto"></div>
                      <div className="w-16"></div>
                    </div>

                    <div className="flex-1 flex relative overflow-hidden bg-dark-900/50">
                        {/* Messy Sidebar */}
                        <div className="w-16 bg-dark-900 border-r border-white/5 flex flex-col items-center py-4 space-y-6 opacity-60">
                            <div className="w-8 h-8 bg-white/10 rounded-full mb-4"></div>
                            {[LayoutDashboard, Users, MessageSquare, BarChart3, Settings].map((Icon, i) => (
                                <Icon key={i} className="h-5 w-5 text-gray-600" />
                            ))}
                        </div>

                        {/* Messy Content */}
                        <div className="flex-1 p-6 relative">
                            <div className="absolute inset-0 bg-red-500/5 pointer-events-none"></div>
                            <div className="flex justify-between items-center mb-8">
                                <div className="w-32 h-6 bg-white/5 rounded"></div>
                                <div className="px-3 py-1 bg-red-500/10 border border-red-500/30 rounded text-red-500 text-xs font-bold flex items-center animate-pulse">
                                    <AlertTriangle className="h-3 w-3 mr-1" />
                                    24 Errors Found
                                </div>
                            </div>

                            {/* Scattered Cards */}
                            <div className="relative h-full">
                                <div className="absolute top-0 left-0 w-2/3 bg-dark-900 border border-red-500/30 p-4 rounded-lg transform -rotate-2 z-10 shadow-lg">
                                    <div className="flex items-center justify-between mb-2">
                                        <span className="text-red-400 text-xs font-bold">Webhook Failed</span>
                                        <span className="text-xs text-gray-600">502 Gateway</span>
                                    </div>
                                    <div className="h-2 w-full bg-white/10 rounded overflow-hidden">
                                        <div className="h-full w-2/3 bg-red-500/50"></div>
                                    </div>
                                </div>

                                <div className="absolute top-16 right-0 w-1/2 bg-dark-900 border border-yellow-500/30 p-4 rounded-lg transform rotate-3 z-20 shadow-lg">
                                    <div className="flex items-center space-x-2 mb-2">
                                        <AlertTriangle className="h-4 w-4 text-yellow-500" />
                                        <span className="text-yellow-500 text-xs">Duplicate Trigger</span>
                                    </div>
                                    <div className="text-[10px] text-gray-500">Loop detected in workflow ID #8821</div>
                                </div>

                                <div className="absolute top-32 left-4 w-3/4 bg-dark-900 border border-white/10 p-4 rounded-lg transform rotate-1 opacity-70">
                                    <div className="space-y-2">
                                        <div className="h-4 w-full bg-white/5 rounded border border-dashed border-gray-600"></div>
                                        <div className="h-4 w-3/4 bg-white/5 rounded border border-dashed border-gray-600"></div>
                                        <div className="h-4 w-5/6 bg-white/5 rounded border border-dashed border-gray-600"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* === SLIDER HANDLE === */}
                <div 
                    className="absolute inset-y-0 w-1 bg-neon cursor-col-resize z-30 shadow-[0_0_10px_rgba(204,255,0,0.5)]"
                    style={{ left: `${sliderPosition}%` }}
                >
                     <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 bg-black border-2 border-neon rounded-full flex items-center justify-center shadow-lg transform hover:scale-110 transition-transform">
                        <MoveHorizontal className="h-5 w-5 text-neon" />
                     </div>
                </div>

                {/* === LABELS === */}
                <div className="absolute top-4 left-4 z-20 pointer-events-none transition-opacity duration-300" style={{ opacity: sliderPosition < 15 ? 0 : 1 }}>
                    <span className="px-3 py-1 bg-black/80 backdrop-blur rounded border border-red-500/30 text-[10px] font-bold text-red-400 shadow-lg">
                        BEFORE (MESSY)
                    </span>
                </div>
                 <div className="absolute top-4 right-4 z-20 pointer-events-none transition-opacity duration-300" style={{ opacity: sliderPosition > 85 ? 0 : 1 }}>
                    <span className="px-3 py-1 bg-black/80 backdrop-blur rounded border border-neon/30 text-[10px] font-bold text-neon shadow-lg">
                        AFTER (OPTIMIZED)
                    </span>
                </div>

             </div>
             
             <p className="text-center text-xs text-gray-500 mt-4 flex items-center justify-center">
                <MoveHorizontal className="h-3 w-3 mr-1" /> Drag slider to compare
             </p>
          </div>
        </div>
      </div>

      {/* Hero Bottom Fade */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-dark-900 to-transparent z-20"></div>
    </section>
  );
};

export default Hero;