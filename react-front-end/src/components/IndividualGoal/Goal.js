import React, { useState, useEffect } from "react";
import { useRecoilState } from 'recoil';
import { userState } from '../../App';
import Axios from "axios";
import Chat from "./Chat";
import './goal.css'
import MapContainer from "../Map/MapContainer";
import Confeti from "./confetti";
import Jump from 'react-reveal/Jump';
import moment from 'moment';
import 'antd/dist/antd.css'
import { Divider, Steps } from 'antd';
const { Step } = Steps;

function Goal(props) {
  const [user, setUser] = useRecoilState(userState);
  const[goal, setGoal] = useState({message: 'hi'})
  const[milestones, setMilestones] = useState([])

  const[location, setLocation] = useState(undefined)
  const [fullAddress, setFullAddress] = useState(undefined)
  const [confetti, setConfetti] = useState(false)



  const [current, setCurrent] = useState(0);

  const onChange = (value) => {
    console.log('onChange:', current);
  };



  useEffect(() => {
    fetchGoals();
    setCurrent(2);
  }, []);  

   
  const fetchGoals = async () => {
    try {
      const response = await Axios.post('/api/goals/individualgoal',{ id: props.id});
      const milestone = await Axios.get(`/api/milestones/${props.id}`);
      const goalLocation = await Axios.get(`/api/goals/goal_location/${props.id}`);
      setGoal(response.data[0])
      setMilestones(milestone.data)
      setLocation(goalLocation.data[0])
      setFullAddress(`${goalLocation.data[0].street}, ${goalLocation.data[0].city}, ${goalLocation.data[0].province}`)

    } catch (error) {

      console.log(error);
      
    }
  };

  function showConfetti () {
    setConfetti(true);
    setTimeout(function() { setConfetti(false); }, 8000);
  }
  const clickStep = async(value) =>{
    const updateMilestone = await Axios.post(`/api/milestones/user_milestones`, { userId: user.id, milestoneId: value});
    console.log(updateMilestone)
  }

  let individualMilestone = milestones.map((step, index) => {
    return (

    <Step title={step.title} description={step.description} subTitle={`End Date: ${moment(step.end_date).format('MMMM Do, YYYY')}`} onClick={()=> clickStep(step.id)}/>

    )
});

  return (
    <div className="goal-main">

      <div className="goal">
        <h1>{goal.title}</h1>
        <Jump>
        <img className="goal-image" src={goal.image} />
        </Jump>      
        <button onClick={showConfetti}> Click Me </button>

          {confetti === true && (<Confeti />)}
          
        <Steps current={current} onChange={onChange} direction="vertical">
          {individualMilestone}
        </Steps>

      </div>

      <div className="chat">
        <Chat id = {props.id}/>
        <div className="location-container">
        {location !== undefined && (<MapContainer location = {fullAddress}/>)}
        {location === undefined && (<h3>This is an online goal</h3>)}
        </div>        
      </div>

    </div>

  );
}

export default Goal;