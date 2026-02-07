import React from 'react';
import { Scissors, Palette, SprayCan, Gem, Heart } from 'lucide-react';
import { motion } from 'framer-motion';
const Services = () => {
  const services = [
    {
      icon: <Scissors className="w-8 h-8" />,
      title: "Premium Haircuts",
      description: "Modern cuts, fades, and traditional styles by master barbers",
      price: "From 5,000 RWF",
      duration: "30-60 min",
      category: "Barber"
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Hair Coloring",
      description: "Expert coloring, highlights, balayage, and color correction",
      price: "From 15,000 RWF",
      duration: "2-3 hours",
      category: "Salon"
    },
    {
      icon: <SprayCan className="w-8 h-8" />,
      title: "Hair Treatment",
      description: "Keratin, smoothing, deep conditioning, and scalp treatments",
      price: "From 20,000 RWF",
      duration: "1-2 hours",
      category: "Treatment"
    },
    {
      icon: <Gem className="w-8 h-8" />,
      title: "Bridal Makeup",
      description: "Complete bridal packages with trial sessions",
      price: "From 50,000 RWF",
      duration: "2-3 hours",
      category: "Makeup"
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Skincare & Facial",
      description: "Professional facials, cleansing, and skin treatments",
      price: "From 10,000 RWF",
      duration: "60-90 min",
      category: "Skincare"
    },
  ];

  const packages = [
    {
      name: "Royal Treatment",
      price: "50,000 RWF",
      services: ["Haircut & Styling", "Beard Trim", "Facial", "Manicure"],
      popular: true
    },
    {
      name: "Bridal Glam",
      price: "100,000 RWF",
      services: ["Makeup", "Hairstyling", "Nail Art", "Skincare"],
      popular: false
    },
    {
      name: "Executive Package",
      price: "35,000 RWF",
      services: ["Premium Haircut", "Hot Towel Shave", "Hair Wash", "Styling"],
      popular: false
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-5 0 font-[Poppins]">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-[Playfair Display]">
            Our <span className="text-teal-500">Premium</span> Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience excellence with our comprehensive range of beauty and grooming services
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="p-3 bg-black text-white rounded-xl ">
                  {service.icon}
                </div>
                <span className="text-sm font-semibold bg-gray-100 text-gray-700 px-3 py-1 rounded-full">
                  {service.category}
                </span>
              </div>
              <h3 className="text-xl font-bold mb-2 font-[Playfair Display] text-gray-900">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <div className="flex justify-between items-center">
                <div>
                  <div className="font-bold text-teal-500">{service.price}</div>
                  <div className="text-sm text-gray-500">{service.duration}</div>
                </div>
                <motion.button
  whileHover={{ 
    y: -2, 
    scale: 1.05 
  }}
  whileTap={{ 
    scale: 0.95 
  }}
  transition={{ 
    type: "spring", 
    stiffness: 300, 
    damping: 20 
  }}
  className="bg-transparent border-black rounded-md border-2 py-1 px-3 font-semibold hover:border-teal-500"
>
  Book Now →
</motion.button>

              </div>
            </div>
          ))}
        </div>

        {/* Packages */}
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold mb-4 font-[Playfair Display]">Signature Packages</h3>
          <p className="text-gray-600">Complete grooming experiences for every occasion</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <div 
              key={index}
              className={`relative rounded-2xl p-8 transition-transform ${
                pkg.popular 
                  ? 'bg-teal-500 text-white shadow-2xl transform scale-105' 
                  : 'bg-white shadow-xl'
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-[#FACC15] text-white px-6 py-1 rounded-full text-sm font-bold">
                  MOST POPULAR
                </div>
              )}
              <div className="text-center">
                <h4 className={`text-2xl font-bold mb-2 ${pkg.popular ? 'text-white font-[Playfair Display]' : 'text-gray-900 font-[Playfair Display]'}`}>
                  {pkg.name}
                </h4>
                <div className={`text-3xl font-bold mb-6 ${pkg.popular ? 'text-white' : 'text-gray-900'}`}>{pkg.price}</div>
                <ul className="space-y-3 mb-8">
                  {pkg.services.map((service, idx) => (
                    <li key={idx} className="flex items-center text-gray-700">
                      <div className={`w-2 h-2 rounded-full mr-3 ${pkg.popular ? 'bg-white' : 'bg-orange-400text-teal-500'}`}></div>
                      <span>{service}</span>
                    </li>
                  ))}
                </ul>
                <button 
                  className={`w-full py-3 rounded-full font-semibold transition-all ${
                    pkg.popular 
                      ? 'bg-white text-gray-900 hover:bg-gray-100' 
                      : 'bg-black text-teal-500 text-white hover:bg-opacity-90'
                  }`}
                >
                  Choose Package
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
