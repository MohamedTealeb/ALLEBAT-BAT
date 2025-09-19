'use client';

import React from 'react';
import { Box, Button } from '@mui/material';

interface LanguageToggleProps {
  currentLanguage: 'french' | 'arabic';
  onLanguageChange?: (language: 'french' | 'arabic') => void;
}

const LanguageToggle: React.FC<LanguageToggleProps> = ({ 
  currentLanguage,
  onLanguageChange 
}) => {
  const handleLanguageChange = (language: 'french' | 'arabic') => {
    onLanguageChange?.(language);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        backgroundColor: '#f5f5f5',
        borderRadius: '25px',
        padding: '4px',
        border: '2px solid #ddd',
        position: 'relative',
        width: '200px',
        height: '50px',
      }}
    >
      {/* French Button */}
      <Button
        onClick={() => handleLanguageChange('french')}
        sx={{
          flex: 1,
          borderRadius: '20px',
          backgroundColor: currentLanguage === 'french' ? '#EF6C00' : 'transparent',
          color: currentLanguage === 'french' ? 'white' : '#666',
          fontWeight: 600,
          fontSize: '14px',
          textTransform: 'none',
          zIndex: 2,
          transition: 'all 0.3s ease',
          '&:hover': {
            backgroundColor: currentLanguage === 'french' ? '#E65100' : 'rgba(239, 108, 0, 0.1)',
          },
          boxShadow: currentLanguage === 'french' ? '0 2px 8px rgba(239, 108, 0, 0.3)' : 'none',
        }}
      >
        French
      </Button>

      {/* Arabic Button */}
      <Button
        onClick={() => handleLanguageChange('arabic')}
        sx={{
          flex: 1,
          borderRadius: '20px',
          backgroundColor: currentLanguage === 'arabic' ? '#EF6C00' : 'transparent',
          color: currentLanguage === 'arabic' ? 'white' : '#666',
          fontWeight: 600,
          fontSize: '14px',
          textTransform: 'none',
          zIndex: 2,
          transition: 'all 0.3s ease',
          '&:hover': {
            backgroundColor: currentLanguage === 'arabic' ? '#E65100' : 'rgba(239, 108, 0, 0.1)',
          },
          boxShadow: currentLanguage === 'arabic' ? '0 2px 8px rgba(239, 108, 0, 0.3)' : 'none',
        }}
      >
        <span style={{ color: currentLanguage === 'arabic' ? 'white' : '#000' }}>
          Arabic
        </span>
      </Button>
    </Box>
  );
};

export default LanguageToggle;
