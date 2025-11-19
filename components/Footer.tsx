import React from 'react';
import { Zap, Twitter, Instagram, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-[#050505] border-t border-brand-border pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-brand-green rounded-lg flex items-center justify-center">
                <Zap className="text-black h-5 w-5" />
              </div>
              <span className="font-bold text-xl tracking-tight text-white">{t.nav.brand}</span>
            </div>
            <p className="text-gray-500 text-sm max-w-md mb-6">
              {t.footer.desc}
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-500 hover:text-white transition-colors"><Twitter className="w-5 h-5" /></a>
              <a href="#" className="text-gray-500 hover:text-white transition-colors"><Instagram className="w-5 h-5" /></a>
              <a href="#" className="text-gray-500 hover:text-white transition-colors"><Linkedin className="w-5 h-5" /></a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">{t.footer.program}</h4>
            <ul className="space-y-4 text-sm text-gray-500">
              <li><a href="#features" className="hover:text-brand-green transition-colors">{t.footer.links.howItWorks}</a></li>
              <li><a href="#pricing" className="hover:text-brand-green transition-colors">{t.footer.links.coaching}</a></li>
              <li><a href="#testimonials" className="hover:text-brand-green transition-colors">{t.footer.links.success}</a></li>
              <li><Link to="/booking" className="hover:text-brand-green transition-colors">{t.nav.apply}</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">{t.footer.legal}</h4>
            <ul className="space-y-4 text-sm text-gray-500">
              <li><a href="#" className="hover:text-brand-green transition-colors">{t.footer.links.terms}</a></li>
              <li><a href="#" className="hover:text-brand-green transition-colors">{t.footer.links.privacy}</a></li>
              <li><a href="#" className="hover:text-brand-green transition-colors">{t.footer.links.support}</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-brand-border pt-8 text-center">
          <p className="text-gray-600 text-xs">
            &copy; {new Date().getFullYear()} Yididya Fantahu. {t.footer.rights}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;