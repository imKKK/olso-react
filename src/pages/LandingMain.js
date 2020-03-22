import React, { Component } from "react";
import QualityAssurance from "../assets/images/undraw_positive_attitude_xaae.svg";
import NearYou from "../assets/images/undraw_order_a_car_3tww.svg";
import YourNeeds from "../assets/images/undraw_heavy_box_agqi.svg";
import BookOnline from "../assets/images/undraw_chat_bot_kli5.svg";
import VerCustomers from "../assets/images/undraw_online_payments_luau.svg";
import Support from "../assets/images/undraw_active_support_6rwo.svg";
import ShareLink from "../assets/images/undraw_share_link_qtxe.svg";
import RentAnything from "../assets/images/Rent-Anything-olo-how.svg";
import RentThings from "../assets/images/Rent-things-olo-how.svg";
import TrustedLogo from "../assets/images/LandingMain/images.jfif";

class LandingMain extends Component {
  render() {
    return (
      <div className='main-wrapper'>
        {/* location popup */}
        <div className='olo-loc'>
          <div className='olo-loc-wrapper'>
            <div className='olo-pop-loc'>
              <div className='row'>
                <div className='col-xs-12 col-md-12 col-lg-12'>
                  <h2>Select Your City</h2>
                </div>
              </div>

              <div className='row-cities'>
                <div className='col-md-12 col-xs-12 col-lg-12'>
                  <input
                    type='text'
                    name=''
                    id=''
                    placeholder='Search Your City... '
                    value=''
                  />
                  <a href='#' className='search_icon'>
                    <i className='fas fa-search'></i>
                  </a>
                </div>
              </div>

              <div className='row row-cities'>
                <div className='col-xs-2 col-md-2 col-lg-2'>
                  <p>Ranchi</p>
                </div>
                <div className='col-xs-2 col-md-2 col-lg-2'>
                  <p>Bhubneswar</p>
                </div>
                <div className='col-xs-2 col-md-2 col-lg-2'>
                  <p>Patna</p>
                </div>
                <div className='col-xs-2 col-md-2 col-lg-2'>
                  <p>Dehradun</p>
                </div>
                <div className='col-xs-2 col-md-2 col-lg-2'>
                  <p>Kerala</p>
                </div>
                <div className='col-xs-2 col-md-2 col-lg-2'>
                  <p>Odisha</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* top search */}
        <div className='olo-hero'>
          <h1>Want to rent anything?</h1>
          <p>Rent anything you want at no cost, search below.</p>
          <div className='warpper'>
            <input
              className='radio'
              id='one'
              name='group'
              type='radio'
              defaultChecked
            />
            <input className='radio' id='two' name='group' type='radio' />
            <div className='tabs'>
              <label className='tab' id='one-tab' htmlFor='one'>
                Short Term
              </label>
              <label className='tab' id='two-tab' htmlFor='two'>
                Long Term
              </label>
            </div>
            <div className='panels'>
              <div className='panel' id='one-panel'>
                {/* Search */}
                <div className='panel-title' />
                <div className='row'>
                  <div className='col-xs-12 col-lg-3'>
                    <input
                      type='text'
                      name
                      placeholder='What are you looking for?'
                      id
                    />
                  </div>
                  <div className='col-xs-12 col-lg-3'>
                    {/* loaction select */}
                    <div className='dropdown' id='location-select'>
                      <input type="date" name="" id=""/>
                    </div>
                  </div>
                  <div className='col-xs-12 col-lg-3'>
                    <div className='dropdown' id='category-select'>
                      <button
                        className='btn btn-secondary dropdown-toggle'
                        type='button'
                        id='triggerId'
                        data-toggle='dropdown'
                        aria-haspopup='true'
                        aria-expanded='false'
                      >
                        Select Category
                      </button>
                      <div
                        className='dropdown-menu'
                        aria-labelledby='triggerId'
                      >
                        <a className='dropdown-item' href='#'>
                          Cars
                        </a>
                        <a className='dropdown-item' href='#'>
                          Bikes
                        </a>
                        <a className='dropdown-item' href='#'>
                          Toys
                        </a>
                        <a className='dropdown-item' href='#'>
                          Bikes
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className='col-xs-12 col-lg-3'>
                    <button
                      type='button'
                      id='hero-button'
                      className='btn btn-primary'
                    >
                      <i className='fas fa-search    ' /> Search
                    </button>
                  </div>
                </div>
              </div>
              <div className='panel' id='two-panel'>
                <div className='panel-title'></div>
                <div className='row'>
                  <div className='col-xs-12 col-lg-3'>
                    <input
                      type='text'
                      name
                      placeholder='What are you looking for?'
                      id
                    />
                  </div>
                  <div className='col-xs-12 col-lg-3'>
                    {/* loaction select */}
                    <div className='dropdown' id='location-select'>
                      <button
                        className='btn btn-secondary dropdown-toggle'
                        type='button'
                        id='triggerId'
                        data-toggle='dropdown'
                        aria-haspopup='true'
                        aria-expanded='false'
                      >
                        Select Location
                      </button>
                      <div
                        className='dropdown-menu'
                        aria-labelledby='triggerId'
                      >
                        <a className='dropdown-item' href='#'>
                          Ranchi
                        </a>
                        <a className='dropdown-item' href='#'>
                          Surat
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className='col-xs-12 col-lg-3'>
                    <div className='dropdown' id='category-select'>
                      <button
                        className='btn btn-secondary dropdown-toggle'
                        type='button'
                        id='triggerId'
                        data-toggle='dropdown'
                        aria-haspopup='true'
                        aria-expanded='false'
                      >
                        Select Category
                      </button>
                      <div
                        className='dropdown-menu'
                        aria-labelledby='triggerId'
                      >
                        <a className='dropdown-item' href='#'>
                          Cars
                        </a>
                        <a className='dropdown-item' href='#'>
                          Bikes
                        </a>
                        <a className='dropdown-item' href='#'>
                          Toys
                        </a>
                        <a className='dropdown-item' href='#'>
                          Bikes
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className='col-xs-12 col-lg-3'>
                    <button
                      type='button'
                      id='hero-button'
                      className='btn btn-primary'
                    >
                      <i className='fas fa-search    ' /> Search
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Category */}
        <div id='olo-category'>
          <div className='row'>
            <div className='col-xs-3 col-md-3 col-lg-2 '>
              <div className=' col-lg-12 col-xs-12 col-md-12'>
                <i class='fas fa-car    '></i>
                <p>Cars</p>
              </div>
            </div>
            <div className='col-xs-3 col-md-3 col-lg-2'>
              <div className=' col-lg-12 col-xs-12 col-md-12'>
                <i class='fas fa-motorcycle    '></i>
                <p>Bikes</p>
              </div>
            </div>
            <div className='col-xs-3 col-md-3 col-lg-2'>
              <div className=' col-lg-12 col-xs-12 col-md-12'>
                <i class='fas fa-table    '></i>
                <p>Furniture</p>
              </div>
            </div>
            <div className='col-xs-3 col-md-3 col-lg-2'>
              <div className=' col-lg-12 col-xs-12 col-md-12'>
                <i class='fas fa-camera    '></i>
                <p>Cameras</p>
              </div>
            </div>
            <div className='col-xs-3 col-md-3  col-lg-2'>
              <div className=' col-lg-12 col-xs-12 col-md-12'>
                <i class='fas fa-desktop'></i>
                <p>Tech</p>
              </div>
            </div>
            <div className='col-xs-3 col-md-3 col-lg-2'>
              <div className=' col-lg-12 col-xs-12 col-md-12'>
                <i class='fas fa-tags    '></i>
                <p>Offers %</p>
              </div>
            </div>
          </div>
        </div>
        {/* olo-how */}
        <div className='olo-how'>
          <div className='row'>
            <div className='col-lg-6 col-md-6 col-xs-6 olo-card'>
              <h2>Earn Renting Your Things!</h2>
              <p>
                Earn from things you don't really use. Furnitures, Cars, Bikes,
                Tech, etc. Get paid from everything you have.
              </p>
              <button type='button' className='btn btn-primary'>
                Learn more
              </button>
            </div>
            <div className='col-lg-6 order-first order-md-last order-lg-last col-md-6 col-xs-6 olo-img'>
              <img src={RentThings} alt='' />
            </div>
          </div>
          {/* second-olo-how */}
          <div className='row'>
            <div className='col-lg-6 col-md-6 col-xs-6 olo-img'>
              <img src={RentAnything} alt='' />
            </div>
            <div className='col-lg-6 col-md-6 col-xs-6 olo-card'>
              <h2>Rent Cheap Things!</h2>
              <p>
                Why buy when you can rent super new things at a reasaonable
                price. Buying seems to be costly affair, right? Rent it then!
              </p>
              <button type='button' className='btn btn-primary'>
                Learn more
              </button>
            </div>
          </div>
          </div>
          
        {/* olo-swiper */}
        <div id='olo-slider'>
          <div className='top'>
            <h2>Featured Content!</h2>
            <hr />
          </div>
          <div className='swiper-container hero-slider '>
            {/* <!-- Additional required wrapper --> */}
            <div className='swiper-wrapper '>
              {/* <!-- Slides --> */}
              <div className='swiper-slide'>
                <img
                  src='https://olsorental.com//uploads/items/Maruti-Ciaz-Review.jpg'
                  alt=''
                />
                <div className='caption'>
                  <h4> Maruti Suzuki Ciaz </h4>
                  <p>Click here to see the details</p>
                </div>
              </div>
              <div className='swiper-slide'>
                <img
                  src='https://olsorental.com//uploads/items/Eon-Hyundai-car.jpg'
                  alt=''
                />
                <div className='caption'>
                  <h4> Maruti Suzuki Ciaz </h4>
                  <p>Click here to see the details</p>
                </div>
              </div>
              <div className='swiper-slide'>
                <img
                  src='https://olsorental.com//uploads/items/volkswagen-ameo-148681.jpg'
                  alt=''
                />
                <div className='caption'>
                  <h4> Volkswagen Ameo Self-Drive </h4>
                  <p>Click here to see the details</p>
                </div>
              </div>
            </div>
            {/* If we need pagination  */}
            <div className='swiper-pagination'></div>

            {/* If we need navigation buttons */}
            <div className='swiper-button-next'></div>
            <div className='swiper-button-prev'></div>

            {/* If we need scrollbar */}
            <div className='swiper-scrollbar'></div>
          </div>
        </div>
        {/* olo-advants */}
        <div className='olo-advants'>
          <div id='olo-advants-top'>
            <h2>More about us!</h2>
            <hr />
          </div>
          <div className='row-main'>
            <div className='col-4 '>
              <div className='row'>
                <div className='col-lg-12'>
                  <img src={QualityAssurance} alt='' />
                </div>
                <div className='col-lg-12'>
                  <h4>Quality Assurance</h4>
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Nesciunt, saepe labore blanditiis omnis. Beatae esse dol
                  </p>
                </div>
              </div>
            </div>
            <div className='col-4  '>
              <div className='row'>
                <div className='col-lg-12'>
                  <img src={YourNeeds} alt='' />
                </div>
                <div className='col-lg-12'>
                  <h4>Everything You Need</h4>
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Nesciunt, saepe labore blanditiis omnis. Beatae esse dol
                  </p>
                </div>
              </div>
            </div>
            <div className='col-4  '>
              <div className='row'>
                <div className='col-lg-12'>
                  <img src={NearYou} alt='' />
                </div>
                <div className='col-lg-12'>
                  <h4>Everything Near You</h4>
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Nesciunt, saepe labore blanditiis omnis. Beatae esse dol
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* Second Row */}
          <div className='row-main'>
            <div className='col-4  '>
              <div className='row'>
                <div className='col-lg-12'>
                  <img src={BookOnline} alt='' />
                </div>
                <div className='col-lg-12'>
                  <h4>Book Online</h4>
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Nesciunt, saepe labore blanditiis omnis. Beatae esse dol
                  </p>
                </div>
              </div>
            </div>
            <div className='col-4  '>
              <div className='row'>
                <div className='col-lg-12'>
                  <img src={VerCustomers} alt='' />
                </div>
                <div className='col-lg-12'>
                  <h4>Verified Customers</h4>

                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Nesciunt, saepe labore blanditiis omnis. Beatae esse dol
                  </p>
                </div>
              </div>
            </div>
            <div className='col-4  '>
              <div className='row'>
                <div className='col-lg-12'>
                  <img src={Support} alt='' />
                </div>
                <div className='col-lg-12'>
                  <h4>Great Customer Support</h4>
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Nesciunt, saepe labore blanditiis omnis. Beatae esse dol
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* second row end */}
        </div>
        {/* olo-category-wise */}
        <div className='olo-cats'>
          <div className='row'>
            <div className='col-lg-5'>
              <div className='row'>
                <div className='col-lg-12'>
                  <img src={ShareLink} alt='' />
                </div>
                <div className='col-lg-12 .top-header'>
                  <h2>What people think about us.</h2>
                </div>
              </div>
            </div>
            <div className='col-lg-7'>
              <div className='olo-cats-slider swiper-container'>
                <div className='swiper-wrapper '>
                  <div className='swiper-slide'>Slide 1</div>
                  <div className='swiper-slide'>Slide 2</div>
                  <div className='swiper-slide'>Slide 3</div>
                  <div className='swiper-slide'>Slide 4</div>
                  <div className='swiper-slide'>Slide 5</div>
                  <div className='swiper-slide'>Slide 6</div>
                  <div className='swiper-slide'>Slide 7</div>
                  <div className='swiper-slide'>Slide 8</div>
                  <div className='swiper-slide'>Slide 9</div>
                  <div className='swiper-slide'>Slide 10</div>
                </div>

                <div className='olo-next-style2'>
                  <p>&#8592;</p>
                </div>
                <div className='olo-prev-style2'>
                  <p> &#8594;</p>
                </div>

                {/* If we need scrollbar */}
                <div className='swiper-scrollbar'></div>

                <div className='olo-cats-pagination'></div>
              </div>
            </div>
          </div>
        </div>

        {/* Trusted by section */}
        <div className='olo-trusted'>
          <h2>Trusted & Supported By</h2>
          <div className='wrapper'>
          {/* Swiper */}
          <div class='swiper-container olo-trusted'>
            <div class='swiper-wrapper'>
              <div class='swiper-slide'>
                <img src={TrustedLogo} alt='' />
              </div>
              <div class='swiper-slide'>
                <img src={TrustedLogo} alt='' />
              </div>
              <div class='swiper-slide'>
                <img src={TrustedLogo} alt='' />
              </div>
              <div class='swiper-slide'>
                <img src={TrustedLogo} alt='' />
              </div>
              <div class='swiper-slide'>
                <img src={TrustedLogo} alt='' />
              </div>
              
            </div>

           
          </div>
          </div>
          </div>
      </div>
    );
  }
}

export default LandingMain;
