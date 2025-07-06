// components/loading-spinner.tsx
import { Loader2 } from 'lucide-react';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const LoadingSpinner = ({
  size = 'md',
  className = '',
}: LoadingSpinnerProps) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12',
  };

  return (
    <div className={`flex items-center justify-center ${className}`}>
      <Loader2
        className={`animate-spin text-zinc-600 dark:text-zinc-400 ${sizeClasses[size]}`}
        aria-label='Loading...'
      />
    </div>
  );
};

export default LoadingSpinner;

// ✅ Loading fallback component
export const SectionLoader = () => (
  <div className='flex justify-center items-center py-20'>
    <LoadingSpinner />
  </div>
);
