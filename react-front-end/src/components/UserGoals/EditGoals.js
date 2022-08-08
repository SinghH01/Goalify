import React, { useState, useEffect } from "react";
import Axios from "axios";
import GoalForm from "./GoalForm";
import { notification } from 'antd';




const EditGoal = (props) => {

  const openNotificationWithIcon = (type) => {
    notification[type]({
      message: 'Goalify',
      description:
        `Thank you ${props.userName} your Gaol has been successfully Edited!!!
        `

    });
  };

  
  const formValues = {
    title: props.goal.title,
    description: props.goal.description,
    image: props.goal.image
  }

  const onSubmit = (GoalObject) => {
    props.setState("loading");
    Axios
      .put(
        `http://localhost:8080/api/goals/edit/${props.goal.id}`,
        GoalObject
      )
      .then((res) => {
        if (res.status === 204) {
          props.setState("all");
          openNotificationWithIcon("warning")
        } else Promise.reject();
      })
      .catch((err) => alert("Something went wrong"));
  };

  
  

  return (
    <>
      <h1 className="goal_header">Edit a Goal</h1>
      <GoalForm
        initialValues={formValues}
        onSubmit={onSubmit}
        enableReinitialize
      >
        Update Goal
      </GoalForm>
    </>
  );
};


export default EditGoal;
