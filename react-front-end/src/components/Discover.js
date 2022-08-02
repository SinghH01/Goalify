import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios'
import Search from './Search';
import GoalList from './GoalList'
import './discover.css'




function Discover() {
  const [goals, setGoals] = useState([])
  const [searchQuery, setSearchQuery] = useState('');

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

  const filterGoals = (goals) => {
    return goals.filter((goal) => {
      const goalTitle = goal.title.toLowerCase();
      return goalTitle.includes(searchQuery);
    });
  };
  const filteredGoals = filterGoals(goals);

  return (
    <div >
      <Search setSearchQuery={setSearchQuery} />
      <GoalList goals={searchQuery ? filteredGoals : goals} />

    </div>
  )
}

export default Discover;