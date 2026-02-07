import React, { useState } from 'react';
import { Menu, X, Phone, MapPin, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
const Navbar = ({ onBookNow }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: '𝐇𝐨𝐦𝐞', href: '/' },
    { label: '𝐒𝐞𝐫𝐯𝐢𝐜𝐞𝐬', href: '/services' },
    { label: '𝐆𝐚𝐥𝐥𝐞𝐫𝐲', href: '/gallery' },
    { label: '𝐓𝐞𝐚𝐦', href: '/team' },
    { label: '𝐏𝐫𝐨𝐝𝐮𝐜𝐭𝐬', href: '/products' },
    { label: '𝐂𝐨𝐧𝐭𝐚𝐜𝐭', href: '/contact' },
  ];

  return (
    <>
      {/* Top Bar */}
      <div className="bg-gray-900 text-white py-2 px-4">
        <div className="container mx-auto flex flex-wrap justify-between items-center text-sm">
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              <Phone className="w-4 h-4 mr-2 text-secondary" />
              <span>𝟎𝟕𝟖𝟖 𝟐𝟗𝟓 𝟖𝟑𝟑</span>
            </div>
            <div className="hidden md:flex items-center">
              <MapPin className="w-4 h-4 mr-2 text-secondary" />
              <span>𝐋𝐚 𝐁𝐨𝐧𝐧𝐞 𝐀𝐝𝐫𝐞𝐬𝐬𝐞, 𝐊𝐍 𝟐 𝐑𝐨𝐮𝐧𝐝𝐚𝐛𝐨𝐮𝐭 𝐊𝐢𝐠𝐚𝐥𝐢</span>
            </div>
          </div>
          <div className="flex items-center">
            <Clock className="w-4 h-4 mr-2 text-secondary" />
            <span>𝐌𝐨𝐧–𝐒𝐚𝐭: 𝟖𝐀𝐌–𝟖𝐏𝐌 | 𝐒𝐮𝐧: 𝟏𝟎𝐀𝐌–𝟔𝐏𝐌</span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="sticky top-0 z-50 bg-white shadow-lg">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link to={"/"}>
            <div className="flex items-center">
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                  <span className="text-teal-500 font-bold text-xl">𝐊𝐂𝐙</span>
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-gray-900">
                    𝐊𝐢𝐠𝐚𝐥𝐢 <span className="text-primary">𝐂𝐥𝐢𝐩𝐩𝐞𝐫</span> 𝐙𝐨𝐧𝐞
                  </h1>
                  <p className="text-xs text-gray-600">
                    𝐏𝐫𝐞𝐦𝐢𝐮𝐦 𝐒𝐚𝐥𝐨𝐧 & 𝐁𝐚𝐫𝐛𝐞𝐫 𝐒𝐡𝐨𝐩
                  </p>
                </div>
              </div>
            </div>
            </Link>
            

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-gray-700 hover:text-primary font-medium transition-colors"
                >
                  {item.label}
                </a>
              ))}
<Link to={"/booking"}>
              <button
                className="bg-teal-500 text-white px-6 py-2 rounded-full hover:bg-opacity-90 transition-all transform hover:scale-105"
                >
                𝐁𝐨𝐨𝐤 𝐍𝐨𝐰
              </button>
                </Link>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-gray-700"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isOpen && (
            <div className="md:hidden bg-white border-t">
              <div className="px-2 pt-2 pb-3 space-y-1">
                {navItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="block px-3 py-2 text-gray-700 hover:text-primary hover:bg-gray-50 rounded-md"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </a>
                ))}
                <button
                  onClick={() => {
                    onBookNow();
                    setIsOpen(false);
                  }}
                  className="w-full mt-4 bg-primary text-white px-4 py-2 rounded-full hover:bg-opacity-90"
                >
                  𝐁𝐨𝐨𝐤 𝐀𝐩𝐩𝐨𝐢𝐧𝐭𝐦𝐞𝐧𝐭
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
