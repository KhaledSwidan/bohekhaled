import { domAnimation, LazyMotion, m } from 'framer-motion';
import { containerVariants } from '@/db/projects';
import { useInView } from 'react-intersection-observer';
import FeaturedProjects from '@/components/projects/featured-projects';
import OtherProjects from '@/components/projects/other-projects';
import SectionHeader from '@/components/section-header';
import CallToAction from '@/components/projects/CallToAction';

export default function ProjectsPage() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
    rootMargin: '50px 0px',
  });

  return (
    <LazyMotion features={domAnimation} strict>
      <section id='projects' className='py-20 bg-slate-800/50 min-h-screen'>
        <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
          <m.div
            ref={ref}
            initial='hidden'
            animate={inView ? 'visible' : 'hidden'}
            variants={containerVariants}
            className='space-y-16'
          >
            {/* Section Header */}
            <SectionHeader
              titleOne={`My`}
              titleTwo={`Projects`}
              paragraph={`A showcase of my recent work and side projects`}
            />

            {/* Featured Projects */}
            <FeaturedProjects />

            {/* Other Projects Grid */}
            <OtherProjects />

            {/* Call to Action */}
            <m.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.6, delay: 0.8 },
                },
              }}
              className='text-center pt-8 border-t-2 border-slate-700/30 border-zinc-800'
            >
              <CallToAction />
            </m.div>
          </m.div>
        </div>
      </section>
    </LazyMotion>
  );
}
