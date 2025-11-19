import React, { useState } from 'react';
import { FAQ_ITEMS } from '../constants';
import { Plus, Minus } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 bg-brand-dark">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Frequently Asked Questions</h2>
          <p className="text-gray-400">Have more questions? Email us at support@swingtradinglab.com</p>
        </div>

        <div className="space-y-4">
          {FAQ_ITEMS.map((item, index) => (
            <div 
              key={index} 
              className="border border-brand-border rounded-xl overflow-hidden bg-brand-card hover:border-gray-700 transition-colors"
            >
              <button
                className="w-full flex justify-between items-center p-6 text-left"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="text-white font-medium pr-8">{item.question}</span>
                {openIndex === index ? (
                  <Minus className="w-5 h-5 text-brand-green shrink-0" />
                ) : (
                  <Plus className="w-5 h-5 text-gray-500 shrink-0" />
                )}
              </button>
              
              <div 
                className={`px-6 text-gray-400 overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-48 pb-6 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                {item.answer}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;