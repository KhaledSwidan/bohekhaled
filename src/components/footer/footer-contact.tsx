import { socialLinks } from '@/db/footer';
import { motion } from 'framer-motion';

const FooterContact = () => {
  return (
    <div>
      <h4 className='font-semibold mb-4 text-slate-200'>Connect</h4>
      <div className='flex space-x-4'>
        {socialLinks.map((social, idx) => (
          <motion.a
            key={social.label ?? idx}
            href={social.href}
            target='_blank'
            rel='noopener noreferrer'
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className='p-2 rounded-full bg-slate-700/50 hover:bg-slate-600/50 transition-colors'
            aria-label={social.label}
          >
            <social.icon className='w-4 h-4 text-slate-300' />
          </motion.a>
        ))}
      </div>
    </div>
  );
};

export default FooterContact;
