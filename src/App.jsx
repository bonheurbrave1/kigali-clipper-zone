import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppFloat from './components/WhatsAppFloat';
import Loader from './components/Loader';
import Home from './pages/Home';
import ServicesPage from './pages/ServicesPage';
import GalleryPage from './pages/GalleryPage';
import TeamPage from './pages/TeamPage';
import ProductsPage from './pages/ProductsPage';
import Contact from './pages/Contact';
import About from './pages/About';
import BookingPage from './pages/BookingPage';
import ScrollToTop from './components/ScrollToTop';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    setTimeout(() => setLoading(false), 1500);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <Router>
      <ScrollToTop />
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="*" element={<Navigate to={"/"} />} />
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/team" element={<TeamPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/booking" element={<BookingPage />} />
        </Routes>
        <Footer />
        <WhatsAppFloat />
      </div>
    </Router>
  );
}

export default App;