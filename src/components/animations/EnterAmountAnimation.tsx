import React, { useState, useEffect } from 'react';

interface AnimationProps {
  darkMode: boolean;
}

const EnterAmountAnimation: React.FC<AnimationProps> = ({ darkMode }) => {
  const [amount, setAmount] = useState<string>('');
  const [activeKey, setActiveKey] = useState<number | null>(null);
  
  // Simulate amount entry
  useEffect(() => {
    const keys = [5, 0, 0, 0];
    let currentIndex = 0;
    
    // Reset animation
    setAmount('');
    
    const interval = setInterval(() => {
      if (currentIndex < keys.length) {
        setActiveKey(keys[currentIndex]);
        
        // Update amount display
        setAmount(prev => prev + keys[currentIndex]);
        
        setTimeout(() => {
          setActiveKey(null);
        }, 300);
        
        currentIndex++;
      } else {
        clearInterval(interval);
        setTimeout(() => {
          setAmount('');
          currentIndex = 0;
        }, 2000);
      }
    }, 700);
    
    return () => clearInterval(interval);
  }, []);
  
  return (
    <div className={`relative w-full aspect-[4/3] border-4 ${darkMode ? 'border-gray-600 bg-gray-700' : 'border-gray-300 bg-gray-100'} rounded-lg flex flex-col items-center justify-center overflow-hidden`}>
      {/* ATM Machine */}
      <div className={`w-full h-full flex flex-col items-center`}>
        {/* ATM Screen */}
        <div className={`w-3/4 h-1/2 mx-auto mt-4 ${darkMode ? 'bg-black' : 'bg-blue-900'} rounded-md relative flex flex-col items-center justify-center border-2 ${darkMode ? 'border-gray-600' : 'border-gray-400'}`}>
          <div className={`text-center ${darkMode ? 'text-white' : 'text-white'} p-2 text-sm font-bold mb-2`}>
            Enter Amount
          </div>
          
          {/* Amount Display */}
          <div className={`w-3/4 h-10 ${darkMode ? 'bg-gray-800' : 'bg-gray-200'} rounded flex items-center justify-start px-3 mb-4`}>
            <span className="text-lg font-mono mr-1">Rs.</span>
            <span className="text-lg font-mono">{amount}</span>
          </div>
          
          {/* Quick cash options */}
          <div className="w-full flex flex-wrap justify-center gap-2 px-4 mt-2">
            {[1000, 2000, 5000, 10000].map((val, idx) => (
              <div key={idx} className={`px-2 py-1 ${darkMode ? 'bg-gray-700' : 'bg-gray-200'} text-center rounded text-xs`}>
                Rs. {val}
              </div>
            ))}
          </div>
        </div>
        
        {/* Card Slot with inserted card */}
        <div className="relative w-full flex justify-center mt-4">
          <div className={`w-1/3 h-2 ${darkMode ? 'bg-gray-800' : 'bg-gray-600'} relative overflow-hidden`}>
            {/* Card partially visible in slot */}
            <div className={`w-6 h-2 ${darkMode ? 'bg-[#ffd200]' : 'bg-[#ffd200]'} absolute right-0`}></div>
          </div>
        </div>
        
        {/* Keypad */}
        <div className={`grid grid-cols-3 gap-2 mt-8 ${darkMode ? 'text-white' : 'text-black'}`}>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, '*', 0, '#'].map((num, i) => (
            <div 
              key={i} 
              className={`w-8 h-8 ${
                activeKey === num 
                  ? 'bg-[#ffd200] text-black' 
                  : darkMode 
                    ? 'bg-gray-800' 
                    : 'bg-gray-300'
              } rounded-md flex items-center justify-center text-sm font-bold transition-colors duration-200`}
            >
              {num}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EnterAmountAnimation;