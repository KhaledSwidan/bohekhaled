// hooks/useAnimationVariants.ts
import type { Variants } from 'framer-motion';
import { useReducedMotion } from './useReducedMotion';
import { containerVariants, itemVariants } from '@/utils/framer-motion';
import { useMemo } from 'react';

// Hook رئيسي يرجع كل الـ variants
export function useAnimationVariants() {
  const shouldReduceMotion = useReducedMotion();

  // استخدم useMemo عشانميعملش re-create للـ objects في كل render
  const reducedMotionContainerVariants: Variants = useMemo(
    () => ({
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: { duration: 0.3 },
      },
    }),
    [],
  );

  const reducedMotionItemVariants: Variants = useMemo(
    () => ({
      hidden: { opacity: 0 },
      visible: { opacity: 1 },
    }),
    [],
  );

  return useMemo(
    () => ({
      container: shouldReduceMotion
        ? reducedMotionContainerVariants
        : containerVariants,
      item: shouldReduceMotion ? reducedMotionItemVariants : itemVariants,
      shouldReduceMotion,
    }),
    [
      shouldReduceMotion,
      reducedMotionContainerVariants,
      reducedMotionItemVariants,
    ],
  );
}
