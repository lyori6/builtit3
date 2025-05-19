import { useState, useEffect } from 'react';
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
    <nav className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-md px-4 py-4 transition-all duration-300 ${scrolled ? 'bg-black/70 shadow-lg' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <span className="text-2xl font-bold text-[#372fa6]">BuiltIt.dev</span>
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <div className="flex space-x-6">
            {navLinks.map(item => (
              <a 
                key={item.name} 
                href={item.href} 
                className="text-white/80 hover:text-white transition-colors duration-300 font-medium"
              >
                {item.name}
              </a>
            ))}
          </div>
          <Button 
            variant="primary" 
            className="bg-[#372fa6] hover:bg-[#211c5e] transition-colors"
          >
            Book a Call
          </Button>
        </div>
        
        {/* Mobile menu button */}
        <div className="md:hidden">
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="text-white hover:text-[#00C9B7] transition-colors"
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden pt-4 pb-6 px-4 space-y-4 flex flex-col bg-black/80 backdrop-blur-md animate-fade-in-up">
          {navLinks.map(item => (
            <a 
              key={item.name} 
              href={item.href} 
              className="text-white/80 hover:text-white transition-colors py-2" 
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </a>
          ))}
          <div className="pt-2">
            <Button 
              fullWidth 
              variant="primary"
              className="bg-[#372fa6] hover:bg-[#211c5e] transition-colors"
            >
              Book a Call
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}