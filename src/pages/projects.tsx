import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { containerVariants } from '@/db/projects';
import SectionHeader from '@/components/projects/section-header';
import FeaturedProjects from '@/components/projects/featured-projects';
import OtherProjects from '@/components/projects/other-projects';

export default function Projects() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id='projects' className='py-20 bg-zinc-900'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        <motion.div
          ref={ref}
          initial='hidden'
          animate={inView ? 'visible' : 'hidden'}
          variants={containerVariants}
          className='space-y-16'
        >
          {/* Section Header */}
          <SectionHeader />

          {/* Featured Projects */}
          <FeaturedProjects />

          {/* Other Projects Grid */}
          <OtherProjects />
        </motion.div>
      </div>
    </section>
  );
}
