import React from 'react';
import { motion } from 'framer-motion';
import { FileText, CheckCircle, AlertCircle, Scale } from 'lucide-react';

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white py-20">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <FileText size={64} className="mx-auto text-purple-600 mb-4" />
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Terms of Service</h1>
          <p className="text-xl text-gray-600">Last updated: March 1, 2026</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-2xl shadow-xl p-8 space-y-8"
        >
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <CheckCircle size={24} className="mr-2 text-purple-600" />
              Acceptance of Terms
            </h2>
            <p className="text-gray-700">
              By accessing and using Vingo Roll's website and services, you accept and agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Use of Services</h2>
            <p className="text-gray-700 mb-4">
              You agree to use our services only for lawful purposes and in accordance with these Terms. You agree not to:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li>Violate any applicable laws or regulations</li>
              <li>Infringe on intellectual property rights</li>
              <li>Transmit harmful or malicious code</li>
              <li>Attempt to gain unauthorized access to our systems</li>
              <li>Use our services for fraudulent purposes</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Orders and Payments</h2>
            <p className="text-gray-700 mb-4">
              When you place an order with us:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li>All orders are subject to acceptance and availability</li>
              <li>Prices are subject to change without notice</li>
              <li>Payment must be received before order processing</li>
              <li>We reserve the right to refuse or cancel any order</li>
              <li>Custom orders may have different terms and conditions</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <AlertCircle size={24} className="mr-2 text-purple-600" />
              Returns and Refunds
            </h2>
            <p className="text-gray-700 mb-4">
              Our return policy includes:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li>30-day return window for most products</li>
              <li>Items must be unused and in original packaging</li>
              <li>Custom-made items may not be returnable</li>
              <li>Refunds processed within 5-10 business days</li>
              <li>Return shipping costs may apply</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Intellectual Property</h2>
            <p className="text-gray-700">
              All content on this website, including text, graphics, logos, images, and software, is the property of Vingo Roll and protected by copyright and trademark laws. You may not reproduce, distribute, or create derivative works without our express written permission.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <Scale size={24} className="mr-2 text-purple-600" />
              Limitation of Liability
            </h2>
            <p className="text-gray-700">
              To the fullest extent permitted by law, Vingo Roll shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of our services or products.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Changes to Terms</h2>
            <p className="text-gray-700">
              We reserve the right to modify these Terms of Service at any time. Changes will be effective immediately upon posting. Your continued use of our services after changes constitutes acceptance of the modified terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
            <p className="text-gray-700">
              If you have any questions about these Terms of Service, please contact us at:
            </p>
            <p className="text-purple-600 font-semibold mt-2">legal@vingoroll.com</p>
          </section>
        </motion.div>
      </div>
    </div>
  );
};

export default TermsOfService;
