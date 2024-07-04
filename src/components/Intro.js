import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const IntroItem = ({ backgroundImage, date, destination, price, rating }) => {
    const renderStars = (rating) => {
        let stars = [];
        for (let i = 0; i < 5; i++) {
            stars.push(
                <FontAwesomeIcon 
                    key={i} 
                    icon={faStar} 
                    className={`star p-1 ${i < rating ? 'filled' : ''}`}
                />
            );
        }
        return stars;
    };

    return (
        <div className="col-lg-4 intro_col mb-8 ">
            <div className="intro_item relative bg-cover bg-center rounded-lg overflow-hidden shadow-lg" style={{ backgroundImage: `url(${backgroundImage})` }}>
                <div className="intro_item_overlay absolute inset-0 bg-black opacity-50"></div>
                <div className="intro_item_content flex flex-col items-center justify-center text-white text-center p-8">
                    <div className="intro_date mb-2 text-sm uppercase tracking-wider">{date}</div>
                    <div className="intro_center">
                        <h1 className="text-2xl font-bold mt-16">{destination}</h1>
                        <div className="intro_price mb-12 text-lg font-semibold">From {price}</div>
                        <div className={`rating flex justify-center ${rating}`}>
                            {renderStars(rating)}
                        </div>
                    <div className="button intro_button relative mt-4">
                        <div className="button_bcg absolute inset-0 rounded-lg transform scale-110 opacity-75"></div>
                        <div className="text-white uppercase font-semibold">see more<span></span><span></span><span></span></div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const Intro = () => {
    const introItems = [
        {
            backgroundImage: 'images/intro_1.jpg',
            date: 'May 25th - June 01st',
            destination: 'Mauritius',
            price: '$1450',
            rating: 4,
        },
        {
            backgroundImage: 'images/intro_2.jpg',
            date: 'May 25th - June 01st',
            destination: 'Greece',
            price: '$1450',
            rating: 4,
        },
        {
            backgroundImage: 'images/intro_3.jpg',
            date: 'May 25th - June 01st',
            destination: 'Scotland',
            price: '$1450',
            rating: 3,
        },
    ];

    return (
        <div className="intro py-16 bg-gray-100">
            <div className="container mx-auto">
                <div className="row mb-8">
                    <div className="col text-center">
                        <h2 className="intro_title text-3xl font-bold">We have the best tours</h2>
                    </div>
                </div>
                <div className="row mb-12">
                    <div className="col-lg-10 offset-lg-1 text-center">
                        <div className="intro_text text-lg text-gray-600">
                            <p>Explore our exclusive tour packages tailored for your perfect vacation. Find amazing destinations and the best deals available.</p>
                        </div>
                    </div>
                </div>
                <div className="row intro_items">
                    {introItems.map((item, index) => (
                        <IntroItem
                            key={index}
                            backgroundImage={item.backgroundImage}
                            date={item.date}
                            destination={item.destination}
                            price={item.price}
                            rating={item.rating}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Intro;
