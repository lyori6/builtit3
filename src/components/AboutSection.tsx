import React from 'react';
export function AboutSection() {
  return <section id="about" className="py-20 px-4 bg-[#0D0E11]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Meet the Founder
        </h2>
        <div className="flex flex-col md:flex-row gap-10 items-center md:items-start">
          {/* Profile Image */}
          <div className="flex-shrink-0">
            <div className="w-40 h-40 md:w-48 md:h-48 rounded-full bg-[#1A1B20] overflow-hidden border-2 border-[#7000FF]/30">
              {/* This is a placeholder for the founder's image */}
              <div className="w-full h-full bg-gradient-to-br from-[#1A1B20] to-[#2A2B30] flex items-center justify-center text-[#7000FF]">
                <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
              </div>
            </div>
          </div>
          {/* Bio Content */}
          <div className="flex-grow">
            <h3 className="text-2xl font-semibold mb-2 text-center md:text-left">
              Lyor Itzhaki
            </h3>
            <p className="text-[#7000FF] mb-4 text-center md:text-left">
              Founder, Product & Tech Lead
            </p>
            <p className="text-[#A0A0A0] leading-relaxed">
              With over 6 years in SaaS product management and a passion for
              building impactful technology, I founded BuiltIt to help
              innovators like you turn bold ideas into market-ready realities.
              We bridge the gap between strategy and execution, delivering
              high-quality MVPs with speed and precision.
            </p>
          </div>
        </div>
      </div>
    </section>;
}