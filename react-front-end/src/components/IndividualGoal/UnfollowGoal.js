import React, { useState, useEffect } from "react";
import Axios from 'axios'
import { Button } from 'antd';


function UnFollowGoal() {


  const unfolloweGoal = ({userId, goalId}) => {
    Axios
      .delete(
        `http://localhost:8080/active/delete/`,{ userId: user.id, goalId: goalId })
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