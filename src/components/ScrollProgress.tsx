import { useEffect, useState } from 'react';

export function ScrollProgress() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const currentScroll = window.scrollY;
      const progress = (currentScroll / totalScroll) * 100;
      setScrollProgress(Math.min(progress, 100));
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed bottom-0 left-0 right-0 h-1 bg-[#15161A] z-50">
      <div 
        className="h-full bg-gradient-to-r from-[#FF6A00] via-[#FFA559] to-[#FF3B2F] transition-all duration-150 shadow-[0_0_10px_rgba(255,106,0,0.5)]"
        style={{ width: `${scrollProgress}%` }}
      />
    </div>
  );
}
