import { motion } from 'framer-motion';
import { itemVariants } from '@/db/contact';

const SectionHeader = () => {
  return (
    <motion.div variants={itemVariants} className='text-center space-y-4'>
      <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold text-zinc-300'>
        Get In{' '}
        <span className='bg-gradient-to-r from-stone-500 via-stone-400 to-stone-300 bg-clip-text text-transparent'>
          Touch
        </span>
      </h2>
      <p className='text-lg text-zinc-400 max-w-2xl mx-auto'>
        Let's discuss your next project or just say hello!
      </p>
    </motion.div>
  );
};

export default SectionHeader;
