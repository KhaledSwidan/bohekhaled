// src/components/blogs/BlogArticle.tsx
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Timer } from 'lucide-react';
import { memo, useEffect } from 'react';
import BacktoBlogs from './BacktoBlogs';
import { motion } from 'framer-motion';
import type { BlogArticleProps } from '@/types/blogs';

function BlogArticleComponent({
  image,
  category,
  date,
  title,
  description,
  tags,
  readingTime,
  content,
}: BlogArticleProps) {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, []);

  return (
    <article className='container py-10 max-w-4xl' aria-labelledby='blog-title'>
      <div className='mb-6 flex'>
        <BacktoBlogs />
      </div>

      <Card className='overflow-hidden border border-slate-700 shadow-lg rounded-lg pt-0 mx-4'>
        <figure className='relative'>
          <motion.img
            src={image}
            alt={`صورة مقال: ${title}`}
            className='w-full object-cover rounded-t-lg'
            loading='lazy'
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
          />
          <figcaption className='sr-only'>
            {title} - صورة توضيحية للمقالة
          </figcaption>
        </figure>

        <CardContent className='p-6'>
          <header className='mb-6'>
            <h1
              id='blog-title'
              className='text-3xl font-bold text-slate-200 mb-2'
            >
              {title}
            </h1>
            <p className='text-slate-400 mb-4'>{description}</p>
            <div className='flex flex-wrap items-center gap-4'>
              <time
                dateTime={new Date(date).toISOString()}
                className='text-xs text-slate-500'
              >
                {date}
              </time>
              <Badge
                variant='secondary'
                className='bg-gradient-to-r from-blue-500/20 to-purple-600/20 border border-blue-500/30'
              >
                {category}
              </Badge>
              <span className='flex items-center text-xs text-slate-500'>
                <Timer className='mr-1' size={15} aria-hidden='true' />{' '}
                {readingTime}
              </span>
            </div>
            <div className='flex flex-wrap gap-2 mt-4'>
              {tags.map((tag, i) => (
                <Badge
                  key={i}
                  variant='outline'
                  className='text-xs border-slate-700 text-slate-500 hover:bg-slate-700/20 transition-colors duration-200'
                >
                  {tag}
                </Badge>
              ))}
            </div>
          </header>

          <section className='prose prose-invert max-w-none leading-relaxed'>
            {/* {content.split('\n\n').map((para, idx) => (
              <p key={idx}>{para}</p>
            ))} */}
            {content}
          </section>
        </CardContent>
      </Card>
    </article>
  );
}

export const BlogArticle = memo(BlogArticleComponent);
