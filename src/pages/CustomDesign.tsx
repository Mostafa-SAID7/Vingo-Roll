import React from 'react';
import { motion } from 'framer-motion';
import { Palette, Sparkles, Eye, CheckCircle } from 'lucide-react';

const CustomDesign = () => {
  const designProcess = [
    {
      step: 1,
      title: 'Consultation',
      description: 'Share your vision, style preferences, and room details with our design experts',
      icon: <Palette size={32} />
    },
    {
      step: 2,
      title: 'Design Proposal',
      description: 'Receive personalized recommendations with fabric samples and style options',
      icon: <Sparkles size={32} />
    },
    {
      step: 3,
      title: 'Visualization',
      description: 'See 3D renderings of how your custom curtains will look in your space',
      icon: <Eye size={32} />
    },
    {
      step: 4,
      title: 'Production',
      description: 'Your custom curtains are crafted with precision and care',
      icon: <CheckCircle size={32} />
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
          <Palette size={64} className="mx-auto text-purple-600 mb-4" />
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Custom Design Service</h1>
          <p className="text-xl text-gray-600">Create unique window treatments tailored to your style</p>
        </motion.div>

        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-2xl shadow-xl p-12 mb-16"
        >
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Your Vision, Our Expertise</h2>
              <p className="text-gray-700 mb-4">
                Our custom design service brings your window treatment dreams to life. Whether you have a specific vision or need inspiration, our expert designers work with you every step of the way.
              </p>
              <p className="text-gray-700 mb-6">
                From selecting the perfect fabric to choosing hardware and styling details, we ensure every element reflects your personal taste and complements your space beautifully.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="text-purple-600" size={24} />
                  <span className="text-gray-700">Free design consultation</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="text-purple-600" size={24} />
                  <span className="text-gray-700">Unlimited fabric samples</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="text-purple-600" size={24} />
                  <span className="text-gray-700">3D visualization included</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="text-purple-600" size={24} />
                  <span className="text-gray-700">Expert style recommendations</span>
                </div>
              </div>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800"
                alt="Custom Design"
                className="rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </motion.div>

        {/* Design Process */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Design Process</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {designProcess.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-lg text-center"
              >
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="text-purple-600">{item.icon}</div>
                </div>
                <div className="text-4xl font-bold text-purple-600 mb-2">0{item.step}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Design Options */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="bg-white rounded-2xl shadow-xl p-12 mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Customization Options</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Fabrics</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Premium cotton</li>
                <li>• Luxurious velvet</li>
                <li>• Natural linen</li>
                <li>• Elegant silk</li>
                <li>• Durable polyester</li>
                <li>• Blackout materials</li>
                <li>• Sheer fabrics</li>
                <li>• Thermal insulated</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Styles</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Rod pocket</li>
                <li>• Grommet top</li>
                <li>• Tab top</li>
                <li>• Pinch pleat</li>
                <li>• Ripple fold</li>
                <li>• Roman shades</li>
                <li>• Valances</li>
                <li>• Swags & cascades</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Details</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Custom sizing</li>
                <li>• Lining options</li>
                <li>• Trim & borders</li>
                <li>• Embroidery</li>
                <li>• Tiebacks</li>
                <li>• Hardware selection</li>
                <li>• Color matching</li>
                <li>• Pattern placement</li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Pricing */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="bg-white rounded-2xl shadow-xl p-12 mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Design Service Pricing</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="border-2 border-gray-200 rounded-xl p-6 text-center">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Basic</h3>
              <p className="text-4xl font-bold text-purple-600 mb-4">FREE</p>
              <p className="text-gray-600 mb-6">With any purchase</p>
              <ul className="space-y-2 text-sm text-gray-700 text-left mb-6">
                <li>✓ 30-min consultation</li>
                <li>✓ 3 fabric samples</li>
                <li>✓ Style recommendations</li>
                <li>✓ Email support</li>
              </ul>
            </div>

            <div className="border-2 border-purple-600 rounded-xl p-6 text-center bg-purple-50">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Premium</h3>
              <p className="text-4xl font-bold text-purple-600 mb-4">$99</p>
              <p className="text-gray-600 mb-6">Refundable with purchase</p>
              <ul className="space-y-2 text-sm text-gray-700 text-left mb-6">
                <li>✓ 1-hour consultation</li>
                <li>✓ Unlimited samples</li>
                <li>✓ 3D visualization</li>
                <li>✓ In-home visit option</li>
                <li>✓ Priority support</li>
              </ul>
              <div className="bg-purple-600 text-white text-xs px-3 py-1 rounded-full inline-block">
                Most Popular
              </div>
            </div>

            <div className="border-2 border-gray-200 rounded-xl p-6 text-center">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Luxury</h3>
              <p className="text-4xl font-bold text-purple-600 mb-4">$299</p>
              <p className="text-gray-600 mb-6">Full-service design</p>
              <ul className="space-y-2 text-sm text-gray-700 text-left mb-6">
                <li>✓ Unlimited consultations</li>
                <li>✓ Complete design package</li>
                <li>✓ Multiple 3D renderings</li>
                <li>✓ In-home styling</li>
                <li>✓ Installation included</li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-12 text-center text-white"
        >
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Custom Design?</h2>
          <p className="text-xl mb-8">Book a free consultation with our design experts today</p>
          <motion.a
            href="/custom-orders"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl transition-all"
          >
            Book Consultation
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
};

export default CustomDesign;
