import React from "react";
import { useState, useEffect } from "react";
import moment from 'moment';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import "./GoalList.css"
import GoalDetails from "./GoalDetails";
import axios from 'axios'



function GoalListItem(props) {
  const [modalShow, setModalShow] = useState(false)
  const [milestones, setMilestones] = useState([])
  const goalId = props.id

  const fetchMilestones = async () => {
    
    try {
      const response = await axios.get(`/api/milestones/${goalId}`);
      setMilestones(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  let styles = {
    width: '30%',
    marginBlock: '36px',
    marginInline: 'auto',
    boxShadow: '1px 1px 14px #999',
    cursor: "pointer"
  };

  function openTab() {
    setModalShow(true)
    fetchMilestones()
}

  return (
    <>
      <Card onClick={() => openTab() } style={styles}>
        <Card.Img variant="top" src={props.image} style={{ height: '300px' }} />
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>
            {props.description}
          </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item style={{ display: 'flex', justifyContent: 'space-between' }}>
            <span >
              Start Date{`-${moment(props.start_date).format('MMMM Do, YYYY')}`}
            </span>
            <span>
              End Date{`-${moment(props.End_date).format('MMMM Do, YYYY')}`}
            </span>
          </ListGroup.Item>
          {/* <ListGroup.Item></ListGroup.Item> */}
          <ListGroup.Item style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span >
            </span>
            <span>
              <Button variant="primary" style={{ width: '66px', height: '42px' }}>Join</Button>
            </span>
          </ListGroup.Item>
        </ListGroup>

      </Card >
      {/* {
        milestones.map((milestone) => {
          return (
            <GoalDetails
              key={milestone.id}
              id={milestone.id}
              title={milestone.title}
              description={milestone.description}
              end_date={milestone.end_date}
              show={modalShow}
              onHide={() => setModalShow(false)}
              goal={props}
            />
          );
        })
      } */}
      <GoalDetails
        // setMilestones={setMilestones}
        milestones={milestones}
        goal={props}
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}

export default GoalListItem;