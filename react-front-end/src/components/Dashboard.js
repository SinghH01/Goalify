import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DicoverNavbar from './DiscoverNavbar';
import './dashboard.css'
import Sidebar from './Sidebar'
import Discover from './Discover';


export default function Dashboard() {

  return (
    <div className='dashboard'>
      <DicoverNavbar />
      <div className='dashboard-body'>
        <Sidebar />
        <main className='dashboard-main'>          
            <Routes>
              <Route exact path="/find" element={<Discover />}/>
            </Routes>
          
        </main>
      </div>
      
    </div>
  )
}