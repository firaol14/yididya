import React, { useState } from 'react';
import { Menu, X, Zap } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  // Function to handle hash navigation if not on home page
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    if (!isHome) {
      // If not home, let the Link component handle navigation to "/"
      // The hash will be appended to the URL
      return;
    }
    // If home, smooth scroll
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <nav className="fixed w-full z-50 bg-brand-dark/80 backdrop-blur-lg border-b border-brand-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2 group">
              <div className="w-8 h-8 bg-brand-green rounded-lg flex items-center justify-center group-hover:scale-105 transition-transform">
                <Zap className="text-black h-5 w-5" />
              </div>
              <span className="font-bold text-xl tracking-tight text-white">Yididya Coaching</span>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            {isHome && (
              <>
                <a href="#features" onClick={(e) => handleNavClick(e, 'features')} className="text-brand-text hover:text-white transition-colors text-sm font-medium">Program</a>
                <a href="#testimonials" onClick={(e) => handleNavClick(e, 'testimonials')} className="text-brand-text hover:text-white transition-colors text-sm font-medium">Stories</a>
                <a href="#pricing" onClick={(e) => handleNavClick(e, 'pricing')} className="text-brand-text hover:text-white transition-colors text-sm font-medium">Pricing</a>
                <a href="#faq" onClick={(e) => handleNavClick(e, 'faq')} className="text-brand-text hover:text-white transition-colors text-sm font-medium">FAQ</a>
              </>
            )}
            <Link 
              to="/booking" 
              className="bg-white text-black hover:bg-gray-200 px-5 py-2 rounded-full font-semibold text-sm transition-all transform hover:scale-105"
            >
              Apply Now
            </Link>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-300 hover:text-white p-2">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-[#050505] border-b border-brand-border absolute w-full left-0 top-16 shadow-2xl">
          <div className="px-4 pt-2 pb-6 space-y-2">
            {isHome ? (
              <>
                <a href="#features" onClick={(e) => handleNavClick(e, 'features')} className="block px-3 py-3 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-brand-border/50 transition-colors">Program</a>
                <a href="#testimonials" onClick={(e) => handleNavClick(e, 'testimonials')} className="block px-3 py-3 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-brand-border/50 transition-colors">Stories</a>
                <a href="#pricing" onClick={(e) => handleNavClick(e, 'pricing')} className="block px-3 py-3 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-brand-border/50 transition-colors">Pricing</a>
                <a href="#faq" onClick={(e) => handleNavClick(e, 'faq')} className="block px-3 py-3 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-brand-border/50 transition-colors">FAQ</a>
              </>
            ) : (
               <Link to="/" onClick={() => setIsOpen(false)} className="block px-3 py-3 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-brand-border/50 transition-colors">Back to Home</Link>
            )}
            <div className="pt-4 pb-2">
              <Link to="/booking" onClick={() => setIsOpen(false)} className="block w-full text-center bg-brand-green text-black font-bold px-4 py-3 rounded-lg hover:bg-green-500 transition-colors shadow-lg">
                Apply Now
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;