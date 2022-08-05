import React, { useState } from "react";
import { Button } from "react-bootstrap";
import Axios from "axios";
import moment from 'moment';


const GoalsTableRow = (props) => {
  const { id, title, description, image, start_date, end_date } = props.obj;


  const deleteGoal = () => {
    Axios
      .post(
        `http://localhost:8080/api/goals/delete/${id}`)
      .then((res) => {
        if (res.status === 204) {
          props.handleLoading()
          window.location.reload();
        } else Promise.reject();
      })
      .catch((err) => console.log(err));
  };



  function onClick() {
    deleteGoal();
    props.handleLoading();
  };

  return (

    <tr>
      <td>{title}</td>
      <td>{description}</td>
      <td>
        < img className="img-fluid img-thumbnail" src={image} />
      </td>
      <td>{moment(start_date).format('MMMM Do, YYYY')}</td>
      <td>{moment(end_date).format('MMMM Do, YYYY')}</td>




      <td>
        <Button onClick={() => props.handleEdit()}
          size="lg" variant="primary">
          Edit
        </Button>
        <Button onClick={() => onClick()}
          size="sm" variant="danger">
          Delete
        </Button>
      </td>
    </tr >
  );
};

export default GoalsTableRow;