import React, { useState, useEffect } from "react";
import { useRecoilState } from 'recoil';
import { userState } from '../../App';
import Axios from "axios";
import Chat from "./Chat";
import './goal.css'

function Goal(props) {
  const [user, setUser] = useRecoilState(userState);
  const[goal, setGoal] = useState({message: 'hi'})

  useEffect(() => {
    fetchGoals();
  }, []);
  
  const fetchGoals = async () => {
    try {
      const response = await Axios.post('/api/goals/individualgoal',{ id: props.id});
      console.log(response)
      setGoal(response.data[0])
      console.log(goal.title)
    } catch (error) {
      console.log(error);
    }
  };
  


  return (
    <div className="goal-main">

      <div className="goal">
        <h1>{goal.title}</h1>
        <img className="goal-image" src={goal.image} />
      </div>

      <div className="chat">
        <Chat id = {props.id}/>
      </div>

    </div>

  );
}

export default Goal;