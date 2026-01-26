import { type LucideIcon } from 'lucide-react';
import { lazy } from 'react';
export interface HomeSection {
  title: string;
  description: string;
  icon: LucideIcon;
  link: string;
  color: string;
  bgColor: string;
}

const icons = {
  User: lazy(() => import('lucide-react').then((m) => ({ default: m.User }))),
  FolderOpen: lazy(() =>
    import('lucide-react').then((m) => ({ default: m.FolderOpen })),
  ),
  Mail: lazy(() => import('lucide-react').then((m) => ({ default: m.Mail }))),
};

const COLORS = {
  blue: {
    gradient: 'from-blue-500 to-purple-600',
    bg: 'bg-blue-500/10 hover:bg-blue-500/20',
  },
  green: {
    gradient: 'from-green-500 to-teal-600',
    bg: 'bg-green-500/10 hover:bg-green-500/20',
  },
  orange: {
    gradient: 'from-orange-500 to-red-600',
    bg: 'bg-orange-500/10 hover:bg-orange-500/20',
  },
} as const;

export const homeSections: HomeSection[] = [
  {
    title: 'About Me',
    description:
      'Learn more about my background, interests, and experience in frontend development.',
    icon: icons.User,
    link: '/about',
    color: COLORS.blue.gradient,
    bgColor: COLORS.blue.bg,
  },
  {
    title: 'My Projects',
    description:
      'A selection of projects showcasing my work and approach to web development.',
    icon: icons.FolderOpen,
    link: '/projects',
    color: COLORS.green.gradient,
    bgColor: COLORS.green.bg,
  },
  {
    title: 'Contact Me',
    description:
      'Feel free to reach out for collaboration, questions, or a quick chat.',
    icon: icons.Mail,
    link: '/contact',
    color: COLORS.orange.gradient,
    bgColor: COLORS.orange.bg,
  },
];
