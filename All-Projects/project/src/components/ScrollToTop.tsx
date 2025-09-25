import React, { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-8 right-8 z-50 w-12 h-12 glass-button backdrop-blur-xl bg-amber-500/90 border border-amber-400/30 rounded-full flex items-center justify-center text-black hover:bg-amber-400 transition-all duration-500 transform shadow-2xl hover:shadow-amber-500/50 ${
        isVisible 
          ? 'translate-y-0 opacity-100 scale-100' 
          : 'translate-y-16 opacity-0 scale-75 pointer-events-none'
      }`}
      aria-label="Scroll to top"
    >
      <ChevronUp className="w-6 h-6 transform group-hover:scale-110 transition-transform duration-300" />
      
      {/* Animated Ring */}
      <div className="absolute inset-0 rounded-full border-2 border-amber-400/50 animate-ping"></div>
    </button>
  );
};

export default ScrollToTop;