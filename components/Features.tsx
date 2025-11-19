import React from 'react';
import { XCircle, Clock, Target, Zap } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const PainPoints = () => {
  const { t } = useLanguage();

  // Map icons to the translated array indices
  const icons = [Clock, XCircle, Zap, Target];

  return (
    <section id="features" className="py-12 md:py-24 bg-brand-dark relative border-t border-brand-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 md:mb-6">{t.painPoints.title}</h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-base md:text-lg">
            {t.painPoints.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {t.painPoints.cards.map((point, index) => {
            const Icon = icons[index];
            return (
              <div 
                key={index} 
                className="p-5 md:p-8 rounded-2xl bg-[#080808] border border-brand-border hover:border-red-500/40 transition-all duration-300 group relative overflow-hidden hover:-translate-y-1"
              >
                <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                    <Icon className="w-20 h-20 md:w-32 md:h-32 text-red-500" />
                </div>
                <div className="relative z-10">
                    <div className="w-12 h-12 md:w-14 md:h-14 bg-red-500/5 rounded-xl flex items-center justify-center mb-4 md:mb-6 group-hover:bg-red-500/10 transition-colors border border-red-500/10 group-hover:border-red-500/20">
                        <Icon className="w-6 h-6 md:w-7 md:h-7 text-red-500" />
                    </div>
                    <h3 className="text-lg md:text-xl font-bold text-white mb-2 md:mb-3 group-hover:text-red-400 transition-colors">{point.title}</h3>
                    <p className="text-sm md:text-base text-gray-400 leading-relaxed">
                    {point.description}
                    </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 md:mt-20 text-center relative">
             <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand-border to-transparent"></div>
             <div className="relative z-10 bg-brand-dark inline-block px-4 md:px-8">
                <p className="text-lg md:text-2xl text-white font-medium">
                    {t.painPoints.summaryStart} <br className="md:hidden" />
                    <span className="text-brand-green font-bold block md:inline mt-1 md:mt-0">{t.painPoints.summaryEnd}</span>
                </p>
             </div>
        </div>
      </div>
    </section>
  );
};

export default PainPoints;