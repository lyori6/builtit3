import React, { useEffect, useRef } from 'react';
import { Button } from './Button';
import { ArrowRightIcon } from 'lucide-react';

export function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null);
  
  // Subtle gradient animation effect
  useEffect(() => {
    if (!heroRef.current) return;
    
    const gradients = heroRef.current.querySelectorAll('.animated-gradient');
    
    const animateGradients = () => {
      gradients.forEach((gradient, index) => {
        const el = gradient as HTMLElement;
        const xPos = 50 + Math.sin(Date.now() * 0.0005 + index) * 10;
        const yPos = 50 + Math.cos(Date.now() * 0.0005 + index) * 10;
        el.style.backgroundPosition = `${xPos}% ${yPos}%`;
      });
      requestAnimationFrame(animateGradients);
    };
    
    const animationId = requestAnimationFrame(animateGradients);
    
    return () => cancelAnimationFrame(animationId);
  }, []);
  
  return (
    <section 
      ref={heroRef}
      className="relative pt-20 pb-32 px-4 overflow-hidden min-h-[90vh] flex items-center"
      id="hero"
    >
      {/* Dynamic background gradient effects inspired by Draftbit */}
      <div className="absolute inset-0 -z-10">
        <div className="animated-gradient absolute top-0 left-0 w-full h-full opacity-30 bg-gradient-to-br from-primary/20 to-transparent bg-[length:200%_200%] transition-all duration-1000 ease-in-out"></div>
        <div className="animated-gradient absolute top-0 left-0 w-full h-full opacity-20 bg-gradient-to-tr from-turquoise/10 to-transparent bg-[length:200%_200%] transition-all duration-1000 ease-in-out"></div>
        <div className="animated-gradient absolute top-1/4 left-1/4 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[150px] animate-pulse-glow"></div>
        <div className="animated-gradient absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-primary/8 rounded-full blur-[120px] animate-pulse-glow"></div>
        <div className="animated-gradient absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-turquoise/5 rounded-full blur-[100px] animate-pulse-glow"></div>
      </div>
      
      <div className="max-w-7xl mx-auto w-full">
        <div className="flex flex-col items-center text-center">
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold leading-tight tracking-tight max-w-4xl mb-8 bg-clip-text text-transparent bg-gradient-to-r from-text-primary to-text-primary/90">
            Launch an AI-ready MVP in 14 Days
          </h1>
          
          <p className="text-lg md:text-xl text-text-secondary max-w-2xl mb-12 font-medium leading-relaxed">
            Product strategy and modern code, delivered by a SaaS product
            leader. Less talk, more shipping.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-5">
            <Button 
              variant="primary" 
              className="px-8 py-4 text-lg"
            >
              Book Free Strategy Call
            </Button>
            
            <Button 
              variant="secondary" 
              onClick={() => document.getElementById('portfolio')?.scrollIntoView({
                behavior: 'smooth'
              })}
              className="px-8 py-4 text-lg"
            >
              <div className="flex items-center gap-2">
                View Portfolio
                <ArrowRightIcon size={20} />
              </div>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}