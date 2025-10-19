import { GlowCard } from './GlowCard';

interface Sponsor {
  name: string;
}

const SPONSORS: Sponsor[] = [
  { name: 'Devfolio' },
  { name: 'ETH India' },
];

export function SponsorGrid() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {SPONSORS.map((sponsor, index) => (
          <GlowCard 
            key={index} 
            className="group hover:scale-105 transition-all duration-300 cursor-pointer"
            noBorder={false}
          >
            <div className="flex items-center justify-center h-32">
              <p 
                className="text-center transition-all duration-300"
                style={{ 
                  fontFamily: "'Anton', sans-serif",
                  color: '#F8F1E7',
                  opacity: 0.8,
                  fontSize: '1.75rem',
                  letterSpacing: '0.05em',
                }}
              >
                {sponsor.name}
              </p>
            </div>
            
            {/* Lava glow underline effect on hover */}
            <div 
              className="absolute bottom-0 left-0 right-0 h-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-b-lg"
              style={{ 
                background: 'linear-gradient(to right, transparent, #FF6A00, #FFA559, #FF6A00, transparent)',
                boxShadow: '0 0 15px rgba(255, 106, 0, 0.6)',
              }}
            />
            
            {/* Glow effect on hover */}
            <div 
              className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-lg pointer-events-none"
              style={{ 
                background: 'radial-gradient(circle at center, #FF6A00, transparent 70%)',
              }}
            />
          </GlowCard>
        ))}
      </div>
    </div>
  );
}
