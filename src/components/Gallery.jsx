import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, X, Instagram } from 'lucide-react';
import { motion } from 'framer-motion';
const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const galleryImages = [
    {
      id: 1,
      category: 'Hair',
      url: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      title: 'Modern Haircut'
    },
    {
      id: 2,
      category: 'Beard',
      url: 'https://images.unsplash.com/photo-1585747860715-2ba37e788b70?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      title: 'Beard Styling'
    },
    {
      id: 3,
      category: 'Makeup',
      url: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      title: 'Bridal Makeup'
    },
    {
      id: 4,
      category: 'Nails',
      url: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      title: 'Nail Art'
    },
    {
      id: 5,
      category: 'Salon',
      url: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      title: 'Salon Interior'
    },
    {
      id: 6,
      category: 'Hair',
      url: 'https://images.unsplash.com/photo-1605497788044-5a32c7078486?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      title: 'Hair Coloring'
    },
  ];

  const categories = ['All', 'Hair', 'Beard', 'Makeup', 'Nails', 'Salon'];
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredImages =
    activeCategory === 'All'
      ? galleryImages
      : galleryImages.filter(img => img.category === activeCategory);

  return (
    <section id="gallery" className="py-20 bg-white font-[Poppins]">
      <div className="container mx-auto px-4">

        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-[Playfair Display]">
            Our Work <span className="text-teal-500">Gallery</span>
          </h2>
          <p className="text-xl text-gray-600">
            Browse our portfolio of stunning transformations
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full transition-all ${
                activeCategory === category
                  ? 'bg-teal-500 text-teal-500 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map((image) => (
            <div
              key={image.id}
              className="relative group cursor-pointer overflow-hidden rounded-2xl"
              onClick={() => setSelectedImage(image)}
            >
              <img
                src={image.url}
                alt={image.title}
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <div className="text-sm bg-teal-500text-teal-500 inline-block px-3 py-1 rounded-full mb-2">
                    {image.category}
                  </div>
                  <h3 className="text-xl font-bold font-[Playfair Display]">
                    {image.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Instagram CTA */}
        {/* Instagram CTA */}
<div className="mt-16 text-center">
  <motion.a
    href="https://instagram.com/kigali_clipperzone_salon"
    target="_blank"
    rel="noopener noreferrer"
    whileHover={{ scale: 1.05, y: -2 }}
    whileTap={{ scale: 0.95 }}
    transition={{ type: "spring", stiffness: 300, damping: 20 }}
    className="inline-flex items-center justify-center space-x-3 
      bg-gradient-to-r from-[#F58529] via-[#DD2A7B] to-[#8134AF]
      text-white px-8 py-4 rounded-full
      shadow-lg cursor-pointer"
  >
    <Instagram className="w-6 h-6" />
    <div className="text-left">
      <div className="font-bold leading-tight">Follow us on Instagram</div>
      <div className="text-sm opacity-90">@kigaliclipperzone</div>
    </div>
  </motion.a>
</div>

      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center p-4">
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 text-white"
          >
            <X size={32} />
          </button>

          <img
            src={selectedImage.url}
            alt={selectedImage.title}
            className="max-w-full max-h-[90vh] rounded-lg"
          />

          <div className="absolute bottom-4 left-0 right-0 text-center text-white">
            <h3 className="text-2xl font-bold font-[Playfair Display]">
              {selectedImage.title}
            </h3>
            <p className="text-gray-300">
              {selectedImage.category} Category
            </p>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
