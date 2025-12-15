import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import ProblemSolution from './components/ProblemSolution';
import Services from './components/Services';
import SocialProof from './components/SocialProof';
import Process from './components/Process';
import FAQ from './components/FAQ';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import Button from './components/Button';

// Mobile Sticky CTA Component
const MobileStickyCTA: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling past hero (approx 600px)
      setIsVisible(window.scrollY > 600);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="md:hidden fixed bottom-0 left-0 w-full p-4 bg-dark-900/95 backdrop-blur-xl border-t border-white/10 z-50 animate-slideUp">
       <Button 
        variant="primary" 
        fullWidth 
        onClick={() => document.getElementById('audit')?.scrollIntoView({ behavior: 'smooth' })}
        className="shadow-lg shadow-neon/20"
      >
        Work With Me
       </Button>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-dark-900 text-white selection:bg-neon selection:text-black">
      <Navbar />
      <main>
        <Hero />
        <div id="about">
          <About />
        </div>
        <ProblemSolution />
        <Services />
        <SocialProof />
        <Process />
        <FAQ />
        <FinalCTA />
      </main>
      <MobileStickyCTA />
      <Footer />
    </div>
  );
};

export default App;