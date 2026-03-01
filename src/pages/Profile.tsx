import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { User, Mail, Phone, MapPin, Edit2, Save, Package, Heart, Settings } from 'lucide-react';

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '+1 234 567 8900',
    address: '123 Main Street, New York, NY 10001'
  });

  const orders = [
    { id: '#12345', date: '2024-02-15', status: 'Delivered', total: '$299.99' },
    { id: '#12344', date: '2024-01-20', status: 'In Transit', total: '$459.99' },
    { id: '#12343', date: '2023-12-10', status: 'Delivered', total: '$189.99' }
  ];

  const favorites = [
    { name: 'Velvet Blackout Curtains', price: '$129.99', image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=400' },
    { name: 'Modern Roller Blinds', price: '$89.99', image: 'https://images.unsplash.com/photo-1616137466211-f939a420be84?w=400' },
    { name: 'Sheer White Curtains', price: '$79.99', image: 'https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?w=400' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-5xl font-bold text-gray-900 mb-2">My Profile</h1>
          <p className="text-xl text-gray-600">Manage your account and preferences</p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Profile Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-1"
          >
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <div className="text-center mb-6">
                <div className="w-32 h-32 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <User size={64} className="text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">{profile.name}</h2>
                <p className="text-gray-600">Premium Member</p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center space-x-3 text-gray-700">
                  <Mail size={20} className="text-purple-600" />
                  <span>{profile.email}</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-700">
                  <Phone size={20} className="text-purple-600" />
                  <span>{profile.phone}</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-700">
                  <MapPin size={20} className="text-purple-600" />
                  <span>{profile.address}</span>
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setIsEditing(!isEditing)}
                className="w-full mt-6 bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-lg font-semibold flex items-center justify-center space-x-2"
              >
                {isEditing ? <Save size={20} /> : <Edit2 size={20} />}
                <span>{isEditing ? 'Save Changes' : 'Edit Profile'}</span>
              </motion.button>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-6 mt-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <Settings size={24} className="mr-2 text-purple-600" />
                Quick Actions
              </h3>
              <div className="space-y-3">
                <button className="w-full text-left px-4 py-3 rounded-lg hover:bg-purple-50 transition-colors text-gray-700">
                  Account Settings
                </button>
                <button className="w-full text-left px-4 py-3 rounded-lg hover:bg-purple-50 transition-colors text-gray-700">
                  Payment Methods
                </button>
                <button className="w-full text-left px-4 py-3 rounded-lg hover:bg-purple-50 transition-colors text-gray-700">
                  Shipping Addresses
                </button>
                <button className="w-full text-left px-4 py-3 rounded-lg hover:bg-purple-50 transition-colors text-gray-700">
                  Notifications
                </button>
              </div>
            </div>
          </motion.div>

          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Order History */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-2xl shadow-xl p-8"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Package size={28} className="mr-3 text-purple-600" />
                Order History
              </h3>
              <div className="space-y-4">
                {orders.map((order, index) => (
                  <div
                    key={index}
                    className="border border-gray-200 rounded-lg p-4 hover:border-purple-300 transition-colors"
                  >
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="font-semibold text-gray-900">Order {order.id}</p>
                        <p className="text-sm text-gray-600">{order.date}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold text-gray-900">{order.total}</p>
                        <span
                          className={`text-sm px-3 py-1 rounded-full ${
                            order.status === 'Delivered'
                              ? 'bg-green-100 text-green-700'
                              : 'bg-blue-100 text-blue-700'
                          }`}
                        >
                          {order.status}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full mt-6 border-2 border-purple-600 text-purple-600 py-3 rounded-lg font-semibold hover:bg-purple-50 transition-colors"
              >
                View All Orders
              </motion.button>
            </motion.div>

            {/* Favorites */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-white rounded-2xl shadow-xl p-8"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Heart size={28} className="mr-3 text-purple-600" />
                My Favorites
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                {favorites.map((item, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ y: -5 }}
                    className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-all"
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-40 object-cover"
                    />
                    <div className="p-4">
                      <p className="font-semibold text-gray-900 mb-2">{item.name}</p>
                      <p className="text-purple-600 font-bold">{item.price}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
