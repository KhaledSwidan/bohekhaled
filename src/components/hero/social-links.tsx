import { socialLinks } from '@/db/hero';
import { domAnimation, LazyMotion, m } from 'framer-motion';

const SocialLinks = () => {
  return (
    <LazyMotion features={domAnimation}>
      {' '}
      <m.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className='flex items-center justify-center space-x-6'
      >
        {socialLinks.map(({ icon: Icon, href, label }) => (
          <m.a
            key={label}
            href={href}
            target='_blank'
            rel='noopener noreferrer'
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className='p-3 rounded-full bg-slate-800/50 hover:bg-slate-700/50 transition-colors border border-slate-700 hover:border-slate-600 backdrop-blur-sm'
            aria-label={label}
          >
            <Icon className='w-6 h-6 text-slate-300' />
          </m.a>
        ))}
      </m.div>
    </LazyMotion>
  );
};

export default SocialLinks;
