import React from 'react';
import { motion } from 'framer-motion';
import { Award, Users, Globe, Heart } from 'lucide-react';
import Testimonials from '../components/Testimonials';
import CustomerReviews from '../components/CustomerReviews';

const About = () => {
  const values = [
    {
      icon: <Award size={48} />,
      title: 'Quality First',
      description: 'We source only the finest materials and work with skilled craftsmen'
    },
    {
      icon: <Users size={48} />,
      title: 'Customer Focus',
      description: 'Your satisfaction is our priority, from consultation to installation'
    },
    {
      icon: <Globe size={48} />,
      title: 'Global Reach',
      description: 'Serving customers worldwide with reliable shipping and support'
    },
    {
      icon: <Heart size={48} />,
      title: 'Passion',
      description: 'We love what we do and it shows in every product we create'
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
          <h1 className="text-5xl font-bold text-gray-900 mb-4">About Vingo Roll</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transforming spaces with premium window treatments since 2010
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-2xl shadow-xl p-12 mb-16"
        >
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-gray-600 mb-4">
                Vingo Roll was founded with a simple mission: to make high-quality, custom window treatments accessible to everyone. What started as a small workshop has grown into a trusted name in home décor.
              </p>
              <p className="text-gray-600 mb-4">
                We believe that the right window treatment can transform a space, adding beauty, privacy, and comfort. That's why we're committed to offering an extensive selection of fabrics, styles, and customization options.
              </p>
              <p className="text-gray-600">
                Today, we serve thousands of happy customers worldwide, helping them create spaces they love to live in.
              </p>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800"
                alt="Our Workshop"
                className="rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-lg text-center hover:shadow-xl transition-shadow"
              >
                <div className="text-purple-600 flex justify-center mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-12 text-center text-white"
        >
          <h2 className="text-3xl font-bold mb-4">Join Our Journey</h2>
          <p className="text-xl mb-8">
            Be part of our story and let us help you create beautiful spaces
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-purple-600 px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all"
          >
            Get Started Today
          </motion.button>
        </motion.div>

        {/* Customer Reviews and Testimonials */}
        <div className="mt-16">
          <Testimonials />
        </div>
        <div className="mt-16">
          <CustomerReviews />
        </div>
      </div>
    </div>
  );
};

export default About;
