import { itemVariants } from '@/db/contact';
import { contactInfo } from '@/db/contact';
import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';

const ContactInfo = () => {
  return (
    <motion.div variants={itemVariants} className='space-y-8'>
      <div>
        <h3 className='text-2xl font-semibold mb-6 text-stone-200'>
          Let's connect
        </h3>
        <p className='text-stone-400 mb-8'>
          I'm always interested in hearing about new opportunities and projects.
          Whether you're a company looking to hire, or you're someone looking to
          collaborate, I'd love to hear from you.
        </p>
      </div>

      <div className='space-y-6'>
        {contactInfo.map((info) => (
          <motion.a
            key={info.title}
            href={info.href}
            target={info.href.startsWith('http') ? '_blank' : undefined}
            rel={
              info.href.startsWith('http') ? 'noopener noreferrer' : undefined
            }
            whileHover={{ x: 5 }}
            className='flex items-center space-x-4 p-4 rounded-lg hover:bg-stone-800/50 transition-colors group'
          >
            <div className='p-3 rounded-full bg-stone-700/50 group-hover:bg-stone-600/50 transition-colors'>
              <info.icon className='w-5 h-5 text-stone-300' />
            </div>
            <div>
              <h4 className='font-medium text-stone-200'>{info.title}</h4>
              <p className='text-stone-400'>{info.value}</p>
            </div>
          </motion.a>
        ))}
      </div>

      {/* Map placeholder */}
      <motion.div
        variants={itemVariants}
        className='mt-8 h-64 rounded-lg bg-stone-800/50 flex items-center justify-center border border-stone-700/50'
      >
        <div className='text-center space-y-2'>
          <MapPin className='w-8 h-8 text-stone-400 mx-auto' />
          <p className='text-stone-400'>Interactive map coming soon</p>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ContactInfo;
