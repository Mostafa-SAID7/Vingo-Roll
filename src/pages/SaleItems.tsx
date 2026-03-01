import React from 'react';
import { motion } from 'framer-motion';
import { Tag, TrendingDown, Clock, Zap } from 'lucide-react';

const SaleItems = () => {
  const products = [
    {
      name: 'Classic Linen Curtain',
      originalPrice: 129.99,
      salePrice: 89.99,
      discount: 31,
      image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=600',
      stock: 'Limited Stock'
    },
    {
      name: 'Modern Blackout Panel',
      originalPrice: 159.99,
      salePrice: 119.99,
      discount: 25,
      image: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=600',
      stock: 'Only 5 Left'
    },
    {
      name: 'Sheer Elegance Set',
      originalPrice: 99.99,
      salePrice: 69.99,
      discount: 30,
      image: 'https://images.unsplash.com/photo-1616137466211-f939a420be84?w=600',
      stock: 'In Stock'
    },
    {
      name: 'Thermal Insulated Drape',
      originalPrice: 179.99,
      salePrice: 129.99,
      discount: 28,
      image: 'https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?w=600',
      stock: 'Limited Stock'
    },
    {
      name: 'Velvet Luxury Panel',
      originalPrice: 199.99,
      salePrice: 149.99,
      discount: 25,
      image: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=600',
      stock: 'Only 3 Left'
    },
    {
      name: 'Cotton Blend Curtain',
      originalPrice: 89.99,
      salePrice: 59.99,
      discount: 33,
      image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=600',
      stock: 'In Stock'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <Tag size={64} className="mx-auto text-purple-600 mb-4" />
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Sale Items</h1>
          <p className="text-xl text-gray-600">Amazing deals on premium curtains - Limited time only!</p>
        </motion.div>

        <div className="grid md:grid-cols-4 gap-6 mb-16">
          {[
            { icon: <TrendingDown size={32} />, title: 'Up to 35% Off', desc: 'Huge savings on quality' },
            { icon: <Clock size={32} />, title: 'Limited Time', desc: 'Sale ends soon' },
            { icon: <Zap size={32} />, title: 'Fast Shipping', desc: 'Quick delivery available' },
            { icon: <Tag size={32} />, title: 'Best Deals', desc: 'Lowest prices guaranteed' }
          ].map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl p-6 shadow-lg text-center"
            >
              <div className="text-purple-600 flex justify-center mb-3">{benefit.icon}</div>
              <h3 className="font-bold text-gray-900 mb-2">{benefit.title}</h3>
              <p className="text-gray-600 text-sm">{benefit.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden"
            >
              <div className="relative">
                <img src={product.image} alt={product.name} className="w-full h-64 object-cover" />
                <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                  -{product.discount}%
                </div>
                <div className="absolute bottom-4 left-4 bg-white px-3 py-1 rounded-full text-xs font-semibold text-gray-700">
                  {product.stock}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{product.name}</h3>
                <div className="flex items-center space-x-3 mb-4">
                  <p className="text-2xl font-bold text-purple-600">${product.salePrice}</p>
                  <p className="text-lg text-gray-400 line-through">${product.originalPrice}</p>
                </div>
                <p className="text-green-600 font-semibold text-sm mb-4">
                  Save ${(product.originalPrice - product.salePrice).toFixed(2)}
                </p>
                <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all">
                  Add to Cart
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-16 bg-gradient-to-r from-red-500 to-pink-500 rounded-2xl p-8 text-center text-white"
        >
          <Clock size={48} className="mx-auto mb-4" />
          <h2 className="text-3xl font-bold mb-2">Sale Ends Soon!</h2>
          <p className="text-xl mb-4">Don't miss out on these incredible deals</p>
          <p className="text-sm opacity-90">Limited quantities available. First come, first served.</p>
        </motion.div>
      </div>
    </div>
  );
};

export default SaleItems;
