import { useEffect, useState } from 'react';

interface Particle {
  id: number;
  left: number;
  delay: number;
  duration: number;
  size: number;
}

export function ParticlesBackground() {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const newParticles: Particle[] = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 8,
      duration: 8 + Math.random() * 4,
      size: 2 + Math.random() * 4,
    }));
    setParticles(newParticles);
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0" aria-hidden="true">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute bottom-0 rounded-full bg-gradient-to-t from-[#FF6A00] to-[#FF3B2F] blur-sm animate-ember-float"
          style={{
            left: `${particle.left}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            animationDelay: `${particle.delay}s`,
            animationDuration: `${particle.duration}s`,
          }}
        />
      ))}
      
      {/* Lava cracks/veins */}
      <svg className="absolute inset-0 w-full h-full opacity-20" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="lavaGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FF6A00" stopOpacity="0.3">
              <animate attributeName="stop-opacity" values="0.3;0.6;0.3" dur="3s" repeatCount="indefinite" />
            </stop>
            <stop offset="50%" stopColor="#FFA559" stopOpacity="0.5">
              <animate attributeName="stop-opacity" values="0.5;0.8;0.5" dur="3s" repeatCount="indefinite" />
            </stop>
            <stop offset="100%" stopColor="#FF3B2F" stopOpacity="0.3">
              <animate attributeName="stop-opacity" values="0.3;0.6;0.3" dur="3s" repeatCount="indefinite" />
            </stop>
          </linearGradient>
        </defs>
        
        {/* Lightning-like lava veins */}
        <path
          d="M 0,200 Q 100,180 200,160 T 400,140 T 600,120 T 800,100 T 1000,90 T 1200,80"
          fill="none"
          stroke="url(#lavaGradient)"
          strokeWidth="1"
          opacity="0.4"
        />
        <path
          d="M 100,400 Q 250,350 400,320 T 700,280 T 1000,260 T 1300,240"
          fill="none"
          stroke="url(#lavaGradient)"
          strokeWidth="1"
          opacity="0.3"
        />
        <path
          d="M 1920,300 Q 1700,280 1500,260 T 1200,240 T 900,220 T 600,200 T 300,180 T 0,160"
          fill="none"
          stroke="url(#lavaGradient)"
          strokeWidth="1"
          opacity="0.35"
        />
      </svg>
    </div>
  );
}
