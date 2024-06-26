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
    <div className="trending">
      <div className="container">
        <div className="row">
          <div className="col text-center">
            <h2 className="section_title">trending now</h2>
          </div>
        </div>
        <div className="row trending_container">
          {trendingData.map((item, index) => (
            <div className="col-lg-3 col-sm-6" key={index}>
              <div className="trending_item clearfix">
                <div className="trending_image">
                  <img src={item.image} alt={item.alt} />
                </div>
                <div className="trending_content">
                  <div className="trending_title uppercase">
                    <a href="#">{item.title}</a>
                  </div>
                  <div className="trending_price">{item.price}</div>
                  <div className="trending_location">{item.location}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Trending;
