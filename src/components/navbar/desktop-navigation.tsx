// src/components/navbar/desktop-navigation.tsx

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { navItems } from '@/db/navbar';

interface DesktopNavigationProps {
  activeSection: string;
  navigateToSection: (href: string) => void;
}

const DesktopNavigation = ({
  activeSection,
  navigateToSection,
}: DesktopNavigationProps) => {
  return (
    <nav className='hidden md:flex space-x-2'>
      {navItems.map((item) => (
        <motion.button
          key={item.href}
          onClick={() => navigateToSection(item.href)}
          whileHover={{ scale: 1.05 }}
          className={cn(
            'relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg',
            activeSection === item.href
              ? 'text-slate-100 bg-slate-800/50'
              : 'text-slate-300 hover:text-slate-100 hover:bg-slate-800/30'
          )}
        >
          {item.name}
          {activeSection === item.href && (
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
