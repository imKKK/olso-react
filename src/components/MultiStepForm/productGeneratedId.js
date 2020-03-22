import React, { Component } from "react";
import ProductCatImage from "../../assets/images/AddProduct/Pic-of-product.svg";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import TagsInput from "../TagsInput";

class productGeneratedId extends Component {
  selectedTags = tags => console.log(tags);

  render() {
    const { values, handleChange, prevStep, nextStep } = this.props;

    return (
      <div className="product-category">
        <Row className="item-details">
          <Col lg="6" className="product-form">
            <Col lg="12" className="steps">
              <p>Tell us more about your item</p>
            </Col>
            <Col lg="12" className="form1">
              {/* Item Description */}
              <label htmlFor="describe-item">Describe Item</label>
              <textarea
                col="20"
                row="100"
                name="describe-item"
                id="describe-item"
                onChange={handleChange("productDescription")}
                defaultValue={values.productDescription}
              />
              <br />
              {/* Item Description Ends*/}

              {/* Item Tags */}
              <div id="main-tag">
                <TagsInput selectedTags={this.selectedTags} />
              </div>
              {/* Item Tags Ends*/}

              {/* Image Upload */}
              <label htmlFor="item-image">Item Images </label>
              <div className="upload-item-image">
                <input type="file" id="files" name="files[]" multiple />
              </div>
              <br />

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
              <img src={ProductCatImage} alt="add-product-image" />
            </Col>
            <Row className="item-precautions">
              <h2>
                <i class="fas fa-lightbulb    "></i> Tips!
              </h2>
              <Col lg xs md="12">
                <ul>
                  <li>Select a suitable category for the item.</li>
                  <li>
                    Item images should follow below rules:
                    <ul>
                      <li>Should clearly show the item.</li>
                      <li>At max 5 images allowed.</li>
                      <li>Item in the pick should match the original item.</li>
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

export default productGeneratedId;
