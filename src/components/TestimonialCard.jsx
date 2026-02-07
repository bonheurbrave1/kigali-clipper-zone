import React, { useState } from 'react';
import { Star, Quote, ThumbsUp, Calendar, ChevronLeft, ChevronRight } from 'lucide-react';

const TestimonialCard = ({ testimonial }) => {
  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState(testimonial.likes || 0);

  const handleLike = () => {
    if (!liked) {
      setLiked(true);
      setLikes(likes + 1);
    }
  };

  return (
    <div className="group relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100">
      {/* Quote Icon */}
      <div className="absolute top-6 right-6 text-primary/20 group-hover:text-primary/40 transition-colors">
        <Quote className="w-12 h-12" />
      </div>

      {/* Client Info */}
      <div className="flex items-center mb-6">
        <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-primary/20 group-hover:border-primary transition-colors mr-4">
          <img
            src={testimonial.clientImage}
            alt={testimonial.clientName}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
        </div>
        <div>
          <h4 className="font-bold text-gray-900">{testimonial.clientName}</h4>
          <p className="text-sm text-gray-600">{testimonial.profession}</p>
          <div className="flex items-center mt-1">
            <div className="flex">
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
            <span className="ml-2 text-sm text-gray-500">{testimonial.rating}/5</span>
          </div>
        </div>
      </div>

      {/* Testimonial Content */}
      <div className="mb-6">
        <h4 className="font-bold text-lg text-gray-900 mb-3">{testimonial.title}</h4>
        <p className="text-gray-600 leading-relaxed italic">
          "{testimonial.content}"
        </p>
      </div>

      {/* Service Info */}
      <div className="mb-6">
        <div className="inline-flex items-center px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-3">
          <span>{testimonial.service}</span>
        </div>
        {testimonial.date && (
          <div className="flex items-center text-sm text-gray-500">
            <Calendar className="w-4 h-4 mr-2" />
            {testimonial.date}
          </div>
        )}
      </div>

      {/* Like Button */}
      <div className="flex items-center justify-between pt-4 border-t border-gray-100">
        <button
          onClick={handleLike}
          className={`flex items-center space-x-2 px-4 py-2 rounded-full transition-all ${
            liked
              ? 'bg-red-50 text-red-600'
              : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
          }`}
        >
          <ThumbsUp className={`w-5 h-5 ${liked ? 'fill-current' : ''}`} />
          <span className="font-medium">{likes} Likes</span>
        </button>

        <div className="flex space-x-2">
          <button className="p-2 text-gray-400 hover:text-primary transition-colors">
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button className="p-2 text-gray-400 hover:text-primary transition-colors">
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Before/After if available */}
      {testimonial.beforeAfter && (
        <div className="mt-4 p-3 bg-gray-50 rounded-lg">
          <div className="flex justify-between text-sm">
            <span className="font-medium">Transformation:</span>
            <button className="text-primary hover:underline">
              View Photos
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default TestimonialCard;