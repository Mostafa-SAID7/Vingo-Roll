import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Ruler, Palette, Package, CheckCircle } from 'lucide-react';

const CustomOrders = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    roomType: '',
    width: '',
    height: '',
    fabric: '',
    color: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Custom order submitted:', formData);
  };

  const steps = [
    { icon: <Ruler size={32} />, title: 'Measure', description: 'Provide your window dimensions' },
    { icon: <Palette size={32} />, title: 'Choose', description: 'Select fabric and color' },
    { icon: <Package size={32} />, title: 'Order', description: 'Place your custom order' },
    { icon: <CheckCircle size={32} />, title: 'Receive', description: 'Get it delivered to your door' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Custom Orders</h1>
          <p className="text-xl text-gray-600">Create the perfect window treatment for your space</p>
        </motion.div>

        <div className="grid md:grid-cols-4 gap-6 mb-16">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div className="bg-white rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4 shadow-lg text-purple-600">
                {step.icon}
              </div>
              <h3 className="font-bold text-lg mb-2">{step.title}</h3>
              <p className="text-gray-600 text-sm">{step.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-white rounded-2xl shadow-xl p-8 max-w-3xl mx-auto"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Request a Custom Quote</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              />
              <select
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                value={formData.roomType}
                onChange={(e) => setFormData({ ...formData, roomType: e.target.value })}
              >
                <option value="">Select Room Type</option>
                <option value="living">Living Room</option>
                <option value="bedroom">Bedroom</option>
                <option value="kitchen">Kitchen</option>
                <option value="office">Office</option>
              </select>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Width (cm)"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                value={formData.width}
                onChange={(e) => setFormData({ ...formData, width: e.target.value })}
              />
              <input
                type="text"
                placeholder="Height (cm)"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                value={formData.height}
                onChange={(e) => setFormData({ ...formData, height: e.target.value })}
              />
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <select
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                value={formData.fabric}
                onChange={(e) => setFormData({ ...formData, fabric: e.target.value })}
              >
                <option value="">Select Fabric Type</option>
                <option value="cotton">Cotton</option>
                <option value="linen">Linen</option>
                <option value="velvet">Velvet</option>
                <option value="silk">Silk</option>
              </select>
              <input
                type="text"
                placeholder="Preferred Color"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                value={formData.color}
                onChange={(e) => setFormData({ ...formData, color: e.target.value })}
              />
            </div>
            <textarea
              placeholder="Additional Requirements or Questions"
              rows={4}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            ></textarea>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-4 rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl transition-all"
            >
              Submit Custom Order Request
            </motion.button>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default CustomOrders;
