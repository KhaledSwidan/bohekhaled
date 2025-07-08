import { titles } from '@/db/hero';
import { AnimatePresence, motion } from 'framer-motion';
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
    <AnimatePresence mode='wait'>
      {' '}
      <div className='space-y-6'>
        <motion.h1
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className='text-4xl md:text-6xl lg:text-7xl font-bold text-slate-50'
        >
          Hi, I'm{' '}
          <span className='font-extrabold bg-gradient-to-r from-zinc-600 via-slate-500 to-zinc-400 bg-clip-text text-transparent'>
            Khaled Swidan
          </span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className='h-16 flex items-center justify-center'
        >
          <motion.h2
            key={currentTitle}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className='text-xl md:text-2xl lg:text-3xl text-slate-400 font-medium'
          >
            {titles[currentTitle]}
          </motion.h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className='text-lg md:text-xl text-zinc-300 max-w-2xl mx-auto leading-relaxed'
        >
          I create beautiful, performant, and accessible web experiences using
          modern technologies like React.js, Next.js, and TypeScript.
        </motion.p>
      </div>
    </AnimatePresence>
  );
};

export default MainContent;
