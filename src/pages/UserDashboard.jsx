import React, { Component, Fragment } from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "./CSS/userProfile.style.min.css";
import UserProfileEdit from "../components/UserProfile/UserProfileEdit";


class UserDashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            istrue: true,
            currentComponent: ""
        }
    }

    handleMenuChange = (value) => {
        this.setState({
            currentComponent: value
        })
    }

    frameLoad = () => {
        const { currentComponent } = this.state;
        console.log(currentComponent)
        switch (currentComponent) {
            case "editProfile":
                return <UserProfileEdit />
            default:
                return <UserProfileEdit />
        }
    }


    render() {

        return (
            <Fragment>
                <section id="dashboard" className="mt-5">
                    <Container className="p-0 p-md-0">
                        <Row className="mx-auto">
                            <Col md={3} className="mb-4">
                                <ul className="list-group text-secondary text-left">
                                    <li className="list-group-item">
                                        <span className="actives">
                                            <i className="fas fa-user-edit"></i><span className="ml-2">Edit Profile</span>
                                        </span>
                                    </li>
                                    <li className="list-group-item">
                                        <span>
                                            <i className="fas fa-images"></i><span className="ml-2">Photos</span>
                                        </span>
                                    </li>
                                    <li className="list-group-item">
                                        <span>
                                            <i className="fas fa-user-shield"></i><span className="ml-2">Trust and Verification</span>
                                        </span>
                                    </li>
                                    <li className="list-group-item">
                                        <span>
                                            <i className="fas fa-eye"></i><span className="ml-2">Reviews</span>
                                        </span>
                                    </li>
                                    <li className="list-group-item">
                                        <span>
                                            <i className="fas fa-address-card"></i><span className="ml-2">Reference</span>
                                        </span>
                                    </li>
                                    <li className="list-group-item">
                                        <span>
                                            <i className="fas fa-address-card"></i><span className="ml-2">Document management</span>
                                        </span>
                                    </li>
                                </ul>
                                <Link to={"/user-profile-view"} className="btn btn-block btn-outline-secondary mt-4">View Profile</Link>
                            </Col>
                            <Col md={9}>
                                {this.frameLoad()}
                            </Col>
                        </Row>
                    </Container>
                </section>
            </Fragment>
        )
    }
} export default UserDashboard;