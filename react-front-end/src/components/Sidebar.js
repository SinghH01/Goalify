import React, {useState} from 'react'
import { atom, useRecoilState } from 'recoil';
import {SidebarData} from "./SidebarData"
import './sidebar.css'


export default function Sidebar({onStateChange}) {
  
  return (
    <div className='sidebar' >

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