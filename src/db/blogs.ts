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

export interface AllBlogsProps {
  title: string;
  description: string;
  image: string;
  category: string;
  tags: string[];
  readingTime: string;
  date: string;
}

export const allBlogs = [
  {
    title: 'How to Improve Your Frontend Skills',
    description:
      'Practical tips, tools, and mindset shifts to become a better frontend developer in 2025.',
    image: '/images/frontend.webp',
    category: 'Frontend',
    tags: ['React', 'Performance', 'Best Practices'],
    readingTime: '5 min read',
    date: 'Aug 10, 2025',
    content:""
  },
  {
    title: '10 TailwindCSS Tips You Need to Know',
    description:
    'Speed up your workflow and make your designs shine with these Tailwind tricks.',
    image: '/images/tailwind.webp',
    category: 'CSS',
    tags: ['Tailwind', 'Design', 'Tips'],
    readingTime: '3 min read',
    date: 'Aug 8, 2025',
    content:""
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
    content:""
  },
];
