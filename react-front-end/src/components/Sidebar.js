import React from 'react'
import {SidebarData} from "./SidebarData"
import './sidebar.css'
export default function Sidebar() {

  return (
    <div className='sidebar' >
      <ul className='sidebarList'> 

      {SidebarData.map((val,key) => {
        return (
            <li 
            className='row' key = {key} onClick={()=> { window.location.pathname = val.link}}>       
            <div id="listItems">
            <div id="icon"> {val.icon}</div> 
            <div id = "title"> {val.title}</div>    
            </div>      
         
            </li>
        )
      })}            
        
      </ul>
    </div>
  )
}