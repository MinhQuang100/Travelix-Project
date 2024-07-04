// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Offers from './components/Offers';
import Header from './components/Header';
import PackageDetails from './components/PackageDetails';
import MainPage from './components/MainPage';
import SearchOffer from './components/SearchOffer';
import Footer from './components/Footer';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<><Header /><MainPage /><Footer /></>} />
        <Route path="/offers" element={<><Header /><OffersPage /><Footer /></>} />
        <Route path='/package/:id' element={<PackageDetails/>}/>
      </Routes>
    </Router>
  );
}

const OffersPage = () => {
  return (
    <div className="App">
      <div className="home_offer">
        <img src="/images/about_background.jpg" alt="Background" className="home_offer_background parallax-window" />
          <div className="home_offer_content">
            <div className="home_offer_title">our offers</div>
          </div>
      </div>
      <SearchOffer/>
      <Offers />
    </div>
  );
}

export default App;
