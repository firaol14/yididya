import React from 'react';
import { Calendar, Phone, Target, CheckCircle, Shield, BookOpen } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const ProgramIncludes = () => {
  const { t } = useLanguage();
  
  const icons = [Calendar, Phone, Target, CheckCircle, Shield, BookOpen];

  return (
    <section className="py-12 md:py-24 bg-[#050505] border-y border-brand-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{t.programIncludes.title}</h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            {t.programIncludes.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.programIncludes.items.map((item, index) => {
            const Icon = icons[index];
            return (
              <div key={index} className="flex items-start space-x-4 p-5 md:p-6 rounded-xl bg-brand-card border border-brand-border hover:border-brand-green/30 transition-colors">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-lg bg-brand-green/10 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-brand-green" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProgramIncludes;