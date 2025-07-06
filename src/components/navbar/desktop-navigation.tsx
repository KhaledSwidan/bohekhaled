import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { linkVariants, navItems } from '@/db/navbar';
import type { NavbarUtils } from '@/utils/navbar-utils';

const DesktopNavigation = ({
  activeSection,
  handleKeyDown,
  scrollToSection,
}: NavbarUtils) => {
  return (
    <nav className='hidden md:flex space-x-2'>
      {navItems.map((item, index) => (
        <motion.button
          key={item.href}
          onClick={() => scrollToSection?.(item.href)}
          onKeyDown={(e) => handleKeyDown?.(e, item.href)}
          variants={linkVariants}
          initial='inactive'
          animate={
            activeSection === item.href.substring(1) ? 'active' : 'inactive'
          }
          whileHover='hover'
          className={cn(
            'relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-900',
            activeSection === item.href.substring(1)
              ? 'text-slate-100 bg-slate-800/50'
              : 'text-slate-300 hover:text-slate-100 hover:bg-slate-800/30'
          )}
          style={{ animationDelay: `${index * 0.1}s` }}
          aria-current={
            activeSection === item.href.substring(1) ? 'page' : undefined
          }
        >
          {item.name}
          {activeSection === item.href.substring(1) && (
            <motion.div
              className='absolute inset-0 bg-slate-700/20 rounded-lg -z-10'
              layoutId='activeSection'
              transition={{
                type: 'spring',
                stiffness: 380,
                damping: 30,
              }}
            />
          )}
        </motion.button>
      ))}
    </nav>
  );
};

export default DesktopNavigation;
