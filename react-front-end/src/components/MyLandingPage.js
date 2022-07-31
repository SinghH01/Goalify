
import React, { useEffect, useState } from "react";
import Login from "./Auth/Login";
import Register from "./Auth/Register";
import { Link } from 'react-router-dom'

function MyLandingPage(props) {


  //Set the state if user is logged in
  const [user, setUser] = useState({});

  //display user name based on if it is coming from post request or cookie session
  let displayName = "";
  if (user.first_name !== undefined) {
    displayName = user.first_name;
  } else {
    displayName = props.user
  }


  function setUserValue(value) {
    setUser(value);
  }

  return (
    <div className="landing-page">
      {/* <div className="overlay"></div> */}
      <div className="container">
        <div className="header-area">
          <div className="logo">Goalify </div>

          <ul>            
            <li>
              <Login setValue={setUserValue} />
            </li>
            <Register />

            {/* <li>contact</li> */}
          </ul>
        </div>
      </div>
      <div className="introduction-text">
        <h1>    Welcome! {displayName}</h1>
        <h1>Meet, chat, and share
          with people who lovewhat you love!</h1>

      </div>
    </div>
  );


}

export default MyLandingPage;
