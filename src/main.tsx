import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { HeadProvider } from 'react-head';
import { Toaster } from 'sonner';

import { initializePerformanceMonitoring } from '@/utils/reportWebVitals';
import { setupErrorHandling } from '@/utils/errorHandler';
import { registerServiceWorker } from '@/utils/registerServiceWorker';
import { preloadCriticalResources } from '@/utils/preloadResources';

const initializeApp = () => {
  const rootElement = document.getElementById('root');
  if (!rootElement) throw new Error('Root element not found');

  setupErrorHandling();
  preloadCriticalResources();
  initializePerformanceMonitoring();
  registerServiceWorker();

  const root = createRoot(rootElement);
  root.render(
    <StrictMode>
      <HeadProvider>
        <App />
        <Toaster position='bottom-center' />
      </HeadProvider>
    </StrictMode>
  );

  const loadingScreen = document.getElementById('loading-screen');
  if (loadingScreen) {
    setTimeout(() => {
      loadingScreen.style.opacity = '0';
      setTimeout(() => {
        loadingScreen.remove();
        rootElement.classList.add('loaded');
      }, 300);
    }, 100);
  }
};

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initializeApp);
} else {
  initializeApp();
}
