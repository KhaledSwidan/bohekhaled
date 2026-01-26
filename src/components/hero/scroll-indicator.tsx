import { domAnimation, LazyMotion, m } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import { useAnimationVariants } from '@/hooks/useAnimationVariants';
import { Link } from 'react-router-dom';
import { useCallback } from 'react';

const ScrollIndicator = () => {
  const { shouldReduceMotion } = useAnimationVariants();

  const handleClick = useCallback(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  return (
    <LazyMotion features={domAnimation} strict>
      <m.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        className='absolute bottom-8 left-1/2 -translate-x-1/2 -ml-4'
        style={{
          willChange: shouldReduceMotion ? 'auto' : 'opacity, transform',
        }}
      >
        <Link
          to='/about'
          onClick={handleClick}
          className='group relative block text-slate-400 hover:text-slate-200 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-900 rounded-full p-2'
          aria-label='Go to About page'
        >
          <m.div
            animate={
              shouldReduceMotion
                ? undefined
                : {
                    y: [0, 8, 0],
                  }
            }
            transition={
              shouldReduceMotion
                ? undefined
                : {
                    duration: 1.5,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    repeatType: 'loop',
                  }
            }
            className='relative z-10'
            style={{ willChange: shouldReduceMotion ? 'auto' : 'transform' }}
          >
            <ArrowDown className='w-6 h-6 group-hover:drop-shadow-lg transition-all' />
          </m.div>
          {!shouldReduceMotion && (
            <>
              <m.span
                className='absolute inset-0 rounded-full border-2 border-slate-400 pointer-events-none'
                initial={{ scale: 1, opacity: 0.5 }}
                animate={{
                  scale: [1, 1.5, 2],
                  opacity: [0.5, 0.2, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: 'easeOut',
                  repeatType: 'loop',
                }}
                style={{ willChange: 'transform, opacity' }}
              />
              <m.span
                className='absolute inset-0 rounded-full border-2 border-slate-400 pointer-events-none'
                initial={{ scale: 1, opacity: 0.5 }}
                animate={{
                  scale: [1, 1.5, 2],
                  opacity: [0.5, 0.2, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: 'easeOut',
                  repeatType: 'loop',
                  delay: 1,
                }}
                style={{ willChange: 'transform, opacity' }}
              />
            </>
          )}
        </Link>
      </m.div>
    </LazyMotion>
  );
};

export default ScrollIndicator;
