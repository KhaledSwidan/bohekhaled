// use-theme.ts
import { ThemeProviderContext } from '@/components/theme-context';
import { useContext } from 'react';

export function useTheme() {
  const context = useContext(ThemeProviderContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
