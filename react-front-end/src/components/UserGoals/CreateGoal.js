import React, { useState } from "react";
import Axios from "axios";
import GoalForm from "./GoalForm";
import { openNotificationWithIcon } from "../Notification";

const CreateGoal = (props) => {
  const [formValues] = useState({
    title: "",
    description: "",
    image: "",
    start_date: "",
    end_date: "",
  });
  const onSubmit = (goalObject) => {
    props.setState("loading");
    Axios.post(`http://localhost:8080/api/goals/${props.userId}`, goalObject)
      .then((res) => {
        props.setState("all");
        openNotificationWithIcon(
          "success",
          <>
            Thank you <strong>{props.userName}</strong>.<br />
            Your Goal has been successfully created!!!
          </>
        );
      })
      .catch((err) => alert("Something went wrong"));
  };

  return (
    <>
      <h2 className="goal_header">Create New Goal</h2>
      <br />
      <GoalForm
        initialValues={formValues}
        onSubmit={onSubmit}
        enableReinitialize
      >
        Create Goal
      </GoalForm>
    </>
  );
};

export default CreateGoal;
