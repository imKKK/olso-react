import React, { Component, Fragment } from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "./CSS/userProfile.style.min.css";
import profileImage from "../assets/images/UserProfile/user_pic-225x225.png";
import checkImage from "../assets/images/UserProfile/10-512.png";
// import "./CSS/userProfile.url.styles.css";


class UserProfileView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isTrue: true,
            userEmail: "Email Address",
            userPhone: "Phone Number",
            userPic: null,
            userName: "User",
            joined: "2019"
        }
    }


    render() {
        const {
            userEmail,
            userPhone,
            userPic,
            userName,
            joined } = this.state;
        return (
            <Fragment>
                <section id="profile">
                    <Container>
                        <div className="d-flex justify-content-end mb-4">
                            <div className="custom-control custom-switch">
                                <input
                                    type="checkbox"
                                    className="custom-control-input"
                                    id="customSwitch1"
                                />
                                <label className="custom-control-label" for="customSwitch1">Toggle switch</label>
                            </div>
                        </div>
                        <Row>
                            <Col>
                                <Row>
                                    <Col md={4}>
                                        <div className="card">
                                            <div className="d-flex justify-content-center align-items-center p-4">
                                                <img
                                                    src={userPic ? userPic : profileImage}
                                                    className="card-img-top rounded-circle"
                                                    alt="users"
                                                />
                                            </div>
                                            <div className="card-body userid">
                                                <hr />
                                                <h6 className="text-dark mt-4 text-left">User Provided</h6>
                                                <div className="mt-4 text-secondary d-flex">
                                                    <img
                                                        src={checkImage}
                                                        alt="check"
                                                        className="align-self-center"
                                                    />
                                                    <div className="align-self-center mx-1">{userEmail}</div>
                                                </div>
                                                <div className="mt-3 text-secondary d-flex">
                                                    <img
                                                        src={checkImage}
                                                        alt="check"
                                                        className="align-self-center"
                                                    />
                                                    <div className="align-self-center mx-1">{userPhone}</div>
                                                </div>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col md={6} className="mx-auto mt-5 mt-md-0 text-center text-md-left">
                                        <h1 className="display-4">Hi, I’m {userName}</h1>
                                        <p className="text-secondary ml-1">
                                            Joined in {joined} . <Link to="/dashboard">Edit profile</Link>
                                        </p>
                                        <Link to={"/"} className="mt-5">Report this profile</Link>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Container>
                </section>
            </Fragment>
        )
    }
} export default UserProfileView;