import React, { Component } from "react";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import FormCheck from "react-bootstrap/FormCheck";
import "./CSS/SingleProduct.css";
import PropTypes from "prop-types";

class SingleProduct extends Component {
  state = {
    isUserLoggedIn: false,
    title: "Title of the product goes here like this write it here ",
    titleExtended: "This is an extended title of the product",
    seller: {
      name: "Minzal",
      link: "#Seller",
      description:
        "I'm Raj from this state and this group and this is my decription"
    },
    product: {
      tags: [
        {
          name: "greate",
          tag_url: "#"
        },
        {
          name: "greate",
          tag_url: "#"
        },
        {
          name: "greate",
          tag_url: "#"
        },
        {
          name: "greate",
          tag_url: "#"
        }
      ],
      rating: "29,000",
      price: "2000",
      price_week: "xxxxx",
      price_month: "xxxxx",
      description:
        "This is description of this product, lorem this is description of this product, lorem THis is description of this product, lorem THis is description of this product, lorem THis is description of this product, lorem THis is description of this product, lorem",
      summary: "This is the summary of the product",
      landmark: "Kanta Toli, Ranchi",
      availability: true,
      unavailable_date: " 27th Feb"
    }
  };

  // static propTypes = {
  //     title = PropTypes.string.isRequired,
  // }

  render() {
    return (
      <div className="single-product-main-wrapper">
        <Row>
          <Col lg="8" className="top-carousel">
            {/* Product Header */}
            <div className="header-title">
              <h1>{this.state.titleExtended}</h1>
            </div>
            <div className="header-labels">
              <p className="top-details">
                by{" "}
                <a href={this.state.seller.link} id="sellers-name">
                  {this.state.seller.name}
                </a>
                {"     "}|
              </p>
              <p className="top-details top-products-rating">
                {" "}
                <a href="#LinkToRatingSection">
                  {this.state.product.rating} Ratings
                </a>{" "}
                |
              </p>
              <p className="landmark top-details">
                <i class="fas fa-map-marker-alt   "></i>{" "}
                {this.state.product.landmark}
              </p>
            </div>

            {/* Product Header Ends */}
            <div id="gallery" className="list-details-section">
              {/*Carousel Wrapper*/}
              <div
                id="carousel-thumb"
                className="carousel slide carousel-fade carousel-thumbnails list-gallery"
                data-ride="carousel"
              >
                {/*Slides*/}
                <div className="carousel-inner" role="listbox">
                  <div className="carousel-item active">
                    <img
                      className="d-block w-100"
                      src="https://cdn.pocket-lint.com/r/s/1200x/assets/images/149041-cameras-review-review-canon-eos-90d-review-image1-y948ezej2c.jpg"
                      alt="slide"
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      className="d-block w-100"
                      src="https://cnet3.cbsistatic.com/img/B1vIKficjJiJ8WWc6DKFvW7XVok=/980x551/2016/09/28/403906f4-00eb-4c5f-8234-91a2db8e78c7/01-nikon-d3400.jpg"
                      alt="slide"
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      className="d-block w-100"
                      src="https://cdn.pocket-lint.com/r/s/1200x/assets/images/149041-cameras-review-review-canon-eos-90d-review-image1-y948ezej2c.jpg"
                      alt="slide"
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      className="d-block w-100"
                      src="images/single-listing/gallery-4.jpg"
                      alt="slide"
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      className="d-block w-100"
                      src="https://cdn.pocket-lint.com/r/s/1200x/assets/images/149041-cameras-review-review-canon-eos-90d-review-image1-y948ezej2c.jpg"
                      alt="slide"
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      className="d-block w-100"
                      src="https://cdn.pocket-lint.com/r/s/1200x/assets/images/149041-cameras-review-review-canon-eos-90d-review-image1-y948ezej2c.jpg"
                      alt="slide"
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      className="d-block w-100"
                      src="https://cdn.pocket-lint.com/r/s/1200x/assets/images/149041-cameras-review-review-canon-eos-90d-review-image1-y948ezej2c.jpg"
                      alt="slide"
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      className="d-block w-100"
                      src="https://cdn.pocket-lint.com/r/s/1200x/assets/images/149041-cameras-review-review-canon-eos-90d-review-image1-y948ezej2c.jpg"
                      alt="slide"
                    />
                  </div>
                </div>
                {/*Controls starts*/}
                <a
                  className="carousel-control-prev"
                  href="#carousel-thumb"
                  role="button"
                  data-slide="prev"
                >
                  <span className="ion-arrow-left-c" aria-hidden="true" />
                  <span className="sr-only">Previous</span>
                </a>
                <a
                  className="carousel-control-next"
                  href="#carousel-thumb"
                  role="button"
                  data-slide="next"
                >
                  <span className="ion-arrow-right-c" aria-hidden="true" />
                  <span className="sr-only">Next</span>
                </a>
                {/*Controls ends*/}
                <ol className="carousel-indicators  list-gallery-thumb">
                  <li data-target="#carousel-thumb" data-slide-to={0}>
                    <img
                      className="img-fluid d-block w-100"
                      src="https://cdn.pocket-lint.com/r/s/1200x/assets/images/149041-cameras-review-review-canon-eos-90d-review-image1-y948ezej2c.jpg"
                      alt="..."
                    />
                  </li>
                  <li data-target="#carousel-thumb" data-slide-to={1}>
                    <img
                      className="img-fluid d-block w-100"
                      src="images/single-listing/gallery-2.jpg"
                      alt="..."
                    />
                  </li>
                  <li data-target="#carousel-thumb" data-slide-to={2}>
                    <img
                      className="img-fluid d-block w-100"
                      src="https://cdn.pocket-lint.com/r/s/1200x/assets/images/149041-cameras-review-review-canon-eos-90d-review-image1-y948ezej2c.jpg"
                      alt="..."
                    />
                  </li>
                  <li data-target="#carousel-thumb" data-slide-to={3}>
                    <img
                      className="img-fluid d-block w-100"
                      src="images/single-listing/gallery-4.jpg"
                      alt="..."
                    />
                  </li>
                  <li data-target="#carousel-thumb" data-slide-to={7}>
                    <img
                      className="img-fluid d-block w-100"
                      src="https://cdn.pocket-lint.com/r/s/1200x/assets/images/149041-cameras-review-review-canon-eos-90d-review-image1-y948ezej2c.jpg"
                      alt="..."
                    />
                  </li>
                  <li data-target="#carousel-thumb" data-slide-to={4}>
                    <img
                      className="img-fluid d-block w-100"
                      src="images/single-listing/gallery-5.jpg"
                      alt="..."
                    />
                  </li>
                  <li data-target="#carousel-thumb" data-slide-to={5}>
                    <img
                      className="img-fluid d-block w-100"
                      src="https://cdn.pocket-lint.com/r/s/1200x/assets/images/149041-cameras-review-review-canon-eos-90d-review-image1-y948ezej2c.jpg"
                      alt="..."
                    />
                  </li>
                  <li data-target="#carousel-thumb" data-slide-to={6}>
                    <img
                      className="img-fluid d-block w-100"
                      src="images/single-listing/gallery-7.jpg"
                      alt="..."
                    />
                  </li>
                </ol>
              </div>
              {/*/.Carousel Wrapper*/}
              <Row className="under-carousel-buttons">
                <Col lg md xs="6" className="save-button">
                  <button type="button" id="save-later">
                    Save for later
                  </button>
                </Col>
                <Col lg xs md="4" className="share-button-group">
                  <Row>
                    <Col lg md="4" className="facebook">
                      <i className="fab fa-facebook    "></i> Facebook
                    </Col>
                    <Col lg md="4" className="twitter">
                      <i className="fab fa-twitter    "> </i> Twitter
                    </Col>
                    <Col lg md="4" className="whatsapp">
                      <i className="fab fa-whatsapp    "> </i> Whatsapp
                    </Col>
                  </Row>
                </Col>
              </Row>
            </div>
            <Row className="main-content">
              <Container>
                <Col xs md lg="12" className="body-product-details">
                  {/* product description */}
                  <div id="product-description">
                    <h3>Description</h3>
                    <hr />
                    <p>{this.state.product.summary}</p>
                    <p>{this.state.product.description}</p>
                  </div>

                  <div id="product-rules">
                    <h3>Usage or pre-damages</h3>
                    <hr />
                    <p>{this.state.product.summary}</p>
                    <p>{this.state.product.description}</p>
                  </div>
                </Col>
              </Container>
            </Row>
            <div id="product-tags">
              <h3>Specifications</h3>
              <hr />
              <ul>
                <ul class="tags">
                  {this.state.product.tags.map(tag => (
                    <li>
                      <a href={tag.tag_url} className="tag">
                        {tag.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </ul>
            </div>
          </Col>

          {/* Product Image Carousel Ends */}
          <Col lg="4">
            {/* Buy/Rent Siderbar */}
            <div className="rent-widget-wrapper">
              <div className="rent-widget">
                <form className="rent-form">
                  <div className="product-details">
                    {/* Product Details Center Starts */}
                    {/* Term Selection Starts */}
                    <div class="radio-group">
                      <input
                        type="radio"
                        checked
                        id="option-one"
                        name="selector"
                      />
                      <label for="option-one">Short Term</label>
                      <input type="radio" id="option-two" name="selector" />
                      <label for="option-two">Long Term</label>
                    </div>
                    {/* Term Selection Ends */}

                    {/* Top Details End */}
                    {/* Top Details Separation */}
                    <div className="mid-details">
                      {/* product price */}
                      <p id="product-price">
                        <i className="fas fa-rupee-sign    "></i>{" "}
                        <span id="price">{this.state.product.price}</span>{" "}
                        <span id="how-long"> / day </span>
                      </p>
                      <div id="price_long_term">
                        <Row>
                          <Col lg md xs="6" className="contain">
                            {" "}
                            <i className="fas fa-rupee-sign    "></i>{" "}
                            {this.state.product.price_week}{" "}
                            <span id="how-long"> / week </span>
                          </Col>
                          <Col lg md xs="6" className="contain">
                            {" "}
                            <i className="fas fa-rupee-sign    "></i>{" "}
                            {this.state.product.price_month}{" "}
                            <span id="how-long"> / month </span>
                          </Col>
                        </Row>
                      </div>
                      <p id="product-avail">
                        {this.state.product.availability === true ? (
                          <div id="product-available">
                            {" "}
                            <i class="fas fa-thumbs-up    "></i> Available to
                            rent!
                          </div>
                        ) : (
                          <div id="product-unavailable">
                            <i class="fas fa-thumbs-down    "></i> Unavailable
                            till, {this.state.product.unavailable_date}
                          </div>
                        )}
                      </p>
                      <br />
                    </div>
                  </div>

                  <div className="to-from-datepicker">
                    <h4>Select Date</h4>

                    <Row>
                      <Col md="6" className="mar-bot-15">
                        <div
                          id="datepicker-from"
                          class="input-group date"
                          data-date-format="dd-mm-yyyy"
                        >
                          <input
                            class="form-control"
                            type="text"
                            id="datepicker-from-in"
                            placeholder="From"
                          />
                        </div>
                      </Col>
                      <Col md="6" className=" mar-bot-15">
                        {" "}
                        <div
                          // id="datepicker-to"
                          class="input-group date"
                          data-date-format="dd-mm-yyyy"
                        >
                          <input
                            class="form-control"
                            type="text"
                            id="datepicker-to"
                            placeholder="To"
                          />
                        </div>
                      </Col>
                      <Col md lg xs="12" className="error-box">
                        {" "}
                        <p></p>
                      </Col>
                    </Row>
                  </div>

                  <Row className="checkout-box">
                    <hr />
                    <Col lg md="12" id="total-days">
                      <p>
                        Total Days = <span></span>
                      </p>
                    </Col>
                    <Col lg md="12" id="total-price">
                      <p>
                        Total Price = <span></span>
                      </p>
                    </Col>{" "}
                    <hr />
                  </Row>

                  <div className="rent-button-group">
                    <input type="button" id="rent-now" value="Rent Now" />
                    <br />
                    <input
                      type="button"
                      id="save-later"
                      value="Save for Later"
                    />
                  </div>
                </form>
              </div>
            </div>
          </Col>
        </Row>
        {/* Mobile screen aligned content */}
        <Row id="hide-floating-rent-now" className="fixed-rent-now">
          <Col xs md="6">
            <div className="rent-button-group">
              <input
                type="button"
                href=".rent-widget-wrapper"
                id="rent-now"
                value="Rent Now"
              />
            </div>
          </Col>
          <Col xs md="6">
            <p id="product-price">
              <i className="fas fa-rupee-sign    "></i>{" "}
              <span id="price">{this.state.product.price}</span>{" "}
              <span id="how-long"> / day </span>
            </p>
          </Col>
        </Row>

        <Row className="mobile-screen">
          {/*Mobile product description */}
          <Row className="main-content">
            <Container>
              <Col xs md lg="12" className="body-product-details">
                {/* product description */}
                <div id="product-description">
                  <h3>Description</h3>
                  <hr />
                  <p>{this.state.product.summary}</p>
                  <p>{this.state.product.description}</p>
                </div>

                <div id="product-rules">
                  <h3>Usage or pre-damages</h3>
                  <hr />
                  <p>{this.state.product.summary}</p>
                  <p>{this.state.product.description}</p>
                </div>
              </Col>
            </Container>
          </Row>
          <div id="product-tags">
            <h3>Specifications</h3>
            <hr />
            <ul>
              <ul class="tags">
                {this.state.product.tags.map(tag => (
                  <li>
                    <a href={tag.tag_url} className="tag">
                      {tag.name}
                    </a>
                  </li>
                ))}
              </ul>
            </ul>
          </div>
          {/* Mobile share buttons */}
          <Row className="under-carousel-buttons">
            <Col lg md="6" className="save-button">
              <button type="button" id="save-later">
                Save for later
              </button>
            </Col>
            <Col lg md="4" className="share-button-group">
              <Row>
                <Col lg md="4" className="facebook">
                  <i className="fab fa-facebook    "></i> Facebook
                </Col>
                <Col lg md="4" className="twitter">
                  <i className="fab fa-twitter    "> </i> Twitter
                </Col>
                <Col lg md="4" className="whatsapp">
                  <i className="fab fa-whatsapp    "> </i> Whatsapp
                </Col>
              </Row>
            </Col>
          </Row>
        </Row>

        {/* Reviews Section */}
        <div className="mid-product-section">
          {/* Reviews Score Card */}
          <Row className="main-review-wrapper">
            <Col lg="4" className="review-card">
              {/* Sellers Details */}
              <div className="sellers-box">
                <h4>About seller</h4>
                <Row>
                  <Col lg="12 sellers-logo">
                    <img
                      src="http://dummyimage.com/60x60/666/ffffff&text=No+Image"
                      alt="Sellers-image"
                    />
                  </Col>
                  <Col lg="12 sellers-desc">
                    <h5>{this.state.seller.name}</h5>
                    <button
                      type="button"
                      className="btn btn-warning btn-xs"
                      aria-label="Left Align"
                    >
                      <span className="fas fa-star" aria-hidden="true" />
                    </button>
                    <button
                      type="button"
                      className="btn btn-warning btn-xs"
                      aria-label="Left Align"
                    >
                      <span className="fas fa-star" aria-hidden="true" />
                    </button>
                    <button
                      type="button"
                      className="btn btn-warning btn-xs"
                      aria-label="Left Align"
                    >
                      <span className="fas fa-star" aria-hidden="true" />
                    </button>
                    <button
                      type="button"
                      className="btn btn-default btn-grey btn-xs"
                      aria-label="Left Align"
                    >
                      <span className="fas fa-star" aria-hidden="true" />
                    </button>
                    <button
                      type="button"
                      className="btn btn-default btn-grey btn-xs"
                      aria-label="Left Align"
                    >
                      <span className="fas fa-star" aria-hidden="true" />
                    </button>
                    <br />
                    {this.state.seller.description}
                  </Col>
                </Row>
              </div>
              <div class="rating-block">
                <h4>Average user rating</h4>
                <h2 class="bold padding-bottom-7">
                  4.3 <small>/ 5</small>
                </h2>
                <button
                  type="button"
                  class="btn btn-warning btn-sm"
                  aria-label="Left Align"
                >
                  <span class="fas fa-star" aria-hidden="true"></span>
                </button>
                <button
                  type="button"
                  class="btn btn-warning btn-sm"
                  aria-label="Left Align"
                >
                  <span class="fas fa-star" aria-hidden="true"></span>
                </button>
                <button
                  type="button"
                  class="btn btn-warning btn-sm"
                  aria-label="Left Align"
                >
                  <span class="fas fa-star" aria-hidden="true"></span>
                </button>
                <button
                  type="button"
                  class="btn btn-default btn-grey btn-sm"
                  aria-label="Left Align"
                >
                  <span class="fas fa-star" aria-hidden="true"></span>
                </button>
                <button
                  type="button"
                  class="btn btn-default btn-grey btn-sm"
                  aria-label="Left Align"
                >
                  <span class="fas fa-star" aria-hidden="true"></span>
                </button>
              </div>
            </Col>
            <Col lg="8">
              <Row>
                <Col lg="12 review-section">
                  {/* Add reviews  Comment Box*/}

                  {/* {this.state.isUserLoggedIn === true ? (
                    <form className="user_add_review" action="">
                      <h3>Rate this prouduct</h3>

                      <div className="comment-form">
                        <input
                          type="text"
                          name="comment_title"
                          id="comment_title"
                          placeholder="Title for your comment..."
                        />
                        <br />
                        <textarea
                          name="comment_description"
                          id="comment_description"
                          placeholder="Write description in details..."
                        />
                        <br />
                        <button type="submit" id="comment_form_submit">
                          Submit
                        </button>
                      </div>
                    </form>
                  ) : (
                    <form className="user_add_review" action="">
                      <h3>Rate this prouduct</h3>
                      <p>Login to give a review!</p>
                      <i class="fas fa-lock    "></i>
                      <br />
                      <button type="button" id="comment_form_submit">
                        Login now
                      </button>
                    </form>
                  )} */}

                  <div class="review-block">
                    <h2>Product Reviews</h2>
                    <hr id="top_hr" />

                    <Row>
                      <Col lg="3">
                        <img
                          src="http://dummyimage.com/60x60/666/ffffff&text=No+Image"
                          className="img-rounded"
                        />
                        <div className="review-block-name">
                          <a href="#">nktailor</a>
                        </div>
                        <div className="review-block-date">
                          January 29, 2016
                          <br />1 day ago
                        </div>
                      </Col>
                      <Col lg="9">
                        <div className="review-block-rate">
                          <button
                            type="button"
                            className="btn btn-warning btn-xs"
                            aria-label="Left Align"
                          >
                            <span className="fas fa-star" aria-hidden="true" />
                          </button>
                          <button
                            type="button"
                            className="btn btn-warning btn-xs"
                            aria-label="Left Align"
                          >
                            <span className="fas fa-star" aria-hidden="true" />
                          </button>
                          <button
                            type="button"
                            className="btn btn-warning btn-xs"
                            aria-label="Left Align"
                          >
                            <span className="fas fa-star" aria-hidden="true" />
                          </button>
                          <button
                            type="button"
                            className="btn btn-default btn-grey btn-xs"
                            aria-label="Left Align"
                          >
                            <span className="fas fa-star" aria-hidden="true" />
                          </button>
                          <button
                            type="button"
                            className="btn btn-default btn-grey btn-xs"
                            aria-label="Left Align"
                          >
                            <span className="fas fa-star" aria-hidden="true" />
                          </button>
                        </div>
                        <div className="review-block-title">
                          this was nice in buy
                        </div>
                        <div className="review-block-description">
                          this was nice in buy. this was nice in buy. this was
                          nice in buy. this was nice in buy this was nice in buy
                          this was nice in buy this was nice in buy this was
                          nice in buy
                        </div>
                      </Col>
                    </Row>
                    <hr />
                    <Row>
                      <Col lg="3">
                        <img
                          src="http://dummyimage.com/60x60/666/ffffff&text=No+Image"
                          className="img-rounded"
                        />
                        <div className="review-block-name">
                          <a href="#">nktailor</a>
                        </div>
                        <div className="review-block-date">
                          January 29, 2016
                          <br />1 day ago
                        </div>
                      </Col>
                      <Col lg="9">
                        <div className="review-block-rate">
                          <button
                            type="button"
                            className="btn btn-warning btn-xs"
                            aria-label="Left Align"
                          >
                            <span className="fas fa-star" aria-hidden="true" />
                          </button>
                          <button
                            type="button"
                            className="btn btn-warning btn-xs"
                            aria-label="Left Align"
                          >
                            <span className="fas fa-star" aria-hidden="true" />
                          </button>
                          <button
                            type="button"
                            className="btn btn-warning btn-xs"
                            aria-label="Left Align"
                          >
                            <span className="fas fa-star" aria-hidden="true" />
                          </button>
                          <button
                            type="button"
                            className="btn btn-default btn-grey btn-xs"
                            aria-label="Left Align"
                          >
                            <span className="fas fa-star" aria-hidden="true" />
                          </button>
                          <button
                            type="button"
                            className="btn btn-default btn-grey btn-xs"
                            aria-label="Left Align"
                          >
                            <span className="fas fa-star" aria-hidden="true" />
                          </button>
                        </div>
                        <div className="review-block-title">
                          this was nice in buy
                        </div>
                        <div className="review-block-description">
                          this was nice in buy. this was nice in buy. this was
                          nice in buy. this was nice in buy this was nice in buy
                          this was nice in buy this was nice in buy this was
                          nice in buy
                        </div>
                      </Col>
                    </Row>
                    <hr />
                    <Row>
                      <Col lg="3">
                        <img
                          src="http://dummyimage.com/60x60/666/ffffff&text=No+Image"
                          className="img-rounded"
                        />
                        <div className="review-block-name">
                          <a href="#">nktailor</a>
                        </div>
                        <div className="review-block-date">
                          January 29, 2016
                          <br />1 day ago
                        </div>
                      </Col>
                      <Col lg="9">
                        <div className="review-block-rate">
                          <button
                            type="button"
                            className="btn btn-warning btn-xs"
                            aria-label="Left Align"
                          >
                            <span className="fas fa-star" aria-hidden="true" />
                          </button>
                          <button
                            type="button"
                            className="btn btn-warning btn-xs"
                            aria-label="Left Align"
                          >
                            <span className="fas fa-star" aria-hidden="true" />
                          </button>
                          <button
                            type="button"
                            className="btn btn-warning btn-xs"
                            aria-label="Left Align"
                          >
                            <span className="fas fa-star" aria-hidden="true" />
                          </button>
                          <button
                            type="button"
                            className="btn btn-default btn-grey btn-xs"
                            aria-label="Left Align"
                          >
                            <span className="fas fa-star" aria-hidden="true" />
                          </button>
                          <button
                            type="button"
                            className="btn btn-default btn-grey btn-xs"
                            aria-label="Left Align"
                          >
                            <span className="fas fa-star" aria-hidden="true" />
                          </button>
                        </div>
                        <div className="review-block-title">
                          this was nice in buy
                        </div>
                        <div className="review-block-description">
                          this was nice in buy. this was nice in buy. this was
                          nice in buy. this was nice in buy this was nice in buy
                          this was nice in buy this was nice in buy this was
                          nice in buy
                        </div>
                      </Col>
                    </Row>
                  </div>
                </Col>
              </Row>
              {/* Reviews Comment */}
              {/*Similar Listing Starts*/}
              <div className="similar-listing">
                <div className="similar-listing-title">
                  <h3>Similar Listings</h3>
                </div>
                <div className="swiper-container similar-list-wrap">
                  <div className="swiper-wrapper">
                    <div className="swiper-slide similar-item">
                      <img
                        src="images/single-listing/park-hyatt.jpg"
                        alt="..."
                      />
                      <div className="similar-title-box">
                        <h5>
                          <a href="#">Park Hyatt</a>
                        </h5>
                        <p>
                          <span className="price-amt">$89</span>/Avg
                        </p>
                      </div>
                      <div className="customer-review">
                        <div className="rating-summary">
                          <div className="rating-result" title="60%">
                            <ul className="product-rating">
                              <li>
                                <i className="ion-android-star" />
                              </li>
                              <li>
                                <i className="ion-android-star" />
                              </li>
                              <li>
                                <i className="ion-android-star" />
                              </li>
                              <li>
                                <i className="ion-android-star-half" />
                              </li>
                              <li>
                                <i className="ion-android-star-half" />
                              </li>
                            </ul>
                          </div>
                        </div>
                        <p>
                          <i className="ion-ios-location" /> 31st North St,
                          Sydney, Australia
                        </p>
                      </div>
                    </div>
                    <div className="swiper-slide similar-item">
                      <img
                        src="images/single-listing/hilton.jpg"
                        className="img-fluid"
                        alt="..."
                      />
                      <div className="similar-title-box">
                        <h5>
                          <a href="#">Hilton Moorea</a>
                        </h5>
                        <p>
                          <span className="price-amt">$109</span>/Avg
                        </p>
                      </div>
                      <div className="customer-review">
                        <div className="rating-summary">
                          <div className="rating-result" title="60%">
                            <ul className="product-rating">
                              <li>
                                <i className="ion-android-star" />
                              </li>
                              <li>
                                <i className="ion-android-star" />
                              </li>
                              <li>
                                <i className="ion-android-star" />
                              </li>
                              <li>
                                <i className="ion-android-star-half" />
                              </li>
                              <li>
                                <i className="ion-android-star-half" />
                              </li>
                            </ul>
                          </div>
                        </div>
                        <p>
                          <i className="ion-ios-location" /> Hilton Ave, Miami,
                          USA
                        </p>
                      </div>
                    </div>
                    <div className="swiper-slide similar-item">
                      <img
                        src="images/single-listing/lagoon-resort.jpg"
                        className="img-fluid"
                        alt="..."
                      />
                      <div className="similar-title-box">
                        <h5>
                          <a href="#">Lagoon Resort &amp; Spa</a>
                        </h5>
                        <p>
                          <span className="price-amt">$75</span>/Avg
                        </p>
                      </div>
                      <div className="customer-review">
                        <div className="rating-summary">
                          <div className="rating-result" title="60%">
                            <ul className="product-rating">
                              <li>
                                <i className="ion-android-star" />
                              </li>
                              <li>
                                <i className="ion-android-star" />
                              </li>
                              <li>
                                <i className="ion-android-star" />
                              </li>
                              <li>
                                <i className="ion-android-star-half" />
                              </li>
                              <li>
                                <i className="ion-android-star-half" />
                              </li>
                            </ul>
                          </div>
                        </div>
                        <p>
                          <i className="ion-ios-location" /> 75 Prince St, NY,
                          USA
                        </p>
                      </div>
                    </div>
                    <div className="swiper-slide similar-item">
                      <img
                        src="images/single-listing/westin.jpg"
                        className="img-fluid"
                        alt="..."
                      />
                      <div className="similar-title-box">
                        <h5>
                          <a href="#">The Westin Excelsior</a>
                        </h5>
                        <p>
                          <span className="price-amt">$89</span>/Avg
                        </p>
                      </div>
                      <div className="customer-review">
                        <div className="rating-summary">
                          <div className="rating-result" title="60%">
                            <ul className="product-rating">
                              <li>
                                <i className="ion-android-star" />
                              </li>
                              <li>
                                <i className="ion-android-star" />
                              </li>
                              <li>
                                <i className="ion-android-star" />
                              </li>
                              <li>
                                <i className="ion-android-star-half" />
                              </li>
                              <li>
                                <i className="ion-android-star-half" />
                              </li>
                            </ul>
                          </div>
                        </div>
                        <p>
                          <i className="ion-ios-location" />
                          21st Queens park,London UK
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="slider-btn v3 similar-next">
                  <i className="ion-arrow-right-c" />
                </div>
                <div className="slider-btn v3 similar-prev">
                  <i className="ion-arrow-left-c" />
                </div>
              </div>
              {/*Similar Listing ends*/}
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default SingleProduct;
