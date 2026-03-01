import React from 'react';
import { motion } from 'framer-motion';
import { Crown, Sparkles, Award, Star } from 'lucide-react';

const DesignerCollection = () => {
  const products = [
    {
      name: 'Luxury Silk Drape',
      price: 299.99,
      designer: 'Elena Rossi',
      image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=600',
      features: ['100% Pure Silk', 'Hand-Crafted', 'Limited Edition']
    },
    {
      name: 'Modern Art Panel',
      price: 249.99,
      designer: 'James Chen',
      image: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=600',
      features: ['Contemporary Design', 'Custom Print', 'Museum Quality']
    },
    {
      name: 'Royal Velvet Collection',
      price: 349.99,
      designer: 'Sophie Laurent',
      image: 'https://images.unsplash.com/photo-1616137466211-f939a420be84?w=600',
      features: ['Premium Velvet', 'Embroidered Details', 'Exclusive']
    },
    {
      name: 'Artisan Linen Series',
      price: 279.99,
      designer: 'Marco Bellini',
      image: 'https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?w=600',
      features: ['Organic Linen', 'Hand-Dyed', 'Sustainable']
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
          <Crown size={64} className="mx-auto text-purple-600 mb-4" />
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Designer Collection</h1>
          <p className="text-xl text-gray-600">Exclusive designs from world-renowned designers</p>
        </motion.div>

        <div className="grid md:grid-cols-4 gap-6 mb-16">
          {[
            { icon: <Crown size={32} />, title: 'Luxury Quality', desc: 'Premium materials only' },
            { icon: <Sparkles size={32} />, title: 'Unique Designs', desc: 'One-of-a-kind pieces' },
            { icon: <Award size={32} />, title: 'Award Winning', desc: 'Internationally recognized' },
            { icon: <Star size={32} />, title: 'Limited Edition', desc: 'Exclusive collections' }
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

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
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
                <div className="absolute top-4 right-4 bg-purple-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                  Designer
                </div>
              </div>
              <div className="p-6">
                <p className="text-sm text-purple-600 font-semibold mb-1">by {product.designer}</p>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{product.name}</h3>
                <p className="text-2xl font-bold text-purple-600 mb-4">${product.price}</p>
                <ul className="space-y-2 mb-4">
                  {product.features.map((feature, i) => (
                    <li key={i} className="text-sm text-gray-600 flex items-center">
                      <span className="w-2 h-2 bg-purple-600 rounded-full mr-2"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all">
                  View Details
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DesignerCollection;
