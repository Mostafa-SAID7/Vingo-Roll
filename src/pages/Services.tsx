import React from 'react';
import { motion } from 'framer-motion';
import { Ruler, Wrench, Palette, Package, Phone, Truck } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Palette size={48} />,
      title: 'Custom Design',
      description: 'Work with our design experts to create the perfect window treatment for your space',
      features: ['Free consultation', 'Fabric samples', 'Style recommendations', '3D visualization'],
      link: '/custom-orders'
    },
    {
      icon: <Ruler size={48} />,
      title: 'Professional Measuring',
      description: 'Get accurate measurements from our certified specialists',
      features: ['In-home visits', 'Virtual consultations', 'Detailed reports', 'Expert advice'],
      link: '/measuring-service'
    },
    {
      icon: <Wrench size={48} />,
      title: 'Expert Installation',
      description: 'Professional installation service for perfect results every time',
      features: ['Certified installers', 'Same-day service', '1-year warranty', 'Complete setup'],
      link: '/installation'
    },
    {
      icon: <Package size={48} />,
      title: 'Bulk Orders',
      description: 'Special pricing and dedicated support for large projects',
      features: ['Volume discounts', 'Project management', 'Priority production', 'Flexible payment'],
      link: '/custom-orders'
    },
    {
      icon: <Truck size={48} />,
      title: 'Fast Delivery',
      description: 'Quick and reliable shipping to your door',
      features: ['Free shipping $99+', 'Express options', 'Order tracking', 'Safe packaging'],
      link: '/shipping-info'
    },
    {
      icon: <Phone size={48} />,
      title: 'Customer Support',
      description: '24/7 support team ready to help with any questions',
      features: ['Live chat', 'Phone support', 'Email assistance', 'Video calls'],
      link: '/contact'
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
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Our Services</h1>
          <p className="text-xl text-gray-600">Everything you need for the perfect window treatment experience</p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all"
            >
              <div className="text-purple-600 mb-4">{service.icon}</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, i) => (
                  <li key={i} className="text-gray-700 flex items-center text-sm">
                    <span className="w-2 h-2 bg-purple-600 rounded-full mr-2"></span>
                    {feature}
                  </li>
                ))}
              </ul>

              <a
                href={service.link}
                className="block text-center bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all"
              >
                Learn More
              </a>
            </motion.div>
          ))}
        </div>

        {/* Why Choose Us */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="bg-white rounded-2xl shadow-xl p-12 mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Why Choose Vingo Roll?</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold text-purple-600 mb-2">15+</div>
              <p className="text-gray-700 font-semibold mb-2">Years Experience</p>
              <p className="text-gray-600 text-sm">Trusted expertise in window treatments</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-purple-600 mb-2">100K+</div>
              <p className="text-gray-700 font-semibold mb-2">Happy Customers</p>
              <p className="text-gray-600 text-sm">Serving homes worldwide</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-purple-600 mb-2">4.9★</div>
              <p className="text-gray-700 font-semibold mb-2">Customer Rating</p>
              <p className="text-gray-600 text-sm">Based on 12,000+ reviews</p>
            </div>
          </div>
        </motion.div>

        {/* Service Guarantee */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-12 text-center text-white"
        >
          <h2 className="text-3xl font-bold mb-4">Our Service Guarantee</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            We're committed to your complete satisfaction. If you're not happy with our service, we'll make it right - guaranteed.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl transition-all"
            >
              Contact Us
            </motion.a>
            <motion.a
              href="/faq"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-purple-800 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-purple-900 transition-all"
            >
              View FAQ
            </motion.a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Services;
