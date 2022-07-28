import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Axios from 'axios';

export default function Register() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  const [firstnameReg, setFirstnameReg] = useState('')
  const [lastnameReg, setLastnameReg] = useState('')
  const [emailReg, setEmailReg] = useState('')
  const [passwordReg, setPasswordReg] = useState('')


  const register = () => {
    Axios.post('http://localhost:8080/register',{firstname: firstnameReg, lastname: lastnameReg, email: emailReg, password: passwordReg})
    .then((response) => {
      console.log(response)
    });
  }

  const registerButton = () => {
    register();
    handleClose();
  }

  return (
    <>
      <Button variant="light" onClick={handleShow}>
       Register
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Firstname</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                onChange={(e)=> {setFirstnameReg(e.target.value)}}
                autoFocus
              />
              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
              <Form.Label>Lastname</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                onChange={(e)=> {setLastnameReg(e.target.value)}}
                autoFocus
              />
              </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                onChange={(e)=> {setEmailReg(e.target.value)}}
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput4">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="password"
                onChange={(e)=> {setPasswordReg(e.target.value)}}
                autoFocus
              />
            </Form.Group>

          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={registerButton}>
            Register
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}



