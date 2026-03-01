import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Heart, ShoppingCart, Trash2, X } from 'lucide-react';

const Wishlist = () => {
  const [wishlistItems, setWishlistItems] = useState([
    {
      id: 1,
      name: 'Velvet Blackout Curtains',
      price: 129.99,
      image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=400',
      color: 'Navy Blue',
      size: '84" x 52"'
    },
    {
      id: 2,
      name: 'Modern Roller Blinds',
      price: 89.99,
      image: 'https://images.unsplash.com/photo-1616137466211-f939a420be84?w=400',
      color: 'White',
      size: '72" x 48"'
    },
    {
      id: 3,
      name: 'Sheer White Curtains',
      price: 79.99,
      image: 'https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?w=400',
      color: 'Pure White',
      size: '96" x 52"'
    },
    {
      id: 4,
      name: 'Thermal Insulated Curtains',
      price: 149.99,
      image: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=400',
      color: 'Charcoal Gray',
      size: '84" x 52"'
    }
  ]);

  const removeFromWishlist = (id: number) => {
    setWishlistItems(wishlistItems.filter(item => item.id !== id));
  };

  const addToCart = (id: number) => {
    console.log('Added to cart:', id);
    // Add cart logic here
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-5xl font-bold text-gray-900 mb-2 flex items-center">
                <Heart size={48} className="mr-4 text-purple-600" />
                My Wishlist
              </h1>
              <p className="text-xl text-gray-600">
                {wishlistItems.length} {wishlistItems.length === 1 ? 'item' : 'items'} saved
              </p>
            </div>
          </div>
        </motion.div>

        {wishlistItems.length === 0 ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-2xl shadow-xl p-16 text-center"
          >
            <Heart size={80} className="mx-auto text-gray-300 mb-6" />
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Your wishlist is empty</h2>
            <p className="text-gray-600 mb-8">Start adding items you love to your wishlist</p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all"
            >
              Browse Products
            </motion.button>
          </motion.div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {wishlistItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all"
              >
                <div className="relative">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-64 object-cover"
                  />
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => removeFromWishlist(item.id)}
                    className="absolute top-4 right-4 bg-white p-2 rounded-full shadow-lg hover:bg-red-50 transition-colors"
                  >
                    <X size={20} className="text-red-500" />
                  </motion.button>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{item.name}</h3>
                  <div className="space-y-1 mb-4">
                    <p className="text-sm text-gray-600">Color: {item.color}</p>
                    <p className="text-sm text-gray-600">Size: {item.size}</p>
                  </div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-bold text-purple-600">${item.price}</span>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => addToCart(item.id)}
                    className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-lg font-semibold flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl transition-all"
                  >
                    <ShoppingCart size={20} />
                    <span>Add to Cart</span>
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Wishlist;
