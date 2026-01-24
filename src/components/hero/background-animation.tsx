import { useReducedMotion } from '@/hooks/useReducedMotion';
import { domAnimation, LazyMotion, m } from 'framer-motion';
import { useMemo } from 'react';

interface Particle {
  id: string;
  size: number;
  left: string;
  top: string;
  delay: number;
  duration: number;
  xRange: number[];
  yRange: number[];
}

const BackgroundAnimation = () => {
  const shouldReduceMotion = useReducedMotion();

  const particles = useMemo<Particle[]>(() => {
    return [...Array(shouldReduceMotion ? 5 : 10)].map((_, i) => ({
      id: `particle-${i}`,
      size: 2 + Math.random() * 3,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      delay: Math.random() * 5,
      duration: 15 + Math.random() * 10,
      xRange: [0, Math.random() * 200 - 100, Math.random() * 200 - 100, 0],
      yRange: [0, Math.random() * 200 - 100, Math.random() * 200 - 100, 0],
    }));
  }, [shouldReduceMotion]);

  const orbs = useMemo<Particle[]>(() => {
    return [...Array(shouldReduceMotion ? 3 : 6)].map((_, i) => ({
      id: `orb-${i}`,
      size: 8 + Math.random() * 12,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      delay: Math.random() * 3,
      duration: 20 + Math.random() * 15,
      xRange: [0, Math.random() * 150 - 75, Math.random() * 150 - 75, 0],
      yRange: [0, Math.random() * 150 - 75, Math.random() * 150 - 75, 0],
    }));
  }, [shouldReduceMotion]);

  const lines = useMemo(() => {
    return [...Array(shouldReduceMotion ? 0 : 4)].map((_, i) => ({
      id: `line-${i}`,
      width: 100 + Math.random() * 200,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      rotation: Math.random() * 360,
      delay: Math.random() * 4,
      duration: 25 + Math.random() * 10,
      xRange: Math.random() * 100 - 50,
      yRange: Math.random() * 100 - 50,
    }));
  }, [shouldReduceMotion]);

  const getAnimationProps = (item: Particle) => {
    if (shouldReduceMotion) {
      return {
        animate: {
          opacity: [0.2, 0.4, 0.2],
        },
        transition: {
          duration: item.duration,
          repeat: Number.POSITIVE_INFINITY,
          ease: 'easeInOut' as const,
        },
      };
    }

    return {
      animate: {
        x: item.xRange,
        y: item.yRange,
        opacity: [0.3, 0.8, 0.5, 0.3],
        scale: [1, 1.2, 0.8, 1],
      },
      transition: {
        duration: item.duration,
        delay: item.delay,
        repeat: Number.POSITIVE_INFINITY,
        ease: 'easeInOut' as const,
        repeatType: 'loop' as const,
      },
    };
  };

  return (
    <LazyMotion features={domAnimation}>
      <div className='absolute inset-0 z-10 overflow-hidden'>
        {particles.map((particle) => {
          return (
            <m.div
              key={particle.id}
              className='absolute rounded-full bg-blue-400/40 blur-[0.2px]'
              style={{
                width: `${particle.size}px`,
                height: `${particle.size}px`,
                left: particle.left,
                top: particle.top,
              }}
              {...getAnimationProps(particle)}
            />
          );
        })}

        {orbs.map((orb) => {
          return (
            <m.div
              key={orb.id}
              className='absolute rounded-full bg-gradient-to-r from-slate-400/20 to-slate-300/10'
              style={{
                width: `${orb.size}px`,
                height: `${orb.size}px`,
                left: orb.left,
                top: orb.top,
              }}
              animate={
                shouldReduceMotion
                  ? { opacity: [0.1, 0.3, 0.1] }
                  : {
                      x: orb.xRange,
                      y: orb.yRange,
                      opacity: [0.1, 0.4, 0.2, 0.1],
                      scale: [1, 1.5, 0.7, 1],
                    }
              }
              transition={{
                duration: orb.duration,
                delay: orb.delay,
                repeat: Number.POSITIVE_INFINITY,
                ease: 'easeInOut' as const,
                repeatType: 'loop' as const,
              }}
            />
          );
        })}

        {!shouldReduceMotion &&
          lines.map((line) => {
            return (
              <m.div
                key={line.id}
                className='absolute bg-gradient-to-r from-transparent via-slate-400/10 to-transparent'
                style={{
                  width: `${line.width}px`,
                  height: '1px',
                  left: line.left,
                  top: line.top,
                  transform: `rotate(${line.rotation}deg)`,
                }}
                animate={{
                  x: [0, line.xRange],
                  y: [0, line.yRange],
                  opacity: [0, 0.3, 0],
                  scaleX: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: line.duration,
                  delay: line.delay,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: 'easeInOut' as const,
                  repeatType: 'loop' as const,
                }}
              />
            );
          })}

        {/* Pulsing Background Circles */}
        {[...Array(shouldReduceMotion ? 2 : 3)].map((_, i) => (
          <m.div
            key={`pulse-${i}`}
            className='absolute rounded-full border border-slate-400/20'
            style={{
              width: `${300 + i * 200}px`,
              height: `${300 + i * 200}px`,
              left: '50%',
              top: '50%',
              transform: 'translate(-50%, -50%)',
            }}
            animate={
              shouldReduceMotion
                ? { opacity: [0.1, 0.2, 0.1] }
                : {
                    scale: [1, 1.1, 1],
                    opacity: [0.1, 0.3, 0.1],
                  }
            }
            transition={{
              duration: 8 + i * 2,
              repeat: Number.POSITIVE_INFINITY,
              ease: 'easeInOut' as const,
              delay: i * 2,
            }}
          />
        ))}
      </div>
    </LazyMotion>
  );
};

export default BackgroundAnimation;
