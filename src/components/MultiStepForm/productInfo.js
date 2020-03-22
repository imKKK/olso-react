import React, { Component } from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import ProductTitleImage from "../../assets/images/AddProduct/Naming-product-title-desc.svg";

class productInfo extends Component {
  //Calling next step method
  continue = e => {
    this.props.nextStep();
  };

  validateFields = e => {
    if (this.props.productTitle <= 0) {
      alert("Title should not be empty!");
    }
  };

  render() {
    const { values, handleChange, handleClickDropDown } = this.props;
    return (
      <div className="product-info">
        <Row className="item-details">
          <Col lg="6" className="product-form">
            <Col lg="12" className="steps">
              <p id="step1">Lets Rent Your Item!</p>
            </Col>
            <Col lg="12" className="form1">
              {/* Name Item */}
              <label htmlFor="item-name">Item Name</label>
              <input
                type="text"
                name="item-name"
                id="item-name"
                onChange={handleChange("productTitle")}
                defaultValue={values.productTitle}
              />
              <br />
              {/* Name Item Ends*/}

              {/* Category */}
              <div class="form-group">
                <label>Category</label>
                <div
                  class="nice-select filter-input"
                  tabindex="0"
                  defaultValue={values.productCategory}
                >
                  <span class="current">Select Categories</span>
                  <ul class="list">
                    <li
                      onClick={handleClickDropDown.bind(this, "Cars")}
                      defaultValue={values.productCategory}
                      class="option selected focus"
                    >
                      Cars
                    </li>
                    <li
                      onClick={handleClickDropDown.bind(this, "Bikes")}
                      defaultValue={values.productCategory}
                      class="option"
                    >
                      Bikes
                    </li>
                    <li
                      onClick={handleClickDropDown.bind(this, "Cameras")}
                      defaultValue={values.productCategory}
                      class="option"
                    >
                      Cameras
                    </li>
                    <li
                      onClick={handleClickDropDown.bind(this, "Scooters")}
                      defaultValue={values.productCategory}
                      class="option"
                    >
                      Scooters
                    </li>
                    <li
                      onClick={handleClickDropDown.bind(this, "Tech")}
                      defaultValue={values.productCategory}
                      class="option"
                    >
                      Tech
                    </li>
                    <li
                      onClick={handleClickDropDown.bind(this, "Furnitures")}
                      defaultValue={values.productCategory}
                      class="option"
                    >
                      Furnitures
                    </li>
                  </ul>
                </div>
              </div>
              {/* Category Ends */}

              <Row>
                <Col lg="12">
                  <button type="button" onClick={this.continue}>
                    Next
                  </button>
                </Col>
              </Row>
            </Col>
          </Col>
          <Col lg="6" className="add-form-sidebar">
            <Col lg="12" className="sidebar-steps">
              <img src={ProductTitleImage} alt="" />
            </Col>
            <Row className="item-precautions">
              <h2>
                <i class="fas fa-lightbulb    "></i> Tips!
              </h2>
              <Col lg xs md="12">
                <ul>
                  <li>
                    Item name should match the item itself. Proper item name is
                    necessary.
                  </li>
                  <li>
                    If you don't know the item name, copy the name you used at
                    time of buying the item.
                  </li>
                  <li>
                    Item description should carry:
                    <ul>
                      <li>A summary of the item.</li>
                      <li>Defect/damages an item carries.</li>
                      <li>Item specs, etc.</li>
                    </ul>
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

export default productInfo;
