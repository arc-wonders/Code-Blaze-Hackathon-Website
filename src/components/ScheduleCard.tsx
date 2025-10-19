import { GlowCard } from './GlowCard';
import { Clock } from 'lucide-react';
import { FireIcon } from './FireIcon';

interface ScheduleItem {
  time?: string;
  title: string;
}

interface ScheduleCardProps {
  day: string;
  subtitle: string;
  items: ScheduleItem[];
  accentColor?: 'orange' | 'red' | 'glow';
}

export function ScheduleCard({ day, subtitle, items, accentColor = 'orange' }: ScheduleCardProps) {
  const accentColors = {
    orange: 'bg-gradient-to-r from-[#FF6A00] to-[#FFA559]',
    red: 'bg-gradient-to-r from-[#FF3B2F] to-[#FF6A00]',
    glow: 'bg-gradient-to-r from-[#FFA559] to-[#FF6A00]',
  };
  
  const glowShadows = {
    orange: 'shadow-[0_0_30px_rgba(255,106,0,0.3)]',
    red: 'shadow-[0_0_30px_rgba(255,59,47,0.3)]',
    glow: 'shadow-[0_0_30px_rgba(255,165,89,0.3)]',
  };

  return (
    <GlowCard glowColor={accentColor} className="group relative overflow-visible hover:translate-y-[-4px] transition-all duration-300">
      {/* Top accent bar with glow */}
      <div className={`absolute top-0 left-0 right-0 h-1.5 ${accentColors[accentColor]} rounded-t-lg ${glowShadows[accentColor]}`} />
      
      {/* Fire icon decoration */}
      <div className="absolute -top-6 right-4 opacity-0 group-hover:opacity-60 transition-opacity duration-500">
        <FireIcon className="w-10 h-10" />
      </div>
      
      <div className="pt-3">
        <div className="mb-6">
          <h3 
            className="text-4xl md:text-5xl mb-1 text-transparent bg-clip-text bg-gradient-to-br from-[#F8F1E7] to-[#FFA559] uppercase"
            style={{ fontFamily: "'Teko', sans-serif", letterSpacing: '0.05em' }}
          >
            {day}
          </h3>
          <div className="flex items-center gap-2">
            <div className="h-px w-8 bg-gradient-to-r from-[#FF6A00] to-transparent" />
            <p className="text-[#FFA559] uppercase tracking-widest text-xs" style={{ fontFamily: "'Teko', sans-serif" }}>
              {subtitle}
            </p>
          </div>
        </div>
        
        <ul className="space-y-3.5">
          {items.map((item, index) => (
            <li key={index} className="flex items-start gap-3 text-[#F8F1E7]/90 group/item hover:text-[#F8F1E7] transition-colors">
              <div className="relative mt-1 flex-shrink-0">
                <Clock className="w-4 h-4 text-[#FF6A00]" />
                <div className="absolute inset-0 blur-sm opacity-0 group-hover/item:opacity-50 transition-opacity">
                  <Clock className="w-4 h-4 text-[#FF6A00]" />
                </div>
              </div>
              <div className="flex-1">
                {item.time && (
                  <span className="text-[#FFA559] mr-2.5 text-sm font-mono">
                    {item.time}
                  </span>
                )}
                <span className="text-sm leading-relaxed">{item.title}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
      
      {/* Corner accent */}
      <div className="absolute bottom-2 right-2 w-8 h-8 opacity-10">
        <div className={`w-full h-full ${accentColors[accentColor]} rounded-tl-full`} />
      </div>
    </GlowCard>
  );
}