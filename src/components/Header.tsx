import React from 'react';
import { SunMoon, CreditCard } from 'lucide-react';
import LanguageSelector from './LanguageSelector';
import { useTranslation } from '../contexts/LanguageContext';

interface HeaderProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const Header: React.FC<HeaderProps> = ({ darkMode, toggleDarkMode }) => {
  const { t } = useTranslation();

  return (
    <header className={`py-4 ${darkMode ? 'bg-black' : 'bg-[#ffd200]'}`}>
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center mb-4 md:mb-0">
            <CreditCard size={32} className={darkMode ? 'text-[#ffd200]' : 'text-black'} />
            <h1 className={`ml-2 text-2xl font-bold ${darkMode ? 'text-white' : 'text-black'}`}>
              {t('header.title')}
            </h1>
          </div>
          <div className="flex items-center space-x-4">
            <LanguageSelector darkMode={darkMode} />
            <button
              onClick={toggleDarkMode}
              className={`p-2 rounded-full ${
                darkMode ? 'bg-gray-800 text-[#ffd200]' : 'bg-white text-black'
              }`}
              aria-label={darkMode ? t('header.lightMode') : t('header.darkMode')}
            >
              <SunMoon size={24} />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;