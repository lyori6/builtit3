import React from 'react';
export function WhatIsSection() {
  return <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center text-center">
          <div className="inline-block px-4 py-1.5 rounded-full bg-[#1A1B20] border border-[#7000FF]/40 shadow-[0_0_15px_rgba(112,0,255,0.15)] mb-6">
            <span className="text-sm font-medium">The BuiltIt Advantage</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ship Fast, Validate Ideas, Build with an Expert
          </h2>
          <p className="text-lg text-[#A0A0A0] max-w-2xl font-normal leading-relaxed">
            BuiltIt combines product leadership with rapid development to turn
            your vision into a market-ready app, efficiently and effectively.
          </p>
        </div>
      </div>
    </section>;
}