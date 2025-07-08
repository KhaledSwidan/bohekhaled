import { itemVariants } from '@/db/about';
import { motion } from 'framer-motion';

const SectionHeader = () => {
  return (
    <motion.div variants={itemVariants} className='text-center space-y-4'>
      <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold text-zinc-300'>
        About Me
      </h2>
      <p className='text-lg text-zinc-400 max-w-2xl mx-auto'>
        Passionate about creating exceptional digital experiences with modern
        web technologies
      </p>
    </motion.div>
  );
};

export default SectionHeader;
