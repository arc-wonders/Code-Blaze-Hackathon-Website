export function LightningBolt({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg 
      viewBox="0 0 100 200" 
      fill="none" 
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        {/* Electric core gradient */}
        <linearGradient id="electricCore" x1="50%" y1="0%" x2="50%" y2="100%">
          <stop offset="0%" stopColor="#E0F4FF" stopOpacity="1" />
          <stop offset="20%" stopColor="#FFFFFF" stopOpacity="0.95" />
          <stop offset="40%" stopColor="#B8E6FF" stopOpacity="0.9" />
          <stop offset="70%" stopColor="#FFA559" stopOpacity="0.85" />
          <stop offset="100%" stopColor="#FF6A00" stopOpacity="0.7" />
        </linearGradient>
        
        <linearGradient id="electricGlow" x1="50%" y1="0%" x2="50%" y2="100%">
          <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.8" />
          <stop offset="50%" stopColor="#FFA559" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#FF6A00" stopOpacity="0.3" />
        </linearGradient>
        
        {/* Plasma glow effect */}
        <filter id="electricGlow">
          <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
        
        <filter id="plasmaGlow">
          <feGaussianBlur stdDeviation="6" result="blur"/>
          <feColorMatrix in="blur" type="matrix" values="
            1 0 0 0 0
            0.8 0.5 0 0 0
            0.5 0.3 1 0 0
            0 0 0 1 0"/>
          <feMerge>
            <feMergeNode/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>
      
      {/* Outer plasma glow */}
      <g opacity="0.4" filter="url(#plasmaGlow)">
        <path 
          d="M 50 5 L 48 40 L 52 40 L 50 75 L 54 75 L 48 110 L 52 110 L 45 145 L 53 145 L 40 195"
          stroke="url(#electricGlow)"
          strokeWidth="12"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      
      {/* Main lightning bolt with branches */}
      <g filter="url(#electricGlow)">
        {/* Primary strike */}
        <path 
          d="M 50 5 L 48 40 L 52 40 L 50 75 L 54 75 L 48 110 L 52 110 L 45 145 L 53 145 L 40 195"
          stroke="url(#electricCore)"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        
        {/* Branch 1 - left */}
        <path 
          d="M 48 40 L 30 55 L 25 70"
          stroke="url(#electricCore)"
          strokeWidth="2"
          strokeLinecap="round"
          opacity="0.8"
        />
        
        {/* Branch 2 - right */}
        <path 
          d="M 54 75 L 70 85 L 75 95"
          stroke="url(#electricCore)"
          strokeWidth="2"
          strokeLinecap="round"
          opacity="0.7"
        />
        
        {/* Branch 3 - left lower */}
        <path 
          d="M 48 110 L 35 125 L 28 140"
          stroke="url(#electricCore)"
          strokeWidth="1.5"
          strokeLinecap="round"
          opacity="0.6"
        />
        
        {/* Branch 4 - right lower */}
        <path 
          d="M 53 145 L 65 160 L 70 175"
          stroke="url(#electricCore)"
          strokeWidth="1.5"
          strokeLinecap="round"
          opacity="0.6"
        />
        
        {/* Sub-branch tiny */}
        <path 
          d="M 30 55 L 20 58"
          stroke="url(#electricGlow)"
          strokeWidth="1"
          strokeLinecap="round"
          opacity="0.5"
        />
        
        <path 
          d="M 70 85 L 80 83"
          stroke="url(#electricGlow)"
          strokeWidth="1"
          strokeLinecap="round"
          opacity="0.5"
        />
      </g>
      
      {/* Core bright line */}
      <path 
        d="M 50 5 L 48 40 L 52 40 L 50 75 L 54 75 L 48 110 L 52 110 L 45 145 L 53 145 L 40 195"
        stroke="#FFFFFF"
        strokeWidth="0.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.9"
      />
    </svg>
  );
}