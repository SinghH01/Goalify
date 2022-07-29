import React from 'react'
//import Button from 'react-bootstrap/Button';
import Search from './Search';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';

function DicoverNavbar({ searchQuery, setSearchQuery }) {
  return (

    <Navbar bg="light" expand="lg" >
      <Container >
        <Navbar.Brand href="" className='logoDiscover'>Goalify
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1" style={{ color: '#000' }}>Home</Nav.Link>



          </Nav>
          <Search setSearchQuery={setSearchQuery} />
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
            <NavDropdown.Item href="#action5">"
              Register
            </NavDropdown.Item>
          </NavDropdown>
        </Navbar.Collapse>

      </Container>
    </Navbar >

  );
}

export default DicoverNavbar;