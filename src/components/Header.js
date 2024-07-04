//In Header.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faBars } from '@fortawesome/free-solid-svg-icons';
import { faPinterest, faFacebook, faTwitter, faDribbble, faBehance, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import AuthModal from './AuthModal';
import UserProfile from './UserProfile';

const Header = () => {
  const [searchActive, setSearchActive] = useState(false);
  const [menuActive, setMenuActive] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [profileOpen, setProfileOpen] = useState(false);

  const toggleSearch = () => {
    setSearchActive(!searchActive);
  };

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };

  const switchMode = () => {
    setIsLogin(!isLogin);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    setIsLoggedIn(false);
    setUsername('');
  };

  useEffect(() => {
    const token = localStorage.getItem('token');
    const savedUsername = localStorage.getItem('username');
    if (token && savedUsername) {
      setIsLoggedIn(true);
      setUsername(savedUsername);
    }

    const header = document.querySelector('.header');

    const setHeader = () => {
      if (window.innerWidth < 992) {
        if (window.scrollY > 100) {
          header.classList.add('scrolled');
        } else {
          header.classList.remove('scrolled');
        }
      } else {
        if (window.scrollY > 100) {
          header.classList.add('scrolled');
        } else {
          header.classList.remove('scrolled');
        }
      }
      if (window.innerWidth > 991 && menuActive) {
        setMenuActive(false);
      }
    };

    window.addEventListener('scroll', setHeader);
    window.addEventListener('resize', setHeader);

    return () => {
      window.removeEventListener('scroll', setHeader);
      window.removeEventListener('resize', setHeader);
    };
  }, [menuActive]);

  return (
    <header className="header">
      {/* Top Bar */}
      <div className="top_bar text-white ">
        <div className="container mx-auto">
          <div className="flex justify-between items-center">
            <div className="social">
              <ul className="social_list flex">
                <li className="social_list_item"><a href="#" className='text-white'><FontAwesomeIcon icon={faPinterest} /></a></li>
                <li className="social_list_item"><a href="#" className='text-white'><FontAwesomeIcon icon={faFacebook} /></a></li>
                <li className="social_list_item"><a href="#" className='text-white'><FontAwesomeIcon icon={faTwitter} /></a></li>
                <li className="social_list_item"><a href="#" className='text-white'><FontAwesomeIcon icon={faDribbble} /></a></li>
                <li className="social_list_item"><a href="#" className='text-white'><FontAwesomeIcon icon={faBehance} /></a></li>
                <li className="social_list_item"><a href="#" className='text-white'><FontAwesomeIcon icon={faLinkedin} /></a></li>
              </ul>
            </div>
            {/*User box*/}
            <div className="user_box">
              {isLoggedIn ? (
                <div className="flex items-center">
                  <div className="user_box_link text-white">Hello, {username}</div>
                  <div className="user_box_link ml-4"><a href="#" onClick={() => setProfileOpen(true)}>Profile</a></div>
                  <div className="user_box_link ml-4"><a href="#" onClick={handleLogout}>Logout</a></div>
                </div>
              ) : (
                <> 
                  <div className="flex items-center">
                    <div className="user_box_login user_box_link"><a href="#" onClick={() => { setIsLogin(true); toggleModal(); }}>login</a></div>
                    <div className="user_box_register user_box_link"><a href="#" onClick={() => { setIsLogin(false); toggleModal(); }}>register</a></div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="main_nav py-4">
        <div className="container mx-auto">
          <div className="flex justify-between items-center">
            <div className="logo_container ">
              <div className="logo text-white font-bold text-2xl"><a href="#">travelix</a></div>
            </div>
            <div className="main_nav_container">
              <ul className="main_nav_list flex">
                <li className="main_nav_item"><Link to="/">Home</Link></li>
                <li className="main_nav_item"><a href="#" className="text-white">about us</a></li>
                <li className="main_nav_item"><Link to="/offers">Offers</Link></li>
                <li className="main_nav_item"><a href="#" className="text-white">news</a></li>
              </ul>
            </div>
            <div className='flex gap-x-8'>
              <div className="content_search" onClick={toggleSearch}>
                <FontAwesomeIcon icon={faSearch} className="text-white cursor-pointer" />
              </div>
              <div className="hamburger" onClick={toggleMenu}>
                <FontAwesomeIcon icon={faBars} className="text-white cursor-pointer" />
              </div>
            </div>
          </div>
        </div>
      </nav>
      <div className={`menu bg-gray-900 py-8 ${menuActive ? 'active' : ''}`}> {/* Add 'active' class if menuActive is true */}
        {/* Menu content */}      
        <div className="menu_content flex flex-col items-center justify-center text-center">
          <div className="menu_close_container ">
            <div className="menu_close" onClick={toggleMenu}></div>
          </div>
          <div className="logo menu_logo mb-8"><a href="#"></a></div>
          {isLoggedIn ? (
            <div className="flex flex-col gap-y-6 items-center">
              <div className="menu_item inline-block relative font-[Beyond] text-4xl text-white font-normal">Hello, {username}</div>
              <div className="menu_item" onClick={toggleMenu}><a href="#" onClick={() => setProfileOpen(true)}>Profile</a></div>
              <div className="menu_item" onClick={toggleMenu}><a href="#" onClick={handleLogout} >Logout</a></div>
            </div>
          ) : (
            <>
              <div className="menu_item user_box_link" onClick={toggleMenu}><a href="#" onClick={() => { setIsLogin(true); toggleModal(); }}>login</a></div>
              <div className="menu_item user_box_link" onClick={toggleMenu}><a href="#" onClick={() => { setIsLogin(false); toggleModal(); }}>register</a></div>
            </>
          )}
          <ul className='mt-12'>
            <li className="menu_item" onClick={toggleMenu}><Link to="/">Home</Link></li>
            <li className="menu_item" onClick={toggleMenu}><a href="#" className="text-white">about us</a></li>
            <li className="menu_item" onClick={toggleMenu}><Link to="/offers">Offers</Link></li>
            <li className="menu_item" onClick={toggleMenu}><a href="#" className="text-white">news</a></li>
          </ul>
        </div>
      </div>
      {/* Conditional rendering of the search form */}
      {searchActive && (
        <div className="search_container">
          <div className="container">
            <form className="flex justify-center items-center">
              <input type="search" className="search_input mt-6" placeholder="Search" required="required" />
              <button type="submit" className="search_button mt-0">Submit</button>
            </form>
          </div>
        </div>
      )}

      {/* Auth Modal */}
      {modalOpen && <AuthModal isLogin={isLogin} toggleModal={toggleModal} switchMode={switchMode} />}

      {/* User Profile Modal */}
      {profileOpen && <UserProfile closeProfile={() => setProfileOpen(false)} />}
    </header>
  );
};

export default Header;
