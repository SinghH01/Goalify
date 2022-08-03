import React, { useState } from "react";
import moment from 'moment';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import "../GoalList.css"
import { useRecoilState } from 'recoil';
import { userState } from '../../App';
import Goal from "./Goal";

function ActiveListItem(props) {
  const [user, setUser] = useRecoilState(userState);
  const[state, setState] = useState(true)

  let styles = {
    width: '30%',
    marginBlock: '36px',
    marginInline: 'auto',
    boxShadow: '1px 1px 14px #999',
  };

  return (
    <>
      <Card style={styles}>
          <Card.Img variant="top" src={props.image} style={{ height: '300px', cursor: "pointer" }} 
          onClick={event => props.handleClick(props.id)}/>
          <Card.Body >
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
                End Date{`-${moment(props.end_date).format('MMMM Do, YYYY')}`}
              </span>
            </ListGroup.Item>
          </ListGroup>

        </Card >             
    </>
  );
}

export default ActiveListItem;