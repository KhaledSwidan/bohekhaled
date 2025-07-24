import { Link } from 'react-router-dom';
import { Button } from '../ui/button';
import { Download, Mail } from 'lucide-react';

const CallToAction = () => {
  return (
    <div className='space-y-6'>
      <h3 className='text-2xl font-semibold text-slate-200'>
        Ready to work together?
      </h3>
      <p className='text-slate-400 max-w-2xl mx-auto'>
        I'm always interested in hearing about new opportunities and exciting
        projects.
      </p>
      <div className='flex flex-col sm:flex-row gap-4 items-center justify-center'>
        <Button
          asChild
          size='lg'
          className='group bg-slate-700 hover:bg-slate-600 text-slate-100'
        >
          <Link to='/contact'>
            Get In Touch
            <Mail className='w-4 h-4 ml-2 group-hover:-translate-x-1 transition-transform duration-200' />
          </Link>
        </Button>
        <Button
          variant='outline'
          size='lg'
          className='group bg-transparent border-slate-600 text-slate-300 hover:bg-slate-800 hover:text-slate-100'
          onClick={() => window.open('/cv.pdf', '_blank')}
        >
          Download CV
          <Download className='w-4 h-4 ml-1 group-hover:translate-y-1 transition-transform duration-200' />
        </Button>
      </div>
    </div>
  );
};

export default CallToAction;
