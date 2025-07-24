import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { containerVariants } from '@/db/about';
import Content from '@/components/about/content';
import Skills from '@/components/about/skills';
import SectionHeader from '@/components/section-header';
import CallToAction from '@/components/about/CallToAction';

export default function AboutPage() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <>
      {/* About Content */}
      <section id='about' className='py-20 bg-slate-800/50 min-h-screen'>
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

            {/* Call to Action */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.6, delay: 0.8 },
                },
              }}
              className='text-center pt-8 border-t border-slate-700/30'
            >
              <CallToAction />
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
