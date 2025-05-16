import React from 'react';
import InsertCardAnimation from './animations/InsertCardAnimation';
import SelectLanguageAnimation from './animations/SelectLanguageAnimation';
import EnterPinAnimation from './animations/EnterPinAnimation';
import SelectTransactionAnimation from './animations/SelectTransactionAnimation';
import EnterAmountAnimation from './animations/EnterAmountAnimation';
import CollectCashAnimation from './animations/CollectCashAnimation';
import TakeCardReceiptAnimation from './animations/TakeCardReceiptAnimation';

interface ATMStepDisplayProps {
  step: {
    title: string;
    description: string;
  };
  stepIndex: number;
  darkMode: boolean;
}

const ATMStepDisplay: React.FC<ATMStepDisplayProps> = ({ step, stepIndex, darkMode }) => {
  // Render the appropriate animation component based on the step index
  const renderAnimation = () => {
    switch (stepIndex) {
      case 0:
        return <InsertCardAnimation darkMode={darkMode} />;
      case 1:
        return <SelectLanguageAnimation darkMode={darkMode} />;
      case 2:
        return <EnterPinAnimation darkMode={darkMode} />;
      case 3:
        return <SelectTransactionAnimation darkMode={darkMode} />;
      case 4:
        return <EnterAmountAnimation darkMode={darkMode} />;
      case 5:
        return <CollectCashAnimation darkMode={darkMode} />;
      case 6:
        return <TakeCardReceiptAnimation darkMode={darkMode} />;
      default:
        return null;
    }
  };

  return (
    <div className="mb-8">
      <div className="flex flex-col md:flex-row items-center justify-center mb-6">
        <div className="w-full md:w-1/2 mb-6 md:mb-0 flex justify-center">
          <div className="w-full max-w-md">
            {renderAnimation()}
          </div>
        </div>
        
        <div className="w-full md:w-1/2 md:pl-8">
          <h3 className={`text-xl font-bold mb-4 ${darkMode ? 'text-[#ffd200]' : 'text-black'}`}>
            {step.title}
          </h3>
          <p className={`text-lg leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            {step.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ATMStepDisplay;