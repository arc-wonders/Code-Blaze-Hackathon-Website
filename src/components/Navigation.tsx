import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from './ui/utils';

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#schedule', label: 'Schedule' },
    { href: '#prizes', label: 'Prizes' },
    { href: '#sponsors', label: 'Sponsors' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <nav 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled 
          ? "bg-[#0B0B0F]/80 backdrop-blur-xl shadow-[0_4px_20px_rgba(255,106,0,0.1)] border-b border-[#FF6A00]/20" 
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a 
            href="#hero" 
            className="flex items-center gap-2 group"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            <div className="relative">
              <span 
                className="text-2xl md:text-3xl tracking-wider uppercase text-transparent bg-clip-text bg-gradient-to-r from-[#FF6A00] to-[#FFA559] group-hover:from-[#FFA559] group-hover:to-[#FF6A00] transition-all duration-300"
                style={{ fontFamily: "'Saira Condensed', sans-serif", letterSpacing: '0.1em' }}
              >
                CODEBLAZE
              </span>
              <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-[#FF6A00] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[#F8F1E7] hover:text-[#FFA559] transition-colors duration-200 uppercase tracking-wider text-sm relative group"
                onClick={(e) => {
                  e.preventDefault();
                  const element = document.querySelector(link.href);
                  element?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#FF6A00] group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-[#F8F1E7] hover:text-[#FFA559] transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden pb-6 space-y-4 border-t border-[#FF6A00]/20 pt-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block text-[#F8F1E7] hover:text-[#FFA559] transition-colors uppercase tracking-wider text-sm py-2"
                onClick={(e) => {
                  e.preventDefault();
                  const element = document.querySelector(link.href);
                  element?.scrollIntoView({ behavior: 'smooth' });
                  setIsMobileMenuOpen(false);
                }}
              >
                {link.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}