'use client';

import * as React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider } from '@emotion/react';
import theme from '@/lib/theme';
import createEmotionCache from '@/lib/emotion-cache';

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

interface ThemeRegistryProps {
  children: React.ReactNode;
  emotionCache?: ReturnType<typeof createEmotionCache>;
}

export default function ThemeRegistry({
  children,
  emotionCache = clientSideEmotionCache,
}: ThemeRegistryProps) {
  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        {children}
      </ThemeProvider>
    </CacheProvider>
  );
}
