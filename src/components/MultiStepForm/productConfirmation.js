import React, { Component } from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

class productConfirmation extends Component {
  render() {
    const {
      values,
      handleChange,
      handleClickDropDown,
      prevStep,
      nextStep
    } = this.props;

    return (
      <div className="product-confirmation">
        <Row className="item-details">
          <Col lg="6" className="product-form">
            <Col lg="12" className="steps">
              <p>Confirm Details</p>
              {/* <img src={ProductPricingPic} alt="add-product-pricing" /> */}
            </Col>
            <Col lg="12" className="form1">
              <div id="product-summary">
                <h4>{values.productTitle}</h4>
                <hr />
                <p id="product-price">₹ {values.productPrice} / day</p>
                <p id="product-price">₹ {values.productWeeklyPrice} / week</p>
                <p id="product-price">₹ {values.productMonthlyPrice} / month</p>
                <p id="product-description">{values.productDescription}</p>
                <hr />
                <p id="product-category">{values.productCategory}</p>
              </div>

              <div id="add-addons">
                <p>Add Add-ons (if-any)</p>
                <input
                  type="checkbox"
                  name="add-operator"
                  id="add-operator"
                  value=""
                />
                <label htmlFor="add-operator">
                  You will provide a specialist for this item.
                </label>

                <br />
                <input
                  type="checkbox"
                  name="delivery-choice"
                  id="delivery-choice"
                  value=""
                />
                <label htmlFor="delivery-choice">
                  You will deliver this item to the customer.
                </label>

                <br />
              </div>

              <Row>
                <Col lg="6">
                  <button type="button" onClick={prevStep}>
                    Previous
                  </button>
                </Col>
                <Col lg="6">
                  <button type="button" onClick={nextStep}>
                    Submit
                  </button>
                </Col>
              </Row>
            </Col>
          </Col>
          <Col lg="6" className="add-form-sidebar">
            <Row className="item-precautions">
              <h2>
                <i class="fas fa-lightbulb    "></i> Note!
              </h2>
              <Col lg xs md="12">
                <ul>
                  <li>Confirm all the details you gave.</li>
                  <li>
                    This is the last time you can change anything, this is what
                    we will see to approve your request.
                  </li>
                  <li>
                    In case of any problem contact us:
                    <ul>
                      <li>Email: support@olso.com </li>
                      <li>
                        Contact form: <a href="#">Click here</a>
                      </li>
                    </ul>
                    <li>
                      You can change anything till now by pressing the{" "}
                      <strong>"Previous"</strong> button. Press "Submit" to
                      request approval.
                    </li>
                  </li>
                </ul>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    );
  }
}

export default productConfirmation;
