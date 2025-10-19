export function EmberParticle({ className = "" }: { className?: string }) {
  return (
    <svg 
      viewBox="0 0 20 20" 
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <radialGradient id="emberGlow" cx="50%" cy="50%">
          <stop offset="0%" stopColor="#FFFFFF" stopOpacity="1" />
          <stop offset="30%" stopColor="#FFE4B5" stopOpacity="0.9" />
          <stop offset="60%" stopColor="#FFA559" stopOpacity="0.7" />
          <stop offset="100%" stopColor="#FF6A00" stopOpacity="0" />
        </radialGradient>
        
        <filter id="emberGlowFilter">
          <feGaussianBlur stdDeviation="2" result="blur"/>
          <feMerge>
            <feMergeNode in="blur"/>
            <feMergeNode in="blur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>
      
      <circle
        cx="10"
        cy="10"
        r="3"
        fill="url(#emberGlow)"
        filter="url(#emberGlowFilter)"
      >
        <animate attributeName="opacity" values="0.6;1;0.6" dur="2s" repeatCount="indefinite"/>
        <animate attributeName="r" values="2.5;3.5;2.5" dur="2.5s" repeatCount="indefinite"/>
      </circle>
    </svg>
  );
}
