import BacktoBlogs from '@/components/blogs/BacktoBlogs';
import LoadingSection from '@/components/loading-section';

export const LoadingContent = () => {
  return (
    <>
      <LoadingSection />
      <div className='flex justify-center items-center'>
        <BacktoBlogs />
      </div>
    </>
  );
};

