import React from 'react';
import { Globe } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface LanguageSelectorProps {
  darkMode: boolean;
}

const LanguageSelector: React.FC<LanguageSelectorProps> = ({ darkMode }) => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center">
      <Globe size={20} className={darkMode ? 'text-[#ffd200]' : 'text-black'} />
      <select
        value={language}
        onChange={(e) => setLanguage(e.target.value)}
        className={`ml-2 p-1 rounded ${
          darkMode ? 'bg-gray-800 text-white border-gray-700' : 'bg-white text-black border-gray-300'
        } border`}
        aria-label="Select language"
      >
        <option value="en">English</option>
        <option value="si">සිංහල</option>
        <option value="ta">தமிழ்</option>
      </select>
    </div>
  );
};

export default LanguageSelector;