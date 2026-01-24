import {
  homeContainerVariants,
  homeItemVariants,
  homeSections,
} from '@/db/home';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const SectionsGrid = () => {
  return (
    <motion.div
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true, amount: 0.2 }}
      variants={homeContainerVariants}
      className='grid sm:grid-cols-2 lg:grid-cols-3 gap-8'
    >
      {homeSections.map((section, index) => (
        <motion.div
          key={section.title ?? index}
          variants={homeItemVariants}
          whileHover={{ y: -6, scale: 1.015 }}
          transition={{ type: 'spring', stiffness: 200, damping: 20 }}
          className='group will-change-transform transform-gpu'
        >
          <Card className='h-full flex flex-col justify-between border border-slate-700/50 hover:border-slate-600/50 bg-clip-padding bg-gradient-to-br from-zinc-800/40 to-zinc-900/40 backdrop-blur-sm backdrop-saturate-150 shadow-md hover:shadow-2xl hover:shadow-slate-900/20 transition-all duration-300 rounded-2xl'>
            <CardHeader className='space-y-4'>
              <div
                className={`w-16 h-16 rounded-2xl ${section.bgColor} flex items-center justify-center transition-colors duration-300`}
              >
                <section.icon className='w-8 h-8 text-slate-300 group-hover:text-slate-100 transition-colors duration-300' />
              </div>
              <CardTitle className='text-2xl font-semibold text-slate-200 group-hover:text-white transition-colors duration-300'>
                {section.title}
              </CardTitle>
            </CardHeader>

            <CardContent className='space-y-6 mt-auto'>
              <p className='text-slate-400 group-hover:text-slate-300 transition-colors duration-300 leading-relaxed'>
                {section.description}
              </p>

              <Button
                asChild
                className='w-full group/btn bg-gradient-to-r from-slate-700 to-slate-800 hover:from-slate-600 hover:to-slate-700 text-slate-100 font-medium transition-all duration-300'
              >
                <Link to={section.link}>
                  Explore
                  <ArrowRight className='w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform duration-300' />
                </Link>
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default SectionsGrid;
