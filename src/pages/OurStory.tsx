import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Heart, Users, TrendingUp, Award, Globe } from 'lucide-react';

const OurStory = () => {
  const milestones = [
    {
      year: '2010',
      title: 'The Beginning',
      description: 'Founded in a small workshop with a passion for quality window treatments',
      icon: <Heart size={32} />
    },
    {
      year: '2013',
      title: 'First Expansion',
      description: 'Opened our first showroom and expanded our product line',
      icon: <TrendingUp size={32} />
    },
    {
      year: '2016',
      title: 'Going Digital',
      description: 'Launched our online store, reaching customers nationwide',
      icon: <Globe size={32} />
    },
    {
      year: '2019',
      title: 'Award Recognition',
      description: 'Received "Best Home Décor Brand" award',
      icon: <Award size={32} />
    },
    {
      year: '2022',
      title: 'International Growth',
      description: 'Expanded to serve customers in 50+ countries',
      icon: <Globe size={32} />
    },
    {
      year: '2024',
      title: 'Community of 100K+',
      description: 'Reached over 100,000 satisfied customers worldwide',
      icon: <Users size={32} />
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
          <BookOpen size={64} className="mx-auto text-purple-600 mb-4" />
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Our Story</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From a small workshop to a global brand - the journey of Vingo Roll
          </p>
        </motion.div>

        {/* The Beginning */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-2xl shadow-xl p-12 mb-16"
        >
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">How It All Started</h2>
              <p className="text-gray-700 mb-4">
                In 2010, our founder, Maria Rodriguez, had a simple vision: to create beautiful, high-quality window treatments that everyone could afford. What started as a small workshop in Toronto has grown into a beloved brand serving customers worldwide.
              </p>
              <p className="text-gray-700 mb-4">
                Maria's background in textile design and her passion for home décor drove her to experiment with different fabrics, patterns, and styles. She believed that curtains weren't just functional—they were an expression of personal style and a way to transform any space.
              </p>
              <p className="text-gray-700">
                With just a sewing machine, a handful of fabric samples, and an unwavering commitment to quality, Vingo Roll was born.
              </p>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800"
                alt="Our Workshop"
                className="rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </motion.div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Journey</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="text-purple-600 mb-4">{milestone.icon}</div>
                <div className="text-4xl font-bold text-purple-600 mb-2">{milestone.year}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{milestone.title}</h3>
                <p className="text-gray-600">{milestone.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Our Values */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="bg-white rounded-2xl shadow-xl p-12 mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">What Drives Us</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="text-purple-600" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Passion for Quality</h3>
              <p className="text-gray-600">
                Every product is crafted with meticulous attention to detail and the finest materials.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="text-purple-600" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Customer First</h3>
              <p className="text-gray-600">
                Your satisfaction is our priority. We're here to help you create the perfect space.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="text-purple-600" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Sustainable Future</h3>
              <p className="text-gray-600">
                We're committed to eco-friendly practices and sustainable sourcing.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Today */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-12 text-center text-white"
        >
          <h2 className="text-3xl font-bold mb-4">Today & Tomorrow</h2>
          <p className="text-xl mb-6 max-w-3xl mx-auto">
            Today, Vingo Roll serves over 100,000 customers in 50+ countries. But our mission remains the same: to help you transform your space with beautiful, quality window treatments.
          </p>
          <p className="text-lg mb-8">
            Thank you for being part of our story. Here's to many more chapters together.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-purple-600 px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all"
          >
            Shop Our Collection
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default OurStory;
