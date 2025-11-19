import React from 'react';
import { User, Heart, Target } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const About = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-16 md:py-24 bg-[#050505] relative overflow-hidden border-b border-brand-border/30">
       <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-brand-green/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-8 md:mb-10">
            <div className="inline-flex items-center space-x-2 bg-brand-border/30 border border-brand-border rounded-full px-3 py-1 mb-4 md:mb-6">
                <User className="w-3 h-3 text-brand-green" />
                <span className="text-xs font-medium text-brand-green uppercase tracking-wider">{t.about.badge}</span>
            </div>
            
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 md:mb-6 leading-tight">
              {t.about.title}
            </h2>
          </div>

          <div className="bg-brand-card/30 border border-brand-border/50 rounded-2xl p-6 md:p-10 backdrop-blur-sm shadow-2xl">
            <div className="space-y-4 md:space-y-6 text-gray-300 text-base md:text-lg leading-relaxed">
              <p>
                {t.about.intro} <span className="text-white font-bold">{t.about.name}</span>.
              </p>
              <p>
                {t.about.p1}
              </p>
              <p>
                 {t.about.p2} <span className="text-brand-green underline decoration-brand-green/30 underline-offset-4 decoration-2">{t.about.p2Highlight}</span>.
              </p>
              <p className="font-medium text-white">
                {t.about.p3}
              </p>
            </div>

            <div className="mt-8 md:mt-10 pt-6 md:pt-8 border-t border-brand-border/50 flex flex-col sm:flex-row items-center justify-center gap-6 md:gap-8">
                <div className="flex items-center gap-4 w-full sm:w-auto bg-brand-card/50 p-3 rounded-xl sm:bg-transparent sm:p-0 border sm:border-0 border-brand-border/30">
                     <div className="bg-brand-green/10 p-3 rounded-full">
                        <Heart className="w-5 h-5 md:w-6 md:h-6 text-brand-green" />
                     </div>
                     <div>
                        <div className="text-white font-bold text-sm md:text-base">{t.about.badge1Title}</div>
                        <div className="text-xs text-gray-500">{t.about.badge1Desc}</div>
                     </div>
                </div>
                <div className="hidden sm:block h-8 w-px bg-brand-border"></div>
                <div className="flex items-center gap-4 w-full sm:w-auto bg-brand-card/50 p-3 rounded-xl sm:bg-transparent sm:p-0 border sm:border-0 border-brand-border/30">
                     <div className="bg-blue-500/10 p-3 rounded-full">
                        <Target className="w-5 h-5 md:w-6 md:h-6 text-blue-400" />
                     </div>
                     <div>
                        <div className="text-white font-bold text-sm md:text-base">{t.about.badge2Title}</div>
                        <div className="text-xs text-gray-500">{t.about.badge2Desc}</div>
                     </div>
                </div>
            </div>
          </div>
      </div>
    </section>
  );
};

export default About;