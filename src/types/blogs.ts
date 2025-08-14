import type { LucideIcon } from 'lucide-react';

export interface TeamSwitcherProps {
  teams: {
    name: string;
    logo: React.ElementType;
    plan: string;
  }[];
}

export interface NavMainProps {
  items: {
    title: string;
    url: string;
    icon?: LucideIcon;
    isActive?: boolean;
    items?: {
      title: string;
      url: string;
    }[];
  }[];
}

export interface NavProjectsProps {
  projects: {
    name: string;
    urlLive: string;
    urlDemo: string;
    icon: LucideIcon;
  }[];
}

export interface NavUserProps {
  user: {
    name: string;
    email: string;
    avatar: string;
    github: string;
    linkdin: string;
    facebook: string;
  };
}

export interface BlogArticleProps {
  image: string;
  category: string;
  date: string;
  title: string;
  description: string;
  tags: string[];
  readingTime: string;
  content: string;
}
