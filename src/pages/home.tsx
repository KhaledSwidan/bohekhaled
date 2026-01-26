import { domAnimation, LazyMotion, m } from 'framer-motion';
import Hero from '@/pages/hero';
import SectionHeader from '@/components/section-header';
import CallToAction from '@/components/home/CallToAction';
import SectionsGrid from '@/components/home/sectionsGrid';
import { useAnimationVariants } from '@/hooks/useAnimationVariants';

export default function Home() {
  const { container } = useAnimationVariants();
  return (
    <>
      <Hero />
      <section className='py-20 bg-slate-800/50'>
        <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
          <LazyMotion features={domAnimation}>
            <m.div
              initial='hidden'
              whileInView='visible'
              viewport={{ once: true }}
              variants={container}
              className='space-y-16'
            >
              <SectionHeader
                titleOne="Let's Build Something"
                titleTwo='Together'
                paragraph="Here's a snapshot of my work, the skills behind it, and how we can turn ideas into real products"
              />
              <SectionsGrid />
              <CallToAction />
            </m.div>
          </LazyMotion>
        </div>
      </section>
    </>
  );
}
