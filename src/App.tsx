import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Categories from './pages/Categories';
import CustomOrders from './pages/CustomOrders';
import Inspiration from './pages/Inspiration';
import About from './pages/About';
import Profile from './pages/Profile';
import Wishlist from './pages/Wishlist';
import Cart from './pages/Cart';
import Services from './pages/Services';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import CookiePolicy from './pages/CookiePolicy';
import Accessibility from './pages/Accessibility';
import FAQ from './pages/FAQ';
import ContactUs from './pages/ContactUs';
import BlackoutCurtains from './pages/BlackoutCurtains';
import SheerCurtains from './pages/SheerCurtains';
import ThermalCurtains from './pages/ThermalCurtains';
import DesignerCollection from './pages/DesignerCollection';
import SaleItems from './pages/SaleItems';
import OurStory from './pages/OurStory';
import Reviews from './pages/Reviews';
import SizeGuide from './pages/SizeGuide';
import CareInstructions from './pages/CareInstructions';
import ReturnsExchanges from './pages/ReturnsExchanges';
import ShippingInfo from './pages/ShippingInfo';
import MeasuringService from './pages/MeasuringService';
import Installation from './pages/Installation';
import CustomDesign from './pages/CustomDesign';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/custom-orders" element={<CustomOrders />} />
          <Route path="/inspiration" element={<Inspiration />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/cookie-policy" element={<CookiePolicy />} />
          <Route path="/accessibility" element={<Accessibility />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/blackout-curtains" element={<BlackoutCurtains />} />
          <Route path="/sheer-curtains" element={<SheerCurtains />} />
          <Route path="/thermal-curtains" element={<ThermalCurtains />} />
          <Route path="/designer-collection" element={<DesignerCollection />} />
          <Route path="/sale-items" element={<SaleItems />} />
          <Route path="/our-story" element={<OurStory />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/size-guide" element={<SizeGuide />} />
          <Route path="/care-instructions" element={<CareInstructions />} />
          <Route path="/returns-exchanges" element={<ReturnsExchanges />} />
          <Route path="/shipping-info" element={<ShippingInfo />} />
          <Route path="/measuring-service" element={<MeasuringService />} />
          <Route path="/installation" element={<Installation />} />
          <Route path="/custom-design" element={<CustomDesign />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;