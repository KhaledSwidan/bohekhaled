// src/components/error-boundary.tsx

import {
  type FallbackProps,
  ErrorBoundary as ReactErrorBoundary,
} from 'react-error-boundary';
import { AlertCircle, RefreshCw, Home } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

function ErrorFallback({ error, resetErrorBoundary }: FallbackProps) {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate('/');
    resetErrorBoundary();
  };

  const isDev = import.meta.env.DEV;

  return (
    <main className='min-h-screen flex items-center justify-center bg-background px-4'>
      <section className='text-center space-y-6 max-w-md w-full'>
        <div className='flex justify-center text-destructive'>
          <AlertCircle size={48} />
        </div>
        <h1 className='text-3xl font-bold text-foreground'>
          Oops! Something went wrong.
        </h1>
        <p className='text-muted-foreground'>
          {error.message ||
            'An unexpected error occurred. Please try refreshing the page.'}
        </p>

        {/* عرض الـ stack trace في development فقط */}
        {isDev && error.stack && (
          <details className='text-left bg-muted p-4 rounded-lg text-sm overflow-auto max-h-40'>
            <summary className='cursor-pointer font-semibold mb-2'>
              Error Details (Dev Only)
            </summary>
            <pre className='text-xs text-muted-foreground whitespace-pre-wrap'>
              {error.stack}
            </pre>
          </details>
        )}

        <div className='flex gap-3 justify-center'>
          <button
            onClick={resetErrorBoundary}
            className='inline-flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 rounded-xl shadow hover:opacity-90 transition-all'
          >
            <RefreshCw size={18} />
            Try Again
          </button>
          <button
            onClick={handleGoHome}
            className='inline-flex items-center gap-2 bg-secondary text-secondary-foreground px-5 py-2.5 rounded-xl shadow hover:opacity-90 transition-all'
          >
            <Home size={18} />
            Go Home
          </button>
        </div>
      </section>
    </main>
  );
}

interface Props {
  children: React.ReactNode;
}

export function ErrorBoundary({ children }: Props) {
  return (
    <ReactErrorBoundary
      FallbackComponent={ErrorFallback}
      onReset={() => {
        window.location.reload();
      }}
    >
      {children}
    </ReactErrorBoundary>
  );
}
