import React, { useState, useEffect } from "react";
import { useRecoilState } from 'recoil';
import { userState } from '../../App';
import Axios from "axios";
import Chat from "./Chat";
import './goal.css'
import MapContainer from "../Map/MapContainer";

function Goal(props) {
  const [user, setUser] = useRecoilState(userState);
  const[goal, setGoal] = useState({message: 'hi'})
  const[location, setLocation] = useState(undefined)
  const [fullAddress, setFullAddress] = useState(undefined)

  useEffect(() => {
    fetchGoals();
  }, []);  

   
  const fetchGoals = async () => {
    try {
      const response = await Axios.post('/api/goals/individualgoal',{ id: props.id});
      const goalLocation = await Axios.get(`/api/goals/goal_location/${props.id}`);
      // console.log(response);
      // console.log(goalLocation);
      setGoal(response.data[0])
      setLocation(goalLocation.data[0])
      setFullAddress(`${goalLocation.data[0].street}, ${goalLocation.data[0].city}, ${goalLocation.data[0].province}`)

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
        <div>
        {/* {location !== undefined && (<h1>This Goal has Physical Location: {fullAddress} </h1>)} */}
        {location !== undefined && (<MapContainer location = {fullAddress}/>)}
        {location === undefined && (<h1>This is online goal</h1>)}
        </div>        
      </div>

    </div>

  );
}

export default Goal;