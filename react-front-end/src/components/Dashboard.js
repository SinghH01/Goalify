import React, { useState } from 'react'
import { userState } from '../App';
import { useRecoilState } from 'recoil';
import './dashboard.css'

//Components
import MyLandingPage from './MyLandingPage';
import DicoverNavbar from './DiscoverNavbar';
import Discover from './Discover';
import Sidebar from './Sidebar'
import Favourites from './Favourites';



export default function Dashboard() {

  const [state, setState] = useState('')

  return (
    <div className='dashboard'>
      <DicoverNavbar />
      <div className='dashboard-body'>
        <Sidebar onStateChange={setState} />
        <main className='dashboard-main'>
          {state === 'find' && (
            <Discover />

          )}
          {state === 'home' && (
            <MyLandingPage />
          )}
          {state === 'favourites' && (
            <Favourites />
          )}

        </main>
      </div>
    </div>
  )
}