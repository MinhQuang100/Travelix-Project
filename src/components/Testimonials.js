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
    title: 'Best holiday ever',
    text: 'Nullam eu convallis tortor. Suspendisse potenti. In faucibus massa arcu, vitae cursus mi hendrerit nec.'
  },
  {
    image: 'images/test_2.jpg',
    icon: 'images/island_t.png',
    name: 'carla smith',
    date: 'May 24, 2017',
    title: 'Best holiday ever',
    text: 'Nullam eu convallis tortor. Suspendisse potenti. In faucibus massa arcu, vitae cursus mi hendrerit nec.'
  },
  {
    image: 'images/test_3.jpg',
    icon: 'images/kayak.png',
    name: 'carla smith',
    date: 'May 24, 2017',
    title: 'Best holiday ever',
    text: 'Nullam eu convallis tortor. Suspendisse potenti. In faucibus massa arcu, vitae cursus mi hendrerit nec.'
  },
  {
    image: 'images/test_2.jpg',
    icon: 'images/island_t.png',
    name: 'carla smith',
    date: 'May 24, 2017',
    title: 'Best holiday ever',
    text: 'Nullam eu convallis tortor. Suspendisse potenti. In faucibus massa arcu, vitae cursus mi hendrerit nec.'
  },
  {
    image: 'images/test_1.jpg',
    icon: 'images/backpack.png',
    name: 'carla smith',
    date: 'May 24, 2017',
    title: 'Best holiday ever',
    text: 'Nullam eu convallis tortor. Suspendisse potenti. In faucibus massa arcu, vitae cursus mi hendrerit nec.'
  },
  {
    image: 'images/test_3.jpg',
    icon: 'images/kayak.png',
    name: 'carla smith',
    date: 'May 24, 2017',
    title: 'Best holiday ever',
    text: 'Nullam eu convallis tortor. Suspendisse potenti. In faucibus massa arcu, vitae cursus mi hendrerit nec.'
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
    <div className="testimonials py-16 bg-gray-100">
      <div className="test_border h-1 bg-gradient-to-r from-yellow-500 to-purple-500 mb-8"></div>
      <div className="container mx-auto px-4">
        <div className="row mb-12">
          <div className="col text-center">
            <h2 className="section_title text-4xl font-bold text-gray-800">what our clients say about us</h2>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div className="test_slider_container">
              <Slider {...settings}>
                {testimonialsData.map((testimonial, index) => (
                  <div className="test_item p-4" key={index}>
                    <div className="test_image rounded-full overflow-hidden mb-4">
                      <img src={testimonial.image} alt={`Testimonial ${index + 1}`} className="w-full h-auto" />
                    </div>
                    <div className="test_icon mb-4">
                      <img src={testimonial.icon} alt="" className="w-12 h-12"/>
                    </div>
                    <div className="test_content_container rounded-full shadow-lg">
                      <div className="test_content">
                        <div className="test_item_info text-center mb-4">
                          <div className="test_name font-semibold">{testimonial.name}</div>
                          <div className="test_date text-sm text-gray-500">{testimonial.date}</div>
                        </div>
                        <div className="test_quote_title text-center text-lg font-bold mb-4">{`"${testimonial.title}"`}</div>
                        <p className="test_quote_text text-gray-700">{testimonial.text}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Custom Arrow Components
const SampleNextArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="test_slider_nav test_slider_next" onClick={onClick}>
      <svg version="1.1" id="Layer_7" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="28px" height="33px" viewBox="0 0 28 33" enableBackground="new 0 0 28 33" xmlSpace="preserve">
        <defs>
          <linearGradient id='test_grad_next'>
            <stop offset='0%' stopColor='#fa9e1b' />
            <stop offset='100%' stopColor='#8d4fff' />
          </linearGradient>
        </defs>
        <path className="nav_path" fill="#F3F6F9" d="M19,0H9C4.029,0,0,4.029,0,9v15c0,4.971,4.029,9,9,9h10c4.97,0,9-4.029,9-9V9C28,4.029,23.97,0,19,0z M26,23.091C26,27.459,22.545,31,18.285,31H9.714C5.454,31,2,27.459,2,23.091V9.909C2,5.541,5.454,2,9.714,2h8.571 C22.545,2,26,5.541,26,9.909V23.091z" />
        <polygon className="nav_arrow" fill="#F3F6F9" points="13.044,11.551 11.71,12.885 15.714,16.888 11.71,20.891 13.044,22.224 18.379,16.888 17.048,15.554 17.046,15.554 " />
      </svg>
    </div>
  );
};

const SamplePrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="test_slider_nav test_slider_prev" onClick={onClick}>
      <svg version="1.1" id="Layer_6" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="28px" height="33px" viewBox="0 0 28 33" enableBackground="new 0 0 28 33" xmlSpace="preserve">
        <defs>
          <linearGradient id='test_grad_prev'>
            <stop offset='0%' stopColor='#fa9e1b' />
            <stop offset='100%' stopColor='#8d4fff' />
          </linearGradient>
        </defs>
        <path className="nav_path" fill="#F3F6F9" d="M19,0H9C4.029,0,0,4.029,0,9v15c0,4.971,4.029,9,9,9h10c4.97,0,9-4.029,9-9V9C28,4.029,23.97,0,19,0z M26,23.091C26,27.459,22.545,31,18.285,31H9.714C5.454,31,2,27.459,2,23.091V9.909C2,5.541,5.454,2,9.714,2h8.571 C22.545,2,26,5.541,26,9.909V23.091z" />
        <polygon className="nav_arrow" fill="#F3F6F9" points="15.044,22.222 16.377,20.888 12.374,16.885 16.377,12.882 15.044,11.55 9.708,16.885 11.04,18.219 11.042,18.219 " />
      </svg>
    </div>
  );
};

export default Testimonials;
