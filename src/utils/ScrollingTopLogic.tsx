// src/components/ScrollToTop.tsx
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useMotionValue, animate, useSpring } from 'framer-motion';

const ScrollingTopLogic = () => {
  const { pathname } = useLocation();
  const scrollY = useMotionValue(0);
  const springScrollY = useSpring(scrollY, {
    stiffness: 100,
    damping: 20,
  });

  useEffect(() => {
    const currentScroll = window.scrollY;

    springScrollY.set(currentScroll);

    const controls = animate(springScrollY, 0, {
      duration: 0.5,
      onUpdate: (latest) => {
        window.scrollTo(0, latest);
      },
    });

    return () => controls.stop();
  }, [pathname, springScrollY]);

  return null;
};

export default ScrollingTopLogic;
