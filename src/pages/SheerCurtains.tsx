import React from 'react';
import { motion } from 'framer-motion';
import { Sun, Wind, Eye, Sparkles } from 'lucide-react';

const SheerCurtains = () => {
  const products = [
    {
      name: 'Elegant White Sheer',
      price: 79.99,
      image: 'https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?w=600',
      features: ['Light Filtering', 'Airy & Elegant', 'Machine Washable']
    },
    {
      name: 'Linen Blend Sheer',
      price: 89.99,
      image: 'https://images.unsplash.com/photo-1616137466211-f939a420be84?w=600',
      features: ['Natural Texture', 'Breathable', 'Eco-Friendly']
    },
    {
      name: 'Embroidered Sheer',
      price: 109.99,
      image: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=600',
      features: ['Decorative Pattern', 'Premium Quality', 'Elegant Design']
    },
    {
      name: 'Voile Sheer Panel',
      price: 69.99,
      image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=600',
      features: ['Lightweight', 'Soft Drape', 'Multiple Colors']
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
          <Sun size={64} className="mx-auto text-purple-600 mb-4" />
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Sheer Curtains</h1>
          <p className="text-xl text-gray-600">Soft, elegant light filtering for any room</p>
        </motion.div>

        <div className="grid md:grid-cols-4 gap-6 mb-16">
          {[
            { icon: <Sun size={32} />, title: 'Natural Light', desc: 'Soft, diffused lighting' },
            { icon: <Wind size={32} />, title: 'Airy Feel', desc: 'Light & breathable fabric' },
            { icon: <Eye size={32} />, title: 'Privacy', desc: 'Daytime privacy maintained' },
            { icon: <Sparkles size={32} />, title: 'Elegant Style', desc: 'Sophisticated look' }
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

export default SheerCurtains;
