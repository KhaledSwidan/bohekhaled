// src/pages/BlogDetails.tsx
import { useParams } from 'react-router-dom';
import { allBlogs } from '@/db/blogs';
import { BlogArticle } from '@/components/blogs/BlogArticle';
import BacktoBlogs from '@/components/blogs/BacktoBlogs';

export default function BlogDetails() {
  const { blogName } = useParams();
  const blog = allBlogs.find(
    (b) =>
      b.title.toLowerCase() === decodeURIComponent(blogName || '').toLowerCase()
  );

  if (!blog) {
    return (
      <div className='container py-16 text-center'>
        <p className='text-lg text-slate-500'>المقالة غير موجودة</p>
        <BacktoBlogs />
      </div>
    );
  }

  return (
    <BlogArticle
      image={blog.image}
      category={blog.category}
      date={blog.date}
      title={blog.title}
      description={blog.description}
      tags={blog.tags}
      readingTime={blog.readingTime}
      content={blog.content}
    />
  );
}
