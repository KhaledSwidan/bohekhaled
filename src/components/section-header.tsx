import { motion, type Variants } from 'framer-motion';

const headerVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: 'easeOut',
    },
  },
};

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
  return (
    <motion.header
      initial='hidden'
      whileInView='visible'
      variants={headerVariants}
      className='text-center space-y-6'
    >
      <div className='space-y-4'>
        <motion.h2
          className='text-3xl md:text-4xl lg:text-5xl font-bold text-slate-100'
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.6 },
            },
          }}
        >
          {titleOne}{' '}
          <span className='bg-gradient-to-r from-slate-400 via-slate-300 to-slate-400 bg-clip-text text-transparent'>
            {titleTwo}
          </span>
        </motion.h2>

        <motion.p
          className='text-lg md:text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed'
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.6, delay: 0.2 },
            },
          }}
        >
          {paragraph}
        </motion.p>
      </div>

      {/* Decorative element */}
      <motion.div
        className='flex justify-center'
        variants={{
          hidden: { opacity: 0, scale: 0.8 },
          visible: {
            opacity: 1,
            scale: 1,
            transition: { duration: 0.6, delay: 0.4 },
          },
        }}
      >
        <div className='w-24 h-1 bg-gradient-to-r from-transparent via-slate-400 to-transparent rounded-full' />
      </motion.div>
    </motion.header>
  );
};

export default SectionHeader;
