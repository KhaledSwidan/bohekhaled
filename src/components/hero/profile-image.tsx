import { motion } from 'framer-motion';

const ProfileImage = () => {
  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className='w-28 h-28 mx-auto mb-8'
    >
      <div className='w-full h-full rounded-full bg-gradient-to-br from-slate-600 via-zinc-800 to-slate-700 p-1 shadow-2xl'>
        <div className='w-full h-full rounded-full bg-slate-900 flex items-center justify-center'>
          <span className='text-4xl font-bold text-slate-200'>KS</span>
        </div>
      </div>
    </motion.div>
  );
};

export default ProfileImage;
