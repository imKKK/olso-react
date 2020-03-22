import React from "react";
import { Route, Switch } from "react-router-dom"; // Using react-router - Route Switch for routing
import "./App.css";
import { Provider } from "react-redux";
import store from "./store";
import Header from "./pages/Header";
import { Auth } from "aws-amplify";
import LandingMain from "./pages/LandingMain";
import Footer from "./pages/Footer";
import SingleProduct from "./pages/SingleProduct";
import AddListing from "./pages/stateFullComponents/AddListing";
import ManageShops from "./pages/ManageShops";
import UserProfileView from "./pages/UserProfileView";
import UserDashboard from "./pages/UserDashboard";


function App() {
  return (
    <Switch>
      <Provider store={store}>
        <div className="App">
          <Header />
          <Route exact path="/" component={LandingMain} />
          <Route path="/Product" component={SingleProduct} />
          <Route path="/add-product" component={AddListing} />
          <Route path="/manage-shops" component={ManageShops} />
          <Route path="/user-profile-view" component={UserProfileView} />
          <Route path="/dashboard" component={UserDashboard} />
          <Footer />
        </div>
      </Provider>
    </Switch>
  );
}

export default App;
