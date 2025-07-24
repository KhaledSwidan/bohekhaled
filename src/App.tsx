import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import { Toaster } from '@/components/ui/sonner';
import SEOMeta from '@/lib/seo-meta';
import Navbar from '@/pages/navbar';
import ScrollToTop from '@/components/scroll-to-top';
import { SectionLoader } from '@/components/loading-spinner';
import { ErrorBoundary } from '@/components/error-boundary';
import Footer from './pages/footer';
import BackgroundAnimation from './components/hero/background-animation';

// Lazy Loading for better performance
const Home = lazy(() => import('@/pages/home'));
const About = lazy(() => import('@/pages/about-page'));
const Projects = lazy(() => import('@/pages/projects-page'));
const Contact = lazy(() => import('@/pages/contact-page'));

function App() {
  return (
    <ErrorBoundary>
      <SEOMeta />
      <Router>
        <div className='min-h-screen bg-slate-900 text-slate-50 transition-colors duration-300'>
          <BackgroundAnimation />
          <Navbar />
          <main role='main' className='relative'>
            <Suspense fallback={<SectionLoader label='Loading Page...' />}>
              <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/projects' element={<Projects />} />
                <Route path='/contact' element={<Contact />} />
              </Routes>
            </Suspense>
          </main>
          <Footer />
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
      </Router>
    </ErrorBoundary>
  );
}

export default App;
