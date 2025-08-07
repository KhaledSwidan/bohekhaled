import { AppSidebar } from '@/components/app-sidebar';
import SidebarInsetHeader from '@/components/blogs/SidebarInsetHeader';
import { SidebarProvider } from '@/components/ui/sidebar';

const Blogs = () => {
  return (
    <SidebarProvider defaultOpen={true}>
      <div className='flex h-screen w-full'>
        <AppSidebar />
        <SidebarInsetHeader />
      </div>
    </SidebarProvider>
  );
};

export default Blogs;
