import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSuitcase, faBus, faPlane, faShip, faUmbrellaBeach, faSwimmer } from '@fortawesome/free-solid-svg-icons';

const SearchPanel = ({ id }) => {
    return (
        <div className={`search_main_panel ${id === 1 ? 'block' : 'hidden'}`}>
            <form id={`search_main_form_${id}`} className="search_main_panel_content flex flex-col lg:flex-row items-start lg:items-center justify-between space-y-4 lg:space-y-0 w-full">
                <div className="search_main_item flex-1 lg:flex-none w-full lg:w-auto">
                    <label className="block text-white text-sm font-bold mb-2">Destination</label>
                    <input type="text" className="w-full h-12 px-4 py-2 border border-blue-500 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400" required />
                </div>
                <div className="search_main_item flex-1 lg:flex-none w-full lg:w-auto">
                    <label className="block text-white text-sm font-bold mb-2">Check In</label>
                    <input type="text" className="w-full h-12 px-4 py-2 border border-blue-500 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400" placeholder="YYYY-MM-DD" />
                </div>
                <div className="search_main_item flex-1 lg:flex-none w-full lg:w-auto">
                    <label className="block text-white text-sm font-bold mb-2">Check Out</label>
                    <input type="text" className="w-full h-12 px-4 py-2 border border-blue-500 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400" placeholder="YYYY-MM-DD" />
                </div>
                <div className="search_main_item flex-1 lg:flex-none w-full lg:w-auto">
                    <label className="block text-white text-sm font-bold mb-2">Adults</label>
                    <select name="adults" id={`adults_${id}`} className="dropdown_item_select w-full h-12 px-4 py-2 border border-blue-500 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400">
                        <option>01</option>
                        <option>02</option>
                        <option>03</option>
                    </select>
                </div>
                <div className="search_main_item flex-1 lg:flex-none w-full lg:w-auto">
                    <label className="block text-white text-sm font-bold mb-2">Children</label>
                    <select name="children" id={`children_${id}`} className="dropdown_item_select w-full h-12 px-4 py-2 border border-blue-500 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400">
                        <option>0</option>
                        <option>01</option>
                        <option>02</option>
                        <option>03</option>
                    </select>
                </div>
                <button className="bg-purple-700 text-white mt-4 uppercase font-bold py-3 px-6 rounded-md shadow-md hover:bg-purple-800 transition-transform transform-gpu active:scale-95">Search</button>
            </form>
        </div>
    );
}

const Search = () => {
    useEffect(() => {
        const initSearch = () => {
            const searchTabs = document.querySelectorAll('.search_main_tab');
            searchTabs.forEach((tab, index) => {
                tab.addEventListener('click', () => {
                    // Remove active class from all search tabs
                    searchTabs.forEach(tab => tab.classList.remove('active'));
                    // Add active class to the clicked tab
                    tab.classList.add('active');
                    // Hide all search panels
                    const searchPanels = document.querySelectorAll('.search_main_panel');
                    searchPanels.forEach(panel => panel.classList.add('hidden'));
                    // Show the corresponding search panel
                    searchPanels[index].classList.remove('hidden');
                });
            });
        };
        initSearch();
        // Set the first search panel as active on initial load
        document.querySelector('.search_main_tab').click();
    }, []);

    return (
        <div id="search_main" className="search_main bg-gradient-to-r from-blue-500 to-blue-300 py-6">
            <div className="container mx-auto h-full">
                <div className="row h-full flex items-center">
                    <div className="col w-full">
                        <div className="search_main_tabs_container relative">
                            <div className="search_main_tabs flex flex-col lg:flex-row justify-between items-center bg-white shadow-lg rounded-lg overflow-hidden my-8">
                                <div className="search_main_tab active flex flex-col lg:flex-row items-center justify-center w-full lg:w-auto p-4 cursor-pointer hover:bg-blue-400 transition-colors duration-300">
                                    <FontAwesomeIcon icon={faSuitcase} className="text-xl lg:text-3xl mb-2 lg:mb-0 lg:mr-2" />
                                    <span>Hotels</span>
                                </div>
                                <div className="search_main_tab flex flex-col lg:flex-row items-center justify-center w-full lg:w-auto p-4 cursor-pointer ho ver:bg-blue-400 transition-colors duration-300">
                                    <FontAwesomeIcon icon={faBus} className="text-xl lg:text-3xl mb-2 lg:mb-0 lg:mr-2" />
                                    <span>Car Rentals</span>
                                </div>
                                <div className="search_main_tab flex flex-col lg:flex-row items-center justify-center w-full lg:w-auto p-4 cursor-pointer hover:bg-blue-400 transition-colors duration-300">
                                    <FontAwesomeIcon icon={faPlane} className="text-xl lg:text-3xl mb-2 lg:mb-0 lg:mr-2" />
                                    <span>Flights</span>
                                </div>
                                <div className="search_main_tab flex flex-col lg:flex-row items-center justify-center w-full lg:w-auto p-4 cursor-pointer hover:bg-blue-400 transition-colors duration-300">
                                    <FontAwesomeIcon icon={faUmbrellaBeach} className="text-xl lg:text-3xl mb-2 lg:mb-0 lg:mr-2" />
                                    <span>Trips</span>
                                </div>
                                <div className="search_main_tab flex flex-col lg:flex-row items-center justify-center w-full lg:w-auto p-4 cursor-pointer hover:bg-blue-400 transition-colors duration-300">
                                    <FontAwesomeIcon icon={faShip} className="text-xl lg:text-3xl mb-2 lg:mb-0 lg:mr-2" />
                                    <span>Cruises</span>
                                </div>
                                <div className="search_main_tab flex flex-col lg:flex-row items-center justify-center w-full lg:w-auto p-4 cursor-pointer hover:bg-blue-400 transition-colors duration-300">
                                    <FontAwesomeIcon icon={faSwimmer} className="text-xl lg:text-3xl mb-2 lg:mb-0 lg:mr-2" />
                                    <span>Activities</span>
                                </div>
                            </div>
                        </div>
                        <SearchPanel id={1} />
                        <SearchPanel id={2} />
                        <SearchPanel id={3} />
                        <SearchPanel id={4} />
                        <SearchPanel id={5} />
                        <SearchPanel id={6} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Search;
