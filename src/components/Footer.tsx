import React from 'react';
import { useTranslation } from '../contexts/LanguageContext';

interface FooterProps {
  darkMode: boolean;
}

const Footer: React.FC<FooterProps> = ({ darkMode }) => {
  const { t } = useTranslation();
  
  return (
    <footer className={`py-4 ${darkMode ? 'bg-black' : 'bg-[#ffd200]'}`}>
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <p className={`text-sm ${darkMode ? 'text-white' : 'text-black'}`}>
            {t('footer.copyright')} © {new Date().getFullYear()} BOC Bank
          </p>
          <div className="mt-2 md:mt-0">
            <p className={`text-sm ${darkMode ? 'text-white' : 'text-black'}`}>
              {t('footer.disclaimer')}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;