import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const PackageDetails = () => {
    const { id } = useParams();
    const [packageDetails, setPackageDetails] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [isCarouselVisible, setIsCarouselVisible] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const fetchPackageDetails = async () => {
            try {
                const response = await axios.get(`/api/travelPackages/${id}`);
                console.log(response.data);
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
                <div className="package-details container mx-auto my-10 p-5 bg-white shadow-lg rounded-lg">
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
                                        onClick={() => openCarousel(index)}
                                    />
                                ))}
                            </div>
                        </div>
                        <div className="w-full md:w-1/2 md:pl-10">
                            <h1 className="text-4xl font-bold text-gray-800 mb-4 uppercase">{packageDetails.name}</h1>
                            <p className="text-gray-600 mb-4">{packageDetails.text}</p>
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
                                        className="h-10 w-10"
                                    />
                                ))}
                            </div>
                            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Reviews</h2>
                            <div className="package-reviews bg-gray-100 p-4 rounded-lg">
                                <p className="text-gray-800 font-semibold">{packageDetails.reviews.title}</p>
                                <p className="text-gray-600">Rating: {packageDetails.reviews.rating}</p>
                            </div>
                            <div className="mt-6">
                                <a
                                    href="#"
                                    className="relative inline-block px-6 py-3 text-lg font-medium text-white bg-[linear-gradient(to_right,#fa9e1b,#8d4fff)] rounded-lg hover:bg-blue-700"
                                >
                                    Book Now
                                </a>
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
        </div>
    );
};

export default PackageDetails;
