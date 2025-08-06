// src/pages/blogs

import { AppSidebar } from '@/components/app-sidebar';
import SidebarInsetHeader from '@/components/blogs/SidebarInsetHeader';
import { SidebarProvider } from '@/components/ui/sidebar';

const Blogs = () => {
  return (
    <>
      <SidebarProvider>
        <AppSidebar />
        <SidebarInsetHeader />
      </SidebarProvider>
    </>
  );
};

export default Blogs;
