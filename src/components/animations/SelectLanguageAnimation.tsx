import React from 'react';

interface AnimationProps {
  darkMode: boolean;
}

const SelectLanguageAnimation: React.FC<AnimationProps> = ({ darkMode }) => {
  return (
    <div className={`relative w-full aspect-[4/3] border-4 ${darkMode ? 'border-gray-600 bg-gray-700' : 'border-gray-300 bg-gray-100'} rounded-lg flex flex-col items-center justify-center overflow-hidden`}>
      {/* ATM Machine */}
      <div className={`w-full h-full flex flex-col items-center`}>
        {/* ATM Screen */}
        <div className={`w-3/4 h-1/2 mx-auto mt-4 ${darkMode ? 'bg-black' : 'bg-blue-900'} rounded-md relative flex flex-col items-center justify-center border-2 ${darkMode ? 'border-gray-600' : 'border-gray-400'}`}>
          <div className={`text-center ${darkMode ? 'text-white' : 'text-white'} p-2 text-sm font-bold mb-2`}>
            Select Your Language
          </div>
          
          {/* Language buttons */}
          <div className="w-full flex flex-col items-center space-y-2 px-4">
            <div className="flex w-full">
              <div className="flex-1"></div>
              <div className={`w-20 py-1 ${darkMode ? 'bg-gray-700' : 'bg-gray-200'} text-center rounded cursor-pointer text-xs language-btn animate-pulse-highlight`}>
                English
              </div>
            </div>
            <div className="flex w-full">
              <div className="flex-1"></div>
              <div className={`w-20 py-1 ${darkMode ? 'bg-gray-700' : 'bg-gray-200'} text-center rounded cursor-pointer text-xs language-btn`}>
                සිංහල
              </div>
            </div>
            <div className="flex w-full">
              <div className="flex-1"></div>
              <div className={`w-20 py-1 ${darkMode ? 'bg-gray-700' : 'bg-gray-200'} text-center rounded cursor-pointer text-xs language-btn`}>
                தமிழ்
              </div>
            </div>
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
            <div key={i} className={`w-8 h-8 ${darkMode ? 'bg-gray-800' : 'bg-gray-300'} rounded-md flex items-center justify-center text-sm font-bold`}>
              {num}
            </div>
          ))}
        </div>
      </div>
      
      {/* Add CSS for button highlight animation */}
      <style jsx>{`
        @keyframes pulseHighlight {
          0% {
            background-color: ${darkMode ? '#1f2937' : '#e5e7eb'};
          }
          50% {
            background-color: ${darkMode ? '#ffd200' : '#ffd200'};
            color: black;
          }
          100% {
            background-color: ${darkMode ? '#1f2937' : '#e5e7eb'};
          }
        }
        
        .animate-pulse-highlight {
          animation: pulseHighlight 2s infinite;
        }
      `}</style>
    </div>
  );
};

export default SelectLanguageAnimation;