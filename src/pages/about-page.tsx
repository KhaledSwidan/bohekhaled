import { domAnimation, LazyMotion, m } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Content from '@/components/about/content';
import Skills from '@/components/about/skills';
import SectionHeader from '@/components/section-header';
import { useAnimationVariants } from '@/hooks/useAnimationVariants';

export default function AboutPage() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
    rootMargin: '50px 0px',
  });

  const { container } = useAnimationVariants();

  return (
    <LazyMotion features={domAnimation} strict>
      <section id='about' className='py-20 bg-slate-800/50 min-h-screen'>
        <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
          <m.div
            ref={ref}
            initial='hidden'
            animate={inView ? 'visible' : 'hidden'}
            variants={container}
            className='space-y-16'
          >
            <SectionHeader
              paragraph='Working with modern web tools to build clear and reliable interfaces'
              titleOne='About'
              titleTwo='Me'
            />

            <Content />
            <Skills />
          </m.div>
        </div>
      </section>
    </LazyMotion>
  );
}
