import { type NavbarUtils } from '@/utils/navbar-utils';
import { Button } from '../ui/button';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const MobileMenu = ({ isOpen, setIsOpen }: NavbarUtils) => {
  return (
    <div className='flex items-center space-x-3'>
      <Button
        variant='outline'
        size='icon'
        className='md:hidden bg-slate-800/50 border-slate-700 hover:bg-slate-700/50 hover:border-slate-600 transition-all duration-300 focus:ring-2 focus:ring-slate-400'
        onClick={() => setIsOpen?.(!isOpen)}
        aria-expanded={isOpen}
        aria-controls='mobile-menu'
        aria-label={isOpen ? 'Close menu' : 'Open menu'}
      >
        <AnimatePresence mode='wait'>
          {isOpen ? (
            <motion.div
              key='close'
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <X className='h-4 w-4 text-slate-300' />
            </motion.div>
          ) : (
            <motion.div
              key='menu'
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <Menu className='h-4 w-4 text-slate-300' />
            </motion.div>
          )}
        </AnimatePresence>
      </Button>
    </div>
  );
};

export default MobileMenu;

export const MobileOverlay = ({ isOpen, setIsOpen }: NavbarUtils) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className='fixed inset-0 bg-slate-900/50 backdrop-blur-sm z-[-1] md:hidden'
          onClick={() => setIsOpen?.(false)}
          aria-hidden='true'
        />
      )}
    </AnimatePresence>
  );
};
