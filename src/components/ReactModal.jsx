import React from "react";
import ButtonToolbar from "react-bootstrap/ButtonToolbar";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "../pages/CSS/ReactModal.css";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Autocomplete from "react-google-autocomplete";

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Create New Shop
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Fill out the required details below (all fields are mandatory).</h4>
        <InputGroup>
          <InputGroup.Text>Name your shop</InputGroup.Text>
          <FormControl placeholder="" />
        </InputGroup>
        <InputGroup>
          <InputGroup.Text>Pin / Zip / Post Code</InputGroup.Text>
          <FormControl placeholder="" />
        </InputGroup>
        <div id="location-search">
          <InputGroup>
            <InputGroup.Text>Address</InputGroup.Text>
            <FormControl placeholder="" />
          </InputGroup>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default function ReactModal() {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <ButtonToolbar>
      <Button
        variant=""
        id="create-new-shop"
        onClick={() => setModalShow(true)}
      >
        CREATE NEW SHOP
      </Button>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </ButtonToolbar>
  );
}
