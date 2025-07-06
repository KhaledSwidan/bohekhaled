import { cn } from '@/lib/utils';
import { AnimatePresence, motion } from 'framer-motion';

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

interface MobileNavigationProps {
  activeSection: string;
  isOpen: boolean;
  scrollToSection: (href: string) => void;
}

const MobileNavigation = ({
  activeSection,
  isOpen,
  scrollToSection,
}: MobileNavigationProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className='md:hidden overflow-hidden bg-slate-800/95 backdrop-blur-md border-t border-slate-700/50 rounded-b-lg'
        >
          <div className='py-4 space-y-2 px-4'>
            {navItems.map((item, index) => (
              <motion.button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className={cn(
                  'block w-full text-left px-4 py-3 text-base font-medium transition-all duration-300 rounded-lg',
                  activeSection === item.href.substring(1)
                    ? 'text-slate-100 bg-slate-700/50'
                    : 'text-slate-300 hover:text-slate-100 hover:bg-slate-700/30'
                )}
              >
                <span className='flex items-center'>
                  {item.name}
                  {activeSection === item.href.substring(1) && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className='ml-auto w-2 h-2 bg-slate-300 rounded-full'
                    />
                  )}
                </span>
              </motion.button>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileNavigation;
