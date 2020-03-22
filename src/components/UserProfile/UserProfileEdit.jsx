import React, { Component, Fragment } from 'react';
import { Row, Col, Container, Modal, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { Form, Input, Label, Button } from 'reactstrap';
// import { Link } from 'react-router-dom';
// import profileImage from "../../assets/images/UserProfile/user_pic-225x225.png";
// import checkImage from "../../assets/images/UserProfile/10-512.png";
import "../../pages/CSS/userProfile.style.min.css";
import $ from 'jquery';


class UserProfileView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isTrue: true,
            userEmail: "Email Address",
            userPhone: "Phone Number",
            userPic: null,
            userName: "User",
            joined: "2019",
            isLanguageModal: false,
            isVatModal: false,
            genderList: [
                {
                    label: "Male",
                    value: 1
                },
                {
                    label: "Female",
                    value: 2
                },
                {
                    label: "Others",
                    value: 3
                }
            ],
            dobList: {
                months: [
                    {
                        label: "January",
                        value: 1
                    },
                    {
                        label: "February",
                        value: 2
                    },
                    {
                        label: "March",
                        value: 3
                    }
                ],
                days: [
                    {
                        label: 1,
                        value: 1
                    },
                    {
                        label: 2,
                        value: 2
                    },
                    {
                        label: 3,
                        value: 3
                    }
                ],
                years: [
                    {
                        label: "1990",
                        value: "1990"
                    },
                    {
                        label: "1991",
                        value: "1991"
                    },
                    {
                        label: "1992",
                        value: "1992"
                    }
                ]
            },
            phoneCodeList: [
                {
                    label: "India (+91)",
                    value: "91"
                },
                {
                    label: "USA (+93)",
                    value: "93"
                },
                {
                    label: "China (+32)",
                    value: "32"
                }
            ],
            languageList: [
                {
                    label: "English",
                    value: "en"
                },
                {
                    label: "Tamil",
                    value: "ta"
                },
                {
                    label: "Hindi",
                    value: "hn"
                }
            ],
            currencyList: [
                {
                    label: "Indian Rupee",
                    value: "INR"
                },
                {
                    label: "US Dollar",
                    value: "USD"
                },
                {
                    label: "Chinese Yen",
                    value: "CY"
                }
            ],
            timeZoneList: [
                {
                    label: "(GMT-08:00) Arizona",
                    value: 1
                },
                {
                    label: "(GMT-09:00) Antartica",
                    value: 2
                },
                {
                    label: "(GMT-05:00) Africa",
                    value: 3
                }
            ],
            nationalList: [
                {
                    label: "Indian",
                    value: "in"
                },
                {
                    label: "American",
                    value: "us"
                },
                {
                    label: "Algerian",
                    value: "al"
                }
            ],
            memberStateList: [
                {
                    label: "Karnataka",
                    value: "KA"
                },
                {
                    label: "Maharastra",
                    value: "MH"
                },
                {
                    label: "Tamil Nadu",
                    value: "TN"
                }
            ]
        }
    }

    componentDidMount = () => {

    }

    toggleLanguageModal = () => {
        const { isLanguageModal } = this.state;

        this.setState({
            isLanguageModal: !isLanguageModal
        })
    }

    toggleVatModal = () => {
        const { isVatModal } = this.state;

        this.setState({
            isVatModal: !isVatModal
        })
    }


    render() {
        const {
            userEmail,
            userPhone,
            userPic,
            userName,
            joined,
            isLanguageModal,
            isVatModal,
            genderList,
            dobList,
            phoneCodeList,
            languageList,
            currencyList,
            timeZoneList,
            nationalList,
            memberStateList
        } = this.state;

        return (
            <Fragment>
                <Container>
                    <div className="card text-left">
                        <div className="card-header">
                            Featured
                        </div>
                        <div className="card-body text-secondary">
                            <form>
                                <Row className="mb-md-4 mb-3">
                                    <Col md={2} className="text-md-right">
                                        <Label className="pr-md-0 text-md-right mt-md-1" for="inlineFormCustomSelectPref">First Name</Label>
                                    </Col>
                                    <Col md={10}>
                                        <Input type="text" className="form-control" />
                                    </Col>
                                </Row>
                                <Row className="mb-md-4 mb-3">
                                    <Col md={2} className="text-md-right">
                                        <Label className="pr-md-0 text-md-right mt-md-1" for="inlineFormCustomSelectPref">Last Name</Label>
                                    </Col>
                                    <Col md={10}>
                                        <Input type="text" className="form-control" />
                                        <small className="form-text text-muted">
                                            Your public profile only shows your first name. When you request a booking, your host will see your first and last name.
                                            </small>
                                    </Col>
                                </Row>
                                <Row className=" mb-md-4 mb-3">
                                    <Col md={2} className="text-md-right">
                                        <Label className="pr-md-0 text-md-right mt-md-2" for="inlineFormCustomSelectPref">
                                            I am <span>
                                                <OverlayTrigger
                                                    key="top1"
                                                    placement="top"
                                                    overlay={
                                                        <Tooltip id={`tooltip-top1`}>
                                                            Private
                                                         </Tooltip>
                                                    }
                                                >
                                                    <i className="fas fa-lock ml-1 text-danger" data-placement="top" title="Private"></i>
                                                </OverlayTrigger>
                                            </span>
                                        </Label>
                                    </Col>
                                    <Col md={10}>
                                        <Input type="select" className="form-control gender my-1 mr-sm-2" id="inlineFormCustomSelectPref">
                                            {genderList.map(gender => (
                                                <option value={gender.value}>{gender.label}</option>
                                            ))}
                                        </Input>
                                        <small className="form-text text-muted">
                                            We use this data for analysis and never share it with other users.
                                            </small>
                                    </Col>
                                </Row>
                                <Row className="mb-md-4 mb-3">
                                    <Col md={2} className="text-md-right">
                                        <Label className="pr-md-0 text-md-right mt-md-2" for="inlineFormCustomSelectPref">Birth Day<span>
                                            <OverlayTrigger
                                                key="top2"
                                                placement="top"
                                                overlay={
                                                    <Tooltip id={`tooltip-top2`}>
                                                        Private
                                                </Tooltip>
                                                }
                                            >
                                                <i className="fas fa-lock ml-1 text-danger" data-placement="top" title="Private"></i>
                                            </OverlayTrigger>
                                        </span>
                                        </Label>
                                    </Col>
                                    <Col md={10}>
                                        <Row>
                                            <Col md={2} className="col pr-1">
                                                <Input type="select" className="form-control my-1 mr-sm-2" id="inlineFormCustomSelectPrefs1">
                                                    {dobList.months.map(month => (
                                                        <option value={month.value}>{month.label}</option>
                                                    ))}
                                                </Input>
                                            </Col>
                                            <Col md={2} className="col px-0">
                                                <Input type="select" className="form-control my-1 mr-sm-2" id="inlineFormCustomSelectPrefs2">
                                                    {dobList.days.map(day => (
                                                        <option value={day.value}>{day.label}</option>
                                                    ))}
                                                </Input>
                                            </Col>
                                            <Col md={2} className="col pl-1">
                                                <Input type="select" className="form-control my-1 mr-sm-2" id="inlineFormCustomSelectPrefs3">
                                                    {dobList.years.map(year => (
                                                        <option value={year.value}>{year.label}</option>
                                                    ))}
                                                </Input>
                                            </Col>
                                        </Row>
                                        <small className="form-text text-muted">
                                            The magical day you were dropped from the sky by a stork. We use this data for analysis and never share it with other users.
                                            </small>
                                    </Col>
                                </Row>
                                <Row className="mb-md-4 mb-3">
                                    <Col md={2} className="text-md-right">
                                        <Label className="pr-md-0 text-md-right mt-md-1" for="inlineFormCustomSelectPrefs7">Email<span>
                                            <OverlayTrigger
                                                key="top3"
                                                placement="top"
                                                overlay={
                                                    <Tooltip id={`tooltip-top3`}>
                                                        Private
                                                </Tooltip>
                                                }
                                            >
                                                <i className="fas fa-lock ml-1 text-danger" data-placement="top" title="Private"></i>
                                            </OverlayTrigger>
                                        </span>
                                        </Label>
                                    </Col>
                                    <Col md={10}>
                                        <Input type="email" className="form-control" />
                                        <small className="form-text text-muted">
                                            We won’t share your private email address with other Airbnb users. Learn more.
                                            </small>
                                    </Col>
                                </Row>
                                <Row className="mb-md-4 mb-3 phones">
                                    <Col md={2} className="text-md-right">
                                        <Label className="pr-md-0 text-md-right mt-md-1" for="inlineFormCustomSelectPrefs7">Phone<span>
                                            <OverlayTrigger
                                                key="top4"
                                                placement="top"
                                                overlay={
                                                    <Tooltip id={`tooltip-top4`}>
                                                        Private
                                                </Tooltip>
                                                }
                                            >
                                                <i className="fas fa-lock ml-1 text-danger" data-placement="top" title="Private"></i>
                                            </OverlayTrigger>
                                        </span></Label>
                                    </Col>
                                    <Col md={10}>
                                        <small className="form-text text-muted">
                                            This is so your hosts, guests, and Airbnb can contact you. This is the number for guest contacts, booking requests, reminders, and other notifications.
                                            </small>
                                        <div className="mt-3 d-flex justify-content-between">
                                            <h6 className="text-dark">+91********24</h6>
                                            <a href="#">Remove</a></div>
                                        <div id="add-phone" className="d-inline">Add Phone number</div>
                                        <Row className="mt-3" id="add-phone-users" style={{ display: "none" }}>
                                            <Col md={8}>
                                                <div className="card">
                                                    <div className="card-body">
                                                        <h6>Add a phone number</h6>
                                                        <p>We’ll send notifications to this phone number.</p>
                                                        <div className="form-group mb-3 mt-4">
                                                            <Input type="select" className="form-control" id="exampleFormControlSelect1">
                                                                {phoneCodeList.map(code => (
                                                                    <option value={code.value}>{code.label}</option>
                                                                ))}
                                                            </Input>
                                                        </div>
                                                        <div className="input-group mb-3">
                                                            <div className="input-group-prepend">
                                                                <span className="input-group-text">+1</span>
                                                            </div>
                                                            <Input type="number" className="form-control" />
                                                        </div>
                                                        <div className="form-group">
                                                            <Button color="danger" className="mr-1">Verify via sms</Button>
                                                            <Button color="danger">Verify via phone</Button>
                                                        </div>
                                                        <a href="#">Why Verify?</a>
                                                    </div>
                                                </div>
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>
                                <Row className="mb-md-4 mb-3">
                                    <Col md={2} className="text-md-right">
                                        <Label className="pr-md-0 text-md-right mt-md-2" for="inlineFormCustomSelectPref"> Language</Label>
                                    </Col>
                                    <Col md={10}>
                                        <Input type="select" className="form-control gender my-1 mr-sm-2" id="inlineFormCustomSelectPrefss">
                                            {languageList.map(language => (
                                                <option value={language.value}>{language.label}</option>
                                            ))}
                                        </Input>
                                        <small className="form-text text-muted">
                                            We'll send you messages in this language.
                                            </small>
                                    </Col>
                                </Row>
                                <Row className="mb-md-4 mb-3">
                                    <Col md={2} className="text-md-right">
                                        <Label className="pr-md-0 text-md-right mt-md-2" for="inlineFormCustomSelectPref">Currency</Label>
                                    </Col>
                                    <Col md={10}>
                                        <Input type="select" className="form-control gender my-1 mr-sm-2" id="inlineFormCustomSelectPrefCurrency">
                                            {currencyList.map(currency => (
                                                <option value={currency.value}>{currency.label}</option>
                                            ))}
                                        </Input>
                                        <small className="form-text text-muted">
                                            We’ll show you prices in this currency.
                                        </small>
                                    </Col>
                                </Row>
                                <Row className="mb-md-4 mb-3">
                                    <Col md={2} className="text-md-right">
                                        <Label className="pr-md-0 text-md-right mt-md-2" for="inlineFormCustomSelectPref">Where you live</Label>
                                    </Col>
                                    <Col md={10}>
                                        <Input type="text" className="form-control" placeholder="e.g. Paris,France/Brooklyn,NY" />
                                    </Col>
                                </Row>
                                <Row className="mb-md-4 mb-2">
                                    <Col md={2} className="text-md-right">
                                        <Label className="pr-md-0 mt-md-2" for="inlineFormCustomSelectPref">Describe your self</Label>
                                    </Col>
                                    <Col md={10}>
                                        <div className="form-group">
                                            <textarea className="form-control" id="exampleFormControlTextarea1" rows="4"></textarea>
                                        </div>
                                    </Col>
                                </Row>
                                <Row className="mb-md-4 mb-3">
                                    <Col md={2}>
                                        <Label className="pr-md-0 mt-md-2" for="inlineFormCustomSelectPref"></Label>
                                    </Col>
                                    <Col md={10} className="text-muted">
                                        <p>Airbnb is built on relationships. Help other people get to know you.</p>
                                        <br></br>
                                        <p>Tell them about the things you like: What are 5 things you can’t live without? Share your favorite travel destinations, books, movies, shows, music, food.</p>
                                        <br></br>
                                        <p>Tell them what it’s like to have you as a guest or host: What’s your style of traveling? Of Airbnb hosting?</p>
                                        <br></br>
                                        <p>Tell them about you: Do you have a life motto?</p>
                                    </Col>
                                </Row>
                            </form>
                        </div>
                    </div>

                    <div className="card mt-4 text-left">
                        <div className="card-header">
                            Optional
                                </div>
                        <div className="card-body">
                            <Row className=" mb-md-4 mb-3">
                                <Col md={2} className="text-md-right">
                                    <Label className=" pr-md-0 text-md-right mt-md-1" for="inlineFormCustomSelectPrefs10">School</Label>
                                </Col>
                                <Col md={10}>
                                    <Input type="text" className="form-control" />
                                </Col>
                            </Row>
                            <Row className=" mb-md-4 mb-3">
                                <Col md={2} className="text-md-right">
                                    <Label className="pr-md-0 text-md-right mt-md-1" for="inlineFormCustomSelectPref11">Work</Label>
                                </Col>
                                <Col md={10}>
                                    <Input type="text" className="form-control" placeholder="company name or job title" />
                                </Col>
                            </Row>
                            <Row className=" mb-md-4 mb-3">
                                <Col md={2} className="text-md-right">
                                    <Label className=" pr-md-0 text-md-right mt-md-2" for="inlineFormCustomSelectPref">Time Zone</Label>
                                </Col>
                                <Col md={10}>
                                    <Input type="select" className="form-control my-1 mr-sm-2" id="inlineFormCustomSelectPref12">
                                        {timeZoneList.map(timeZone => (
                                            <option value={timeZone.value}>{timeZone.label}</option>
                                        ))}
                                    </Input>
                                    <small className="form-text text-muted">
                                        Your home time zone.
                                    </small>
                                </Col>
                            </Row>
                            <Row className=" mb-md-4 mb-3">
                                <Col md={2} className="text-md-right">
                                    <Label className="pr-md-0 text-md-right mt-md-1" for="inlineFormCustomSelectPref123">Language</Label>
                                </Col>
                                <Col md={10}>
                                    <div className="text-secondary mb-2">None</div>
                                    <div className="add-btn d-inline" onClick={this.toggleLanguageModal}><i className="fas fa-plus mr-1 text-secondary"></i>Add More</div>
                                    <small className="form-text text-muted">
                                        Add any languages that others can use to speak with you on Airbnb
                                            </small>
                                </Col>
                            </Row>
                            <Row className=" mb-md-4 mb-3">
                                <Col md={2} className="text-md-right">
                                    <Label className="pr-md-0 mt-md-1" for="inlineFormCustomSelectPref113">VAT Number</Label>
                                </Col>
                                <Col md={10}>
                                    <div className="add-btn d-inline" onClick={this.toggleVatModal}><i className="fas fa-plus mr-1 text-secondary"></i>Add Vat ID Number</div>
                                    <small className="form-text text-muted">
                                        For European Union users or users in other countries for which VAT applies, VAT will be assessed on our Service Fees. If you live in a country where we need to charge VAT, you will not be charged VAT if you enter a valid VAT ID Number. Visit VAT FAQs »
                                            </small>
                                </Col>
                            </Row>
                            <Row className=" mb-md-4 mb-3">
                                <Col md={2} className="text-md-right">
                                    <Label className="pr-md-0 text-md-right mt-md-1" for="inlineFormCustomSelectPref115">Emergency Contact<span>
                                        <OverlayTrigger
                                            key="top5"
                                            placement="top"
                                            overlay={
                                                <Tooltip id={`tooltip-top5`}>
                                                    Private
                                                </Tooltip>
                                            }
                                        >
                                            <i className="fas fa-lock ml-1 text-danger" data-placement="top" title="Private"></i>
                                        </OverlayTrigger>
                                    </span> </Label>
                                </Col>
                                <Col md={10}>
                                    <div className="add-btn d-inline" id="add-contact"><i className="fas fa-plus mr-1 text-secondary" ></i>Add contact</div>
                                    <div id="add-users" style={{ display: "none" }}>
                                        <div>
                                            <hr></hr>
                                            <form>
                                                <Row >
                                                    <Col md={6} className="pr-md-1">
                                                        <div className="form-group">
                                                            <Label for="exampleInputPassword1">Name</Label>
                                                            <Input type="text" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                                                        </div>
                                                    </Col>
                                                    <Col md={6} className="pl-md-1">
                                                        <div className="form-group">
                                                            <Label for="exampleInputPassword1">Relationship</Label>
                                                            <Input type="text" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                                                        </div>
                                                    </Col>
                                                </Row>
                                                <Row >
                                                    <Col md={4} className="pr-md-1">
                                                        <div className="form-group mb-0 mb-md-auto">
                                                            <Label for="exampleFormControlSelect3">Phone</Label>
                                                            <Input type="select" className="form-control" id="exampleFormControlSelect1">
                                                                {phoneCodeList.map(code => (
                                                                    <option value={code.value}>{code.label}</option>
                                                                ))}
                                                            </Input>
                                                        </div>
                                                    </Col>
                                                    <Col md={8} className="pl-md-1">
                                                        <div className="form-group">
                                                            <Label for="exampleFormControlSelect4"></Label>
                                                            <Input type="number" className="form-control mt-md-2" />
                                                        </div>
                                                    </Col>
                                                </Row>
                                                <Row >
                                                    <Col md={6} className="pr-md-1">
                                                        <div className="form-group">
                                                            <Label for="exampleFormControlInput1">Email</Label>
                                                            <Input type="email" className="form-control" id="exampleFormControlInput1" />
                                                        </div>
                                                    </Col>
                                                    <Col md={6} className="pl-md-1">
                                                        <div className="form-group">
                                                            <Label for="exampleFormControlInput1">Preferred Language</Label>
                                                            <Input type="select" className="form-control" id="exampleFormControlSelect1">
                                                                {languageList.map(language => (
                                                                    <option value={language.value}>{language.label}</option>
                                                                ))}
                                                            </Input>
                                                        </div>
                                                    </Col>
                                                </Row>
                                                <Button color="danger" className="px-3">Add</Button>
                                            </form>
                                            <hr></hr>
                                        </div>
                                        <small className="form-text text-muted">
                                            Give our Customer Experience team a trusted contact we can alert in an urgent situation.
                                                </small>
                                    </div>
                                </Col>
                            </Row>
                            <Row className="mb-md-4 mb-3">
                                <Col md={2} className="text-md-right">
                                    <Label className="pr-md-0 text-md-right mt-md-1" for="inlineFormCustomSelectPref1157">Guest Profiles<span>
                                        <OverlayTrigger
                                            key="top6"
                                            placement="top"
                                            overlay={
                                                <Tooltip id={`tooltip-top6`}>
                                                    Private
                                                </Tooltip>
                                            }
                                        >
                                            <i className="fas fa-lock ml-1 text-danger" data-placement="top" title="Private"></i>
                                        </OverlayTrigger>
                                    </span> </Label>
                                </Col>
                                <Col md={10}>
                                    <div className="add-btn d-inline"><i className="fas fa-plus mr-1 text-secondary"></i><span id="add-guest">Add new guest profile</span></div>
                                    <div className="mt-4" id="add-guest-users" style={{ display: "none" }}>
                                        <hr></hr>
                                        <Row>
                                            <Col md={6}>
                                                <div className="form-group">
                                                    <Label for="exampleFormControlInput1">First name</Label>
                                                    <Input type="text" className="form-control" id="exampleFormControlInput1" />
                                                </div>
                                            </Col>
                                            <Col md={6}>
                                                <div className="form-group">
                                                    <Label for="exampleFormControlInput1">Last name</Label>
                                                    <Input type="text" className="form-control" id="exampleFormControlInput1" />
                                                </div>
                                            </Col>
                                        </Row>
                                        <div className="form-group">
                                            <Label for="exampleFormControlInput1">Nationality</Label>
                                            <Input type="select" className="form-control" id="exampleFormControlSelect1">
                                                {nationalList.map(national => (
                                                    <option value={national.value}>{national.label}</option>
                                                ))}
                                            </Input>
                                        </div>
                                    </div>
                                    <hr></hr>
                                    <small className="form-text text-muted">
                                        This information is only required when you travel to China and will not be shared with your hosts and other guests.
                                            </small>
                                </Col>
                            </Row>
                        </div>
                    </div>
                    <Row className="text-left" style={{ paddingBottom: 25 }}>
                        <Col>
                            <Button color="danger" className="btn-lg mt-4 px-4">Save</Button>
                        </Col>
                    </Row>
                </Container>

                <Modal show={isLanguageModal} className="fade" onHide={this.toggleLanguageModal}>
                    <Modal.Header className="dash">
                        Spoken Languages
                        <button type="button" className="close" onClick={this.toggleLanguageModal} aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </Modal.Header>
                    <Modal.Body className="text-secondary">
                        <small>What languages can you speak fluently? We have many international travelers who appreciate hosts who can speak their language.</small>
                        <Row className=" mt-4">
                            <Col md={6} sm={6}>
                                <div className="custom-control custom-checkbox my-1 mr-sm-2">
                                    <Input type="checkbox" className="custom-control-input" id="customControlInline" />
                                    <Label className="custom-control-label" for="customControlInline">Bahasa Indonesia</Label>
                                </div>
                            </Col>
                            <Col md={6} sm={6}>
                                <div className="custom-control custom-checkbox my-1 mr-sm-2">
                                    <Input type="checkbox" className="custom-control-input" id="customControlInline2" />
                                    <Label className="custom-control-label" for="customControlInline2">Signed Langau</Label>
                                </div>
                            </Col>
                            <Col md={6} sm={6}>
                                <div className="custom-control custom-checkbox my-1 mr-sm-2">
                                    <Input type="checkbox" className="custom-control-input" id="customControlInline3" />
                                    <Label className="custom-control-label" for="customControlInline3">Bahasa Indonesia</Label>
                                </div>
                            </Col>
                            <Col md={6} sm={6}>
                                <div className="custom-control custom-checkbox my-1 mr-sm-2">
                                    <Input type="checkbox" className="custom-control-input" id="customControlInline4" />
                                    <Label className="custom-control-label" for="customControlInline4">Signed Langau</Label>
                                </div>
                            </Col>
                            <Col md={6} sm={6}>
                                <div className="custom-control custom-checkbox my-1 mr-sm-2">
                                    <Input type="checkbox" className="custom-control-input" id="customControlInline5" />
                                    <Label className="custom-control-label" for="customControlInline5">Bahasa Indonesia</Label>
                                </div>
                            </Col>
                            <Col md={6} sm={6}>
                                <div className="custom-control custom-checkbox my-1 mr-sm-2">
                                    <Input type="checkbox" className="custom-control-input" id="customControlInline6" />
                                    <Label className="custom-control-label" for="customControlInline6">Signed Langau</Label>
                                </div>
                            </Col>
                            <Col md={6} sm={6}>
                                <div className="custom-control custom-checkbox my-1 mr-sm-2">
                                    <Input type="checkbox" className="custom-control-input" id="customControlInline7" />
                                    <Label className="custom-control-label" for="customControlInline7">Bahasa Indonesia</Label>
                                </div>
                            </Col>
                            <Col md={6} sm={6}>
                                <div className="custom-control custom-checkbox my-1 mr-sm-2">
                                    <Input type="checkbox" className="custom-control-input" id="customControlInline8" />
                                    <Label className="custom-control-label" for="customControlInline8">Signed Langau</Label>
                                </div>
                            </Col>
                        </Row>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button color="secondary" onClick={this.toggleLanguageModal}>Cancel</Button>
                        <Button color="danger" className="px-3">Save</Button>
                    </Modal.Footer>
                </Modal>

                <Modal show={isVatModal} className="fade" onHide={this.toggleVatModal}>
                    <Modal.Header className="dash">
                        <h6 className="modal-title" id="exampleModalLongTitle">VAT ID Number Verification</h6>
                        <button type="button" className="close" onClick={this.toggleVatModal} aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </Modal.Header>
                    <Modal.Body className="modal-body">
                        <small className="text-secondary">
                            Note:All non-optional fields are required
                                    </small>
                        <div className="mt-4 text-secondary">
                            <form>
                                <div className="form-group">
                                    <Label for="exampleInputPassword1">Member State</Label>
                                    <Input type="select" className="form-control gender my-1 mr-sm-2" id="inlineFormCustomSelectPref234">
                                        {memberStateList.map(memberState => (
                                            <option value={memberState.value}>{memberState.label}</option>
                                        ))}
                                    </Input>
                                </div>
                                <div className="form-group">
                                    <Label for="exampleInputPassword1">VAT Number</Label>
                                    <Input type="text" className="form-control" />
                                </div>
                                <div className="form-group">
                                    <Label for="exampleInputPassword1">Name on Registration</Label>
                                    <Input type="text" className="form-control" />
                                </div>
                                <div className="form-group">
                                    <Label for="exampleInputPassword1">Address Line 1</Label>
                                    <Input type="text" className="form-control" />
                                </div>
                                <div className="form-group">
                                    <Label for="exampleInputPassword1">Address Line 2 <small>(Optional)</small></Label>
                                    <Input type="text" className="form-control" />
                                </div>
                                <div className="form-group">
                                    <Label for="exampleInputPassword1">City</Label>
                                    <Input type="text" className="form-control" />
                                </div>
                                <div className="form-group">
                                    <Label for="exampleInputPassword1">Province / Region</Label>
                                    <Input type="text" className="form-control" />
                                </div>
                                <div className="form-group">
                                    <Label for="exampleInputPassword1">Postal Code</Label>
                                    <Input type="text" className="form-control" />
                                </div>
                                <small className="text-muted">Verification may take up to 48 hours. You will receive an email to confirm verification status.</small>
                            </form>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button color="secondary" className="px-3">Verify</Button>
                        <Button color="danger" className="px-3" onClick={this.toggleVatModal}>Cancel</Button>
                    </Modal.Footer>
                </Modal>
            </Fragment>
        )
    }
} export default UserProfileView;

// $(function () {
//     $('[data-toggle="tooltip"]').tooltip()
// })

// FOR ADD USERS
$(function () {
    $('#add-contact').on('click', () => {
        $('#add-users').fadeToggle();
    })
    // FOR SHIPING
    $('#add-shipping').on('click', () => {
        $('#add-shipping-users').fadeToggle();
    })
    // FOR GUEST
    $('#add-guest').on('click', () => {
        $('#add-guest-users').fadeToggle();
    })
    // FOR THE ADDING PHONE
    $('#add-phone').on('click', () => {
        $('#add-phone-users').fadeToggle();
    })
})

