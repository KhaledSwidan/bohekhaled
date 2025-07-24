import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { contactVariants } from '@/db/contact';
import ContactForm from '@/components/contact/contact-form';
import ContactInfo from '@/components/contact/contact-info';
import SectionHeader from '@/components/section-header';

export default function ContactPage() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <>
      {/* Contact Content */}
      <section
        id='contact'
        className='py-20 bg-slate-900 relative overflow-hidden min-h-screen'
        aria-labelledby='contact-heading'
      >
        {/* Background decoration */}
        <div className='absolute inset-0 bg-gradient-to-br from-purple-800/20 via-transparent to-green-700/20' />
        <div className='absolute top-1/4 left-1/4 w-64 h-64 bg-violet-700/10 rounded-full blur-3xl' />
        <div className='absolute bottom-1/4 right-1/4 w-96 h-96 bg-green-600/5 rounded-full blur-3xl' />

        <div className='container mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
          <motion.div
            ref={ref}
            initial='hidden'
            animate={inView ? 'visible' : 'hidden'}
            variants={contactVariants}
            className='space-y-16'
          >
            {/* Section Header */}
            <SectionHeader
              paragraph={`Ready to bring your ideas to life? Let's discuss your next project or just say hello!`}
              titleOne={`Get In`}
              titleTwo={`Touch`}
            />

            {/* Main Content */}
            <div className='grid lg:grid-cols-2 gap-12 xl:gap-16 items-start'>
              {/* Contact Form */}
              <div className='order-2 lg:order-1'>
                <ContactForm />
              </div>

              {/* Contact Information */}
              <div className='order-1 lg:order-2'>
                <ContactInfo />
              </div>
            </div>

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
              <p className='text-slate-400 max-w-2xl mx-auto'>
                Prefer a different way to connect? Feel free to reach out
                through any of the methods above. I'm always excited to discuss
                new opportunities and creative projects.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
