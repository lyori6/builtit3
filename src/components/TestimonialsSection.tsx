import React from 'react';
import { QuoteIcon } from 'lucide-react';
interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
}
function TestimonialCard({
  quote,
  author,
  role
}: TestimonialCardProps) {
  return <div className="bg-[#1A1B20] rounded-xl p-8 border border-[#2A2B30] transition-all duration-300 hover:shadow-[0_0_25px_rgba(112,0,255,0.15)] hover:translate-y-[-2px]">
      <QuoteIcon size={24} className="text-[#7000FF] mb-4" />
      <p className="text-lg mb-6 font-normal leading-relaxed">{quote}</p>
      <div className="pt-4 border-t border-[#333333]">
        <p className="font-semibold text-[#E0E0E0]">{author}</p>
        <p className="text-[#A0A0A0] text-sm">{role}</p>
      </div>
    </div>;
}
export function TestimonialsSection() {
  const testimonials = [{
    quote: 'BuiltIt delivered our outstanding MVP in just 2 weeks, enabling us to secure first-round funding with the prototype.',
    author: 'Alex Chen',
    role: 'Founder, FindMe.pet'
  }, {
    quote: 'Working with BuiltIt was refreshing. Clear communication, fast development, and a product strategy that actually made sense for our early-stage startup.',
    author: 'Sarah Johnson',
    role: 'CEO, Debt Cat'
  }, {
    quote: 'The speed at which BuiltIt works is incredible. We went from idea to a working AI prototype that we could demo to investors in less than 3 weeks.',
    author: 'Michael Rodriguez',
    role: 'CTO, TechFounders'
  }];
  return <section id="testimonials" className="py-20 px-4 bg-[#0D0E11]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          What Our Clients Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => <TestimonialCard key={index} quote={testimonial.quote} author={testimonial.author} role={testimonial.role} />)}
        </div>
      </div>
    </section>;
}