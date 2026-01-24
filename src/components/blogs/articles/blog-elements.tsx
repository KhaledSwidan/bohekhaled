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
import { contentStyle } from './styled-components';

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
  description,
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
      <p className={contentStyle.p}>{description}</p>
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
        <Lightbulb className='h-4 w-4 text-green-500' aria-hidden='true' />
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
          {item.icon && (
            <item.icon
              aria-hidden='true'
              className={`inline w-5 h-5 ${item.iconColor} mr-1 mt-0.5 flex-shrink-0`}
            />
          )}

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
