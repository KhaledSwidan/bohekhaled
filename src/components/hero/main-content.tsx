import { titles } from '@/db/hero';
import { AnimatePresence, domAnimation, LazyMotion, m } from 'framer-motion';
import { useEffect, useState } from 'react';

const MainContent = () => {
  const [currentTitle, setCurrentTitle] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTitle((prev) => (prev + 1) % titles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className='space-y-6'>
      <LazyMotion features={domAnimation}>
        <m.h1
          initial={{ opacity: 0, x: 15 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className='text-4xl md:text-6xl lg:text-7xl font-bold text-slate-50'
        >
          Hi, I'm{' '}
          <span className='font-extrabold bg-gradient-to-r from-zinc-600 via-slate-500 to-zinc-400 bg-clip-text text-transparent'>
            Khaled Swidan
          </span>
        </m.h1>

        <m.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className='h-16 flex items-center justify-center'
        >
          <AnimatePresence mode='wait'>
            <m.h2
              key={currentTitle}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              className='text-xl md:text-2xl lg:text-3xl text-slate-400 font-medium'
            >
              {titles[currentTitle]}
            </m.h2>
          </AnimatePresence>
        </m.div>

        <m.p
          initial={{ opacity: 0, x: 15 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className='text-lg md:text-xl text-zinc-300 max-w-2xl mx-auto leading-relaxed'
        >
          I enjoy building simple and reliable web interfaces with React.js,
          Next.js, and TypeScript.
        </m.p>
      </LazyMotion>
    </div>
  );
};

export default MainContent;
