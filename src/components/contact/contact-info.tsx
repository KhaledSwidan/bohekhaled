import { infoVariants, cardVariants } from '@/db/contact';
import { contactInfo } from '@/db/contact';
import { motion } from 'framer-motion';
import { MapPin, Clock, Globe } from 'lucide-react';
import { Card, CardContent } from '../ui/card';

const ContactInfo = () => {
  return (
    <motion.div variants={infoVariants} className='space-y-8'>
      {/* Introduction */}
      <motion.div variants={cardVariants} className='space-y-4'>
        <h3 className='text-2xl font-semibold text-slate-100'>Let's Connect</h3>
        <p className='text-slate-400 leading-relaxed'>
          I'm always interested in hearing about new opportunities and exciting
          projects. Whether you're a company looking to hire, or someone looking
          to collaborate, I'd love to hear from you.
        </p>
      </motion.div>

      {/* Contact Methods */}
      <motion.div variants={cardVariants} className='space-y-4'>
        <h4 className='text-lg font-medium text-slate-200 mb-4'>
          Get in touch
        </h4>

        <motion.div
          className='space-y-3'
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
        >
          {contactInfo.map((info, index) => (
            <motion.a
              key={info.title ?? index}
              href={info.href}
              target={info.href.startsWith('http') ? '_blank' : undefined}
              rel={
                info.href.startsWith('http') ? 'noopener noreferrer' : undefined
              }
              variants={cardVariants}
              whileHover='hover'
              whileTap='tap'
              className='flex items-center space-x-4 p-4 rounded-xl bg-slate-800/30 hover:bg-slate-700/40 border border-slate-700/30 hover:border-slate-600/50 transition-all duration-300 group backdrop-blur-sm'
            >
              <div className='p-3 rounded-lg bg-slate-700/50 group-hover:bg-slate-600/60 transition-colors duration-300'>
                <info.icon className='w-5 h-5 text-slate-300 group-hover:text-slate-200 transition-colors duration-300' />
              </div>
              <div className='flex-1'>
                <h5 className='font-medium text-slate-200 group-hover:text-slate-100 transition-colors duration-300'>
                  {info.title}
                </h5>
                <p className='text-slate-400 group-hover:text-slate-300 transition-colors duration-300 text-sm'>
                  {info.value}
                </p>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </motion.div>

      {/* Additional Info Cards */}
      <motion.div
        className='grid gap-4'
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.1,
            },
          },
        }}
      >
        {/* Availability */}
        <motion.div variants={cardVariants}>
          <Card className='bg-slate-800/30 border-slate-700/50 backdrop-blur-sm'>
            <CardContent className='p-4'>
              <div className='flex items-center space-x-3'>
                <div className='p-2 rounded-lg bg-green-500/20'>
                  <Clock className='w-4 h-4 text-green-400' />
                </div>
                <div>
                  <h5 className='font-medium text-slate-200 text-sm'>
                    Availability
                  </h5>
                  <p className='text-slate-400 text-xs'>
                    Available for new projects
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Response Time */}
        <motion.div variants={cardVariants}>
          <Card className='bg-slate-800/30 border-slate-700/50 backdrop-blur-sm'>
            <CardContent className='p-4'>
              <div className='flex items-center space-x-3'>
                <div className='p-2 rounded-lg bg-blue-500/20'>
                  <Globe className='w-4 h-4 text-blue-400' />
                </div>
                <div>
                  <h5 className='font-medium text-slate-200 text-sm'>
                    Response Time
                  </h5>
                  <p className='text-slate-400 text-xs'>
                    Usually within 24 hours
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>

      {/* Location Map Placeholder */}
      <motion.div
        variants={cardVariants}
        whileHover='hover'
        className='relative h-64 rounded-xl bg-slate-800/30 border border-slate-700/50 overflow-hidden group backdrop-blur-sm'
      >
        <div className='absolute inset-0 bg-gradient-to-br from-slate-700/20 to-slate-800/40' />
        <div className='absolute inset-0 flex items-center justify-center'>
          <div className='text-center space-y-3'>
            <div className='p-4 rounded-full bg-slate-700/50 mx-auto w-fit'>
              <MapPin className='w-8 h-8 text-slate-300' />
            </div>
            <div>
              <h5 className='font-medium text-slate-200'>
                Based in Alexandria, Egypt
              </h5>
              <p className='text-slate-400 text-sm'>
                Available for remote work worldwide
              </p>
            </div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className='absolute top-4 right-4 w-2 h-2 bg-green-400 rounded-full animate-pulse' />
        <div className='absolute bottom-4 left-4 w-1 h-1 bg-slate-400 rounded-full' />
        <div className='absolute top-1/2 left-1/4 w-1 h-1 bg-slate-500 rounded-full' />
      </motion.div>
    </motion.div>
  );
};

export default ContactInfo;
