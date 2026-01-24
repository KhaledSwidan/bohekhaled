import { Download, Mail } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '../ui/button';
import { useNavigate } from 'react-router';

const CTAButtons = () => {
  const navigate = useNavigate();

  const goToContact = () => {
    navigate('/contact');
  };
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.7 }}
      className='flex flex-col sm:flex-row gap-4 items-center justify-center'
    >
      <Button
        onClick={goToContact}
        size='lg'
        className='group bg-slate-700 hover:bg-slate-600 text-slate-100 backdrop-blur-sm'
      >
        Get In Touch
        <Mail className='w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform' />
      </Button>
      <Button
        variant='outline'
        size='lg'
        className='group bg-transparent border-slate-600 text-slate-300 hover:bg-slate-800 hover:text-slate-100 backdrop-blur-sm'
        onClick={() => window.open('/cv.pdf', '_blank')}
      >
        Download CV
        <Download className='w-4 h-4 ml-2 group-hover:translate-y-1 transition-transform' />
      </Button>
    </motion.div>
  );
};

export default CTAButtons;
