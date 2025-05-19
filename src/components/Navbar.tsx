import React, { useState, useEffect } from 'react';
import { MenuIcon, XIcon } from 'lucide-react';
import { Button } from './Button';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  // Add scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <nav className={`sticky top-0 z-50 backdrop-blur-sm border-b border-border px-4 py-4 transition-all duration-300 ${scrolled ? 'bg-background/95 shadow-md' : 'bg-background/80'}`}>
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <span className="text-2xl font-bold text-text-primary">BuiltIt.dev</span>
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <div className="flex space-x-6">
            {navLinks.map(item => (
              <a 
                key={item.name} 
                href={item.href} 
                className="text-text-primary hover:text-primary transition-colors duration-300 font-medium"
              >
                {item.name}
              </a>
            ))}
          </div>
          <Button>Book a Call</Button>
        </div>
        
        {/* Mobile menu button */}
        <div className="md:hidden">
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="text-text-primary hover:text-primary transition-colors"
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden pt-4 pb-6 px-4 space-y-4 flex flex-col bg-background/95 animate-fade-in-up">
          {navLinks.map(item => (
            <a 
              key={item.name} 
              href={item.href} 
              className="text-text-primary hover:text-primary transition-colors py-2" 
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </a>
          ))}
          <div className="pt-2">
            <Button fullWidth>Book a Call</Button>
          </div>
        </div>
      )}
    </nav>
  );
}