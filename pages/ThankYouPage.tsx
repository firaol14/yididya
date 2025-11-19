import React from 'react';
import { useNavigate } from 'react-router-dom';
import { CheckCircle, Wallet, CreditCard, Home } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const ThankYouPage = () => {
  const navigate = useNavigate();
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-brand-dark flex items-center justify-center px-4 sm:px-6 lg:px-8 relative overflow-hidden">
       <div className="absolute inset-0 grid-bg opacity-10 pointer-events-none"></div>
       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-green/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-2xl w-full relative z-10 text-center">
        <div className="w-20 h-20 bg-brand-green/10 rounded-full flex items-center justify-center mx-auto mb-8 border border-brand-green/20">
          <CheckCircle className="w-10 h-10 text-brand-green" />
        </div>

        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">{t.thankYou.title}</h1>
        <p className="text-xl text-gray-300 mb-10 max-w-lg mx-auto leading-relaxed">
          {t.thankYou.subtitle}
        </p>

        <div className="bg-brand-card border border-brand-border rounded-2xl p-8 mb-10 text-left shadow-2xl">
          <h3 className="text-lg font-bold text-white mb-4 border-b border-brand-border pb-4">{t.thankYou.nextStepTitle}</h3>
          <p className="text-gray-400 mb-6 text-sm">
            {t.thankYou.nextStepDesc}
          </p>

          <div className="space-y-4">
            <div className="flex items-start space-x-4 p-4 bg-[#0A0A0A] rounded-xl border border-brand-border hover:border-brand-green/30 transition-colors">
              <div className="bg-brand-green/10 p-2 rounded-lg">
                <Wallet className="w-6 h-6 text-brand-green" />
              </div>
              <div>
                <div className="font-bold text-white mb-1">Telebirr</div>
                <div className="text-gray-400 font-mono text-sm tracking-wider">0912345678</div>
                <div className="text-xs text-gray-500 mt-1">Name: Yididya Fantahu</div>
              </div>
            </div>

            <div className="flex items-start space-x-4 p-4 bg-[#0A0A0A] rounded-xl border border-brand-border hover:border-brand-green/30 transition-colors">
              <div className="bg-brand-green/10 p-2 rounded-lg">
                <CreditCard className="w-6 h-6 text-brand-green" />
              </div>
              <div>
                <div className="font-bold text-white mb-1">Bank Transfer (CBE)</div>
                <div className="text-gray-400 font-mono text-sm tracking-wider">1000123456789</div>
                <div className="text-xs text-gray-500 mt-1">Name: Yididya Fantahu</div>
              </div>
            </div>
          </div>
          
           <div className="mt-6 p-4 bg-blue-500/5 border border-blue-500/10 rounded-xl">
              <p className="text-sm text-blue-200 text-center">
                 {t.thankYou.paymentNote}
              </p>
           </div>
        </div>

        <button 
          onClick={() => navigate('/')}
          className="inline-flex items-center justify-center px-8 py-3 border border-brand-border rounded-full text-white hover:bg-brand-card transition-colors font-medium"
        >
          <Home className="w-4 h-4 mr-2" />
          {t.thankYou.backButton}
        </button>
      </div>
    </div>
  );
};

export default ThankYouPage;