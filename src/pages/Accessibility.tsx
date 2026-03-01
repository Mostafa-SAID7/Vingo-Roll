import React from 'react';
import { motion } from 'framer-motion';
import { Accessibility as AccessibilityIcon, Eye, Ear, Hand, Heart } from 'lucide-react';

const Accessibility = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white py-20">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <AccessibilityIcon size={64} className="mx-auto text-purple-600 mb-4" />
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Accessibility Statement</h1>
          <p className="text-xl text-gray-600">Our commitment to digital accessibility</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-2xl shadow-xl p-8 space-y-8"
        >
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <Heart size={24} className="mr-2 text-purple-600" />
              Our Commitment
            </h2>
            <p className="text-gray-700">
              Vingo Roll is committed to ensuring digital accessibility for people with disabilities. We are continually improving the user experience for everyone and applying the relevant accessibility standards to ensure we provide equal access to all of our users.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Accessibility Features</h2>
            
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <Eye size={24} className="text-purple-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Visual Accessibility</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                    <li>High contrast color schemes</li>
                    <li>Resizable text without loss of functionality</li>
                    <li>Clear and readable fonts</li>
                    <li>Alternative text for images</li>
                  </ul>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Ear size={24} className="text-purple-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Audio Accessibility</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                    <li>Captions for video content</li>
                    <li>Transcripts for audio content</li>
                    <li>No auto-playing audio</li>
                  </ul>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Hand size={24} className="text-purple-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Navigation Accessibility</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                    <li>Keyboard navigation support</li>
                    <li>Skip navigation links</li>
                    <li>Consistent navigation structure</li>
                    <li>Clear focus indicators</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Standards Compliance</h2>
            <p className="text-gray-700 mb-4">
              We strive to conform to the Web Content Accessibility Guidelines (WCAG) 2.1 Level AA standards. These guidelines explain how to make web content more accessible for people with disabilities.
            </p>
            <p className="text-gray-700">
              Our website has been designed with accessibility in mind, including:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4 mt-2">
              <li>Semantic HTML markup</li>
              <li>ARIA labels and landmarks</li>
              <li>Proper heading hierarchy</li>
              <li>Form labels and error messages</li>
              <li>Responsive design for various devices</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Assistive Technologies</h2>
            <p className="text-gray-700 mb-4">
              Our website is compatible with common assistive technologies, including:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li>Screen readers (JAWS, NVDA, VoiceOver)</li>
              <li>Screen magnification software</li>
              <li>Speech recognition software</li>
              <li>Alternative input devices</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Ongoing Efforts</h2>
            <p className="text-gray-700">
              We are continuously working to improve the accessibility of our website. Our efforts include:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4 mt-2">
              <li>Regular accessibility audits and testing</li>
              <li>Staff training on accessibility best practices</li>
              <li>User testing with people with disabilities</li>
              <li>Implementing user feedback and suggestions</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Feedback and Contact</h2>
            <p className="text-gray-700 mb-4">
              We welcome your feedback on the accessibility of our website. If you encounter any accessibility barriers or have suggestions for improvement, please contact us:
            </p>
            <div className="bg-purple-50 rounded-lg p-4">
              <p className="text-gray-700 mb-2">
                <span className="font-semibold">Email:</span> accessibility@vingoroll.com
              </p>
              <p className="text-gray-700 mb-2">
                <span className="font-semibold">Phone:</span> 1-800-VINGO-ROLL
              </p>
              <p className="text-gray-700">
                <span className="font-semibold">Response time:</span> We aim to respond within 2 business days
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Third-Party Content</h2>
            <p className="text-gray-700">
              While we strive to ensure accessibility across our entire website, some third-party content may not be fully under our control. We are working with our partners to ensure their content meets accessibility standards.
            </p>
          </section>

          <section className="bg-purple-50 rounded-lg p-6">
            <p className="text-gray-700 text-sm italic">
              This accessibility statement was last reviewed on March 1, 2026. We are committed to maintaining and improving the accessibility of our website.
            </p>
          </section>
        </motion.div>
      </div>
    </div>
  );
};

export default Accessibility;
