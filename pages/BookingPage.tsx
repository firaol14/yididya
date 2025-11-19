import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CheckCircle, ArrowLeft, Loader2, AlertCircle } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const BookingPage = () => {
  const navigate = useNavigate();
  const { t } = useLanguage();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    struggle: '',
    plan: 'deposit' // default to deposit
  });

  // PASTE YOUR MAKE.COM OR ZAPIER WEBHOOK URL HERE
  // Example: 'https://hook.eu1.make.com/your-unique-id'
  const WEBHOOK_URL = 'REPLACE_WITH_YOUR_WEBHOOK_URL'; 

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    
    try {
      if (WEBHOOK_URL === 'REPLACE_WITH_YOUR_WEBHOOK_URL') {
        // Simulating success if no webhook is set yet, for demo purposes
        console.warn("No Webhook URL set. Simulating success.");
        await new Promise(resolve => setTimeout(resolve, 1500));
      } else {
        // Actual API Call
        const response = await fetch(WEBHOOK_URL, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            ...formData,
            submittedAt: new Date().toISOString(),
            source: 'Website Application'
          }),
        });

        if (!response.ok) {
          throw new Error('Failed to submit application');
        }
      }

      // Success
      navigate('/thank-you');
      window.scrollTo(0, 0);
    } catch (err) {
      console.error("Submission error:", err);
      setError("There was a problem submitting your application. Please check your connection and try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-brand-dark pt-20 pb-10 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-brand-green/5 blur-[100px] pointer-events-none"></div>

      <div className="max-w-2xl mx-auto relative z-10">
        <button 
          onClick={() => navigate('/')}
          className="flex items-center text-gray-400 hover:text-white mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          {t.booking.back}
        </button>

        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">{t.booking.title}</h1>
          <p className="text-gray-400">{t.booking.subtitle}</p>
        </div>

        <div className="bg-brand-card border border-brand-border rounded-2xl p-6 md:p-8 shadow-xl">
          {error && (
            <div className="mb-6 p-4 bg-red-500/10 border border-red-500/20 rounded-lg flex items-start gap-3 text-red-400">
              <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
              <p className="text-sm">{error}</p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                {t.booking.form.name}
              </label>
              <input
                type="text"
                id="name"
                required
                className="w-full bg-[#0A0A0A] border border-brand-border rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-green focus:ring-1 focus:ring-brand-green transition-colors"
                placeholder={t.booking.form.namePlaceholder}
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                {t.booking.form.email}
              </label>
              <input
                type="email"
                id="email"
                required
                className="w-full bg-[#0A0A0A] border border-brand-border rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-green focus:ring-1 focus:ring-brand-green transition-colors"
                placeholder={t.booking.form.emailPlaceholder}
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                {t.booking.form.phone}
              </label>
              <input
                type="tel"
                id="phone"
                required
                className="w-full bg-[#0A0A0A] border border-brand-border rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-green focus:ring-1 focus:ring-brand-green transition-colors"
                placeholder={t.booking.form.phonePlaceholder}
                value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
              />
            </div>

            <div>
              <label htmlFor="struggle" className="block text-sm font-medium text-gray-300 mb-2">
                {t.booking.form.struggle}
              </label>
              <textarea
                id="struggle"
                required
                rows={4}
                className="w-full bg-[#0A0A0A] border border-brand-border rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-green focus:ring-1 focus:ring-brand-green transition-colors resize-none"
                placeholder={t.booking.form.strugglePlaceholder}
                value={formData.struggle}
                onChange={(e) => setFormData({...formData, struggle: e.target.value})}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-3">
                {t.booking.form.paymentLabel}
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <label className={`cursor-pointer border rounded-xl p-4 flex items-center gap-3 transition-all ${formData.plan === 'deposit' ? 'bg-brand-green/10 border-brand-green' : 'bg-[#0A0A0A] border-brand-border hover:border-gray-600'}`}>
                  <input 
                    type="radio" 
                    name="plan" 
                    value="deposit" 
                    checked={formData.plan === 'deposit'} 
                    onChange={(e) => setFormData({...formData, plan: e.target.value})}
                    className="w-4 h-4 text-brand-green focus:ring-brand-green bg-transparent border-gray-500"
                  />
                  <div>
                    <div className="font-bold text-white text-sm">{t.pricing.soloCard.optionA.title}</div>
                    <div className="text-xs text-gray-400 mt-1">{t.pricing.soloCard.optionA.price}</div>
                  </div>
                </label>
                
                <label className={`cursor-pointer border rounded-xl p-4 flex items-center gap-3 transition-all ${formData.plan === 'monthly' ? 'bg-brand-green/10 border-brand-green' : 'bg-[#0A0A0A] border-brand-border hover:border-gray-600'}`}>
                  <input 
                    type="radio" 
                    name="plan" 
                    value="monthly" 
                    checked={formData.plan === 'monthly'} 
                    onChange={(e) => setFormData({...formData, plan: e.target.value})}
                    className="w-4 h-4 text-brand-green focus:ring-brand-green bg-transparent border-gray-500"
                  />
                   <div>
                    <div className="font-bold text-white text-sm">{t.pricing.soloCard.optionB.title}</div>
                    <div className="text-xs text-gray-400 mt-1">{t.pricing.soloCard.optionB.price} {t.pricing.soloCard.optionB.perMonth}</div>
                  </div>
                </label>
              </div>
            </div>

            <div className="pt-4">
              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-brand-green text-black font-bold py-4 rounded-xl hover:bg-green-400 transition-all transform hover:scale-[1.02] shadow-lg flex items-center justify-center disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                    {t.booking.form.processing}
                  </>
                ) : (
                  <>
                    {t.booking.form.submit}
                    <CheckCircle className="w-5 h-5 ml-2" />
                  </>
                )}
              </button>
              <p className="text-center text-xs text-gray-500 mt-4">
                {t.booking.form.disclaimer}
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingPage;