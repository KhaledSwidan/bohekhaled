import { itemVariants } from '@/db/about';
import { motion } from 'framer-motion';
import SkillsCard from './skills-card';

const Skills = () => {
  return (
    <motion.div variants={itemVariants}>
      <h3 className='text-2xl font-semibold text-center mb-8 text-slate-200'>
        Skills & Technologies
      </h3>
      <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-6'>
        <SkillsCard />
      </div>
    </motion.div>
  );
};

export default Skills;
