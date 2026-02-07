import React, { useState, useEffect } from 'react';
import { 
  Search, 
  Filter, 
  ShoppingCart, 
  Star, 
  Truck, 
  Shield, 
  RefreshCw,
  ChevronDown,
  Grid,
  List,
  Heart,
  X,
  Plus,
  Minus
} from 'lucide-react';
import ProductCard from '../components/ProductCard';
import { products, productCategories } from '../utils/constants';

const ProductsPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [priceRange, setPriceRange] = useState([0, 50000]);
  const [sortBy, setSortBy] = useState('featured');
  const [viewMode, setViewMode] = useState('grid');
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [showFilters, setShowFilters] = useState(false);
  const [loading, setLoading] = useState(false);

  // Filter products
  const filteredProducts = products.filter(product => {
    const matchesSearch = searchTerm === '' || 
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.brand.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = selectedCategory === 'All' || 
      product.category.toLowerCase() === selectedCategory.toLowerCase();
    
    const price = parseInt(product.price.replace(/[^0-9]/g, ''));
    const matchesPrice = price >= priceRange[0] && price <= priceRange[1];
    
    return matchesSearch && matchesCategory && matchesPrice;
  });

  // Sort products
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return parseInt(a.price.replace(/[^0-9]/g, '')) - parseInt(b.price.replace(/[^0-9]/g, ''));
      case 'price-high':
        return parseInt(b.price.replace(/[^0-9]/g, '')) - parseInt(a.price.replace(/[^0-9]/g, ''));
      case 'rating':
        return b.rating - a.rating;
      case 'newest':
        return b.id - a.id;
      default:
        return 0;
    }
  });

  // Add to cart
  const addToCart = (product) => {
    setCart(prev => {
      const existingItem = prev.find(item => item.id === product.id);
      if (existingItem) {
        return prev.map(item => 
          item.id === product.id 
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prev, { ...product, quantity: 1 }];
      }
    });
  };

  // Remove from cart
  const removeFromCart = (id) => {
    setCart(prev => prev.filter(item => item.id !== id));
  };

  // Update quantity
  const updateQuantity = (id, quantity) => {
    if (quantity < 1) {
      removeFromCart(id);
      return;
    }
    setCart(prev => prev.map(item => 
      item.id === id ? { ...item, quantity } : item
    ));
  };

  // Toggle wishlist
  const toggleWishlist = (id) => {
    setWishlist(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  // Calculate cart total
  const cartTotal = cart.reduce((total, item) => {
    const price = parseInt(item.price.replace(/[^0-9]/g, ''));
    return total + (price * item.quantity);
  }, 0);

  // Handle checkout
  const handleCheckout = () => {
    setLoading(true);
    setTimeout(() => {
      alert(`Order placed successfully! Total: ${cartTotal.toLocaleString()} RWF`);
      setCart([]);
      setShowCart(false);
      setLoading(false);
    }, 1500);
  };

  // Benefits
  const benefits = [
    { icon: <Truck className="w-8 h-8" />, title: 'Free Delivery', desc: 'On orders above 30,000 RWF' },
    { icon: <Shield className="w-8 h-8" />, title: 'Quality Guarantee', desc: '100% original products' },
    { icon: <RefreshCw className="w-8 h-8" />, title: 'Easy Returns', desc: '30-day return policy' },
  ];

  return (
    <div className="pt-24 pb-20 bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <div className="bg-teal-500 py-16">
        <div className="container mx-auto px-4 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Premium <span className="text-gray-900">Products</span>
          </h1>
          <p className="text-xl max-w-3xl mx-auto opacity-90">
            Shop our collection of professional beauty and grooming products
          </p>
        </div>
      </div>

      {/* Benefits */}
      <div className="container mx-auto px-4 -mt-10 mb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {benefits.map((benefit, idx) => (
            <div key={idx} className="bg-white rounded-2xl p-6 shadow-xl flex items-center">
              <div className="text-primary mr-4">{benefit.icon}</div>
              <div>
                <h3 className="font-bold text-lg">{benefit.title}</h3>
                <p className="text-gray-600 text-sm">{benefit.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Filters Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-xl p-6 sticky top-24">
              {/* Categories */}
              <div className="mb-8">
                <h3 className="text-lg font-bold mb-4">Categories</h3>
                <div className="space-y-2">
                  {productCategories.map(category => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${
                        selectedCategory === category
                          ? 'bg-black text-white'
                          : 'hover:bg-gray-100'
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>

              {/* Price Range */}
              <div className="mb-8">
                <h3 className="text-lg font-bold mb-4">Price Range</h3>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span>{priceRange[0].toLocaleString()} RWF</span>
                      <span>{priceRange[1].toLocaleString()} RWF</span>
                    </div>
                    <input
                      type="range"
                      min="0"
                      max="50000"
                      step="5000"
                      value={priceRange[1]}
                      onChange={(e) => setPriceRange([0, parseInt(e.target.value)])}
                      className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                    />
                  </div>
                </div>
              </div>

              {/* Availability */}
              <div className="mb-8">
                <h3 className="text-lg font-bold mb-4">Availability</h3>
                <div className="space-y-2">
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-3" defaultChecked />
                    <span>In Stock</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-3" />
                    <span>On Sale</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-3" />
                    <span>New Arrivals</span>
                  </label>
                </div>
              </div>

              {/* Brands */}
              <div>
                <h3 className="text-lg font-bold mb-4">Brands</h3>
                <div className="space-y-2">
                  {['L\'Oréal', 'Schwarzkopf', 'Dyson', 'Wahl', 'OPI', 'Morphe'].map(brand => (
                    <label key={brand} className="flex items-center">
                      <input type="checkbox" className="mr-3" />
                      <span>{brand}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Products Grid */}
          <div className="lg:col-span-3">
            {/* Search and Controls */}
            <div className="bg-white rounded-2xl shadow-xl p-6 mb-8">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                {/* Search */}
                <div className="relative flex-1">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search products..."
                    className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>

                {/* View Toggle */}
                <div className="flex items-center space-x-4">
                  <div className="flex border border-gray-300 rounded-lg overflow-hidden">
                    <button
                      onClick={() => setViewMode('grid')}
                      className={`p-3 ${viewMode === 'grid' ? 'bg-primary text-white' : 'bg-gray-100'}`}
                    >
                      <Grid className="w-5 h-5" />
                    </button>
                    <button
                      onClick={() => setViewMode('list')}
                      className={`p-3 ${viewMode === 'list' ? 'bg-primary text-white' : 'bg-gray-100'}`}
                    >
                      <List className="w-5 h-5" />
                    </button>
                  </div>

                  {/* Sort */}
                  <select
                    className="p-3 border border-gray-300 rounded-xl"
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                  >
                    <option value="featured">Featured</option>
                    <option value="newest">Newest</option>
                    <option value="price-low">Price: Low to High</option>
                    <option value="price-high">Price: High to Low</option>
                    <option value="rating">Rating</option>
                  </select>

                  {/* Cart Button */}
                  <button
                    onClick={() => setShowCart(true)}
                    className="relative p-3 bg-primary text-white rounded-xl"
                  >
                    <ShoppingCart className="w-6 h-6" />
                    {cart.length > 0 && (
                      <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center">
                        {cart.length}
                      </span>
                    )}
                  </button>
                </div>
              </div>
            </div>

            {/* Products */}
            {sortedProducts.length === 0 ? (
              <div className="text-center py-20 bg-white rounded-2xl shadow-lg">
                <div className="text-6xl mb-4">🛒</div>
                <h3 className="text-2xl font-bold text-gray-700 mb-2">No products found</h3>
                <p className="text-gray-600">Try changing your search or filter criteria</p>
              </div>
            ) : (
              <>
                <div className="mb-4">
                  <h2 className="text-2xl font-bold text-gray-900">
                    {selectedCategory === 'All' ? 'All Products' : selectedCategory}
                  </h2>
                  <p className="text-gray-600">
                    {sortedProducts.length} products found
                  </p>
                </div>

                {viewMode === 'grid' ? (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {sortedProducts.map(product => (
                      <ProductCard 
                        key={product.id} 
                        product={product}
                        onAddToCart={() => addToCart(product)}
                        onToggleWishlist={() => toggleWishlist(product.id)}
                        isWishlisted={wishlist.includes(product.id)}
                      />
                    ))}
                  </div>
                ) : (
                  <div className="space-y-4">
                    {sortedProducts.map(product => (
                      <div key={product.id} className="bg-white rounded-2xl p-6 shadow-lg flex flex-col md:flex-row items-center">
                        <div className="w-32 h-32 rounded-xl overflow-hidden mb-4 md:mb-0 md:mr-6">
                          <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="flex-1">
                          <div className="flex justify-between items-start">
                            <div>
                              <h3 className="text-xl font-bold mb-2">{product.name}</h3>
                              <p className="text-gray-600 mb-3">{product.description}</p>
                              <div className="flex items-center space-x-4">
                                <div className="flex items-center">
                                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                                  <span className="ml-1">{product.rating}</span>
                                  <span className="text-gray-400 ml-1">({product.reviews})</span>
                                </div>
                                <span className="text-sm text-gray-500">{product.brand}</span>
                              </div>
                            </div>
                            <div className="text-right">
                              <div className="text-2xl font-bold text-primary mb-2">
                                {product.price}
                              </div>
                              {product.originalPrice && (
                                <div className="text-sm text-gray-400 line-through">
                                  {product.originalPrice}
                                </div>
                              )}
                            </div>
                          </div>
                          <div className="flex justify-between items-center mt-4">
                            <div className="flex space-x-2">
                              {product.tags?.map((tag, idx) => (
                                <span
                                  key={idx}
                                  className="text-xs px-2 py-1 bg-gray-100 rounded-full"
                                >
                                  {tag}
                                </span>
                              ))}
                            </div>
                            <div className="flex space-x-2">
                              <button
                                onClick={() => toggleWishlist(product.id)}
                                className={`p-2 rounded-lg ${
                                  wishlist.includes(product.id)
                                    ? 'bg-red-50 text-red-600'
                                    : 'bg-gray-100 text-gray-600'
                                }`}
                              >
                                <Heart className={`w-5 h-5 ${wishlist.includes(product.id) ? 'fill-current' : ''}`} />
                              </button>
                              <button
                                onClick={() => addToCart(product)}
                                className="bg-black text-white px-4 py-2 rounded-lg font-medium"
                              >
                                Add to Cart
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </div>

      {/* Cart Modal */}
      {showCart && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-hidden">
            {/* Header */}
            <div className="flex justify-between items-center p-6 border-b">
              <h2 className="text-2xl font-bold">Shopping Cart</h2>
              <button
                onClick={() => setShowCart(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Cart Items */}
            <div className="p-6 overflow-y-auto max-h-[60vh]">
              {cart.length === 0 ? (
                <div className="text-center py-12">
                  <ShoppingCart className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-gray-700 mb-2">Your cart is empty</h3>
                  <p className="text-gray-600 mb-6">Add some products to get started</p>
                  <button
                    onClick={() => setShowCart(false)}
                    className="bg-primary text-white px-6 py-3 rounded-lg"
                  >
                    Continue Shopping
                  </button>
                </div>
              ) : (
                <div className="space-y-4">
                  {cart.map(item => (
                    <div key={item.id} className="flex items-center space-x-4 p-4 bg-gray-50 rounded-xl">
                      <div className="w-20 h-20 rounded-lg overflow-hidden">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold">{item.name}</h4>
                        <p className="text-sm text-gray-600">{item.brand}</p>
                        <div className="text-primary font-bold">{item.price}</div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="w-8 h-8 flex items-center justify-center bg-gray-200 rounded-lg"
                        >
                          <Minus className="w-4 h-4" />
                        </button>
                        <span className="font-bold">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="w-8 h-8 flex items-center justify-center bg-gray-200 rounded-lg"
                        >
                          <Plus className="w-4 h-4" />
                        </button>
                      </div>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-red-500 hover:text-red-700"
                      >
                        <X className="w-5 h-5" />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Footer */}
            {cart.length > 0 && (
              <div className="border-t p-6">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="text-xl font-bold">{cartTotal.toLocaleString()} RWF</span>
                </div>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-gray-600">Delivery</span>
                  <span className="font-bold">
                    {cartTotal > 30000 ? 'FREE' : '2,000 RWF'}
                  </span>
                </div>
                <div className="flex justify-between items-center mb-6 text-lg font-bold">
                  <span>Total</span>
                  <span>{(cartTotal + (cartTotal > 30000 ? 0 : 2000)).toLocaleString()} RWF</span>
                </div>
                <div className="flex space-x-3">
                  <button
                    onClick={() => setShowCart(false)}
                    className="flex-1 border border-gray-300 py-3 rounded-lg hover:bg-gray-50"
                  >
                    Continue Shopping
                  </button>
                  <button
                    onClick={handleCheckout}
                    disabled={loading}
                    className="flex-1 bg-primary text-white py-3 rounded-lg font-semibold hover:bg-opacity-90 disabled:opacity-50"
                  >
                    {loading ? 'Processing...' : 'Checkout'}
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductsPage;