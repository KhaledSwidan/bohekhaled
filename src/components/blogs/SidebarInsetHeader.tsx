// src/components/blogs/SidebarInsetHeader.tsx
import { BlogsContent } from './BlogsContent';
import { SidebarInset, SidebarTrigger } from '@/components/ui/sidebar';
import { motion } from 'framer-motion';
import { Separator } from '@/components/ui/separator';
import { Sparkles } from 'lucide-react';

const SidebarInsetHeader = () => {
  return (
    <SidebarInset>
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4 }}
        className='flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 border-b border-slate-700/50'
      >
        <div className='flex items-center gap-4 px-6'>
          <SidebarTrigger className='-ml-1 hover:bg-slate-700/50 transition-colors duration-200 rounded-md' />
          <Separator
            orientation='vertical'
            className='mr-2 data-[orientation=vertical]:h-6 bg-slate-600'
          />

          <motion.div
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.4 }}
            className='flex items-center gap-3'
          >
            <div className='p-2 rounded-lg bg-gradient-to-br from-blue-500/20 to-purple-600/20 border border-blue-500/30'>
              <Sparkles className='w-5 h-5 text-blue-400' />
            </div>
            <div>
              <h2 className='text-lg font-semibold text-slate-100'>
                Blog & Articles
              </h2>
              <p className='text-xs text-slate-400'>
                Explore the latest insights and tutorials
              </p>
            </div>
          </motion.div>
        </div>
      </motion.header>

      {/* Blogs Grid */}
      <BlogsContent />
    </SidebarInset>
  );
};

export default SidebarInsetHeader;
