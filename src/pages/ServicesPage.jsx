import React, { useState } from 'react';
import ServiceCard from '../components/ServiceCard';
import BookingForm from '../components/BookingForm';
import { 
  Scissors, 
  Palette, 
  SprayCan, 
  Gem, 
  Heart, 
  Sparkles,
  Clock,
  DollarSign,
  CheckCircle,
  ChevronDown,
  Search,
  Filter,
  Link
} from 'lucide-react';

const ServicesPage = () => {
  const [selectedService, setSelectedService] = useState(null);
  const [showBooking, setShowBooking] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [priceRange, setPriceRange] = useState([0, 100000]);

  const categories = [
    { id: 'all', name: 'All Services', icon: <Sparkles />, count: 28 },
    { id: 'hair', name: 'Hair Services', icon: <Scissors />, count: 12 },
    { id: 'beauty', name: 'Beauty', icon: <Gem />, count: 8 },
    { id: 'barber', name: 'Barber', icon: <Scissors />, count: 6 },
    { id: 'spa', name: 'Spa & Wellness', icon: <Heart />, count: 5 },
    { id: 'bridal', name: 'Bridal', icon: <Gem />, count: 4 },
  ];

  const services = [
    {
      id: 1,
      title: 'Premium Haircut & Styling',
      description: 'Professional haircut with modern styling using premium products. Includes consultation, shampoo, cut, and finish.',
      price: '8,000 RWF',
      duration: '45 min',
      rating: 4.9,
      category: 'hair',
      color: 'bg-blue-100 text-blue-600',
      icon: <Scissors />,
      features: ['Professional Consultation', 'Shampoo & Condition', 'Modern Styling', 'Free Touch-ups']
    },
    {
      id: 2,
      title: 'Beard Trim & Shape',
      description: 'Expert beard grooming with hot towel treatment and precision shaping for the perfect look.',
      price: '5,000 RWF',
      duration: '30 min',
      rating: 4.8,
      category: 'barber',
      color: 'bg-amber-100 text-amber-600',
      icon: <Scissors />,
      features: ['Hot Towel Treatment', 'Beard Oil Application', 'Precision Shaping', 'Skin Care Tips']
    },
    {
      id: 3,
      title: 'Hair Coloring',
      description: 'Professional hair coloring service using L\'Oréal products. Includes consultation and aftercare.',
      price: '25,000 RWF',
      duration: '2-3 hours',
      rating: 4.9,
      category: 'hair',
      color: 'bg-purple-100 text-purple-600',
      icon: <Palette />,
      features: ['Color Consultation', 'Patch Test', 'Premium Products', 'Aftercare Kit']
    },
    {
      id: 4,
      title: 'Keratin Treatment',
      description: 'Smoothing treatment that eliminates frizz and makes hair more manageable for up to 3 months.',
      price: '35,000 RWF',
      duration: '3 hours',
      rating: 5.0,
      category: 'hair',
      color: 'bg-pink-100 text-pink-600',
      icon: <SprayCan />,
      features: ['Frizz Elimination', 'Long-lasting Results', 'Hair Protection', 'Free Maintenance']
    },
    {
      id: 5,
      title: 'Bridal Makeup Package',
      description: 'Complete bridal makeup with trial session, lashes, and touch-up kit for your special day.',
      price: '50,000 RWF',
      duration: '2.5 hours',
      rating: 5.0,
      category: 'bridal',
      color: 'bg-red-100 text-red-600',
      icon: <Gem />,
      features: ['Trial Session', 'Waterproof Makeup', 'False Lashes', 'Touch-up Kit']
    },
    {
      id: 6,
      title: 'Professional Facial',
      description: 'Deep cleansing facial with extraction, mask, and massage for radiant skin.',
      price: '15,000 RWF',
      duration: '60 min',
      rating: 4.7,
      category: 'spa',
      color: 'bg-green-100 text-green-600',
      icon: <Heart />,
      features: ['Skin Analysis', 'Deep Cleansing', 'Face Massage', 'Hydrating Mask']
    },
    {
      id: 7,
      title: 'Manicure & Pedicure',
      description: 'Complete nail care service with cuticle treatment, shaping, and polish of your choice.',
      price: '12,000 RWF',
      duration: '90 min',
      rating: 4.8,
      category: 'beauty',
      color: 'bg-indigo-100 text-indigo-600',
      icon: <Heart />,
      features: ['Cuticle Care', 'Nail Shaping', 'Hand Massage', 'Premium Polish']
    },
    {
      id: 8,
      title: 'Full Body Massage',
      description: 'Therapeutic full body massage to relieve stress and muscle tension.',
      price: '20,000 RWF',
      duration: '60 min',
      rating: 4.9,
      category: 'spa',
      color: 'bg-cyan-100 text-cyan-600',
      icon: <Heart />,
      features: ['Aromatherapy Oils', 'Stress Relief', 'Muscle Relaxation', 'Hot Stones']
    },
  ];

  const filteredServices = services.filter(service => {
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || service.category === selectedCategory;
    const matchesPrice = parseInt(service.price.replace(/[^0-9]/g, '')) >= priceRange[0] &&
                        parseInt(service.price.replace(/[^0-9]/g, '')) <= priceRange[1];
    return matchesSearch && matchesCategory && matchesPrice;
  });

  const handleBookNow = (serviceTitle) => {
    setSelectedService(serviceTitle);
    setShowBooking(true);
  };

  return (
    <div className="pt-24 pb-20 bg-gray-50">
      {/* Hero Section */}
      <div className="bg-teal-500 py-16">
        <div className="container mx-auto px-4 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Our <span className="text-gray-900">Services</span>
          </h1>
          <p className="text-xl max-w-3xl mx-auto opacity-90">
            Discover our comprehensive range of premium beauty and grooming services
          </p>
        </div>
      </div>

      {/* Filter Section */}
      <div className="container mx-auto px-4 -mt-10">
        <div className="bg-white rounded-2xl shadow-xl p-6 mb-8">
          <div className="grid md:grid-cols-3 gap-6">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search services..."
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            {/* Category Filter */}
            <div>
              <div className="flex items-center text-gray-700 mb-2">
                <Filter className="w-5 h-5 mr-2" />
                <span className="font-medium">Category</span>
              </div>
              <select
                className="w-full p-3 border border-gray-300 rounded-xl"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                <option value="All">All Categories</option>
                <option value="hair">Hair Services</option>
                <option value="barber">Barber</option>
                <option value="beauty">Beauty</option>
                <option value="spa">Spa & Wellness</option>
                <option value="bridal">Bridal</option>
              </select>
            </div>

            {/* Price Range */}
            <div>
              <div className="flex items-center text-gray-700 mb-2">
                <span className="font-medium">Price Range</span>
                <span className="ml-auto text-sm">
                  {priceRange[0].toLocaleString()} - {priceRange[1].toLocaleString()} RWF
                </span>
              </div>
              <input
                type="range"
                min="0"
                max="100000"
                step="5000"
                value={priceRange[1]}
                onChange={(e) => setPriceRange([0, parseInt(e.target.value)])}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
              />
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          <div className="lg:col-span-2">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900">All Services</h2>
                <p className="text-gray-600">
                  Showing {filteredServices.length} of {services.length} services
                </p>
              </div>
              <button className="text-primary hover:underline flex items-center">
                Sort by: Popular
                <ChevronDown className="ml-2 w-4 h-4" />
              </button>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {filteredServices.map((service) => (
                <div key={service.id}>
                  <ServiceCard service={service} />

                  <button
                    className="w-full mt-4 bg-primary text-white py-3 rounded-xl font-semibold hover:bg-opacity-90 transition-colors"
                    >
                    Book This Service
                  </button>

                </div>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Categories */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-xl font-bold mb-6">Service Categories</h3>
              <div className="space-y-3">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id === 'all' ? 'All' : category.id)}
                    className={`w-full flex items-center justify-between p-3 rounded-xl transition-all ${
                      (selectedCategory === category.id || 
                       (category.id === 'all' && selectedCategory === 'All'))
                        ? 'bg-teal-500 text-white'
                        : 'hover:bg-gray-50'
                    }`}
                  >
                    <div className="flex items-center">
                      <span className="mr-3">{category.icon}</span>
                      <span>{category.name}</span>
                    </div>
                    <span className="text-sm">{category.count}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Benefits */}
            <div className=" bg-teal-500 rounded-2xl p-6 text-white">
              <h3 className="text-xl font-bold mb-6">Why Choose Us</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 mr-3 mt-1" />
                  <div>
                    <div className="font-medium">Certified Professionals</div>
                    <div className="text-sm opacity-90">All our stylists are internationally certified</div>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 mr-3 mt-1" />
                  <div>
                    <div className="font-medium">Premium Products</div>
                    <div className="text-sm opacity-90">We use only top-quality, professional-grade products</div>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 mr-3 mt-1" />
                  <div>
                    <div className="font-medium">Hygiene First</div>
                    <div className="text-sm opacity-90">Sterilized equipment for every client</div>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 mr-3 mt-1" />
                  <div>
                    <div className="font-medium">Satisfaction Guarantee</div>
                    <div className="text-sm opacity-90">Not happy? We'll fix it for free</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-xl font-bold mb-6">Quick Stats</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
                  <span className="text-gray-600">Average Rating</span>
                  <span className="font-bold text-primary">4.8/5</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
                  <span className="text-gray-600">Services Offered</span>
                  <span className="font-bold text-primary">28+</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
                  <span className="text-gray-600">Happy Clients</span>
                  <span className="font-bold text-primary">5,000+</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
                  <span className="text-gray-600">Success Rate</span>
                  <span className="font-bold text-primary">98%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {showBooking && (
        <BookingForm 
          onClose={() => setShowBooking(false)} 
          selectedService={selectedService}
        />
      )}
    </div>
  );
};

export default ServicesPage;