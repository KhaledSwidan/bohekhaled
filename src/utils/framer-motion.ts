import type { Variants } from 'framer-motion';

// 🎨 Hover variants منفصلة للوضوح
export const hoverVariants = {
  scale: 1.02,
  y: -4, // ارفع الكارد شوية
  transition: {
    duration: 0.3,
    ease: [0.34, 1.56, 0.64, 1] as [number, number, number, number], // easeOutBack (خفيف)
  },
};

// Variants للعناصر الداخلية (مشتركة)
export const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: [0.25, 0.4, 0.25, 1] },
  },
};

// Variants للـ container
export const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
      ease: 'easeOut',
    },
  },
};

// Variants مخصوصة للديكور
export const decorVariants: Variants = {
  hidden: { opacity: 0, scaleX: 0 },
  visible: {
    opacity: 1,
    scaleX: 1,
    transition: { duration: 0.8, ease: 'easeOut' },
  },
};
