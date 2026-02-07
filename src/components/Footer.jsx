import React from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Facebook, 
  Instagram, 
  Twitter, 
  Youtube,
  Send,
  CreditCard
} from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Team', href: '/team' },
    { name: 'Products', href: '/products' },
    { name: 'About Us', href: '/about' },
    { name: 'Contact', href: '/contact' },
    { name: 'Book Now', href: '/booking' },
  ];

  const servicesLinks = [
    'Haircut & Styling',
    'Hair Coloring',
    'Hair Treatment',
    'Beard Grooming',
    'Makeup Services',
    'Facial & Skincare',
    'Nail Services',
    'Massage Therapy'
  ];

  const paymentMethods = [
    'Visa', 'MasterCard', 'M-Pesa', 'Airtel Money', 'PayPal'
  ];

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8 font-[Poppins]">
      <div className="container mx-auto px-4">

        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">

          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-teal-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl font-[Playfair Display]">
                  K
                </span>
              </div>
              <div>
                <h2 className="text-2xl font-bold font-[Playfair Display]">
                  Kigali <span className="text-teal-500">Clipper</span> Zone
                </h2>
                <p className="text-sm text-gray-400">
                  Premium Salon & Barber Shop
                </p>
              </div>
            </div>

            <p className="text-gray-400 mb-6">
              Rwanda's premier salon experience since 2008. 
              We transform your look with precision, artistry, and passion.
            </p>

            <div className="flex space-x-4">
              <a className="p-2 bg-gray-800 rounded-lg hover:bg-teal-500 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a className="p-2 bg-gray-800 rounded-lg hover:bg-pink-600 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a className="p-2 bg-gray-800 rounded-lg hover:bg-blue-400 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a className="p-2 bg-gray-800 rounded-lg hover:bg-red-600 transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6 font-[Playfair Display]">
              Quick Links
            </h3>
            <div className="grid grid-cols-2 gap-2">
              {quickLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-gray-400 hover:text-teal-500 transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-6 font-[Playfair Display]">
              Our Services
            </h3>
            <div className="space-y-2">
              {servicesLinks.map((service) => (
                <a
                  key={service}
                  className="block text-gray-400 hover:text-teal-500 transition-colors"
                >
                  {service}
                </a>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-6 font-[Playfair Display]">
              Contact Us
            </h3>
            <div className="space-y-4 text-gray-400">
              <div className="flex items-start">
                <MapPin className="w-5 h-5 text-teal-500 mt-1 mr-3" />
                <span>
                  La Bonne Adresse, KN 2 Roundabout
                  <br />
                  Kigali, Rwanda
                </span>
              </div>

              <div className="flex items-center">
                <Phone className="w-5 h-5 text-teal-500 mr-3" />
                0788 295 833
              </div>

              <div className="flex items-center">
                <Mail className="w-5 h-5 text-teal-500 mr-3" />
                info@kigaliclipperzone.com
              </div>

              <div className="flex items-start">
                <Clock className="w-5 h-5 text-teal-500 mt-1 mr-3" />
                <div>
                  <div>Mon–Sat: 8AM–8PM</div>
                  <div>Sun: 10AM–6PM</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter */}
        <div className="bg-gradient-to-r from-teal-500/20 to-[#FACC15]/20 rounded-2xl p-8 mb-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-2 font-[Playfair Display]">
                Stay Updated
              </h3>
              <p className="text-gray-300">
                Subscribe to our newsletter for exclusive offers and beauty tips
              </p>
            </div>

            <div className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-3 rounded-l-xl bg-white text-gray-900"
              />
              <button className="bg-teal-500 px-6 py-3 rounded-r-xl font-semibold flex items-center">
                <Send className="w-5 h-5 mr-2" />
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 mb-4 md:mb-0">
              © {new Date().getFullYear()} Kigali Clipper Zone. All rights reserved.
            </div>

            <div className="flex items-center space-x-6">
              <div className="flex items-center text-gray-400">
                <CreditCard className="w-5 h-5 mr-2" />
                We accept:
              </div>
              <div className="flex space-x-2">
                {paymentMethods.map((method) => (
                  <span
                    key={method}
                    className="px-3 py-1 bg-gray-800 rounded text-sm"
                  >
                    {method}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
