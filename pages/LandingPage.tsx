import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import PainPoints from '../components/Features';
import Roadmap from '../components/Roadmap';
import ProgramIncludes from '../components/ProgramIncludes';
import Testimonials from '../components/Testimonials';
import Pricing from '../components/Pricing';
import CallToAction from '../components/CallToAction';
import FAQ from '../components/FAQ';

const LandingPage = () => {
  return (
    <div className="animate-[fadeIn_0.5s_ease-in-out]">
      <Hero />
      <PainPoints />
      <About />
      <Roadmap />
      <ProgramIncludes />
      <Testimonials />
      <Pricing />
      <CallToAction />
      <FAQ />
    </div>
  );
};

export default LandingPage;