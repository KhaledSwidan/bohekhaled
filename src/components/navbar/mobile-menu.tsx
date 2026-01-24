// src/components/navbar/mobile-menu.tsx

import { Button } from '../ui/button';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

interface MobileMenuProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const MobileMenu = ({ isOpen, setIsOpen }: MobileMenuProps) => {
  return (
    <Button
      data-slot='mobile-menu'
      type='button'
      variant='outline'
      size='icon'
      className='md:hidden bg-slate-800/50 border-slate-700 hover:bg-slate-700/50 transition-all duration-300 mr-4'
      onClick={() => setIsOpen(!isOpen)}
      aria-expanded={isOpen}
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
  );
};

export default MobileMenu;
