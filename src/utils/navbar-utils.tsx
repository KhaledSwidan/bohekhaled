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

  const scrollToSection = useCallback((href: string) => {
    const element = document.querySelector(href);
    if (element) {
      const offsetTop =
        element.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth',
      });
    }
    setIsOpen(false);
  }, []);

  // Simplified scroll handler
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;
          setIsScrolled(currentScrollY > 50);

          // Simple active section detection
          const sections = ['home', 'about', 'projects', 'contact'];
          const currentSection = sections.find((section) => {
            const element = document.getElementById(section);
            if (element) {
              const rect = element.getBoundingClientRect();
              return rect.top <= 100 && rect.bottom >= 100;
            }
            return false;
          });

          if (currentSection) {
            setActiveSection(currentSection);
          }

          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return {
    isOpen,
    isScrolled,
    activeSection,
    setIsOpen,
    scrollToSection,
  };
};

export default useNavbarUtils;
