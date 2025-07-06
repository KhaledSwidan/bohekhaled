import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { navVariants } from '@/db/navbar';
import useNavbarUtils from '@/utils/navbar-utils';
import Logo from '@/components/navbar/logo';
import DesktopNavigation from '@/components/navbar/desktop-navigation';
import MobileMenu, { MobileOverlay } from '@/components/navbar/mobile-menu';
import MobileNavigation from '@/components/navbar/mobile-navigation';

export default function Navbar() {
  const {
    activeSection,
    handleKeyDown,
    handleScroll,
    scrollToSection,
    isOpen,
    setIsOpen,
    isScrolled,
    isVisible,
  } = useNavbarUtils();
  const navRef = useRef<HTMLElement>(null);

  // Throttled scroll listener for better performance
  useEffect(() => {
    let ticking = false;

    const throttledScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', throttledScroll, { passive: true });
    return () => window.removeEventListener('scroll', throttledScroll);
  }, [handleScroll]);

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
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <motion.nav
      ref={navRef}
      initial='visible'
      animate={isVisible ? 'visible' : 'hidden'}
      variants={navVariants}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-slate-900/95 backdrop-blur-md border-b border-slate-700/50 drop-shadow-lg'
          : 'bg-transparent'
      )}
      role='navigation'
      aria-label='Main navigation'
    >
      <div className='container mx-auto px-4 md:px-4 sm:px-6 lg:px-8'>
        <div className='flex items-center justify-between h-16'>
          {/* Logo with enhanced animation */}
          <Logo
            scrollToSection={scrollToSection}
            handleKeyDown={handleKeyDown}
            handleScroll={handleScroll}
            setIsOpen={setIsOpen}
          />

          {/* Desktop Navigation with enhanced styling */}
          <DesktopNavigation
            handleScroll={handleScroll}
            setIsOpen={setIsOpen}
            activeSection={activeSection}
            handleKeyDown={handleKeyDown}
            scrollToSection={scrollToSection}
          />

          {/* Mobile Menu */}
          <MobileMenu
            handleScroll={handleScroll}
            setIsOpen={setIsOpen}
            isOpen={isOpen}
            handleKeyDown={handleKeyDown}
            scrollToSection={scrollToSection}
          />
        </div>

        {/* Enhanced Mobile Navigation */}
        <MobileNavigation
          handleScroll={handleScroll}
          setIsOpen={setIsOpen}
          activeSection={activeSection}
          handleKeyDown={handleKeyDown}
          isOpen={isOpen}
          scrollToSection={scrollToSection}
        />
      </div>

      {/* Mobile menu overlay */}
      <MobileOverlay
        handleScroll={handleScroll}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        handleKeyDown={handleKeyDown}
        scrollToSection={scrollToSection}
      />
    </motion.nav>
  );
}
