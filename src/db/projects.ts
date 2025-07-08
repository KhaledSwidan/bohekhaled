const projects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description:
      'A modern full-stack e-commerce application built with Next.js, TypeScript, and MongoDB. It features secure user authentication, dynamic product browsing with Zustand state management, and a responsive UI using Tailwind CSS and shadcn/ui. Includes an admin dashboard for managing products and orders.',
    image:
      'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=600',
    technologies: [
      'Next.js',
      'MongoDB',
      'TypeScript',
      'Auth.js',
      'Tailwind CSS',
      'shadcn/ui',
    ],
    liveUrl: 'https://boheky.vercel.app/',
    githubUrl: 'https://github.com/KhaledSwidan/ecommerce',
    featured: true,
  },
  {
    id: 2,
    title: 'Task Management App',
    description:
      'A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
    image:
      'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=600',
    technologies: ['React.js', 'Node.js', 'Socket.io', 'MongoDB', 'Redux'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
    featured: true,
  },
  {
    id: 3,
    title: 'Weather Dashboard',
    description:
      'A beautiful weather dashboard with location-based forecasts, interactive maps, and detailed weather analytics.',
    image:
      'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=600',
    technologies: ['React.js', 'Weather API', 'Chart.js', 'CSS Modules'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
    featured: false,
  },
  {
    id: 4,
    title: 'Social Media Dashboard',
    description:
      'Analytics dashboard for social media management with data visualization, scheduling, and performance tracking.',
    image:
      'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=600',
    technologies: ['Vue.js', 'D3.js', 'Express.js', 'PostgreSQL'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
    featured: false,
  },
  {
    id: 5,
    title: 'Portfolio Website',
    description:
      'A responsive portfolio website with dark mode, smooth animations, and optimized performance. Built with modern web technologies.',
    image:
      'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=600',
    technologies: ['React.js', 'TypeScript', 'Framer Motion', 'Tailwind CSS'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
    featured: false,
  },
  {
    id: 6,
    title: 'Learning Management System',
    description:
      'A comprehensive LMS with course creation, student progress tracking, video streaming, and interactive quizzes.',
    image:
      'https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=600',
    technologies: ['Next.js', 'Prisma', 'PostgreSQL', 'NextAuth.js', 'AWS S3'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
    featured: false,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

const featuredProjects = projects.filter((project) => project.featured);
const otherProjects = projects.filter((project) => !project.featured);

// Button style variables
const buttonBaseClasses =
  'transition-all duration-300 no-underline hover:no-underline';
const iconTransform = '[&:hover_.icon]:translate-x-1 [&:hover_.icon]:scale-110';
const iconClasses = 'w-4 h-4 mr-2 transition-all duration-200 icon';

// Color scheme variables
const overlayButtonStyles = {
  primary:
    'bg-zinc-900/95 hover:bg-zinc-800/95 text-slate-200 hover:text-white border border-zinc-700/50 hover:border-zinc-600 backdrop-blur-sm',
  secondary:
    'bg-slate-900/95 hover:bg-slate-800/95 text-slate-200 hover:text-white border border-slate-700/50 hover:border-slate-600 backdrop-blur-sm',
};

const mainButtonStyles = {
  primary:
    'bg-gradient-to-r from-zinc-800 to-zinc-900 hover:from-zinc-700 hover:to-zinc-800 text-slate-200 hover:text-white border-zinc-700 hover:border-zinc-600',
  secondary:
    'bg-gradient-to-r from-slate-800 to-slate-900 hover:from-slate-700 hover:to-slate-800 text-slate-200 hover:text-white border-slate-700 hover:border-slate-600',
};

// Enhanced badge styles - dark mode compatible with zinc/slate theme
const badgeStyles = [
  'bg-zinc-800/30 backdrop-blur-md text-zinc-300 border-zinc-600/40',
  'bg-slate-800/30 backdrop-blur-md text-slate-300 border-slate-600/40',
];

export {
  projects,
  containerVariants,
  itemVariants,
  featuredProjects,
  buttonBaseClasses,
  iconTransform,
  iconClasses,
  overlayButtonStyles,
  mainButtonStyles,
  badgeStyles,
  otherProjects,
};
