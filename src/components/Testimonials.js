// Testimonials.js
import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const testimonialsData = [
  {
    image: 'images/test_1.jpg',
    icon: 'images/backpack.png',
    name: 'carla smith',
    date: 'May 24, 2017',
    title: 'Adventure in the Mountains',
    text: 'The hiking trip was breathtaking, literally and figuratively! The views from the top were spectacular, and our guide made sure we enjoyed every moment. Cant wait for the next adventure!'
  },
  {
    image: 'images/test_2.jpg',
    icon: 'images/island_t.png',
    name: 'carla smith',
    date: 'May 24, 2017',
    title: 'Island Paradise Found',
    text: 'Our island getaway was a dream come true. White sandy beaches, crystal-clear waters, and the most friendly locals. It was the perfect escape from our busy lives.'
  },
  {
    image: 'images/test_3.jpg',
    icon: 'images/kayak.png',
    name: 'carla smith',
    date: 'May 24, 2017',
    title: 'Kayaking Adventure',
    text: 'Kayaking through the serene waters was an unforgettable experience. The wildlife was incredible, and paddling through the mangroves was both peaceful and exhilarating.'
  },
  {
    image: 'images/test_2.jpg',
    icon: 'images/island_t.png',
    name: 'carla smith',
    date: 'May 24, 2017',
    title: 'Sunset Sailing Experience',
    text: 'Sailing as the sun set was magical. The colors of the sky, the calm sea, and the company made it an evening to remember. Highly recommend this experience!'
  },
  {
    image: 'images/test_1.jpg',
    icon: 'images/backpack.png',
    name: 'carla smith',
    date: 'May 24, 2017',
    title: 'Mountain Retreat',
    text: 'Our mountain retreat was everything we hoped for and more. Fresh air, stunning hikes, and cozy nights by the fire. It was the perfect way to recharge.'
  },
  {
    image: 'images/test_3.jpg',
    icon: 'images/kayak.png',
    name: 'carla smith',
    date: 'May 24, 2017',
    title: 'Exploring the Great Outdoors',
    text: 'Exploring the great outdoors by kayak was an adventure of a lifetime. The guides were knowledgeable, and the landscapes were something out of a postcard.'
  }
];

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    centerMode: true,
    centerPadding: '0', 
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className="py-16 bg-gray-100">
      <div className="h-1 bg-gradient-to-r from-yellow-500 to-purple-500 mb-8"></div>
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-bold text-gray-800">What Our Clients Say About Us</h2>
        </div>
        <div>
          <Slider {...settings}>
            {testimonialsData.map((testimonial, index) => (
              <div className="p-4" key={index}>
                <div className="relative bg-white rounded-lg shadow-lg p-8 transition-transform transform hover:-translate-y-2">
                  <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-4">
                    <img src={testimonial.image} alt={`Testimonial ${index + 1}`} className="w-full h-auto" />
                  </div>
                  <div className="w-12 h-12 rounded-full overflow-hidden mx-auto mb-4">
                    <img src={testimonial.icon} alt="" className="w-full h-full object-cover"/>
                  </div>
                  <div className="text-center">
                    <div className="font-semibold text-lg">{testimonial.name}</div>
                    <div className="text-sm text-gray-500 mb-4">{testimonial.date}</div>
                    <div className="text-xl font-bold mb-4">"{testimonial.title}"</div>
                    <p className="text-gray-700">{testimonial.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

// Custom Arrow Components
const SampleNextArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="absolute bg-gradient-to-r from-yellow-500 to-purple-500 top-1/2 transform -translate-y-1/2 right-4 cursor-pointer bg-orange-600 hover:bg-orange-500 rounded-full p-2" onClick={onClick}>
      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L11.586 9 7.293 4.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clipRule="evenodd" />
      </svg>
    </div>
  );
};

const SamplePrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="absolute bg-gradient-to-r from-yellow-500 to-purple-500 top-1/2 transform -translate-y-1/2 left-0 cursor-pointer bg-orange-600 hover:bg-orange-500 rounded-full p-2 z-10" onClick={onClick}>
      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M12.707 14.707a1 1 0 010-1.414L8.414 9l4.293-4.293a1 1 0 10-1.414-1.414l-5 5a1 1 0 000 1.414l5 5a1 1 0 001.414 0z" clipRule="evenodd" />
      </svg>
    </div>
  );
};

export default Testimonials;
