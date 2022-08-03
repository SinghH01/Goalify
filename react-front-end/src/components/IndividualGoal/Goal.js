import React, { useState } from "react";
import { useRecoilState } from 'recoil';
import { userState } from '../../App';
import Chat from "./Chat";
import './goal.css'

function Goal(props) {
  const [user, setUser] = useRecoilState(userState);


  return (
    <div className="goal-main">
      <div className="goal">
        <h1>Goal ID is: {props.id}</h1>
      </div>
      <div className="chat">
      <h1>User ID is: {user.id}</h1>
      <Chat id = {props.id}/>
      </div>
    </div>

  );
}

export default Goal;