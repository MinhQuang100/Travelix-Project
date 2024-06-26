import React from 'react';
import Home from './Home';
import Search from './Search';
import Intro from './Intro';
import CTA from './CTA';
import BestOffers from './BestOffers';
import Testimonials from './Testimonials';
import Trending from './Trending';
import Contact from './Contact';
import '../styles/main_styles.css';
import '../styles/responsive.css';
import '../styles/bootstrap4/bootstrap.min.css';
const MainPage = () => {
  return (
    <div>
      <Home />
      <Search />
      <Intro />
      <CTA />
      <BestOffers />
      <Testimonials />
      <Trending />
      <Contact />
    </div>
  );
}

export default MainPage;
