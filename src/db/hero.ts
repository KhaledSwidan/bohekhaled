import { Github, Linkedin, Mail } from 'lucide-react';

export const titles = [
  'Frontend Developer',
  'React.js Specialist',
  'TypeScript Expert',
  'UI/UX Enthusiast',
];

export const socialLinks = [
  {
    icon: Github,
    href: 'https://github.com/KhaledSwidan',
    label: 'GitHub',
  },
  {
    icon: Linkedin,
    href: 'https://www.linkedin.com/in/bohemiancoder/',
    label: 'LinkedIn',
  },
  {
    icon: Mail,
    href: 'mailto:khaledqutb4@gmail.com',
    label: 'Email',
  },
];

export const scrollToContact = () => {
  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
};

export const scrollToAbout = () => {
  document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
};
