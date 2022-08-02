import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { atom, useRecoilState } from 'recoil';
import Axios from 'axios';
import './App.css';

//Components
import MyLandingPage from './components/MyLandingPage';
import Discover from './components/Discover';
import Dashboard from './components/Dashboard';


//Setup global state variable using Recoil JS
export const userState = atom ({
  key: 'userState',
  default: {}
})

const App = () => {
  const [user, setUser] = useRecoilState(userState);

  useEffect(() => {
    Axios.get("http://localhost:8080/login").then((response) => {
      if (response.data.user !== undefined) {
        setUser(response.data.user.rows[0]);        
        console.log(response);
     
      } else {
        console.log(response);
      }
    })
  }, [])

  //Check if user is logged in or not
    let component = undefined;
      if (user.first_name !== undefined) {
        component = <Dashboard />
      } else {
        component = <MyLandingPage />
      }

  return (
    
    <Router>
    <>

    <Routes>
        <Route exact path="/discover" element={<Discover />} />
        <Route exact path="/" element={component} />
    </Routes>
    </>      
    </Router>
    
  )

}
export default App;


