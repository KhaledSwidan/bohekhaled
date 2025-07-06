'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Mail, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { scrollToAbout, scrollToContact, titles } from '@/db/hero';
import BackgroundAnimation from '@/components/hero/background-animation';

export default function Hero() {
  const [currentTitle, setCurrentTitle] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTitle((prev) => (prev + 1) % titles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id='home'
      className='min-h-screen flex items-center justify-center relative overflow-hidden bg-slate-900'
    >
      {/* Enhanced Background Animation */}
      <BackgroundAnimation />

      <div className='container mx-auto px-4 sm:px-6 lg:px-8 text-center pt-16 relative z-10'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className='space-y-8'
        >
          {/* Profile Image */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className='w-28 h-28 mx-auto mb-8'
          >
            <div className='w-full h-full rounded-full bg-gradient-to-br from-slate-600 to-slate-800 p-1 shadow-2xl'>
              <div className='w-full h-full rounded-full bg-slate-900 flex items-center justify-center'>
                <span className='text-4xl font-bold text-slate-200'>KS</span>
              </div>
            </div>
          </motion.div>

          {/* Main Content */}
          <div className='space-y-6'>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className='text-4xl md:text-6xl lg:text-7xl font-bold text-slate-50'
            >
              Hi, I'm{' '}
              <span className='bg-gradient-to-r from-slate-200 to-slate-400 bg-clip-text text-transparent'>
                Khaled Swidan
              </span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
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
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className='text-lg md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed'
            >
              I create beautiful, performant, and accessible web experiences
              using modern technologies like React.js, Next.js, and TypeScript.
            </motion.p>
          </div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className='flex items-center justify-center space-x-6'
          >
            {[
              {
                icon: Github,
                href: 'https://github.com/KhaledSwidan',
                label: 'GitHub',
              },
              {
                icon: Linkedin,
                href: 'https://www.linkedin.com/in/bohemiancoder/',
                label: 'LinkedIn',
              },
              {
                icon: Mail,
                href: 'mailto:khaledqutb4@gmail.com',
                label: 'Email',
              },
            ].map(({ icon: Icon, href, label }) => (
              <motion.a
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
              </motion.a>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className='flex flex-col sm:flex-row gap-4 items-center justify-center'
          >
            <Button
              onClick={scrollToContact}
              size='lg'
              className='group bg-slate-700 hover:bg-slate-600 text-slate-100 backdrop-blur-sm'
            >
              Get In Touch
              <Mail className='w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform' />
            </Button>
            <Button
              variant='outline'
              size='lg'
              className='group bg-transparent border-slate-600 text-slate-300 hover:bg-slate-800 hover:text-slate-100 backdrop-blur-sm'
              onClick={() => window.open('/cv.pdf', '_blank')}
            >
              Download CV
              <Download className='w-4 h-4 ml-2 group-hover:translate-y-1 transition-transform' />
            </Button>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          onClick={scrollToAbout}
          className='absolute bottom-8 left-1/2 transform -translate-x-1/2 text-slate-400 hover:text-slate-200 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 rounded-full p-2'
          aria-label='Scroll to about section'
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          >
            <ArrowDown className='w-6 h-6' />
          </motion.div>
        </motion.button>
      </div>
    </section>
  );
}
