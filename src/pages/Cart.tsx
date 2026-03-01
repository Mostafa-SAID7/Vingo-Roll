import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart, Trash2, Plus, Minus, ArrowRight } from 'lucide-react';

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: 'Velvet Blackout Curtains',
      price: 129.99,
      quantity: 2,
      image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=400',
      color: 'Navy Blue',
      size: '84" x 52"'
    },
    {
      id: 2,
      name: 'Modern Roller Blinds',
      price: 89.99,
      quantity: 1,
      image: 'https://images.unsplash.com/photo-1616137466211-f939a420be84?w=400',
      color: 'White',
      size: '72" x 48"'
    },
    {
      id: 3,
      name: 'Sheer White Curtains',
      price: 79.99,
      quantity: 1,
      image: 'https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?w=400',
      color: 'Pure White',
      size: '96" x 52"'
    }
  ]);

  const updateQuantity = (id: number, change: number) => {
    setCartItems(cartItems.map(item => {
      if (item.id === id) {
        const newQuantity = Math.max(1, item.quantity + change);
        return { ...item, quantity: newQuantity };
      }
      return item;
    }));
  };

  const removeFromCart = (id: number) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shipping = 15.00;
  const tax = subtotal * 0.08;
  const total = subtotal + shipping + tax;

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <h1 className="text-5xl font-bold text-gray-900 mb-2 flex items-center">
            <ShoppingCart size={48} className="mr-4 text-purple-600" />
            Shopping Cart
          </h1>
          <p className="text-xl text-gray-600">
            {cartItems.length} {cartItems.length === 1 ? 'item' : 'items'} in your cart
          </p>
        </motion.div>

        {cartItems.length === 0 ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-2xl shadow-xl p-16 text-center"
          >
            <ShoppingCart size={80} className="mx-auto text-gray-300 mb-6" />
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Your cart is empty</h2>
            <p className="text-gray-600 mb-8">Add some beautiful curtains to get started</p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all"
            >
              Start Shopping
            </motion.button>
          </motion.div>
        ) : (
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-4">
              {cartItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all"
                >
                  <div className="flex gap-6">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-32 h-32 object-cover rounded-lg"
                    />
                    <div className="flex-1">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h3 className="text-xl font-bold text-gray-900">{item.name}</h3>
                          <p className="text-sm text-gray-600">Color: {item.color}</p>
                          <p className="text-sm text-gray-600">Size: {item.size}</p>
                        </div>
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          onClick={() => removeFromCart(item.id)}
                          className="text-red-500 hover:text-red-700 transition-colors"
                        >
                          <Trash2 size={20} />
                        </motion.button>
                      </div>
                      <div className="flex items-center justify-between mt-4">
                        <div className="flex items-center space-x-3">
                          <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={() => updateQuantity(item.id, -1)}
                            className="w-8 h-8 rounded-full bg-gray-200 hover:bg-purple-100 flex items-center justify-center transition-colors"
                          >
                            <Minus size={16} />
                          </motion.button>
                          <span className="text-lg font-semibold w-8 text-center">{item.quantity}</span>
                          <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={() => updateQuantity(item.id, 1)}
                            className="w-8 h-8 rounded-full bg-gray-200 hover:bg-purple-100 flex items-center justify-center transition-colors"
                          >
                            <Plus size={16} />
                          </motion.button>
                        </div>
                        <div className="text-right">
                          <p className="text-2xl font-bold text-purple-600">
                            ${(item.price * item.quantity).toFixed(2)}
                          </p>
                          <p className="text-sm text-gray-600">${item.price.toFixed(2)} each</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Order Summary */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="lg:col-span-1"
            >
              <div className="bg-white rounded-2xl shadow-xl p-8 sticky top-24">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Order Summary</h2>
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between text-gray-700">
                    <span>Subtotal</span>
                    <span className="font-semibold">${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-gray-700">
                    <span>Shipping</span>
                    <span className="font-semibold">${shipping.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-gray-700">
                    <span>Tax</span>
                    <span className="font-semibold">${tax.toFixed(2)}</span>
                  </div>
                  <div className="border-t border-gray-200 pt-4">
                    <div className="flex justify-between text-xl font-bold text-gray-900">
                      <span>Total</span>
                      <span className="text-purple-600">${total.toFixed(2)}</span>
                    </div>
                  </div>
                </div>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-4 rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl transition-all flex items-center justify-center space-x-2"
                >
                  <span>Proceed to Checkout</span>
                  <ArrowRight size={20} />
                </motion.button>
                <p className="text-sm text-gray-600 text-center mt-4">
                  Free shipping on orders over $200
                </p>
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
