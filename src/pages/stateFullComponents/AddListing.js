import React, { Component } from "react";
import LoginModal from "../LoginModal";
// import AddListingDumb from "../AddLisitingDumb";
import ProductRegister from "../../components/MultiStepForm/productRegister";

class AddListing extends Component {
  state = {
    isUserAuth: true //Check if the user is authenticated or not
  };

  render() {
    return (
      <div>
        {/* {//if the user is authenticated show listing page else Login Modal
        this.state.isUserAuth === true ? <AddListingDumb /> : <LoginModal />}
        <AddListingDumb /> */}
        <ProductRegister />
      </div>
    );
  }
}

export default AddListing;
