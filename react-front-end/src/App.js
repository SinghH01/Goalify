import React, { useState, useEffect } from 'react';
import './App.css';
import MyLandingPage from './components/MyLandingPage';
import Axios from 'axios';

import Discover from './components/Discover';
// import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";


const App = () => {

  const [userInfo, setUserInfo] = useState({});
  useEffect(() => {
    Axios.get("http://localhost:8080/login").then((response) => {
      if (response.data.user !== undefined) {
        setUserInfo(response.data.user.rows[0]);
        console.log(response);
      } else {
        console.log(response);
      }


    })
  }, [])

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MyLandingPage user={userInfo.first_name} />} />
        <Route path="/Discover" element={<Discover />} />
      </Routes>
    </BrowserRouter>
  )

}
export default App;


