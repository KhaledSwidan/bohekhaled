export const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

// Animation variants
export const navVariants = {
  visible: { y: 0, opacity: 1 },
  hidden: { y: -100, opacity: 0 },
};

export const mobileMenuVariants = {
  closed: { opacity: 0, height: 0, transition: { duration: 0.3 } },
  open: { opacity: 1, height: 'auto', transition: { duration: 0.3 } },
};

export const linkVariants = {
  inactive: { scale: 1 },
  active: { scale: 1.05 },
  hover: { scale: 1.02 },
};
