import React from "react";
import { useState, useEffect } from "react";
import Axios from "axios";
import { useRecoilState } from "recoil";
import { userState } from "../../App";
import { Divider, Row, Button, List } from "antd";
import moment from "moment";
import EventAvailableIcon from "@material-ui/icons/EventAvailable";
import EventBusyIcon from "@material-ui/icons/EventBusy";
import HomeIcon from "@material-ui/icons/Home";
import UnFollowGoal from "../IndividualGoal/UnfollowGoal";
import Goal from "../IndividualGoal/Goal";
import "../../styles/JoinedGoals.css";

function JoinedGoals() {
  const [goals, setGoals] = useState([]);
  const [user] = useRecoilState(userState);
  const [changeState, setChangeState] = useState({ state: "all", goalId: 0 });

  useEffect(() => {
    fetchGoals();
  }, []);

  const handleClick = (id) => {
    setChangeState({ ...changeState, state: "goal", goalId: id });
  };

  const fetchGoals = async () => {
    try {
      const response = await Axios.post("/active", { id: user.id });
      setGoals(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const data = goals.map((goal, i) => ({
    key: i,
    id: goal.id,
    start: goal.start_date,
    end: goal.end_date,
    image: goal.image,
    title: goal.title,
    avatar: "https://joeschmoe.io/api/v1/random",

    content: goal.description,
  }));

  return (
    <>
      {changeState.state === "all" && (
        <>
          <div className="page-heading">
            <h2>
              <HomeIcon className="header-icon" /> ACTIVE GOALS
            </h2>
            <Divider className="header-divider"></Divider>
          </div>

          <Row className="active-list" justify="space-evenly">
            <List
              itemLayout="vertical"
              size="large"
              dataSource={data}
              renderItem={(item) => (
                <List.Item
                  key={item.key}
                  actions={[
                    <Button key="3" onClick={() => handleClick(item.id)}>
                      View
                    </Button>,
                    <UnFollowGoal
                      userId={user.id}
                      goalId={item.id}
                      goalTitle={item.title}
                    />,
                  ]}
                  extra={<img width={272} alt="logo" src={item.image} />}
                >
                  <List.Item.Meta
                    title={item.title}
                    description={
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        <span>
                          <EventAvailableIcon />
                          {` ${moment(item.start).format("MMMM Do, YYYY")}`}
                        </span>
                        <span>
                          <EventBusyIcon />
                          {` ${moment(item.end).format("MMMM Do, YYYY")}`}
                        </span>
                      </div>
                    }
                  />
                  {item.content}
                </List.Item>
              )}
            />
          </Row>
        </>
      )}
      {changeState.state === "goal" && <Goal id={changeState.goalId} />}
    </>
  );
}

export default JoinedGoals;
