import React from 'react';
import { motion } from 'framer-motion';
import { Ruler, Video, Calendar, CheckCircle } from 'lucide-react';

const MeasuringService = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <Ruler size={64} className="mx-auto text-purple-600 mb-4" />
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Professional Measuring Service</h1>
          <p className="text-xl text-gray-600">Get perfect measurements from our experts</p>
        </motion.div>

        {/* Service Overview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-2xl shadow-xl p-8 mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Use Our Measuring Service?</h2>
          <p className="text-gray-700 text-lg mb-8">
            Accurate measurements are crucial for perfect-fitting curtains. Our professional measuring service ensures you get exactly what you need, eliminating costly mistakes and returns.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-purple-50 rounded-xl p-6">
              <CheckCircle className="text-purple-600 mb-4" size={40} />
              <h3 className="text-xl font-bold text-gray-900 mb-2">100% Accurate</h3>
              <p className="text-gray-700">Professional measurements guaranteed to be precise</p>
            </div>
            <div className="bg-purple-50 rounded-xl p-6">
              <CheckCircle className="text-purple-600 mb-4" size={40} />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Expert Advice</h3>
              <p className="text-gray-700">Get recommendations on style and mounting options</p>
            </div>
            <div className="bg-purple-50 rounded-xl p-6">
              <CheckCircle className="text-purple-600 mb-4" size={40} />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Save Time</h3>
              <p className="text-gray-700">No need to measure yourself - we handle everything</p>
            </div>
          </div>
        </motion.div>

        {/* Service Options */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="grid md:grid-cols-2 gap-8 mb-12"
        >
          {/* In-Home Service */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold text-gray-900">In-Home Visit</h3>
              <Ruler className="text-purple-600" size={40} />
            </div>
            <p className="text-3xl font-bold text-purple-600 mb-4">$49.99</p>
            <p className="text-gray-600 mb-6">Refundable with purchase over $200</p>
            
            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <span className="text-purple-600 mr-2">✓</span>
                <span className="text-gray-700">Professional visit to your home</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-600 mr-2">✓</span>
                <span className="text-gray-700">Measure all windows in one visit</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-600 mr-2">✓</span>
                <span className="text-gray-700">Style and fabric consultation</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-600 mr-2">✓</span>
                <span className="text-gray-700">Mounting recommendations</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-600 mr-2">✓</span>
                <span className="text-gray-700">Detailed measurement report</span>
              </li>
            </ul>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-4 rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl transition-all"
            >
              Schedule In-Home Visit
            </motion.button>
          </div>

          {/* Virtual Service */}
          <div className="bg-white rounded-2xl shadow-xl p-8 border-2 border-purple-600">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold text-gray-900">Virtual Consultation</h3>
              <Video className="text-purple-600" size={40} />
            </div>
            <p className="text-3xl font-bold text-purple-600 mb-4">FREE</p>
            <p className="text-gray-600 mb-6">30-minute video call with expert</p>
            
            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <span className="text-purple-600 mr-2">✓</span>
                <span className="text-gray-700">Live video consultation</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-600 mr-2">✓</span>
                <span className="text-gray-700">Step-by-step measuring guidance</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-600 mr-2">✓</span>
                <span className="text-gray-700">Real-time expert advice</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-600 mr-2">✓</span>
                <span className="text-gray-700">Product recommendations</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-600 mr-2">✓</span>
                <span className="text-gray-700">Flexible scheduling</span>
              </li>
            </ul>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-4 rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl transition-all"
            >
              Book Free Consultation
            </motion.button>
            <div className="mt-3 text-center">
              <span className="bg-purple-100 text-purple-700 text-xs px-3 py-1 rounded-full font-semibold">
                Most Popular
              </span>
            </div>
          </div>
        </motion.div>

        {/* How It Works */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="bg-white rounded-2xl shadow-xl p-8 mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-8">How It Works</h2>
          
          <div className="space-y-6">
            <div className="flex items-start space-x-6">
              <div className="bg-purple-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl flex-shrink-0">
                1
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Book Your Appointment</h3>
                <p className="text-gray-700">
                  Choose between in-home visit or virtual consultation. Select a convenient date and time that works for you.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-6">
              <div className="bg-purple-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl flex-shrink-0">
                2
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Meet with Expert</h3>
                <p className="text-gray-700">
                  Our measuring specialist will visit your home or connect via video call to assess your windows and discuss your needs.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-6">
              <div className="bg-purple-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl flex-shrink-0">
                3
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Get Precise Measurements</h3>
                <p className="text-gray-700">
                  We'll measure all your windows accurately and provide recommendations on mounting options and styles.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-6">
              <div className="bg-purple-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl flex-shrink-0">
                4
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Receive Your Report</h3>
                <p className="text-gray-700">
                  Get a detailed measurement report via email within 24 hours, ready to use for your order.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-6">
              <div className="bg-purple-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl flex-shrink-0">
                5
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Order with Confidence</h3>
                <p className="text-gray-700">
                  Use your professional measurements to order curtains that fit perfectly the first time.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Service Areas */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="bg-white rounded-2xl shadow-xl p-8"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Service Areas</h2>
          <p className="text-gray-700 mb-6">
            In-home measuring service is available in select areas. Virtual consultations are available nationwide!
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-bold text-gray-900 mb-3">In-Home Service Available:</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Greater Toronto Area</li>
                <li>• Vancouver & Lower Mainland</li>
                <li>• Montreal & Surrounding Areas</li>
                <li>• Calgary & Area</li>
                <li>• Ottawa-Gatineau Region</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-3">Virtual Consultation:</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Available Nationwide</li>
                <li>• All Canadian Provinces</li>
                <li>• Select US States</li>
                <li>• Flexible Scheduling</li>
                <li>• Same-Day Appointments Available</li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="mt-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 text-center text-white"
        >
          <Calendar size={48} className="mx-auto mb-4" />
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl mb-8">Book your measuring service today and get perfect-fitting curtains</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-purple-600 px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl transition-all">
              Schedule In-Home Visit
            </button>
            <button className="bg-purple-800 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-purple-900 transition-all">
              Book Virtual Consultation
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default MeasuringService;
