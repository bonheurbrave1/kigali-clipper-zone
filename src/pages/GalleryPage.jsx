import React, { useState, useEffect } from 'react';
import { contactInfo, socialLinks, businessHours, faqs } from '../utils/constants';

import { 
  Search, 
  Filter, 
  Heart, 
  Calendar, 
  Download, 
  Share2, 
  Maximize2,
  ChevronLeft,
  ChevronRight,
  X,
  Instagram,
  Hash
} from 'lucide-react';
import { galleryImages, galleryCategories } from '../utils/constants';

const GalleryPage = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('latest');
  const [likedImages, setLikedImages] = useState({});
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(false);

  // Filter images based on category and search
  const filteredImages = galleryImages.filter(image => {
    const matchesCategory = activeCategory === 'All' || image.category.toLowerCase() === activeCategory.toLowerCase();
    const matchesSearch = searchTerm === '' || 
      image.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      image.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      image.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  // Sort images
  const sortedImages = [...filteredImages].sort((a, b) => {
    if (sortBy === 'latest') {
      return new Date(b.date) - new Date(a.date);
    } else if (sortBy === 'popular') {
      return b.likes - a.likes;
    } else if (sortBy === 'oldest') {
      return new Date(a.date) - new Date(b.date);
    }
    return 0;
  });

  // Handle image click
  const handleImageClick = (image, index) => {
    setSelectedImage(image);
    setCurrentIndex(index);
  };

  // Navigation in lightbox
  const navigateImage = (direction) => {
    let newIndex;
    if (direction === 'next') {
      newIndex = (currentIndex + 1) % sortedImages.length;
    } else {
      newIndex = (currentIndex - 1 + sortedImages.length) % sortedImages.length;
    }
    setSelectedImage(sortedImages[newIndex]);
    setCurrentIndex(newIndex);
  };

  // Handle like
  const handleLike = (id, e) => {
    e.stopPropagation();
    setLikedImages(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  // Handle download
  const handleDownload = (url, title, e) => {
    e.stopPropagation();
    setLoading(true);
    // Simulate download
    setTimeout(() => {
      const link = document.createElement('a');
      link.href = url;
      link.download = `kigali-clipper-${title.toLowerCase().replace(/\s+/g, '-')}.jpg`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      setLoading(false);
    }, 500);
  };

  // Handle share
  const handleShare = async (image, e) => {
    e.stopPropagation();
    try {
      if (navigator.share) {
        await navigator.share({
          title: image.title,
          text: image.description,
          url: window.location.href,
        });
      } else {
        // Fallback for browsers that don't support Web Share API
        navigator.clipboard.writeText(`${image.title} - ${window.location.href}`);
        alert('Link copied to clipboard!');
      }
    } catch (error) {
      console.log('Sharing failed:', error);
    }
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!selectedImage) return;
      
      if (e.key === 'Escape') {
        setSelectedImage(null);
      } else if (e.key === 'ArrowRight') {
        navigateImage('next');
      } else if (e.key === 'ArrowLeft') {
        navigateImage('prev');
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImage, currentIndex]);

  return (
    <div className="pt-24 pb-20 bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <div className="bg-teal-500 py-16">
        <div className="container mx-auto px-4 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Our <span className="text-gray-900">Gallery</span>
          </h1>
          <p className="text-xl max-w-3xl mx-auto opacity-90">
            Browse through our portfolio of stunning transformations and creative work
          </p>
        </div>
      </div>

      {/* Controls Section */}
      <div className="container mx-auto px-4 -mt-10 mb-12">
        <div className="bg-white rounded-2xl shadow-xl p-6">
          <div className="grid md:grid-cols-3 gap-6 mb-6">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search gallery by title, description, or tags..."
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            {/* Categories */}
            <div>
              <div className="flex items-center text-gray-700 mb-2">
                <Filter className="w-5 h-5 mr-2" />
                <span className="font-medium">Category</span>
              </div>
              <select
                className="w-full p-3 border border-gray-300 rounded-xl"
                value={activeCategory}
                onChange={(e) => setActiveCategory(e.target.value)}
              >
                {galleryCategories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>

            {/* Sort */}
            <div>
              <div className="flex items-center text-gray-700 mb-2">
                <Hash className="w-5 h-5 mr-2" />
                <span className="font-medium">Sort By</span>
              </div>
              <select
                className="w-full p-3 border border-gray-300 rounded-xl"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
              >
                <option value="latest">Latest First</option>
                <option value="popular">Most Popular</option>
                <option value="oldest">Oldest First</option>
              </select>
            </div>
          </div>

          {/* Category Chips */}
          <div className="flex flex-wrap gap-3">
            {galleryCategories.map(category => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full transition-all ${
                  activeCategory === category
                    ? 'bg-teal-500 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="container mx-auto px-4">
        {sortedImages.length === 0 ? (
          <div className="text-center py-20">
            <div className="text-6xl mb-4">📷</div>
            <h3 className="text-2xl font-bold text-gray-700 mb-2">No images found</h3>
            <p className="text-gray-600">Try changing your search or filter criteria</p>
          </div>
        ) : (
          <>
            <div className="flex justify-between items-center mb-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900">Gallery</h2>
                <p className="text-gray-600">
                  Showing {sortedImages.length} of {galleryImages.length} images
                </p>
              </div>
              <div className="text-sm text-gray-500">
                Click on any image to view full screen
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {sortedImages.map((image, index) => (
                <div
                  key={image.id}
                  className="group relative cursor-pointer overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500"
                  onClick={() => handleImageClick(image, index)}
                >
                  {/* Image */}
                  <div className="relative aspect-square overflow-hidden">
                    <img
                      src={image.url}
                      alt={image.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      loading="lazy"
                    />
                    
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                        <div className="text-sm bg-teal-500 inline-block px-3 py-1 rounded-full mb-2">
                          {image.category}
                        </div>
                        <h3 className="text-xl font-bold mb-1">{image.title}</h3>
                        <p className="text-sm opacity-90">{image.description}</p>
                        <div className="flex items-center justify-between mt-3">
                          <div className="flex items-center text-sm">
                            <Calendar className="w-4 h-4 mr-1" />
                            {new Date(image.date).toLocaleDateString()}
                          </div>
                          <div className="flex items-center text-sm">
                            <Heart className={`w-4 h-4 mr-1 ${likedImages[image.id] ? 'fill-red-500 text-red-500' : ''}`} />
                            {image.likes + (likedImages[image.id] ? 1 : 0)}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="absolute top-4 right-4 space-y-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <button
                        onClick={(e) => handleLike(image.id, e)}
                        className="p-2 bg-white/90 backdrop-blur-sm rounded-lg hover:bg-white transition-colors"
                      >
                        <Heart className={`w-5 h-5 ${likedImages[image.id] ? 'fill-red-500 text-red-500' : 'text-gray-700'}`} />
                      </button>
                      <button
                        onClick={(e) => handleShare(image, e)}
                        className="p-2 bg-white/90 backdrop-blur-sm rounded-lg hover:bg-white transition-colors"
                      >
                        <Share2 className="w-5 h-5 text-gray-700" />
                      </button>
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="p-4">
                    <div className="flex flex-wrap gap-2">
                      {image.tags.map((tag, idx) => (
                        <span
                          key={idx}
                          className="text-xs px-2 py-1 bg-gray-100 text-gray-600 rounded-full"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}

        {/* Instagram CTA */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center justify-center space-x-4 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 text-white px-8 py-6 rounded-2xl shadow-xl">
            <Instagram className="w-8 h-8" />
            <div className="text-left">
              <div className="font-bold text-xl">Follow us on Instagram</div>
              <div className="text-sm opacity-90">@kigaliclipperzone for daily updates</div>
            </div>
            <a
              href={socialLinks.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Follow Now
            </a>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-95 flex items-center justify-center p-4">
          {/* Close Button */}
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-6 right-6 text-white hover:text-gray-300 z-10"
          >
            <X className="w-8 h-8" />
          </button>

          {/* Navigation Buttons */}
          <button
            onClick={() => navigateImage('prev')}
            className="absolute left-6 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 z-10 p-3 bg-black/50 rounded-full"
          >
            <ChevronLeft className="w-8 h-8" />
          </button>
          
          <button
            onClick={() => navigateImage('next')}
            className="absolute right-6 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 z-10 p-3 bg-black/50 rounded-full"
          >
            <ChevronRight className="w-8 h-8" />
          </button>

          {/* Image Counter */}
          <div className="absolute top-6 left-6 text-white text-lg z-10">
            {currentIndex + 1} / {sortedImages.length}
          </div>

          {/* Main Image */}
          <div className="relative max-w-6xl w-full max-h-[80vh]">
            <img
              src={selectedImage.url}
              alt={selectedImage.title}
              className="w-full h-full object-contain rounded-lg"
            />
            
            {/* Image Info */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/80 to-transparent p-8 text-white">
              <div className="flex flex-wrap items-center justify-between">
                <div>
                  <div className="text-sm bg-teal-500 inline-block px-3 py-1 rounded-full mb-2">
                    {selectedImage.category}
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{selectedImage.title}</h3>
                  <p className="text-gray-300 mb-4">{selectedImage.description}</p>
                  <div className="flex items-center space-x-4 text-sm">
                    <span className="flex items-center">
                      <Calendar className="w-4 h-4 mr-2" />
                      {new Date(selectedImage.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </span>
                    <span className="flex items-center">
                      <Heart className="w-4 h-4 mr-2" />
                      {selectedImage.likes} likes
                    </span>
                  </div>
                </div>
                
                {/* Action Buttons */}
                <div className="flex space-x-3 mt-4 md:mt-0">
                  <button
                    onClick={(e) => handleLike(selectedImage.id, e)}
                    className={`p-3 rounded-lg flex items-center space-x-2 ${
                      likedImages[selectedImage.id]
                        ? 'bg-red-500 text-white'
                        : 'bg-white/10 hover:bg-white/20'
                    }`}
                  >
                    <Heart className={`w-5 h-5 ${likedImages[selectedImage.id] ? 'fill-current' : ''}`} />
                    <span>Like</span>
                  </button>
                  <button
                    onClick={(e) => handleDownload(selectedImage.url, selectedImage.title, e)}
                    disabled={loading}
                    className="p-3 rounded-lg bg-white/10 hover:bg-white/20 flex items-center space-x-2"
                  >
                    {loading ? (
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    ) : (
                      <Download className="w-5 h-5" />
                    )}
                    <span>{loading ? 'Downloading...' : 'Download'}</span>
                  </button>
                  <button
                    onClick={(e) => handleShare(selectedImage, e)}
                    className="p-3 rounded-lg bg-white/10 hover:bg-white/20 flex items-center space-x-2"
                  >
                    <Share2 className="w-5 h-5" />
                    <span>Share</span>
                  </button>
                </div>
              </div>

              {/* Tags */}
              <div className="mt-4 flex flex-wrap gap-2">
                {selectedImage.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="text-sm px-3 py-1 bg-white/20 rounded-full"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Thumbnails */}
          <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2 overflow-x-auto max-w-full px-4">
            {sortedImages.map((img, idx) => (
              <button
                key={img.id}
                onClick={() => {
                  setSelectedImage(img);
                  setCurrentIndex(idx);
                }}
                className={`w-16 h-16 rounded-lg overflow-hidden flex-shrink-0 border-2 ${
                  idx === currentIndex ? 'border-primary' : 'border-transparent'
                }`}
              >
                <img
                  src={img.url}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default GalleryPage;