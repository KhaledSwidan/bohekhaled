import { navItems } from '@/db/navbar';
import { useCallback, useState } from 'react';

export interface NavbarUtils {
  isOpen?: boolean;
  isScrolled?: boolean;
  isVisible?: boolean;
  activeSection?: string;
  handleScroll: () => void;
  setIsOpen: (isOpen: boolean) => void;
  handleKeyDown: (e: React.KeyboardEvent, href: string) => void;
  scrollToSection: (href: string) => void;
}

const useNavbarUtils = (): NavbarUtils => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [activeSection, setActiveSection] = useState<string>('home');
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [isVisible, setIsVisible] = useState<boolean>(true);
  const [lastScrollY, setLastScrollY] = useState<number>(0);

  // Enhanced scroll handler with performance optimization
  const handleScroll = useCallback(() => {
    const currentScrollY = window.scrollY;

    // Show/hide navbar based on scroll direction
    if (currentScrollY > lastScrollY && currentScrollY > 100) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }

    setLastScrollY(currentScrollY);
    setIsScrolled(currentScrollY > 50);

    // Update active section with intersection observer fallback
    const sections = navItems.map((item) => item.href.substring(1));
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
  }, [lastScrollY]);

  // Enhanced scroll to section with smooth animation
  const scrollToSection = useCallback((href: string) => {
    console.log('Scrolling to:', href); // Debug log
    const element = document.querySelector(href);
    if (element) {
      const offsetTop =
        element.getBoundingClientRect().top + window.pageYOffset - 80;

      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth',
      });
    }
    // Close mobile menu after scrolling
    setIsOpen(false);
  }, []);

  // Keyboard navigation support
  const handleKeyDown = useCallback(
    (event: React.KeyboardEvent, href: string) => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        scrollToSection(href);
      }
    },
    [scrollToSection]
  );

  return {
    handleKeyDown,
    isOpen,
    handleScroll,
    activeSection,
    isScrolled,
    isVisible,
    setIsOpen,
    scrollToSection,
  };
};

export default useNavbarUtils;
