import { Link } from 'react-router-dom';
import { Button } from '../ui/button';
import { Download, Handshake, Mail } from 'lucide-react';

const CallToAction = () => {
  return (
    <div className='space-y-6'>
      <h3 className='flex items-center justify-center gap-2 text-2xl font-semibold text-slate-200'>
        <Handshake className='w-5 h-5 text-slate-300 m-0' />
        Let's work together
      </h3>
      <p className='text-slate-400 max-w-2xl mx-auto'>
        I'm open to new projects and collaborations. If you have something in
        mind, I'd be happy to hear about it.
      </p>
      <div className='flex flex-col sm:flex-row gap-4 items-center justify-center'>
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
        <Button
          asChild
          variant='outline'
          size='lg'
          className='group bg-transparent border-slate-600 text-slate-300 hover:bg-slate-800 hover:text-slate-100'
        >
          <a href='/cv.pdf' target='_blank' rel='noopener noreferrer'>
            View CV
            <Download className='w-4 h-4 ml-1 group-hover:translate-y-1 transition-transform duration-200' />
          </a>
        </Button>
      </div>
    </div>
  );
};

export default CallToAction;
