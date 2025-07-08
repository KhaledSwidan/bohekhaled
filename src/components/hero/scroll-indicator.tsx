import { scrollToAbout } from '@/db/hero';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

const ScrollIndicator = () => {
  return (
    <motion.button
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.5 }}
      onClick={scrollToAbout}
      className='absolute bottom-8 left-1/2 transform -translate-x-1/2 text-slate-400 hover:text-slate-200 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 rounded-full p-2'
      aria-label='Scroll to about section'
    >
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
      >
        <ArrowDown className='w-6 h-6' />
      </motion.div>
    </motion.button>
  );
};

export default ScrollIndicator;
