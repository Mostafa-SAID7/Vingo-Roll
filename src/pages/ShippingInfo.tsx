import React from 'react';
import { motion } from 'framer-motion';
import { Truck, MapPin, Clock, DollarSign, Globe, Package } from 'lucide-react';

const ShippingInfo = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <Truck size={64} className="mx-auto text-purple-600 mb-4" />
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Shipping Information</h1>
          <p className="text-xl text-gray-600">Fast, reliable delivery to your door</p>
        </motion.div>

        {/* Shipping Options */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-2xl shadow-xl p-8 mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Shipping Options</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="border-2 border-gray-200 rounded-xl p-6 hover:border-purple-600 transition-colors">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-gray-900">Standard</h3>
                <Clock className="text-purple-600" size={32} />
              </div>
              <p className="text-3xl font-bold text-purple-600 mb-2">$9.99</p>
              <p className="text-gray-600 mb-4">5-7 business days</p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>✓ Tracking included</li>
                <li>✓ Signature not required</li>
                <li>✓ Free on orders $99+</li>
              </ul>
            </div>

            <div className="border-2 border-purple-600 rounded-xl p-6 bg-purple-50">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-gray-900">Express</h3>
                <Truck className="text-purple-600" size={32} />
              </div>
              <p className="text-3xl font-bold text-purple-600 mb-2">$19.99</p>
              <p className="text-gray-600 mb-4">2-3 business days</p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>✓ Priority handling</li>
                <li>✓ Real-time tracking</li>
                <li>✓ Signature required</li>
              </ul>
              <div className="mt-4 bg-purple-600 text-white text-xs px-3 py-1 rounded-full inline-block">
                Most Popular
              </div>
            </div>

            <div className="border-2 border-gray-200 rounded-xl p-6 hover:border-purple-600 transition-colors">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-gray-900">Overnight</h3>
                <Package className="text-purple-600" size={32} />
              </div>
              <p className="text-3xl font-bold text-purple-600 mb-2">$39.99</p>
              <p className="text-gray-600 mb-4">Next business day</p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>✓ Fastest delivery</li>
                <li>✓ Premium tracking</li>
                <li>✓ Signature required</li>
              </ul>
            </div>
          </div>

          <div className="mt-8 bg-green-50 border border-green-200 rounded-lg p-4">
            <p className="text-green-800 font-semibold flex items-center">
              <DollarSign size={20} className="mr-2" />
              Free Standard Shipping on all orders over $99!
            </p>
          </div>
        </motion.div>

        {/* Processing Time */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-white rounded-2xl shadow-xl p-8 mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Processing & Delivery Time</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Order Processing</h3>
              <p className="text-gray-700 mb-4">
                Orders are typically processed within 1-2 business days. You'll receive a confirmation email once your order ships with tracking information.
              </p>
              <div className="bg-purple-50 rounded-lg p-4">
                <p className="text-sm text-gray-700">
                  <strong>Note:</strong> Custom orders may require 5-10 business days for production before shipping.
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Delivery Timeline</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <span className="text-gray-700">Order Placed</span>
                  <span className="font-semibold text-gray-900">Day 0</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <span className="text-gray-700">Processing</span>
                  <span className="font-semibold text-gray-900">1-2 Days</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <span className="text-gray-700">In Transit</span>
                  <span className="font-semibold text-gray-900">2-7 Days</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-purple-50 rounded-lg border-2 border-purple-600">
                  <span className="text-gray-900 font-semibold">Delivered</span>
                  <span className="font-bold text-purple-600">3-9 Days Total</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* International Shipping */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="bg-white rounded-2xl shadow-xl p-8 mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
            <Globe className="mr-3 text-purple-600" size={36} />
            International Shipping
          </h2>
          
          <p className="text-gray-700 mb-6">
            We ship to over 50 countries worldwide! International shipping rates and delivery times vary by destination.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-purple-50 rounded-lg p-6">
              <h3 className="font-bold text-gray-900 mb-3">Shipping Rates</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Canada: Starting at $15</li>
                <li>• USA: Starting at $20</li>
                <li>• Europe: Starting at $35</li>
                <li>• Asia: Starting at $40</li>
                <li>• Australia: Starting at $45</li>
              </ul>
            </div>

            <div className="bg-purple-50 rounded-lg p-6">
              <h3 className="font-bold text-gray-900 mb-3">Delivery Time</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Canada: 7-10 business days</li>
                <li>• USA: 10-14 business days</li>
                <li>• Europe: 12-18 business days</li>
                <li>• Asia: 15-21 business days</li>
                <li>• Australia: 15-21 business days</li>
              </ul>
            </div>
          </div>

          <div className="mt-6 bg-yellow-50 border border-yellow-200 rounded-lg p-4">
            <p className="text-yellow-800 text-sm">
              <strong>Important:</strong> International orders may be subject to customs duties and taxes. These fees are the responsibility of the recipient and are not included in our shipping costs.
            </p>
          </div>
        </motion.div>

        {/* Tracking */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="bg-white rounded-2xl shadow-xl p-8 mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Order Tracking</h2>
          
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-gray-700 mb-4">
                Track your order every step of the way! Once your order ships, you'll receive:
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">✓</span>
                  <span>Shipping confirmation email with tracking number</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">✓</span>
                  <span>Real-time tracking updates</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">✓</span>
                  <span>Estimated delivery date</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">✓</span>
                  <span>Delivery confirmation</span>
                </li>
              </ul>
            </div>
            <div className="bg-purple-50 rounded-lg p-6">
              <h3 className="font-bold text-gray-900 mb-4">Track Your Order</h3>
              <input
                type="text"
                placeholder="Enter tracking number"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg mb-3 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
              <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all">
                Track Package
              </button>
            </div>
          </div>
        </motion.div>

        {/* Shipping Restrictions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="bg-white rounded-2xl shadow-xl p-8"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Shipping Restrictions</h2>
          
          <div className="space-y-4 text-gray-700">
            <p>
              <strong>PO Boxes:</strong> We can ship to PO Boxes for small items only. Large curtains and blinds require a physical address.
            </p>
            <p>
              <strong>APO/FPO Addresses:</strong> We ship to military addresses using USPS. Delivery times may vary.
            </p>
            <p>
              <strong>Remote Areas:</strong> Some remote locations may incur additional shipping fees or extended delivery times.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ShippingInfo;
