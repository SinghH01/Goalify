import React, {useState} from 'react'
import { userState } from '../App';
import { useRecoilState } from 'recoil';
import './dashboard.css'

//Components
import MyLandingPage from './MyLandingPage';
import DicoverNavbar from './DiscoverNavbar';
import Discover from './Discover';
import Sidebar from './Sidebar'


export default function Dashboard() {

  const [user, setUser] = useRecoilState(userState)
  const [state, setState] = useState('')

  return (
    <div className='dashboard'>
      <DicoverNavbar />
      <div className='dashboard-body'>
        <Sidebar onStateChange = {setState}/>
        <main className='dashboard-main'>
            {state === 'find' && (
                <Discover   />
            )}
             {state === 'home' && (
                <MyLandingPage   />
            )}
          
        </main>
      </div>      
    </div>
  )
}