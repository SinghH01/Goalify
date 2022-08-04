import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";
import moment from 'moment';

const GoalsTableRow = (props) => {
  const { title, description, image, start_date, end_date, online_goal } = props.obj;
  //   const deleteStudent = () => {
  //     axios
  //       .delete(
  // "http://localhost:4000/students/delete-student/" + _id)
  //       .then((res) => {
  //         if (res.status === 200) {
  //           alert("Student successfully deleted");
  //           window.location.reload();
  //         } else Promise.reject();
  //       })
  //       .catch((err) => alert("Something went wrong"));
  //   };

  return (
    <tr>
      <td>{title}</td>
      <td>{description}</td>
      <td>
        < img className="img-fluid img-thumbnail" style={{ width: '100px' }} src={image} />
      </td>
      <td>{moment(start_date).format('MMMM Do, YYYY')}</td>
      <td>{moment(end_date).format('MMMM Do, YYYY')}</td>




      <td style={{ textAlign: 'center' }}>
        <Button style={{
          marginTop: '8px',
          marginInline: 'auto'
        }} onClick={event => props.handleEdit()}
          size="lg" variant="primary">
          Edit
        </Button>
        <Button style={{
          marginBlock: '8px',
          marginInline: 'auto'
        }} onClick={"deleteStudent"}
          size="sm" variant="danger">
          Delete
        </Button>

      </td>
    </tr>
  );
};

export default GoalsTableRow;