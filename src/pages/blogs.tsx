import { AppSidebar } from '@/components/app-sidebar';
import SidebarInsetHeader from '@/components/blogs/SidebarInsetHeader';
import { SidebarProvider } from '@/components/ui/sidebar';
import { motion } from 'framer-motion';

const Blogs = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className='min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900'
    >
      <SidebarProvider defaultOpen={true}>
        <div className='flex h-screen w-full'>
          <AppSidebar />
          <SidebarInsetHeader />
        </div>
      </SidebarProvider>
    </motion.div>
  );
};

export default Blogs;
