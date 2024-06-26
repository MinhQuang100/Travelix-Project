import React from 'react';
import Slider from 'react-slick';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const CTAItem = ({ title, text, rating }) => {
    const renderStars = (rating) => {
        let stars = [];
        for (let i = 0; i < 5; i++) {
            stars.push(
                <FontAwesomeIcon key={i} icon={faStar} className={`star p-1 ${i < rating ? 'filled' : ''}`}/>
            );
        }
        return stars;
    };

    return (
        <div className="cta_item text-center">
            <div className="cta_title">{title}</div>
            <div>
                {renderStars(rating)}
            </div>
            <p className="cta_text">{text}</p>
            <div className="button cta_button">
                <div className="button_bcg"></div>
                <a href="#">Book now<span></span><span></span><span></span></a>
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
            title: 'maldives deluxe package',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eu convallis tortor. Suspendisse potenti. In faucibus massa arcu, vitae cursus mi hendrerit nec. Proin bibendum, augue faucibus tincidunt ultrices, tortor augue gravida lectus, et efficitur enim justo vel ligula.',
            rating: 4,
        },
        {
            title: 'maldives deluxe package',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eu convallis tortor. Suspendisse potenti. In faucibus massa arcu, vitae cursus mi hendrerit nec. Proin bibendum, augue faucibus tincidunt ultrices, tortor augue gravida lectus, et efficitur enim justo vel ligula.',
            rating: 3,
        },
        {
            title: 'maldives deluxe package',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eu convallis tortor. Suspendisse potenti. In faucibus massa arcu, vitae cursus mi hendrerit nec. Proin bibendum, augue faucibus tincidunt ultrices, tortor augue gravida lectus, et efficitur enim justo vel ligula.',
            rating: 5,
        },
    ];

    return (
        <div className="cta">
            <div className="cta_background" style={{ backgroundImage: 'url(images/cta.jpg)' }}></div>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="cta_slider_container">
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
        </div>
    );
};

const PrevArrow = (props) => {
    const { onClick } = props;
    return (
        <div className='cta_slider_nav cta_slider_prev absolute top-1/2 transform -translate-y-1/2 left-4 z-10 cursor-pointer' onClick={onClick}>
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
        <div className="cta_slider_nav cta_slider_next absolute top-1/2 transform -translate-y-1/2 right-4 z-10 cursor-pointer" onClick={onClick}>
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
