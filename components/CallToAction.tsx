import React from 'react';
import { ArrowRight, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

const CallToAction = () => {
  const { t } = useLanguage();

  return (
    <section className="py-16 md:py-20 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-brand-green/10"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-brand-dark via-transparent to-brand-dark"></div>
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="bg-[#0A0A0A] border border-brand-green/30 rounded-3xl p-8 md:p-16 relative overflow-hidden shadow-[0_0_50px_rgba(0,200,5,0.1)]">
          
          {/* Decorative circle */}
          <div className="absolute top-0 right-0 w-32 h-32 md:w-64 md:h-64 bg-brand-green/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>

          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 md:mb-6 leading-tight">
            {t.cta.titleStart} <br className="hidden md:block" />
            <span className="text-brand-green block md:inline mt-2 md:mt-0">{t.cta.titleHighlight}</span>
          </h2>

          <p className="text-base md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            {t.cta.desc}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link 
              to="/booking" 
              className="w-full sm:w-auto px-8 md:px-10 py-4 bg-brand-green text-black font-bold text-lg rounded-xl hover:bg-green-400 transition-all transform hover:scale-105 shadow-lg flex items-center justify-center gap-2"
            >
              {t.cta.buttonPrimary}
              <ArrowRight className="w-5 h-5" />
            </Link>
            <a 
              href="#about" 
              className="w-full sm:w-auto px-8 md:px-10 py-4 bg-white/5 text-white border border-white/10 font-bold text-lg rounded-xl hover:bg-white/10 transition-all flex items-center justify-center gap-2"
            >
              {t.cta.buttonSecondary}
            </a>
          </div>

          <div className="mt-8 flex items-center justify-center gap-2 text-xs md:text-sm text-gray-500">
            <Clock className="w-4 h-4" />
            <span>{t.cta.note}</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;