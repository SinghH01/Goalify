import React from 'react'
import { useState, useEffect } from 'react';
import Axios from 'axios'
import GoalList from './GoalList'
import { useRecoilState } from 'recoil';
import { userState } from '../App';



function Favourites() {
  const [goals, setGoals] = useState([]);
  const [user, setUser] = useRecoilState(userState);

  useEffect(() => {
    fetchGoals();
  }, [goals]);
  
  const fetchGoals = async () => {
    try {
      const response = await Axios.post('/favourites',{ id: user.id});
      setGoals(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div >
      <GoalList goals={goals} />
    </div>
  )
}

export default Favourites;