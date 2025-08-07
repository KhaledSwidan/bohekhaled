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
    // {
    //   name: 'Acme Corp.',
    //   logo: AudioWaveform,
    //   plan: 'Startup',
    // },
    // {
    //   name: 'Evil Corp.',
    //   logo: Command,
    //   plan: 'Free',
    // },
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
