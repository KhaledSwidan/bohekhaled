import { Suspense, lazy } from 'react';
import { Toaster } from '@/components/ui/sonner';
import SEOMeta from '@/lib/seo-meta';
import Navbar from '@/pages/navbar';
import Hero from '@/pages/hero';
import ScrollToTop from '@/components/scroll-to-top';
import { SectionLoader } from '@/components/loading-spinner';
import { ErrorBoundary } from '@/components/error-boundary';

// Lazy Loading for better performance
const About = lazy(() => import('@/pages/about'));
const Projects = lazy(() => import('@/pages/projects'));
const Contact = lazy(() => import('@/pages/contact'));
// const Footer = lazy(() => import('@/components/footer'));

function App() {
  return (
    <ErrorBoundary>
      <SEOMeta />

      <div className='min-h-screen bg-slate-900 text-slate-50 transition-colors duration-300'>
        <Navbar />

        <main role='main' className='relative'>
          <Hero />

          <Suspense
            fallback={<SectionLoader label='Loading About-Section...' />}
          >
            <About />
          </Suspense>

          <Suspense
            fallback={<SectionLoader label='Loading Projects-Section' />}
          >
            <Projects />
          </Suspense>

          <Suspense
            fallback={<SectionLoader label='Loading Contact-Section' />}
          >
            <Contact />
          </Suspense>

          <Suspense fallback={<SectionLoader label='Loading Footer-Section' />}>
            {/* <Footer /> */}
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
