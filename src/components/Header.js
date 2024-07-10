//Header.js
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
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
  const [query, setQuery] = useState('');
  const navigate = useNavigate();
  
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

  const handleSearch = (e) => {
    e.preventDefault();
    if (query) {
      navigate(`/search?query=${query}`);
    }
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
    <header className="header fixed w-full bg-blue-500 z-12 transition-all duration-400">
      {/* Top Bar */}
      <div className="top_bar w-full h-9 bg-gradient-to-r from-blue-400 to-blue-300 transition-all duration-400">
        <div className="container mx-auto flex justify-between items-center h-full">
          <div className="social">
            <ul className="social_list flex space-x-3">
              <li className="mt-1"><a href="#" className='text-white'><FontAwesomeIcon icon={faPinterest} /></a></li>
              <li className="mt-1"><a href="#" className='text-white'><FontAwesomeIcon icon={faFacebook} /></a></li>
              <li className="mt-1"><a href="#" className='text-white'><FontAwesomeIcon icon={faTwitter} /></a></li>
              <li className="mt-1"><a href="#" className='text-white'><FontAwesomeIcon icon={faDribbble} /></a></li>
              <li className="mt-1"><a href="#" className='text-white'><FontAwesomeIcon icon={faBehance} /></a></li>
              <li className="mt-1"><a href="#" className='text-white'><FontAwesomeIcon icon={faLinkedin} /></a></li>
            </ul>
          </div>
          {/* User box */}
          <div className="user_box">
            {isLoggedIn ? (
              <div className="flex items-center space-x-4">
                <div className="text-white">Hello, {username}</div>
                <div className="text-white"><a href="#" onClick={() => setProfileOpen(true)}>Profile</a></div>
                <div className="text-white"><a href="#" onClick={handleLogout}>Logout</a></div>
              </div>
            ) : (
              <div className="flex items-center space-x-4">
                <div className="uppercase text-white"><a href="#" onClick={() => { setIsLogin(true); toggleModal(); }}>login</a></div>
                <div className="uppercase text-white"><a href="#" onClick={() => { setIsLogin(false); toggleModal(); }}>register</a></div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="main_nav py-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="logo_container">
            <div className="logo text-white font-bold text-2xl"><a href="#">travelix</a></div>
          </div>
          <div className="main_nav_container hidden lg:flex">
            <ul className="main_nav_list flex space-x-10">
              <li className="main_nav_item"><Link to="/" className="text-white uppercase">Home</Link></li>
              <li className="main_nav_item"><a href="#" className="text-white uppercase">about us</a></li>
              <li className="main_nav_item"><Link to="/offers" className="text-white uppercase">Offers</Link></li>
              <li className="main_nav_item"><a href="#" className="text-white uppercase">news</a></li>
            </ul>
          </div>
          <div className='flex space-x-8'>
            <div className="content_search cursor-pointer" onClick={toggleSearch}>
              <FontAwesomeIcon icon={faSearch} className="text-white" />
            </div>
            <div className="hamburger lg:hidden cursor-pointer" onClick={toggleMenu}>
              <FontAwesomeIcon icon={faBars} className="text-white" />
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
              <div className="menu_item " onClick={toggleMenu}><a href="#" onClick={() => { setIsLogin(true); toggleModal(); }}>login</a></div>
              <div className="menu_item " onClick={toggleMenu}><a href="#" onClick={() => { setIsLogin(false); toggleModal(); }}>register</a></div>
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
          <form id="search_form" className="search_form flex items-center" onSubmit={handleSearch}>
              <input
                type="search" className="search_input outline-none border-none p-4"
                placeholder="Search for offers" value={query}
                onChange={(e) => setQuery(e.target.value)}/>
              <button type="submit" className="bg-gradient-to-r from-yellow-400 to-purple-600 text-white font-bold p-3 rounded-full transition transform hover:scale-105">
                <FontAwesomeIcon icon={faSearch} className="text-white" />
              </button>
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

