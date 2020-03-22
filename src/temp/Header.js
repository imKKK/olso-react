import React from "react";
import OlsoLogo from '../components/OlsoLogo'
import OlsoLogoImage from '../assets/images/olso_logo.png'

class Header extends React.Component {

  render() {
    return (
      <header className="scroll-hide">
        {}
        <div className="site-navbar-wrap v2">
          <div className="container-fluid">
            <div className="site-navbar">
              <div className="row align-items-center">
                <div className="col-md-4 col-6">
                  <a className="navbar-brand" href="#">
                    <img src={OlsoLogoImage}/>
                  </a>
                </div>
                <div className="col-md-8 col-6">
                  <nav className="site-navigation float-left">
                    <div className="container">
                      <ul className="site-menu js-clone-nav d-none d-lg-block">
                        <li className="has-children">
                          <a href="#">Home</a>
                          <ul className="dropdown">
                            <li>
                              <a href="home-v1.html">Home Tab</a>
                            </li>
                            <li>
                              <a href="home-v2.html">Home Hero</a>
                            </li>
                            <li>
                              <a href="home-v3.html">Home Video</a>
                            </li>
                            <li>
                              <a href="home-v4.html">Home parallax</a>
                            </li>
                            <li>
                              <a href="home-v5.html">Home Classic</a>
                            </li>
                            <li>
                              <a href="home-v6.html">Home Map</a>
                            </li>
                            <li>
                              <a href="home-v7.html">Home Slider</a>
                            </li>
                            <li>
                              <a href="home-v8.html">Home Video Fullscreen</a>
                            </li>
                            <li>
                              <a href="home-v9.html">Home Hero Fullscreen</a>
                            </li>
                            <li>
                              <a href="home-v10.html">Home Map Fullscreen</a>
                            </li>
                          </ul>
                        </li>
                        <li className="has-children">
                          <a href="#">Listings</a>
                          <ul className="dropdown">
                            <li className="has-children">
                              <a href="#">List Layout</a>
                              <ul className="dropdown sub-menu">
                                <li>
                                  <a href="list-fullwidth.html">Full Width</a>
                                </li>
                                <li>
                                  <a href="list-fullwidth-map.html">
                                    Fullwidth with map
                                  </a>
                                </li>
                                <li>
                                  <a href="list-left-sidebar.html">
                                    Left Sidebar
                                  </a>
                                </li>
                                <li>
                                  <a href="list-right-sidebar.html">
                                    Right Sidebar
                                  </a>
                                </li>
                              </ul>
                            </li>
                            <li className="has-children">
                              <a href="#">Grid Layout</a>
                              <ul className="dropdown sub-menu">
                                <li>
                                  <a href="grid-fullwidth.html">Full Width</a>
                                </li>
                                <li>
                                  <a href="grid-fullwidth-map.html">
                                    Fullwidth with map
                                  </a>
                                </li>
                                <li>
                                  <a href="grid-two-column.html">
                                    Grid two column
                                  </a>
                                </li>
                                <li>
                                  <a href="grid-left-sidebar.html">
                                    Left Sidebar
                                  </a>
                                </li>
                                <li>
                                  <a href="grid-right-sidebar.html">
                                    Right Sidebar
                                  </a>
                                </li>
                              </ul>
                            </li>
                            <li className="has-children">
                              <a href="#">Map sidebar Layout</a>
                              <ul className="dropdown sub-menu">
                                <li>
                                  <a href="list-left-sidemap.html">
                                    List Left sidemap
                                  </a>
                                </li>
                                <li>
                                  <a href="list-right-sidemap.html">
                                    List Right sidemap
                                  </a>
                                </li>
                                <li>
                                  <a href="grid-left-sidemap.html">
                                    grid Left sidemap
                                  </a>
                                </li>
                                <li>
                                  <a href="grid-right-sidemap.html">
                                    grid Right sidemap
                                  </a>
                                </li>
                                <li>
                                  <a href="grid-search-half-map.html">
                                    advanced search
                                  </a>
                                </li>
                              </ul>
                            </li>
                            <li className="has-children">
                              <a href="#">OpenStreet Map</a>
                              <ul className="dropdown sub-menu">
                                <li>
                                  <a href="grid-fullwidth-leaflet-map.html">
                                    Grid Fullwidth
                                  </a>
                                </li>
                                <li>
                                  <a href="list-fullwidth-leaflet-map.html">
                                    List FullWidth
                                  </a>
                                </li>
                                <li>
                                  <a href="grid-left-leaflet-sidemap.html">
                                    Grid Left Sidemap
                                  </a>
                                </li>
                                <li>
                                  <a href="list-left-leaflet-sidemap.html">
                                    List Left Sidemap
                                  </a>
                                </li>
                                <li>
                                  <a href="grid-right-leaflet-sidemap.html">
                                    Grid Right Sidemap
                                  </a>
                                </li>
                                <li>
                                  <a href="list-right-leaflet-sidemap.html">
                                    List Right Sidemap
                                  </a>
                                </li>
                                <li>
                                  <a href="grid-search-half-leaflet-map.html">
                                    Advance Map Search
                                  </a>
                                </li>
                              </ul>
                            </li>
                            <li className="has-children">
                              <a href="#">Category Listings</a>
                              <ul className="dropdown sub-menu">
                                <li>
                                  <a href="all-categories.html">All Category</a>
                                </li>
                                <li>
                                  <a href="all-locations.html">All Locations</a>
                                </li>
                              </ul>
                            </li>
                            <li className="has-children">
                              <a href="#">Listing Details</a>
                              <ul className="dropdown sub-menu">
                                <li>
                                  <a href="single-listing-one.html">
                                    Single Listing one
                                  </a>
                                </li>
                                <li>
                                  <a href="single-listing-two.html">
                                    Single Listing two
                                  </a>
                                </li>
                                <li>
                                  <a href="single-listing-three.html">
                                    Single Listing three
                                  </a>
                                </li>
                                <li>
                                  <a href="single-listing-four.html">
                                    Single Listing four
                                  </a>
                                </li>
                                <li>
                                  <a href="single-listing-five.html">
                                    Single Listing five
                                  </a>
                                </li>
                              </ul>
                            </li>
                          </ul>
                        </li>
                        <li className="has-children">
                          <a href="#">Pages</a>
                          <ul className="dropdown">
                            <li>
                              <a href="about.html">About us</a>
                            </li>
                            <li>
                              <a href="contact.html">Contact us</a>
                            </li>
                            <li className="has-children">
                              <a href="#">News Layout</a>
                              <ul className="dropdown sub-menu">
                                <li>
                                  <a href="news-left-sidebar.html">
                                    News Left sidebar
                                  </a>
                                </li>
                                <li>
                                  <a href="news-right-sidebar.html">
                                    News right sidebar
                                  </a>
                                </li>
                                <li>
                                  <a href="news-without-sidebar.html">
                                    News without sidebar
                                  </a>
                                </li>
                              </ul>
                            </li>
                            <li className="has-children">
                              <a href="#">Single News Layout</a>
                              <ul className="dropdown sub-menu">
                                <li>
                                  <a href="single-news-one.html">
                                    Single News one
                                  </a>
                                </li>
                                <li>
                                  <a href="single-news-two.html">
                                    Single News two
                                  </a>
                                </li>
                                <li>
                                  <a href="single-news-three.html">
                                    Single News three
                                  </a>
                                </li>
                              </ul>
                            </li>
                            <li>
                              <a href="404-page.html">404 error</a>
                            </li>
                            <li>
                              <a href="add-listing.html">Add Listing</a>
                            </li>
                            <li>
                              <a href="booking.html">Booking Page</a>
                            </li>
                            <li>
                              <a href="booking-confirmation.html">
                                Booking Confirmation
                              </a>
                            </li>
                            <li>
                              <a href="login.html">Login</a>
                            </li>
                            <li>
                              <a href="pricing-table.html">Pricing Table</a>
                            </li>
                            <li>
                              <a href="user-profile.html">User profile</a>
                            </li>
                            <li>
                              <a href="faq.html">FAQ</a>
                            </li>
                            <li>
                              <a href="invoice.html">invoice</a>
                            </li>
                          </ul>
                        </li>
                        <li className="has-children">
                          <a href="#">User Panel</a>
                          <ul className="dropdown">
                            <li>
                              <a href="db.html">Dashboard</a>
                            </li>
                            <li>
                              <a href="db-my-listing.html">My Listings</a>
                            </li>
                            <li>
                              <a href="db-bookings.html">Bookings</a>
                            </li>
                            <li>
                              <a href="db-messages.html">Inbox</a>
                            </li>
                            <li>
                              <a href="db-favourites.html">Favourite Listing</a>
                            </li>
                            <li>
                              <a href="db-add-listing.html">Add Listing</a>
                            </li>
                            <li>
                              <a href="db-recieve-reviews.html">Reviews</a>
                            </li>
                            <li>
                              <a href="db-my-profile.html">User Profile</a>
                            </li>
                            <li>
                              <a href="db-invoices.html">Invoices </a>
                            </li>
                          </ul>
                        </li>
                        <li className="d-lg-none">
                          <a className="btn v1" href="add-listing.html">
                            Add Listing <i className="ion-plus-round" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </nav>
                  <div className="d-lg-none sm-right">
                    <a href="#" className="mobile-bar js-menu-toggle">
                      <span className="ion-android-menu" />
                    </a>
                  </div>
                  <div className="add-list float-right">
                    <a className="btn v8" href="add-listing.html">
                      Add Listing <i className="ion-plus-round" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {}
            <div className="site-mobile-menu">
              <div className="site-mobile-menu-header">
                <div className="site-mobile-menu-close  js-menu-toggle">
                  <span className="ion-ios-close-empty" />
                </div>
              </div>
              <div className="site-mobile-menu-body" />
            </div>
            {}
          </div>
        </div>
        {}
      </header>
    );
  }
}

export default Header;
