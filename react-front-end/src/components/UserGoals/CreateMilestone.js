import React, { useState, useEffect } from "react";
import Axios from 'axios';
import MilestoneForm from "./MilestoneForm";

const CreateMilestone = (props) => {
  const [formValues, setFormValues] =
    useState({ title: '', description: '', end_date: '' })

  const onSubmit = goalObject => {
    props.setState("loading")
    Axios.post(
      `http://localhost:8080/api/milestones/add/${props.goalId}`,
      goalObject)
      .then(res => {
        props.setState("all")
      })
      .catch(err => alert('Something went wrong'))
  }


  return (
    <>
      <h1 className="goal_header">Greate MileStone</h1>
      <MilestoneForm initialValues={formValues}
        onSubmit={onSubmit}
        enableReinitialize>
        Create Milestone
      </MilestoneForm>
    </>
  )
}


export default CreateMilestone