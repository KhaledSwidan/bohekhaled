import {
  CircleUser,
  FolderGit2,
  Frame,
  House,
  Mail,
  Map,
  Newspaper,
  PieChart,
} from 'lucide-react';
import avatar from '../../src/assets/avatar.jpg';
import { BlogContent } from '@/lib/blogs_contents_structure';
import type { BlogProps } from '@/types/blogs';

export const data = {
  user: {
    name: 'Khaled Swidan',
    email: 'khaledqutb4@gmail.com',
    avatar: avatar,
    github: 'https://github.com/KhaledSwidan',
    linkdin: 'https://www.linkedin.com/in/bohemiancoder/',
    facebook: 'https://www.facebook.com/marveloustimetobealive',
  },
  teams: [
    {
      name: 'Web Dev Logs',
      logo: Newspaper,
      plan: 'Tips & Tutorials',
    },
  ],
  navMain: [
    {
      title: 'Home',
      url: '/',
      icon: House,
    },
    {
      title: 'AboutMe',
      url: '/about',
      icon: CircleUser,
    },
    {
      title: 'Projects',
      url: '/projects',
      icon: FolderGit2,
    },
    {
      title: 'Contact',
      url: '/contact',
      icon: Mail,
    },
  ],
  projects: [
    {
      name: 'Design Engineering',
      urlLive: '#',
      urlDemo: '#',
      icon: Frame,
    },
    {
      name: 'Sales & Marketing',
      urlLive: '#',
      urlDemo: '#',
      icon: PieChart,
    },
    {
      name: 'Travel',
      urlLive: '#',
      urlDemo: '#',
      icon: Map,
    },
  ],
};

export const allBlogs: BlogProps[] = [
  {
    slug: 'improve-frontend-skills',
    title: 'How to Improve Your Frontend Skills',
    description:
      'Practical tips, tools, and mindset shifts to become a better frontend developer in 2025.',
    image: '/images/frontend.webp',
    category: 'Frontend',
    tags: ['React', 'Performance', 'Best Practices'],
    readingTime: '5 min read',
    date: 'Aug 10, 2025',
    content: <BlogContent.BlogContent_1 />,
  },
  {
    slug: 'understanding-hoisting-in-javascript',
    title: 'Understanding Hoisting in JavaScript',
    description:
      'Hoisting is one of JavaScript’s tricky behaviors. In this article, we’ll explore what hoisting really means, how it works with var, let, const, functions, and classes, and the best practices to avoid common pitfalls.',
    category: 'JavaScript',
    tags: ['JavaScript', 'Hoisting', 'WebDev', 'CleanCode', 'TypeScript'],
    image: '/images/hoisting.png',
    readingTime: '6 min read',
    date: 'Aug 25, 2025',
    content: <BlogContent.BlogContent_2 />,
  },
  {
    slug: 'getting-started-with-react-js',
    title: 'Getting Started with React.js: From Basics to Advanced',
    description:
      'A complete step-by-step guide to learning React.js, from the core concepts to advanced techniques, and building modern, interactive web applications.',
    image: '/images/reactjs.png',
    category: 'ReactJS',
    tags: [
      'React.js',
      'JavaScript',
      'Frontend Development',
      'Components',
      'Best Practices',
    ],
    readingTime: '7 min read',
    date: 'Aug 27, 2025',
    content: <BlogContent.BlogContent_3 />,
  },
  {
    slug: 'javascript-fundamentals-var-let-const',
    title:
      'JavaScript Fundamentals: Understanding var, let, and const in JavaScript',
    description: `A comprehensive introduction to JavaScript, covering essential
          concepts, syntax, and best practices for beginners. Start your coding
          journey here!`,
    image: '/images/javascript.png',
    category: 'JavaScript',
    tags: [
      'Fundamentals',
      'JavaScript',
      'Frontend Development',
      'ES6+',
      'Best Practices',
    ],
    readingTime: '7 min read',
    date: 'Aug 27, 2025',
    content: <BlogContent.BlogContent_4 />,
  },
  {
    slug: 'fetch-api-data-in-react-using-axios',
    title: 'Fetch API Data in React Using Axios',
    description: `A comprehensive guide on how to fetch API data in React applications using Axios. Learn best practices, error handling, and more.`,
    image: '/images/axios.png',
    category: 'ReactJS',
    tags: [
      'TypeScript',
      'ReactJS',
      'Axios',
      'API',
      'Frontend Development',
      'ES6+',
      'Best Practices',
    ],
    readingTime: '6 min read',
    date: 'Aug 28, 2025',
    content: <BlogContent.BlogContent_5 />,
  },
];
