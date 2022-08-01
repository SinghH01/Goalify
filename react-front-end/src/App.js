import React, { useState, useEffect } from 'react';
import './App.css';
import MyLandingPage from './components/MyLandingPage';
import Axios from 'axios';
import Dashboard from './components/Dashboard';
import Discover from './components/Discover';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


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

  //Check if user is logged in or not
    let component = undefined;
      if (userInfo.first_name !== undefined) {
        component = <Dashboard />
      } else {
        component = <MyLandingPage />
      }

  return (
    
    <Router>
    <>
    {component}
    </>      
    </Router>

    
  )

}
export default App;


