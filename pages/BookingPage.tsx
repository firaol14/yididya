import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CheckCircle, ArrowLeft, Loader2 } from 'lucide-react';

const BookingPage = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    struggle: '',
    plan: 'deposit' // default to deposit
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      navigate('/thank-you');
      window.scrollTo(0, 0);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-brand-dark pt-24 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-brand-green/5 blur-[100px] pointer-events-none"></div>

      <div className="max-w-2xl mx-auto relative z-10">
        <button 
          onClick={() => navigate('/')}
          className="flex items-center text-gray-400 hover:text-white mb-8 transition-colors text-sm"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Home
        </button>

        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Secure Your Spot</h1>
          <p className="text-gray-400">
            Complete the application below to join the 3-Month Productivity Coaching Program.
          </p>
        </div>

        <div className="bg-brand-card border border-brand-border rounded-2xl p-6 md:p-8 shadow-2xl">
          <form onSubmit={handleSubmit} className="space-y-6">
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="name" className="block text-sm font-medium text-gray-300">Full Name</label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full bg-[#0A0A0A] border border-brand-border rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-brand-green focus:border-transparent outline-none transition-all"
                  placeholder="Enter your full name"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="phone" className="block text-sm font-medium text-gray-300">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  className="w-full bg-[#0A0A0A] border border-brand-border rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-brand-green focus:border-transparent outline-none transition-all"
                  placeholder="09..."
                />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm font-medium text-gray-300">Email Address</label>
              <input
                type="email"
                id="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                className="w-full bg-[#0A0A0A] border border-brand-border rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-brand-green focus:border-transparent outline-none transition-all"
                placeholder="you@example.com"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="struggle" className="block text-sm font-medium text-gray-300">What is your biggest productivity struggle?</label>
              <textarea
                id="struggle"
                required
                rows={4}
                value={formData.struggle}
                onChange={(e) => setFormData({...formData, struggle: e.target.value})}
                className="w-full bg-[#0A0A0A] border border-brand-border rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-brand-green focus:border-transparent outline-none transition-all resize-none"
                placeholder="E.g., I procrastinate until the deadline, I can't stick to a routine..."
              />
            </div>

            <div className="space-y-4 pt-4">
              <label className="block text-sm font-medium text-gray-300">Select Payment Plan</label>
              
              <div className="grid grid-cols-1 gap-4">
                <label 
                  className={`relative flex items-center p-4 border rounded-xl cursor-pointer transition-all ${
                    formData.plan === 'deposit' 
                    ? 'border-brand-green bg-brand-green/5 ring-1 ring-brand-green' 
                    : 'border-brand-border bg-[#0A0A0A] hover:border-gray-600'
                  }`}
                >
                  <input 
                    type="radio" 
                    name="plan" 
                    value="deposit" 
                    checked={formData.plan === 'deposit'}
                    onChange={(e) => setFormData({...formData, plan: e.target.value})}
                    className="sr-only"
                  />
                  <div className="flex-1">
                    <div className="flex justify-between items-center mb-1">
                      <span className="font-bold text-white">Option A: Deposit</span>
                      <span className="text-brand-green font-bold">20,000 ETB</span>
                    </div>
                    <p className="text-sm text-gray-400">Covers first 1.5 Months (Recommended)</p>
                  </div>
                  {formData.plan === 'deposit' && <CheckCircle className="w-5 h-5 text-brand-green ml-4" />}
                </label>

                <label 
                  className={`relative flex items-center p-4 border rounded-xl cursor-pointer transition-all ${
                    formData.plan === 'monthly' 
                    ? 'border-brand-green bg-brand-green/5 ring-1 ring-brand-green' 
                    : 'border-brand-border bg-[#0A0A0A] hover:border-gray-600'
                  }`}
                >
                  <input 
                    type="radio" 
                    name="plan" 
                    value="monthly" 
                    checked={formData.plan === 'monthly'}
                    onChange={(e) => setFormData({...formData, plan: e.target.value})}
                    className="sr-only"
                  />
                  <div className="flex-1">
                    <div className="flex justify-between items-center mb-1">
                      <span className="font-bold text-white">Option B: Monthly</span>
                      <span className="text-white font-bold">15,000 ETB<span className="text-xs text-gray-500 font-normal">/mo</span></span>
                    </div>
                    <p className="text-sm text-gray-400">Pay as you go</p>
                  </div>
                  {formData.plan === 'monthly' && <CheckCircle className="w-5 h-5 text-brand-green ml-4" />}
                </label>
              </div>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-brand-green text-black font-bold text-lg py-4 rounded-xl hover:bg-green-400 transition-all transform hover:scale-[1.02] shadow-lg flex items-center justify-center disabled:opacity-70 disabled:cursor-not-allowed mt-8"
            >
              {isLoading ? (
                <>
                  <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                  Processing...
                </>
              ) : (
                "Submit Application"
              )}
            </button>
            
            <p className="text-xs text-center text-gray-500 mt-4">
              By submitting, you agree to commit to the 3-month program structure.
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingPage;