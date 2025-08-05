import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';
import { SectionLoader } from '@/components/loading-spinner';
import { Suspense } from 'react';
import MainLayout from '@/layouts/MainLayout';

// Lazy Loading for pages
const Home = lazy(() => import('@/pages/home'));
const About = lazy(() => import('@/pages/about-page'));
const Projects = lazy(() => import('@/pages/projects-page'));
const Contact = lazy(() => import('@/pages/contact-page'));
const Blogs = lazy(() => import('@/pages/blogs'));
const NotFoundPage = lazy(() => import('@/pages/not-found-page'));

const AppRoutes = () => (
  <Suspense fallback={<SectionLoader label='Loading Page...' />}>
    <Routes>
      <Route
        path='/'
        element={
          <MainLayout>
            <Home />
          </MainLayout>
        }
      />
      <Route
        path='/about'
        element={
          <MainLayout>
            <About />
          </MainLayout>
        }
      />
      <Route
        path='/projects'
        element={
          <MainLayout>
            <Projects />
          </MainLayout>
        }
      />
      <Route
        path='/contact'
        element={
          <MainLayout>
            <Contact />
          </MainLayout>
        }
      />
      <Route path='/blogs' element={<Blogs />} />
      <Route path='*' element={<NotFoundPage />} />
    </Routes>
  </Suspense>
);

export default AppRoutes;
