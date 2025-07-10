import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { containerVariants } from '@/db/contact';
import SectionHeader from '@/components/contact/section-header';
import ContactForm from '@/components/contact/contact-form';
import ContactInfo from '@/components/contact/contact-info';

export default function Contact() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <>
      <section id='contact' className='py-20 bg-slate-800/50'>
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

            <div className='grid lg:grid-cols-2 gap-12'>
              {/* Contact Form */}
              <ContactForm />

              {/* Contact Information */}
              <ContactInfo />
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
