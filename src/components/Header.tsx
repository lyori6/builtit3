import React, { useState, useEffect } from 'react';
import { Button } from './Button';

/**
 * Modern, sticky header with translucent backdrop blur effect
 * Becomes semi-transparent when scrolling down the page
 */
export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  
  // Track scroll position to apply translucent effect
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 px-6 py-4 transition-all duration-300 ${
        isScrolled 
          ? 'bg-black/70 backdrop-blur-md shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#00C9B7] to-[#4F46E5]">
            BuiltIt
          </span>
        </div>
        
        {/* Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#services" className="text-white/90 hover:text-white transition-colors">
            Services
          </a>
          <a href="#portfolio" className="text-white/90 hover:text-white transition-colors">
            Portfolio
          </a>
          <a href="#process" className="text-white/90 hover:text-white transition-colors">
            Process
          </a>
          <a href="#about" className="text-white/90 hover:text-white transition-colors">
            About
          </a>
        </nav>
        
        {/* CTA Button */}
        <Button 
          variant="primary"
          className="hidden md:flex"
        >
          Book Call
        </Button>
        
        {/* Mobile menu button */}
        <button className="md:hidden text-white">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </header>
  );
}
