import { motion } from 'framer-motion';
import Hero from '@/pages/hero';
import { homeContainerVariants } from '@/db/home';
import SectionHeader from '@/components/section-header';
import CallToAction from '@/components/home/CallToAction';
import SectionsGrid from '@/components/home/sectionsGrid';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <Hero />

      {/* Sections Navigation */}
      <section className='py-20 bg-slate-800/50'>
        <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
          <motion.div
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true }}
            variants={homeContainerVariants}
            className='space-y-16'
          >
            {/* Section Header */}
            <SectionHeader
              titleOne='Explore My'
              titleTwo='Portfolio'
              paragraph='Discover my work, skills, and get in touch for exciting opportunities'
            />

            {/* Sections Grid */}
            <SectionsGrid />

            {/* Call to Action */}
            <CallToAction />
          </motion.div>
        </div>
      </section>
    </>
  );
}
