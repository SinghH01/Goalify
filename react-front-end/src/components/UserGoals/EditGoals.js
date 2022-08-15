import React, { useState, useEffect } from "react";
import Axios from "axios";
import GoalForm from "./GoalForm";
import { openNotificationWithIcon } from "../Notification";




const EditGoal = (props) => {

  const formValues = {
    title: props.goal.title,
    description: props.goal.description,
    image: "",
    start_date: "",
    end_date: ""
  };

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
          openNotificationWithIcon(
            "warning",
            <>
          Thank you <strong>{props.userName}</strong>.<br />
          Your Gaol has been successfully Edited!!!
        </>
          );
        } else Promise.reject();
      })
      .catch((err) => alert("Something went wrong"));
  };




  return (
    <>
      <h2 className="goal_header">Edit Goal</h2>
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
