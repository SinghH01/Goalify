import React from 'react'
import { useState, useEffect } from 'react';
import Axios from 'axios'
import { useRecoilState } from 'recoil';
import { userState } from '../../App';
import ActiveList from './ActiveList';



function ActiveGoals() {
  const [goals, setGoals] = useState([]);
  const [user, setUser] = useRecoilState(userState);

  useEffect(() => {
    fetchGoals();
  }, []);
  
  const fetchGoals = async () => {
    try {
      const response = await Axios.post('/active',{ id: user.id});
      setGoals(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div >
      <ActiveList goals={goals} />
    </div>
  )
}

export default ActiveGoals;