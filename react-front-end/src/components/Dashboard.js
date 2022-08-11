import React, { useState } from 'react'
import DashboardContext from './DashBoardContext';
import './dashboard.css'

//Components
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
          {state === 'favourites' && (<DashboardContext.Provider value={setState} ><Favourites/></DashboardContext.Provider>)}
          {state === 'activegoals' && (<ActiveGoals />)}
          {state === 'mygoals' && (<MyGoals />)}
          {state === "loading" && (<Loading />)}

        </main>
      </div>
    </div>
  )
}