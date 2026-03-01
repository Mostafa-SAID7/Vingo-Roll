import React from 'react';
import { motion } from 'framer-motion';
import { Moon, Star, Shield, Thermometer } from 'lucide-react';

const BlackoutCurtains = () => {
  const products = [
    {
      name: 'Royal Velvet Blackout',
      price: 129.99,
      image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=600',
      features: ['100% Light Blocking', 'Thermal Insulated', 'Noise Reduction']
    },
    {
      name: 'Premium Blackout Linen',
      price: 149.99,
      image: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=600',
      features: ['Natural Fabric', 'Energy Efficient', 'Easy Care']
    },
    {
      name: 'Luxury Silk Blackout',
      price: 199.99,
      image: 'https://images.unsplash.com/photo-1616137466211-f939a420be84?w=600',
      features: ['Premium Quality', 'Elegant Drape', 'UV Protection']
    },
    {
      name: 'Modern Blackout Panel',
      price: 99.99,
      image: 'https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?w=600',
      features: ['Contemporary Style', 'Machine Washable', 'Fade Resistant']
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
          <Moon size={64} className="mx-auto text-purple-600 mb-4" />
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Blackout Curtains</h1>
          <p className="text-xl text-gray-600">Complete darkness for perfect sleep and privacy</p>
        </motion.div>

        {/* Benefits */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          {[
            { icon: <Moon size={32} />, title: '100% Light Blocking', desc: 'Total darkness guaranteed' },
            { icon: <Thermometer size={32} />, title: 'Energy Saving', desc: 'Reduce heating & cooling costs' },
            { icon: <Shield size={32} />, title: 'Privacy Protection', desc: 'Complete privacy day & night' },
            { icon: <Star size={32} />, title: 'Better Sleep', desc: 'Improve sleep quality' }
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

        {/* Products */}
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
              <img src={product.image} alt={product.name} className="w-full h-64 object-cover" />
              <div className="p-6">
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
                  Add to Cart
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlackoutCurtains;
