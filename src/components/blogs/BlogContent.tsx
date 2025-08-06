import { Link } from 'react-router-dom';
import LoadingSection from '../loading-section';

const BlogContent = () => {
  return (
    <>
      {' '}
      {/* <div className='flex flex-1 flex-col gap-4 p-4 pt-0'> */}
      {/* </div> */}
      <div className='flex flex-col items-center justify-center h-screen text-center px-4'>
        <LoadingSection />
        <Link
          to='/'
          className='cursor-pointer px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition'
        >
          Go back to homepage
        </Link>
      </div>
    </>
  );
};

export default BlogContent;
