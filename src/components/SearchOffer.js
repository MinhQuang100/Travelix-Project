import React, { useEffect } from 'react';
import '../styles/offers_styles.css'; 
import '../styles/offers_responsive.css';
import '../styles/bootstrap4/bootstrap.min.css';

const SearchPanel = ({ id }) => {
  if (id === 1) {
    return (
      <div className="search_panel active">
        <form action="#" id="search_form_1" className="search_panel_content d-flex flex-lg-row flex-column align-items-lg-center align-items-start justify-content-lg-between justify-content-start">
          <div className="search_item">
            <div>destination</div>
            <input type="text" className="destination search_input" required="required" />
          </div>
          <div className="search_item">
            <div>check in</div>
            <input type="text" className="check_in search_input" placeholder="YYYY-MM-DD" />
          </div>
          <div className="search_item">
            <div>check out</div>
            <input type="text" className="check_out search_input" placeholder="YYYY-MM-DD" />
          </div>
          <div className="search_item">
            <div>adults</div>
            <select name="adults" id="adults_1" className="dropdown_item_select search_input">
              <option>01</option>
              <option>02</option>
              <option>03</option>
            </select>
          </div>
          <div className="search_item">
            <div>children</div>
            <select name="children" id="children_1" className="dropdown_item_select search_input">
              <option>0</option>
              <option>01</option>
              <option>02</option>
              <option>03</option>
            </select>
          </div>
          <div className="extras">
            <ul className="search_extras clearfix">
              <li className="search_extras_item">
                <div className="clearfix">
                  <input type="checkbox" id="search_extras_1" className="search_extras_cb" />
                  <label htmlFor="search_extras_1">Pet Friendly</label>
                </div>
              </li>
              <li className="search_extras_item">
                <div className="clearfix">
                  <input type="checkbox" id="search_extras_2" className="search_extras_cb" />
                  <label htmlFor="search_extras_2">Car Parking</label>
                </div>
              </li>
              <li className="search_extras_item">
                <div className="clearfix">
                  <input type="checkbox" id="search_extras_3" className="search_extras_cb" />
                  <label htmlFor="search_extras_3">Wireless Internet</label>
                </div>
              </li>
              <li className="search_extras_item">
                <div className="clearfix">
                  <input type="checkbox" id="search_extras_4" className="search_extras_cb" />
                  <label htmlFor="search_extras_4">Reservations</label>
                </div>
              </li>
              <li className="search_extras_item">
                <div className="clearfix">
                  <input type="checkbox" id="search_extras_5" className="search_extras_cb" />
                  <label htmlFor="search_extras_5">Private Parking</label>
                </div>
              </li>
              <li className="search_extras_item">
                <div className="clearfix">
                  <input type="checkbox" id="search_extras_6" className="search_extras_cb" />
                  <label htmlFor="search_extras_6">Smoking Area</label>
                </div>
              </li>
              <li className="search_extras_item">
                <div className="clearfix">
                  <input type="checkbox" id="search_extras_7" className="search_extras_cb" />
                  <label htmlFor="search_extras_7">Wheelchair Accessible</label>
                </div>
              </li>
              <li className="search_extras_item">
                <div className="clearfix">
                  <input type="checkbox" id="search_extras_8" className="search_extras_cb" />
                  <label htmlFor="search_extras_8">Pool</label>
                </div>
              </li>
            </ul>
          </div>
          <button className="button search_button">search<span></span><span></span><span></span></button>
        </form>
      </div>
    );
  }
  
  return (
    <div className="search_panel">
      <form id={`search_form_${id}`} className="search_panel_content d-flex flex-lg-row flex-column align-items-lg-center align-items-start justify-content-lg-between justify-content-start">
        <div className="search_item">
          <div>destination</div>
          <input type="text" className="destination search_input" required={true} />
        </div>
        <div className="search_item">
          <div>check in</div>
          <input type="text" className="check_in search_input" placeholder="YYYY-MM-DD" />
        </div>
        <div className="search_item">
          <div>check out</div>
          <input type="text" className="check_out search_input" placeholder="YYYY-MM-DD" />
        </div>
        <div className="search_item">
          <div>adults</div>
          <select name="adults" id={`adults_${id}`} className="dropdown_item_select search_input">
            <option>01</option>
            <option>02</option>
            <option>03</option>
          </select>
        </div>
        <div className="search_item">
          <div>children</div>
          <select name="children" id={`children_${id}`} className="dropdown_item_select search_input">
            <option>0</option>
            <option>01</option>
            <option>02</option>
            <option>03</option>
          </select>
        </div>
        <button className="button search_button">search<span></span><span></span><span></span></button>
      </form>
    </div>
  );
};

const SearchOffer = () => {
  useEffect(() => {
    const initSearch = () => {
      const searchTabs = document.querySelectorAll('.search_tab');
      searchTabs.forEach((tab, index) => {
        tab.addEventListener('click', () => {
          // Remove active class from all search tabs
          searchTabs.forEach(tab => tab.classList.remove('active'));
          // Add active class to the clicked tab
          tab.classList.add('active');
          // Remove active class from all search panels
          const searchPanels = document.querySelectorAll('.search_panel');
          searchPanels.forEach(panel => panel.classList.remove('active'));
          // Add active class to the corresponding search panel
          searchPanels[index].classList.add('active');
        });
      });
    };
  
    initSearch();
    // Set the first search panel as active on initial load
    document.querySelector('.search_tab').click();
  }, []);

  return (
    <div id="search_offer" className="search">
      <div className="container fill_height">
        <div className="row fill_height">
          <div className="col fill_height">
            <div className="search_tabs_container">
              <div className="search_tabs d-flex flex-lg-row flex-column align-items-lg-center align-items-start justify-content-lg-between justify-content-start">
                <div className="search_tab active d-flex flex-row align-items-center justify-content-lg-center justify-content-start">
                  <img src="images/suitcase.png" alt="" />
                  <span>hotels</span>
                </div>
                <div className="search_tab d-flex flex-row align-items-center justify-content-lg-center justify-content-start">
                  <img src="images/bus.png" alt="" />
                  <span>car rentals</span>
                </div>
                <div className="search_tab d-flex flex-row align-items-center justify-content-lg-center justify-content-start">
                  <img src="images/departure.png" alt="" />
                  <span>flights</span>
                </div>
                <div className="search_tab d-flex flex-row align-items-center justify-content-lg-center justify-content-start">
                  <img src="images/island.png" alt="" />
                  <span>trips</span>
                </div>
                <div className="search_tab d-flex flex-row align-items-center justify-content-lg-center justify-content-start">
                  <img src="images/cruise.png" alt="" />
                  <span>cruises</span>
                </div>
                <div className="search_tab d-flex flex-row align-items-center justify-content-lg-center justify-content-start">
                  <img src="images/diving.png" alt="" />
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
};

export default SearchOffer;
