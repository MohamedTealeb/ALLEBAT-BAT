'use client';

import React, { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import Footer from './Footer';

const ClientOnlyFooter: React.FC = () => {
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);
  
  // Determine current language based on pathname
  const isArabic = pathname?.startsWith('/ar');

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    // Return a placeholder during SSR to avoid hydration mismatch
    return (
      <div style={{ 
        backgroundColor: '#BDBDBD', 
        height: '200px', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center' 
      }}>
        <div>Loading...</div>
      </div>
    );
  }

  return <Footer isArabic={isArabic} />;
};

export default ClientOnlyFooter;
