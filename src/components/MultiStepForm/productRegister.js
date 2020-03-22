import React, { Component } from "react";
import ProductInfo from "./productInfo";
import "../../pages/CSS/AddLisiting.css";
import ProductCategory from "./productGeneratedId";
import ProductPricing from "./productPricing.js";
import ProductConfirmation from "./productConfirmation.js";

class productRegister extends Component {
  state = {
    step: 1,
    productTitle: "",
    productDescription: "",
    productPrice: "",
    productMonthlyPrice: "",
    productWeeklyPrice: "",
    productImage: "",
    productCategory: "",
    productVariants: "",
    productRules: "",
    list: [],
    inputValue: "",
    rules: ["Some of our default rules."]
  };

  //Proceed Next Step
  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1 //increasing steps
    });
  };

  //Go Back To Previous Step
  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1 //decreasing step
    });
  };

  //Handle Input Changes
  handleChange = input => e => {
    this.setState({ [input]: e.target.value });
  };

  handleClickDropDown = val => {
    this.setState({ productCategory: val });
  };

  //Switch Steps
  renderSwitch() {
    const { step } = this.state;
    const {
      productTitle,
      productCategory,
      productDescription,
      productImage,
      productMonthlyPrice,
      productPrice,
      productVariants,
      productWeeklyPrice,
      productRules,
      list,
      inputValue,
      rules
    } = this.state;

    const values = {
      productTitle,
      productCategory,
      productDescription,
      productImage,
      productMonthlyPrice,
      productPrice,
      productVariants,
      productWeeklyPrice,
      productRules,
      list,
      inputValue,
      rules
    };

    switch (step) {
      case 1:
        return (
          <ProductInfo
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            handleClickDropDown={this.handleClickDropDown}
            values={values}
          />
        );

      case 2:
        return (
          <ProductCategory
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        );

      case 3:
        return (
          <ProductPricing
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
            handleItemClick={this.handleItemClick}
            addRules={this.addRules}
            onChange={this.onChange}
          />
        );
      case 4:
        return (
          <ProductConfirmation
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        );

      default:
        return <h1>Your item is added to the shop now.</h1>;
    }
  }

  //Add Rule
  handleItemClick = e => {
    console.log(e.target.innerHTML);
  };

  addRules = e => {
    const { inputValue, rules } = this.state;
    if ((inputValue, rules)) {
      const nextState = [...rules, inputValue];
      this.setState({ rules: nextState, inputValue: "" });
    }
  };

  onChange = e =>
    this.setState({
      inputValue: e.target.value
    });

  //Add rules end here

  render() {
    return (
      <div className="main-add-lisiting-wrapper">
        <div id="step-form">{this.renderSwitch()}</div>
      </div>
    );
  }
}

export default productRegister;
