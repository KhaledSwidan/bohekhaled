// src/components/blog/BlogArticle.tsx
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Timer } from 'lucide-react';
import { memo, useEffect } from 'react';
import type { BlogArticleProps } from '@/types/blogs';
import BacktoBlogs from './BacktoBlogs';

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
    <article className='container py-10 max-w-4xl'>
      <div className='mb-6 w-fit'>
        <BacktoBlogs />
      </div>

      <Card className='overflow-hidden border border-slate-700 shadow-lg'>
        <img
          src={image}
          alt={`صورة مقال: ${title}`}
          className='w-full h-72 object-cover'
          loading='lazy'
        />

        <CardContent className='p-6'>
          <div className='flex items-center justify-between mb-4'>
            <Badge variant='secondary' className='bg-slate-500 text-slate-800'>
              {category}
            </Badge>
            <span className='text-xs text-slate-500'>{date}</span>
          </div>

          {/* العنوان */}
          <h1 className='text-3xl font-bold text-slate-200 mb-4'>{title}</h1>

          {/* الوصف المختصر */}
          <p className='text-slate-400 mb-6'>{description}</p>

          {/* الوسوم */}
          <div className='flex flex-wrap gap-2 mb-6'>
            {tags.map((tag, i) => (
              <Badge
                key={i}
                variant='outline'
                className='text-xs border-slate-700 text-slate-500'
              >
                {tag}
              </Badge>
            ))}
          </div>

          {/* وقت القراءة */}
          <p className='flex items-center text-xs text-slate-500 mb-6'>
            <Timer className='mr-1' size={15} aria-hidden='true' />{' '}
            {readingTime}
          </p>

          {/* محتوى المقال */}
          <div className='prose prose-invert max-w-none leading-relaxed'>
            <p>{content}</p>
          </div>
        </CardContent>
      </Card>
    </article>
  );
}

export const BlogArticle = memo(BlogArticleComponent);
