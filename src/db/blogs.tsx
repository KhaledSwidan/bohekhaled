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
import { LoadingContent } from '@/lib/blogs_helper';
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
    title: 'Mastering Shadcn/UI Components',
    description:
      'Learn how to customize shadcn/ui components to match your unique brand style.',
    image: '/images/shadcnui.webp',
    category: 'UI/UX',
    tags: ['UI Design', 'Components', 'Customization'],
    readingTime: '4 min read',
    date: 'Aug 5, 2025',
    content: <LoadingContent />,
  },
];
