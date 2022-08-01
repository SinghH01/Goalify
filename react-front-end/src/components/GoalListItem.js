import React from "react";
import moment from 'moment';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import "./GoalList.css"
function GoalListItem(props) {
  let styles = {
    width: '30%',
    marginBlock: '36px',
    marginInline: 'auto',
    boxShadow: '1px 1px 14px #999'
  };

  return (

    <Card style={styles}>
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
  );
}

export default GoalListItem;