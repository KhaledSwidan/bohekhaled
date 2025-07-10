import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { containerVariants } from '@/db/about';
import Content from '@/components/about/content';
import Skills from '@/components/about/skills';
import SectionHeader from '@/components/section-header';

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id='about' className='py-20 bg-slate-800/50'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        <motion.div
          ref={ref}
          initial='hidden'
          animate={inView ? 'visible' : 'hidden'}
          variants={containerVariants}
          className='space-y-16'
        >
          {/* Section Header */}
          <SectionHeader
            paragraph={`Passionate about creating exceptional digital experiences with modern web technologies`}
            titleOne={`About`}
            titleTwo={`Me`}
          />

          {/* About Content */}
          <Content />

          {/* Skills Grid */}
          <Skills />
        </motion.div>
      </div>
    </section>
  );
}
