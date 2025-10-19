export function FireIcon({ className = "w-12 h-12" }: { className?: string }) {
  return (
    <svg 
      viewBox="0 0 200 240" 
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        {/* Realistic fire gradients */}
        <linearGradient id="fireCore" x1="50%" y1="100%" x2="50%" y2="0%">
          <stop offset="0%" stopColor="#FF3B2F" stopOpacity="1" />
          <stop offset="30%" stopColor="#FF6A00" stopOpacity="0.95" />
          <stop offset="60%" stopColor="#FFA559" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#FFE4B5" stopOpacity="0.3" />
        </linearGradient>
        
        <radialGradient id="fireGlowCore" cx="50%" cy="70%">
          <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.9" />
          <stop offset="20%" stopColor="#FFE4B5" stopOpacity="0.7" />
          <stop offset="50%" stopColor="#FFA559" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#FF6A00" stopOpacity="0" />
        </radialGradient>
        
        <radialGradient id="fireOuter" cx="50%" cy="60%">
          <stop offset="0%" stopColor="#FFA559" stopOpacity="0.8" />
          <stop offset="50%" stopColor="#FF6A00" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#FF3B2F" stopOpacity="0" />
        </radialGradient>
        
        {/* Turbulence for organic feel */}
        <filter id="fireDistortion">
          <feTurbulence type="fractalNoise" baseFrequency="0.015" numOctaves="3" seed="2">
            <animate attributeName="baseFrequency" values="0.015;0.02;0.015" dur="3s" repeatCount="indefinite"/>
          </feTurbulence>
          <feDisplacementMap in="SourceGraphic" scale="8"/>
          <feGaussianBlur stdDeviation="2"/>
        </filter>
        
        <filter id="fireGlow">
          <feGaussianBlur stdDeviation="8" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>
      
      {/* Outer glow halo */}
      <ellipse
        cx="100"
        cy="180"
        rx="70"
        ry="50"
        fill="url(#fireOuter)"
        filter="url(#fireGlow)"
        opacity="0.6"
      >
        <animate attributeName="ry" values="50;58;50" dur="2s" repeatCount="indefinite"/>
        <animate attributeName="rx" values="70;65;70" dur="2.5s" repeatCount="indefinite"/>
      </ellipse>
      
      {/* Main flame body - organic shape */}
      <path
        d="M 100 200 
           Q 60 180 55 140 
           Q 50 100 65 70 
           Q 75 45 90 30 
           Q 95 15 100 10 
           Q 105 15 110 30 
           Q 125 45 135 70 
           Q 150 100 145 140 
           Q 140 180 100 200 Z"
        fill="url(#fireCore)"
        filter="url(#fireDistortion)"
        opacity="0.95"
      />
      
      {/* Secondary flame layer */}
      <path
        d="M 100 190 
           Q 70 175 68 145 
           Q 65 115 75 85 
           Q 82 60 95 40 
           Q 98 25 100 20 
           Q 102 25 105 40 
           Q 118 60 125 85 
           Q 135 115 132 145 
           Q 130 175 100 190 Z"
        fill="url(#fireCore)"
        filter="url(#fireDistortion)"
        opacity="0.85"
      >
        <animateTransform
          attributeName="transform"
          type="translate"
          values="0,0; -2,3; 2,-2; 0,0"
          dur="1.5s"
          repeatCount="indefinite"
        />
      </path>
      
      {/* Inner bright core */}
      <path
        d="M 100 170 
           Q 80 160 78 135 
           Q 76 110 85 85 
           Q 90 65 100 50 
           Q 110 65 115 85 
           Q 124 110 122 135 
           Q 120 160 100 170 Z"
        fill="url(#fireGlowCore)"
        filter="url(#fireGlow)"
        opacity="0.9"
      >
        <animate attributeName="opacity" values="0.9;1;0.85;1;0.9" dur="1s" repeatCount="indefinite"/>
      </path>
      
      {/* Hot center point */}
      <ellipse
        cx="100"
        cy="120"
        rx="12"
        ry="18"
        fill="#FFFFFF"
        filter="url(#fireGlow)"
        opacity="0.8"
      >
        <animate attributeName="opacity" values="0.6;0.9;0.6" dur="0.8s" repeatCount="indefinite"/>
        <animate attributeName="ry" values="18;22;18" dur="1.2s" repeatCount="indefinite"/>
      </ellipse>
      
      {/* Flame wisps at top */}
      <path
        d="M 100 30 Q 85 20 80 5"
        fill="none"
        stroke="#FFA559"
        strokeWidth="3"
        opacity="0.4"
        filter="url(#fireGlow)"
      >
        <animate attributeName="opacity" values="0.2;0.5;0.2" dur="2s" repeatCount="indefinite"/>
      </path>
      
      <path
        d="M 100 25 Q 115 15 120 5"
        fill="none"
        stroke="#FFE4B5"
        strokeWidth="2"
        opacity="0.5"
        filter="url(#fireGlow)"
      >
        <animate attributeName="opacity" values="0.3;0.6;0.3" dur="1.8s" repeatCount="indefinite"/>
      </path>
    </svg>
  );
}