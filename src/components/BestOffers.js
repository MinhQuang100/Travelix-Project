// BestOffers.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faEnvelope, faCompass, faBicycle, faShip } from '@fortawesome/free-solid-svg-icons';

const OfferItem = ({ image, name, price, rating, text, icons }) => {
    const renderStars = (rating) => {
        let stars = [];
        for (let i = 0; i < 5; i++) {
            stars.push(
                <FontAwesomeIcon key={i} icon={faStar} className={`star scale-75 ${i < rating ? 'filled' : ''}`}/>
            );
        }
        return stars;
    };

    return (
        <div className="col-lg-6 offers_col mb-8">
            <div className="offers_item bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="row">
                    <div className="col-lg-6 p-4">
                        <div className="offers_content">
                            <div className="offers_price text-2xl font-bold text-yellow-500">${price}<span className="text-sm text-gray-500 ml-1">per night</span></div>
                            <div className="my-2">
                                {renderStars(rating)}
                            </div>
                            <p className="offers_text text-gray-700">{text}</p>
                            <div className="offers_link mt-4"><a href="#" className="text-purple-500 hover:underline">read more</a></div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="offers_image_container relative">
                            <div className="offers_image_background bg-cover bg-center" style={{ backgroundImage: `url(${image})` }}></div>
                            <div className="offer_name absolute bottom-0 left-0 bg-gradient-to-r from-yellow-500 to-purple-500 text-white"><a href="#">{name}</a></div>
                        </div>
                        <div className="offers_icons mt-4">
                            <ul className="offers_icons_list flex justify-center space-x-3">
                                {icons.map((icon, index) => (
                                    <li className="offers_icons_item" key={index}><img src={icon} alt="" className="w-6 h-6"/></li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const BestOffers = () => {
    const offersData = [
        {
            image: 'images/offer_1.jpg',
            name: 'grand castle',
            price: 70,
            rating: 4,
            text: 'Explore the majestic Grand Castle and its surrounding gardens. A perfect place, ideal for those who love to delve into the past while enjoying stunning landscapes.',
            icons: [faEnvelope, faCompass, faBicycle, faShip]
        },
        {
            image: 'images/offer_2.jpg',
            name: 'turkey hills',
            price: 50,
            rating: 5,
            text: 'Discover the serene beauty of Turkey Hills. Enjoy hiking trails, breathtaking views, and local cuisine. A haven for nature lovers and adventurers alike.',
            icons: [faEnvelope, faCompass, faBicycle, faShip]
        },
        {
            image: 'images/offer_3.jpg',
            name: 'island dream',
            price: 90,
            rating: 4,
            text: 'Immerse yourself in the Island Dream experience. White sandy beaches, crystal-clear waters, and luxurious accommodations await you. Perfect for a romantic getaway or a family vacation.',
            icons: [faEnvelope, faCompass, faBicycle, faShip]
        },
        {
            image: 'images/offer_4.jpg',
            name: 'travel light',
            price: 30,
            rating: 3,
            text: 'Travel Light offers an eco-friendly travel experience. Explore destinations with a minimal footprint, engage in sustainable activities, and stay in green accommodations.',
            icons: [faEnvelope, faCompass, faBicycle, faShip]
        }
    ];

    return (
        <div className="offers py-16">
            <div className="container mx-auto px-3">
                <div className="row">
                    <div className="col text-center mb-12">
                        <h2 className="section_title text-4xl font-bold text-gray-800">the best offers with rooms</h2>
                    </div>
                </div>
                <div className="row offers_items flex flex-wrap">
                    {offersData.map((offer, index) => (
                        <OfferItem
                            key={index}
                            image={offer.image}
                            name={offer.name}
                            price={offer.price}
                            rating={offer.rating}
                            text={offer.text}
                            icons={offer.icons}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default BestOffers;
