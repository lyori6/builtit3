import { Button } from './Button';
import { ArrowRightIcon } from 'lucide-react';
// Remove the import since we're not using the separate component anymore

export function HeroSection() {
  return (
    <section 
      className="relative pt-20 pb-32 px-4 min-h-[90vh] flex items-center"
      id="hero"
      style={{ 
        background: 'linear-gradient(135deg, rgba(79, 70, 229, 0.7) 0%, rgba(0, 201, 183, 0.3) 50%, rgba(5, 5, 5, 0.95) 100%)',
        position: 'relative',
        overflow: 'hidden',
        backgroundSize: '300% 300%',
        animation: 'gradient-animation 25s ease-in-out infinite',
      }}
    >

      
      {/* Content container: must be layered above the background */}
      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="flex flex-col items-center text-center">
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold leading-tight tracking-tight max-w-4xl mb-8 bg-clip-text text-transparent bg-gradient-to-r from-white/90 to-white/70 drop-shadow-2xl">
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
              onClick={() => {
                const portfolioElement = document.getElementById('portfolio');
                if (portfolioElement) {
                  portfolioElement.scrollIntoView({ behavior: 'smooth' });
                }
              }}
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