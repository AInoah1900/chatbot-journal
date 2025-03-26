'use client';

import React, { useState } from 'react';

export default function LanguageSwitcher() {
  const [language, setLanguage] = useState<'zh' | 'en'>('zh');

  const toggleLanguage = (lang: 'zh' | 'en') => {
    setLanguage(lang);
    // 这里可以添加实际的语言切换逻辑，例如切换URL或更改cookie等
  };

  return (
    <div className="flex gap-2">
      <button 
        className={`text-sm ${language === 'en' ? 'font-bold' : ''}`}
        onClick={() => toggleLanguage('en')}
      >
        English
      </button>
      <span className="text-text-light">|</span>
      <button 
        className={`text-sm ${language === 'zh' ? 'font-bold' : ''}`}
        onClick={() => toggleLanguage('zh')}
      >
        中文
      </button>
    </div>
  );
} 