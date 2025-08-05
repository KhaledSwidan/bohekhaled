import { AppSidebar } from '@/components/app-sidebar';
import BlogsContent from '@/components/blogs/BlogsContent';
import { SidebarProvider } from '@/components/ui/sidebar';

const Blogs = () => {
  return (
    <SidebarProvider>
      <AppSidebar />
      <BlogsContent />
    </SidebarProvider>
  );
};

export default Blogs;
