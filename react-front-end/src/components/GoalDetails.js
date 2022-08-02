import React from "react";
import Modal from 'react-bootstrap/Modal';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import {useState, useEffect} from "react";
import Loading from "./Loading";
import Axios from 'axios'



function GoalDetails(props) {
  const [loading, setLoading] = useState(true)
  const [milestones, setMilestones] = useState([])

  useEffect(() => {
    fetchMilestones();
  }, []);

  const goalId = props.goal.id

  const fetchMilestones = async () => {

    try {
      const response = await Axios.get(`/api/milestones/${goalId}`);
      setMilestones(response.data);
      setLoading(false)
    } catch (error) {
      console.log(error);
    }
  };


  if (loading){
    return <Loading/>
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
        <Card.Img variant="top" src={props.goal.image}  />
      </Card>
        <Modal.Body>
          <h4>Description</h4>
          <p>
            {props.goal.description}
          </p>
          <h4>MilseStones</h4>
          <Accordion>
            <Accordion.Item eventKey="0">
              <Accordion.Header>{milestones[0].title}</Accordion.Header>
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
        <Modal.Footer>
          {/* <Button variant="primary" style={{ width: '66px', height: '42px' }}>Join</Button> */}
          {/* <Button onClick={props.onHide}>Close</Button> */}
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default GoalDetails


