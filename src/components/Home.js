import React from 'react';

const Home = () => {
  return (
    <div className="home">
      <div className="home_slider_container">
        <div className="home_slider">
          <div className='home_slider_item'>
            <div className="home_slider_background" style={{backgroundImage: "url(images/home_slider.jpg)"}}></div>
            <div className="home_slider_content text-center">
              <div className="home_slider_content_inner" data-animation-in="flipInX" data-animation-out="animate-out fadeOut">
                <h1>discover</h1>
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
