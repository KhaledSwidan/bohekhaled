'use client';

import { useCallback, useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

export interface NavbarUtils {
  isOpen: boolean;
  isScrolled: boolean;
  activeSection: string;
  setIsOpen: (isOpen: boolean) => void;
  navigateToSection: (href: string) => void;
}

const useNavbarUtils = (): NavbarUtils => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [activeSection, setActiveSection] = useState<string>('/');
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const navigate = useNavigate();
  const location = useLocation();

  // Navigation function for React Router
  const navigateToSection = useCallback(
    (href: string) => {
      // Close mobile menu first
      setIsOpen(false);

      // Navigate to the route
      navigate(href);
    },
    [navigate]
  );

  // Update active section based on current route
  useEffect(() => {
    setActiveSection(location.pathname);
  }, [location.pathname]);

  // Enhanced scroll handler
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const currentScrollY = window.pageYOffset;
          setIsScrolled(currentScrollY > 50);
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
    navigateToSection,
  };
};

export default useNavbarUtils;
