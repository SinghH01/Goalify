import React, { useState, useEffect } from "react";
import Axios from 'axios';
import GoalForm from "./GoalForm";


const CreateGoal = (props) => {

  const [formValues, setFormValues] =
    useState({ title: '', description: '', image: '', start_date: '', end_date: '' })
  const onSubmit = goalObject => {
    Axios.post(
      `http://localhost:8080/api/goals/${props.userId}`,
      goalObject)
      .then(res => {
       
        window.location.reload(false);
        
      })
      .catch(err => alert('Something went wrong'))
  }

  
  return (
    <>
      <h1>Greate New Goal</h1>
      <GoalForm initialValues={formValues}
        onSubmit={onSubmit}
        enableReinitialize>
        Create Goal
      </GoalForm>
    </>
  )
}


export default CreateGoal