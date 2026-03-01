import React from 'react';
import { motion } from 'framer-motion';
import { Wrench, Clock, Shield, Star } from 'lucide-react';

const Installation = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <Wrench size={64} className="mx-auto text-purple-600 mb-4" />
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Professional Installation</h1>
          <p className="text-xl text-gray-600">Expert installation for perfect results</p>
        </motion.div>

        <div className="grid md:grid-cols-4 gap-6 mb-16">
          {[
            { icon: <Star size={32} />, title: 'Expert Installers', desc: 'Certified professionals' },
            { icon: <Clock size={32} />, title: 'Quick Service', desc: 'Same-day available' },
            { icon: <Shield size={32} />, title: 'Satisfaction Guaranteed', desc: '100% quality promise' },
            { icon: <Wrench size={32} />, title: 'All Hardware Included', desc: 'Complete installation kit' }
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

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-white rounded-2xl shadow-xl p-12 mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Installation Services</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="border-2 border-purple-200 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Standard Installation</h3>
              <p className="text-3xl font-bold text-purple-600 mb-4">$99</p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">✓</span>
                  Up to 3 windows
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">✓</span>
                  Hardware installation
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">✓</span>
                  Curtain hanging
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">✓</span>
                  Final adjustments
                </li>
              </ul>
              <button className="w-full mt-6 bg-purple-600 text-white py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors">
                Book Now
              </button>
            </div>

            <div className="border-2 border-purple-600 rounded-xl p-8 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-purple-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                Most Popular
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Premium Installation</h3>
              <p className="text-3xl font-bold text-purple-600 mb-4">$199</p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">✓</span>
                  Up to 6 windows
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">✓</span>
                  Premium hardware installation
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">✓</span>
                  Curtain hanging & styling
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">✓</span>
                  Old curtain removal
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">✓</span>
                  Priority scheduling
                </li>
              </ul>
              <button className="w-full mt-6 bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all">
                Book Now
              </button>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="bg-white rounded-2xl shadow-xl p-12 mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-8">What to Expect</h2>
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="bg-purple-100 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                <span className="text-purple-600 font-bold">1</span>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2">Schedule Your Appointment</h3>
                <p className="text-gray-600">Choose a convenient time that works for you. We offer flexible scheduling including evenings and weekends.</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="bg-purple-100 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                <span className="text-purple-600 font-bold">2</span>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2">Professional Arrives</h3>
                <p className="text-gray-600">Our certified installer will arrive on time with all necessary tools and hardware.</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="bg-purple-100 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                <span className="text-purple-600 font-bold">3</span>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2">Expert Installation</h3>
                <p className="text-gray-600">We'll install your curtains with precision, ensuring perfect alignment and functionality.</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="bg-purple-100 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                <span className="text-purple-600 font-bold">4</span>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2">Final Walkthrough</h3>
                <p className="text-gray-600">We'll review the installation with you and make any final adjustments to ensure your complete satisfaction.</p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-12 text-center text-white"
        >
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl mb-8">Book your professional installation today</p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-purple-600 px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all"
          >
            Schedule Installation
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default Installation;
