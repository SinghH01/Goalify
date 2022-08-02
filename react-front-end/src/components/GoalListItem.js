import React, { useState } from "react";
import moment from 'moment';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';
import "./GoalList.css"
import GoalDetails from "./GoalDetails";
import Axios from 'axios'
import { useRecoilState } from 'recoil';
import { userState } from '../App';


function GoalListItem(props) {

  const [modalShow, setModalShow] = useState(false)
  const [milestones, setMilestones] = useState([])
  const [favState, setFavState] = useState(false)
  const [user, setUser] = useRecoilState(userState);
  const goalId = props.id

  const fetchMilestones = async () => {

    try {
      const response = await Axios.get(`/api/milestones/${goalId}`);
      setMilestones(response.data);
    } catch (error) {
      console.log(error);
    }
  };


  function openTab() {
    setModalShow(true)
    fetchMilestones()
  }

  const likeGoal = async () => {
    try {
      const response = await Axios.post('http://localhost:8080/favourites/like', { userId: user.id, goalId: props.id });
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  const dislikeGoal = async () => {
    try {
      const response = await Axios.post('http://localhost:8080/favourites/dislike', { userId: user.id, goalId: props.id });
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  function favButton() {
    if (favState === false) {
      likeGoal();
      setFavState(true)
    } else {
      dislikeGoal();
      setFavState(false);
    }
  }


  let styles = {
    width: '30%',
    marginBlock: '36px',
    marginInline: 'auto',
    boxShadow: '1px 1px 14px #999',
    cursor: "pointer"
  };

  return (
    <>
      <Card onClick={() => openTab()} style={styles}>
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
              {favState === false && (<FavoriteBorderIcon onClick={favButton} />)}
              {favState === true && (<FavoriteIcon onClick={favButton} />)}

            </span>
            <span>
              <Button variant="primary" style={{ width: '66px', height: '42px' }}>Join</Button>
            </span>
          </ListGroup.Item>
        </ListGroup>

      </Card >

      <GoalDetails
        milestones={milestones}
        goal={props}
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}

export default GoalListItem;