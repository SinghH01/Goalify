import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Axios from 'axios'

export default function Login({setValue}) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  Axios.defaults.withCredentials = true;

  
  const login = () => {
    //Post request to server to login user
    Axios.post('http://localhost:8080/login',{email: email, password: password})
    .then((response) => {
      console.log(response)
      if(response.data.rows !== undefined) {
        const name = response.data.rows[0].first_name;
        
        setValue(response.data.rows[0])            
      }
    });
  }
 

  const loginButton = () => {
    login();
    handleClose();
  }

  return (
    <>
      <Button variant="light" onClick={handleShow}>
        Login 
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                onChange={(e)=> {setEmail(e.target.value)}}
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="password"
                onChange={(e)=> {setPassword(e.target.value)}}
                autoFocus
              />
            </Form.Group>

          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={loginButton}>
            Login
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}



