import { AppSidebar } from '@/components/blogs/sidebar/app-sidebar';
import BackgroundAnimation from '@/components/hero/background-animation';
import { SidebarProvider } from '@/components/ui/sidebar';

const SecodaryLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className='pointer-events-none fixed inset-0 -z-10'>
        <BackgroundAnimation />
      </div>
      <SidebarProvider defaultOpen={true}>
        <main className='relative z-10 flex min-h-screen w-full'>
          <AppSidebar />
          <div className='flex-1 overflow-y-auto'>{children}</div>
        </main>
      </SidebarProvider>
    </>
  );
};

export default SecodaryLayout;
