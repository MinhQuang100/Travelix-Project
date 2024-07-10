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
        <div className="w-full lg:w-1/3 px-4 mb-8">
            <div className="relative bg-cover bg-center rounded-lg overflow-hidden shadow-lg h-80" style={{ backgroundImage: `url(${backgroundImage})` }}>
                <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                <div className="relative z-10 flex flex-col items-center justify-center text-white text-center p-8 h-full">
                    <div className="bg-blue-500 px-4 py-2 rounded-full mb-2 text-sm uppercase">{date}</div>
                    <h1 className="text-2xl font-bold mt-4">{destination}</h1>
                    <div className="bg-yellow-400 text-gray-900 px-3 py-1 rounded-full my-4 text-lg font-semibold">From {price}</div>
                    <div className="flex justify-center mt-2">
                        {renderStars(rating)}
                    </div>
                    <div className="relative mt-6">
                        <div className="absolute inset-0 bg-blue-500 rounded-full transform scale-105 opacity-75"></div>
                        <button className="relative z-10 text-white uppercase font-semibold py-2 px-6 bg-blue-500 rounded-full">
                            See More
                        </button>
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
            price: '$850',
            rating: 4,
        },
        {
            backgroundImage: 'images/intro_3.jpg',
            date: 'May 25th - June 01st',
            destination: 'Scotland',
            price: '$1150',
            rating: 3,
        },
    ];

    return (
        <div className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
            <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-800 uppercase">We have the best tours</h2>
            </div>
            <div className="text-center mb-12">
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                    Explore our exclusive tour packages tailored for your perfect vacation. Find amazing destinations and the best deals available.
                </p>
            </div>
            <div className="flex flex-wrap -mx-4">
                {introItems.map((item, index) => (
                    <IntroItem
                        key={index}
                        backgroundImage={item.backgroundImage}
                        date={item.date}
                        destination={item.destination}
                        price={item.price}
                        rating={item.rating}/>
                ))}
            </div>
        </div>
    </div>
    );
};

export default Intro;
