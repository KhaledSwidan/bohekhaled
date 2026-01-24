import type { Variants } from 'framer-motion';

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
    title: 'Todo List App',
    description:
      'A simple Todo List App built with Vite, React, TypeScript, and Zustand. It features local storage for todo items, and a responsive UI using pure CSS.',
    image:
      'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=600',
    technologies: ['React.js', 'Typescript', 'Zustand', 'Pure CSS'],
    liveUrl: 'https://khaledswidan.github.io/zustand/',
    githubUrl: 'https://github.com/KhaledSwidan/zustand',
    featured: true,
  },
  {
    id: 3,
    title: 'Weather Dashboard',
    description:
      'A beautiful and simple weather dashboard with location-based forecasts, interactive maps, PWA, and detailed weather analytics.',
    image:
      'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=600',
    technologies: [
      'Vanilla JavaScript ES6+',
      'Weather API',
      'PWA',
      'Pure CSS3',
      'HTML5',
      'Local Storage',
    ],
    liveUrl: 'https://khaledswidan.github.io/WeatherApp/',
    githubUrl: 'https://github.com/KhaledSwidan/WeatherApp',
    featured: false,
  },
  {
    id: 4,
    title: 'Responsive Dashboard UI',
    description:
      'A modern and responsive dashboard template. It features a clean user interface and consistent design system - ideal for use in web apps, SaaS platforms, and admin panels.',
    image:
      'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=600',
    technologies: ['Vanilla JS ES6+', 'HTML5', 'CSS3'],
    liveUrl: 'https://khaledswidan.github.io/awesomeadmin/',
    githubUrl: 'https://github.com/KhaledSwidan/awesomeadmin',
    featured: false,
  },
  {
    id: 5,
    title: 'Responsive One-Page Business Website',
    description:
      'Arsha is a modern, responsive one-page business website template designed for startups, companies, or service providers. Built using HTML5, CSS3, and Bootstrap, it features a clean layout, smooth scrolling, responsive design, and engaging UI sections like About, Services, Team, and Contact.',
    image:
      'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=600',
    technologies: [
      'HTML5',
      'CSS3',
      'Bootstrap5',
      'Vanilla JavaScript',
      'FontAwesome / Bootstrap Icons',
      'GitHub Pages',
    ],
    liveUrl: 'https://khaledswidan.github.io/arsha/index.html',
    githubUrl: 'https://github.com/KhaledSwidan/arsha',
    featured: false,
  },
  {
    id: 6,
    title: 'Modern Landing Page with Next.js & Tailwind',
    description:
      'This project is a modern responsive landing page built with Next.js 14 and Tailwind CSS. It demonstrates best practices in building scalable, maintainable frontend applications with a strong focus on: Performance, Responsive design, Reusable components, Clean code structure, and Styling. This project can be used as a starter template for landing pages, product showcases, or SaaS marketing websites.',
    image: '/images/projects/nxlandingpage.png',
    technologies: [
      'Next.js',
      'Tailwind CSS',
      'TypeScript',
      'Netlify',
      'Shadcn-UI',
    ],
    liveUrl: 'https://nxlandingpage.netlify.app/',
    githubUrl: 'https://github.com/KhaledSwidan/landing-page-nextjs',
    featured: true,
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
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
