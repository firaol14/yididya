import React from 'react';
import { ROADMAP_STEPS } from '../constants';
import { ArrowDown } from 'lucide-react';

const Roadmap = () => {
  return (
    <section className="py-16 md:py-24 bg-brand-card relative overflow-hidden">
       <div className="absolute top-0 left-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-10 md:mb-16">
          <div className="inline-block px-4 py-1.5 rounded-full border border-brand-border bg-brand-dark mb-4">
            <span className="text-xs md:text-sm font-medium text-gray-300 uppercase tracking-wider">The Roadmap</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 md:mb-6">The 3-Month Transformation</h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm md:text-base">
            This is a structured system designed to help you become the most disciplined version of yourself.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 relative">
          {/* Connecting Line for Desktop */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-brand-border via-brand-green/50 to-brand-border -translate-y-1/2 z-0"></div>

          {ROADMAP_STEPS.map((step, index) => (
            <div key={index} className="relative z-10 group">
              <div className={`h-2 w-full bg-gradient-to-r ${step.color} rounded-t-xl opacity-70 group-hover:opacity-100 transition-opacity`}></div>
              <div className="bg-[#080808] border border-brand-border rounded-b-xl p-6 md:p-8 h-full hover:transform hover:-translate-y-2 transition-transform duration-300 shadow-lg">
                <div className="flex items-center justify-between mb-4 md:mb-6">
                    <span className={`text-xs md:text-sm font-bold uppercase tracking-wider bg-clip-text text-transparent bg-gradient-to-r ${step.color}`}>
                        {step.month}
                    </span>
                    <div className="w-8 h-8 rounded-full bg-brand-border/50 flex items-center justify-center text-white font-bold text-sm">
                        {index + 1}
                    </div>
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-white mb-3 md:mb-4">{step.title}</h3>
                <p className="text-gray-400 leading-relaxed text-sm">
                    {step.description}
                </p>
              </div>
              
              {/* Mobile Arrow */}
              {index < ROADMAP_STEPS.length - 1 && (
                <div className="md:hidden flex justify-center py-2">
                    <ArrowDown className="text-brand-border animate-bounce w-5 h-5" />
                </div>
              )}
            </div>
          ))}
        </div>
        
        <div className="mt-10 md:mt-16 text-center">
            <div className="inline-block p-6 bg-brand-dark/50 border border-brand-border rounded-xl backdrop-blur-sm mx-4 md:mx-0">
                <p className="text-white text-base md:text-lg">
                    By the end of Month 3, you will have a <span className="text-brand-green font-bold block md:inline">deep understanding of time management</span>, confidence, control, and momentum.
                </p>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Roadmap;