import React from 'react';
import { PlayCircle, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative pt-28 pb-24 md:pt-40 md:pb-32 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 grid-bg opacity-20"></div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-brand-green/10 rounded-full blur-[120px] opacity-40 animate-pulse-slow"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <div className="inline-flex items-center space-x-2 bg-brand-card border border-brand-border/60 rounded-full px-4 py-1.5 mb-6 md:mb-8 hover:border-brand-green/50 transition-colors cursor-default backdrop-blur-sm">
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-green opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-green"></span>
          </span>
          <span className="text-[10px] sm:text-xs font-semibold text-gray-300 uppercase tracking-wider">
            Accepting Applicants for 1:1 Coaching
          </span>
        </div>

        {/* Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight text-white mb-6 md:mb-8 leading-[1.1] px-2">
          Stop Procrastinating. <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-green via-green-400 to-emerald-500">
            Start Achieving.
          </span>
        </h1>

        {/* Subheadline */}
        <p className="mt-4 md:mt-6 max-w-2xl mx-auto text-lg md:text-2xl text-gray-300 mb-10 leading-relaxed font-light px-4">
          The 3-Month System to Master Your Productivity and{' '}
          <span className="text-white font-semibold border-b-2 border-brand-green/30">
            Build a Life You're Proud Of.
          </span>
        </p>

        {/* Video Embed */}
        <div className="relative w-full max-w-3xl mx-auto aspect-video mb-12 rounded-2xl overflow-hidden border border-brand-border/50 shadow-[0_0_40px_rgba(0,200,5,0.15)] group">
          <div className="absolute inset-0 bg-brand-green/5 group-hover:bg-transparent transition-colors pointer-events-none z-10"></div>
          <iframe 
            className="absolute top-0 left-0 w-full h-full"
            src="https://www.youtube.com/embed/6_nJLK3PyP0?autoplay=1&mute=1&loop=1&playlist=6_nJLK3PyP0&controls=0&rel=0&modestbranding=1&playsinline=1&iv_load_policy=3" 
            title="YouTube video player" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            referrerPolicy="strict-origin-when-cross-origin" 
            allowFullScreen
          ></iframe>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-16 md:mb-20 px-4 md:px-0">
          <Link
            to="/booking"
            className="w-full sm:w-auto px-8 py-4 bg-brand-green text-black font-bold rounded-xl hover:bg-green-400 transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(0,200,5,0.2)] hover:shadow-[0_0_30px_rgba(0,200,5,0.4)] flex items-center justify-center space-x-2 text-base md:text-lg"
          >
            <span>Start Your Transformation</span>
            <ChevronRight className="h-5 w-5" />
          </Link>

          <a
            href="#features"
            className="w-full sm:w-auto px-8 py-4 bg-white/5 text-white border border-white/10 font-semibold rounded-xl hover:bg-white/10 transition-all flex items-center justify-center space-x-2 backdrop-blur-sm text-base md:text-lg"
          >
            <PlayCircle className="h-5 w-5" />
            <span>Is This For You?</span>
          </a>
        </div>
      </div>

      {/* Infinite Scroll Pillars (Full Width) */}
      <div className="absolute bottom-0 left-0 w-full border-t border-white/5 bg-black/20 backdrop-blur-sm py-5 overflow-hidden">
        <div className="flex whitespace-nowrap animate-scroll w-max hover:pause">
            {/* Content Repeated for Loop */}
            {[...Array(4)].map((_, i) => (
                <div key={i} className="flex items-center gap-16 md:gap-32 px-8 text-gray-600 uppercase tracking-[0.3em] text-xs md:text-sm font-bold shrink-0 select-none">
                  <span>Discipline</span>
                  <span>Consistency</span>
                  <span>Growth</span>
                  <span>Focus</span>
                </div>
            ))}
        </div>
        {/* Gradient Masks */}
        <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-[#050505] to-transparent z-10 pointer-events-none"></div>
        <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-[#050505] to-transparent z-10 pointer-events-none"></div>
      </div>
    </section>
  );
};

export default Hero;