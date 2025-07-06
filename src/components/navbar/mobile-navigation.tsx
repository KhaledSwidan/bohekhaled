import { mobileMenuVariants, navItems } from '@/db/navbar';
import { cn } from '@/lib/utils';
import { type NavbarUtils } from '@/utils/navbar-utils';
import { AnimatePresence, motion } from 'framer-motion';

const MobileNavigation = ({
  activeSection,
  handleKeyDown,
  isOpen,
  scrollToSection,
}: NavbarUtils) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          id='mobile-menu'
          initial='closed'
          animate='open'
          exit='closed'
          variants={mobileMenuVariants}
          className='md:hidden overflow-hidden bg-slate-800/95 backdrop-blur-md border-t border-slate-700/50 rounded-b-lg'
          role='menu'
        >
          <div className='py-4 space-y-2 px-4'>
            {navItems.map((item, index) => (
              <motion.button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                onKeyDown={(e) => handleKeyDown(e, item.href)}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className={cn(
                  'block w-full text-left px-4 py-3 text-base font-medium transition-all duration-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-400',
                  activeSection === item.href.substring(1)
                    ? 'text-slate-100 bg-slate-700/50'
                    : 'text-slate-300 hover:text-slate-100 hover:bg-slate-700/30'
                )}
                role='menuitem'
                aria-current={
                  activeSection === item.href.substring(1) ? 'page' : undefined
                }
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
