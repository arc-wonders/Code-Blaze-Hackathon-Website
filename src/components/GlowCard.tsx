import { HTMLAttributes, ReactNode } from 'react';
import { cn } from './ui/utils';

interface GlowCardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  glowColor?: string;
  noBorder?: boolean;
}

export function GlowCard({ children, glowColor = 'orange', noBorder = false, className, ...props }: GlowCardProps) {
  const glowColors = {
    orange: 'hover:shadow-[0_0_30px_rgba(255,106,0,0.4)] border-[#FF6A00]/30 hover:border-[#FF6A00]',
    red: 'hover:shadow-[0_0_30px_rgba(255,59,47,0.4)] border-[#FF3B2F]/30 hover:border-[#FF3B2F]',
    glow: 'hover:shadow-[0_0_30px_rgba(255,165,89,0.4)] border-[#FFA559]/30 hover:border-[#FFA559]',
  };

  return (
    <div
      className={cn(
        "relative bg-[#15161A] rounded-lg p-6 transition-all duration-300 hover:-translate-y-1 noise-texture overflow-hidden",
        !noBorder && "border-2",
        !noBorder && glowColors[glowColor as keyof typeof glowColors],
        className
      )}
      {...props}
    >
      {/* Gradient overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#FF6A00]/0 to-[#FF3B2F]/0 group-hover:from-[#FF6A00]/5 group-hover:to-[#FF3B2F]/5 transition-all duration-300 pointer-events-none z-0" />
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}
