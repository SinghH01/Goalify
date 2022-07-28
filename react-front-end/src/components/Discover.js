import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios'
import DicoverNavbar from './DiscoverNavbar';
import GoalList from './GoalList'
import './discover.css'


function Discover() {
  const [goals, setGoals] = useState([])
  useEffect(() => {
    fetchGoals();
  }, []);



  const fetchGoals = async () => {
    try {
      const response = await axios.get('/api/goals');
      setGoals(response.data);
    } catch (error) {
      console.log(error);
    }
  };


  return (
    <div >
      <DicoverNavbar />
      <GoalList goals={goals}/>

    </div>
  )
}

export default Discover;