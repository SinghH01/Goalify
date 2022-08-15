import React, { useState, useEffect } from "react";
import Axios from 'axios';
import MilestoneForm from "./MilestoneForm";
import { openNotificationWithIcon } from "../Notification";



const CreateMilestone = (props) => {

  
  const [formValues, setFormValues] =
    useState({ title: '', description: '', end_date: '' });

  const onSubmit = goalObject => {
    props.setState("loading");
    Axios.post(
      `http://localhost:8080/api/milestones/add/${props.goalId}`,
      goalObject)
      .then(res => {
        props.setState("all");
        openNotificationWithIcon(
          "success",
          <>
        Thank you <strong>{props.userName}</strong>.<br />
        Your MileStone has been successfully created!!!
        </>
          );
      })
      .catch(err => alert('Something went wrong'));
  };


  return (
    <>
      <h2 className="goal_header">Create MileStone</h2>
      <br/>
      <MilestoneForm initialValues={formValues}
        onSubmit={onSubmit}
        enableReinitialize>
        Create Milestone
      </MilestoneForm>
    </>
  )
}


export default CreateMilestone