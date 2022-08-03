import React from 'react'
import { useState, useEffect } from 'react';
import Axios from 'axios'
import { useRecoilState } from 'recoil';
import { userState } from '../../App';
import Form from 'react-bootstrap/Form';

function MyGoals() {
  const [goals, setGoals] = useState([]);
  const [user, setUser] = useRecoilState(userState);

  

  
    return (
      <>
        hello world
      </>
    );
  
}

export default MyGoals;