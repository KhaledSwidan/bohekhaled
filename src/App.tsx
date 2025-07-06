import { Suspense, lazy } from 'react';
import { Toaster } from '@/components/ui/sonner';
import { ThemeProvider } from '@/components/theme-provider';
import SEO from '@/scripts/SEO';
import Navbar from '@/components/navbar';
import Hero from '@/components/hero';
import ScrollToTop from '@/components/scroll-to-top';
import ErrorBoundary from '@/components/error-boundary';
import { SectionLoader } from './components/loading-spinner';

// ✅ Lazy Loading for better performance
const About = lazy(() => import('@/components/about'));
const Projects = lazy(() => import('@/components/projects'));
const Contact = lazy(() => import('@/components/contact'));
const Footer = lazy(() => import('@/components/footer'));

function App() {
  return (
    <ErrorBoundary>
      <SEO />

      <ThemeProvider defaultTheme='dark' storageKey='vite-ui-theme'>
        <div className='min-h-screen bg-slate-800 text-zinc-50 transition-colors duration-300'>
          {/* ✅ Navigation - Always visible */}
          <Navbar />

          {/* ✅ Main content with proper semantic structure */}
          <main role='main' className='relative'>
            {/* ✅ Hero section - Critical, load immediately */}
            <Hero />

            {/* ✅ Lazy loaded sections with loading states */}
            <Suspense fallback={<SectionLoader />}>
              <About />
            </Suspense>

            <Suspense fallback={<SectionLoader />}>
              <Projects />
            </Suspense>

            <Suspense fallback={<SectionLoader />}>
              <Contact />
            </Suspense>

            <Suspense fallback={<SectionLoader />}>
              <Footer />
            </Suspense>
          </main>

          {/* ✅ Utility components */}
          <ScrollToTop />
          <Toaster
            position='top-right'
            toastOptions={{
              duration: 4000,
              style: {
                background: 'var(--background)',
                color: 'var(--foreground)',
                border: '1px solid var(--border)',
              },
            }}
          />
        </div>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
