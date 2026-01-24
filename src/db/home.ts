import { User, FolderOpen, Mail } from 'lucide-react';

export const homeSections = [
  {
    title: 'About Me',
    description:
      'Learn more about my journey, skills, and experience as a Frontend Developer.',
    icon: User,
    link: '/about',
    color: 'from-blue-500 to-purple-600',
    bgColor: 'bg-blue-500/10 hover:bg-blue-500/20',
  },
  {
    title: 'My Projects',
    description:
      'Explore my portfolio of web applications and development projects.',
    icon: FolderOpen,
    link: '/projects',
    color: 'from-green-500 to-teal-600',
    bgColor: 'bg-green-500/10 hover:bg-green-500/20',
  },
  {
    title: 'Contact Me',
    description:
      'Get in touch for collaborations, opportunities, or just to say hello.',
    icon: Mail,
    link: '/contact',
    color: 'from-orange-500 to-red-600',
    bgColor: 'bg-orange-500/10 hover:bg-orange-500/20',
  },
];

export const homeContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

export const homeItemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};
