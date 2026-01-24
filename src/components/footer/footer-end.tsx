import { Heart } from 'lucide-react';

const FooterEnd = () => {
  return (
    <div className='border-t border-slate-700 mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0'>
      <p className='text-slate-400 text-sm'>
        © {new Date().getFullYear()}{' '}
        <span className='font-bold bg-gradient-to-r from-purple-400 via-violet-500 to-purple-600 bg-clip-text text-transparent'>
          Khaled A.Swidan
        </span>
        , All rights reserved.
      </p>
      <p className='text-slate-400 text-sm flex items-center'>
        Made with <Heart className='w-4 h-4 mx-1 text-red-500' /> using React &
        TypeScript
      </p>
    </div>
  );
};

export default FooterEnd;
