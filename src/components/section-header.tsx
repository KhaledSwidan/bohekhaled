import { m } from 'framer-motion';
import { decorVariants } from '@/utils/framer-motion';
import { useAnimationVariants } from '@/hooks/useAnimationVariants';

interface SectionHeaderProps {
  titleOne: string;
  titleTwo: string;
  paragraph: string;
}

const SectionHeader = ({
  titleOne,
  titleTwo,
  paragraph,
}: SectionHeaderProps) => {
  const { container, item, shouldReduceMotion } = useAnimationVariants();

  return (
    <m.header
      initial='hidden'
      whileInView='visible'
      variants={container}
      viewport={{ once: true, amount: 0.3, margin: '50px' }}
      className='text-center space-y-6'
    >
      {/* Container واحد بس للعناصر المتشابهة */}
      <m.div className='space-y-4' variants={item}>
        <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold text-slate-100'>
          {titleOne}
          {titleTwo && (
            <span className='bg-gradient-to-r from-slate-400 via-slate-300 to-slate-400 bg-clip-text text-transparent'>
              {titleTwo}
            </span>
          )}
        </h2>

        <p className='text-lg md:text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed'>
          {paragraph}
        </p>
      </m.div>

      {/* Decorative element */}
      <m.div
        className='flex justify-center'
        variants={shouldReduceMotion ? item : decorVariants}
      >
        <div className='w-24 h-1 bg-gradient-to-r from-transparent via-slate-400 to-transparent rounded-full' />
      </m.div>
    </m.header>
  );
};

export default SectionHeader;
