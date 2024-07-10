// src/components/SearchResults.js
import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const SearchResults = () => {
  const [searchResults, setSearchResults] = useState([]);
  const location = useLocation();
  const navigate = useNavigate();
  const query = new URLSearchParams(location.search).get('query');

  useEffect(() => {
    const fetchSearchResults = async () => {
      try {
        const response = await fetch(`/api/offers/search?query=${query}`);
        const data = await response.json();
        setSearchResults(data);
      } catch (error) {
        console.error('Error fetching search results:', error);
      }
    };

    if (query) {
      fetchSearchResults();
    }
  }, [query]);

  const handleViewDetails = (id) => {
    navigate(`/package/${id}`);
  };

  return (
    <div className="search-results-container">
      <div className="search-results-header bg-gradient-to-r from-blue-500 to-purple-600 py-6 text-center">
        <h2 className="text-4xl text-white font-bold">Search Results for: {query}</h2>
      </div>
      <div className="search-results-content p-8 bg-gray-100">
        {searchResults.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {searchResults.map((offer) => (
              <div key={offer._id} className="offer-card bg-white shadow-lg rounded-lg overflow-hidden">
                <img src={offer.image} alt={offer.name} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-2xl font-semibold mb-2">{offer.name}</h3>
                  <p className="text-gray-700 mb-4">{offer.text}</p>
                  <p className="text-xl font-bold text-purple-600 mb-2">${offer.price}</p>
                  <p className="text-yellow-500 mb-2">Rating: {offer.rating} / 5</p>
                  <button
                    onClick={() => handleViewDetails(offer._id)}
                    className="bg-purple-600 text-white py-2 px-4 rounded hover:bg-purple-700">
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-10">
            <p className="text-2xl text-gray-600">No results found for "{query}"</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchResults;
