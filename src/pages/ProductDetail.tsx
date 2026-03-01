import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Heart, ShoppingCart, Star, Truck, Shield, RotateCcw, 
  Check, Minus, Plus, Share2, ChevronLeft, ChevronRight,
  Ruler, Package, Clock, Award
} from 'lucide-react';

const ProductDetail = () => {
  const { id } = useParams();
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const [activeTab, setActiveTab] = useState('description');

  // Mock product data - in real app, fetch by ID
  const product = {
    id: 1,
    name: 'Royal Velvet Blackout Curtains',
    category: 'Blackout',
    price: 299,
    originalPrice: 399,
    rating: 4.9,
    reviews: 234,
    inStock: true,
    sku: 'VRB-001',
    badge: 'Best Seller',
    images: [
      'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1571470/pexels-photo-1571470.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    description: 'Transform your space with our premium Royal Velvet Blackout Curtains. Crafted from luxurious velvet fabric, these curtains block 99% of light while providing superior insulation. Perfect for bedrooms, home theaters, or any space where you need complete darkness and privacy.',
    features: [
      'Blocks 99% of light for complete darkness',
      'Premium velvet fabric with rich texture',
      'Energy-efficient thermal insulation',
      'Noise reduction properties',
      'Machine washable for easy care',
      'Includes matching tiebacks',
      'Rod pocket and back tab hanging options',
      'Available in multiple sizes and colors'
    ],
    specifications: {
      'Material': '100% Polyester Velvet',
      'Lining': 'Triple-weave blackout lining',
      'Care': 'Machine wash cold, tumble dry low',
      'Header Style': 'Rod pocket with back tabs',
      'Package': '2 panels per package',
      'Weight': '3.5 lbs per panel'
    },
    sizes: [
      { name: '52" W x 63" L', price: 299 },
      { name: '52" W x 84" L', price: 329 },
      { name: '52" W x 95" L', price: 359 },
      { name: '52" W x 108" L', price: 389 }
    ],
    colors: [
      { name: 'Navy Blue', hex: '#1e3a8a', image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=200' },
      { name: 'Burgundy', hex: '#7f1d1d', image: 'https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg?auto=compress&cs=tinysrgb&w=200' },
      { name: 'Charcoal', hex: '#374151', image: 'https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=200' },
      { name: 'Ivory', hex: '#fef3c7', image: 'https://images.pexels.com/photos/1571470/pexels-photo-1571470.jpeg?auto=compress&cs=tinysrgb&w=200' }
    ]
  };

  const reviews = [
    {
      id: 1,
      author: 'Sarah Johnson',
      rating: 5,
      date: '2 weeks ago',
      verified: true,
      title: 'Absolutely Perfect!',
      content: 'These curtains exceeded my expectations. The velvet is so soft and luxurious, and they truly block out all light. My bedroom is now pitch black even during the day. Installation was easy too!',
      helpful: 45
    },
    {
      id: 2,
      author: 'Michael Chen',
      rating: 5,
      date: '1 month ago',
      verified: true,
      title: 'Great Quality',
      content: 'Very impressed with the quality. The fabric feels premium and the blackout feature works perfectly. Also noticed my room stays cooler in summer.',
      helpful: 32
    },
    {
      id: 3,
      author: 'Emily Rodriguez',
      rating: 4,
      date: '1 month ago',
      verified: true,
      title: 'Beautiful but Heavy',
      content: 'Love the look and blackout capability. Only downside is they are quite heavy, so make sure you have a sturdy curtain rod.',
      helpful: 18
    }
  ];

  const relatedProducts = [
    {
      id: 2,
      name: 'Linen Blend Natural',
      price: 189,
      originalPrice: 249,
      rating: 4.8,
      image: 'https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 3,
      name: 'Thermal Insulated Pro',
      price: 159,
      originalPrice: 199,
      rating: 4.7,
      image: 'https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 4,
      name: 'Sheer Elegance White',
      price: 129,
      originalPrice: 169,
      rating: 4.6,
      image: 'https://images.pexels.com/photos/1571470/pexels-photo-1571470.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 5,
      name: 'Luxury Silk Drapes',
      price: 449,
      originalPrice: 599,
      rating: 5.0,
      image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ];

  const handleAddToCart = () => {
    if (!selectedSize) {
      alert('Please select a size');
      return;
    }
    if (!selectedColor) {
      alert('Please select a color');
      return;
    }
    // Add to cart logic here
    alert(`Added ${quantity} item(s) to cart!`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Breadcrumb */}
        <div className="flex items-center space-x-2 text-sm text-gray-600 mb-8">
          <Link to="/" className="hover:text-purple-600">Home</Link>
          <span>/</span>
          <Link to="/shop" className="hover:text-purple-600">Shop</Link>
          <span>/</span>
          <Link to="/blackout-curtains" className="hover:text-purple-600">{product.category}</Link>
          <span>/</span>
          <span className="text-gray-900">{product.name}</span>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Image Gallery */}
          <div className="space-y-4">
            {/* Main Image */}
            <motion.div 
              className="relative aspect-square bg-gray-100 rounded-3xl overflow-hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
              {product.badge && (
                <div className="absolute top-4 left-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2 rounded-full text-sm font-bold">
                  {product.badge}
                </div>
              )}
              
              {/* Image Navigation */}
              <button
                onClick={() => setSelectedImage(prev => (prev === 0 ? product.images.length - 1 : prev - 1))}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                onClick={() => setSelectedImage(prev => (prev === product.images.length - 1 ? 0 : prev + 1))}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors"
              >
                <ChevronRight size={24} />
              </button>
            </motion.div>

            {/* Thumbnail Images */}
            <div className="grid grid-cols-4 gap-4">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`aspect-square rounded-2xl overflow-hidden border-2 transition-all ${
                    selectedImage === index
                      ? 'border-purple-600 scale-105'
                      : 'border-gray-200 hover:border-purple-300'
                  }`}
                >
                  <img src={image} alt={`View ${index + 1}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-2">{product.name}</h1>
              <div className="flex items-center space-x-4 mb-4">
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={20}
                      className={`${
                        i < Math.floor(product.rating)
                          ? 'text-yellow-400 fill-current'
                          : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>
                <span className="text-gray-600">
                  {product.rating} ({product.reviews} reviews)
                </span>
              </div>
              <p className="text-sm text-gray-500">SKU: {product.sku}</p>
            </div>

            {/* Price */}
            <div className="flex items-center space-x-4">
              <span className="text-4xl font-bold text-gray-900">${product.price}</span>
              <span className="text-2xl text-gray-500 line-through">${product.originalPrice}</span>
              <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-semibold">
                Save {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}%
              </span>
            </div>

            {/* Stock Status */}
            <div className="flex items-center space-x-2">
              {product.inStock ? (
                <>
                  <Check className="text-green-600" size={20} />
                  <span className="text-green-600 font-medium">In Stock - Ships within 2-3 business days</span>
                </>
              ) : (
                <span className="text-red-600 font-medium">Out of Stock</span>
              )}
            </div>

            {/* Description */}
            <p className="text-gray-600 leading-relaxed">{product.description}</p>

            {/* Size Selection */}
            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-3">
                Select Size {selectedSize && `- ${selectedSize}`}
              </label>
              <div className="grid grid-cols-2 gap-3">
                {product.sizes.map((size) => (
                  <button
                    key={size.name}
                    onClick={() => setSelectedSize(size.name)}
                    className={`p-4 rounded-xl border-2 transition-all ${
                      selectedSize === size.name
                        ? 'border-purple-600 bg-purple-50'
                        : 'border-gray-200 hover:border-purple-300'
                    }`}
                  >
                    <div className="font-semibold text-gray-900">{size.name}</div>
                    <div className="text-sm text-gray-600">${size.price}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Color Selection */}
            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-3">
                Select Color {selectedColor && `- ${selectedColor}`}
              </label>
              <div className="flex items-center space-x-3">
                {product.colors.map((color) => (
                  <button
                    key={color.name}
                    onClick={() => setSelectedColor(color.name)}
                    className={`relative w-16 h-16 rounded-xl border-2 transition-all overflow-hidden ${
                      selectedColor === color.name
                        ? 'border-purple-600 scale-110'
                        : 'border-gray-200 hover:border-purple-300'
                    }`}
                    title={color.name}
                  >
                    <img src={color.image} alt={color.name} className="w-full h-full object-cover" />
                    {selectedColor === color.name && (
                      <div className="absolute inset-0 bg-purple-600/20 flex items-center justify-center">
                        <Check className="text-white" size={24} />
                      </div>
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-3">Quantity</label>
              <div className="flex items-center space-x-4">
                <div className="flex items-center border-2 border-gray-200 rounded-full">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-3 hover:bg-gray-100 rounded-l-full transition-colors"
                  >
                    <Minus size={20} />
                  </button>
                  <span className="px-6 font-semibold">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-3 hover:bg-gray-100 rounded-r-full transition-colors"
                  >
                    <Plus size={20} />
                  </button>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center space-x-4">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleAddToCart}
                className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl transition-all flex items-center justify-center space-x-2"
              >
                <ShoppingCart size={24} />
                <span>Add to Cart</span>
              </motion.button>
              <button className="p-4 border-2 border-gray-200 rounded-full hover:border-red-500 hover:text-red-500 transition-colors">
                <Heart size={24} />
              </button>
              <button className="p-4 border-2 border-gray-200 rounded-full hover:border-purple-600 hover:text-purple-600 transition-colors">
                <Share2 size={24} />
              </button>
            </div>

            {/* Features */}
            <div className="grid grid-cols-2 gap-4 pt-6 border-t">
              <div className="flex items-center space-x-3">
                <Truck className="text-purple-600" size={24} />
                <div>
                  <div className="font-semibold text-sm">Free Shipping</div>
                  <div className="text-xs text-gray-600">On orders over $99</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Shield className="text-purple-600" size={24} />
                <div>
                  <div className="font-semibold text-sm">30-Day Returns</div>
                  <div className="text-xs text-gray-600">Money-back guarantee</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <RotateCcw className="text-purple-600" size={24} />
                <div>
                  <div className="font-semibold text-sm">Easy Exchange</div>
                  <div className="text-xs text-gray-600">Hassle-free process</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Award className="text-purple-600" size={24} />
                <div>
                  <div className="font-semibold text-sm">Quality Assured</div>
                  <div className="text-xs text-gray-600">Premium materials</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs Section */}
        <div className="mb-16">
          <div className="flex items-center space-x-8 border-b mb-8">
            {['description', 'specifications', 'reviews'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`pb-4 font-semibold capitalize transition-colors relative ${
                  activeTab === tab
                    ? 'text-purple-600'
                    : 'text-gray-600 hover:text-purple-600'
                }`}
              >
                {tab}
                {activeTab === tab && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-purple-600"
                  />
                )}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="bg-white rounded-3xl p-8">
            {activeTab === 'description' && (
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Product Description</h3>
                <p className="text-gray-600 leading-relaxed mb-6">{product.description}</p>
                <h4 className="text-xl font-bold text-gray-900 mb-4">Key Features</h4>
                <ul className="grid md:grid-cols-2 gap-3">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-start space-x-2">
                      <Check className="text-green-600 flex-shrink-0 mt-1" size={18} />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {activeTab === 'specifications' && (
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Technical Specifications</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  {Object.entries(product.specifications).map(([key, value]) => (
                    <div key={key} className="flex items-start space-x-4 p-4 bg-gray-50 rounded-xl">
                      <div className="font-semibold text-gray-900 min-w-[120px]">{key}:</div>
                      <div className="text-gray-600">{value}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'reviews' && (
              <div>
                <div className="flex items-center justify-between mb-8">
                  <h3 className="text-2xl font-bold text-gray-900">Customer Reviews</h3>
                  <button className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-semibold hover:shadow-lg transition-all">
                    Write a Review
                  </button>
                </div>

                {/* Rating Summary */}
                <div className="flex items-center space-x-8 mb-8 p-6 bg-gray-50 rounded-2xl">
                  <div className="text-center">
                    <div className="text-5xl font-bold text-gray-900 mb-2">{product.rating}</div>
                    <div className="flex items-center justify-center space-x-1 mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={20}
                          className={`${
                            i < Math.floor(product.rating)
                              ? 'text-yellow-400 fill-current'
                              : 'text-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                    <div className="text-sm text-gray-600">{product.reviews} reviews</div>
                  </div>
                  <div className="flex-1 space-y-2">
                    {[5, 4, 3, 2, 1].map((stars) => (
                      <div key={stars} className="flex items-center space-x-3">
                        <span className="text-sm text-gray-600 w-12">{stars} star</span>
                        <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-yellow-400"
                            style={{ width: `${stars === 5 ? 75 : stars === 4 ? 20 : 5}%` }}
                          />
                        </div>
                        <span className="text-sm text-gray-600 w-12">
                          {stars === 5 ? '75%' : stars === 4 ? '20%' : '5%'}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Reviews List */}
                <div className="space-y-6">
                  {reviews.map((review) => (
                    <div key={review.id} className="border-b pb-6">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <div className="flex items-center space-x-2 mb-2">
                            <span className="font-semibold text-gray-900">{review.author}</span>
                            {review.verified && (
                              <span className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full">
                                Verified Purchase
                              </span>
                            )}
                          </div>
                          <div className="flex items-center space-x-2">
                            <div className="flex items-center space-x-1">
                              {[...Array(5)].map((_, i) => (
                                <Star
                                  key={i}
                                  size={16}
                                  className={`${
                                    i < review.rating
                                      ? 'text-yellow-400 fill-current'
                                      : 'text-gray-300'
                                  }`}
                                />
                              ))}
                            </div>
                            <span className="text-sm text-gray-600">{review.date}</span>
                          </div>
                        </div>
                      </div>
                      <h4 className="font-semibold text-gray-900 mb-2">{review.title}</h4>
                      <p className="text-gray-600 mb-3">{review.content}</p>
                      <button className="text-sm text-gray-600 hover:text-purple-600">
                        Helpful ({review.helpful})
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Related Products */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-8">You May Also Like</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {relatedProducts.map((relatedProduct) => (
              <Link key={relatedProduct.id} to={`/product/${relatedProduct.id}`}>
                <motion.div
                  whileHover={{ y: -10 }}
                  className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all overflow-hidden"
                >
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={relatedProduct.image}
                      alt={relatedProduct.name}
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-semibold text-gray-900 mb-2">{relatedProduct.name}</h3>
                    <div className="flex items-center space-x-1 mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={14}
                          className={`${
                            i < Math.floor(relatedProduct.rating)
                              ? 'text-yellow-400 fill-current'
                              : 'text-gray-300'
                          }`}
                        />
                      ))}
                      <span className="text-sm text-gray-600 ml-2">{relatedProduct.rating}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="text-xl font-bold text-gray-900">${relatedProduct.price}</span>
                      <span className="text-sm text-gray-500 line-through">${relatedProduct.originalPrice}</span>
                    </div>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
