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
  const { data: commonData, loading: commonLoading } = useCommonData();

  useEffect(() => {
    // Hide preloader when common data (Header/Footer) finishes loading
    if (!commonLoading && commonData) {
      // Add small delay for smooth transition
      setTimeout(() => {
        setShowPreloader(false);
      }, 300);
    }
  }, [commonLoading, commonData]);

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
