import { Loader2 } from 'lucide-react';
import { cn } from '@/lib/utils';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  label?: string;
}

const sizeClasses = {
  sm: 'w-4 h-4',
  md: 'w-8 h-8',
  lg: 'w-12 h-12',
};

const LoadingSpinner = ({
  size = 'md',
  className = '',
  label = 'Loading...',
}: LoadingSpinnerProps) => {
  return (
    <div
      className={cn(
        'flex flex-col items-center justify-center gap-2',
        className
      )}
    >
      <Loader2
        className={cn(
          'animate-spin',
          sizeClasses[size],
          'text-zinc-400 dark:text-slate-400'
        )}
        aria-label={label}
        role='status'
      />
      <span className='text-sm text-zinc-500 dark:text-slate-500 sr-only sm:not-sr-only'>
        {label}
      </span>
    </div>
  );
};

export default LoadingSpinner;

// ✅ Section fallback component
export const SectionLoader = ({
  label = 'Loading section...',
}: {
  label?: string;
}) => (
  <div className='flex justify-center items-center py-20'>
    <LoadingSpinner label={label} />
  </div>
);
