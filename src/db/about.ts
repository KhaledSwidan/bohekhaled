import { Code, Database, Globe, Zap, Users } from 'lucide-react';

export const skills = [
  {
    category: 'Frontend',
    icon: Globe,
    items: [
      'React.js',
      'Next.js',
      'TypeScript',
      'Tailwind CSS',
      'Framer Motion',
      'Responsive Design',
      'PWA',
      'Mobile-First',
    ],
  },
  {
    category: 'Backend',
    icon: Database,
    items: ['Node.js', 'MongoDB', 'REST APIs', 'Vercel'],
  },
  {
    category: 'Tools',
    icon: Code,
    items: ['Git', 'VS Code', 'Webpack', 'Vite', 'Turbopack', 'ESLint'],
  },
  {
    category: 'Performance',
    icon: Zap,
    items: [
      'Code Splitting',
      'Lazy Loading',
      'SEO',
      'Web Vitals',
      'Lighthouse',
      'Google Analytics',
    ],
  },
  {
    category: 'Soft Skills',
    icon: Users,
    items: [
      'Team Work',
      'Communication',
      'Problem Solving',
      'Leadership',
      'Selflearning',
      'Time Management',
    ],
  },
];

export const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};
