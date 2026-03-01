import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Star, ThumbsUp, MessageCircle, Filter } from 'lucide-react';

const Reviews = () => {
  const [filter, setFilter] = useState('all');

  const reviews = [
    {
      id: 1,
      name: 'Sarah Johnson',
      location: 'Toronto, Canada',
      rating: 5,
      date: 'February 15, 2024',
      product: 'Royal Velvet Blackout',
      review: 'Absolutely stunning curtains! The quality exceeded my expectations and they transformed my living room completely. The custom sizing was perfect and the installation was a breeze.',
      helpful: 45,
      verified: true
    },
    {
      id: 2,
      name: 'Michael Chen',
      location: 'Vancouver, Canada',
      rating: 5,
      date: 'February 10, 2024',
      product: 'Thermal Insulated Pro',
      review: 'Professional service from start to finish. The design consultation was incredibly helpful and the installation was flawless. These curtains have made a noticeable difference in our energy bills!',
      helpful: 38,
      verified: true
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      location: 'Montreal, Canada',
      rating: 5,
      date: 'February 5, 2024',
      product: 'Sheer Elegance White',
      review: 'The sheer curtains are exactly what I was looking for. They let in just the right amount of light while maintaining privacy. Beautiful quality and the fabric feels luxurious.',
      helpful: 32,
      verified: true
    },
    {
      id: 4,
      name: 'David Thompson',
      location: 'Calgary, Canada',
      rating: 5,
      date: 'January 28, 2024',
      product: 'Royal Velvet Blackout',
      review: 'Fast shipping, excellent packaging, and the curtains look amazing in our bedroom. The blackout feature works perfectly for better sleep. Highly recommend!',
      helpful: 29,
      verified: true
    },
    {
      id: 5,
      name: 'Lisa Park',
      location: 'Ottawa, Canada',
      rating: 5,
      date: 'January 20, 2024',
      product: 'Linen Blend Natural',
      review: 'Love the eco-friendly linen curtains! They add such a natural, calming feel to our home office. Great customer service too. Will definitely order again.',
      helpful: 27,
      verified: true
    },
    {
      id: 6,
      name: 'James Wilson',
      location: 'Halifax, Canada',
      rating: 4,
      date: 'January 15, 2024',
      product: 'Modern Roller Blinds',
      review: 'Great quality blinds at a reasonable price. Installation was straightforward. Only minor issue was delivery took a bit longer than expected, but worth the wait.',
      helpful: 18,
      verified: true
    },
    {
      id: 7,
      name: 'Amanda Foster',
      location: 'Winnipeg, Canada',
      rating: 5,
      date: 'January 10, 2024',
      product: 'Designer Collection',
      review: 'The designer collection is absolutely gorgeous! These curtains are a work of art. Expensive but worth every penny for the quality and unique design.',
      helpful: 24,
      verified: true
    },
    {
      id: 8,
      name: 'Robert Martinez',
      location: 'Edmonton, Canada',
      rating: 5,
      date: 'January 5, 2024',
      product: 'Thermal Insulated Pro',
      review: 'Perfect for our cold winters! These thermal curtains keep the heat in and the cold out. Noticed a significant difference in room temperature.',
      helpful: 31,
      verified: true
    }
  ];

  const stats = {
    average: 4.9,
    total: 12847,
    distribution: {
      5: 89,
      4: 8,
      3: 2,
      2: 1,
      1: 0
    }
  };

  const filteredReviews = filter === 'all' ? reviews : reviews.filter(r => r.rating === parseInt(filter));

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <Star size={64} className="mx-auto text-purple-600 mb-4" />
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Customer Reviews</h1>
          <p className="text-xl text-gray-600">See what our customers are saying</p>
        </motion.div>

        {/* Overall Rating */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-2xl shadow-xl p-8 mb-12"
        >
          <div className="grid md:grid-cols-2 gap-12">
            <div className="text-center">
              <div className="text-6xl font-bold text-purple-600 mb-2">{stats.average}</div>
              <div className="flex justify-center mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="text-yellow-400 fill-current" size={24} />
                ))}
              </div>
              <p className="text-gray-600">Based on {stats.total.toLocaleString()} reviews</p>
            </div>
            <div className="space-y-2">
              {[5, 4, 3, 2, 1].map((rating) => (
                <div key={rating} className="flex items-center space-x-3">
                  <span className="text-sm font-semibold w-12">{rating} star</span>
                  <div className="flex-1 bg-gray-200 rounded-full h-3">
                    <div
                      className="bg-purple-600 h-3 rounded-full"
                      style={{ width: `${stats.distribution[rating]}%` }}
                    ></div>
                  </div>
                  <span className="text-sm text-gray-600 w-12">{stats.distribution[rating]}%</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Filter */}
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold text-gray-900">Customer Feedback</h2>
          <div className="flex items-center space-x-3">
            <Filter size={20} className="text-gray-600" />
            <select
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            >
              <option value="all">All Ratings</option>
              <option value="5">5 Stars</option>
              <option value="4">4 Stars</option>
              <option value="3">3 Stars</option>
            </select>
          </div>
        </div>

        {/* Reviews List */}
        <div className="space-y-6">
          {filteredReviews.map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + index * 0.1 }}
              className="bg-white rounded-2xl shadow-lg p-8"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <div className="flex items-center space-x-3 mb-2">
                    <h3 className="font-bold text-gray-900">{review.name}</h3>
                    {review.verified && (
                      <span className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full font-semibold">
                        Verified Purchase
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-gray-600">{review.location}</p>
                </div>
                <div className="text-right">
                  <div className="flex mb-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`${
                          i < review.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
                        }`}
                        size={18}
                      />
                    ))}
                  </div>
                  <p className="text-xs text-gray-500">{review.date}</p>
                </div>
              </div>

              <div className="mb-4">
                <p className="text-sm text-purple-600 font-semibold mb-2">
                  Purchased: {review.product}
                </p>
                <p className="text-gray-700">{review.review}</p>
              </div>

              <div className="flex items-center space-x-6 text-sm text-gray-600">
                <button className="flex items-center space-x-2 hover:text-purple-600 transition-colors">
                  <ThumbsUp size={16} />
                  <span>Helpful ({review.helpful})</span>
                </button>
                <button className="flex items-center space-x-2 hover:text-purple-600 transition-colors">
                  <MessageCircle size={16} />
                  <span>Reply</span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Write Review CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-12 text-center text-white"
        >
          <h2 className="text-3xl font-bold mb-4">Share Your Experience</h2>
          <p className="text-xl mb-8">
            Have you purchased from us? We'd love to hear your feedback!
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-purple-600 px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all"
          >
            Write a Review
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default Reviews;
