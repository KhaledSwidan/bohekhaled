// src/components/loading-section.tsx

import { Loader2 } from 'lucide-react';
import { motion } from 'framer-motion';

export default function LoadingSection({
  title = 'Coming Soon',
  message = 'This section is currently under construction. Please check back later!',
}: {
  title?: string;
  message?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className='flex flex-col items-center justify-center min-h-[60vh] text-center space-y-6 px-4'
    >
      <div className='flex items-center justify-center w-20 h-20 rounded-full bg-slate-800/50 backdrop-blur-md border border-slate-600/40'>
        <Loader2 className='w-10 h-10 animate-spin text-slate-300' />
      </div>
      <h2 className='text-2xl font-semibold text-slate-200'>{title}</h2>
      <p className='text-slate-400 max-w-md'>{message}</p>
    </motion.div>
  );
}
