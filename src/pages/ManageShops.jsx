import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "./CSS/ManageShops.css";
import CreateShopModal from "../components/ReactModal";

export class ManageShops extends Component {
  state = {
    //Manage Shops
    numberOfShops: "3",
    shopsDetails: [
      {
        shopId: "1232223",
        shopName: "My Furnitures Shop",
        shopLocations:
          "Mr John Smith. 132, My Street, Kingston, New York 12401",
        shopLogoPath: ""
      },
      {
        shopId: "1232223",
        shopName: "My Cars Shop",
        shopLocations:
          "Mr John Smith. 132, My Street, Kingston, New York 12401",
        shopLogoPath: ""
      },
      {
        shopId: "1232223",
        shopName: "My Bikes Shop",
        shopLocations:
          "Mr John Smith. 132, My Street, Kingston, New York 12401",
        shopLogoPath: ""
      }
    ],

    show: false
  };

  showModal = () => {
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false });
  };

  render() {
    const { shopsDetails } = this.state;

    return (
      <div className="main-shops-wrapper">
        <div className="shops-container">
          <header>
            <h1>Let's start by selecting a shop!</h1>{" "}
            <p>
              Create as many shops as you want, separate shops for separate
              category. Make it clean and clear, for you and for other's.
            </p>
            {/* <hr className="hr-shops-top" /> */}
            <CreateShopModal  />
          </header>

          <Container className="shops-card">
            <Row>
              {shopsDetails.map((shops, index) => (
                <Col>
                  <Card style={{ width: "18rem" }} key={index}>
                    <Card.Body>
                      <Card.Title>{shops.shopName}</Card.Title>
                      <Card.Text>{shops.shopLocations}</Card.Text>
                      <Button variant="primary">Add Items</Button>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Container>

          <div className="shops-page-advants">
            <header>
              <h2>How shops work?</h2>
              <hr className="hr-shops-top" />
            </header>
            <Row>
              <Col lg="4">
                <ul>
                  <li>Create a shop.</li>
                  <li>Select a location and name it.</li>
                  <li>Add as many items as you want</li>
                </ul>
              </Col>
              <Col lg="4">
                <ul>
                  <li>Easy shop management.</li>
                  <li>Easy location management.</li>
                  <li>Easy Management.</li>
                </ul>
              </Col>
              <Col lg="4">
                <ul>
                  <li>Requires a pro-membership.</li>
                  <li>Create unlimited shops.*</li>
                  <li>Create shops to categorize.</li>
                </ul>
              </Col>
            </Row>
            <p id="disclaimer">(*) indicates T&C</p>
          </div>
        </div>
      </div>
    );
  }
}

export default ManageShops;
