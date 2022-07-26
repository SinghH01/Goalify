import React from 'react';
import './App.css';
import CustomNavbar from './components/customNavbar';


export const App = () => {
  return (
    <div>
      <CustomNavbar />
      <div className='home'>
        <div className='overlay'></div>
      </div>
    </div>
  )
}


export default App;
