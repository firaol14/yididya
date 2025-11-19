import React from 'react';
import { PRICING_FEATURES } from '../constants';
import { CheckCircle2, ArrowRight, ShieldCheck, Lock, CreditCard, Wallet, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const Pricing = () => {
  return (
    <section id="pricing" className="py-16 md:py-24 relative overflow-hidden bg-brand-dark">
      {/* Decorative background elements */}
      <div className="absolute bottom-0 left-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-brand-green/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-10 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 md:mb-6">Invest In Your Future</h2>
          <p className="text-lg md:text-xl text-gray-400">You are investing in a system that will save you years of wasted time.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12 md:mb-16 items-stretch">
            {/* Group Membership - Closed */}
            <div className="bg-[#0F0F0F] border border-brand-border rounded-3xl overflow-hidden opacity-60 relative flex flex-col grayscale-[0.5] hover:grayscale-0 transition-all duration-500 order-2 md:order-1">
                <div className="p-6 md:p-8 flex-grow">
                    <div className="flex justify-between items-start mb-6">
                        <div>
                            <h3 className="text-xl md:text-2xl font-bold text-white">Group Membership</h3>
                            <p className="text-gray-500 mt-1 text-sm">Community support</p>
                        </div>
                        <div className="bg-red-500/10 text-red-500 px-3 py-1 rounded-full text-[10px] md:text-xs font-bold tracking-wide uppercase border border-red-500/20">
                            Closed
                        </div>
                    </div>
                     <div className="flex items-end gap-2 mb-6 md:mb-8">
                        <span className="text-3xl md:text-4xl font-extrabold text-white">Waitlist</span>
                    </div>
                    <button disabled className="w-full bg-brand-border/50 text-gray-500 cursor-not-allowed font-bold py-3 md:py-4 rounded-xl mb-6 md:mb-8 flex items-center justify-center gap-2 text-sm md:text-base">
                        <Lock className="w-4 h-4" />
                        Currently Unavailable
                    </button>
                    <ul className="space-y-4 opacity-50">
                        <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-gray-600"/> <span className="text-gray-500 text-sm">2 sessions per week</span></li>
                        <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-gray-600"/> <span className="text-gray-500 text-sm">Group discussion</span></li>
                        <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-gray-600"/> <span className="text-gray-500 text-sm">Weekly challenges</span></li>
                    </ul>
                </div>
            </div>

            {/* 1:1 Coaching - Active */}
            <div className="bg-[#0F0F0F] border-2 border-brand-green rounded-3xl overflow-hidden shadow-[0_0_40px_rgba(0,200,5,0.15)] relative flex flex-col transform md:-translate-y-4 order-1 md:order-2">
            
            <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-brand-green text-black font-bold px-4 py-1 rounded-b-lg text-[10px] md:text-xs uppercase tracking-wider z-20 shadow-lg whitespace-nowrap">
                Most Popular Choice
            </div>

            <div className="p-6 sm:p-10 flex-grow relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-start mb-6 md:mb-8 gap-2 md:gap-0 mt-4 md:mt-0">
                    <div>
                        <h3 className="text-2xl md:text-3xl font-bold text-white">1-on-1 Coaching</h3>
                        <p className="text-brand-green mt-1 font-medium text-sm md:text-base">Deep & targeted transformation.</p>
                    </div>
                    <div className="bg-brand-green/10 text-brand-green px-3 py-1 rounded-full text-[10px] md:text-xs font-bold tracking-wide uppercase border border-brand-green/20 flex items-center gap-1 self-start md:self-auto">
                        <div className="w-2 h-2 bg-brand-green rounded-full animate-pulse"></div>
                        Spots Open
                    </div>
                </div>

                {/* Pricing Options Box */}
                <div className="mb-6 md:mb-8 bg-brand-card/50 rounded-xl border border-brand-border overflow-hidden">
                    <div className="p-4 border-b border-brand-border/50 bg-brand-green/5 relative">
                        <div className="absolute right-4 top-4">
                            <Star className="w-4 h-4 md:w-5 md:h-5 fill-brand-green text-brand-green" />
                        </div>
                         <div className="flex flex-col">
                             <span className="text-white font-bold text-base md:text-lg">Option A: Deposit</span>
                             <span className="text-[10px] md:text-xs text-brand-text mb-1 md:mb-2">Covers first 1.5 Months (50% of program)</span>
                             <span className="text-xl md:text-2xl font-bold text-brand-green">20,000 ETB</span>
                         </div>
                    </div>
                    <div className="p-4 bg-brand-card/30">
                         <div className="flex flex-col">
                             <span className="text-white font-bold text-base md:text-lg">Option B: Monthly</span>
                             <span className="text-[10px] md:text-xs text-brand-text mb-1 md:mb-2">Pay as you go</span>
                             <span className="text-xl md:text-2xl font-bold text-white">15,000 ETB<span className="text-sm font-normal text-gray-500">/mo</span></span>
                         </div>
                    </div>
                </div>

                <Link to="/booking" className="block w-full bg-brand-green text-black text-center font-bold py-3 md:py-4 rounded-xl hover:bg-green-400 transition-all hover:scale-[1.02] shadow-lg mb-6 md:mb-8 flex items-center justify-center gap-2 text-base md:text-lg">
                Apply For Coaching
                <ArrowRight className="w-5 h-5" />
                </Link>

                <div className="space-y-3 md:space-y-4">
                {PRICING_FEATURES.map((feature, i) => (
                    <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-brand-green shrink-0 mt-0.5" />
                    <span className="text-gray-300 text-sm font-medium">{feature}</span>
                    </div>
                ))}
                </div>
            </div>

            <div className="bg-[#121212] px-6 md:px-8 py-3 md:py-4 border-t border-brand-border flex items-center justify-center gap-2 text-center">
                <ShieldCheck className="w-4 h-4 text-gray-500 shrink-0" />
                <span className="text-[10px] md:text-xs text-gray-500 font-medium uppercase tracking-wide">3-Month Commitment Required</span>
            </div>
            </div>
        </div>

        <div className="max-w-2xl mx-auto text-center border-t border-brand-border pt-10 md:pt-12">
             <h4 className="text-gray-400 font-medium mb-4 md:mb-6 text-xs md:text-sm uppercase tracking-wider">Secure Payment Methods Accepted</h4>
             <div className="flex flex-col sm:flex-row justify-center items-center gap-3 md:gap-6">
                 <div className="w-full sm:w-auto flex items-center justify-center gap-3 px-6 py-3 bg-brand-card border border-brand-border hover:border-brand-green/30 transition-colors rounded-lg cursor-default">
                    <Wallet className="text-brand-green w-5 h-5 md:w-6 md:h-6" />
                    <div className="text-left">
                        <div className="text-white font-bold leading-none text-sm md:text-base">Telebirr</div>
                    </div>
                 </div>
                 <div className="w-full sm:w-auto flex items-center justify-center gap-3 px-6 py-3 bg-brand-card border border-brand-border hover:border-brand-green/30 transition-colors rounded-lg cursor-default">
                    <CreditCard className="text-brand-green w-5 h-5 md:w-6 md:h-6" />
                     <div className="text-left">
                        <div className="text-white font-bold leading-none text-sm md:text-base">Bank Transfer</div>
                    </div>
                 </div>
             </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;