import React from "react";
import { Link } from 'react-router-dom'

function MyLandingPage() {
  return (
    <div className="landing-page">
      {/* <div className="overlay"></div> */}
      <div className="container">
        <div className="header-area">
          <div className="logo">Goalify </div>
          <ul>
            <li><Link to='discover'> Discover</Link> </li>
            <li>Login</li>
            <li>Register</li>
            {/* <li>contact</li> */}
          </ul>
        </div>
      </div>
      <div className="introduction-text">
        <h1>Meet, chat, and share
          with people who lovewhat you love!</h1>

      </div>


    </div>

  );
}

export default MyLandingPage;
