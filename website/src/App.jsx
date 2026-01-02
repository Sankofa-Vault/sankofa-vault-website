import React from 'react';
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
import { PreloaderProvider, usePreloader } from './contexts/PreloaderContext';

function AppContent() {
  const { isAppLoading } = usePreloader();

  return (
    <>
      {isAppLoading && <AppPreloader />}
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

function App() {
  return (
    <PreloaderProvider>
      <AppContent />
    </PreloaderProvider>
  );
}

export default App;
