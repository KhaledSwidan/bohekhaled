import { itemVariants } from '@/db/projects';
import { motion } from 'framer-motion';

const SectionHeader = () => {
  return (
    <motion.div variants={itemVariants} className='text-center space-y-4'>
      <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold text-zinc-300'>
        Featured Projects
      </h2>
      <p className='text-lg text-zinc-400 max-w-2xl mx-auto'>
        A showcase of my recent work and side projects
      </p>
    </motion.div>
  );
};

export default SectionHeader;
