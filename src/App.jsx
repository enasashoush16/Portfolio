import { lazy, Suspense } from 'react';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Layout from './components/layout/Layout.jsx';
import ScrollToTop from './components/layout/ScrollToTop.jsx';
import LoadingScreen from './components/ui/LoadingScreen.jsx';

const Home = lazy(() => import('./pages/Home/Home.jsx'));
const About = lazy(() => import('./pages/About/About.jsx'));
const Experience = lazy(() => import('./pages/Experience/Experience.jsx'));
const Education = lazy(() => import('./pages/Education/Education.jsx'));
const Skills = lazy(() => import('./pages/Skills/Skills.jsx'));
const Projects = lazy(() => import('./pages/Projects/Projects.jsx'));
const Contact = lazy(() => import('./pages/Contact/Contact.jsx'));
const NotFound = lazy(() => import('./pages/NotFound/NotFound.jsx'));

export default function App() {
  const location = useLocation();

  return (
    <>
      <ScrollToTop />
      <Layout>
        <Suspense fallback={<LoadingScreen />}>
          <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/experience" element={<Experience />} />
              <Route path="/education" element={<Education />} />
              <Route path="/skills" element={<Skills />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/resume" element={<Navigate to="/contact" replace />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </AnimatePresence>
        </Suspense>
      </Layout>
    </>
  );
}
