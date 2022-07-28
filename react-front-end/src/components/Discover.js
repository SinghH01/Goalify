import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios'
import DicoverNavbar from './DiscoverNavbar';
import './discover.css'


function Discover() {
  const [goals, setGoals] = useState([])
  useEffect(() => {
    fetchGoals();
  }, []);

  

  const fetchGoals = async () => {
    try {
      const response = await axios.get('/api/goals');
      console.log(response.data);  
      setGoals(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  console.log(goals);

  return (
    <div >
      <DicoverNavbar />

    </div>
  )
}

export default Discover;