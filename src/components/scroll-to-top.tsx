import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          className='fixed bottom-8 right-8 z-40'
        >
          <Button
            onClick={scrollToTop}
            size='icon'
            className='rounded-full border border-slate-700/40 bg-slate-800/30 backdrop-blur-sm hover:bg-slate-800/40 hover:border-slate-600/50 shadow-md hover:shadow-lg transition-all duration-500'
            aria-label='Scroll to top'
          >
            <ChevronUp className='w-5 h-5 font-bold text-neutral-400' />
          </Button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
