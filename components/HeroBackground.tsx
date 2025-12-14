import React, { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  alpha: number;
  connections: number[];
}

interface Signal {
  fromIndex: number;
  toIndex: number;
  progress: number;
  speed: number;
}

export const HeroBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = canvas.parentElement?.clientWidth || window.innerWidth;
    let height = canvas.parentElement?.clientHeight || window.innerHeight;

    // Configuration
    const particleCount = Math.min(60, Math.floor((width * height) / 15000)); // Responsive count
    const connectionDistance = 180;
    const particles: Particle[] = [];
    let signals: Signal[] = [];

    // Colors - Matching the Neon theme (#CCFF00)
    const colorParticle = 'rgba(204, 255, 0, 0.2)'; 
    const colorLine = 'rgba(204, 255, 0, 0.1)';
    const colorSignal = '#CCFF00'; 

    // Initialize Canvas
    const resize = () => {
        if (!canvas.parentElement) return;
        width = canvas.parentElement.clientWidth;
        height = canvas.parentElement.clientHeight;
        canvas.width = width;
        canvas.height = height;
    };
    window.addEventListener('resize', resize);
    resize();

    // Initialize Particles
    const initParticles = () => {
      particles.length = 0;
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.3,
          vy: (Math.random() - 0.5) * 0.3,
          radius: Math.random() * 2 + 1,
          alpha: Math.random() * 0.5 + 0.2,
          connections: [],
        });
      }
    };
    initParticles();

    // Spawn a signal that travels from one node to another
    const spawnSignal = () => {
      if (particles.length < 2) return;
      const startIdx = Math.floor(Math.random() * particles.length);
      const startParticle = particles[startIdx];
      
      // Find valid connections
      const targets: number[] = [];
      for(let i=0; i<particles.length; i++) {
        if(i === startIdx) continue;
        const dx = startParticle.x - particles[i].x;
        const dy = startParticle.y - particles[i].y;
        const dist = Math.sqrt(dx*dx + dy*dy);
        if(dist < connectionDistance) {
           targets.push(i);
        }
      }

      if(targets.length > 0) {
        const endIdx = targets[Math.floor(Math.random() * targets.length)];
        signals.push({
          fromIndex: startIdx,
          toIndex: endIdx,
          progress: 0,
          speed: 0.02 + Math.random() * 0.03, // Variable speed
        });
      }
    };

    let frameId: number;
    let time = 0;

    const animate = () => {
      time++;
      
      // Clear canvas (transparent background to let CSS bg show through)
      ctx.clearRect(0, 0, width, height);

      // Update Particles
      particles.forEach((p, index) => {
        p.x += p.vx;
        p.y += p.vy;

        // Bounce off walls
        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;
        
        // Very subtle drift
        p.x += Math.sin(time * 0.001 + index) * 0.02;
      });

      // Draw Connections
      ctx.strokeStyle = colorLine;
      ctx.lineWidth = 1;

      for (let i = 0; i < particles.length; i++) {
        const pA = particles[i];
        for (let j = i + 1; j < particles.length; j++) {
          const pB = particles[j];
          const dx = pA.x - pB.x;
          const dy = pA.y - pB.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < connectionDistance) {
            ctx.beginPath();
            ctx.moveTo(pA.x, pA.y);
            ctx.lineTo(pB.x, pB.y);
            ctx.stroke();
          }
        }
      }

      // Draw Particles
      particles.forEach((p) => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = colorParticle;
        ctx.fill();
      });

      // Update & Draw Signals (The "Data" flowing through the circuit)
      if (time % 30 === 0) spawnSignal(); 

      for (let i = signals.length - 1; i >= 0; i--) {
        const s = signals[i];
        const pA = particles[s.fromIndex];
        const pB = particles[s.toIndex];

        // If connection broke, remove signal
        const dx = pA.x - pB.x;
        const dy = pA.y - pB.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        
        if (dist > connectionDistance * 1.2) {
            signals.splice(i, 1);
            continue;
        }

        s.progress += s.speed;

        const currX = pA.x + (pB.x - pA.x) * s.progress;
        const currY = pA.y + (pB.y - pA.y) * s.progress;

        // Draw Signal Head
        ctx.beginPath();
        ctx.arc(currX, currY, 3, 0, Math.PI * 2);
        ctx.fillStyle = colorSignal;
        ctx.shadowBlur = 10;
        ctx.shadowColor = colorSignal;
        ctx.fill();
        ctx.shadowBlur = 0;

        // Chain Reaction
        if (s.progress >= 1) {
          if (Math.random() > 0.4) {
             const prevTarget = s.toIndex;
             const targets: number[] = [];
             for(let k=0; k<particles.length; k++) {
                if(k === prevTarget) continue;
                const dxx = particles[prevTarget].x - particles[k].x;
                const dyy = particles[prevTarget].y - particles[k].y;
                if(Math.sqrt(dxx*dxx + dyy*dyy) < connectionDistance) targets.push(k);
             }
             if(targets.length > 0) {
                 signals.push({
                     fromIndex: prevTarget,
                     toIndex: targets[Math.floor(Math.random() * targets.length)],
                     progress: 0,
                     speed: s.speed
                 });
             }
          }
          signals.splice(i, 1);
        }
      }

      frameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(frameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute top-0 left-0 w-full h-full pointer-events-none"
      style={{ zIndex: 0 }}
    />
  );
};
