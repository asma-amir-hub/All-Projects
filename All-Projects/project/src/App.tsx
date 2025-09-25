import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import FeaturedCars from './components/FeaturedCars';
import Services from './components/Services';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

function App() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-white overflow-x-hidden">
      <div 
        className="fixed inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-800 -z-10"
        style={{
          transform: `translateY(${scrollY * 0.5}px)`,
        }}
      />
      
      <Header />
      <main>
        <Hero scrollY={scrollY} />
        <FeaturedCars />
        <Services />
        <About />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;