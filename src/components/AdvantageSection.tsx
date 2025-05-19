import React from 'react';
import { BrainCircuitIcon, CodeIcon, SparklesIcon, MessageSquareIcon, UserIcon, MapPinIcon } from 'lucide-react';
interface AdvantageCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}
function AdvantageCard({
  title,
  description,
  icon
}: AdvantageCardProps) {
  return <div className="bg-[#1A1B20] rounded-xl p-6 border border-[#2A2B30] transition-all duration-300 hover:shadow-[0_0_20px_rgba(112,0,255,0.15)] hover:translate-y-[-2px]">
      <div className="h-10 w-10 rounded-lg bg-[#0D0E11] flex items-center justify-center mb-4 text-[#7000FF]">
        {icon}
      </div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-[#A0A0A0] text-sm font-normal leading-relaxed">
        {description}
      </p>
    </div>;
}
export function AdvantageSection() {
  const advantages = [{
    title: 'Expert Product Strategy',
    description: '6+ years SaaS PM experience',
    icon: <BrainCircuitIcon size={20} />
  }, {
    title: 'Rapid Next.js Development',
    description: 'Modern, scalable code',
    icon: <CodeIcon size={20} />
  }, {
    title: 'AI Integration Ready',
    description: 'Build intelligent MVPs',
    icon: <SparklesIcon size={20} />
  }, {
    title: 'Clear Communication',
    description: 'Daily Looms, no surprises',
    icon: <MessageSquareIcon size={20} />
  }, {
    title: 'Single Point of Contact',
    description: 'PM, UX, Dev in one',
    icon: <UserIcon size={20} />
  }, {
    title: 'Bay Area Based',
    description: 'Global reach, local expertise',
    icon: <MapPinIcon size={20} />
  }];
  return <section className="py-20 px-4 bg-[#0D0E11]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            The BuiltIt Advantage
          </h2>
          <p className="text-lg text-[#A0A0A0] max-w-2xl mx-auto font-medium leading-relaxed">
            Strategic product leadership combined with expert full-stack
            development.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {advantages.map((advantage, index) => <AdvantageCard key={index} title={advantage.title} description={advantage.description} icon={advantage.icon} />)}
        </div>
      </div>
    </section>;
}