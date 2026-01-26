import { Download, Mail } from 'lucide-react';
import { domAnimation, LazyMotion, m, type Variants } from 'framer-motion';
import { Button } from '../ui/button';
import { Link } from 'react-router-dom';
import { useAnimationVariants } from '@/hooks/useAnimationVariants';

const buttonVariants: Variants = {
  hidden: { opacity: 0, y: 15, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: 'spring',
      stiffness: 200,
      damping: 20,
    },
  },
};

const CTAButtons = () => {
  const { container, shouldReduceMotion } = useAnimationVariants();

  const adaptiveButton = shouldReduceMotion
    ? { hidden: { opacity: 0 }, visible: { opacity: 1 } }
    : buttonVariants;

  return (
    <LazyMotion features={domAnimation} strict>
      <m.div
        initial='hidden'
        whileInView='visible'
        variants={container}
        viewport={{ once: true, amount: 0.3 }}
        className='flex flex-col sm:flex-row gap-4 items-center justify-center'
      >
        {/* Primary CTA - Contact */}
        <m.div
          variants={adaptiveButton}
          whileHover={
            shouldReduceMotion
              ? undefined
              : { scale: 1.05, transition: { duration: 0.2 } }
          }
          whileTap={shouldReduceMotion ? undefined : { scale: 0.95 }}
        >
          <Button
            asChild
            size='lg'
            className='group relative overflow-hidden bg-slate-700 hover:bg-slate-600 text-slate-100 shadow-lg hover:shadow-xl transition-all'
          >
            <Link to='/contact'>
              {/* Background gradient effect */}
              <span className='absolute inset-0 bg-gradient-to-r from-slate-600 to-slate-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300' />

              {/* Content */}
              <span className='relative flex items-center'>
                Let's Talk
                <Mail className='w-4 h-4 ml-2 group-hover:rotate-12 group-hover:-translate-y-0.5 transition-transform duration-300' />
              </span>
            </Link>
          </Button>
        </m.div>

        {/* Secondary CTA - CV Download */}
        <m.div
          variants={adaptiveButton}
          whileHover={
            shouldReduceMotion
              ? undefined
              : { scale: 1.05, transition: { duration: 0.2 } }
          }
          whileTap={shouldReduceMotion ? undefined : { scale: 0.95 }}
        >
          <Button
            asChild
            variant='outline'
            size='lg'
            className='group relative overflow-hidden bg-transparent border-2 border-slate-600 text-slate-300 hover:bg-slate-800 hover:text-slate-100 hover:border-slate-500 transition-all'
          >
            <a
              href='/cv.pdf'
              download='Khaled_Swidan_CV.pdf'
              target='_blank'
              rel='noopener noreferrer'
            >
              {/* Shine effect on hover */}
              <span className='absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/10 to-transparent' />

              {/* Content */}
              <span className='relative flex items-center'>
                View CV
                <Download className='w-4 h-4 ml-2 group-hover:translate-y-1 transition-transform duration-300' />
              </span>
            </a>
          </Button>
        </m.div>
      </m.div>

      {/* Optional: Helper text */}
      <m.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.5 }}
        viewport={{ once: true }}
        className='text-center text-slate-500 text-sm'
      >
        Available for freelance projects
      </m.p>
    </LazyMotion>
  );
};

export default CTAButtons;
