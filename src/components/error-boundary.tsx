import {
  type FallbackProps,
  ErrorBoundary as ReactErrorBoundary,
} from 'react-error-boundary';
import { AlertCircle, RefreshCw } from 'lucide-react';

function ErrorFallback({ error, resetErrorBoundary }: FallbackProps) {
  return (
    <main className='min-h-screen flex items-center justify-center bg-background px-4'>
      <section className='text-center space-y-6 max-w-md w-full'>
        <div className='flex justify-center text-red-600'>
          <AlertCircle size={48} />
        </div>
        <h1 className='text-3xl font-bold text-foreground'>
          Oops! Something went wrong.
        </h1>
        <p className='text-muted-foreground'>
          {error.message ||
            'An unexpected error occurred. Please try refreshing the page.'}
        </p>
        <button
          onClick={resetErrorBoundary}
          className='inline-flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 rounded-xl shadow hover:opacity-90 transition-all'
        >
          <RefreshCw size={18} />
          Try Again
        </button>
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
