// src/pages/BlogsContent.tsx
import { useState, useEffect, memo } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Skeleton } from '@/components/ui/skeleton';
import { Timer } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import type { BlogArticleProps } from '@/types/blogs';
import { allBlogs } from '@/db/blogs';

const BlogsContentComponent = () => {
  const [visibleBlogs, setVisibleBlogs] = useState<BlogArticleProps[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [itemsToShow, setItemsToShow] = useState<number>(3);

  useEffect(() => {
    setLoading(true);
    const timeout = setTimeout(() => {
      setVisibleBlogs(allBlogs.slice(0, itemsToShow));
      setLoading(false);
    }, 800);
    return () => clearTimeout(timeout);
  }, [itemsToShow]);

  const loadMore = () => {
    setLoading(true);
    setTimeout(() => {
      setItemsToShow((prev) => prev + 3);
    }, 500);
  };

  return (
    <div className='container mx-auto py-10 px-5'>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
        {loading
          ? Array.from({ length: itemsToShow }).map((_, idx) => (
              <Card key={idx} className='overflow-hidden animate-pulse'>
                <Skeleton className='h-48 w-full' />
                <div className='p-4 space-y-3'>
                  <Skeleton className='h-4 w-24' />
                  <Skeleton className='h-6 w-3/4' />
                  <Skeleton className='h-4 w-full' />
                  <Skeleton className='h-4 w-1/2' />
                </div>
              </Card>
            ))
          : visibleBlogs.map((blog, idx) => (
              <motion.article
                key={blog.title ?? idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1, duration: 0.4 }}
                className='group overflow-hidden rounded-lg border border-slate-700 shadow-md hover:shadow-lg transition-shadow duration-300 bg-slate-900'
              >
                <figure className='relative h-48 overflow-hidden rounded-t-lg'>
                  <img
                    src={blog.image}
                    alt={`صورة مقال: ${blog.title}`}
                    className='w-full h-full object-cover transition-transform duration-300 group-hover:scale-105'
                    loading='lazy'
                  />
                  <figcaption className='sr-only'>
                    {blog.title} - صورة توضيحية للمقالة
                  </figcaption>
                </figure>

                <CardHeader className='p-4'>
                  <div className='flex items-center justify-between mb-2'>
                    <Badge
                      className='bg-slate-500 text-slate-800'
                      variant='secondary'
                    >
                      {blog.category}
                    </Badge>
                    <time
                      dateTime={new Date(blog.date).toISOString()}
                      className='text-xs text-slate-500'
                    >
                      {blog.date}
                    </time>
                  </div>
                  <CardTitle className='text-lg text-slate-200 line-clamp-2'>
                    {blog.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className='p-4'>
                  <p className='text-sm text-slate-400 line-clamp-3 mb-3'>
                    {blog.description}
                  </p>

                  <div className='flex flex-wrap gap-2 mb-3'>
                    {blog.tags.map((tag, i) => (
                      <Badge
                        key={i}
                        variant='outline'
                        className='text-xs border-slate-700 text-slate-500 hover:bg-slate-700/20 transition-colors duration-200'
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <div className='flex items-center justify-between'>
                    <span className='flex items-center text-xs text-slate-500'>
                      <Timer className='mr-1' size={15} aria-hidden='true' />{' '}
                      {blog.readingTime}
                    </span>
                    <Button
                      asChild
                      variant='outline'
                      size='sm'
                      className='border-slate-300 text-slate-500 text-sm'
                    >
                      <Link to={`/blogs/${encodeURIComponent(blog.title)}`}>
                        Read More
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </motion.article>
            ))}
      </div>

      {/* Load More Button */}
      {!loading && visibleBlogs.length < allBlogs.length && (
        <div className='text-center mt-8'>
          <Button
            onClick={loadMore}
            className='bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white transition-colors duration-300'
          >
            Load More
          </Button>
        </div>
      )}
    </div>
  );
};

export const BlogsContent = memo(BlogsContentComponent);
