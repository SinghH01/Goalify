import React from 'react'
import { useRecoilState } from 'recoil';
import { SidebarData } from "./SidebarData"
import '../styles/sidebar.css'
import { userState } from '../App';
import { linkState } from './Dashboard'


export default function Sidebar({ onStateChange }) {

  const [user, setUser] = useRecoilState(userState);
  const [state, setState] = useRecoilState(linkState);

  const stateChange = (link) => {
    if (state === link) {
      onStateChange("loading");
      setTimeout(() => {
        onStateChange(link)
      }, 300);
    } else {
      onStateChange(link)
    }

  }

  return (
    <div className='sidebar' >
      <div className='sidebar-user-info'>
        <img src={user.avatar} alt="Avatar" className="avatar" />
        <h2>{user.first_name} {user.last_name}</h2>

      </div>

      <ul className='sidebarList'>

        {SidebarData.map((val, key) => {
          return (
            <li
              className={state === val.link ? "linkItem" : "row"} key={key} onClick={() => stateChange(val.link)}>
              <div id="listItems">
                <div id="icon"> {val.icon}</div>
                <div id="title"> {val.title}</div>
              </div>

            </li>
          )
        })}

      </ul>
    </div>
  )
}