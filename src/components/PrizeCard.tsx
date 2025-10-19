import { GlowCard } from './GlowCard';
import { Trophy } from 'lucide-react';
import { LightningBolt } from './LightningBolt';
import { FireIcon } from './FireIcon';

interface PrizeCardProps {
  place: string;
  amount: string;
  benefits: string[];
  isSpecial?: boolean;
}

export function PrizeCard({ place, amount, benefits, isSpecial = false }: PrizeCardProps) {
  if (isSpecial) {
    return (
      <div className="inline-block bg-gradient-to-br from-[#15161A] to-[#0B0B0F] border border-[#FF6A00]/30 rounded-lg px-12 py-6 hover:border-[#FF6A00] hover:shadow-[0_0_20px_rgba(255,106,0,0.4)] transition-all duration-300 group">
        <div className="flex items-center gap-4">
          <div className="relative">
            <FireIcon className="w-8 h-8 text-[#FF6A00] group-hover:scale-110 transition-transform" />
            <div className="absolute inset-0 blur-md opacity-50">
              <FireIcon className="w-8 h-8 text-[#FF6A00]" />
            </div>
          </div>
          <div>
            <p className="text-base text-[#FFA559] uppercase tracking-wider mb-1" style={{ fontFamily: "'Teko', sans-serif", letterSpacing: '0.1em' }}>
              {place}
            </p>
            <p className="text-xl text-[#F8F1E7] font-semibold">{amount}</p>
          </div>
        </div>
        
        {/* Bottom glow line */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#FF6A00] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>
    );
  }

  const placeColors = {
    'First': 'from-[#FFD700] to-[#FF6A00]',
    'Second': 'from-[#C0C0C0] to-[#FFA559]',
    'Third': 'from-[#CD7F32] to-[#FF6A00]',
  };

  const placeColor = placeColors[place as keyof typeof placeColors] || 'from-[#FF6A00] to-[#FFA559]';

  return (
    <GlowCard className="group text-center relative overflow-visible">
      {/* Lightning bolt decorations */}
      <div className="absolute -top-3 -right-3 opacity-0 group-hover:opacity-100 transition-opacity">
        <LightningBolt className="w-6 h-6 animate-lightning-strike" />
      </div>
      <div className="absolute -bottom-3 -left-3 opacity-0 group-hover:opacity-100 transition-opacity">
        <LightningBolt className="w-6 h-6 animate-lightning-strike" style={{ animationDelay: '0.5s' }} />
      </div>
      
      {/* Trophy icon with gradient */}
      <div className="flex justify-center mb-4">
        <div className={`p-4 rounded-full bg-gradient-to-br ${placeColor} shadow-[0_0_20px_rgba(255,106,0,0.3)]`}>
          <Trophy className="w-8 h-8 text-[#F8F1E7]" />
        </div>
      </div>
      
      <h3 
        className={`text-3xl mb-2 uppercase bg-clip-text text-transparent bg-gradient-to-r ${placeColor}`}
        style={{ fontFamily: "'Saira Condensed', sans-serif", letterSpacing: '0.05em' }}
      >
        {place} Place
      </h3>
      
      <p className="text-4xl mb-6 text-[#F8F1E7]" style={{ fontFamily: "'Teko', sans-serif" }}>
        {amount}
      </p>
      
      <ul className="space-y-2 text-[#F8F1E7]/80 text-sm">
        {benefits.map((benefit, index) => (
          <li key={index} className="flex items-center justify-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-[#FF6A00]" />
            {benefit}
          </li>
        ))}
      </ul>
    </GlowCard>
  );
}