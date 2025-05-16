import React, { useState, useEffect } from 'react';

interface AnimationProps {
  darkMode: boolean;
}

const EnterPinAnimation: React.FC<AnimationProps> = ({ darkMode }) => {
  const [activeKey, setActiveKey] = useState<number | null>(null);
  const [pinDisplay, setPinDisplay] = useState<string>('');
  
  // Simulate PIN entry
  useEffect(() => {
    const keys = [1, 4, 7, 9];
    let currentIndex = 0;
    
    const interval = setInterval(() => {
      if (currentIndex < keys.length) {
        setActiveKey(keys[currentIndex]);
        
        // Update PIN display with asterisks
        setPinDisplay('*'.repeat(currentIndex + 1));
        
        setTimeout(() => {
          setActiveKey(null);
        }, 300);
        
        currentIndex++;
      } else {
        clearInterval(interval);
        setTimeout(() => {
          setPinDisplay('');
          currentIndex = 0;
        }, 1000);
      }
    }, 1000);
    
    return () => clearInterval(interval);
  }, []);
  
  return (
    <div className={`relative w-full aspect-[4/3] border-4 ${darkMode ? 'border-gray-600 bg-gray-700' : 'border-gray-300 bg-gray-100'} rounded-lg flex flex-col items-center justify-center overflow-hidden`}>
      {/* ATM Machine */}
      <div className={`w-full h-full flex flex-col items-center`}>
        {/* ATM Screen */}
        <div className={`w-3/4 h-1/2 mx-auto mt-4 ${darkMode ? 'bg-black' : 'bg-blue-900'} rounded-md relative flex flex-col items-center justify-center border-2 ${darkMode ? 'border-gray-600' : 'border-gray-400'}`}>
          <div className={`text-center ${darkMode ? 'text-white' : 'text-white'} p-2 text-sm font-bold mb-2`}>
            Please Enter Your PIN
          </div>
          
          {/* PIN Display */}
          <div className={`w-3/4 h-8 ${darkMode ? 'bg-gray-800' : 'bg-gray-200'} rounded flex items-center justify-center mb-4`}>
            <div className="text-lg font-mono">{pinDisplay}</div>
          </div>
          
          <div className="text-xs text-white opacity-70 mt-2">
            Press ENTER when done
          </div>
        </div>
        
        {/* Card Slot with inserted card */}
        <div className="relative w-full flex justify-center mt-4">
          <div className={`w-1/3 h-2 ${darkMode ? 'bg-gray-800' : 'bg-gray-600'} relative overflow-hidden`}>
            {/* Card partially visible in slot */}
            <div className={`w-6 h-2 ${darkMode ? 'bg-[#ffd200]' : 'bg-[#ffd200]'} absolute right-0`}></div>
          </div>
        </div>
        
        {/* Hand covering keypad partially */}
        <div className="absolute bottom-10 right-[40%] w-24 h-24 bg-[#ffdbac] rounded-full opacity-60 transform -rotate-45 z-10"></div>
        
        {/* Keypad */}
        <div className={`grid grid-cols-3 gap-2 mt-8 relative z-0 ${darkMode ? 'text-white' : 'text-black'}`}>
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

export default EnterPinAnimation;