import React from 'react';
import { TESTIMONIALS } from '../constants';
import { Star, Quote, BadgeCheck } from 'lucide-react';

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-16 md:py-24 bg-[#080808] relative overflow-hidden">
       <div className="absolute top-0 right-0 w-full h-px bg-gradient-to-r from-transparent via-brand-border to-transparent"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Success Stories</h2>
            <p className="text-brand-text max-w-xl mx-auto text-sm md:text-base">
              Real people experiencing real change. This is about taking control of your future.
            </p>
        </div>

        {/* Feature Layout for the primary testimonial */}
        <div className="max-w-4xl mx-auto">
          {TESTIMONIALS.map((t, i) => (
            <div key={i} className="bg-gradient-to-br from-brand-card to-[#0F0F0F] p-6 md:p-12 rounded-3xl border border-brand-border relative shadow-2xl">
               
               {/* Large Quote Icon */}
               <div className="absolute -top-4 -left-2 md:-top-6 md:-left-8 bg-brand-green text-black p-3 md:p-4 rounded-xl rotate-3 shadow-lg z-10">
                    <Quote className="w-5 h-5 md:w-8 md:h-8 fill-current" />
               </div>

              <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-start">
                  {/* Avatar Column */}
                  <div className="flex-shrink-0 mx-auto md:mx-0 text-center md:text-left w-full md:w-auto flex flex-col items-center md:items-start">
                      <div className="w-20 h-20 md:w-32 md:h-32 rounded-full p-1 bg-gradient-to-br from-brand-green to-transparent mb-3 md:mb-4">
                        <img src={t.avatar} alt={t.name} className="w-full h-full rounded-full object-cover border-4 border-brand-card" />
                      </div>
                      <h4 className="text-white font-bold text-lg md:text-xl">{t.name}</h4>
                      <div className="flex items-center justify-center md:justify-start gap-1 text-brand-green mt-1">
                          <BadgeCheck className="w-3 h-3 md:w-4 md:h-4" />
                          <span className="text-xs md:text-sm font-medium">{t.role}</span>
                      </div>
                  </div>

                  {/* Content Column */}
                  <div className="flex-1 text-center md:text-left">
                        <div className="flex text-brand-green mb-4 justify-center md:justify-start">
                            {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 md:w-5 md:h-5 fill-current" />)}
                        </div>
                        <blockquote className="text-gray-300 text-base md:text-xl leading-relaxed italic relative z-10">
                            "{t.content}"
                        </blockquote>
                  </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;