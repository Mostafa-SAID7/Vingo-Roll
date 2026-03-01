import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Inspiration = () => {
  const galleries = [
    {
      title: 'Modern Living Rooms',
      images: [
        { url: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800', productId: 1 },
        { url: 'https://images.unsplash.com/photo-1616137466211-f939a420be84?w=800', productId: 2 },
        { url: 'https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?w=800', productId: 3 }
      ]
    },
    {
      title: 'Elegant Bedrooms',
      images: [
        { url: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=800', productId: 4 },
        { url: 'https://images.unsplash.com/photo-1616137148413-c0ea7a0ce7e3?w=800', productId: 5 },
        { url: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800', productId: 6 }
      ]
    },
    {
      title: 'Cozy Dining Spaces',
      images: [
        { url: 'https://images.unsplash.com/photo-1616137466211-f939a420be84?w=800', productId: 7 },
        { url: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=800', productId: 8 },
        { url: 'https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?w=800', productId: 9 }
      ]
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
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Design Inspiration</h1>
          <p className="text-xl text-gray-600">Discover beautiful window treatment ideas for your home</p>
        </motion.div>

        <div className="space-y-16">
          {galleries.map((gallery, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-8">{gallery.title}</h2>
              <div className="grid md:grid-cols-3 gap-6">
                {gallery.images.map((image, i) => (
                  <Link key={i} to={`/product/${image.productId}`}>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="relative overflow-hidden rounded-2xl shadow-lg aspect-square cursor-pointer"
                    >
                      <img
                        src={image.url}
                        alt={`${gallery.title} ${i + 1}`}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 hover:opacity-100 transition-opacity flex items-end p-6">
                        <div className="text-white">
                          <p className="font-semibold text-lg mb-1">View Details</p>
                          <p className="text-sm text-white/80">Click to see product</p>
                        </div>
                      </div>
                    </motion.div>
                  </Link>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-12 text-center text-white"
        >
          <h2 className="text-3xl font-bold mb-4">Need Help Choosing?</h2>
          <p className="text-xl mb-8">Our design experts are here to help you create the perfect look</p>
          <Link to="/custom-design">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-purple-600 px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all"
            >
              Book a Free Consultation
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default Inspiration;
