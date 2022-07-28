import React from "react";
import moment from 'moment';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

function GoalListItem(props) {
  let styles = {
    width: '30rem',
    marginLeft: '20rem',
  };

  return (
    <li>
      <Card style={styles}>
        <Card.Img variant="top" src={props.image} />
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>
            {props.description}
          </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>Start Date{`-${moment(props.start_date).format('MMMM Do, YYYY')}`}</ListGroup.Item>
          <ListGroup.Item>End Date{`-${moment(props.End_date).format('MMMM Do, YYYY')}`}</ListGroup.Item>
        </ListGroup>
        <Card.Body>
          <Button variant="primary">Join</Button>
        </Card.Body>
      </Card>
    </li>
  );
}

export default GoalListItem;