import React, { useEffect, useState } from "react";
import "../../styles/goalMembers.css";
import Axios from "axios";

export default function GoalMembers(props) {
  const [members, setMembers] = useState([]);

  const fetchMembers = async () => {
    try {
      const response = await Axios.post("/active/goal_members", {
        goalId: props.goalId,
      });
      setMembers(response.data.rows);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchMembers();
  }, []);

  let membersList = members.map((item) => {
    return (
      <div className="member-details">
        <img className="member-avatar" src={item.avatar} alt="avatar-pic"></img>
        <p className="member-name">{item.first_name}</p>
      </div>
    );
  });

  return (
    <div className="members-section">
      <h4>Members</h4>
      <div className="members">{membersList}</div>
    </div>
  );
}
