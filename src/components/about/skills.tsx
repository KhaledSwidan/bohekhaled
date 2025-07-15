import { itemVariants, skills } from '@/db/about';
import { motion } from 'framer-motion';
import { Card, CardContent } from '../ui/card';

const Skills = () => {
  return (
    <motion.div variants={itemVariants}>
      <h3 className='text-2xl font-semibold text-center mb-8 text-slate-200'>
        Skills & Technologies
      </h3>
      <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-6'>
        {skills.map((skill, index) => (
          <motion.div
            key={skill.category ?? index}
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
            className='group'
          >
            <Card className='h-full transition-all duration-300 hover:shadow-lg bg-gradient-to-br from-slate-700/50 via-slate-800/50 to-slate-900/30 border-slate-700 hover:border-slate-600'>
              <CardContent className='p-6 space-y-4'>
                <div className='flex items-center space-x-3'>
                  <div className='p-2 rounded-lg bg-slate-700/50 group-hover:bg-slate-600/50 transition-colors'>
                    <skill.icon className='w-5 h-5 text-slate-300' />
                  </div>
                  <h4 className='font-semibold text-slate-200'>
                    {skill.category}
                  </h4>
                </div>
                <div className='flex flex-wrap gap-2'>
                  {skill.items.map((item) => (
                    <span
                      key={item}
                      className='px-3 py-1 text-xs rounded-full bg-slate-700/50 text-slate-400'
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Skills;
