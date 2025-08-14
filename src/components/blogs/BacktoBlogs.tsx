import { Button } from '../ui/button';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const BacktoBlogs = () => {
  return (
    <Button
      asChild
      variant='ghost'
      size='sm'
      className='group flex items-center hover:text-slate-300 text-slate-400 ml-2 transition-colors'
    >
      <Link
        to='/blogs'
        aria-label='Back to blogs page'
        className='flex items-center'
      >
        <ArrowLeft className='h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1' />
        Back to Blogs
      </Link>
    </Button>
  );
};

export default BacktoBlogs;
