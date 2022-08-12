import React, { useEffect, useState,useContext } from "react";
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
import DashboardContext from "./DashBoardContext";
import { notification } from 'antd';


function GoalListItem(props) {

  const [modalShow, setModalShow] = useState(false)

  const [favState, setFavState] = useState(false)
  const [user, setUser] = useRecoilState(userState);

  const setState = useContext(DashboardContext)



  const likeGoal = async () => {
    try {
      const response = await Axios.post('http://localhost:8080/favourites/like', { userId: user.id, goalId: props.id });
      openNotificationWithIcon("success", <>
      The Goal <strong>{props.title}</strong> added on the Favourites!!!
    </>);
    } catch (error) {
      console.log(error);
    }
  };
  const dislikeGoal = async () => {
    try {
      const response = await Axios.post('http://localhost:8080/favourites/dislike', { userId: user.id, goalId: props.id });
      openNotificationWithIcon("error", <>
      The Goal <strong>{props.title}</strong> removed from the Favourites!!!
    </>);
    } catch (error) {
      console.log(error);
    }
  };
  function favButton() {
    if (!favState) {
      likeGoal();
      setFavState(prev => !prev);

    } else {
      dislikeGoal();
      setFavState(prev => !prev);
    }
  };

  const checkFavourite = async () => {
    try {
      const response = await Axios.post('/favourites/check', { userId: user.id, goalId: props.id });
      if (response.data.liked === true) {
        setFavState(prev => !prev);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    checkFavourite();
  }, [])

  const openNotificationWithIcon = (type, text) => {
    notification[type]({
      message: 'Goalify',
      description: (
        text
      )
    });
  };

  


  const joinGoal = () => {
    setState("loading")
    Axios.post(
      `http://localhost:8080/active/add`,
      { userId: user.id, goalId: props.id })
      .then((res) => {
        if (res.status === 204) {
          openNotificationWithIcon("success", <>
      You have joined the <strong>{props.title}</strong> goal!!!</>);
          setState("activegoals");
        } else Promise.reject();
      })
      .catch(err => alert('Something went wrong'))
  };



  let styles = {
    width: "80%",
    marginBottom: '26px',
    marginInline: 'auto',
    boxShadow: '1px 1px 14px #999',
  };


  return (
    <>
      <Card className="goal-card" style={styles}>
        <Card.Img variant="top" src={props.image} style={{ height: '300px', cursor: "pointer" }} onClick={() => setModalShow(true)} />
        <Card.Body >
          <Card.Title>{props.title}</Card.Title>
          <Card.Text className="text-goal">
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

          <ListGroup.Item style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span >
              {!favState ?
                <FavoriteBorderIcon style={{ cursor: "pointer" }} onClick={favButton} />
                :
                <FavoriteIcon style={{ cursor: "pointer" }} onClick={favButton} />
              }
            </span>
            <span>
              <Button variant="primary" style={{ width: '66px', height: '42px' }} onClick={joinGoal}>Join</Button>
            </span>
          </ListGroup.Item>
        </ListGroup>

      </Card >


      < GoalDetails
        goal={props}
        show={modalShow}
        onHide={() => setModalShow(false)}
      />

    </>
  );
}

export default GoalListItem;