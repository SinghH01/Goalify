import React, { useState, useEffect } from "react";
import { useRecoilState } from "recoil";
import { userState } from "../../App";
import Axios from "axios";
import Chat from "./Chat";
import "../../styles/goal.css";
import MapContainer from "../Map/MapContainer";
import UnFollowGoal from "./UnfollowGoal";
import Confeti from "./confetti";
import Pulse from "react-reveal/Pulse";
import moment from "moment";
import "antd/dist/antd.css";
import EventAvailableIcon from "@material-ui/icons/EventAvailable";
import EventBusyIcon from "@material-ui/icons/EventBusy";
import { SmileOutlined } from "@ant-design/icons";
import { Progress, Steps} from "antd";
import { openNotificationWithIcon } from "../Notification";
import GoalMembers from "./GoalMembers";
const { Step } = Steps;

function Goal(props) {
  //User, Goal and milestones info states
  const [user, setUser] = useRecoilState(userState);
  const [goal, setGoal] = useState({ message: "hi" });
  const [milestones, setMilestones] = useState([]);
  const [location, setLocation] = useState(undefined);
  const [fullAddress, setFullAddress] = useState(undefined);

  // Animations and progress states
  const [confetti, setConfetti] = useState(false);
  const [daysLeft, setDaysLeft] = useState(0);
  const [dayLeft, setDayLeft] = useState(0);
  const [current, setCurrent] = useState(0);

  const onChange = (value) => {
    console.log("onChange:", current);
    setCurrent(value);
  };

  //Count to track completed milestones
  let count = 0;

  const fetchGoals = async () => {
    try {
      const response = await Axios.post("/api/goals/individualgoal", {
        id: props.id,
      });
      const userMilestones = await Axios.post(
        "/api/milestones/get_users_milestones",
        { userId: user.id, goalId: props.id }
      );

      // If user milestone value is true, then it is already completed
      userMilestones.data.rows.map((item) => {
        if (item.completed === true) {
          count = count + 1;
        }
      });
      setCurrent(count);

      // Progress bar data
      var totalDays =
        new Date(response.data[0].end_date).getTime() -
        new Date(response.data[0].start_date).getTime();
      let daysUntilNow =
        new Date().getTime() - new Date(response.data[0].start_date).getTime();
      let remainingDays =
        new Date(response.data[0].end_date).getTime() - new Date().getTime();

      let remainingDaysPercent = (daysUntilNow / totalDays) * 100;
      setDaysLeft(remainingDaysPercent);

      setDayLeft(remainingDays / (1000 * 60 * 60 * 24));

      const milestone = await Axios.get(`/api/milestones/${props.id}`);
      const goalLocation = await Axios.get(
        `/api/goals/goal_location/${props.id}`
      );
      setGoal(response.data[0]);
      setMilestones(milestone.data);
      setLocation(goalLocation.data[0]);
      setFullAddress(
        `${goalLocation.data[0].street}, ${goalLocation.data[0].city}, ${goalLocation.data[0].province}`
      );
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchGoals();
    setCurrent();
  }, []);

  function showConfetti() {
    setConfetti(true);
    setTimeout(function () {
      setConfetti(false);
    }, 8000);
  }  


  //When user clicks one of the milestones to mark it completed
  const clickStep = async (value) => {
    const updateMilestone = await Axios.post(
      `/api/milestones/user_milestones`,
      { userId: user.id, milestoneId: value }
    );

    setCurrent(current + 1);

    //Notification message when milestones is completed
    openNotificationWithIcon(
      "success",
      <>
        Congrats! On completing this milestone 
      </>
    );

    showConfetti();
  };

  let individualMilestone = milestones.map((step, index) => {
    return (
      <Step
        key={step.id}
        title={step.title}
        description={step.description}
        subTitle={`End Date: ${moment(step.end_date).format("MMMM Do, YYYY")}`}
        onClick={() => clickStep(step.id)}
      />
    );
  });

  return (
    <div className="goal-main">
      {confetti === true && <Confeti />}

      <div className="goal">
        <img className="goal-image" src={goal.image} />

        <Pulse>
          <div className="goal-details">
            <div className="test">
              <h1>{goal.title}</h1>
            </div>
            <div>
              <h5>{goal.description}</h5>
            </div>
            <div className="goal-dates">
              <div className="start-date">
                <p>
                  <EventAvailableIcon /> START DATE
                </p>
                <p>{` ${moment(goal.start_date).format("MMMM Do, YYYY")}`}</p>
              </div>
              <div className="end-date">
                <p>
                  <EventBusyIcon /> END DATE
                </p>
                <p>{` ${moment(goal.end_date).format("MMMM Do, YYYY")}`}</p>
              </div>
            </div>
          </div>
        </Pulse>
        <div className="goal-progress">
          <div className="steps">
            <h3>MILESTONES</h3>
            <Steps current={current} onChange={onChange} direction="vertical">
              {individualMilestone}
            </Steps>
          </div>

          <div>
            <h5>UNTIL GOAL IS COMPLETED</h5>
            <Progress
              className="progress-bar"
              type="circle"
              percent={Math.round(daysLeft)}
              format={(percent) => `${Math.round(dayLeft)} Days Left`}
            />
          </div>
        </div>
        <div className="location-container">
          {location !== undefined && (
            <div className="map-div">
              <h3>LOCATION</h3>
              <h5>{fullAddress}</h5>
              <MapContainer location={fullAddress} />
            </div>
          )}
        </div>

        <div className="unfollow-btn">
          <UnFollowGoal
            userId={user.id}
            goalId={props.id}
            goalTitle={goal.title}
          />
        </div>
      </div>

      <div className="chat">
        <Chat id={props.id} />
        <GoalMembers goalId={props.id} />
        <div className="unfollow-btn-small-screen">
          <UnFollowGoal
            userId={user.id}
            goalId={props.id}
            goalTitle={goal.title}
          />
        </div>
      </div>
    </div>
  );
}

export default Goal;
