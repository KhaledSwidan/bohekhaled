import { BrowserRouter as Router } from 'react-router-dom';
import SEOMeta from '@/lib/seo-meta';
import ScrollToTop from '@/components/scroll-to-top';
import { ErrorBoundary } from '@/components/error-boundary';
import BackgroundAnimation from './components/hero/background-animation';
import AppRoutes from './router/routes';
import ToasterConfig from './components/ToasterConfig';

function App() {
  return (
    <ErrorBoundary>
      <SEOMeta />
      <Router>
        <div className='min-h-screen bg-slate-900 text-slate-50 transition-colors duration-300'>
          <BackgroundAnimation />
          <AppRoutes />
          <ScrollToTop />
          <ToasterConfig />
        </div>
      </Router>
    </ErrorBoundary>
  );
}

export default App;
