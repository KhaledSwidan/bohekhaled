import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

interface LogoProps {
  scrollToSection: (href: string) => void;
}

const Logo = ({ scrollToSection }: LogoProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      whileHover={{ scale: 1.05 }}
      className='cursor-pointer'
    >
      <Button
        onClick={() => scrollToSection('#home')}
        variant="ghost"
        className='text-2xl font-bold bg-gradient-to-r from-slate-200 to-slate-400 bg-clip-text text-transparent hover:from-slate-100 hover:to-slate-400 transition-all duration-300 p-2 hover:bg-transparent'
        aria-label='Go to homepage'
      >
        KS
      </Button>
    </motion.div>
  );
};

export default Logo;
