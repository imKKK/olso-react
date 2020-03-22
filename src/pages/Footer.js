import React from "react";

class Footer extends React.Component {
  render() {
    return (
      <div className="footer-wrapper no-pad-tb v2">
        <div className="footer-top-area section-padding">
          <div className="container">
            <div className="row nav-folderized">
              <div className="col-lg-3 col-md-12">
                <div className="footer-logo">
                  <a href="index.html">
                    {" "}
                    <img src="images/logo-black.png" alt="logo" />
                  </a>
                  <div className="company-desc">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Distinctio excepturi nam totam sequi, ipsam consequatur
                      repudiandae libero illum.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-12">
                <div className="footer-content nav">
                  <h2 className="title">Helpful Links</h2>
                  <ul className="list">
                    <li>
                      <a className="link-hov style2" href="#">
                        Login
                      </a>
                    </li>
                    <li>
                      <a className="link-hov style2" href="#">
                        My Account
                      </a>
                    </li>
                    <li>
                      <a className="link-hov style2" href="#">
                        Add Listing
                      </a>
                    </li>
                    <li>
                      <a className="link-hov style2" href="#">
                        Privacy policy
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-md-12">
                <div className="footer-content nav">
                  <h2 className="title">Category</h2>
                  <ul className="list">
                    <li>
                      <a className="link-hov style2" href="#">
                        Shop
                      </a>
                    </li>
                    <li>
                      <a className="link-hov style2" href="#">
                        Travel
                      </a>
                    </li>
                    <li>
                      <a className="link-hov style2" href="#">
                        Sport
                      </a>
                    </li>
                    <li>
                      <a className="link-hov style2" href="#">
                        Restaurant
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-md-12">
                <div className="footer-content nav">
                  <h2 className="title">Contact us</h2>
                  <ul className="list footer-list">
                    <li>
                      <div className="contact-info">
                        <div className="icon">
                          <i className="ion-ios-location" />
                        </div>
                        <div className="text">13th North Ave, Florida, USA</div>
                      </div>
                    </li>
                    <li>
                      <div className="contact-info">
                        <div className="icon">
                          <i className="ion-email" />
                        </div>
                        <div className="text">
                          <a href="#">info@listagram.com</a>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="contact-info">
                        <div className="icon">
                          <i className="ion-ios-telephone" />
                        </div>
                        <div className="text">+44 078 767 595</div>
                      </div>
                    </li>
                  </ul>
                  <ul className="social-buttons style2">
                    <li>
                      <a href="#">
                        <i className="ion-social-facebook" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="ion-social-twitter" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="ion-social-pinterest" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="ion-social-youtube" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="ion-social-dribbble" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom-area">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-6">
                <div className="payment-method">
                  <img src="images/payment/payment-1.png" alt="..." />
                  <img src="images/payment/payment-2.png" alt="..." />
                  <img src="images/payment/payment-3.png" alt="..." />
                </div>
              </div>
              <div className="col-md-6 text-right sm-left">
                <ul className="additional-link">
                  <li>
                    <a href="#">Terms & Condition</a>
                  </li>
                  <li>
                    <a href="#">Privacy Policy</a>
                  </li>
                  <li>
                    <a href="login.html">Login</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
