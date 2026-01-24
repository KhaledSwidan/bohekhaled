import { homeItemVariants } from '@/db/home';
import { motion } from 'framer-motion';
import { Button } from '../ui/button';
import { Link } from 'react-router-dom';
import { Mail } from 'lucide-react';

const CallToAction = () => {
  return (
    <motion.div
      variants={homeItemVariants}
      className='text-center pt-8 border-t border-slate-700/30'
    >
      <p className='text-slate-400 max-w-2xl mx-auto mb-6'>
        Ready to start a project together? Let's create something amazing!
      </p>
      <Button
        asChild
        size='lg'
        className='bg-gradient-to-r from-slate-700 to-slate-800 hover:from-slate-600 hover:to-slate-700 text-slate-100 font-medium transition-all duration-300 hover:scale-105'
      >
        <Link to='/contact'>
          Get In Touch
          <Mail className='w-4 h-4 ml-2' />
        </Link>
      </Button>
    </motion.div>
  );
};

export default CallToAction;
