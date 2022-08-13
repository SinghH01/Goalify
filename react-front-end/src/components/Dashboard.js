import React, { useState, useMemo } from 'react'
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
  const [rerender, setRerender] = useState(false)

  const providerValue = useMemo(() => ({
    state, setState,
    rerender, setRerender,
  }), [state, rerender]);

  return (
    <div className='dashboard'>
      <DicoverNavbar />
      <div className='dashboard-body'>
        <Sidebar onStateChange={setState} />
        <main className='dashboard-main'>
          {state === 'find' && (<DashboardContext.Provider value={providerValue} ><Discover /></DashboardContext.Provider>)}
          {state === 'favourites' && (<DashboardContext.Provider value={providerValue} ><Favourites /></DashboardContext.Provider>)}
          {state === 'activegoals' && (<DashboardContext.Provider value={providerValue} ><ActiveGoals /></DashboardContext.Provider>)}
          {state === 'mygoals' && (<MyGoals />)}
          {state === "loading" && (<Loading />)}

        </main>
      </div>
    </div>
  )
}