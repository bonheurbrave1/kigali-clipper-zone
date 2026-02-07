import React, { useState } from 'react';
import { 
  ShoppingCart, 
  Star, 
  Filter,
  ChevronRight,
  Tag
} from 'lucide-react';
import { products } from '../utils/constants';

const Products = () => {
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredProducts = selectedCategory === 'All' 
    ? products.slice(0, 6)
    : products.filter(p => p.category.toLowerCase() === selectedCategory.toLowerCase()).slice(0, 6);

  const categories = ['All', 'Haircare', 'Skincare', 'Makeup', 'Tools', 'Grooming'];

  const addToCart = (product) => {
    setCart(prev => [...prev, product]);
    alert(`${product.name} added to cart!`);
  };

  const toggleWishlist = (id) => {
    setWishlist(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  return (
    <section id="products" className="py-20 bg-white font-[Poppins]">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-[Playfair Display]">
            Premium <span className="text-teal-500">Products</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Shop our curated collection of professional beauty and grooming products
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full transition-all flex items-center ${
                selectedCategory === category
                  ? 'bg-teal-500 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category === 'All' && <Filter className="w-4 h-4 mr-2" />}
              {category}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 overflow-hidden"
            >
              {/* Product Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                
                {/* Badges */}
                <div className="absolute top-3 left-3 space-y-2">
                  {product.discount && (
                    <div className="bg-[#FACC15] text-gray-900 px-3 py-1 rounded-full text-sm font-bold">
                      -{product.discount}%
                    </div>
                  )}
                  {product.isNew && (
                    <div className="bg-teal-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                      NEW
                    </div>
                  )}
                  {!product.inStock && (
                    <div className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                      OUT OF STOCK
                    </div>
                  )}
                </div>

                {/* Wishlist Button */}
                <button
                  onClick={() => toggleWishlist(product.id)}
                  className="absolute top-3 right-3 p-2 bg-white/90 backdrop-blur-sm rounded-full hover:bg-white"
                >
                  {wishlist.includes(product.id) ? '♥' : '♡'}
                </button>
              </div>

              {/* Product Info */}
              <div className="p-6">
                {/* Category & Rating */}
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-medium text-gray-500">
                    {product.category}
                  </span>
                  <div className="flex items-center">
                    <Star className="w-4 h-4 text-[#FACC15] fill-current" />
                    <span className="ml-1 text-sm font-medium">{product.rating}</span>
                    <span className="text-gray-400 text-sm ml-1">({product.reviews})</span>
                  </div>
                </div>

                {/* Product Name */}
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-teal-500 transition-colors font-[Playfair Display]">
                  {product.name}
                </h3>

                {/* Brand */}
                <p className="text-sm text-gray-600 mb-3">by {product.brand}</p>

                {/* Description */}
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {product.description}
                </p>

                {/* Price & Cart Button */}
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-2xl font-bold text-teal-500">
                      {product.price}
                    </div>
                    {product.originalPrice && (
                      <div className="text-sm text-gray-400 line-through">
                        {product.originalPrice}
                      </div>
                    )}
                  </div>
                  <button
                    onClick={() => addToCart(product)}
                    disabled={!product.inStock}
                    className="flex items-center space-x-2 bg-black text-white px-5 py-3 rounded-lg hover:bg-opacity-90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <ShoppingCart className="w-5 h-5" />
                    <span className="font-medium">Add to Cart</span>
                  </button>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-4">
                  {product.tags?.map((tag, idx) => (
                    <span
                      key={idx}
                      className="text-xs px-3 py-1 bg-gray-100 text-gray-600 rounded-full flex items-center"
                    >
                      <Tag className="w-3 h-3 mr-1" />
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Shop All Button */}
        <div className="text-center">
          <a
            href="/products"
            className="inline-flex items-center px-8 py-4 bg- text-white rounded-full font-semibold hover:bg-opacity-90 transition-colors"
          >
            <ShoppingCart className="w-5 h-5 mr-3" />
            View All Products
            <ChevronRight className="w-5 h-5 ml-3" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Products;
