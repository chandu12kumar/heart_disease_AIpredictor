import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PageTransition from '../components/PageTransition';
import EmergencyAlert from '../components/EmergencyAlert';
import PredictionForm from '../components/PredictionForm';
import RiskCard from '../components/RiskCard';
import { predictRisk } from '../services/api';

export default function Predict() {
  const [result, setResult] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [apiError, setApiError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (formData) => {
    setIsLoading(true);
    setApiError(null);
    try {
      const response = await predictRisk(formData);
      setResult(response);
      // Scroll smoothly to top of result
      window.scrollTo({ top: 120, behavior: 'smooth' });
    } catch (err) {
      console.error('Submission error:', err);
      setApiError(err.message || 'Unable to connect to prediction service. Please try again later.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleReset = () => {
    setResult(null);
    setApiError(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <PageTransition className="max-w-4xl mx-auto px-4 py-8 sm:py-12 space-y-8">

      {result ? (
        <div className="space-y-6">
          <div className="text-center space-y-1">
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
              Your Screening Result
            </h1>
            <p className="text-xs sm:text-sm text-slate-500">
              Evaluated via K-Nearest Neighbors heart disease prediction model
            </p>
          </div>
          <RiskCard result={result} onReset={handleReset} />
        </div>
      ) : (
        <div className="space-y-6">
          <PredictionForm
            onSubmit={handleSubmit}
            isLoading={isLoading}
            apiError={apiError}
          />
        </div>
      )}
    </PageTransition>
  );
}
