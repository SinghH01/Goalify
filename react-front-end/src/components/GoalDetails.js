import React from "react";
import Modal from 'react-bootstrap/Modal';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import { useState, useEffect } from "react";
import Loading from "./Loading";
import Axios from 'axios'
import moment from 'moment';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';






function GoalDetails(props) {
  const [loading, setLoading] = useState(true)
  const [milestones, setMilestones] = useState([])
  const [goalLocation, setGoalLocation] = useState([])


  useEffect(() => {
    fetchData();
  }, []);

  const goalId = props.goal.id

  const fetchData = async () => {
    try {
      const response = await Axios.get(`/api/milestones/${goalId}`);
      const res = await Axios.get(`/api/goals/goal_location/${goalId}`);
      setGoalLocation(res.data);
      setMilestones(response.data);
      setLoading(false)
    } catch (error) {
      console.log(error);
    }
  };


  if (loading) {
    return <Loading />;
  }


  return (

    <>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>

          <Modal.Title id="contained-modal-title-vcenter">
            {props.goal.title}
          </Modal.Title>
        </Modal.Header>
        <Card>
          <Card.Img variant="top" src={props.goal.image} />
          <Card.Body style={{ display: 'flex', justifyContent: 'space-between' }}>
            <Card.Title>Location</Card.Title>
            <Card.Title>{!props.goal.online_goal ? "Online" : `${goalLocation[0].street}, ${goalLocation[0].city}, ${goalLocation[0].province}`}</Card.Title>
          </Card.Body>
        </Card>
        <Modal.Body>
          <h4>Description</h4>
          <p>
            {props.goal.description}
          </p>
          <h4>MilseStones</h4>
          <Accordion>
            <Accordion.Item eventKey="0">
              <Accordion.Header>
                {milestones[0].title}
              </Accordion.Header>
              <Accordion.Body>
                {milestones[0].description}
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>{milestones[1].title}</Accordion.Header>
              <Accordion.Body>
                {milestones[1].description}
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>{milestones[2].title}</Accordion.Header>
              <Accordion.Body>
                {milestones[2].description}
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Modal.Body>
        <Modal.Footer style={{ display: 'flex', justifyContent: 'space-between' }}>
          <span >
            Start Date{`-${moment(props.goal.start_date).format('MMMM Do, YYYY')}`}
          </span>
          <span>
            End Date{`-${moment(props.goal.end_date).format('MMMM Do, YYYY')}`}
          </span>
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default GoalDetails


