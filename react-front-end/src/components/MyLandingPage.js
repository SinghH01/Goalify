import React, { useEffect, useState } from "react";
import Login from "./Auth/Login";
import Register from "./Auth/Register";

function MyLandingPage() {


  //Set the state if user is logged in
  const [user, setUser] = useState({});
  function setUserValue(value){
    setUser(value);
  }

  useEffect(()=> {

  },[])

  if(user.first_name !== "") {
    return (
      <div className="landing-page">
        {/* <div className="overlay"></div> */}
        <div className="container">
          <div className="header-area">
            <div className="logo">Goalify </div>          
            
            <ul>
              <li>Discover</li>
              <li>
              <Login setValue={setUserValue} />
              </li>
              <Register />
  
              
  
              {/* <li>contact</li> */}
            </ul>
          </div>
        </div>
        <div className="introduction-text">
          <h1>    Welcome! {user.first_name}</h1>
          <h1>Meet, chat, and share
            with people who lovewhat you love!</h1>
  
        </div>  
      </div>  
    );

  } else {

    return (
      <h1>Hi</h1>
    )

  }

  
}

export default MyLandingPage;
