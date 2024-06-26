// Offers.js
import React, { useEffect } from 'react';
import '../styles/offers_styles.css'; 
import '../styles/offers_responsive.css';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Isotope from 'isotope-layout';

const OfferItem = ({ image, name, price, rating, text, icons, reviews }) => {
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
		<div className={`offers_item rating_${rating} bg-white shadow-lg rounded-lg overflow-hidden mb-8`}>
			<div className="row flex flex-wrap p-6">
				<div className="col-lg-1 temp_col hidden lg:block"></div>
				<div className="col-lg-3 col-1680-4 w-full lg:w-1/4 mb-4 lg:mb-0">
					<div className="offers_image_container relative">
						<div className="offers_image_background h-64 bg-center bg-cover" style={{ backgroundImage: `url(${image})` }}></div>
						<div className="offer_name absolute bottom-0 left-0 bg-black bg-opacity-50 text-white">
							<a href="single_listing.html" className="text-lg font-bold">{name}</a>
						</div>
					</div>
				</div>
				<div className="col-lg-8 w-full lg:w-3/4">
					<div className="offers_content p-4">
						<div className="offers_price text-2xl font-bold mb-2">${price}<span className="text-sm font-normal"> per night</span></div>
						<div className={`rating_r rating_r_${rating} offers_rating mb-4`} data-rating={rating}>
                            {renderStars(rating)}
                        </div>
						<p className="offers_text mb-4">{text}</p>
						<div className="offers_icons mb-4">
							<ul className="offers_icons_list flex flex-wrap space-x-2">
								{icons.map((icon, index) => (
									<li className="offers_icons_item" key={index}><img src={icon} alt="" className="w-8 h-8" /></li>
								))}
							</ul>
						</div>
						<div className="button book_button inline-block bg-blue-600 text-whiterounded">
							<a href="#" className="relative inline-block">book<span></span><span></span><span></span></a>
						</div>
						<div className="offer_reviews mt-4">
							<div className="offer_reviews_content flex justify-between items-center">
								<div className="offer_reviews_title font-bold text-lg">{reviews.title}</div>
								<div className="offer_reviews_subtitle text-gray-600">{reviews.subtitle}</div>
							</div>
							<div className="offer_reviews_rating text-center text-lg font-semibold mt-2">{reviews.rating}</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

const offersData = [
	{
	  image: 'images/offer_1.jpg',
	  name: 'grand castle',
	  price: 70,
	  rating: 4,
	  text: 'Suspendisse potenti. In faucibus massa. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eu convallis tortor. Lorem ipsum dolor sit amet.',
	  icons: ['images/post.png', 'images/compass.png', 'images/bicycle.png', 'images/sailboat.png'],
	  reviews: { title: 'very good', subtitle: '100 reviews', rating: 8.1 }
	},
	{
	  image: 'images/offer_5.jpg',
	  name: 'star hotel',
	  price: 50,
	  rating: 3,
	  text: 'Suspendisse potenti. In faucibus massa. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eu convallis tortor. Lorem ipsum dolor sit amet.',
	  icons: ['images/post.png', 'images/compass.png', 'images/bicycle.png', 'images/sailboat.png'],
	  reviews: { title: 'very good', subtitle: '100 reviews', rating: 8.1 }
	},
	{
	  image: 'images/offer_6.jpg',
	  name: 'castle grand',
	  price: 110,
	  rating: 5,
	  text: 'Suspendisse potenti. In faucibus massa. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eu convallis tortor. Lorem ipsum dolor sit amet.',
	  icons: ['images/post.png', 'images/compass.png', 'images/bicycle.png', 'images/sailboat.png'],
	  reviews: { title: 'very good', subtitle: '100 reviews', rating: 8.1 }
	},
	{
	  image: 'images/offer_7.jpg',
	  name: 'hotel eurostar',
	  price: 50,
	  rating: 4,
	  text: 'Suspendisse potenti. In faucibus massa. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eu convallis tortor. Lorem ipsum dolor sit amet.',
	  icons: ['images/post.png', 'images/compass.png', 'images/bicycle.png', 'images/sailboat.png'],
	  reviews: { title: 'very good', subtitle: '100 reviews', rating: 8.1 }
	},
	{
	  image: 'images/offer_8.jpg',
	  name: 'grand castle',
	  price: 90,
	  rating: 3,
	  text: 'Suspendisse potenti. In faucibus massa. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eu convallis tortor. Lorem ipsum dolor sit amet.',
	  icons: ['images/post.png', 'images/compass.png', 'images/bicycle.png', 'images/sailboat.png'],
	  reviews: { title: 'very good', subtitle: '100 reviews', rating: 8.1 }
	},
];
  
const Offers = () => {
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

    }, []);
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
						{offersData.map((offer, index) => (
							<OfferItem key={index} {...offer} />
						))}
					</div>
				</div>
			</div>
		</div>
	);
};
export default Offers;
