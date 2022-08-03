import React from 'react'
import { useState, useEffect } from 'react';
import Axios from 'axios'
import { useRecoilState } from 'recoil';
import { userState } from '../../App';
import Form from 'react-bootstrap/Form';
import { Table } from "react-bootstrap";
import { Nav, Navbar, Container, Row, Col }

  from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import {
  BrowserRouter as Router, Switch,
  Route, Link
} from "react-router-dom";
import GoalsTableRow from './GoalsTableRow';

function MyGoals() {

  const [goals, setGoals] = useState([]);
  const [user, setUser] = useRecoilState(userState);
console.log(goals)
  useEffect(() => {
    fetchGoals();
  }, []);

  const fetchGoals = async () => {
    try {
      const response = await Axios.get(`/api/goals/${user.id}`);
      setGoals(response.data);
    } catch (error) {
      console.log(error);
    }
  };



  

  const DataTable = () => {
    return goals.map((res, i) => {
      return <GoalsTableRow obj={res} key={i} />;
    });
  };


    return (
      <>
      <Navbar bg="dark" variant="dark">
            <Container>
              <Navbar.Brand>
                <Link to={"/create-student"} 
                  className="nav-link">
                  My Goals
                </Link>
              </Navbar.Brand>

              <Nav className="justify-content-end">
                <Nav>
                  <Link to={"/create-student"} 
                    className="nav-link">
                    Create Student
                  </Link>
                </Nav>

                <Nav>
                  <Link to={"/student-list"} 
                    className="nav-link">
                    Student List
                  </Link>
                </Nav>
              </Nav>
            </Container>
          </Navbar>

          <div className="table-wrapper">
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Title</th>
                <th>Description</th>
                <th>image</th>
                <th>Start Date</th>
                <th>End Date</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>{DataTable()}</tbody>
          </Table>
        </div>
        </>
    );

}

export default MyGoals;