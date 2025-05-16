import React, { useState, useRef } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { useTranslation } from '../contexts/LanguageContext';
import { useLanguage } from '../contexts/LanguageContext';
import ATMStepDisplay from './ATMStepDisplay';
import StepNavigation from './StepNavigation';

interface ATMGuideProps {
  darkMode: boolean;
}

const ATMGuide: React.FC<ATMGuideProps> = ({ darkMode }) => {
  const { t } = useTranslation();
  const { language } = useLanguage();
  const [currentStep, setCurrentStep] = useState(0);
  const [isNarrating, setIsNarrating] = useState(false);
  const speechSynthesisRef = useRef<SpeechSynthesisUtterance | null>(null);

  const steps = t('steps') as Array<{ title: string; description: string }>;
  const totalSteps = steps.length;

  const handleNext = () => {
    if (currentStep < totalSteps - 1) {
      setCurrentStep(currentStep + 1);
      if (isNarrating) {
        stopNarration();
        setTimeout(() => startNarration(), 300);
      }
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
      if (isNarrating) {
        stopNarration();
        setTimeout(() => startNarration(), 300);
      }
    }
  };

  const startNarration = () => {
    if ('speechSynthesis' in window) {
      const text = `${steps[currentStep].title}. ${steps[currentStep].description}`;
      speechSynthesisRef.current = new SpeechSynthesisUtterance(text);
      
      // Set language based on current language
      if (language === 'en') {
        speechSynthesisRef.current.lang = 'en-US';
      } else if (language === 'si') {
        speechSynthesisRef.current.lang = 'si-LK';
      } else if (language === 'ta') {
        speechSynthesisRef.current.lang = 'ta-IN';
      }
      
      speechSynthesis.speak(speechSynthesisRef.current);
      setIsNarrating(true);
    }
  };

  const stopNarration = () => {
    if ('speechSynthesis' in window) {
      speechSynthesis.cancel();
      setIsNarrating(false);
    }
  };

  return (
    <div className={`rounded-lg shadow-lg p-6 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
      <div className="text-center mb-8">
        <h2 className={`text-3xl font-bold mb-2 ${darkMode ? 'text-[#ffd200]' : 'text-black'}`}>
          {t('guide.title')}
        </h2>
        <p className={`text-lg ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
          {t('guide.subtitle')}
        </p>
        
        {/* Voice narration control */}
        {'speechSynthesis' in window && (
          <button
            onClick={isNarrating ? stopNarration : startNarration}
            className={`mt-4 flex items-center mx-auto px-4 py-2 rounded-lg ${
              darkMode 
                ? (isNarrating ? 'bg-red-600' : 'bg-[#ffd200] text-black') 
                : (isNarrating ? 'bg-red-600 text-white' : 'bg-[#ffd200]')
            }`}
            aria-label={isNarrating ? t('guide.voiceNarration.stop') : t('guide.voiceNarration.start')}
          >
            {isNarrating ? (
              <>
                <VolumeX size={20} className="mr-2" />
                {t('guide.voiceNarration.stop')}
              </>
            ) : (
              <>
                <Volume2 size={20} className="mr-2" />
                {t('guide.voiceNarration.start')}
              </>
            )}
          </button>
        )}
      </div>
      
      {/* ATM Step Display */}
      <ATMStepDisplay 
        step={steps[currentStep]} 
        stepIndex={currentStep}
        darkMode={darkMode} 
      />
      
      {/* Step Navigation */}
      <StepNavigation 
        currentStep={currentStep}
        totalSteps={totalSteps}
        onPrevious={handlePrevious}
        onNext={handleNext}
        darkMode={darkMode}
      />
    </div>
  );
};

export default ATMGuide;