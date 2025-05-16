import React, { useState, useEffect } from 'react';

interface AnimationProps {
  darkMode: boolean;
}

const TakeCardReceiptAnimation: React.FC<AnimationProps> = ({ darkMode }) => {
  const [receiptVisible, setReceiptVisible] = useState(false);
  const [receiptPosition, setReceiptPosition] = useState(0);
  const [cardEjected, setCardEjected] = useState(false);
  const [cardPosition, setCardPosition] = useState(0);
  
  // Animate receipt and card ejection
  useEffect(() => {
    const animateSequence = () => {
      // Start with receipt
      setReceiptVisible(true);
      
      // Animate receipt coming out
      let receiptPos = 0;
      const receiptInterval = setInterval(() => {
        if (receiptPos < 20) {
          receiptPos += 1;
          setReceiptPosition(receiptPos);
        } else {
          clearInterval(receiptInterval);
          
          // Then animate card after a delay
          setTimeout(() => {
            setCardEjected(true);
            
            let cardPos = 0;
            const cardInterval = setInterval(() => {
              if (cardPos < 15) {
                cardPos += 1;
                setCardPosition(cardPos);
              } else {
                clearInterval(cardInterval);
                
                // Reset after a delay
                setTimeout(() => {
                  setReceiptPosition(0);
                  setReceiptVisible(false);
                  setCardPosition(0);
                  setCardEjected(false);
                  
                  // Restart animation after a pause
                  setTimeout(animateSequence, 1000);
                }, 1500);
              }
            }, 100);
          }, 1000);
        }
      }, 100);
    };
    
    // Start animation
    animateSequence();
    
    return () => {
      // Cleanup
      setReceiptVisible(false);
      setReceiptPosition(0);
      setCardEjected(false);
      setCardPosition(0);
    };
  }, []);
  
  return (
    <div className={`relative w-full aspect-[4/3] border-4 ${darkMode ? 'border-gray-600 bg-gray-700' : 'border-gray-300 bg-gray-100'} rounded-lg flex flex-col items-center justify-center overflow-hidden`}>
      {/* ATM Machine */}
      <div className={`w-full h-full flex flex-col items-center`}>
        {/* ATM Screen */}
        <div className={`w-3/4 h-2/5 mx-auto mt-4 ${darkMode ? 'bg-black' : 'bg-blue-900'} rounded-md relative flex flex-col items-center justify-center border-2 ${darkMode ? 'border-gray-600' : 'border-gray-400'}`}>
          <div className={`text-center ${darkMode ? 'text-white' : 'text-white'} p-2 text-sm font-bold`}>
            Transaction Complete
          </div>
          
          <div className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-200'} mt-2 text-center`}>
            Please take your card and receipt<br />
            Thank you for using BOC ATM
          </div>
        </div>
        
        {/* Receipt Slot */}
        <div className="relative w-full flex justify-center mt-2">
          <div className={`w-1/3 h-2 ${darkMode ? 'bg-gray-800' : 'bg-gray-600'} relative overflow-visible`}>
            <div className="text-[6px] absolute -top-2 text-center w-full">RECEIPT</div>
            
            {/* Animated Receipt */}
            {receiptVisible && (
              <div 
                className={`absolute w-12 h-20 bg-white border border-gray-300 z-10`}
                style={{ 
                  transform: `translateY(${receiptPosition}px)`,
                  top: '0px',
                  left: 'calc(50% - 24px)'
                }}
              >
                <div className="w-full h-full p-1">
                  <div className="text-[5px] text-center font-bold border-b border-gray-300 pb-1">BOC BANK RECEIPT</div>
                  <div className="text-[4px] mt-1">
                    <div>Date: {new Date().toLocaleDateString()}</div>
                    <div>Time: {new Date().toLocaleTimeString()}</div>
                    <div>ATM ID: BOC0001</div>
                    <div className="mt-1">Transaction: WITHDRAWAL</div>
                    <div>Amount: Rs. 5,000.00</div>
                    <div className="mt-1">Available Balance:</div>
                    <div>Rs. 25,000.00</div>
                  </div>
                  <div className="text-[4px] text-center mt-2">Thank You</div>
                </div>
              </div>
            )}
          </div>
        </div>
        
        {/* Card Slot */}
        <div className="relative w-full flex justify-center mt-6">
          <div className={`w-1/3 h-2 ${darkMode ? 'bg-gray-800' : 'bg-gray-600'} relative overflow-visible`}>
            <div className="text-[6px] absolute -top-2 text-center w-full">CARD</div>
            
            {/* Animated Card */}
            {cardEjected && (
              <div 
                className={`absolute w-16 h-10 ${darkMode ? 'bg-[#ffd200]' : 'bg-[#ffd200]'} rounded-md p-1 flex flex-col justify-between z-10`}
                style={{ 
                  transform: `translateX(${cardPosition}px)`,
                  right: '0px',
                  top: '-4px'
                }}
              >
                <div className="w-full h-2 bg-gray-700 rounded-sm"></div>
                <div className="text-[6px] text-black font-bold">BOC BANK</div>
              </div>
            )}
          </div>
        </div>
        
        {/* Cash Dispenser */}
        <div className="relative w-full flex justify-center mt-6 mb-2">
          <div className={`w-2/5 h-4 ${darkMode ? 'bg-gray-800' : 'bg-gray-600'} relative overflow-visible flex items-center justify-center`}>
            <div className="text-[8px] text-center">CASH</div>
          </div>
        </div>
        
        {/* Keypad */}
        <div className={`grid grid-cols-3 gap-2 mt-4 ${darkMode ? 'text-white' : 'text-black'}`}>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, '*', 0, '#'].map((num, i) => (
            <div key={i} className={`w-8 h-8 ${darkMode ? 'bg-gray-800' : 'bg-gray-300'} rounded-md flex items-center justify-center text-sm font-bold`}>
              {num}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TakeCardReceiptAnimation;