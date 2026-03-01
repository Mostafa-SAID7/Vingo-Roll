import React from 'react';
import Hero from '../components/Hero';
import FeaturedCategories from '../components/FeaturedCategories';
import ProductShowcase from '../components/ProductShowcase';
import WhyChooseUs from '../components/WhyChooseUs';
import Newsletter from '../components/Newsletter';

const Home = () => {
  return (
    <>
      <Hero />
      <FeaturedCategories />
      <ProductShowcase />
      <WhyChooseUs />
      <Newsletter />
    </>
  );
};

export default Home;
