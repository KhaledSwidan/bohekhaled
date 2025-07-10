'use client';

import { useCallback, useState, useEffect } from 'react';

export interface NavbarUtils {
  isOpen: boolean;
  isScrolled: boolean;
  activeSection: string;
  setIsOpen: (isOpen: boolean) => void;
  scrollToSection: (href: string) => void;
}

const useNavbarUtils = (): NavbarUtils => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [activeSection, setActiveSection] = useState<string>('home');
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  // More precise scroll function with debugging
  const scrollToSection = useCallback(
    (href: string) => {
      // Close mobile menu first
      setIsOpen(false);

      // Small delay to ensure menu closes before scrolling
      setTimeout(
        () => {
          const element = document.querySelector(href);
          if (element) {
            // Get all measurements
            const navbar = document.querySelector('nav');
            const navbarRect = navbar?.getBoundingClientRect();
            const navbarHeight = navbarRect?.height || 80;

            // Get element position
            const elementRect = element.getBoundingClientRect();
            const elementTop = elementRect.top + window.pageYOffset;

            // Calculate target position with generous offset
            const offset = navbarHeight - 40; // Increased padding for better clearance
            const targetPosition = elementTop - offset;

            // Force scroll with multiple methods
            try {
              // Method 1: scrollTo
              window.scrollTo({
                top: targetPosition,
                behavior: 'smooth',
              });

              // Fallback method after a short delay
              setTimeout(() => {
                const currentScroll = window.pageYOffset;

                // If we're not close to target, try again
                if (Math.abs(currentScroll - targetPosition) > 10) {
                  window.scrollTo({
                    top: targetPosition,
                    behavior: 'auto', // Use instant scroll as fallback
                  });
                }
              }, 1000);
            } catch (error) {
              console.error('Scroll error:', error);
              // Ultimate fallback
              window.scrollTo(0, targetPosition);
            }
          } else {
            console.error('Element not found:', href);
          }
        },
        isOpen ? 300 : 0
      );
    },
    [isOpen]
  );

  // Enhanced scroll handler
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const currentScrollY = window.pageYOffset;
          setIsScrolled(currentScrollY > 50);

          // Section detection
          const sections = ['home', 'about', 'projects', 'contact'];
          const navbar = document.querySelector('nav');
          const navbarHeight = navbar?.getBoundingClientRect().height || 80;

          let currentSection = 'home';
          let minDistance = Number.POSITIVE_INFINITY;

          // Find the section closest to the top of the viewport
          sections.forEach((section) => {
            const element = document.getElementById(section);
            if (element) {
              const rect = element.getBoundingClientRect();
              const distanceFromTop = Math.abs(rect.top - navbarHeight);

              if (
                rect.top <= navbarHeight + 100 &&
                distanceFromTop < minDistance
              ) {
                minDistance = distanceFromTop;
                currentSection = section;
              }
            }
          });

          setActiveSection(currentSection);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle mobile menu body scroll lock
  useEffect(() => {
    if (isOpen) {
      const scrollY = window.scrollY;
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = '100%';
    } else {
      const scrollY = document.body.style.top;
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      if (scrollY) {
        window.scrollTo(0, Number.parseInt(scrollY || '0') * -1);
      }
    }

    return () => {
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
    };
  }, [isOpen]);

  return {
    isOpen,
    isScrolled,
    activeSection,
    setIsOpen,
    scrollToSection,
  };
};

export default useNavbarUtils;
