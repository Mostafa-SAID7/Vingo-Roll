import React from 'react';
import { motion } from 'framer-motion';
import { Droplets, Wind, Sun, AlertTriangle } from 'lucide-react';

const CareInstructions = () => {
  const fabricCare = [
    {
      fabric: 'Cotton',
      washing: 'Machine wash cold, gentle cycle',
      drying: 'Tumble dry low or hang dry',
      ironing: 'Iron on medium heat if needed',
      tips: 'Wash similar colors together to prevent bleeding'
    },
    {
      fabric: 'Linen',
      washing: 'Machine wash cold or hand wash',
      drying: 'Hang dry recommended',
      ironing: 'Iron while slightly damp for best results',
      tips: 'Linen naturally wrinkles - embrace the texture!'
    },
    {
      fabric: 'Velvet',
      washing: 'Dry clean only',
      drying: 'Professional drying',
      ironing: 'Steam only, never direct iron',
      tips: 'Brush gently to maintain pile direction'
    },
    {
      fabric: 'Silk',
      washing: 'Dry clean recommended or hand wash cold',
      drying: 'Hang dry away from direct sunlight',
      ironing: 'Iron on low heat with pressing cloth',
      tips: 'Avoid water spots by testing in hidden area first'
    },
    {
      fabric: 'Polyester',
      washing: 'Machine wash warm, gentle cycle',
      drying: 'Tumble dry low',
      ironing: 'Iron on low heat if needed',
      tips: 'Easy care and wrinkle-resistant'
    },
    {
      fabric: 'Blackout Lined',
      washing: 'Machine wash cold, gentle cycle',
      drying: 'Hang dry to protect lining',
      ironing: 'Iron fabric side only, avoid lining',
      tips: 'Check care label for specific lining material'
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
          <Droplets size={64} className="mx-auto text-purple-600 mb-4" />
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Care Instructions</h1>
          <p className="text-xl text-gray-600">Keep your curtains looking beautiful for years</p>
        </motion.div>

        {/* General Care Tips */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-2xl shadow-xl p-8 mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-8">General Care Tips</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex items-start space-x-4">
              <Wind size={32} className="text-purple-600 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Regular Dusting</h3>
                <p className="text-gray-700">
                  Vacuum curtains weekly using the upholstery attachment to remove dust and prevent buildup. This extends time between washings.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <Sun size={32} className="text-purple-600 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Sun Protection</h3>
                <p className="text-gray-700">
                  Rotate curtains periodically to ensure even sun exposure. Use UV-protective spray to prevent fading on south-facing windows.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <Droplets size={32} className="text-purple-600 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Spot Cleaning</h3>
                <p className="text-gray-700">
                  Address spills immediately with a damp cloth. Blot, don't rub. Test cleaning solution on hidden area first.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <AlertTriangle size={32} className="text-purple-600 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Avoid Common Mistakes</h3>
                <p className="text-gray-700">
                  Never use bleach, avoid hot water, and don't wring or twist fabric. Always check care labels before washing.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Fabric-Specific Care */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-white rounded-2xl shadow-xl p-8 mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Fabric-Specific Care Guide</h2>
          
          <div className="space-y-6">
            {fabricCare.map((item, index) => (
              <div key={index} className="border-l-4 border-purple-600 pl-6 py-4">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{item.fabric}</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm font-semibold text-gray-700 mb-1">Washing:</p>
                    <p className="text-gray-600 mb-3">{item.washing}</p>
                    <p className="text-sm font-semibold text-gray-700 mb-1">Drying:</p>
                    <p className="text-gray-600">{item.drying}</p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-700 mb-1">Ironing:</p>
                    <p className="text-gray-600 mb-3">{item.ironing}</p>
                    <p className="text-sm font-semibold text-gray-700 mb-1">Pro Tip:</p>
                    <p className="text-purple-600">{item.tips}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Washing Instructions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="bg-white rounded-2xl shadow-xl p-8"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Step-by-Step Washing</h2>
          
          <div className="space-y-4">
            <div className="flex items-start space-x-4">
              <div className="bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">
                1
              </div>
              <p className="text-gray-700">Remove hooks, rings, and hardware before washing</p>
            </div>
            <div className="flex items-start space-x-4">
              <div className="bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">
                2
              </div>
              <p className="text-gray-700">Shake out dust and debris outdoors</p>
            </div>
            <div className="flex items-start space-x-4">
              <div className="bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">
                3
              </div>
              <p className="text-gray-700">Pre-treat any stains with gentle stain remover</p>
            </div>
            <div className="flex items-start space-x-4">
              <div className="bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">
                4
              </div>
              <p className="text-gray-700">Wash on gentle cycle with mild detergent</p>
            </div>
            <div className="flex items-start space-x-4">
              <div className="bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">
                5
              </div>
              <p className="text-gray-700">Hang to dry or tumble dry on low (check care label)</p>
            </div>
            <div className="flex items-start space-x-4">
              <div className="bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">
                6
              </div>
              <p className="text-gray-700">Iron if needed while slightly damp for easier pressing</p>
            </div>
            <div className="flex items-start space-x-4">
              <div className="bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">
                7
              </div>
              <p className="text-gray-700">Rehang promptly to prevent wrinkles</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default CareInstructions;
