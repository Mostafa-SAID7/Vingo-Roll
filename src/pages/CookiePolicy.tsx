import React from 'react';
import { motion } from 'framer-motion';
import { Cookie, Settings, Info, ToggleLeft } from 'lucide-react';

const CookiePolicy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white py-20">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <Cookie size={64} className="mx-auto text-purple-600 mb-4" />
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Cookie Policy</h1>
          <p className="text-xl text-gray-600">Last updated: March 1, 2026</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-2xl shadow-xl p-8 space-y-8"
        >
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <Info size={24} className="mr-2 text-purple-600" />
              What Are Cookies?
            </h2>
            <p className="text-gray-700">
              Cookies are small text files that are placed on your device when you visit our website. They help us provide you with a better experience by remembering your preferences and understanding how you use our site.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Types of Cookies We Use</h2>
            
            <div className="space-y-4">
              <div className="border-l-4 border-purple-600 pl-4">
                <h3 className="font-bold text-gray-900 mb-2">Essential Cookies</h3>
                <p className="text-gray-700">
                  These cookies are necessary for the website to function properly. They enable basic functions like page navigation, secure areas access, and shopping cart functionality.
                </p>
              </div>

              <div className="border-l-4 border-blue-600 pl-4">
                <h3 className="font-bold text-gray-900 mb-2">Performance Cookies</h3>
                <p className="text-gray-700">
                  These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously. This helps us improve our website's performance.
                </p>
              </div>

              <div className="border-l-4 border-green-600 pl-4">
                <h3 className="font-bold text-gray-900 mb-2">Functionality Cookies</h3>
                <p className="text-gray-700">
                  These cookies allow the website to remember choices you make (such as your username, language, or region) and provide enhanced, personalized features.
                </p>
              </div>

              <div className="border-l-4 border-pink-600 pl-4">
                <h3 className="font-bold text-gray-900 mb-2">Marketing Cookies</h3>
                <p className="text-gray-700">
                  These cookies track your online activity to help advertisers deliver more relevant advertising or to limit how many times you see an ad.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <Settings size={24} className="mr-2 text-purple-600" />
              Managing Cookies
            </h2>
            <p className="text-gray-700 mb-4">
              You can control and manage cookies in various ways:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li>Browser settings: Most browsers allow you to refuse or accept cookies</li>
              <li>Cookie preferences: Use our cookie consent tool to manage your preferences</li>
              <li>Third-party opt-out: Visit third-party websites to opt-out of their cookies</li>
              <li>Delete cookies: Clear cookies from your browser at any time</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <ToggleLeft size={24} className="mr-2 text-purple-600" />
              Your Choices
            </h2>
            <p className="text-gray-700 mb-4">
              You have the right to decide whether to accept or reject cookies. You can exercise your cookie preferences by:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li>Setting your browser to refuse all cookies</li>
              <li>Setting your browser to indicate when a cookie is being sent</li>
              <li>Using our cookie preference center</li>
              <li>Opting out of third-party cookies</li>
            </ul>
            <p className="text-gray-700 mt-4">
              Please note that if you choose to refuse cookies, some parts of our website may not function properly.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Third-Party Cookies</h2>
            <p className="text-gray-700">
              We may use third-party services that place cookies on your device. These include analytics providers, advertising networks, and social media platforms. These third parties have their own privacy policies.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Updates to This Policy</h2>
            <p className="text-gray-700">
              We may update this Cookie Policy from time to time to reflect changes in technology, legislation, or our business practices. Please check this page regularly for updates.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
            <p className="text-gray-700">
              If you have any questions about our use of cookies, please contact us at:
            </p>
            <p className="text-purple-600 font-semibold mt-2">cookies@vingoroll.com</p>
          </section>
        </motion.div>
      </div>
    </div>
  );
};

export default CookiePolicy;
