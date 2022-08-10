import React, { useState } from 'react'
import { userState } from '../App';
import { useRecoilState } from 'recoil';
import DashboardContext from './DashBoardContext';
import './dashboard.css'

//Components
import MyLandingPage from './MyLandingPage';
import DicoverNavbar from './DiscoverNavbar';
import Discover from './Discover';
import Sidebar from './Sidebar'
import Favourites from './Favourites';
import MyGoals from './UserGoals/MyGoals';
import ActiveGoals from './IndividualGoal/ActiveGoals';
import Loading from './Loading';




export default function Dashboard() {

  const [state, setState] = useState('find')

  return (
    <div className='dashboard'>
      <DicoverNavbar />
      <div className='dashboard-body'>
        <Sidebar onStateChange={setState} />
        <main className='dashboard-main'>
          {state === 'find' && (<DashboardContext.Provider value={setState} ><Discover/></DashboardContext.Provider>)}
          {state === 'favourites' && (<Favourites />)}
          {state === 'activegoals' && (<ActiveGoals />)}
          {state === 'mygoals' && (<MyGoals />)}
          {state === "loading" && (<Loading />)}

        </main>
      </div>
    </div>
  )
}