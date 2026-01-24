import { Card, CardContent } from '../ui/card';
import { skills } from '@/db/about';
import { hoverVariants } from '@/utils/framer-motion';
import { m, type Variants } from 'framer-motion';

const SkillsCard = ({
  item,
  shouldReduceMotion,
}: {
  item: Variants;
  shouldReduceMotion: boolean;
}) => {
  return (
    <>
      {skills.map((skill, index) => (
        <m.div
          key={skill.category ?? index}
          variants={item}
          whileHover={shouldReduceMotion ? undefined : hoverVariants}
          className='group'
        >
          <Card className='h-full transition-all duration-300 hover:shadow-lg bg-gradient-to-br from-slate-700/50 via-slate-800/50 to-slate-900/30 border-0 rounded-lg'>
            <CardContent className='p-5 space-y-4'>
              <div className='flex items-center space-x-3'>
                <div className='p-2 rounded-md bg-slate-700/50 group-hover:bg-slate-600/50 transition-colors'>
                  <skill.icon className='w-5 h-5 text-slate-300' />
                </div>
                <h4 className='font-semibold text-slate-200'>
                  {skill.category}
                </h4>
              </div>
              <div className='flex flex-wrap gap-2'>
                {skill.items.map((skillItem) => (
                  <span
                    key={skillItem}
                    className='px-3 py-1 text-xs rounded-full bg-slate-700/50 text-slate-400'
                  >
                    {skillItem}
                  </span>
                ))}
              </div>
            </CardContent>
          </Card>
        </m.div>
      ))}
    </>
  );
};

export default SkillsCard;
