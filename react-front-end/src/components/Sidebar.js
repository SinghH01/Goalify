import React from 'react'
import { useRecoilState } from 'recoil';
import {SidebarData} from "./SidebarData"
import './sidebar.css'
import { userState } from '../App';


export default function Sidebar({onStateChange}) {

  const [user, setUser] = useRecoilState(userState);
  
  return (
    <div className='sidebar' >
      <div className='sidebar-user-info'>
      <img src={user.avatar} alt="Avatar" class="avatar" />
      <h2>{user.first_name} {user.last_name}</h2>

      </div>

      <ul className='sidebarList'> 

      {SidebarData.map((val,key) => {
        return (
            <li 
            className='row' key = {key} onClick={()=> {onStateChange(val.link)}}>       
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