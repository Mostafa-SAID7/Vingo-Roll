import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, ShoppingCart, Star, Filter, Search, Grid, List, X, ChevronLeft, ChevronRight } from 'lucide-react';

const Shop = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [showFilters, setShowFilters] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 600]);
  const [selectedRating, setSelectedRating] = useState(0);
  const [sortBy, setSortBy] = useState('featured');
  const itemsPerPage = 8;

  const categories = ['All', 'Blackout', 'Sheer', 'Thermal', 'Designer', 'Sale'];

  const allProducts = [
    {
      id: 1,
      name: 'Royal Velvet Blackout',
      category: 'Blackout',
      price: 299,
      originalPrice: 399,
      rating: 4.9,
      reviews: 234,
      image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=600',
      badge: 'Best Seller',
      inStock: true,
      description: 'Premium velvet blackout curtains that block 99% of light'
    },
    {
      id: 2,
      name: 'Linen Blend Natural',
      category: 'Designer',
      price: 189,
      originalPrice: 249,
      rating: 4.8,
      reviews: 156,
      image: 'https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg?auto=compress&cs=tinysrgb&w=600',
      badge: 'Eco-Friendly',
      inStock: true,
      description: 'Sustainable linen blend with natural texture'
    },
    {
      id: 3,
      name: 'Thermal Insulated Pro',
      category: 'Thermal',
      price: 159,
      originalPrice: 199,
      rating: 4.7,
      reviews: 89,
      image: 'https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=600',
      badge: 'Energy Saver',
      inStock: true,
      description: 'Energy-efficient thermal insulation for year-round comfort'
    },
    {
      id: 4,
      name: 'Sheer Elegance White',
      category: 'Sheer',
      price: 129,
      originalPrice: 169,
      rating: 4.6,
      reviews: 67,
      image: 'https://images.pexels.com/photos/1571470/pexels-photo-1571470.jpeg?auto=compress&cs=tinysrgb&w=600',
      badge: 'New Arrival',
      inStock: true,
      description: 'Light and airy sheer curtains for elegant spaces'
    },
    {
      id: 5,
      name: 'Luxury Silk Drapes',
      category: 'Designer',
      price: 449,
      originalPrice: 599,
      rating: 5.0,
      reviews: 45,
      image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=600',
      badge: 'Premium',
      inStock: true,
      description: 'Handcrafted silk drapes with luxurious finish'
    },
    {
      id: 6,
      name: 'Blackout Plus',
      category: 'Blackout',
      price: 199,
      originalPrice: 259,
      rating: 4.8,
      reviews: 178,
      image: 'https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=600',
      badge: 'Popular',
      inStock: true,
      description: 'Enhanced blackout technology with noise reduction'
    },
    {
      id: 7,
      name: 'Thermal Comfort',
      category: 'Thermal',
      price: 179,
      originalPrice: 229,
      rating: 4.7,
      reviews: 92,
      image: 'https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg?auto=compress&cs=tinysrgb&w=600',
      badge: 'Sale',
      inStock: true,
      description: 'Triple-layer thermal curtains for maximum insulation'
    },
    {
      id: 8,
      name: 'Sheer Breeze',
      category: 'Sheer',
      price: 99,
      originalPrice: 139,
      rating: 4.5,
      reviews: 54,
      image: 'https://images.pexels.com/photos/1571470/pexels-photo-1571470.jpeg?auto=compress&cs=tinysrgb&w=600',
      badge: 'Budget Pick',
      inStock: true,
      description: 'Affordable sheer curtains with elegant drape'
    },
    {
      id: 9,
      name: 'Velvet Luxe Blackout',
      category: 'Blackout',
      price: 349,
      originalPrice: 449,
      rating: 4.9,
      reviews: 201,
      image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=600',
      badge: 'Premium',
      inStock: true,
      description: 'Ultra-soft velvet with complete light blocking'
    },
    {
      id: 10,
      name: 'Modern Minimalist Sheer',
      category: 'Sheer',
      price: 149,
      originalPrice: 189,
      rating: 4.6,
      reviews: 88,
      image: 'https://images.pexels.com/photos/1571470/pexels-photo-1571470.jpeg?auto=compress&cs=tinysrgb&w=600',
      badge: 'Trending',
      inStock: true,
      description: 'Contemporary design with subtle texture'
    },
    {
      id: 11,
      name: 'Designer Collection Gold',
      category: 'Designer',
      price: 529,
      originalPrice: 699,
      rating: 5.0,
      reviews: 32,
      image: 'https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg?auto=compress&cs=tinysrgb&w=600',
      badge: 'Exclusive',
      inStock: true,
      description: 'Limited edition designer curtains with gold accents'
    },
    {
      id: 12,
      name: 'Thermal Shield Pro',
      category: 'Thermal',
      price: 219,
      originalPrice: 279,
      rating: 4.8,
      reviews: 145,
      image: 'https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=600',
      badge: 'Top Rated',
      inStock: true,
      description: 'Professional-grade thermal protection'
    },
    {
      id: 13,
      name: 'Blackout Essential',
      category: 'Blackout',
      price: 139,
      originalPrice: 179,
      rating: 4.5,
      reviews: 312,
      image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=600',
      badge: 'Value',
      inStock: true,
      description: 'Affordable blackout solution for every room'
    },
    {
      id: 14,
      name: 'Sheer Luxury Collection',
      category: 'Sheer',
      price: 199,
      originalPrice: 259,
      rating: 4.7,
      reviews: 76,
      image: 'https://images.pexels.com/photos/1571470/pexels-photo-1571470.jpeg?auto=compress&cs=tinysrgb&w=600',
      badge: 'New',
      inStock: true,
      description: 'Premium sheer fabric with elegant flow'
    },
    {
      id: 15,
      name: 'Thermal Max',
      category: 'Thermal',
      price: 249,
      originalPrice: 319,
      rating: 4.9,
      reviews: 167,
      image: 'https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg?auto=compress&cs=tinysrgb&w=600',
      badge: 'Best Seller',
      inStock: true,
      description: 'Maximum thermal efficiency with style'
    },
    {
      id: 16,
      name: 'Designer Artisan',
      category: 'Designer',
      price: 399,
      originalPrice: 529,
      rating: 4.8,
      reviews: 58,
      image: 'https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=600',
      badge: 'Handmade',
      inStock: true,
      description: 'Artisan-crafted curtains with unique patterns'
    }
  ];

  // Filter and sort products
  const filteredAndSortedProducts = useMemo(() => {
    let filtered = allProducts;

    // Category filter
    if (selectedCategory !== 'All') {
      filtered = filtered.filter(p => p.category === selectedCategory);
    }

    // Search filter
    if (searchQuery) {
      filtered = filtered.filter(p => 
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Price range filter
    filtered = filtered.filter(p => p.price >= priceRange[0] && p.price <= priceRange[1]);

    // Rating filter
    if (selectedRating > 0) {
      filtered = filtered.filter(p => p.rating >= selectedRating);
    }

    // Sort
    switch (sortBy) {
      case 'price-low':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      case 'popular':
        filtered.sort((a, b) => b.reviews - a.reviews);
        break;
      default:
        // featured - keep original order
        break;
    }

    return filtered;
  }, [selectedCategory, searchQuery, priceRange, selectedRating, sortBy]);

  // Pagination
  const totalPages = Math.ceil(filteredAndSortedProducts.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentProducts = filteredAndSortedProducts.slice(startIndex, endIndex);

  // Reset to page 1 when filters change
  React.useEffect(() => {
    setCurrentPage(1);
  }, [selectedCategory, searchQuery, priceRange, selectedRating, sortBy]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Shop All Products</h1>
          <p className="text-xl text-gray-600">Discover our complete collection of premium curtains</p>
          <p className="text-sm text-gray-500 mt-2">
            Showing {startIndex + 1}-{Math.min(endIndex, filteredAndSortedProducts.length)} of {filteredAndSortedProducts.length} products
          </p>
        </motion.div>

        {/* Search, Sort, and View Toggle Bar */}
        <div className="mb-8 flex flex-col lg:flex-row gap-4 items-center justify-between">
          <div className="relative w-full lg:w-96">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-full border-2 border-gray-200 focus:border-purple-600 focus:outline-none"
            />
          </div>
          
          <div className="flex items-center gap-4 w-full lg:w-auto">
            {/* Sort Dropdown */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-3 rounded-full border-2 border-gray-200 focus:border-purple-600 focus:outline-none bg-white"
            >
              <option value="featured">Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Highest Rated</option>
              <option value="popular">Most Popular</option>
            </select>

            {/* Filter Button */}
            <button 
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center space-x-2 px-6 py-3 bg-white rounded-full border-2 border-gray-200 hover:border-purple-600 transition-colors"
            >
              <Filter size={20} />
              <span>Filters</span>
            </button>

            {/* View Toggle */}
            <div className="flex items-center bg-white rounded-full border-2 border-gray-200 p-1">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-full transition-colors ${
                  viewMode === 'grid' ? 'bg-purple-600 text-white' : 'text-gray-600 hover:text-purple-600'
                }`}
              >
                <Grid size={20} />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-full transition-colors ${
                  viewMode === 'list' ? 'bg-purple-600 text-white' : 'text-gray-600 hover:text-purple-600'
                }`}
              >
                <List size={20} />
              </button>
            </div>
          </div>
        </div>

        {/* Advanced Filters Panel */}
        <AnimatePresence>
          {showFilters && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="mb-8 bg-white rounded-3xl p-6 shadow-lg"
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-gray-900">Advanced Filters</h3>
                <button
                  onClick={() => setShowFilters(false)}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {/* Price Range */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Price Range: ${priceRange[0]} - ${priceRange[1]}
                  </label>
                  <div className="flex items-center space-x-4">
                    <input
                      type="range"
                      min="0"
                      max="600"
                      value={priceRange[0]}
                      onChange={(e) => setPriceRange([parseInt(e.target.value), priceRange[1]])}
                      className="flex-1"
                    />
                    <input
                      type="range"
                      min="0"
                      max="600"
                      value={priceRange[1]}
                      onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                      className="flex-1"
                    />
                  </div>
                </div>

                {/* Rating Filter */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Minimum Rating
                  </label>
                  <div className="flex items-center space-x-2">
                    {[0, 3, 4, 4.5, 5].map((rating) => (
                      <button
                        key={rating}
                        onClick={() => setSelectedRating(rating)}
                        className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                          selectedRating === rating
                            ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white'
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                        }`}
                      >
                        {rating === 0 ? 'All' : `${rating}+ ⭐`}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Reset Filters */}
              <div className="mt-6 flex justify-end">
                <button
                  onClick={() => {
                    setPriceRange([0, 600]);
                    setSelectedRating(0);
                    setSearchQuery('');
                    setSelectedCategory('All');
                    setSortBy('featured');
                  }}
                  className="px-6 py-2 text-purple-600 hover:bg-purple-50 rounded-full transition-colors"
                >
                  Reset All Filters
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Category Filter */}
        <div className="mb-12 flex flex-wrap gap-3 justify-center">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Products Grid/List */}
        {currentProducts.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-2xl text-gray-600">No products found matching your criteria</p>
            <button
              onClick={() => {
                setPriceRange([0, 600]);
                setSelectedRating(0);
                setSearchQuery('');
                setSelectedCategory('All');
                setSortBy('featured');
              }}
              className="mt-6 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-semibold hover:shadow-xl transition-all"
            >
              Clear All Filters
            </button>
          </div>
        ) : (
          <>
            <div className={viewMode === 'grid' 
              ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8' 
              : 'flex flex-col gap-6'
            }>
              {currentProducts.map((product, index) => (
                viewMode === 'grid' ? (
                  // Grid View
                  <motion.div
                    key={product.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.05 }}
                    className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden"
                  >
                    <Link to={`/product/${product.id}`}>
                      <div className="relative aspect-[4/5] overflow-hidden">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                        
                        {/* Badge */}
                        <div className="absolute top-4 left-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                          {product.badge}
                        </div>

                        {/* Action Buttons */}
                        <div className="absolute top-4 right-4 flex flex-col space-y-2 opacity-0 group-hover:opacity-100 transition-opacity">
                          <button 
                            onClick={(e) => e.preventDefault()}
                            className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-600 hover:text-red-500 transition-colors"
                          >
                            <Heart size={18} />
                          </button>
                        </div>

                        {/* Add to Cart Button */}
                        <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                          <button 
                            onClick={(e) => {
                              e.preventDefault();
                              window.location.href = '/cart';
                            }}
                            className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-full font-semibold flex items-center justify-center space-x-2 hover:shadow-lg transition-all duration-300"
                          >
                            <ShoppingCart size={18} />
                            <span>Add to Cart</span>
                          </button>
                        </div>
                      </div>
                    </Link>

                    <Link to={`/product/${product.id}`}>
                      <div className="p-6">
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">
                          {product.name}
                        </h3>

                        <div className="flex items-center space-x-2 mb-3">
                          <div className="flex items-center space-x-1">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                size={14}
                                className={`${
                                  i < Math.floor(product.rating)
                                    ? 'text-yellow-400 fill-current'
                                    : 'text-gray-300'
                                }`}
                              />
                            ))}
                          </div>
                          <span className="text-sm text-gray-600">
                            {product.rating} ({product.reviews})
                          </span>
                        </div>

                        <div className="flex items-center space-x-3">
                          <span className="text-2xl font-bold text-gray-900">
                            ${product.price}
                          </span>
                          <span className="text-lg text-gray-500 line-through">
                            ${product.originalPrice}
                          </span>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                ) : (
                  // List View
                  <motion.div
                    key={product.id}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.05 }}
                    className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden"
                  >
                    <div className="flex flex-col md:flex-row">
                      <Link to={`/product/${product.id}`} className="md:w-80">
                        <div className="relative aspect-square md:aspect-auto md:h-full overflow-hidden">
                          <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                          />
                          <div className="absolute top-4 left-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                            {product.badge}
                          </div>
                        </div>
                      </Link>

                      <div className="flex-1 p-6 flex flex-col justify-between">
                        <Link to={`/product/${product.id}`}>
                          <div>
                            <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                              {product.name}
                            </h3>
                            <p className="text-gray-600 mb-4">{product.description}</p>

                            <div className="flex items-center space-x-2 mb-4">
                              <div className="flex items-center space-x-1">
                                {[...Array(5)].map((_, i) => (
                                  <Star
                                    key={i}
                                    size={16}
                                    className={`${
                                      i < Math.floor(product.rating)
                                        ? 'text-yellow-400 fill-current'
                                        : 'text-gray-300'
                                    }`}
                                  />
                                ))}
                              </div>
                              <span className="text-sm text-gray-600">
                                {product.rating} ({product.reviews} reviews)
                              </span>
                            </div>
                          </div>
                        </Link>

                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-3">
                            <span className="text-3xl font-bold text-gray-900">
                              ${product.price}
                            </span>
                            <span className="text-xl text-gray-500 line-through">
                              ${product.originalPrice}
                            </span>
                            <span className="text-sm text-green-600 font-medium">
                              {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% off
                            </span>
                          </div>

                          <div className="flex items-center space-x-3">
                            <button className="p-3 bg-gray-100 hover:bg-red-50 rounded-full text-gray-600 hover:text-red-500 transition-colors">
                              <Heart size={20} />
                            </button>
                            <Link to="/cart">
                              <button className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-semibold flex items-center space-x-2 hover:shadow-lg transition-all">
                                <ShoppingCart size={20} />
                                <span>Add to Cart</span>
                              </button>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )
              ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="mt-16 flex items-center justify-center space-x-2"
              >
                <button
                  onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                  disabled={currentPage === 1}
                  className={`p-3 rounded-full transition-all ${
                    currentPage === 1
                      ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                      : 'bg-white text-gray-700 hover:bg-purple-600 hover:text-white shadow-lg'
                  }`}
                >
                  <ChevronLeft size={20} />
                </button>

                {[...Array(totalPages)].map((_, index) => {
                  const pageNumber = index + 1;
                  // Show first page, last page, current page, and pages around current
                  if (
                    pageNumber === 1 ||
                    pageNumber === totalPages ||
                    (pageNumber >= currentPage - 1 && pageNumber <= currentPage + 1)
                  ) {
                    return (
                      <button
                        key={pageNumber}
                        onClick={() => setCurrentPage(pageNumber)}
                        className={`w-12 h-12 rounded-full font-semibold transition-all ${
                          currentPage === pageNumber
                            ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg'
                            : 'bg-white text-gray-700 hover:bg-gray-100'
                        }`}
                      >
                        {pageNumber}
                      </button>
                    );
                  } else if (
                    pageNumber === currentPage - 2 ||
                    pageNumber === currentPage + 2
                  ) {
                    return <span key={pageNumber} className="text-gray-400">...</span>;
                  }
                  return null;
                })}

                <button
                  onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
                  disabled={currentPage === totalPages}
                  className={`p-3 rounded-full transition-all ${
                    currentPage === totalPages
                      ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                      : 'bg-white text-gray-700 hover:bg-purple-600 hover:text-white shadow-lg'
                  }`}
                >
                  <ChevronRight size={20} />
                </button>
              </motion.div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Shop;
