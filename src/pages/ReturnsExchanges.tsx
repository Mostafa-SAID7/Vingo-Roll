import React from 'react';
import { motion } from 'framer-motion';
import { RotateCcw, Package, CheckCircle, XCircle } from 'lucide-react';

const ReturnsExchanges = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <RotateCcw size={64} className="mx-auto text-purple-600 mb-4" />
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Returns & Exchanges</h1>
          <p className="text-xl text-gray-600">Your satisfaction is our priority</p>
        </motion.div>

        {/* Return Policy */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-2xl shadow-xl p-8 mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-6">30-Day Return Policy</h2>
          <p className="text-gray-700 text-lg mb-6">
            We want you to love your purchase! If you're not completely satisfied, you can return most items within 30 days of delivery for a full refund.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <CheckCircle className="text-green-600 mr-2" size={24} />
                Eligible for Return
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span>Standard curtains and blinds</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span>Accessories and hardware</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span>Items in original packaging</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span>Unused and unwashed items</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span>Items with tags attached</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <XCircle className="text-red-600 mr-2" size={24} />
                Not Eligible for Return
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">✗</span>
                  <span>Custom-made or personalized items</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">✗</span>
                  <span>Cut-to-size products</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">✗</span>
                  <span>Final sale or clearance items</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">✗</span>
                  <span>Items damaged by customer</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">✗</span>
                  <span>Items without proof of purchase</span>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* How to Return */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-white rounded-2xl shadow-xl p-8 mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-8">How to Return an Item</h2>
          
          <div className="space-y-6">
            <div className="flex items-start space-x-6">
              <div className="bg-purple-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl flex-shrink-0">
                1
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Contact Us</h3>
                <p className="text-gray-700">
                  Email us at returns@vingoroll.com or call 1-800-VINGO-ROLL with your order number. We'll provide you with a return authorization number (RMA).
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-6">
              <div className="bg-purple-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl flex-shrink-0">
                2
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Pack Your Item</h3>
                <p className="text-gray-700">
                  Carefully pack the item in its original packaging if possible. Include all accessories, tags, and documentation. Write the RMA number clearly on the outside of the package.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-6">
              <div className="bg-purple-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl flex-shrink-0">
                3
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Ship It Back</h3>
                <p className="text-gray-700">
                  Use the prepaid return label we provide (for defective items) or ship at your own cost. We recommend using a trackable shipping method and purchasing shipping insurance.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-6">
              <div className="bg-purple-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl flex-shrink-0">
                4
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Get Your Refund</h3>
                <p className="text-gray-700">
                  Once we receive and inspect your return, we'll process your refund within 5-10 business days. Refunds are issued to the original payment method.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Exchanges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="bg-white rounded-2xl shadow-xl p-8 mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Exchanges</h2>
          <p className="text-gray-700 mb-6">
            Want to exchange for a different size, color, or style? We make it easy!
          </p>

          <div className="bg-purple-50 rounded-lg p-6 mb-6">
            <h3 className="text-xl font-bold text-gray-900 mb-3">Exchange Process</h3>
            <ol className="space-y-2 text-gray-700">
              <li>1. Contact us to initiate an exchange</li>
              <li>2. Return your original item following the return process</li>
              <li>3. Place a new order for the replacement item</li>
              <li>4. We'll refund the original purchase once received</li>
            </ol>
          </div>

          <p className="text-gray-600 text-sm">
            Note: For faster service, you can place a new order immediately and return the original item separately. This ensures you receive your new item without delay.
          </p>
        </motion.div>

        {/* Damaged or Defective */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="bg-white rounded-2xl shadow-xl p-8"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Damaged or Defective Items</h2>
          <p className="text-gray-700 mb-6">
            If you receive a damaged or defective item, we'll make it right immediately!
          </p>

          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <Package className="text-purple-600 flex-shrink-0" size={24} />
              <div>
                <h3 className="font-bold text-gray-900 mb-1">Report Within 48 Hours</h3>
                <p className="text-gray-700">
                  Contact us within 48 hours of delivery with photos of the damage or defect.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <CheckCircle className="text-purple-600 flex-shrink-0" size={24} />
              <div>
                <h3 className="font-bold text-gray-900 mb-1">Free Return Shipping</h3>
                <p className="text-gray-700">
                  We'll provide a prepaid return label at no cost to you.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <RotateCcw className="text-purple-600 flex-shrink-0" size={24} />
              <div>
                <h3 className="font-bold text-gray-900 mb-1">Replacement or Refund</h3>
                <p className="text-gray-700">
                  Choose a replacement item or receive a full refund, including original shipping costs.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="mt-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 text-center text-white"
        >
          <h2 className="text-2xl font-bold mb-4">Questions About Returns?</h2>
          <p className="text-lg mb-6">Our customer service team is here to help</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-purple-600 px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all">
              Email Us
            </button>
            <button className="bg-white text-purple-600 px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all">
              Call 1-800-VINGO-ROLL
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ReturnsExchanges;
