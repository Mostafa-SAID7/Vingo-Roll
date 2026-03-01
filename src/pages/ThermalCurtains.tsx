import React from 'react';
import { motion } from 'framer-motion';
import { Thermometer, Snowflake, Flame, DollarSign } from 'lucide-react';

const ThermalCurtains = () => {
  const products = [
    {
      name: 'Thermal Insulated Pro',
      price: 159.99,
      image: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=600',
      features: ['Triple Layer', 'Energy Saving', 'Noise Reduction']
    },
    {
      name: 'Winter Warmth Curtain',
      price: 139.99,
      image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=600',
      features: ['Heat Retention', 'Draft Blocking', 'Cozy Feel']
    },
    {
      name: 'All-Season Thermal',
      price: 169.99,
      image: 'https://images.unsplash.com/photo-1616137466211-f939a420be84?w=600',
      features: ['Year-Round Use', 'UV Protection', 'Fade Resistant']
    },
    {
      name: 'Eco Thermal Panel',
      price: 149.99,
      image: 'https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?w=600',
      features: ['Sustainable', 'Energy Efficient', 'Eco-Friendly']
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
          <Thermometer size={64} className="mx-auto text-purple-600 mb-4" />
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Thermal Curtains</h1>
          <p className="text-xl text-gray-600">Energy-efficient insulation for year-round comfort</p>
        </motion.div>

        <div className="grid md:grid-cols-4 gap-6 mb-16">
          {[
            { icon: <Thermometer size={32} />, title: 'Temperature Control', desc: 'Maintain ideal room temp' },
            { icon: <Snowflake size={32} />, title: 'Keep Cool', desc: 'Block summer heat' },
            { icon: <Flame size={32} />, title: 'Stay Warm', desc: 'Retain winter warmth' },
            { icon: <DollarSign size={32} />, title: 'Save Money', desc: 'Lower energy bills' }
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

export default ThermalCurtains;
