import React from 'react';
import { motion } from 'framer-motion';
import { Wrench, Clock, Shield, DollarSign } from 'lucide-react';

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

        {/* Service Overview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-2xl shadow-xl p-8 mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Professional Installation?</h2>
          <p className="text-gray-700 text-lg mb-8">
            Our certified installers ensure your curtains and blinds are mounted perfectly, securely, and beautifully. Save time and avoid the hassle of DIY installation.
          </p>

          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <Clock className="text-purple-600 mx-auto mb-3" size={40} />
              <h3 className="font-bold text-gray-900 mb-2">Fast Service</h3>
              <p className="text-gray-600 text-sm">Most installations completed in 1-2 hours</p>
            </div>
            <div className="text-center">
              <Shield className="text-purple-600 mx-auto mb-3" size={40} />
              <h3 className="font-bold text-gray-900 mb-2">Guaranteed</h3>
              <p className="text-gray-600 text-sm">1-year workmanship warranty</p>
            </div>
            <div className="text-center">
              <Wrench className="text-purple-600 mx-auto mb-3" size={40} />
              <h3 className="font-bold text-gray-900 mb-2">Expert Team</h3>
              <p className="text-gray-600 text-sm">Certified and experienced installers</p>
            </div>
            <div className="text-center">
              <DollarSign className="text-purple-600 mx-auto mb-3" size={40} />
              <h3 className="font-bold text-gray-900 mb-2">Fair Pricing</h3>
              <p className="text-gray-600 text-sm">Transparent, competitive rates</p>
            </div>
          </div>
        </motion.div>

        {/* Pricing */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-white rounded-2xl shadow-xl p-8 mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Installation Pricing</h2>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-purple-50">
                  <th className="px-6 py-3 text-left text-gray-900 font-semibold">Service</th>
                  <th className="px-6 py-3 text-left text-gray-900 font-semibold">Price</th>
                  <th className="px-6 py-3 text-left text-gray-900 font-semibold">Details</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 text-gray-700">Standard Curtain Rod</td>
                  <td className="px-6 py-4 text-purple-600 font-bold">$49</td>
                  <td className="px-6 py-4 text-gray-600">Per window, includes hardware mounting</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-gray-700">Roller Blinds</td>
                  <td className="px-6 py-4 text-purple-600 font-bold">$39</td>
                  <td className="px-6 py-4 text-gray-600">Per blind, inside or outside mount</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-gray-700">Roman Shades</td>
                  <td className="px-6 py-4 text-purple-600 font-bold">$59</td>
                  <td className="px-6 py-4 text-gray-600">Per shade, includes mounting brackets</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-gray-700">Motorized Systems</td>
                  <td className="px-6 py-4 text-purple-600 font-bold">$99</td>
                  <td className="px-6 py-4 text-gray-600">Includes motor setup and programming</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-6 bg-green-50 border border-green-200 rounded-lg p-4">
            <p className="text-green-800 font-semibold">
              Free installation on orders over $500!
            </p>
          </div>
        </motion.div>

        {/* What's Included */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="bg-white rounded-2xl shadow-xl p-8 mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-8">What's Included</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Our Service Includes:</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">✓</span>
                  <span className="text-gray-700">Professional assessment of mounting location</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">✓</span>
                  <span className="text-gray-700">All necessary hardware and mounting brackets</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">✓</span>
                  <span className="text-gray-700">Secure mounting to studs or appropriate anchors</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">✓</span>
                  <span className="text-gray-700">Level and properly aligned installation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">✓</span>
                  <span className="text-gray-700">Hanging and adjustment of curtains/blinds</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">✓</span>
                  <span className="text-gray-700">Complete cleanup of work area</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">✓</span>
                  <span className="text-gray-700">Operation demonstration and care instructions</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">You Provide:</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-gray-400 mr-2">•</span>
                  <span className="text-gray-700">Access to installation areas</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-400 mr-2">•</span>
                  <span className="text-gray-700">Clear workspace around windows</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-400 mr-2">•</span>
                  <span className="text-gray-700">Electrical outlet access (for motorized)</span>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Booking Process */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="bg-white rounded-2xl shadow-xl p-8"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-8">How to Book</h2>
          
          <div className="space-y-6">
            {[
              { step: 1, title: 'Place Your Order', desc: 'Add installation service when checking out' },
              { step: 2, title: 'Schedule Appointment', desc: 'We\'ll contact you within 24 hours to schedule' },
              { step: 3, title: 'Confirmation', desc: 'Receive appointment confirmation via email/SMS' },
              { step: 4, title: 'Installation Day', desc: 'Our team arrives and completes installation' }
            ].map((item) => (
              <div key={item.step} className="flex items-start space-x-4">
                <div className="bg-purple-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0">
                  {item.step}
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
                  <p className="text-gray-700">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="mt-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 text-center text-white"
        >
          <h2 className="text-3xl font-bold mb-4">Ready for Professional Installation?</h2>
          <p className="text-xl mb-8">Add installation service to your order today</p>
          <button className="bg-white text-purple-600 px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl transition-all">
            Get Started
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default Installation;
