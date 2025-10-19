import { cn } from './ui/utils';
import { LightningBolt } from './LightningBolt';

interface SectionHeadingProps {
  preTitle: string;
  title: string;
  className?: string;
}

export function SectionHeading({ preTitle, title, className }: SectionHeadingProps) {
  return (
    <div className={cn("text-center mb-12", className)}>
      <div className="flex items-center justify-center gap-2 mb-3">
        <LightningBolt className="w-4 h-4 text-[#FFA559]" />
        <p className="text-[#FFA559] tracking-[0.3em] uppercase text-sm">
          {preTitle}
        </p>
        <LightningBolt className="w-4 h-4 text-[#FFA559]" />
      </div>
      <h2 
        className="text-5xl md:text-6xl lg:text-7xl uppercase tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-[#F8F1E7] via-[#FFA559] to-[#FF6A00]"
        style={{ fontFamily: "'Saira Condensed', sans-serif", letterSpacing: '0.05em' }}
      >
        {title}
      </h2>
      
      {/* Decorative line */}
      <div className="flex items-center justify-center gap-4 mt-6">
        <div className="h-px w-16 bg-gradient-to-r from-transparent to-[#FF6A00]" />
        <div className="w-2 h-2 rounded-full bg-[#FF6A00] animate-lava-pulse" />
        <div className="h-px w-16 bg-gradient-to-l from-transparent to-[#FF6A00]" />
      </div>
    </div>
  );
}