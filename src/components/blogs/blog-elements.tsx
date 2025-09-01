// src/components/blog-elements.tsx

import type {
  BestPracticeItem,
  BlogBestPracticesProps,
  BlogCodeProps,
  BlogFigureProps,
  BlogHeaderProps,
  BlogListProps,
  BlogQuoteProps,
  BlogSectionProps,
} from '@/types/blogs';
import { CheckCircle2, AlertTriangle, Lightbulb } from 'lucide-react';
import type { ReactNode } from 'react';

// ==================== Styled Components ====================
const contentStyle = {
  h2: 'text-xl font-bold text-slate-200 mb-2',
  h3: 'text-lg font-semibold text-slate-200 mb-2',
  p: 'text-slate-300',
  section: 'my-8',
  code: 'bg-slate-800 p-4 rounded-md overflow-x-auto',
  list: 'space-y-2 text-slate-300',
};

// ==================== Blog Components ====================
export function BlogHeader({ title, description }: BlogHeaderProps) {
  return (
    <header className='mb-8'>
      <h1 className='text-3xl font-bold text-slate-100 mb-4'>{title}</h1>
      <p
        className='text-lg text-slate-300 leading-relaxed'
        itemProp='description'
      >
        {description}
      </p>
    </header>
  );
}

export function BlogSection({
  id,
  title,
  icon: Icon,
  iconColor,
  children,
  className = '',
}: BlogSectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-heading`}
      className={`${contentStyle.section} ${className}`}
    >
      <h2 id={`${id}-heading`} className={contentStyle.h2}>
        <Icon
          aria-hidden='true'
          className={`inline w-6 h-6 ${iconColor} mr-2`}
        />
        {title}
      </h2>
      {children}
    </section>
  );
}

export function BlogCode({
  code,
  language = 'javascript',
  className = '',
}: BlogCodeProps) {
  return (
    <pre className={`${contentStyle.code} ${className}`}>
      <code className={`language-${language}`}>{code}</code>
    </pre>
  );
}

export function BlogFigure({
  caption,
  code,
  language = 'javascript',
}: BlogFigureProps) {
  return (
    <figure role='group' aria-labelledby='fig-caption' className='my-4'>
      <figcaption
        id='fig-caption'
        className='font-semibold mb-2 flex items-center gap-1'
      >
        <Lightbulb className='h-4 w-4 text-yellow-400' aria-hidden='true' />
        {caption}
      </figcaption>
      <BlogCode code={code} language={language} />
    </figure>
  );
}

export function BlogQuote({
  text,
  icon: Icon,
  iconColor = 'text-sky-400',
}: BlogQuoteProps) {
  return (
    <blockquote className='my-6 border-l-4 border-slate-600 pl-4 italic'>
      <Icon aria-hidden='true' className={`inline w-5 h-5 ${iconColor} mr-2`} />
      {text}
    </blockquote>
  );
}

export function BlogList({ items, type = 'ul' }: BlogListProps) {
  const ListComponent = type;

  return (
    <ListComponent className={contentStyle.list}>
      {items.map((item, index) => (
        <li key={index} className='flex items-start gap-2'>
          <item.icon
            aria-hidden='true'
            className={`inline w-5 h-5 ${item.iconColor} mr-1 mt-0.5 flex-shrink-0`}
          />
          <span>
            <strong>{item.title}</strong> {item.content}
          </span>
        </li>
      ))}
    </ListComponent>
  );
}

export function BlogBestPractices({ title, items }: BlogBestPracticesProps) {
  const getIcon = (type: BestPracticeItem['type']) => {
    switch (type) {
      case 'success':
        return { icon: CheckCircle2, color: 'text-emerald-400' };
      case 'warning':
        return { icon: AlertTriangle, color: 'text-amber-400' };
      case 'info':
      default:
        return { icon: Lightbulb, color: 'text-blue-400' };
    }
  };

  return (
    <div className='my-6'>
      {title && (
        <h3 className={`${contentStyle.h3} flex items-center gap-2`}>
          <CheckCircle2
            className='w-6 h-6 text-emerald-400'
            aria-hidden='true'
          />
          {title}
        </h3>
      )}
      <ul className={contentStyle.list}>
        {items.map((item, index) => {
          const { icon: ItemIcon, color } = getIcon(item.type);
          return (
            <li key={index} className='flex items-start gap-2'>
              <ItemIcon className={`mt-0.5 h-5 w-5 shrink-0 ${color}`} />
              <span>{item.text}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

// ==================== Specialized Components ====================
export function CodeBlock({
  children,
  language = 'javascript',
  showLineNumbers = false,
}: {
  children: string;
  language?: string;
  showLineNumbers?: boolean;
}) {
  const lines = children.split('\n');

  return (
    <div className='relative group'>
      <pre className={`${contentStyle.code} ${showLineNumbers ? 'pl-12' : ''}`}>
        {showLineNumbers && (
          <div className='absolute left-0 top-0 bottom-0 w-10 bg-slate-700/50 flex flex-col text-slate-500 text-sm pt-4'>
            {lines.map((_, index) => (
              <span key={index} className='px-2 leading-6'>
                {index + 1}
              </span>
            ))}
          </div>
        )}
        <code className={`language-${language}`}>{children}</code>
      </pre>

      {/* Copy button */}
      <button
        onClick={() => navigator.clipboard.writeText(children)}
        className='absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity bg-slate-700 hover:bg-slate-600 text-slate-300 px-2 py-1 rounded text-xs'
        aria-label='نسخ الكود'
      >
        نسخ
      </button>
    </div>
  );
}

export function InfoBox({
  type = 'info',
  title,
  children,
}: {
  type?: 'info' | 'warning' | 'success';
  title?: string;
  children: ReactNode;
}) {
  const styles = {
    info: 'border-blue-500/30 bg-blue-500/10 text-blue-300',
    warning: 'border-amber-500/30 bg-amber-500/10 text-amber-300',
    success: 'border-emerald-500/30 bg-emerald-500/10 text-emerald-300',
  };

  const icons = {
    info: Lightbulb,
    warning: AlertTriangle,
    success: CheckCircle2,
  };

  const Icon = icons[type];

  return (
    <div className={`border rounded-lg p-4 my-4 ${styles[type]}`}>
      {title && (
        <div className='flex items-center gap-2 font-semibold mb-2'>
          <Icon className='w-5 h-5' />
          {title}
        </div>
      )}
      <div className='text-sm'>{children}</div>
    </div>
  );
}

// ==================== Layout Components ====================
export function BlogGrid({ children }: { children: ReactNode }) {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 gap-6 my-6'>{children}</div>
  );
}

export function BlogCard({
  title,
  children,
  icon,
  iconColor = 'text-slate-400',
}: {
  title: string;
  children: ReactNode;
  icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  iconColor?: string;
}) {
  return (
    <div className='border rounded-lg p-4 flex flex-col gap-2'>
      {icon &&
        (() => {
          const Icon = icon;
          return <Icon className={`w-6 h-6 ${iconColor}`} aria-hidden='true' />;
        })()}
      <h4 className='font-bold text-slate-200'>{title}</h4>
      <div>{children}</div>
    </div>
  );
}
