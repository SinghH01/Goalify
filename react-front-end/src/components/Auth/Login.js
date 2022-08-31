import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import "../../styles/modal.css";
import Axios from "axios";

export default function Login({ setValue }) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  Axios.defaults.withCredentials = true;

  const login = () => {
    //Post request to server to login user
    Axios.post("http://localhost:8080/login", {
      email: email,
      password: password,
    }).then((response) => {
      console.log(response);
      if (response.data.rows !== undefined) {
        refreshPage();
      }
    });
  };
  function refreshPage() {
    window.location.reload(false);
  }

  const loginButton = () => {
    login();
    handleClose();
  };

  return (
    <>
      <div onClick={handleShow}> LOGIN</div>

      <Modal
        show={show}
        onHide={handleClose}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header className="modal-header" closeButton>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="password"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer id="modal-footer">
          <Button
            id="footer-btn"
            variant="outline-light"
            size="lg"
            onClick={loginButton}
          >
            Login
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
