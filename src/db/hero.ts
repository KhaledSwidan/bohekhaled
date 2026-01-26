// src/db/hero.ts

import { Github, Linkedin, Mail, type LucideIcon } from 'lucide-react';

export const titles = [
  'Frontend Developer',
  'Building with React & Next.js',
  'Working with TypeScript',
  'Focused on UI & UX',
];

export interface SocialLink {
  icon: LucideIcon;
  href: string;
  label: string;
  ariaLabel?: string;
  showInFooter?: boolean;
}

export const socialLinks: readonly SocialLink[] = [
  {
    icon: Github,
    href: 'https://github.com/KhaledSwidan',
    label: 'GitHub',
    ariaLabel: 'Visit my GitHub profile',
    showInFooter: true,
  },
  {
    icon: Linkedin,
    href: 'https://www.linkedin.com/in/bohemiancoder/',
    label: 'LinkedIn',
    ariaLabel: 'Connect with me on LinkedIn',
    showInFooter: true,
  },
  {
    icon: Mail,
    href: 'mailto:khaledqutb4@gmail.com',
    label: 'Email',
    ariaLabel: 'Send me an email',
    showInFooter: true,
  },
] as const;

// ✅ 3. Helper functions
export const getSocialLinkByLabel = (label: string) =>
  socialLinks.find((link) => link.label === label);

export const footerSocialLinks = socialLinks.filter(
  (link) => link.showInFooter,
);

// ✅ 4. Type exports للاستخدام في components
export type SocialLinkLabel = (typeof socialLinks)[number]['label'];
// Type: 'GitHub' | 'LinkedIn' | 'Email'
