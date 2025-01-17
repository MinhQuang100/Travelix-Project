// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import MainPage from './components/MainPage';
import Search from './components/Search';
import Offers from './components/Offers';
import PackageDetails from './components/PackageDetails';
import SearchResults from './components/SearchResults'; 
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<><Header /><MainPage /><Footer /></>} />
        <Route path="/offers" element={<><Header /><OffersPage /><Footer /></>} />
        <Route path="/package/:id" element={<PackageDetails />} />
        <Route path="/search" element={<><Header /><SearchResults /><Footer /></>} />
      </Routes>
    </Router>
  );
}

const OffersPage = () => {
  return (
    <div>
      <div className="home_offer">
        <img src="/images/about_background.jpg" alt="Background" className="home_offer_background parallax-window" />
        <div className="home_offer_content">
          <div className="home_offer_title">our offers</div>
        </div>
      </div>
      <Search />
      <Offers />
    </div>
  );
}

export default App;
