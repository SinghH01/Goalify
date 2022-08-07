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
  const [loading, setLoading] = useState(false)
  const [goal, setGoal] = useState({})


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
      return <GoalsTableRow handleEdit={handleEdit} handleLoading={handleLoading} obj={res} key={i} />;
    });
  };

  const handleClick = () => {
    setState("create");
  }

  const handleEdit = (goal) => {
    setGoal({...goal})
    setState("edit");
  }

  const handleLoading = () => {
    setLoading(cur => !cur)
  }


  if (loading) {
    return <Loading />
  }

  return (<>
    {state === "all" && (
      <>
          <Button className='createButton' variant="outline-primary" onClick={handleClick}>Create Goal</Button>{' '}
          <section className="goal-index">
          <div className="table-wrapper">
          <Table striped bordered hover variant="dark">
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

       
        </section>
      </>
    )}

    {state === "create" && (<CreateGoal userId={user.id} handleLoading={handleLoading} />)}
    {state === "edit" && (<EditGoal goal={goal} handleLoading={handleLoading}/>)}


  </>
  );

}

export default MyGoals;