// src/pages/Blogs.tsx
import { useState, useEffect } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Skeleton } from '@/components/ui/skeleton';
import { allBlogs, type AllBlogsProps } from '@/db/blogs';
import { Timer } from 'lucide-react';
import { Link } from 'react-router-dom';

const BlogsContent = () => {
  const [visibleBlogs, setVisibleBlogs] = useState<AllBlogsProps[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [itemsToShow, setItemsToShow] = useState<number>(3);

  useEffect(() => {
    setTimeout(() => {
      setVisibleBlogs(allBlogs.slice(0, itemsToShow));
      setLoading(false);
    }, 1200);
  }, [itemsToShow]);

  const loadMore = () => {
    setLoading(true);
    setTimeout(() => {
      setItemsToShow((prev) => prev + 3);
    }, 500);
  };

  return (
    <div className='container mx-auto py-10'>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-5'>
        {loading
          ? Array.from({ length: itemsToShow }).map((_, idx) => (
              <Card key={idx} className='overflow-hidden'>
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
              <Card
                key={blog.title ?? idx}
                className='overflow-hidden group hover:shadow-lg transition-shadow duration-300 border-zinc-600'
              >
                <div className='relative h-48'>
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className='w-full h-full object-cover transition-transform duration-300 group-hover:scale-105'
                  />
                </div>

                <CardHeader>
                  <div className='flex items-center justify-between'>
                    <Badge
                      className='bg-slate-500 text-slate-800'
                      variant='secondary'
                    >
                      {blog.category}
                    </Badge>
                    <span className='text-xs text-slate-500'>{blog.date}</span>
                  </div>
                  <CardTitle className='line-clamp-2 text-slate-300'>
                    {blog.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className='text-sm text-slate-400 line-clamp-3 mb-4'>
                    {blog.description}
                  </p>

                  <div className='flex flex-wrap gap-2 mb-4'>
                    {blog.tags.map((tag: string, i: number) => (
                      <Badge
                        key={i}
                        variant='outline'
                        className='text-xs border-slate-700 text-slate-500'
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <p className='flex justify-start items-center text-xs text-slate-500 dark:text-slate-400 mb-4'>
                    <Timer className='mr-1' size={15} /> {blog.readingTime}
                  </p>
                  <div className='flex justify-start items-end'>
                    {' '}
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
              </Card>
            ))}
      </div>

      {/* Load More */}
      {!loading && visibleBlogs.length < allBlogs.length && (
        <div className='text-center mt-8'>
          <Button
            onClick={loadMore}
            className='bg-slate-700 hover:bg-slate-800 text-white'
          >
            Load More
          </Button>
        </div>
      )}
    </div>
  );
};

export default BlogsContent;
