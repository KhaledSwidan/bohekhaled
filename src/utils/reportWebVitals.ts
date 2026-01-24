// كود أداء الموقع (Web Vitals)

import { onCLS, onFID, onFCP, onLCP, onTTFB, type Metric } from 'web-vitals';

const reportWebVitals = (metric: Metric) => {
  if (process.env.NODE_ENV === 'production') {
    console.log(metric);
  }
};

export const initializePerformanceMonitoring = () => {
  onCLS(reportWebVitals);
  onFID(reportWebVitals);
  onFCP(reportWebVitals);
  onLCP(reportWebVitals);
  onTTFB(reportWebVitals);

  // Optional: manual LCP observer
  if ('PerformanceObserver' in window) {
    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (entry.entryType === 'largest-contentful-paint') {
          reportWebVitals({
            name: 'LCP',
            value: entry.startTime,
            id: 'custom-lcp',
            rating: 'good',
            delta: 0,
            entries: [],
            navigationType: 'navigate',
          });
        }
      }
    });
    observer.observe({ entryTypes: ['largest-contentful-paint'] });
  }
};
