import React from "react";
import Modal from "react-bootstrap/Modal";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import EventAvailableIcon from "@material-ui/icons/EventAvailable";
import EventBusyIcon from "@material-ui/icons/EventBusy";
import { useState, useEffect } from "react";
import Loading from "./Loading";
import Axios from "axios";
import moment from "moment";

function GoalDetails(props) {
  const [loading, setLoading] = useState(true);
  const [milestones, setMilestones] = useState([]);
  const [goalLocation, setGoalLocation] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const goalId = props.goal.id;

  const fetchData = async () => {
    try {
      const response = await Axios.get(`/api/milestones/${goalId}`);
      const res = await Axios.get(`/api/goals/goal_location/${goalId}`);
      setGoalLocation(res.data);
      setMilestones(response.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  if (loading) {
    return <Loading />;
  }

  let individualMilestone = milestones.map((milestone, index) => {
    return (
      <Accordion.Item eventKey={index} key={milestone.id}>
        <Accordion.Header>{milestone.title}</Accordion.Header>
        <Accordion.Body>{milestone.description}</Accordion.Body>
      </Accordion.Item>
    );
  });

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
          <Card.Body
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            <Card.Title>Location</Card.Title>
            <Card.Title>
              {!props.goal.online_goal
                ? "Online"
                : `${goalLocation[0].street}, ${goalLocation[0].city}, ${goalLocation[0].province}`}
            </Card.Title>
          </Card.Body>
        </Card>
        <Modal.Body>
          <h4>Description</h4>
          <p>{props.goal.description}</p>
          <h4>MilseStones</h4>
          <Accordion>{individualMilestone}</Accordion>
        </Modal.Body>
        <Modal.Footer
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <span>
            <EventAvailableIcon />
            {` ${moment(props.start_date).format("MMMM Do, YYYY")}`}
          </span>
          <span>
            <EventBusyIcon />
            {` ${moment(props.end_date).format("MMMM Do, YYYY")}`}
          </span>
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default GoalDetails;
