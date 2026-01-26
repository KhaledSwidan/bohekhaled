import { Heart, Github, Calendar, ExternalLink } from 'lucide-react';
import { memo } from 'react';

const techStack = ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'];

const FooterEnd = memo(() => {
  const currentYear = new Date().getFullYear();
  const lastUpdateDate = new Date('2026-01-26');
  const lastUpdated = lastUpdateDate.toLocaleDateString('en-US', {
    month: 'short',
    year: 'numeric',
  });

  return (
    <div className='border-t border-slate-700 mt-8 pt-8 rounded-sm'>
      <div className='flex flex-col sm:flex-row justify-between items-center gap-4 mb-3'>
        <p className='text-slate-400 text-sm text-center sm:text-left'>
          © {currentYear}{' '}
          <span className='font-semibold bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent'>
            Khaled A. Swidan
          </span>
          . All rights reserved.
        </p>

        <p className='text-slate-400 text-sm flex items-center gap-1'>
          Built with{' '}
          <Heart
            className='w-4 h-4 text-red-500 fill-red-500 animate-pulse'
            aria-label='love'
          />
        </p>
      </div>

      {/* Tech stack & meta */}
      <div className='flex flex-col sm:flex-row items-center justify-center sm:justify-between gap-3 text-xs text-slate-500 pt-3 border-t border-slate-800'>
        {/* Tech Stack */}
        <div className='flex items-center gap-1.5 flex-wrap justify-center'>
          {techStack.map((tech, index) => (
            <span key={tech} className='flex items-center'>
              <span className='hover:text-slate-300 transition-colors'>
                {tech}
              </span>
              {index < techStack.length - 1 && (
                <span className='text-slate-700 mx-1.5'>•</span>
              )}
            </span>
          ))}
        </div>

        {/* Links & Info */}
        <div className='flex items-center gap-3 flex-wrap justify-center'>
          <a
            href='https://github.com/KhaledSwidan/portfolio'
            target='_blank'
            rel='noopener noreferrer'
            className='group flex items-center gap-1.5 text-slate-400 hover:text-purple-400 transition-colors duration-300'
          >
            <Github className='w-4 h-4' />
            View Source
            <ExternalLink
              className='w-3 h-3 opacity-0 translate-x-[-4px] scale-95
               group-hover:opacity-100
               group-hover:translate-x-0
               group-hover:scale-100
               transition-all duration-300 ease-in-out
               motion-reduce:transition-none
               motion-reduce:transform-none'
            />
          </a>

          <span className='text-slate-700'>•</span>

          <span className='font-mono'>v1.0.0</span>

          <span className='text-slate-700'>•</span>

          <span
            className='flex items-center gap-1'
            title={lastUpdateDate.toLocaleDateString('en-US', {
              dateStyle: 'long',
            })}
          >
            <Calendar className='w-3 h-3' />
            Updated {lastUpdated}
          </span>
        </div>
      </div>
    </div>
  );
});

FooterEnd.displayName = 'FooterEnd';

export default FooterEnd;
