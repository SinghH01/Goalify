import React from 'react'
//import Button from 'react-bootstrap/Button';
import Search from './Search';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import { GiStairsGoal } from "react-icons/gi";
import Button from 'react-bootstrap/Button';
import axios from 'axios'
import MyLandingPage from './MyLandingPage';
import Register from './Auth/Register';




function DicoverNavbar({ searchQuery, setSearchQuery }) {

  function refreshPage() {
    window.location.reload(false);
  }
  const logout = () => {
    axios.get('http://localhost:8080/logout').then((val) => {
      console.log(val);
      if (val.status == 200) {
        sessionStorage.clear()
        refreshPage()
      }
    })
  }

  return (

    <Navbar expand="lg" >
      {/* <Container > */}
      <Navbar.Brand href="" className='logoDiscover' style={{
        color: '#f8f9fa', marginInlineStart: '22px'
        , fontSize: '24px'
      }}><GiStairsGoal size='2rem' /> Goalify

      </Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav
          className="me-auto my-2 my-lg-0"
          style={{ maxHeight: '100px' }}
          navbarScroll
        >
          {/* <Nav.Link href="#action1" style={{ color: '#f8f9fa' }}>Home</Nav.Link> */}

        </Nav>

        <Button variant='transparent' style={{ color: '#fff' }} onClick={logout}>Logout</Button>{' '}
        {/* <Search setSearchQuery={setSearchQuery} /> */}
        {/* <Form className="d-flex" style={{ marginInline: '20px' }} >
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form> */}
        <NavDropdown title="Sign" id="navbarScrollingDropdown">
          <NavDropdown.Item href="#action3"><Link to="/login"> Login </Link></NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action5"><Link to="/Register">
            Register</Link>
          </NavDropdown.Item>
        </NavDropdown>
      </Navbar.Collapse>

      {/* </Container> */}
    </Navbar >

  );
}

export default DicoverNavbar;