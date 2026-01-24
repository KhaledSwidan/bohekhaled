import { Database, Zap, Users, Layout, Server, GitBranch } from 'lucide-react';

export const skills = [
  {
    category: 'Frontend Development',
    icon: Layout,
    items: [
      'HTML5',
      'CSS3',
      'JavaScript (ES6+)',
      'React.js',
      'Next.js',
      'TypeScript',
      'Tailwind CSS',
      'Bootstrap',
    ],
  },
  {
    category: 'Backend & APIs',
    icon: Server,
    items: ['Node.js (basic)', 'REST APIs'],
  },
  {
    category: 'Databases & Auth',
    icon: Database,
    items: [
      'MongoDB (familiar)',
      'Firebase (familiar)',
      'Mongoose (familiar)',
      'Supabase (familiar)',
      'Prisma (basic)',
      'Auth.js (basic)',
    ],
  },
  {
    category: 'Tooling & Workflow',
    icon: GitBranch,
    items: ['Git', 'GitHub', 'Vercel', 'Hostinger', 'Vite', 'ESLint'],
  },
  {
    category: 'Performance & Best Practices',
    icon: Zap,
    items: [
      'Responsive Design',
      'SEO Basics',
      'Code Splitting',
      'Lazy Loading',
      'Web Vitals',
    ],
  },
  {
    category: 'Soft Skills',
    icon: Users,
    items: [
      'Teamwork',
      'Communication',
      'Problem Solving',
      'Ownership',
      'Time Management',
    ],
  },
];
