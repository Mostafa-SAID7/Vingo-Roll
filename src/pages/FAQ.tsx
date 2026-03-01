import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      category: 'Orders & Shipping',
      questions: [
        {
          q: 'How long does shipping take?',
          a: 'Standard shipping takes 5-7 business days. Express shipping (2-3 days) and overnight options are available at checkout.'
        },
        {
          q: 'Do you ship internationally?',
          a: 'Yes! We ship to over 50 countries worldwide. International shipping times vary by location, typically 10-15 business days.'
        },
        {
          q: 'Can I track my order?',
          a: 'Absolutely! Once your order ships, you\'ll receive a tracking number via email to monitor your delivery.'
        }
      ]
    },
    {
      category: 'Products & Customization',
      questions: [
        {
          q: 'Can I order custom sizes?',
          a: 'Yes! We specialize in custom orders. Simply provide your measurements and we\'ll create the perfect fit for your windows.'
        },
        {
          q: 'What materials do you use?',
          a: 'We use premium fabrics including cotton, linen, velvet, silk, and polyester blends. All materials are carefully selected for quality and durability.'
        },
        {
          q: 'Do you offer fabric samples?',
          a: 'Yes! We offer sample swatches for $5 each (refundable with purchase). Order up to 5 samples to see and feel the quality.'
        }
      ]
    },
    {
      category: 'Returns & Exchanges',
      questions: [
        {
          q: 'What is your return policy?',
          a: '30-day returns on standard items. Items must be unused and in original packaging. Custom orders are final sale.'
        },
        {
          q: 'How do I initiate a return?',
          a: 'Contact our support team with your order number. We\'ll provide a return label and instructions.'
        },
        {
          q: 'When will I receive my refund?',
          a: 'Refunds are processed within 5-10 business days after we receive your return.'
        }
      ]
    },
    {
      category: 'Installation & Care',
      questions: [
        {
          q: 'Do you offer installation services?',
          a: 'Yes! Professional installation is available in select areas. Contact us for availability in your region.'
        },
        {
          q: 'How do I measure my windows?',
          a: 'We provide detailed measuring guides with your order. You can also schedule a free virtual consultation with our experts.'
        },
        {
          q: 'How do I clean my curtains?',
          a: 'Care instructions vary by fabric. Most can be machine washed on gentle cycle. Check the care label on your specific product.'
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white py-20">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <HelpCircle size={64} className="mx-auto text-purple-600 mb-4" />
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h1>
          <p className="text-xl text-gray-600">Find answers to common questions</p>
        </motion.div>

        <div className="space-y-8">
          {faqs.map((category, catIndex) => (
            <motion.div
              key={catIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: catIndex * 0.1 }}
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{category.category}</h2>
              <div className="space-y-4">
                {category.questions.map((faq, qIndex) => {
                  const globalIndex = catIndex * 10 + qIndex;
                  const isOpen = openIndex === globalIndex;
                  
                  return (
                    <div
                      key={qIndex}
                      className="bg-white rounded-lg shadow-md overflow-hidden"
                    >
                      <button
                        onClick={() => setOpenIndex(isOpen ? null : globalIndex)}
                        className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-purple-50 transition-colors"
                      >
                        <span className="font-semibold text-gray-900">{faq.q}</span>
                        {isOpen ? (
                          <ChevronUp className="text-purple-600 flex-shrink-0" size={24} />
                        ) : (
                          <ChevronDown className="text-gray-400 flex-shrink-0" size={24} />
                        )}
                      </button>
                      <AnimatePresence>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                          >
                            <div className="px-6 pb-4 text-gray-700">
                              {faq.a}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 text-center text-white"
        >
          <h2 className="text-2xl font-bold mb-4">Still have questions?</h2>
          <p className="text-lg mb-6">Our customer support team is here to help</p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-purple-600 px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all"
          >
            Contact Support
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default FAQ;
