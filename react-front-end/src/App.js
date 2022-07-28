import React, {useState, useEffect} from 'react';
import './App.css';
import MyLandingPage from './components/MyLandingPage';
import Axios from 'axios';



export const App = () => {

  const [userInfo, setUserInfo] = useState({});
  useEffect(() => {
    Axios.get("http://localhost:8080/login").then((response) => {
      if(response.data.user !== undefined){
        setUserInfo(response.data.user.rows[0]);
        console.log(response);
      } else {
        console.log(response);
      }
      
      
    })
  }, [])

  return (
    <div>
      <MyLandingPage user = {userInfo.first_name}/>

    </div>
  )
}


export default App;
