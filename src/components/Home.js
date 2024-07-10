import React, { useState, useEffect } from 'react';

const Home = () => {
  const images = [
    "url(images/blog_background.jpg)",
    "url(images/about_background.jpg)",
    "url(images/contact_background.jpg)",
    "url(images/home_slider.jpg)"
  ];

  const [backgroundImage, setBackgroundImage] = useState('');

  const selectRandomImage = () => {
    const randomIndex = Math.floor(Math.random() * images.length);
    return images[randomIndex];
  };

  useEffect(() => {
    setBackgroundImage(selectRandomImage());
  }, []);

  return (
    <div className="w-full h-screen relative bg-blue-800">
      <div className="absolute inset-0 w-full h-full z-10">
        <div className="w-full h-full">
          <div className="w-full h-full">
            <div className="absolute inset-0 bg-cover bg-center opacity-75" style={{ backgroundImage: backgroundImage }}></div>
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center">
              <div className="flex flex-col md:flex-row items-center gap-x-4 gap-y-4">
                <h1 className="font-beyond text-5xl md:text-6xl">Travel Around</h1>
                <img className="w-2/5 sm:w-1/4 h-auto mx-auto" src="/images/logo.png" alt="Logo"/>
                <h1 className="font-beyond text-5xl md:text-6xl">The World</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
