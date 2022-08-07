import React, { useState } from "react";
import Axios from "axios";
import moment from 'moment';
import DeleteIcon from '@material-ui/icons//Delete';
import EditIcon from '@material-ui/icons/Edit';
import AddIcon from '@material-ui/icons/Add';
import { Fab } from '@material-ui/core';


const GoalsTableRow = (props) => {
  const { id, title, description, image, start_date, end_date } = props.obj;


  const deleteGoal = () => {
    Axios
      .delete(
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
        < img className="goal-img" src={image} />
      </td>
      <td>{moment(start_date).format('MMMM Do, YYYY')}</td>
      <td>{moment(end_date).format('MMMM Do, YYYY')}</td>


      <td>
        <div className="action-btn">
          <Fab style={{ color: "blue" }} size="small" aria-label="edit" onClick={() => props.handleEdit({ ...props.obj })}>
            <EditIcon />
          </Fab>
        </div>
        <div className="action-btn">
          <Fab style={{ color: "red" }} size="small" aria-label="delete" onClick={() => onClick()}>
            <DeleteIcon />
          </Fab>
        </div>
        <div className="action-btn">
          <Fab style={{ color: "green" }} size="small" aria-label="add">
            <AddIcon />
          </Fab>
        </div>
        

      </td>
    </tr >
  );
};

export default GoalsTableRow;