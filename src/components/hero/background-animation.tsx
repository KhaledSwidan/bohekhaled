import { motion } from 'framer-motion';

const BackgroundAnimation = () => {
  return (
    <>
      {' '}
      <div className='absolute inset-0 z-10 overflow-hidden'>
        {/* Gradient Background */}
        {/* <div className='absolute inset-0 bg-gradient-to-br from-slate-800/20 via-transparent to-slate-700/20' /> */}

        {/* Floating Particles with Enhanced Animation */}
        {[...Array(15)].map((_, i) => {
          const delay = Math.random() * 5;
          const duration = 15 + Math.random() * 10;
          const size = 2 + Math.random() * 3;

          return (
            <motion.div
              key={i}
              className='absolute rounded-full bg-slate-400/40 blur-[0.2px]'
              style={{
                width: `${size}px`,
                height: `${size}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                x: [0, Math.random() * 200 - 100, Math.random() * 200 - 100, 0],
                y: [0, Math.random() * 200 - 100, Math.random() * 200 - 100, 0],
                opacity: [0.3, 0.8, 0.5, 0.3],
                scale: [1, 1.2, 0.8, 1],
              }}
              transition={{
                duration,
                delay,
                repeat: Number.POSITIVE_INFINITY,
                ease: 'easeInOut',
                repeatType: 'loop',
              }}
            />
          );
        })}

        {/* Larger Glowing Orbs */}
        {[...Array(8)].map((_, i) => {
          const delay = Math.random() * 3;
          const duration = 20 + Math.random() * 15;
          const size = 8 + Math.random() * 12;

          return (
            <motion.div
              key={`orb-${i}`}
              className='absolute rounded-full bg-gradient-to-r from-slate-400/20 to-slate-300/10'
              style={{
                width: `${size}px`,
                height: `${size}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                x: [0, Math.random() * 150 - 75, Math.random() * 150 - 75, 0],
                y: [0, Math.random() * 150 - 75, Math.random() * 150 - 75, 0],
                opacity: [0.1, 0.4, 0.2, 0.1],
                scale: [1, 1.5, 0.7, 1],
              }}
              transition={{
                duration,
                delay,
                repeat: Number.POSITIVE_INFINITY,
                ease: 'easeInOut',
                repeatType: 'loop',
              }}
            />
          );
        })}

        {/* Subtle Floating Lines */}
        {[...Array(5)].map((_, i) => {
          const delay = Math.random() * 4;
          const duration = 25 + Math.random() * 10;

          return (
            <motion.div
              key={`line-${i}`}
              className='absolute bg-gradient-to-r from-transparent via-slate-400/10 to-transparent'
              style={{
                width: `${100 + Math.random() * 200}px`,
                height: '1px',
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                transform: `rotate(${Math.random() * 360}deg)`,
              }}
              animate={{
                x: [0, Math.random() * 100 - 50],
                y: [0, Math.random() * 100 - 50],
                opacity: [0, 0.3, 0],
                scaleX: [0.5, 1, 0.5],
              }}
              transition={{
                duration,
                delay,
                repeat: Number.POSITIVE_INFINITY,
                ease: 'easeInOut',
                repeatType: 'loop',
              }}
            />
          );
        })}

        {/* Pulsing Background Circles */}
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={`pulse-${i}`}
            className='absolute rounded-full border border-slate-400/20'
            style={{
              width: `${300 + i * 200}px`,
              height: `${300 + i * 200}px`,
              left: '50%',
              top: '50%',
              transform: 'translate(-50%, -50%)',
            }}
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Number.POSITIVE_INFINITY,
              ease: 'easeInOut',
              delay: i * 2,
            }}
          />
        ))}
      </div>
    </>
  );
};

export default BackgroundAnimation;
