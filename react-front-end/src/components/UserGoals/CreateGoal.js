import React, { useState, useEffect } from "react";
import Axios from 'axios';
import GoalForm from "./GoalForm";
import { Button, notification, Space } from 'antd';
import 'antd/dist/antd.css';




const CreateGoal = (props) => {

  const openNotificationWithIcon = (type) => {
    notification[type]({
      message: 'Goalify',
      description:
        `Thank you ${props.userName} your Gaol has been successfully created
        `

    });
  };

  const [formValues, setFormValues] =
    useState({ title: '', description: '', image: '', start_date: '', end_date: '' })
  const onSubmit = goalObject => {
    props.setState("loading")
    Axios.post(
      `http://localhost:8080/api/goals/${props.userId}`,
      goalObject)
      .then(res => {
        props.setState("all")
        openNotificationWithIcon("success")
      })
      .catch(err => alert('Something went wrong'))
  }


  return (
    <>
      <h1 className="goal_header">Greate New Goal</h1>
      <GoalForm initialValues={formValues}
        onSubmit={onSubmit}
        enableReinitialize>
        Create Goal
      </GoalForm>
    </>
  )
}


export default CreateGoal