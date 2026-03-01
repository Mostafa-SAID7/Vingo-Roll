import React from 'react';
import Hero from '../components/Hero';
import FeaturedCategories from '../components/FeaturedCategories';
import ProductShowcase from '../components/ProductShowcase';
import WhyChooseUs from '../components/WhyChooseUs';
import CallToAction from '../components/CallToAction';
import Newsletter from '../components/Newsletter';

const Home = () => {
  return (
    <>
      <Hero />
      <FeaturedCategories />
      <ProductShowcase />
      <WhyChooseUs />
      <CallToAction />
      <Newsletter />
    </>
  );
};

export default Home;
