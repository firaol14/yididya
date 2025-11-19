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
          className="flex items-center text-gray-400 hover:text-white mb-8 transition-colors