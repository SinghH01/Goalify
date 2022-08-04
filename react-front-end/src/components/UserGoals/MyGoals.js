import React from 'react'
import { useState, useEffect } from 'react';
import Axios from 'axios'
import { useRecoilState } from 'recoil';
import { userState } from '../../App';
import "bootstrap/dist/css/bootstrap.css";
import GoalsTableRow from './GoalsTableRow';
import './MyGoal.css'
import EditGoal from './EditGoals';
import CreateGoal from './CreateGoal';
import { Button, Table } from 'react-bootstrap';


function MyGoals() {

  const [goals, setGoals] = useState([]);
  const [user, setUser] = useRecoilState(userState);
  const [state, setState] = useState("all")

  useEffect(() => {
    fetchGoals();
  }, []);

  const fetchGoals = async () => {
    try {
      const response = await Axios.get(`/api/goals/${user.id}`);
      setGoals(response.data);
    } catch (error) {
      console.log(error);
    }
  };



  const DataTable = () => {
    return goals.map((res, i) => {
      return <GoalsTableRow handleEdit={handleEdit} obj={res} key={i} />;
    });
  };

  const handleClick = () => {
    setState("create");
  }

  const handleEdit = () => {
    setState("edit");
  }

  return (<>
    {state === "all" && (
      <>
        <Button variant="outline-primary" onClick={handleClick}>Create Goal</Button>{' '}

        <div className="table-wrapper">
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Title</th>
                <th>Description</th>
                <th>image</th>
                <th>Start Date</th>
                <th>End Date</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>{DataTable()}</tbody>
          </Table>
        </div>
      </>
    )}

    {state === "create" && (<CreateGoal userId={user.id} />)}
    {state === "edit" && (<EditGoal />)}

  </>
  );

}

export default MyGoals;