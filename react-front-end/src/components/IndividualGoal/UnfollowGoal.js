import React, { useState, useEffect } from "react";
import Axios from 'axios'
import { Button } from 'antd';


function UnFollowGoal({ userId, goalId }) {

  const unfolloweGoal = () => {
    Axios
      .post(
        `http://localhost:8080/active/delete`, { userId, goalId })
      .then((res) => {
        if (res.status === 204) {
          alert("success")
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