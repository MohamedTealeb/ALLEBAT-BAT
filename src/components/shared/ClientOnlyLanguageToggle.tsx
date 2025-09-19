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
    // Return a placeholder during SSR that matches the expected structure
    return (
      <div style={{ 
        width: '200px', 
        height: '50px', 
        backgroundColor: '#f5f5f5', 
        borderRadius: '25px',
        border: '2px solid #ddd',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <span style={{ color: '#666', fontSize: '14px' }}>Loading...</span>
      </div>
    );
  }

  return (
    <LanguageToggle 
      currentLanguage={currentLanguage}
      onLanguageChange={onLanguageChange}
    />
  );
};

export default ClientOnlyLanguageToggle;
