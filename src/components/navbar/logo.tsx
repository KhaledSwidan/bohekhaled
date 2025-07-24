// src/components/navbar/logo.tsx

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

interface LogoProps {
  navigateToSection: (href: string) => void;
}

const Logo = ({ navigateToSection }: LogoProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      whileHover={{ scale: 1.05 }}
      className='cursor-pointer'
    >
      <Button
        onClick={() => navigateToSection('/')}
        className='text-2xl font-bold bg-gradient-to-r from-slate-200 to-slate-400 bg-clip-text text-transparent hover:from-slate-100 hover:to-slate-400 transition-all duration-300 p-2 border-0'
        aria-label='Go to homepage'
      >
        &lt;BoheK /&gt;
      </Button>
    </motion.div>
  );
};

export default Logo;
