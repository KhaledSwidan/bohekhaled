import SkillsCard from './skills-card';
import { useAnimationVariants } from '@/hooks/useAnimationVariants';
import { m } from 'framer-motion';

const Skills = () => {
  const { container, item, shouldReduceMotion } = useAnimationVariants();

  return (
    <div className='pt-8 border-t border-slate-700/30'>
      <div className='space-y-0 lg:text-center text-left mb-8'>
        <h3 className='text-2xl font-semibold text-slate-200 mb-0'>
          What I Work With
        </h3>
        <div className=' text-slate-400 max-w-3xl mx-auto'>
          <p>
            A practical overview of the tools and technologies I use in my daily
            work, focusing on building reliable and maintainable web interfaces.
          </p>
        </div>
      </div>
      <m.div
        initial='hidden'
        whileInView='visible'
        variants={container}
        viewport={{ once: true, amount: 0.15, margin: '0px 0px -100px 0px' }}
        className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6'
      >
        <SkillsCard item={item} shouldReduceMotion={shouldReduceMotion} />
      </m.div>
    </div>
  );
};

export default Skills;
