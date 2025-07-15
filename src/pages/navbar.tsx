// src/pages/navbar.tsx

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import useNavbarUtils from '@/utils/navbar-utils';
import Logo from '@/components/navbar/logo';
import DesktopNavigation from '@/components/navbar/desktop-navigation';
import MobileMenu from '@/components/navbar/mobile-menu';
import MobileNavigation from '@/components/navbar/mobile-navigation';

export default function Navbar() {
  const { activeSection, scrollToSection, isOpen, setIsOpen, isScrolled } =
    useNavbarUtils();
  const navRef = useRef<HTMLElement>(null);

  // Close mobile menu on escape key
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen, setIsOpen]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'unset';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <motion.nav
      ref={navRef}
      initial={{ y: 0, opacity: 1 }}
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-slate-900/95 backdrop-blur-md border-b border-slate-700/50'
          : 'bg-transparent'
      )}
    >
      <div className='container mx-auto px-4 lg:px-8 '>
        <div className='flex items-center justify-between h-16'>
          <Logo scrollToSection={scrollToSection} />
          <DesktopNavigation
            activeSection={activeSection}
            scrollToSection={scrollToSection}
          />
          <MobileMenu isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>

        <MobileNavigation
          activeSection={activeSection}
          isOpen={isOpen}
          scrollToSection={scrollToSection}
        />
      </div>

      {/* Mobile overlay */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className='fixed inset-0 bg-slate-900/50 backdrop-blur-sm z-[-1] md:hidden'
          onClick={() => setIsOpen(false)}
        />
      )}
    </motion.nav>
  );
}
