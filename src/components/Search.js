import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSuitcase, faBus, faPlane, faShip, faUmbrellaBeach, faSwimmer } from '@fortawesome/free-solid-svg-icons';

const SearchPanel = ({ id }) => {
    return (
        <div className="search_main_panel">
            <form id={`search_main_form_${id}`} className="search_main_panel_content d-flex flex-lg-row flex-column align-items-lg-center align-items-start justify-content-lg-between justify-content-start">
                <div className="search_main_item">
                    <div>destination</div>
                    <input type="text" className="destination search_main_input" required={true} />
                </div>
                <div className="search_main_item">
                    <div>check in</div>
                    <input type="text" className="check_in search_main_input" placeholder="YYYY-MM-DD" />
                </div>
                <div className="search_main_item">
                    <div>check out</div>
                    <input type="text" className="check_out search_main_input" placeholder="YYYY-MM-DD" />
                </div>
                <div className="search_main_item">
                    <div>adults</div>
                    <select name="adults" id={`adults_${id}`} className="dropdown_item_select search_main_input">
                        <option>01</option>
                        <option>02</option>
                        <option>03</option>
                    </select>
                </div>
                <div className="search_main_item">
                    <div>children</div>
                    <select name="children" id={`children_${id}`} className="dropdown_item_select search_main_input">
                        <option>0</option>
                        <option>01</option>
                        <option>02</option>
                        <option>03</option>
                    </select>
                </div>
                <button className="button search_main_button">search<span></span><span></span><span></span></button>
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
                    // Remove active class from all search panels
                    const searchPanels = document.querySelectorAll('.search_main_panel');
                    searchPanels.forEach(panel => panel.classList.remove('active'));
                    // Add active class to the corresponding search panel
                    searchPanels[index].classList.add('active');
                });
            });
        };
        initSearch();
        // Set the first search panel as active on initial load
        document.querySelector('.search_main_tab').click();
    }, []);
    return (
        <div id="search_main" className="search_main">
            <div className="container fill_height">
                <div className="row fill_height">
                    <div className="col fill_height">
                        <div className="search_main_tabs_container">
                            <div className="search_main_tabs d-flex flex-lg-row flex-column align-items-lg-center align-items-start justify-content-lg-between justify-content-start">
                                <div className="search_main_tab active d-flex flex-row align-items-center justify-content-lg-center justify-content-start">
                                    <FontAwesomeIcon icon={faSuitcase} className="text-3xl" />
                                    <span>hotels</span>
                                </div>
                                <div className="search_main_tab d-flex flex-row align-items-center justify-content-lg-center justify-content-start">
                                    <FontAwesomeIcon icon={faBus} className="text-3xl" />
                                    <span>car rentals</span>
                                </div>
                                <div className="search_main_tab d-flex flex-row align-items-center justify-content-lg-center justify-content-start">
                                    <FontAwesomeIcon icon={faPlane} className="text-3xl" />
                                    <span>flights</span>
                                </div>
                                <div className="search_main_tab d-flex flex-row align-items-center justify-content-lg-center justify-content-start">
                                    <FontAwesomeIcon icon={faUmbrellaBeach} className="text-3xl" />
                                    <span>trips</span>
                                </div>
                                <div className="search_main_tab d-flex flex-row align-items-center justify-content-lg-center justify-content-start">
                                    <FontAwesomeIcon icon={faShip} className="text-3xl" />
                                    <span>cruises</span>
                                </div>
                                <div className="search_main_tab d-flex flex-row align-items-center justify-content-lg-center justify-content-start">
                                    <FontAwesomeIcon icon={faSwimmer} className="text-3xl" />
                                    <span>activities</span>
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