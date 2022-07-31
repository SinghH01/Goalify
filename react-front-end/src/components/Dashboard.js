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
          <Router>
            <Routes>
              <Route exact path="/discover" element={<Discover />}/>
            </Routes>
          </Router>
        </main>
      </div>
      
    </div>
  )
}