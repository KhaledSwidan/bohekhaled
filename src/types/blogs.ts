import type { LucideIcon } from 'lucide-react';
import type { ReactElement, ReactNode } from 'react';

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
  content: string | ReactElement;
}

export type BlogProps = {
  slug: string;
  title: string;
  description: string;
  image: string;
  category: string;
  tags: string[];
  readingTime: string;
  date: string;
  content: ReactElement; // JSX هنا
};

// ==================== Blog Article Types ====================

export interface BlogContentConfigLoading {
  description: ReactNode;
}

export interface BlogContentConfig {
  title: string;
  description: ReactNode;
  sections: BlogSectionConfig[];
  blogQuoteText: ReactNode;
}

export interface BlogSectionConfig {
  id: string;
  title: string;
  description: ReactNode;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  iconColor: string;
  content: ReactNode;
}

// ==================== Blog Elements Types ====================
export interface BlogSectionProps {
  id: string;
  title: string;
  description: ReactNode;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  iconColor: string;
  children: ReactNode;
  className?: string;
}

export interface BlogHeaderProps {
  title: string;
  description: ReactNode;
}
export interface BlogCodeProps {
  code: string;
  language?: string;
  className?: string;
}

export interface BlogFigureProps {
  caption: string;
  code: string;
  language?: string;
}

export interface BlogQuoteProps {
  text: ReactNode;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  iconColor?: string;
}

interface BlogListItem {
  icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  iconColor?: string;
  title?: string;
  content: ReactNode;
}

export interface BlogListProps {
  items: BlogListItem[];
  type?: 'ul' | 'ol';
}

export interface BestPracticeItem {
  type: 'success' | 'warning' | 'info';
  text: ReactNode;
}

export interface BlogBestPracticesProps {
  title?: string;
  items: BestPracticeItem[];
}
