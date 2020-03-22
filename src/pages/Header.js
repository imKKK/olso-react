import React from "react";

import OlsoLogoImage from '../assets/images/olso_logo.png'
import DropdownMenu from '../components/DropdownMenu'
import Button from '@material-ui/core/Button';
import LoginModal from './LoginModal'
import { Auth } from 'aws-amplify'




class Header extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      loginModalOpen: false,
      currentActiveTab: "login",
      isAuthenticated: false,
      currentUser: null,
    }

  }


  handleLogInClick = () => {
    this.setState({
      loginModalOpen: true,
      currentActiveTab: 'login'
    })
  };

  handleSignUpClick = () => {
    this.setState({
      loginModalOpen: true,
      currentActiveTab: 'register'
    })
  }

  checkAndSetCurrentUser = () => {

    Auth.currentAuthenticatedUser()
    .then((user)=>{
      this.setState({
        isAuthenticated: true,
        currentUser: user,
        loginModalOpen: false
      });
    })
    .catch(error => {
      this.setState({
        isAuthenticated: false,
        currentUser: null,
        loginModalOpen: false
      })
    })
  }

  handleClose = () => {
    this.checkAndSetCurrentUser();
  };

  handleLogOutClick = () => {

    this.setState({
      isAuthenticated: false,
      currentUser: null,
    });

    Auth.signOut()
    .then(response => {
        console.log(response);
    })
    .catch(error => {
      console.log(error)
    })
  }

  getMyAccountMenuItems = () => {
    return [
      {
        title: "Log Out",
        handler: this.handleLogOutClick
      }
    ];
  }

  componentDidMount = () => {
    this.checkAndSetCurrentUser();
  }

  
  rightPanelControl = () => {
    
    if(this.state.isAuthenticated) {
      return (
        <div className="col-md-8 col-6">
          <div className="add-list float-right">
            <Button variant="contained" color="primary">
              Add Listing <i className="ion-plus-square" />
            </Button>
          </div>
          <nav className="site-navigation float-right">
            <div className="container">
              <ul className="site-menu js-clone-nav d-none d-lg-block">
                <li>
                  Hi {this.state.currentUser.username}!
                </li>
                <DropdownMenu title="My Account" menuItems={this.getMyAccountMenuItems()}/>
                <li className="d-lg-none">
                  <Button variant="contained" color="primary">
                    Add Listing <i className="ion-plus-square" />
                  </Button>
                </li>
              </ul>
            </div>
          </nav>
          <div className="d-lg-none sm-right">
            <a href="#" className="mobile-bar js-menu-toggle">
              <span className="ion-android-menu" />
            </a>
          </div>
        </div>
      )
    } else {
      return (
      <div className="col-md-8 col-6">
            <nav className="site-navigation float-right">
              <div className="container">
                <ul className="site-menu js-clone-nav d-none d-lg-block">
                  <li>
                    <Button variant="contained" color="primary" className="auth-button" onClick={this.handleSignUpClick}>
                      Sign Up
                    </Button>
                  </li>
                  <li>
                    <Button variant="outlined" color="primary" className="auth-button" onClick={this.handleLogInClick}>
                      Log In
                    </Button>
                  </li>
                </ul>
              </div>
          </nav>
          <div className="d-lg-none sm-right">
            <a href="#" className="mobile-bar js-menu-toggle">
              <span className="ion-android-menu" />
            </a>
          </div>
      </div>
      )
    }
  };

  render() {
    return (
      <div>
        <header className="scroll-hide">
          {}
          <div className="site-navbar-wrap v2">
            <div className="container-fluid">
              <div className="site-navbar">
                <div className="row align-items-center">
                  <div className="col-md-4 col-6">
                    <a className="navbar-brand float-left" href="#">
                      <img src={OlsoLogoImage} style={{maxWidth: "70%", height: "auto"}}/>
                    </a>
                  </div>
                  <this.rightPanelControl/>
                </div>
              </div>
              {}
              <div className="site-mobile-menu">
                <div className="site-mobile-menu-header">
                  <div className="site-mobile-menu-close  js-menu-toggle">
                    <span className="ion-ios-close-empty" />
                  </div>
                </div>
                <div className="site-mobile-menu-body"/>
              </div>
              {}
            </div>
          </div>
          {}
        </header>
        <LoginModal 
          modalOpen={this.state.loginModalOpen} 
          currentActiveTab={this.state.currentActiveTab} 
          handleClose={this.handleClose}
        />
      </div>
    );
  }
}

export default Header;
