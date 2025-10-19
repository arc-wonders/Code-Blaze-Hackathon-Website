import { useEffect, useState } from 'react';
import lavaCrack1 from 'figma:asset/216226afb82798db2394e057ecc8a44a27a07a54.png';
import lavaCrack2 from 'figma:asset/c33cf7676c14910fb01642681db4261b3e49f47f.png';

export function ThunderEffects() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight - windowHeight;
      const scrolled = window.scrollY;
      const progress = Math.min(scrolled / documentHeight, 1);
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Call once on mount

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Calculate opacity: 1 at 0% scroll, fades to 0.2 by 35% scroll
  const fadeThreshold = 0.35; // Fade by 35% of page
  const minOpacity = 0.2;
  const thunderOpacity = scrollProgress < fadeThreshold 
    ? 1 - ((1 - minOpacity) * (scrollProgress / fadeThreshold))
    : minOpacity;

  return (
    <div 
      className="fixed inset-0 overflow-hidden pointer-events-none z-0" 
      aria-hidden="true"
      style={{ opacity: thunderOpacity }}
    >
      {/* Top Left Lightning Crack */}
      <div 
        className="absolute top-0 left-0 w-[500px] h-[400px] opacity-0 animate-lightning-strike"
        style={{ 
          animationDelay: '0s',
          animationDuration: '6s'
        }}
      >
        <img 
          src={lavaCrack1} 
          alt="" 
          className="w-full h-full object-contain"
          style={{ 
            filter: 'brightness(1.2) contrast(1.1)',
            mixBlendMode: 'screen'
          }}
        />
      </div>

      {/* Top Right Lightning Crack */}
      <div 
        className="absolute top-20 right-0 w-[600px] h-[500px] opacity-0 animate-lightning-strike"
        style={{ 
          animationDelay: '2s',
          animationDuration: '5.5s',
          transform: 'scaleX(-1)' // Mirror the image
        }}
      >
        <img 
          src={lavaCrack2} 
          alt="" 
          className="w-full h-full object-contain"
          style={{ 
            filter: 'brightness(1.3) contrast(1.2)',
            mixBlendMode: 'screen'
          }}
        />
      </div>

      {/* Middle Left - Diagonal Crack */}
      <div 
        className="absolute top-1/3 left-10 w-[450px] h-[380px] opacity-0 animate-lightning-strike"
        style={{ 
          animationDelay: '4s',
          animationDuration: '6.5s',
          transform: 'rotate(-15deg)'
        }}
      >
        <img 
          src={lavaCrack1} 
          alt="" 
          className="w-full h-full object-contain"
          style={{ 
            filter: 'brightness(1.1) contrast(1.15)',
            mixBlendMode: 'screen'
          }}
        />
      </div>

      {/* Middle Right - Vertical Crack */}
      <div 
        className="absolute top-1/2 right-20 w-[550px] h-[450px] opacity-0 animate-lightning-strike"
        style={{ 
          animationDelay: '1.5s',
          animationDuration: '5s',
          transform: 'rotate(25deg)'
        }}
      >
        <img 
          src={lavaCrack2} 
          alt="" 
          className="w-full h-full object-contain"
          style={{ 
            filter: 'brightness(1.25) contrast(1.1)',
            mixBlendMode: 'screen'
          }}
        />
      </div>

      {/* Bottom Left Lightning Crack */}
      <div 
        className="absolute bottom-32 left-1/4 w-[500px] h-[400px] opacity-0 animate-lightning-strike"
        style={{ 
          animationDelay: '3.5s',
          animationDuration: '6s',
          transform: 'rotate(45deg) scaleY(-1)'
        }}
      >
        <img 
          src={lavaCrack1} 
          alt="" 
          className="w-full h-full object-contain"
          style={{ 
            filter: 'brightness(1.15) contrast(1.2)',
            mixBlendMode: 'screen'
          }}
        />
      </div>

      {/* Bottom Right - Large Crack */}
      <div 
        className="absolute bottom-20 right-1/3 w-[650px] h-[520px] opacity-0 animate-lightning-strike"
        style={{ 
          animationDelay: '5.5s',
          animationDuration: '5.5s',
          transform: 'rotate(-30deg)'
        }}
      >
        <img 
          src={lavaCrack2} 
          alt="" 
          className="w-full h-full object-contain"
          style={{ 
            filter: 'brightness(1.2) contrast(1.15)',
            mixBlendMode: 'screen'
          }}
        />
      </div>

      {/* Subtle ambient cracks - smaller, more frequent */}
      <div 
        className="absolute top-2/3 left-1/2 w-[350px] h-[300px] opacity-0 animate-lightning-strike"
        style={{ 
          animationDelay: '2.8s',
          animationDuration: '4.5s',
          transform: 'rotate(60deg) scale(0.8)'
        }}
      >
        <img 
          src={lavaCrack1} 
          alt="" 
          className="w-full h-full object-contain"
          style={{ 
            filter: 'brightness(1.1) contrast(1.1)',
            mixBlendMode: 'screen'
          }}
        />
      </div>

      <div 
        className="absolute top-1/4 right-1/3 w-[400px] h-[320px] opacity-0 animate-lightning-strike"
        style={{ 
          animationDelay: '4.8s',
          animationDuration: '5.8s',
          transform: 'rotate(-45deg) scaleX(-1)'
        }}
      >
        <img 
          src={lavaCrack2} 
          alt="" 
          className="w-full h-full object-contain"
          style={{ 
            filter: 'brightness(1.18) contrast(1.12)',
            mixBlendMode: 'screen'
          }}
        />
      </div>

      {/* Thunder flash overlay - realistic atmospheric illumination */}
      <div 
        className="absolute inset-0 opacity-0 animate-thunder-flash pointer-events-none"
        style={{ 
          animationDelay: '1.5s',
          background: 'radial-gradient(ellipse at 30% 40%, rgba(255, 228, 181, 0.12) 0%, rgba(255, 165, 89, 0.06) 30%, transparent 60%)'
        }}
      />
      
      <div 
        className="absolute inset-0 opacity-0 animate-thunder-flash pointer-events-none"
        style={{ 
          animationDelay: '4.2s',
          background: 'radial-gradient(ellipse at 70% 50%, rgba(255, 140, 0, 0.1) 0%, rgba(255, 106, 0, 0.05) 35%, transparent 65%)'
        }}
      />
      
      <div 
        className="absolute inset-0 opacity-0 animate-thunder-flash pointer-events-none"
        style={{ 
          animationDelay: '6s',
          background: 'radial-gradient(ellipse at 50% 60%, rgba(255, 165, 89, 0.08) 0%, rgba(255, 59, 47, 0.04) 40%, transparent 70%)'
        }}
      />
    </div>
  );
}