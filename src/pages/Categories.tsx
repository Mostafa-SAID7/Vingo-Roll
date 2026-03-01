import React from 'react';
import { motion } from 'framer-motion';
import { Blinds, Maximize, Sparkles, Home } from 'lucide-react';

const Categories = () => {
  const categories = [
    {
      icon: <Home size={48} />,
      title: 'Curtains',
      description: 'Elegant curtains for every room',
      items: ['Blackout Curtains', 'Sheer Curtains', 'Thermal Curtains', 'Velvet Curtains']
    },
    {
      icon: <Blinds size={48} />,
      title: 'Blinds',
      description: 'Modern blinds for light control',
      items: ['Roller Blinds', 'Venetian Blinds', 'Vertical Blinds', 'Roman Blinds']
    },
    {
      icon: <Maximize size={48} />,
      title: 'Shutters',
      description: 'Premium shutters for style',
      items: ['Plantation Shutters', 'Solid Shutters', 'Café Style', 'Full Height']
    },
    {
      icon: <Sparkles size={48} />,
      title: 'Accessories',
      description: 'Complete your window treatment',
      items: ['Curtain Rods', 'Tiebacks', 'Valances', 'Hardware']
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
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Our Categories</h1>
          <p className="text-xl text-gray-600">Explore our wide range of window treatments</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all"
            >
              <div className="text-purple-600 mb-4">{category.icon}</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">{category.title}</h3>
              <p className="text-gray-600 mb-6">{category.description}</p>
              <ul className="space-y-2">
                {category.items.map((item, i) => (
                  <li key={i} className="text-gray-700 flex items-center">
                    <span className="w-2 h-2 bg-purple-600 rounded-full mr-2"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;
