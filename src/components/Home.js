import React, { useState, useEffect } from 'react';

const Home = () => {
  const images = [
    "url(images/blog_background.jpg)",
    "url(images/about_background.jpg)",
    "url(images/contact_background.jpg)",
    "url(images/home_slider.jpg)"
  ];

  // State to hold the selected image URL
  const [backgroundImage, setBackgroundImage] = useState('');

  // Function to select a random image
  const selectRandomImage = () => {
    const randomIndex = Math.floor(Math.random() * images.length);
    return images[randomIndex];
  };

  // UseEffect to set a random image on component mount
  useEffect(() => {
    setBackgroundImage(selectRandomImage());
  }, []);

  return (
    <div className="home">
      <div className="home_slider_container">
        <div className="home_slider">
          <div className='home_slider_item'>
            <div className="home_slider_background" style={{backgroundImage: backgroundImage}}></div>
            <div className="home_slider_content text-center">
              <div className="home_slider_content_inner" data-animation-in="flipInX" data-animation-out="animate-out fadeOut">
                <h1>Travel Around</h1>
                <h1>the world</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;