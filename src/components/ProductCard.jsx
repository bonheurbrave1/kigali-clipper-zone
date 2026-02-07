import React, { useState } from 'react';
import { ShoppingCart, Star, Heart, Eye } from 'lucide-react';

const ProductCard = ({ product }) => {
  const [isLiked, setIsLiked] = useState(false);
  const [showQuickView, setShowQuickView] = useState(false);

  return (
    <div className="group relative bg-white rounded-2xl p-4 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 font-[Poppins]">

      {/* Wishlist Button */}
      <button
        onClick={() => setIsLiked(!isLiked)}
        className="absolute top-4 right-4 z-10 p-2 bg-white rounded-full shadow-md hover:bg-gray-50 transition-colors"
      >
        <Heart
          className={`w-5 h-5 ${
            isLiked ? 'fill-teal-500 text-teal-500' : 'text-gray-400'
          }`}
        />
      </button>

      {/* Quick View Button */}
      <button
        onMouseEnter={() => setShowQuickView(true)}
        onMouseLeave={() => setShowQuickView(false)}
        className="absolute top-16 right-4 z-10 p-2 bg-white rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-all duration-300"
      >
        <Eye className="w-5 h-5 text-gray-600" />
      </button>

      {/* Product Image */}
      <div className="relative overflow-hidden rounded-xl mb-4">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
        />

        {product.discount && (
          <div className="absolute top-3 left-3 bg-[#FACC15] text-gray-900 px-3 py-1 rounded-full text-sm font-bold">
            -{product.discount}%
          </div>
        )}

        {product.isNew && (
          <div className="absolute top-3 right-3 bg-teal-500 text-white px-3 py-1 rounded-full text-sm font-bold">
            NEW
          </div>
        )}
      </div>

      {/* Product Info */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium text-gray-500">
            {product.category}
          </span>
          <div className="flex items-center">
            <Star className="w-4 h-4 text-[#FACC15] fill-current" />
            <span className="ml-1 text-sm font-medium">
              {product.rating}
            </span>
            <span className="text-gray-400 text-sm ml-1">
              ({product.reviews})
            </span>
          </div>
        </div>

        <h3 className="font-bold text-gray-900 group-hover:text-teal-500 transition-colors line-clamp-1 font-[Playfair Display]">
          {product.name}
        </h3>

        <p className="text-sm text-gray-600 line-clamp-2">
          {product.description}
        </p>

        <div className="flex items-center justify-between pt-3">
          <div className="space-y-1">
            <div className="text-2xl font-bold text-teal-500">
              {product.price}
            </div>
            {product.originalPrice && (
              <div className="text-sm text-gray-400 line-through">
                {product.originalPrice}
              </div>
            )}
          </div>

          <button className="flex items-center space-x-2 bg-teal-500 text-white px-5 py-2 rounded-lg hover:bg-opacity-90 transition-colors group/btn">
            <ShoppingCart className="w-5 h-5" />
            <span className="font-medium">Add to Cart</span>
          </button>
        </div>

        {/* Product Tags */}
        <div className="flex flex-wrap gap-2 pt-2">
          {product.tags?.map((tag, idx) => (
            <span
              key={idx}
              className="text-xs px-2 py-1 bg-gray-100 text-gray-600 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Quick View Modal */}
      {showQuickView && (
        <div className="absolute inset-0 bg-black bg-opacity-60 rounded-2xl flex items-center justify-center z-20">
          <div className="text-white text-center p-4">
            <div className="font-bold mb-2 font-[Playfair Display]">
              Quick View
            </div>
            <button className="bg-white text-gray-900 px-4 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors">
              View Details
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductCard;
