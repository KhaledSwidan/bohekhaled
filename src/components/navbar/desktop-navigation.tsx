// src/components/navbar/desktop-navigation.tsx

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

interface DesktopNavigationProps {
  activeSection: string;
  scrollToSection: (href: string) => void;
}

const DesktopNavigation = ({
  activeSection,
  scrollToSection,
}: DesktopNavigationProps) => {
  return (
    <nav className='hidden md:flex space-x-2'>
      {navItems.map((item) => (
        <motion.button
          key={item.href}
          onClick={() => scrollToSection(item.href)}
          whileHover={{ scale: 1.05 }}
          className={cn(
            'relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg',
            activeSection === item.href.substring(1)
              ? 'text-slate-100 bg-slate-800/50'
              : 'text-slate-300 hover:text-slate-100 hover:bg-slate-800/30'
          )}
        >
          {item.name}
          {activeSection === item.href.substring(1) && (
            <motion.div
              className='absolute inset-0 bg-slate-700/20 rounded-lg -z-10'
              layoutId='activeSection'
              transition={{ type: 'spring', stiffness: 380, damping: 30 }}
            />
          )}
        </motion.button>
      ))}
    </nav>
  );
};

export default DesktopNavigation;
