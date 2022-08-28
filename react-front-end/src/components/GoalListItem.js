import React, { useEffect, useState, useContext } from "react";
import moment from "moment";
import Card from "react-bootstrap/Card";
import { Button } from "react-bootstrap";
import ListGroup from "react-bootstrap/ListGroup";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import FavoriteIcon from "@material-ui/icons/Favorite";
import EventAvailableIcon from "@material-ui/icons/EventAvailable";
import EventBusyIcon from "@material-ui/icons/EventBusy";
import PlaylistAddIcon from "@material-ui/icons/PlaylistAdd";
import Tooltip from "@material-ui/core/Tooltip";
import "../styles/goalListItem.css";
import GoalDetails from "./GoalDetails";
import Axios from "axios";
import { useRecoilState } from "recoil";
import { userState } from "../App";
import DashboardContext from "./DashBoardContext";
import { openNotificationWithIcon } from "./Notification";

function GoalListItem(props) {
  const [modalShow, setModalShow] = useState(false);

  const [favState, setFavState] = useState(false);
  const [user, setUser] = useRecoilState(userState);

  const providerValue = useContext(DashboardContext);
  const { setState, setRerender } = providerValue;

  const likeGoal = async () => {
    try {
      const response = await Axios.post(
        "http://localhost:8080/favourites/like",
        { userId: user.id, goalId: props.id }
      );
      openNotificationWithIcon(
        "success",
        <>
          The Goal <strong>{props.title}</strong> added on the Favourites!!!
        </>
      );
    } catch (error) {
      console.log(error);
    }
  };
  const dislikeGoal = async () => {
    try {
      const response = await Axios.post(
        "http://localhost:8080/favourites/dislike",
        { userId: user.id, goalId: props.id }
      );
      openNotificationWithIcon(
        "error",
        <>
          The Goal <strong>{props.title}</strong> removed from the Favourites!!!
        </>
      );
    } catch (error) {
      console.log(error);
    }
  };
  function favButton() {
    if (!favState) {
      likeGoal();
      setFavState((prev) => !prev);
    } else {
      dislikeGoal();
      setFavState((prev) => !prev);
      setRerender((prev) => !prev);
    }
  }

  const checkFavourite = async () => {
    try {
      const response = await Axios.post("/favourites/check", {
        userId: user.id,
        goalId: props.id,
      });
      if (response.data.liked === true) {
        setFavState((prev) => !prev);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    checkFavourite();
  }, []);

  const joinGoal = () => {
    setState("loading");
    Axios.post(`http://localhost:8080/active/add`, {
      userId: user.id,
      goalId: props.id,
    })
      .then((res) => {
        if (res.status === 204) {
          openNotificationWithIcon(
            "success",
            <>
              You have joined the Goal <strong>{props.title}</strong>!!!
            </>
          );
          setState("activegoals");
        } else Promise.reject();
      })
      .catch((err) => alert("Something went wrong"));
  };

  let styles = {
    width: "80%",
    marginBottom: "26px",
    marginInline: "auto",
    boxShadow: "rgba(0, 0, 0, 0.45) 0px 25px 20px -20px",
  };

  return (
    <>
      <Card className="goal-card" style={styles}>
        <Card.Img
          variant="top"
          src={props.image}
          style={{ height: "300px", cursor: "pointer" }}
          onClick={() => setModalShow(true)}
        />
        <Card.Body>
          <Card.Title>
            <h3> {props.title}</h3>
          </Card.Title>
          <Card.Text className="text-goal">{props.description}</Card.Text>
        </Card.Body>

        <ListGroup className="list-group-flush">
          <ListGroup.Item
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
          </ListGroup.Item>

          <ListGroup.Item
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <span>
              {!favState ? (
                <Tooltip title="Add to favourites" placement="right">
                  <FavoriteBorderIcon
                    className="favourite-button-unclicked"
                    onClick={favButton}
                  />
                </Tooltip>
              ) : (
                <Tooltip title="Remove from favourites" placement="right">
                  <FavoriteIcon
                    className="favourite-button-clicked"
                    onClick={favButton}
                  />
                </Tooltip>
              )}
            </span>
            <span>
              <Button
                id="join-btn"
                variant="primary"
                size="md"
                onClick={joinGoal}
              >
                <PlaylistAddIcon /> Join
              </Button>
            </span>
          </ListGroup.Item>
        </ListGroup>
      </Card>

      <GoalDetails
        goal={props}
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}

export default GoalListItem;
