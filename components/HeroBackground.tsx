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
    const colorWorkflowStroke = 'rgba(204, 255, 0, 0.05)';
    const colorWorkflowFill = 'rgba(204, 255, 0, 0.01)';

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

    // Draw abstract GHL workflow schematic
    const drawWorkflow = (time: number) => {
        const cx = width > 768 ? width * 0.75 : width * 0.5; // Shift to right on desktop
        const scale = width > 768 ? 1 : 0.7;
        const startY = height * 0.15;
        const nodeW = 140 * scale;
        const nodeH = 70 * scale;
        const gapY = 80 * scale;
        const branchW = 180 * scale;

        ctx.strokeStyle = colorWorkflowStroke;
        ctx.fillStyle = colorWorkflowFill;
        ctx.lineWidth = 1.5;
        
        // Helper: Rounded Rect
        const roundRect = (x: number, y: number, w: number, h: number, r: number = 8) => {
            ctx.beginPath();
            ctx.moveTo(x + r, y);
            ctx.lineTo(x + w - r, y);
            ctx.quadraticCurveTo(x + w, y, x + w, y + r);
            ctx.lineTo(x + w, y + h - r);
            ctx.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
            ctx.lineTo(x + r, y + h);
            ctx.quadraticCurveTo(x, y + h, x, y + h - r);
            ctx.lineTo(x, y + r);
            ctx.quadraticCurveTo(x, y, x + r, y);
            ctx.closePath();
            ctx.fill();
            ctx.stroke();
        };

        // 1. Trigger Node (Pill shape)
        const tX = cx - nodeW/2;
        const tY = startY;
        roundRect(tX, tY, nodeW, nodeH, 35); // More rounded for trigger
        // Text lines inside
        ctx.fillStyle = colorWorkflowStroke;
        ctx.fillRect(tX + 30*scale, tY + 25*scale, nodeW - 60*scale, 4*scale);
        ctx.fillStyle = colorWorkflowFill;

        // Line down
        ctx.beginPath();
        ctx.moveTo(cx, tY + nodeH);
        ctx.lineTo(cx, tY + nodeH + gapY);
        ctx.stroke();

        // 2. Action Node (Rect)
        const aX = cx - nodeW/2;
        const aY = tY + nodeH + gapY;
        roundRect(aX, aY, nodeW, nodeH, 8);
        ctx.fillStyle = colorWorkflowStroke;
        ctx.fillRect(aX + 20*scale, aY + 20*scale, nodeW - 40*scale, 4*scale);
        ctx.fillRect(aX + 20*scale, aY + 35*scale, nodeW - 70*scale, 4*scale);
        ctx.fillStyle = colorWorkflowFill;

        // Line down to diamond
        const dSize = 50 * scale;
        const dY = aY + nodeH + gapY + dSize; // Center of diamond
        ctx.beginPath();
        ctx.moveTo(cx, aY + nodeH);
        ctx.lineTo(cx, dY - dSize);
        ctx.stroke();

        // 3. Condition Diamond
        ctx.beginPath();
        ctx.moveTo(cx, dY - dSize);
        ctx.lineTo(cx + dSize, dY);
        ctx.lineTo(cx, dY + dSize);
        ctx.lineTo(cx - dSize, dY);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();

        // Branches
        const leftX = cx - branchW;
        const rightX = cx + branchW;
        const branchY = dY + dSize + gapY;

        // Left Path (Yes)
        ctx.beginPath();
        ctx.moveTo(cx - dSize, dY);
        ctx.lineTo(leftX, dY);
        ctx.lineTo(leftX, branchY);
        ctx.stroke();
        
        // Right Path (No)
        ctx.beginPath();
        ctx.moveTo(cx + dSize, dY);
        ctx.lineTo(rightX, dY);
        ctx.lineTo(rightX, branchY);
        ctx.stroke();

        // Left Action Node
        roundRect(leftX - nodeW/2, branchY, nodeW, nodeH, 8);
        
        // Right Action Node
        roundRect(rightX - nodeW/2, branchY, nodeW, nodeH, 8);

        // Optional: Pulse traveling down
        const pulseSpeed = 0.002;
        const p = (time * pulseSpeed) % 1;
        const totalLen = (branchY + nodeH - startY);
        const pulseY = startY + p * totalLen;
        
        // Only draw pulse if it's within bounds broadly (simplified)
        // Draw a glowing dot moving down center
        if (p < 0.6) {
           const curY = startY + (p/0.6) * (dY - startY);
           ctx.beginPath();
           ctx.arc(cx, curY, 3, 0, Math.PI * 2);
           ctx.fillStyle = colorSignal;
           ctx.shadowColor = colorSignal;
           ctx.shadowBlur = 10;
           ctx.fill();
           ctx.shadowBlur = 0;
        } else {
           // Split pulse
           const subP = (p - 0.6) / 0.4;
           const curY = dY + subP * (branchY + nodeH - dY);
           // Left
           ctx.beginPath();
           ctx.arc(leftX, curY, 3, 0, Math.PI * 2);
           ctx.fillStyle = colorSignal;
           ctx.fill();
           // Right
           ctx.beginPath();
           ctx.arc(rightX, curY, 3, 0, Math.PI * 2);
           ctx.fillStyle = colorSignal;
           ctx.fill();
        }
    };

    let frameId: number;
    let time = 0;

    const animate = () => {
      time++;
      
      // Clear canvas (transparent background to let CSS bg show through)
      ctx.clearRect(0, 0, width, height);

      // Draw Workflow Schematic Layer
      drawWorkflow(time);

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

      // Update & Draw Signals
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