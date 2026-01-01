import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Mission from './pages/Mission';
import Portfolio from './pages/Portfolio';
import Service from './pages/Service';
import Team from './pages/Team';
import ScrollToTop from './components/ScrollToTop';
import AppPreloader from './components/AppPreloader';
import { useCommonData } from './hooks/useContentData';

function App() {
  const [showPreloader, setShowPreloader] = useState(true);
  const { data: commonData, loading: commonLoading, error: commonError } = useCommonData();

  useEffect(() => {
    // Safety timeout: Force hide preloader after 5 seconds max
    const safetyTimer = setTimeout(() => {
      console.warn('Preloader safety timeout triggered - hiding preloader');
      setShowPreloader(false);
    }, 5000); // 5 seconds max

    // Hide preloader when common data (Header/Footer) finishes loading
    if (!commonLoading) {
      if (commonData) {
        // Success: Data loaded
        console.log('Preloader hiding - data loaded successfully');
        setTimeout(() => {
          setShowPreloader(false);
          clearTimeout(safetyTimer);
        }, 300);
      } else if (commonError) {
        // Error: Data failed to load
        console.error('Preloader hiding - data load failed:', commonError);
        setTimeout(() => {
          setShowPreloader(false);
          clearTimeout(safetyTimer);
        }, 300);
      }
    }

    return () => {
      clearTimeout(safetyTimer);
    };
  }, [commonLoading, commonData, commonError]);

  return (
    <>
      {showPreloader && <AppPreloader />}
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/mission" element={<Mission />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/team" element={<Team />} />
        <Route path="*" element={<Home />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
