import React, { Component } from "react";
import "./CSS/AddLisiting.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class AddLisitingDumb extends Component {
  render() {
    return (
      <div className="main-add-lisiting-wrapper">
        <h1>Hey there, add your product below.</h1>
        <hr />
        <Container>
          <form action="" className="listing-details-form">
            <Row className="item-details">
              <Col lg="4" className="steps">
                <p>Step 1</p>
              </Col>
              <Col lg="8" className="form1">
                <label htmlFor="item-name">Item Name</label>
                <input type="text" name="item-name" id="item-name" />
                <br />
                <label htmlFor="">Describe Item</label>
                <textarea col="20" row="100" id="describe-item" />
                <Row>
                  <Col lg="12">
                    <button type="submit">Next</button>
                  </Col>
                </Row>
              </Col>
            </Row>

            <hr className="full-hr" />
            <Row className="product-details">
              <Col lg="4" className="steps">
                <p>Step 2</p>
              </Col>
              <Col lg="8" className="form2">
                <label htmlFor="item-image">Item Images </label>
                <div className="upload-item-image">
                  <input type="file" id="upload-image" />
                </div>
                <br />
                <div class="form-group">
                  <label>Category</label>
                  <div class="nice-select filter-input" tabindex="0">
                    <span class="current">Select Categories</span>
                    <ul class="list">
                      <li class="option selected focus">Hotels</li>
                      <li class="option">Restaurants</li>
                      <li class="option">Shopping</li>
                      <li class="option">Eat &amp; Drink</li>
                      <li class="option">Events</li>
                      <li class="option">Fitness</li>
                    </ul>
                  </div>
                </div>

                <Row>
                  <Col lg="12">
                    <button type="submit">Next</button>
                  </Col>
                </Row>
              </Col>
            </Row>
          </form>
        </Container>
      </div>
    );
  }
}

export default AddLisitingDumb;
