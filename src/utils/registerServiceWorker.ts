// كود الـ Service Worker لتطبيق PWA

import { toast } from 'sonner';

export const registerServiceWorker = () => {
  if ('serviceWorker' in navigator && process.env.NODE_ENV === 'production') {
    window.addEventListener('load', () => {
      navigator.serviceWorker
        .register('/sw.js')
        .then((registration) => {
          // 🔄 اكتشف وجود تحديث جديد
          registration.onupdatefound = () => {
            const installingWorker = registration.installing;
            if (installingWorker) {
              installingWorker.onstatechange = () => {
                if (installingWorker.state === 'installed') {
                  if (navigator.serviceWorker.controller) {
                    // ✅ فيه تحديث جديد
                    toast.info('🔄 New version available', {
                      action: {
                        label: 'Refresh',
                        onClick: () => window.location.reload(),
                      },
                    });
                  } else {
                    console.log('Content is cached for offline use.');
                  }
                }
              };
            }
          };
        })
        .catch((registrationError) => {
          console.log('SW registration failed: ', registrationError);
        });
    });
  }
};
