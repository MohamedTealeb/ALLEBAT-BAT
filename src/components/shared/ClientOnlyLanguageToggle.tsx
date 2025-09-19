'use client';

import React, { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import LanguageToggle from './LanguageToggle';

interface ClientOnlyLanguageToggleProps {
  onLanguageChange: (language: 'french' | 'arabic') => void;
}

const ClientOnlyLanguageToggle: React.FC<ClientOnlyLanguageToggleProps> = ({ 
  onLanguageChange 
}) => {
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);
  
  // Determine current language based on pathname
  const currentLanguage: 'french' | 'arabic' = pathname?.startsWith('/ar') ? 'arabic' : 'french';

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    // Return null during SSR to avoid hydration mismatch
    return null;
  }

  return (
    <LanguageToggle 
      currentLanguage={currentLanguage}
      onLanguageChange={onLanguageChange}
    />
  );
};

export default ClientOnlyLanguageToggle;
