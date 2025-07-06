import { Suspense, lazy } from 'react';
import { Toaster } from '@/components/ui/sonner';
import SEOMeta from '@/components/seo-meta';
import Navbar from '@/pages/navbar';
import Hero from '@/components/hero';
import ScrollToTop from '@/components/scroll-to-top';
import ErrorBoundary from '@/components/error-boundary';
import { SectionLoader } from './components/loading-spinner';

// Lazy Loading for better performance
const About = lazy(() => import('@/components/about'));
const Projects = lazy(() => import('@/components/projects'));
const Contact = lazy(() => import('@/components/contact'));
const Footer = lazy(() => import('@/components/footer'));

function App() {
  return (
    <ErrorBoundary>
      <SEOMeta />

      <div className='min-h-screen bg-slate-900 text-slate-50 transition-colors duration-300'>
        <Navbar />

        <main role='main' className='relative'>
          <Hero />

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

        <ScrollToTop />
        <Toaster
          position='top-right'
          toastOptions={{
            duration: 4000,
            style: {
              background: 'hsl(var(--card))',
              color: 'hsl(var(--card-foreground))',
              border: '1px solid hsl(var(--border))',
            },
          }}
        />
      </div>
    </ErrorBoundary>
  );
}

export default App;
