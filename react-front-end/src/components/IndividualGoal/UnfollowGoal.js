import React, { useContext } from "react";
import DashboardContext from "../DashBoardContext";
import Axios from "axios";
import { Button } from "antd";
import { openNotificationWithIcon } from "../Notification";
import { Popconfirm } from "antd";
import { QuestionCircleOutlined } from '@ant-design/icons';


function UnFollowGoal({ userId, goalId, goalTitle }) {
  const providerValue = useContext(DashboardContext);
  const { setState } = providerValue;

  const unfolloweGoal = () => {
    setState("laoding");
    Axios.post(`http://localhost:8080/active/delete`, { userId, goalId })
      .then((res) => {
        if (res.status === 204) {
          openNotificationWithIcon(
            "error",
            <>
              {" "}
              You Unfollow the Goal <strong>{goalTitle}</strong>{" "}
            </>
          );
          setState("activegoals");
        } else Promise.reject();
      })
      .catch((err) => console.log(err));
  };

  return (
    <Popconfirm
      placement="top"
      title={"Are you sure to unfollow this goal"}
      icon={
        <QuestionCircleOutlined
          style={{
            color: 'red',
          }}
        />
      }
      onConfirm={unfolloweGoal}
      okText="Yes"
      cancelText="No"
    >
      <Button type="primary" danger ghost block>
        Unfollow
      </Button>
    </Popconfirm>
  );
}

export default UnFollowGoal;
