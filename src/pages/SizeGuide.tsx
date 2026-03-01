import React from 'react';
import { motion } from 'framer-motion';
import { Ruler, Video, Phone, AlertCircle } from 'lucide-react';

const SizeGuide = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <Ruler size={64} className="mx-auto text-purple-600 mb-4" />
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Size Guide</h1>
          <p className="text-xl text-gray-600">How to measure your windows for the perfect fit</p>
        </motion.div>

        {/* Measuring Steps */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-2xl shadow-xl p-8 mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Step-by-Step Measuring Guide</h2>
          
          <div className="space-y-8">
            <div className="flex items-start space-x-6">
              <div className="bg-purple-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl flex-shrink-0">
                1
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Measure the Width</h3>
                <p className="text-gray-700 mb-3">
                  Measure the width of your window from the outside edge of the frame on one side to the outside edge on the other side. For a fuller look, add 8-12 inches on each side.
                </p>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-700">
                    <strong>Tip:</strong> For inside mount, measure the exact width of the window opening. For outside mount, add extra width for better coverage.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex items-start space-x-6">
              <div className="bg-purple-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl flex-shrink-0">
                2
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Measure the Height</h3>
                <p className="text-gray-700 mb-3">
                  Measure from the top of the window frame to where you want the curtains to end. Common options are to the windowsill, below the sill, or to the floor.
                </p>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-700">
                    <strong>Tip:</strong> For a dramatic look, hang curtains 4-6 inches above the window frame and let them puddle slightly on the floor.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex items-start space-x-6">
              <div className="bg-purple-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl flex-shrink-0">
                3
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Record Your Measurements</h3>
                <p className="text-gray-700 mb-3">
                  Write down your measurements in inches or centimeters. Always measure twice to ensure accuracy. Round up to the nearest half inch.
                </p>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-700">
                    <strong>Tip:</strong> Take photos of your windows and measurements for reference when ordering.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Standard Sizes */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-white rounded-2xl shadow-xl p-8 mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Standard Curtain Sizes</h2>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-purple-50">
                  <th className="px-6 py-3 text-left text-gray-900 font-semibold">Window Type</th>
                  <th className="px-6 py-3 text-left text-gray-900 font-semibold">Width</th>
                  <th className="px-6 py-3 text-left text-gray-900 font-semibold">Height</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 text-gray-700">Small Window</td>
                  <td className="px-6 py-4 text-gray-700">42" - 54"</td>
                  <td className="px-6 py-4 text-gray-700">63" - 84"</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-gray-700">Standard Window</td>
                  <td className="px-6 py-4 text-gray-700">54" - 72"</td>
                  <td className="px-6 py-4 text-gray-700">84" - 96"</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-gray-700">Large Window</td>
                  <td className="px-6 py-4 text-gray-700">72" - 108"</td>
                  <td className="px-6 py-4 text-gray-700">96" - 108"</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-gray-700">Patio Door</td>
                  <td className="px-6 py-4 text-gray-700">100" - 120"</td>
                  <td className="px-6 py-4 text-gray-700">84" - 96"</td>
                </tr>
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* Help Options */}
        <div className="grid md:grid-cols-3 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="bg-white rounded-2xl shadow-lg p-6 text-center"
          >
            <Video size={48} className="mx-auto text-purple-600 mb-4" />
            <h3 className="text-xl font-bold text-gray-900 mb-2">Video Tutorial</h3>
            <p className="text-gray-600 mb-4">Watch our step-by-step measuring guide</p>
            <button className="text-purple-600 font-semibold hover:underline">Watch Now</button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="bg-white rounded-2xl shadow-lg p-6 text-center"
          >
            <Phone size={48} className="mx-auto text-purple-600 mb-4" />
            <h3 className="text-xl font-bold text-gray-900 mb-2">Free Consultation</h3>
            <p className="text-gray-600 mb-4">Talk to our experts for personalized help</p>
            <button className="text-purple-600 font-semibold hover:underline">Book Now</button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="bg-white rounded-2xl shadow-lg p-6 text-center"
          >
            <AlertCircle size={48} className="mx-auto text-purple-600 mb-4" />
            <h3 className="text-xl font-bold text-gray-900 mb-2">Need Help?</h3>
            <p className="text-gray-600 mb-4">Contact our support team anytime</p>
            <button className="text-purple-600 font-semibold hover:underline">Contact Us</button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default SizeGuide;
