import { Github, Linkedin, Mail, type LucideIcon } from 'lucide-react';

interface SocialLink {
  icon: LucideIcon;
  href: string;
  label: string;
  color?: string;
}

interface Service {
  id: string;
  title: string;
  slug: string; // للـ URL: /services/frontend-development
  description?: string; // للـ footer
  icon?: LucideIcon; // optional للصفحة المخصصة
  highlights?: string[]; // optional للصفحة المخصصة
}

export const services: Service[] = [
  {
    id: '1',
    title: 'Custom Web Applications',
    slug: 'web-applications',
    description: 'Full-stack frontend development from concept to deployment',
    highlights: [
      'React.js & Next.js expertise',
      'TypeScript for type safety',
      'Responsive & accessible design',
      'Modern build tools & optimization',
    ],
  },
  {
    id: '2',
    title: 'Design Implementation',
    slug: 'design-implementation',
    description: 'Converting Figma/Adobe XD designs to production code',
    highlights: [
      'Pixel-perfect accuracy',
      'Animation & micro-interactions',
      'Cross-browser compatibility',
      'Mobile-first approach',
    ],
  },
  {
    id: '3',
    title: 'Code Modernization',
    slug: 'code-modernization',
    description: 'Upgrading legacy frontends to modern standards',
    highlights: [
      'Migration to React/TypeScript',
      'Performance improvements',
      'Code refactoring',
      'Documentation',
    ],
  },
  {
    id: '4',
    title: 'Ongoing Support',
    slug: 'ongoing-support',
    description: 'Maintenance, updates, and feature additions',
    highlights: [
      'Bug fixes & updates',
      'Feature development',
      'Performance monitoring',
      'Technical support',
    ],
  },
];

export const socialLinks: SocialLink[] = [
  {
    icon: Github,
    href: 'https://github.com/KhaledSwidan',
    label: 'GitHub',
    color: 'hover:text-gray-900', // ✅ GitHub black
  },
  {
    icon: Linkedin,
    href: 'https://www.linkedin.com/in/bohemiancoder/',
    label: 'LinkedIn',
    color: 'hover:text-blue-600', // ✅ LinkedIn blue
  },
  {
    icon: Mail,
    href: 'mailto:khaled.swidan@example.com', // ✅ غير الإيميل
    label: 'Email',
    color: 'hover:text-red-500', // ✅ Email red
  },
];
