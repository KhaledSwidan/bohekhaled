// src/lib/blogs_contents_structure.tsx

import LoadingSection from '@/components/loading-section';
import {
  BlogSection,
  BlogHeader,
  BlogQuote,
} from '@/components/blogs/articles/blog-elements';
import { Quote } from 'lucide-react';
import type {
  BlogContentConfig,
  BlogContentConfigLoading,
} from '@/types/blogs';

// ==================== Reusable Article Renderer ====================
export function BlogArticleRenderer({ config }: { config: BlogContentConfig }) {
  return (
    <article className='prose prose-invert max-w-none leading-relaxed'>
      <BlogHeader title={config.title} description={config.description} />

      {config.sections.map((section, idx) => (
        <BlogSection
          key={section.id ?? idx}
          id={section.id}
          title={section.title}
          description={section.description}
          icon={section.icon}
          iconColor={section.iconColor}
        >
          {section.content}
        </BlogSection>
      ))}
      {config.blogQuoteText && (
        <BlogQuote icon={Quote} text={config.blogQuoteText} />
      )}
    </article>
  );
}

export function BlogArticleRendererLoading({
  config,
}: {
  config: BlogContentConfigLoading;
}) {
  return (
    <article className='prose prose-invert max-w-none leading-relaxed'>
      <p itemProp='description'>{config.description}</p>
      <LoadingSection />
    </article>
  );
}
