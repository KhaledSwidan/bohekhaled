import { Link } from 'react-router-dom';
import { Button } from '../ui/button';
import { Mail } from 'lucide-react';

const CallToAction = () => {
  return (
    <div className='space-y-6'>
      <h3 className='text-2xl font-semibold text-slate-200'>
        Like what you see?
      </h3>
      <p className='text-slate-400 max-w-2xl mx-auto'>
        I'm always working on new projects and looking for exciting
        opportunities to collaborate.
      </p>
      <Button
        asChild
        size='lg'
        className='group bg-slate-700 hover:bg-slate-600 text-slate-100'
      >
        <Link to='/contact'>
          Let's Work Together
          <Mail className='w-4 h-4 ml-2 group-hover:-translate-x-1 transition-transform duration-200' />
        </Link>
      </Button>
    </div>
  );
};

export default CallToAction;
