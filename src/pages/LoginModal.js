import React from "react";
import Modal from '@material-ui/core/Modal';
import CloseIcon from '@material-ui/icons/Close';
import GoogleLoginButton from '../assets/images/1x/btn_google_signin_dark_focus_web.png'
import { Auth } from 'aws-amplify'
import CircularProgress from '@material-ui/core/CircularProgress';



class LoginModal extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      auth_form: {
        username: "",
        password: "",
        remember: "",
        registration_username: "",
        registration_password: "",
        registration_confirmpassword: "",
        registration_email: "",
        tnc: "",
      },
      progressMarker: {
        isWaiting: false
      },
      error: ""
    }

  }

  resetState = () => {
    this.state.auth_form = {
        username: "",
        password: "",
        remember: "",
        registration_username: "",
        registration_password: "",
        registration_confirmpassword: "",
        registration_email: "",
        tnc: "",
    }
  }

  authButtons = (props) => {

    if(this.state.progressMarker.isWaiting) {
      return (
        <div className="res-box text-center mar-top-30">
          <CircularProgress/>
        </div>
      )
    } else {
      if(props.buttonType == 'sign-up') {
        return (
          <div className="res-box text-center mar-top-30">
            <button type="submit" className="btn v3" onClick={this.handleUserSignUp}>
              <i className="ion-android-checkmark-circle" />
              Sign Up
            </button>
          </div>
        )
      } else {
        return (
          <div className="res-box text-center mar-top-30">
            <button type="submit" className="btn v3" onClick={this.handleUserLogIn}>
              <i className="ion-log-in" /> Log In
            </button>
          </div>
        )
      }
    }
  }

  validate() {
    
  } 

  handleInputChange = (event) => {
    let fieldName = event.target.id;
    let fieldValue = event.target.type === 'checkbox' ? event.target.checked: event.target.value;
    let newState = {
      ...this.state
    }
    newState["auth_form"][fieldName] = fieldValue
    this.setState(newState);
  }

  handleUserLogIn = async (event) => {
    event.preventDefault()
    this.setState({
      progressMarker: {
        isWaiting: true
      }
    });
    try {
      const user = await Auth.signIn(this.state.auth_form.username, this.state.auth_form.password);
      const cred = await Auth.currentCredentials()
      console.log(cred)
      this.resetState();
      this.props.handleClose();
    } catch(error) {

    }
    this.setState({
      progressMarker: {
        isWaiting: false
      }
    });
  }

  handleUserSignUp = async (event) => {
    event.preventDefault();
    const { registration_username, registration_email, registration_password } = this.state.auth_form;
    
    let signupBody = {
      username: registration_username,
      password: registration_password,
      attributes: {
        email: registration_email
      }
    }
    this.setState({
      progressMarker: {
        isWaiting: true
      }
    });
    try {
      const signUpResponse = await Auth.signUp(signupBody);
      this.resetState();
    } catch (error) {
      this.setState({error: error})
      console.log(error)
    }
    this.setState({
      progressMarker: {
        isWaiting: false
      }
    });
  }

  
  navigationTabs = () => {

    let loginClassContent = null;
    let registerClassContent = null;

    if(this.props.currentActiveTab == 'login') {
      loginClassContent = "nav-link active"
      registerClassContent = "nav-link"
    } else {
      registerClassContent = "nav-link active"
      loginClassContent = "nav-link"
    }

    return (
      <ul className="ui-list nav nav-tabs justify-content-center mar-bot-30" role="tablist" >
        <li className="nav-item">
          <a
            className={loginClassContent}
            data-toggle="tab"
            href="#login"
            role="tab"
            aria-selected="true"
          >
            Login
          </a>
        </li>
        <li className="nav-item">
          <a
            className={registerClassContent}
            data-toggle="tab"
            href="#register"
            role="tab"
            aria-selected="false"
          >
            Register
          </a>
        </li>
       </ul>
    )
  }


  loginForm = () => {

    let classContent = null
    if(this.props.currentActiveTab == 'login') {
      classContent = "tab-pane fade show active"
    } else {
      classContent = "tab-pane fade"
    }

    return (
      <div className={classContent} id="login" role="tabpanel">
        <form id="login-form" action="#" method="post">
          <div className="form-group">
            <input
              type="text"
              name="username"
              id="username"
              tabIndex={1}
              className="form-control"
              placeholder="Email or Usernames"
              required
              onChange={this.handleInputChange}
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              name="password"
              id="password"
              tabIndex={2}
              className="form-control"
              placeholder="Password"
              required
              onChange={this.handleInputChange}
            />
          </div>
          <div className="row mar-top-20">
            <div className="col-md-6 col-12 text-left">
              <div className="res-box">
                <input
                  type="checkbox"
                  tabIndex={3}
                  name="remember"
                  id="remember"
                  onChange={this.handleInputChange}
                />
                <label htmlFor="remember">Remember Me</label>
              </div>
            </div>
            <div className="col-md-6 col-12 text-right">
              <div className="res-box sm-left">
                <a
                  href="#"
                  tabIndex={5}
                  className="forgot-password"
                >
                  Forgot Password?
                </a>
              </div>
            </div>
          </div>
          <this.authButtons buttonType="login"/>
        </form>
     </div>
    )
  }


  registrationForm = () => {

    let classContent = null
    if(this.props.currentActiveTab == 'register') {
      classContent = "tab-pane fade show active"
    } else {
      classContent = "tab-pane fade"
    }

    return(
      <div className={classContent} id="register" role="tabpanel">
      <form id="register-form" action="#" method="post">
        <div className="form-group">
          <input
            type="text"
            name="registration_username"
            id="registration_username"
            tabIndex={1}
            className="form-control"
            placeholder="Username"
            required
            onChange={this.handleInputChange}
          />
        </div>
        <div className="form-group">
          <input
            type="email"
            name="registration_email"
            id="registration_email"
            tabIndex={1}
            className="form-control"
            placeholder="Email Address"
            required
            onChange={this.handleInputChange}
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            name="registration_password"
            id="registration_password"
            tabIndex={2}
            className="form-control"
            placeholder="Password"
            required
            onChange={this.handleInputChange}
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            name="registration_confirmpassword"
            id="registration_confirmpassword"
            tabIndex={2}
            className="form-control"
            placeholder="Confirm Password"
            onChange={this.handleInputChange}
            required
          />
        </div>
        <div className="res-box text-left">
          <input
            type="checkbox"
            tabIndex={3}
            name="tnc"
            id="tnc"
            onChange={this.handleInputChange}
          />
          <label htmlFor="remember">
            I've read and accept terms & conditions
          </label>
        </div>
        <this.authButtons buttonType="sign-up"/>
      </form>
    </div>
    )
  }



  render() {
    return (
       <Modal
       aria-labelledby="simple-modal-title"
       aria-describedby="simple-modal-description"
       open={this.props.modalOpen}
       onClose={this.props.handleClose}
      >
      <div className="user-login-section section-padding bg-fixed">
        <div className="container">
          <div className="row">
            <div className="col-md-10 offset-md-1 text-center">
              <div className="modal-wrapper">
              <a onClick={this.props.handleClose} className="float-right" style = {{marginTop: "10px", marginRight: "10px"}}>
                <CloseIcon/>
              </a>
                <div className="login-wrapper">
                <this.navigationTabs/>
                <div className="ui-dash tab-content">
                  <this.loginForm/>
                  <this.registrationForm/>
                  <div className="social-profile-login text-center mar-top-30">
                      <h5>or</h5>
                      <ul>
                        <li>
                          <a href="#">
                          <img src={GoogleLoginButton}/>
                          </a>
                        </li>
                      </ul>
                    </div>
                </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </Modal>
    );
  }
}

export default LoginModal;
