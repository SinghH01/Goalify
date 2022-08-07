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
import Loading from "../Loading";





function MyGoals() {

  const [goals, setGoals] = useState([]);
  const [user, setUser] = useRecoilState(userState);
  const [state, setState] = useState("all")
  const [goal, setGoal] = useState({})
  const [milestones, setMilestones] = useState([])


  useEffect(() => {
    fetchGoals();
  }, [state]);

  const fetchGoals = async () => {
    try {
      const response = await Axios.get(`/api/goals/${user.id}`);
      const res = await Axios.get(`/api/milestones`);
      setGoals(response.data);
      setMilestones(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const DataTable = () => {
    return goals.map((res, i) => {
      return <GoalsTableRow handleEdit={handleEdit} obj={res} key={i} setState={setState}/>;
    });
  };

  const handleClick = () => {
    setState("create");
  }

  const handleEdit = (goal) => {
    setGoal({ ...goal })
    setState("edit");
  }


  return (<>
    {state === "all" && (
      <>
        <Button className='createButton' variant="outline-primary" onClick={handleClick}>Create Goal</Button>{' '}
          <div className="table-wrapper">
            <Table striped bordered hover variant="dark">
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Description</th>
                  <th>image</th>
                  <th>Start</th>
                  <th>End</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>{DataTable()}</tbody>
            </Table>
          </div>
      </>
    )}

    {state === "create" && (<CreateGoal userId={user.id} setState={setState} />)}
    {state === "edit" && (<EditGoal goal={goal} setState={setState} />)}
    {state === "loading" && (<Loading />)}


  </>
  );

}

export default MyGoals;