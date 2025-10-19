import { ButtonHTMLAttributes, forwardRef } from 'react';
import { cn } from './ui/utils';

interface LavaButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'chip';
  children: React.ReactNode;
}

export const LavaButton = forwardRef<HTMLButtonElement, LavaButtonProps>(
  ({ variant = 'primary', className, children, ...props }, ref) => {
    const baseStyles = "relative px-6 py-3 rounded-lg transition-all duration-300 overflow-hidden group disabled:opacity-50 disabled:cursor-not-allowed";
    
    const variantStyles = {
      primary: `
        bg-gradient-to-r from-[#FF6A00] to-[#FF3B2F] 
        text-[#F8F1E7] 
        shadow-[0_0_20px_rgba(255,106,0,0.3)] 
        hover:shadow-[0_0_30px_rgba(255,106,0,0.5)] 
        hover:scale-105
        before:absolute before:inset-0 before:bg-gradient-to-r before:from-[#FFA559] before:to-[#FF6A00] 
        before:opacity-0 before:transition-opacity before:duration-300 
        hover:before:opacity-100
      `,
      secondary: `
        bg-transparent 
        text-[#F8F1E7] 
        border-2 border-[#FF3B2F] 
        shadow-[0_0_15px_rgba(255,59,47,0.2)] 
        hover:shadow-[0_0_25px_rgba(255,59,47,0.4)] 
        hover:bg-[#FF3B2F]/10
        hover:scale-105
      `,
      chip: `
        bg-[#15161A]/80 
        text-[#FFA559] 
        border border-[#FF6A00]/30 
        px-4 py-2 
        text-sm
        hover:border-[#FF6A00] 
        hover:bg-[#FF6A00]/10
        hover:shadow-[0_0_15px_rgba(255,106,0,0.3)]
      `
    };

    return (
      <button
        ref={ref}
        className={cn(baseStyles, variantStyles[variant], className)}
        {...props}
      >
        <span className="relative z-10">{children}</span>
      </button>
    );
  }
);

LavaButton.displayName = 'LavaButton';
