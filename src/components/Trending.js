import React from 'react';

const trendingData = [
  {
    image: 'images/trend_1.png',
    alt: 'https://unsplash.com/@fransaraco',
    title: 'grand hotel',
    price: '$192',
    location: 'madrid, spain',
  },
  {
    image: 'images/trend_2.png',
    alt: 'https://unsplash.com/@grovemade',
    title: 'mars hotel',
    price: '$185',
    location: 'madrid, spain',
  },
  {
    image: 'images/trend_3.png',
    alt: 'https://unsplash.com/@jbriscoe',
    title: 'queen hotel',
    price: '$124',
    location: 'madrid, spain',
  },
  {
    image: 'images/trend_4.png',
    alt: 'https://unsplash.com/@oowgnuj',
    title: 'mars hotel',
    price: '$120',
    location: 'madrid, spain',
  },
  {
    image: 'images/trend_5.png',
    alt: 'https://unsplash.com/@mindaugas',
    title: 'grand hotel',
    price: '$116',
    location: 'madrid, spain',
  },
  {
    image: 'images/trend_6.png',
    alt: 'https://unsplash.com/@itsnwa',
    title: 'mars hotel',
    price: '$122',
    location: 'madrid, spain',
  },
  {
    image: 'images/trend_7.png',
    alt: 'https://unsplash.com/@rktkn',
    title: 'queen hotel',
    price: '$182',
    location: 'madrid, spain',
  },
  {
    image: 'images/trend_8.png',
    alt: 'https://unsplash.com/@thoughtcatalog',
    title: 'mars hotel',
    price: '$138',
    location: 'madrid, spain',
  },
];

const Trending = () => {
  return (
    <div className="bg-gray-100 py-12">
      <div className="container mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-gray-800">Trending Now</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {trendingData.map((item, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 ease-in-out">
              <div className="bg-cover bg-center h-56 p-4" style={{ backgroundImage: `url(${item.image})` }}>
                <div className="flex justify-end">
                  <span className="text-white bg-blue-500 rounded-lg px-2 py-1 text-xs font-bold">{item.price}</span>
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-xl font-bold truncate uppercase">{item.title}</h3>
                <p className="text-gray-700 mt-2">{item.location}</p>
              </div>
              <div className="p-4 border-t border-gray-200">
                <a href="#" className="text-blue-600 hover:text-blue-500 font-semibold block text-sm">View Details</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Trending;
