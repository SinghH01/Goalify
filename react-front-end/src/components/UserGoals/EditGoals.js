import React, { useState, useEffect } from "react";
import Axios from "axios";
import GoalForm from "./GoalForm";

const EditGoal = (props) => {

  const [formValues, setFormValues] = 
    useState({ title: '', description: '', iamge: '', start_date: '', end_date: ''})
  
  
  const onSubmit = (GoalObject) => {
    Axios
      .put(
        `http://localhost:8080/api/goals/${props.user.id}` +
          props.match.params.id,
        GoalObject
      )
      .then((res) => {
        if (res.status === 200) {
          alert("goal successfully updated");
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
  
// Export EditStudent Component
export default EditGoal;
