import React from "react";
import Modal from 'react-bootstrap/Modal';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';




function GoalDetails(props) {
  
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
              <Accordion.Header>{"title"}</Accordion.Header>
              <Accordion.Body>
              {/* {props.description} */}
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>title</Accordion.Header>
              <Accordion.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>Accordion Item #2</Accordion.Header>
              <Accordion.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Modal.Body>
        <Modal.Footer style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span >
              {props.favState === false && (<FavoriteBorderIcon onClick={props.favButton} />)}
              {props.favState === true && (<FavoriteIcon onClick={props.favButton} />)}
            </span>
            <span>
              <Button variant="primary" style={{ width: '66px', height: '42px' }}>Join</Button>
            </span>
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default GoalDetails


