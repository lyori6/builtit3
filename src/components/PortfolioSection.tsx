import React from 'react';
interface PortfolioCardProps {
  title: string;
  description: string;
  comingSoon?: boolean;
  image?: string;
}
function PortfolioCard({
  title,
  description,
  comingSoon = false,
  image
}: PortfolioCardProps) {
  return <div className="bg-[#1A1B20] rounded-xl overflow-hidden border border-[#2A2B30] transition-all duration-300 hover:shadow-[0_0_20px_5px_rgba(112,0,255,0.1)] hover:translate-y-[-2px]">
      <div className="h-48 bg-[#25262c] relative overflow-hidden group">
        {image && <img src={image} alt={title} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />}
        {comingSoon && <div className="absolute top-4 right-4 bg-[#B2FF59] text-[#0D0E11] text-xs font-bold px-3 py-1 rounded-full">
            Coming Soon
          </div>}
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-[#A0A0A0] text-sm font-normal leading-relaxed">
          {description}
        </p>
      </div>
    </div>;
}
export function PortfolioSection() {
  const portfolioItems = [{
    title: 'Debt Cat - AI Dispute Platform',
    description: 'First users in 3 weeks.',
    image: "/cs3.png"
  }, {
    title: 'FindMe.pet - Matching Algorithm',
    description: 'MVP in 2 weeks.'
  }, {
    title: 'AI Compliance Checker',
    description: 'AI Tool',
    comingSoon: true
  }];
  return <section id="portfolio" className="py-20 px-4 bg-[#0D0E11]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Proof We Ship Fast
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item, index) => <PortfolioCard key={index} title={item.title} description={item.description} comingSoon={item.comingSoon} image={item.image} />)}
        </div>
      </div>
    </section>;
}