import React, { useState } from 'react';
import { 
  Star, 
  Quote, 
  ChevronLeft, 
  ChevronRight,
  ThumbsUp,
  Calendar
} from 'lucide-react';
import { testimonials } from '../utils/constants';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [likedTestimonials, setLikedTestimonials] = useState({});

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleLike = (id) => {
    setLikedTestimonials(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  // Get current testimonial
  const currentTestimonial = testimonials[currentIndex];

  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            What Our <span className="text-primary">Clients</span> Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our satisfied customers have to say
          </p>
        </div>

        {/* Main Testimonial */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 relative">
            {/* Quote Icon */}
            <div className="absolute top-8 right-8 text-primary/20">
              <Quote className="w-16 h-16" />
            </div>

            {/* Client Info */}
            <div className="flex items-center mb-8">
              <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-primary/20 mr-6">
                <img
                  src={currentTestimonial.clientImage}
                  alt={currentTestimonial.clientName}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900">
                  {currentTestimonial.clientName}
                </h3>
                <p className="text-gray-600">{currentTestimonial.profession}</p>
                <div className="flex items-center mt-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-5 h-5 ${
                          i < currentTestimonial.rating
                            ? 'text-yellow-400 fill-current'
                            : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="ml-2 text-gray-600">{currentTestimonial.rating}/5</span>
                </div>
              </div>
            </div>

            {/* Testimonial Content */}
            <div className="mb-8">
              <h4 className="text-xl font-bold text-gray-900 mb-4">
                {currentTestimonial.title}
              </h4>
              <p className="text-gray-600 text-lg leading-relaxed">
                "{currentTestimonial.content}"
              </p>
            </div>

            {/* Service & Date */}
            <div className="flex flex-wrap items-center justify-between border-t border-gray-100 pt-6">
              <div className="flex items-center space-x-6">
                <div className="inline-flex items-center px-4 py-2 bg-primary/10 text-primary rounded-full">
                  <span>{currentTestimonial.service}</span>
                </div>
                <div className="flex items-center text-gray-500">
                  <Calendar className="w-4 h-4 mr-2" />
                  {currentTestimonial.date}
                </div>
              </div>
              
              {/* Like Button */}
              <button
                onClick={() => handleLike(currentTestimonial.id)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors ${
                  likedTestimonials[currentTestimonial.id]
                    ? 'bg-red-50 text-red-600'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                <ThumbsUp className={`w-5 h-5 ${likedTestimonials[currentTestimonial.id] ? 'fill-current' : ''}`} />
                <span>
                  {currentTestimonial.likes + (likedTestimonials[currentTestimonial.id] ? 1 : 0)} Likes
                </span>
              </button>
            </div>
          </div>

          {/* Navigation & All Testimonials */}
          <div className="flex items-center justify-between mt-8">
            <button
              onClick={handlePrev}
              className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-shadow"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Testimonial Dots */}
            <div className="flex space-x-2">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    idx === currentIndex ? 'bg-teal-500 w-8' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-shadow"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* All Testimonials Grid */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-center mb-12">More Happy Clients</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.slice(0, 3).map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                    <img
                      src={testimonial.clientImage}
                      alt={testimonial.clientName}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <div className="font-bold">{testimonial.clientName}</div>
                    <div className="text-sm text-gray-600">{testimonial.profession}</div>
                  </div>
                </div>
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < testimonial.rating
                          ? 'text-yellow-400 fill-current'
                          : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  "{testimonial.content}"
                </p>
                <div className="text-xs text-gray-500">
                  {testimonial.service} • {testimonial.date}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <p className="text-xl text-gray-600 mb-8">
            Ready to experience our premium service?
          </p>
          <a
            href="/booking"
            className="inline-flex items-center px-8 py-4 bg-cyan-950 text-white rounded-full font-semibold hover:bg-opacity-90 transition-colors"
          >
            Book Your Appointment
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;