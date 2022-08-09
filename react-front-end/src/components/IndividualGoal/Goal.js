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
import { Progress, Steps } from 'antd';
const { Step } = Steps;




function Goal(props) {
  const [user, setUser] = useRecoilState(userState);
  const[goal, setGoal] = useState({message: 'hi'})
  const[milestones, setMilestones] = useState([])
  const[location, setLocation] = useState(undefined)
  const [fullAddress, setFullAddress] = useState(undefined)
  const [confetti, setConfetti] = useState(false)
  const [daysLeft, setDaysLeft] = useState(0)
  const [dayLeft, setDayLeft] = useState(0)
  const [current, setCurrent] = useState(0);


  const onChange = (value) => {
    console.log('onChange:', current);
    setCurrent(value);
  };

  let count = 0;
  const fetchGoals = async () => {
    try {
      const response = await Axios.post('/api/goals/individualgoal',{ id: props.id});
      const userMilestones = await Axios.post('/api/milestones/get_users_milestones',{ userId: user.id, goalId: props.id});
        
      userMilestones.data.rows.map((item)=>{        
          if(item.completed === true) {
              count = count +1;
          }
       })
       
        setCurrent(count);

        console.log("============")
        var totalDays = new Date(response.data[0].end_date).getTime() - new Date(response.data[0].start_date).getTime();
        let daysUntilNow =  new Date().getTime() - new Date(response.data[0].start_date).getTime() ;
        let remainingDays =   new Date(response.data[0].end_date).getTime() - new Date().getTime() ;
        console.log(totalDays/(1000 * 60 * 60 * 24))
        console.log(daysUntilNow/(1000 * 60 * 60 * 24))

        console.log("============")
        console.log(remainingDays/(1000 * 60 * 60 * 24))
        let remainingDaysPercent = (daysUntilNow/totalDays) * 100;
        setDaysLeft(remainingDaysPercent);

        console.log(remainingDaysPercent)

        setDayLeft(remainingDays/(1000 * 60 * 60 * 24))
        console.log(dayLeft)


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

  useEffect(() => {
    fetchGoals(); 
    setCurrent()   
  }, []);  

  function showConfetti () {
    setConfetti(true);
    setTimeout(function() { setConfetti(false); }, 8000);
  }
  const clickStep = async(value) =>{
    const updateMilestone = await Axios.post(`/api/milestones/user_milestones`, { userId: user.id, milestoneId: value});
    console.log(updateMilestone)
    setCurrent(current+1);
    showConfetti();
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
          {confetti === true && (<Confeti />)}
          
        <Steps current={current} onChange={onChange} direction="vertical">
          {individualMilestone}
        </Steps>
        <>
          <Progress type="circle" percent={Math.round(daysLeft)} format={(percent) => `${Math.round(dayLeft)} Days Left`} />
        </>
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