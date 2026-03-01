import React from 'react';
import { motion } from 'framer-motion';
import TransactionJourney from '../components/TransactionJourney';
import CurrencyDashboard from '../components/CurrencyDashboard';
import FeeCalculator from '../components/FeeCalculator';
import SecuritySection from '../components/SecuritySection';

const Services = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Our Services</h1>
          <p className="text-xl text-gray-600">Everything you need for the perfect window treatment experience</p>
        </motion.div>

        <TransactionJourney />
        <div className="mt-16">
          <CurrencyDashboard />
        </div>
        <div className="mt-16">
          <FeeCalculator />
        </div>
        <div className="mt-16">
          <SecuritySection />
        </div>
      </div>
    </div>
  );
};

export default Services;
