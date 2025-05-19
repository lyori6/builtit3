import React from 'react';
interface SprintStepProps {
  step: string;
  title: string;
  description: string;
  isLeft: boolean;
}
function SprintStep({
  step,
  title,
  description,
  isLeft
}: SprintStepProps) {
  return <div className={`relative flex md:items-center mb-8 md:mb-0 ${isLeft ? 'md:justify-start' : 'md:justify-end'}`}>
      {/* Timeline dot */}
      <div className="absolute left-0 md:left-1/2 top-0 md:top-1/2 transform md:-translate-x-1/2 md:-translate-y-1/2 z-10">
        <div className="h-8 w-8 rounded-full bg-[#7000FF] flex items-center justify-center text-[#E0E0E0] font-bold text-sm">
          {step}
        </div>
      </div>
      {/* Content card */}
      <div className={`
          ml-12 md:ml-0 pl-4 md:pl-0 relative w-full md:w-[calc(50%-2rem)] 
          ${isLeft ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'}
        `}>
        <div className="bg-[#1A1B20] rounded-lg p-4 border border-[#2A2B30] shadow-lg">
          <h3 className="text-lg font-semibold mb-1">{title}</h3>
          <p className="text-[#A0A0A0] text-sm">{description}</p>
        </div>
        {/* Connecting line to timeline - visible only on desktop */}
        <div className={`
            hidden md:block absolute top-1/2 transform -translate-y-1/2 h-px bg-[#7000FF]/30 w-8
            ${isLeft ? 'right-0' : 'left-0'}
          `}></div>
      </div>
    </div>;
}
export function SprintSection() {
  const steps = [{
    step: '0',
    title: 'Discovery Call',
    description: 'Define vision, goals & requirements. 30-min focused chat.'
  }, {
    step: '1-2',
    title: 'Strategy & Design',
    description: "We'll define your MVP scope, create wireframes, and plan the technical architecture."
  }, {
    step: '3-8',
    title: 'Development Sprint',
    description: 'Rapid development with daily updates and continuous iteration based on your feedback.'
  }, {
    step: '9-12',
    title: 'Testing & Refinement',
    description: "We'll test, optimize, and prepare your MVP for launch with real users."
  }, {
    step: '14',
    title: 'Launch Day',
    description: 'Your MVP goes live with support for onboarding your first users and gathering feedback.'
  }];
  return <section className="py-20 px-4 bg-[#0D0E11]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          The BuiltIt Sprint: From Idea to Launch
        </h2>
        <div className="relative">
          {/* Central timeline - hidden on mobile */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-[#2D2D2D] transform -translate-x-1/2"></div>
          <div className="relative">
            {steps.map((step, index) => <SprintStep key={index} step={step.step} title={step.title} description={step.description} isLeft={index % 2 === 0} />)}
          </div>
        </div>
      </div>
    </section>;
}