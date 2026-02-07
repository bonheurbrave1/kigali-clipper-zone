import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import WhatsAppFloat from './components/WhatsAppFloat.jsx';
import Loader from './components/Loader.jsx';
import Home from './pages/Home.jsx';
import ServicesPage from './pages/ServicesPage.jsx';
import GalleryPage from './pages/GalleryPage.jsx';
import TeamPage from './pages/TeamPage.jsx';
import ProductsPage from './pages/ProductsPage.jsx';
import Contact from './pages/Contact.jsx';
import About from './pages/About.jsx';
import BookingPage from './pages/BookingPage.jsx';
import ScrollToTop from './components/ScrollToTop.jsx';

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