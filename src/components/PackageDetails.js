import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import AuthModal from './AuthModal';

const PackageDetails = () => {
    const { id } = useParams();
    const [packageDetails, setPackageDetails] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [isCarouselVisible, setIsCarouselVisible] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [isBookingFormVisible, setIsBookingFormVisible] = useState(false);
    const [isLoginModalVisible, setIsLoginModalVisible] = useState(false);
    const [bookingDetails, setBookingDetails] = useState({ date: '', numberOfPeople: '' });
    const [isLogin, setIsLogin] = useState(true);

    useEffect(() => {
        const fetchPackageDetails = async () => {
            try {
                const response = await axios.get(`/api/travelPackages/${id}`);
                setPackageDetails(response.data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching package details:', error);
                setError(error.message);
                setLoading(false);
            }
        };

        fetchPackageDetails();
    }, [id]);

    const openCarousel = (index) => {
        setCurrentImageIndex(index);
        setIsCarouselVisible(true);
    };

    const closeCarousel = () => {
        setIsCarouselVisible(false);
    };

    const nextImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % packageDetails.additionalImages.length);
    };

    const prevImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex - 1 + packageDetails.additionalImages.length) % packageDetails.additionalImages.length);
    };

    const handleBookNowClick = () => {
        const token = localStorage.getItem('token');
        if (token) {
            setIsBookingFormVisible(true);
        } else {
            setIsLoginModalVisible(true);
        }
    };

    const handleBookingSubmit = async (e) => {
        e.preventDefault();
        const token = localStorage.getItem('token');
        if (!token) {
            setError('You need to be logged in to make a booking.');
            return;
        }
    
        try {
            const response = await axios.post('/api/bookings', {
                packageId: id, // Use packageId
                travelDate: bookingDetails.date, // Ensure these fields match your backend expectations
                numberOfTravelers: bookingDetails.numberOfPeople, 
                specialRequests: bookingDetails.specialRequests,
            }, {
                headers: {
                    'x-auth-token': token, 
                },
            });
            if (response.status === 201) {
                setIsBookingFormVisible(false);
                alert('Booking successful');
            } else {
                setError('Error making booking');
            }
        } catch (error) {
            console.error('Error making booking:', error);
            setError('Error making booking');
        }
    };    

    if (loading) {
        return <div className="flex justify-center items-center min-h-screen">Loading...</div>;
    }

    if (error) {
        return <div className="flex justify-center items-center min-h-screen text-red-500">Error: {error}</div>;
    }

    if (!packageDetails) {
        return <div className="flex justify-center items-center min-h-screen">No package details found.</div>;
    }

    return (
        <div>
            {!isCarouselVisible && (
                <div className="package-details bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 container mx-auto my-10 p-5 bg-white shadow-lg rounded-lg">
                    <div className="flex flex-col md:flex-row">
                        <div className="flex flex-col">
                            <div className="w-full">
                                <img
                                    src={packageDetails.image.startsWith('http') ? packageDetails.image : `${process.env.PUBLIC_URL}/${packageDetails.image}`}
                                    alt={packageDetails.name}
                                    className="w-full h-64 object-cover rounded-lg mb-5"
                                    onClick={() => openCarousel(0)}
                                />
                            </div>
                            <div className="additional-images grid grid-cols-3 gap-2 mb-5">
                                {packageDetails.additionalImages && packageDetails.additionalImages.map((image, index) => (
                                    <img
                                        key={index}
                                        src={image.startsWith('http') ? image : `${process.env.PUBLIC_URL}/${image}`}
                                        alt={`Additional Image ${index}`}
                                        className="h-32 w-full object-cover rounded-lg cursor-pointer"
                                        onClick={() => openCarousel(index)}/>
                                ))}
                            </div>
                        </div>
                        <div className="w-full md:w-1/2 md:pl-10">
                            <h1 className="text-4xl font-bold text-gray-800 mb-4 uppercase">{packageDetails.name}</h1>
                            <p className="text-gray-800 mb-4">{packageDetails.text}</p>
                            <div className="flex items-center mb-4">
                                <span className="text-yellow-500 text-2xl mr-2">{packageDetails.rating}★</span>
                                <span className="text-gray-600">({packageDetails.reviews.subtitle})</span>
                            </div>
                            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Inclusions</h2>
                            <div className="package-icons flex space-x-3 mb-4">
                                {packageDetails.icons && packageDetails.icons.map((icon, index) => (
                                    <img
                                        key={index}
                                        src={icon.startsWith('http') ? icon : `${process.env.PUBLIC_URL}/${icon}`}
                                        alt={`Icon ${index}`}
                                        className="h-10 w-10"/>
                                ))}
                            </div>
                            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Reviews</h2>
                            <div className="package-reviews bg-gray-100 p-4 rounded-lg">
                                <p className="text-gray-800 font-semibold">{packageDetails.reviews.title}</p>
                                <p className="text-gray-600">Rating: {packageDetails.reviews.rating}</p>
                            </div>
                            <div className="mt-6">
                                <button
                                    onClick={handleBookNowClick}
                                    className="relative inline-block px-6 py-3 text-lg font-medium text-white bg-[linear-gradient(to_right,#fa9e1b,#8d4fff)] rounded-lg hover:bg-blue-700"
                                >
                                    Book Now
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {isCarouselVisible && (
                <div className="carousel fixed inset-0 z-50 flex flex-col items-center justify-center bg-black">
                    <button className="close-button absolute top-5 right-5 text-white text-4xl" onClick={closeCarousel}>×</button>
                    <div className="carousel-content flex items-center justify-center w-full h-full">
                        <button className="carousel-button prev absolute left-10 text-white text-4xl" onClick={prevImage}>‹</button>
                        <img
                            className="max-w-full max-h-full object-contain"
                            src={packageDetails.additionalImages[currentImageIndex].startsWith('http') ? packageDetails.additionalImages[currentImageIndex] : `${process.env.PUBLIC_URL}/${packageDetails.additionalImages[currentImageIndex]}`}
                            alt={`Carousel Image ${currentImageIndex}`}
                        />
                        <button className="carousel-button next absolute right-10 text-white text-4xl" onClick={nextImage}>›</button>
                    </div>
                    <div className="carousel-thumbnails flex space-x-1 p-5 overflow-x-auto">
                        {packageDetails.additionalImages && packageDetails.additionalImages.map((image, index) => (
                            <img
                                key={index}
                                className={`cursor-pointer ${index === currentImageIndex ? 'ring-2 ring-white' : ''} max-w-none h-20 object-cover`}
                                src={image.startsWith('http') ? image : `${process.env.PUBLIC_URL}/${image}`}
                                alt={`Thumbnail ${index}`}
                                onClick={() => setCurrentImageIndex(index)}
                            />
                        ))}
                    </div>
                </div>
            )}

            {isBookingFormVisible && (
                <div className="booking-form fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white p-5 rounded-lg shadow-lg w-3/4 md:w-1/2 lg:w-1/3">
                        <h2 className="text-2xl font-bold mb-4">Booking Form</h2>
                        {error && <p className="text-red-500 mb-4">{error}</p>}
                        <form onSubmit={handleBookingSubmit}>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="date">
                                    Date
                                </label>
                                <input
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="date" type="date" value={bookingDetails.date}
                                    onChange={(e) => setBookingDetails({ ...bookingDetails, date: e.target.value })}
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="numberOfPeople">
                                    Number of People
                                </label>
                                <input
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="numberOfPeople" type="number" min="1" value={bookingDetails.numberOfPeople}
                                    onChange={(e) => setBookingDetails({ ...bookingDetails, numberOfPeople: e.target.value })}
                                />
                            </div>
                            <div className="flex items-center justify-between">
                                <button
                                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                    type="submit"
                                >
                                    Submit
                                </button>
                                <button
                                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                    type="button"
                                    onClick={() => setIsBookingFormVisible(false)}
                                >
                                    Cancel
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}

            {isLoginModalVisible && (
                <AuthModal
                    isLogin={isLogin}
                    toggleModal={() => setIsLoginModalVisible(false)}
                    switchMode={() => setIsLogin(!isLogin)}
                />
            )}
        </div>
    );
};

export default PackageDetails;
