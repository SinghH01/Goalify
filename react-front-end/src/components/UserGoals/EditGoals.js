import React, { useState, useEffect } from "react";
import Axios from "axios";
import GoalForm from "./GoalForm";



const EditGoal = (props) => {

  
  const formValues = {
    title: props.goal.title,
    description: props.goal.description,
    image: props.goal.image
  }

  const onSubmit = (GoalObject) => {
    props.handleLoading();
    Axios
      .put(
        `http://localhost:8080/api/goals/edit/${props.goal.id}`,
        GoalObject
      )
      .then((res) => {
        if (res.status === 204) {
          window.location.reload();
        } else Promise.reject();
      })
      .catch((err) => alert("Something went wrong"));
  };

  
  

  return (
    <>
      <h1>Edit a Goal</h1>
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
