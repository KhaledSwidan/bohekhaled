// Performance monitoring and optimization
(function () {
  'use strict';

  // Performance monitoring
  if ('PerformanceObserver' in window) {
    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (entry.entryType === 'largest-contentful-paint') {
          console.log('LCP:', entry.startTime);
        }
      }
    });
    observer.observe({ entryTypes: ['largest-contentful-paint'] });
  }

  // Error tracking
  window.addEventListener('error', (e) => {
    console.error('Global error:', e.error);
  });

  window.addEventListener('unhandledrejection', (e) => {
    console.error('Unhandled promise rejection:', e.reason);
  });

  // Service Worker registration
  if ('serviceWorker' in navigator && location.protocol === 'https:') {
    window.addEventListener('load', () => {
      navigator.serviceWorker
        .register('/sw.js')
        .then((registration) => {
          console.log('SW registered:', registration);
        })
        .catch((error) => {
          console.log('SW registration failed:', error);
        });
    });
  }

  // Loading screen management
  function hideLoadingScreen() {
    const loadingScreen = document.getElementById('loading-screen');
    const root = document.getElementById('root');

    if (loadingScreen && root) {
      setTimeout(() => {
        loadingScreen.style.opacity = '0';
        setTimeout(() => {
          loadingScreen.remove();
          root.classList.add('loaded');
          document.body.style.overflow = 'auto';
        }, 300);
      }, 100);
    }
  }

  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', hideLoadingScreen);
  } else {
    hideLoadingScreen();
  }
})();
