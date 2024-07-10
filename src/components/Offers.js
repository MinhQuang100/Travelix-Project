import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../styles/offers_styles.css'; 
import '../styles/offers_responsive.css';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Isotope from 'isotope-layout';

const OfferItem = ({ id, image, name, price, rating, text, icons, reviews }) => {
    const renderStars = (rating) => {
        let stars = [];
        for (let i = 0; i < 5; i++) {
            stars.push(
                <FontAwesomeIcon key={i} icon={faStar} className={`star scale-75 ${i < rating ? 'filled' : ''}`}/>
            );
        }
        return stars;
    };
    const ratingClass = `rating_${rating}`;
    return (
        <div className={`offers_item bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 shadow-2xl rounded-xl overflow-hidden mb-8 hover:scale-105 hover:shadow-lg ${ratingClass}`}>
            <div className="flex flex-col gap-x-20 md:flex-row p-6">
                <div className="w-full md:w-1/3 mb-4 md:mb-0 relative">
                    <div className="h-64 bg-center bg-cover rounded-lg shadow-md" style={{ backgroundImage: `url(${image})` }}></div>
                    <div className="absolute bottom-0 left-0 bg-black bg-opacity-70 text-white py-2 px-4 rounded-tr-lg">
                        <Link to={`/package/${id}`} className="text-lg uppercase font-semibold">{name}</Link>
                    </div>
                </div>
                <div className="w-full md:w-2/3 flex flex-col justify-between">
                    <div>
                        <div className="offers_price text-4xl font-extrabold text-white mb-2">${price}<span className="text-xl font-normal ml-2">per night</span></div>
                        <div className={`rating_r rating_r_${rating} offers_rating mb-4 flex items-center`} data-rating={rating}>
                            {renderStars(rating)}
                        </div>
                        <p className="text-white mb-4">{text}</p>
                        <div className="flex space-x-2 mb-4">
                            {icons.map((icon, index) => (
                                <img key={index} src={icon} alt="" className="w-10 h-10" />
                            ))}
                        </div>
                        <div className="inline-block bg-blue-500 text-lg font-semibold rounded-full py-2 px-6 transition duration-300 hover:bg-blue-700">
                            <Link to={`/package/${id}`} className='text-white'>Book Now</Link>
                        </div>
                    </div>
                    <div className="mt-4">
                        <div className="flex justify-between items-center">
                            <div className="font-bold text-xl text-white uppercase">{reviews.title}</div>
                            <div className="text-gray-200 uppercase">{reviews.subtitle}</div>
                        </div>
                        <div className="text-center text-2xl font-semibold mt-2 text-white">{reviews.rating}</div>
                    </div>
                </div>
            </div>
        </div>
    );
};
const Offers = () => {
    const [offers, setOffers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchOffers = async () => {
        try {
            const response = await axios.get('/api/travelPackages');
            setOffers(response.data);
            setLoading(false);
        } catch (error) {
            console.error('Error fetching travel packages:', error);
            setError(error.message);
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchOffers();
    }, []);

    useEffect(() => {
        const grid = new Isotope('.offers_grid', {
            itemSelector: '.offers_item',
            getSortData: {
                price: function (itemElement) {
                    const priceEle = itemElement.querySelector('.offers_price').textContent.replace('$', '');
                    return parseFloat(priceEle);
                },
                priceDesc: function (itemElement) {
                    const priceEle = itemElement.querySelector('.offers_price').textContent.replace('$', '');
                    return -parseFloat(priceEle); // negative value for descending
                },
                name: '.offer_name',
                stars: function (itemElement) {
                    const starsEle = itemElement.querySelector('.offers_rating');
                    const stars = starsEle.getAttribute('data-rating');
                    return stars;
                },
                starsDesc: function (itemElement) {
                    const starsEle = itemElement.querySelector('.offers_rating');
                    const stars = starsEle.getAttribute('data-rating');
                    return -stars; // negative value for descending
                }
            },
            animationOptions: {
                duration: 750,
                easing: 'linear',
                queue: false
            }
        });

        const sortBtns = document.querySelectorAll('.sort_btn');
        const filterBtns = document.querySelectorAll('.filter_btn');

        sortBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                const parent = btn.closest('li').querySelector('.sorting_text');
                if (parent) {
                    parent.textContent = btn.textContent;
                }
                const option = JSON.parse(btn.getAttribute('data-isotope-option'));
                grid.arrange(option);
            });
        });

        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                const parent = btn.closest('li').querySelector('.sorting_text');
                if (parent) {
                    parent.textContent = btn.textContent;
                }
                const filterValue = btn.getAttribute('data-filter');
                grid.arrange({ filter: filterValue });
            });
        });

    }, [offers]);

    if (loading) {
        return <div className='text-center text-3xl'>Loading...</div>;
    }

    if (error) {
        return (
            <div>
                <div className='text-center text-3xl'>Error: {error}</div>
            </div>
        );
    }
    return (    
        <div className="container mx-auto">
            <div className="row flex flex-wrap">
                <div className="col-lg-1 temp_col hidden lg:block"></div>
                <div className="col-lg-11 w-full lg:w-11/12">
                    <div className="offers_sorting_container text-center mb-8">
                        <ul className="offers_sorting flex justify-center space-x-6">
                            <li className="relative group">
                                <span className="sorting_text cursor-pointer">price</span>
                                <i className="fa fa-chevron-down ml-2"></i>
                                <ul className="absolute hidden group-hover:block bg-white shadow-md rounded mt-1">
                                    <li className="sort_btn cursor-pointer px-4 py-2" data-isotope-option='{ "sortBy": "original-order" }' data-parent=".price_sorting"><span>show all</span></li>
                                    <li className="sort_btn cursor-pointer px-4 py-2" data-isotope-option='{ "sortBy": "price" }' data-parent=".price_sorting"><span>ascending</span></li>
                                    <li className="sort_btn cursor-pointer px-4 py-2" data-isotope-option='{"sortBy": "priceDesc"}' data-parent=".price_sorting"><span>descending</span></li>
                                </ul>
                            </li>
                            <li className="relative group">
                                <span className="sorting_text cursor-pointer">location</span>
                                <i className="fa fa-chevron-down ml-2"></i>
                                <ul className="absolute hidden group-hover:block bg-white shadow-md rounded mt-1">
                                    <li className="sort_btn cursor-pointer px-4 py-2" data-isotope-option='{ "sortBy": "original-order" }'><span>show all</span></li>
                                    <li className="sort_btn cursor-pointer px-4 py-2" data-isotope-option='{ "sortBy": "name" }'><span>alphabetical</span></li>
                                </ul>
                            </li>
                            <li className="relative group">
                                <span className="sorting_text cursor-pointer">stars</span>
                                <i className="fa fa-chevron-down ml-2"></i>
                                <ul className="absolute hidden group-hover:block bg-white shadow-md rounded mt-1">
                                    <li className="filter_btn cursor-pointer px-4 py-2" data-filter="*"><span>show all</span></li>
                                    <li className="sort_btn cursor-pointer px-4 py-2" data-isotope-option='{ "sortBy": "stars" }'><span>ascending</span></li>
                                    <li className="sort_btn cursor-pointer px-4 py-2" data-isotope-option='{"sortBy": "starsDesc"}'><span>descending</span></li>
                                    <li className="filter_btn cursor-pointer px-4 py-2" data-filter=".rating_3"><span>3</span></li>
                                    <li className="filter_btn cursor-pointer px-4 py-2" data-filter=".rating_4"><span>4</span></li>
                                    <li className="filter_btn cursor-pointer px-4 py-2" data-filter=".rating_5"><span>5</span></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="col-lg-12 w-full">
                    <div className="offers_grid flex flex-wrap">
                        {offers.length > 0 ? (
                            offers.map((offer, index) => (
                                <OfferItem
                                    key={offer._id}id={offer._id} image={offer.image}
                                    name={offer.name} price={offer.price} rating={offer.rating}
                                    text={offer.text} icons={offer.icons} reviews={offer.reviews}/>
                            ))
                        ) : (
                            <div>No offers available</div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Offers;
