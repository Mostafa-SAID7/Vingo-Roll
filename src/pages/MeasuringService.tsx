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
          <p className="text-xl text-gray-600">Get perfect measurements for your custom curtains</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {[
            { icon: <Video size={32} />, title: 'Virtual Consultation', desc: 'Free video call with our experts' },
            { icon: <Calendar size={32} />, title: 'In-Home Visit', desc: 'Professional on-site measuring' },
            { icon: <CheckCircle size={32} />, title: 'Accuracy Guaranteed', desc: 'Perfect fit every time' }
          ].map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-lg text-center"
            >
              <div className="text-purple-600 flex justify-center mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-white rounded-2xl shadow-xl p-12 mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-8">How to Measure Your Windows</h2>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Step 1: Choose Your Mount Type</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="border-2 border-purple-200 rounded-lg p-6">
                  <h4 className="font-bold text-gray-900 mb-2">Inside Mount</h4>
                  <p className="text-gray-600">Curtains hang inside the window frame for a clean, tailored look.</p>
                </div>
                <div className="border-2 border-purple-200 rounded-lg p-6">
                  <h4 className="font-bold text-gray-900 mb-2">Outside Mount</h4>
                  <p className="text-gray-600">Curtains hang outside the window frame to maximize light blocking.</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Step 2: Measure Width</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>Measure the width of your window at three points: top, middle, and bottom</li>
                <li>Use the narrowest measurement for inside mount</li>
                <li>Add 4-8 inches on each side for outside mount</li>
                <li>Round down to the nearest 1/8 inch</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Step 3: Measure Height</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>Measure from the top of the window frame to the sill</li>
                <li>For floor-length curtains, measure to 1/2 inch above the floor</li>
                <li>For puddle effect, add 2-6 inches to floor measurement</li>
                <li>Measure at three points: left, center, and right</li>
              </ul>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-12 text-center text-white"
        >
          <h2 className="text-3xl font-bold mb-4">Need Help Measuring?</h2>
          <p className="text-xl mb-8">Book a free consultation with our measuring experts</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-purple-600 px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all"
            >
              Schedule Virtual Call
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-purple-600 transition-all"
            >
              Book In-Home Visit
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default MeasuringService;
