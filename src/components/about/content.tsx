import { itemVariants } from '@/utils/framer-motion';
import { m } from 'framer-motion';
import CallToAction from './CallToAction';

const Content = () => {
  return (
    <div className='grid lg:grid-cols-2 gap-12 items-center'>
      <m.div variants={itemVariants} className='space-y-6'>
        <h3 className='text-2xl font-semibold text-zinc-200'>My Journey</h3>
        <div className='space-y-0 text-slate-400'>
          <p>
            I'm a Frontend Developer working mainly with React.js and Next.js,
            focused on building clear and reliable user interfaces.
          </p>
          <p>
            I use TypeScript and ES6, with a basic working knowledge of MongoDB,
            to write clean, maintainable code.
          </p>
          <p>
            Outside of coding, I enjoy learning new tools, exploring better ways
            to build things, and sharing what I learn with other developers.
          </p>
        </div>
      </m.div>
      <m.div variants={itemVariants} className='text-center z-[49]'>
        <CallToAction />
      </m.div>
    </div>
  );
};

export default Content;
