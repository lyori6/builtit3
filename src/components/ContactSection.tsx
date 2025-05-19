import React from 'react';
import { Button } from './Button';
export function ContactSection() {
  return <section id="contact" className="py-24 px-4 bg-[#0D0E11] relative overflow-hidden">
      {/* Background gradient effect - enhanced with purple dominance */}
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[#7000FF]/8 rounded-full blur-[150px] -z-10"></div>
      <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-[#7000FF]/5 rounded-full blur-[120px] -z-10"></div>
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
          Ready to Build Your MVP?
        </h2>
        <p className="text-lg text-[#A0A0A0] mb-10 font-medium leading-relaxed">
          Let's discuss your idea and how BuiltIt can help you launch faster.
        </p>
        <div className="flex flex-col items-center gap-6">
          <Button>Book Free Strategy Call</Button>
          <div className="flex items-center gap-2 text-[#A0A0A0] font-normal">
            Or email us:{' '}
            <a href="mailto:hello@builtit.dev" className="text-[#B2FF59] hover:underline">
              hello@builtit.dev
            </a>
          </div>
        </div>
      </div>
    </section>;
}