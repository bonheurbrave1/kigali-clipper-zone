import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
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

import { MessageCircle, X, Send, Phone } from 'lucide-react';
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppFloat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  
  const phoneNumber = '+250788123456';
  const defaultMessage = 'Hello! I would like to book an appointment at Kigali Clipper Zone';

  const handleSend = () => {
    const text = message || defaultMessage;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`;
    window.open(whatsappUrl, '_blank');
    setIsOpen(false);
    setMessage('');
  };

  return (
    <>
      {/* WhatsApp Button */}
      <div className="fixed bottom-6 right-6 z-40">
        <div className="relative">
          {/* Pulsing Ring */}
          <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-20"></div>
            
          {/* Main Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="relative bg-green-500 text-white p-4 rounded-full shadow-2xl hover:bg-green-600 transition-all transform hover:scale-110"
          >
            {isOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <FaWhatsapp className="w-6 h-6" />
            )}
          </button>
          
          {/* Notification Badge */}
          <div className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center animate-bounce">
            24/7
          </div>
        </div>
      </div>

      {/* WhatsApp Chat Modal */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-40 w-80">
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200">
            {/* Header */}
            <div className="bg-green-500 text-white p-4">
              <div className="flex items-center">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center mr-3">
                  <MessageCircle className="w-6 h-6 text-green-500" />
                </div>
                <div>
                  <div className="font-bold">Chat with us</div>
                  <div className="text-sm opacity-90">Typically replies within 5 minutes</div>
                </div>
              </div>
            </div>

            {/* Body */}
            <div className="p-4 bg-gray-50">
              <div className="mb-4">
                <div className="bg-white rounded-lg p-3 mb-2 max-w-[80%]">
                  <p className="text-sm">Hi there! 👋</p>
                  <p className="text-sm">How can we help you today?</p>
                </div>
                <div className="text-xs text-gray-500 text-right">Just now</div>
              </div>

              <div className="space-y-2">
                <button
                  onClick={() => setMessage('I want to book an appointment')}
                  className="w-full text-left bg-white border border-gray-200 rounded-lg p-3 hover:bg-gray-50 text-sm"
                >
                  📅 Book an appointment
                </button>
                <button
                  onClick={() => setMessage('What are your working hours?')}
                  className="w-full text-left bg-white border border-gray-200 rounded-lg p-3 hover:bg-gray-50 text-sm"
                >
                  🕒 Check working hours
                </button>
                <button
                  onClick={() => setMessage('I have a question about services')}
                  className="w-full text-left bg-white border border-gray-200 rounded-lg p-3 hover:bg-gray-50 text-sm"
                >
                  💰 Service pricing
                </button>
              </div>

              <div className="mt-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Or type your message:
                </label>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg text-sm"
                  rows="3"
                  placeholder="Type your message here..."
                />
              </div>
            </div>

            {/* Footer */}
            <div className="bg-white p-4 border-t">
              <div className="flex space-x-2">
                <button
                  onClick={handleSend}
                  className="flex-1 bg-green-500 text-white py-3 rounded-lg font-medium hover:bg-green-600 flex items-center justify-center"
                >
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </button>
                <a
                  href={`tel:${phoneNumber}`}
                  className="p-3 border border-gray-300 rounded-lg hover:bg-gray-50"
                >
                  <Phone className="w-5 h-5 text-gray-600" />
                </a>
              </div>
              <div className="text-xs text-gray-500 text-center mt-2">
                We'll open WhatsApp to continue
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};



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