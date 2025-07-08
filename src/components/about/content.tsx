import { itemVariants } from '@/db/about';
import { motion } from 'framer-motion';

const Content = () => {
  return (
    <div className='grid lg:grid-cols-2 gap-12 items-center'>
      <motion.div variants={itemVariants} className='space-y-6'>
        <h3 className='text-2xl font-semibold text-zinc-200'>My Journey</h3>
        <div className='space-y-4 text-slate-400'>
          <p>
            I'm a passionate Frontend Developer with expertise in React.js,
            Next.js, and modern web technologies. I love turning complex
            problems into simple, beautiful, and intuitive solutions.
          </p>
          <p>
            With a strong foundation in TypeScript, MongoDB, and ES6, I focus on
            writing clean, maintainable code that delivers exceptional user
            experiences. I'm always eager to learn new technologies and stay
            up-to-date with industry best practices.
          </p>
          <p>
            When I'm not coding, you can find me exploring new technologies,
            contributing to open-source projects, or sharing knowledge with the
            developer community.
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default Content;
