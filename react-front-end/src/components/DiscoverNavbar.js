import React from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { GiStairsGoal } from "react-icons/gi";
import Button from 'react-bootstrap/Button';
import axios from 'axios'
import './navbar.css'


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

    <Navbar className="nav navbar navbar-default" expand="lg" >
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
        </Nav>

        <Button variant='transparent' style={{ color: '#fff' }} onClick={logout}>Logout</Button>{' '}
      </Navbar.Collapse>
    </Navbar >

  );
}

export default DicoverNavbar;