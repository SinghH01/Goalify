
import React, { useEffect, useState } from "react";
import Login from "./Auth/Login";
import Register from "./Auth/Register";
import { Link } from 'react-router-dom'
import Discover from './Discover';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function MyLandingPage(props) {



  return (
    <>
      <Routes>
        <Route exact path="/discover" element={<Discover />} />
      </Routes>
      <div className="landing-page">
        {/* <div className="overlay"></div> */}
        <div className="container">
          <div className="header-area">
            <div className="logo">Goalify </div>


            <ul>
              <li><Link to='discover'> Discover</Link> </li>
              <li>
                <Login />
              </li>
              <li>

                <Register />
              </li>

            </ul>
          </div>
        </div>
        <div className="introduction-text">
          <h1>    Welcome! </h1>
          <h1>Meet, chat, and share
            with people who lovewhat you love!</h1>

        </div>
      </div>
    </>
  );
}

export default MyLandingPage;
