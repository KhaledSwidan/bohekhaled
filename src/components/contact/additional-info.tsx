import { motion } from 'framer-motion';
import { cardVariants } from '@/db/contact';

const AdditionalInfo = () => {
  return (
    <motion.div
      variants={cardVariants}
      className='pt-4 border-t border-slate-700/50'
    >
      <p className='text-xs text-slate-500 text-center'>
        Your information is secure and will never be shared with third parties.
      </p>
    </motion.div>
  );
};

export default AdditionalInfo;
