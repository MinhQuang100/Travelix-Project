import React from 'react';
import Slider from 'react-slick';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const CTAItem = ({ title, text, rating }) => {
    const renderStars = (rating) => {
        let stars = [];
        for (let i = 0; i < 5; i++) {
            stars.push(
                <FontAwesomeIcon key={i} icon={faStar} className={`star p-1 ${i < rating ? 'filled' : ''}`} />
            );
        }
        return stars;
    };
    return (
        <div className="cta_item text-center p-10 bg-transparent rounded-lg">
            <div className="cta_title text-2xl font-bold uppercase text-gray-800 mb-4">{title}</div>
            <div className="flex justify-center mb-4">
                {renderStars(rating)}
            </div>
            <p className="cta_text text-gray-700 font-semibold mb-6">{text}</p>
            <div className="cta_button">
                <a href="#" className="inline-block bg-gradient-to-r from-yellow-400 to-purple-600 text-white font-bold py-2 px-4 rounded transition transform hover:scale-105">
                    Book now
                </a>
            </div>
        </div>
    );
};

const CTA = () => {
    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: <PrevArrow />,
        nextArrow: <NextArrow />,
    };
    const ctaItems = [
        {
            title: 'Maldives Deluxe Package',
            text: 'Experience the ultimate luxury in the heart of the Maldives. Enjoy pristine beaches, exclusive overwater bungalows, and world-class diving spots. Perfect for honeymooners and families seeking a memorable escape.',
            rating: 4,
        },
        {
            title: 'New Destinations for You',
            text: 'Dive into the crystal-clear waters of the Maldives, where adventure meets relaxation. Explore vibrant coral reefs, dine under the stars, and unwind on the soft, white sandy beaches. An unforgettable journey awaits.',
            rating: 3,
        },
        {
            title: 'Travel with Us This Year',
            text: 'Discover the Maldives, a tropical paradise where dreams come to life. Indulge in spa treatments, water sports, and culinary delights in this exclusive getaway. Ideal for those looking to experience luxury at its best.',
            rating: 5,
        },
    ];
    return (
        <div className="bg-cover bg-center py-20 " style={{ backgroundImage: 'url(images/cta.jpg)' }}>
            <div className="container mx-auto">
                <div className="flex justify-center">
                    <div className="w-full md:w-3/4 lg:w-1/2">
                        <Slider {...sliderSettings}>
                            {ctaItems.map((item, index) => (
                                <CTAItem
                                    key={index}
                                    title={item.title}
                                    text={item.text}
                                    rating={item.rating}
                                />
                            ))}
                        </Slider>
                    </div>
                </div>
            </div>
        </div>
    );
};

const PrevArrow = (props) => {
    const { onClick } = props;
    return (
        <div className='cta_slider_nav absolute top-1/2 transform -translate-y-1/2 left-0 z-10 cursor-pointer' onClick={onClick}>
            <svg version="1.1" id="Layer_4" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                width="28px" height="33px" viewBox="0 0 28 33" enableBackground="new 0 0 28 33" xmlSpace="preserve">
                <defs>
                    <linearGradient id='cta_grad_prev'>
                        <stop offset='0%' stopColor='#fa9e1b' />
                        <stop offset='100%' stopColor='#8d4fff' />
                    </linearGradient>
                </defs>
                <path className="nav_path fill-current text-white" d="M19,0H9C4.029,0,0,4.029,0,9v15c0,4.971,4.029,9,9,9h10c4.97,0,9-4.029,9-9V9C28,4.029,23.97,0,19,0z
                M26,23.091C26,27.459,22.545,31,18.285,31H9.714C5.454,31,2,27.459,2,23.091V9.909C2,5.541,5.454,2,9.714,2h8.571
                C22.545,2,26,5.541,26,9.909V23.091z" />
                <polygon className="nav_arrow fill-current text-white" points="15.044,22.222 16.377,20.888 12.374,16.885 16.377,12.882 15.044,11.55 9.708,16.885 11.04,18.219 
                11.042,18.219 " />
            </svg>
        </div>
    );
};

const NextArrow = (props) => {
    const { onClick } = props;
    return (
        <div className="cta_slider_nav absolute top-1/2 transform -translate-y-1/2 right-0 z-10 cursor-pointer" onClick={onClick}>
            <svg version="1.1" id="Layer_5" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                width="28px" height="33px" viewBox="0 0 28 33" enableBackground="new 0 0 28 33" xmlSpace="preserve">
                <defs>
                    <linearGradient id='cta_grad_next'>
                        <stop offset='0%' stopColor='#fa9e1b' />
                        <stop offset='100%' stopColor='#8d4fff' />
                    </linearGradient>
                </defs>
                <path className="nav_path fill-current text-white" d="M19,0H9C4.029,0,0,4.029,0,9v15c0,4.971,4.029,9,9,9h10c4.97,0,9-4.029,9-9V9C28,4.029,23.97,0,19,0z
                M26,23.091C26,27.459,22.545,31,18.285,31H9.714C5.454,31,2,27.459,2,23.091V9.909C2,5.541,5.454,2,9.714,2h8.571
                C22.545,2,26,5.541,26,9.909V23.091z" />
                <polygon className="nav_arrow fill-current text-white" points="13.044,11.551 11.71,12.885 15.714,16.888 11.71,20.891 13.044,22.224 18.379,16.888 17.048,15.554 
                17.046,15.554 " />
            </svg>
        </div>
    );
};

export default CTA;
