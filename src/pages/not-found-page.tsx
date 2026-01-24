import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div className='flex flex-col items-center justify-center h-screen text-center px-4'>
      <h1 className='text-6xl font-bold mb-4'>404</h1>
      <p className='text-xl mb-6'>
        Oops! The page you're looking for doesn't exist.
      </p>
      <Link
        to='/'
        className='cursor-pointer px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition'
      >
        Go back to homepage
      </Link>
    </div>
  );
};

export default NotFoundPage;
