// كود التقاط الأخطاء والتقارير عنها

type ErrorInfo =
  | {
      message: string;
      filename: string;
      lineno: number;
      colno: number;
    }
  | {
      type: 'unhandledrejection';
      reason: unknown;
    };

const reportError = (error: Error, errorInfo: ErrorInfo) => {
  if (process.env.NODE_ENV === 'production') {
    console.error('Application Error:', error, errorInfo);
  }
};

export const setupErrorHandling = () => {
  window.addEventListener('error', (event) => {
    reportError(event.error, {
      message: event.message,
      filename: event.filename,
      lineno: event.lineno,
      colno: event.colno,
    });
  });

  window.addEventListener('unhandledrejection', (event) => {
    reportError(new Error(event.reason), {
      type: 'unhandledrejection',
      reason: event.reason,
    });
  });
};
