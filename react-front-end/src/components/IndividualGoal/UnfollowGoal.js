import React, { useContext } from "react";
import DashboardContext from "../DashBoardContext";
import Axios from 'axios'
import { Button } from 'antd';
import { openNotificationWithIcon } from "../Notification";


function UnFollowGoal({ userId, goalId, goalTitle }) {

  const providerValue = useContext(DashboardContext)
  const { setState } = providerValue

  const unfolloweGoal = () => {
    setState("laoding")
    Axios
      .post(
        `http://localhost:8080/active/delete`, { userId, goalId })
      .then((res) => {
        if (res.status === 204) {
          openNotificationWithIcon("error", <> You Unfollow  the Goal <strong>{goalTitle}</strong> </>);
          setState("activegoals")
        } else Promise.reject();
      })
      .catch((err) => console.log(err));
  };

  return (
    <Button type="primary" danger ghost onClick={unfolloweGoal}>
      Unfollow
    </Button>
  );
}

export default UnFollowGoal