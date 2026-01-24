import { Routes, Route } from 'react-router-dom';
import React, { lazy } from 'react';
import { SectionLoader } from '@/components/loading-spinner';
import { Suspense } from 'react';
import MainLayout from '@/layouts/MainLayout';
import SecodaryLayout from '@/layouts/SecodaryLayout';

// Lazy Loading for pages
const Home = lazy(() => import('@/pages/home'));
const About = lazy(() => import('@/pages/about-page'));
const Projects = lazy(() => import('@/pages/projects-page'));
const Contact = lazy(() => import('@/pages/contact-page'));
const Blogs = lazy(() => import('@/pages/blogs'));
const BlogDetails = React.lazy(() => import('@/pages/BlogDetails'));
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
      <Route
        path='/blogs'
        element={
          <SecodaryLayout>
            <Blogs />
          </SecodaryLayout>
        }
      />
      <Route
        path='/blogs/:blogName'
        element={
          <SecodaryLayout>
            <BlogDetails />
          </SecodaryLayout>
        }
      />
      <Route path='*' element={<NotFoundPage />} />
    </Routes>
  </Suspense>
);

export default AppRoutes;
