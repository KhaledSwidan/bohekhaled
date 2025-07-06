import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import type { NavbarUtils } from '@/utils/navbar-utils';

const Logo = ({ scrollToSection }: NavbarUtils) => {
  return (
    <motion.div
      initial={{ scale: 0.8, rotate: -5, opacity: 0 }}
      animate={{ scale: 1, rotate: 0, opacity: 1 }}
      whileHover={{ scale: 1.1, rotate: 1 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className='hover:cursor-pointer'
    >
      <Button
        type='button'
        onClick={() => scrollToSection?.('#home')}
        className='text-2xl font-bold bg-gradient-to-r from-slate-200 to-slate-400 bg-clip-text text-transparent hover:from-slate-100 hover:to-slate-400 transition-all duration-300 focus:outline-none border-0 outline-0 px-2 py-1'
        aria-label='Go to homepage'
      >
        BoheK
      </Button>
    </motion.div>
  );
};

export default Logo;
