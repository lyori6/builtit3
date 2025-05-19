import React from 'react';
import { HelpCircleIcon, TimerIcon, BrainIcon, ArrowRightIcon } from 'lucide-react';
interface CompactFeatureProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  highlighted?: boolean;
}
function CompactFeature({
  title,
  description,
  icon,
  highlighted = false
}: CompactFeatureProps) {
  return <div className={`
        bg-[#11131f] rounded-xl p-4 transition-all duration-300 relative group cursor-pointer
        hover:shadow-[0_4px_24px_rgba(0,0,0,0.35)] hover:translate-y-[-2px]
        ${highlighted ? 'border border-[#c6ff00]/30' : 'border border-[#2A2B30]'}
      `}>
      <div className="flex items-center gap-3">
        <div className="h-8 w-8 rounded-full bg-[#0b0d1a] flex items-center justify-center">
          <div className="text-[#a259ff]">{icon}</div>
        </div>
        <h3 className="text-sm font-medium tracking-tight">{title}</h3>
        <ArrowRightIcon size={16} className="ml-auto text-[#a259ff] opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>
      {/* Tooltip on hover */}
      <div className="absolute opacity-0 group-hover:opacity-100 bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-2 bg-[#0b0d1a] text-[#e5e7eb] text-xs rounded-md shadow-lg pointer-events-none transition-opacity duration-300 w-48 z-10">
        {description}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 rotate-45 w-2 h-2 bg-[#0b0d1a]"></div>
      </div>
    </div>;
}
export function FeatureSection() {
  const features = [{
    title: 'No Single Owner',
    description: 'Hand-offs slow decisions when there is no clear product owner.',
    icon: <div size={16} />
  }, {
    title: 'Unclear Scope',
    description: 'Undefined requirements lead to endless revisions and delays.',
    icon: <HelpCircleIcon size={16} />
  }, {
    title: 'Slow Development',
    description: 'Traditional development cycles miss market opportunities.',
    icon: <TimerIcon size={16} />
  }, {
    title: 'Weak Strategy',
    description: 'Building features without validated product-market fit.',
    icon: <BrainIcon size={16} />,
    highlighted: true
  }];
  return <section className="relative py-20 px-4 bg-[#0b0d1a] overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#a259ff]/5 to-transparent animate-bg-pan"></div>
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center tracking-tight">
          Why Most Builds Stall
        </h2>
        {/* Horizontal scroll on mobile, grid on desktop */}
        <div className="flex overflow-x-auto gap-4 pb-4 lg:grid lg:grid-cols-4 lg:gap-6 snap-x snap-mandatory">
          {features.map((feature, index) => <div key={index} className="snap-center min-w-[200px] lg:min-w-0">
              <CompactFeature title={feature.title} description={feature.description} icon={feature.icon} highlighted={feature.highlighted} />
            </div>)}
        </div>
      </div>
    </section>;
}