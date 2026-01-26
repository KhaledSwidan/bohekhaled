import { m } from 'framer-motion';
import { Button } from '../ui/button';
import { Link } from 'react-router-dom';
import { Mail } from 'lucide-react';
import { useAnimationVariants } from '@/hooks/useAnimationVariants';

const CallToAction = () => {
  const { item } = useAnimationVariants();
  return (
    <m.div
      variants={item}
      className='text-center pt-8 border-t border-slate-700/30'
    >
      <p className='text-slate-400 max-w-2xl mx-auto mb-6'>
        Ready to start a project together? Let's create something amazing!
      </p>
      <Button
        asChild
        size='lg'
        className='group bg-slate-700 hover:bg-slate-600 text-slate-100'
      >
        <Link to='/contact'>
          Let's Talk
          <Mail className='w-4 h-4 ml-2 group-hover:-translate-x-1 transition-transform duration-200' />
        </Link>
      </Button>
    </m.div>
  );
};

export default CallToAction;
