import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useTranslation } from '../contexts/LanguageContext';

interface StepNavigationProps {
  currentStep: number;
  totalSteps: number;
  onPrevious: () => void;
  onNext: () => void;
  darkMode: boolean;
}

const StepNavigation: React.FC<StepNavigationProps> = ({
  currentStep,
  totalSteps,
  onPrevious,
  onNext,
  darkMode,
}) => {
  const { t } = useTranslation();
  
  // Create progress dots
  const renderProgressDots = () => {
    return Array(totalSteps)
      .fill(0)
      .map((_, index) => (
        <div
          key={index}
          className={`h-3 w-3 rounded-full mx-1 ${
            index === currentStep
              ? darkMode
                ? 'bg-[#ffd200]'
                : 'bg-black'
              : darkMode
              ? 'bg-gray-600'
              : 'bg-gray-300'
          }`}
          aria-label={`Step ${index + 1}`}
        ></div>
      ));
  };

  return (
    <div className="mt-8">
      <div className="flex justify-center mb-4">
        {renderProgressDots()}
      </div>
      
      <div className="flex items-center justify-between">
        <button
          onClick={onPrevious}
          disabled={currentStep === 0}
          className={`flex items-center px-4 py-2 rounded-lg ${
            darkMode
              ? currentStep === 0
                ? 'bg-gray-700 text-gray-500 cursor-not-allowed'
                : 'bg-gray-700 text-white hover:bg-gray-600'
              : currentStep === 0
              ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
              : 'bg-gray-200 text-black hover:bg-gray-300'
          }`}
          aria-label={t('guide.navigation.previous')}
        >
          <ChevronLeft size={20} className="mr-1" />
          {t('guide.navigation.previous')}
        </button>
        
        <div className={`text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
          {t('guide.navigation.stepOf')
            .replace('{current}', String(currentStep + 1))
            .replace('{total}', String(totalSteps))}
        </div>
        
        <button
          onClick={onNext}
          disabled={currentStep === totalSteps - 1}
          className={`flex items-center px-4 py-2 rounded-lg ${
            darkMode
              ? currentStep === totalSteps - 1
                ? 'bg-gray-700 text-gray-500 cursor-not-allowed'
                : 'bg-[#ffd200] text-black hover:bg-[#e6bd00]'
              : currentStep === totalSteps - 1
              ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
              : 'bg-[#ffd200] text-black hover:bg-[#e6bd00]'
          }`}
          aria-label={t('guide.navigation.next')}
        >
          {t('guide.navigation.next')}
          <ChevronRight size={20} className="ml-1" />
        </button>
      </div>
    </div>
  );
};

export default StepNavigation;