import LoadingSection from '@/components/loading-section';

const Blogs = () => {
  return (
    <section className='py-24 min-h-screen bg-slate-900'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        <LoadingSection
          title='Blogs Coming Soon 🛠️'
          message='I’m currently working on insightful blog posts to share my journey, tips, and experiences. Stay tuned!'
        />
      </div>
    </section>
  );
};

export default Blogs;
