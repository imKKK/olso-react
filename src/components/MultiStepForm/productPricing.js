import React, { Component } from "react";
import ProductPricingPic from "../../assets/images/AddProduct/product-pricing.svg";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

// Add Rules Functions
const ListItem = ({ value, onClick }) => <li onClick={onClick}>{value}</li>;

const List = ({ items, onItemClick }) => (
  <ul>
    {items.map((item, i) => (
      <ListItem key={i} value={item} onClick={onItemClick} />
    ))}
  </ul>
);

//Add Rules Functions End

class productPricing extends Component {
  render() {
    const {
      handleItemClick,
      onChange,
      addRules,
      values,
      handleChange,
      prevStep,
      nextStep
    } = this.props;

    return (
      <div className="product-pricing">
        <Row className="item-details">
          <Col lg="6" className="product-form">
            <Col lg="12" className="steps">
              <p>Let's set your benefits!</p>
            </Col>
            <Col lg="12" className="form1">
              <label htmlFor="item-price">
                Price you want to rent on per day?
              </label>
              <input
                type="text"
                placeholder="Eg. ₹ 800"
                name="item-price"
                id="item-price"
                onChange={handleChange("productPrice")}
                defaultValue={values.productPrice}
              />
              <br />
              <label htmlFor="item-price-weekly">Weekly rent price?</label>
              <input
                type="text"
                placeholder="Eg. ₹ 5600"
                name="item-price-weekly"
                id="item-price-weekly"
                onChange={handleChange("productWeeklyPrice")}
                defaultValue={values.productWeeklyPrice}
              />
              <br />
              <label htmlFor="item-price-monthly">Monthly rent price?</label>
              <input
                type="text"
                placeholder="Eg. ₹ 2334243"
                name="item-price-monthly"
                id="item-price-monthly"
                onChange={handleChange("productMonthlyPrice")}
                defaultValue={values.productMonthlyPrice}
              />
              <br />

              {/* Item Rules */}
              <label htmlFor="item-rules">Item Rules</label>
              <List items={values.rules} onItemClick={handleItemClick} />
              <input
                type="text"
                value={values.inputValue}
                placeholder="Type your rule here..."
                id="item-rules"
                name="item-rules"
                onChange={onChange}
              />
              <button id="add-rule" onClick={addRules}>
                +
              </button>
              {/* Item Rules end */}

              <Row>
                <Col lg="6">
                  <button type="button" onClick={prevStep}>
                    Previous
                  </button>
                </Col>
                <Col lg="6">
                  <button type="button" onClick={nextStep}>
                    Next
                  </button>
                </Col>
              </Row>
            </Col>
          </Col>
          <Col lg="6" className="add-form-sidebar">
            <Col lg="12" className="sidebar-steps">
              <img src={ProductPricingPic} alt="add-product-pricing" />
            </Col>
            <Row className="item-precautions">
              <h2>
                <i class="fas fa-lightbulb    "></i> Tips!
              </h2>
              <Col lg xs md="12">
                <ul>
                  <li>Price item smartly. We approve products priced right.</li>
                  <li>Pricing your item smartly leads to more customers.</li>
                  <li>
                    Things important to know before pricing your item:
                    <ul>
                      <li>
                        We include our service charges in the price you give.
                      </li>
                      <li>
                        Anyone renting your product will see only the total
                        price ( your rent price + OLSO service charges).
                      </li>
                    </ul>
                    <li>
                      Roam around on OLSO and search for the item you are
                      renting to get the most reasonable price.
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

export default productPricing;
