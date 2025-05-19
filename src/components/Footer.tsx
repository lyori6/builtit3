import React from 'react';

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <footer className="bg-background border-t border-border py-16 px-4" id="footer">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="col-span-1 md:col-span-2">
            <h2 className="text-2xl font-bold text-text-primary mb-5">
              BuiltIt.dev
            </h2>
            <p className="text-text-secondary max-w-md font-normal leading-relaxed">
              Rapid MVP development agency specializing in AI-ready
              applications. From idea to launch in 14 days.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-5 text-text-primary">Quick Links</h3>
            <ul className="space-y-3">
              {navLinks.map(item => (
                <li key={item.name}>
                  <a 
                    href={item.href} 
                    className="text-text-primary hover:text-primary transition-colors duration-300"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-5 text-text-primary">Contact</h3>
            <ul className="space-y-3">
              <li>
                <a 
                  href="mailto:hello@builtit.dev" 
                  className="text-text-primary hover:text-primary transition-colors duration-300"
                >
                  hello@builtit.dev
                </a>
              </li>
              <li className="text-text-secondary">San Francisco, CA</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border mt-10 pt-8 text-text-secondary text-sm">
          <p>© {currentYear} BuiltIt.dev. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}