import React, {useRef, useEffect} from "react"
import Login from "../Auth/Login";
import Register from "../Auth/Register";
import "./header.css"

export default function Header({timeline, ease}) {
  let logo = useRef(null);
  let menu_item1 = useRef(null);
  let menu_item2 = useRef(null);
  let menu_item3 = useRef(null);

  useEffect(()=> { 
    timeline.from(logo,1, {
      opacity: 0,
      y: '100'
    });

    timeline.from([menu_item1, menu_item2, menu_item3], 2, {
      opacity: 0,
      y: -100,
      stagger: {
        amount: .4
      },
      ease: ease
    })
  })

  function showLogin() {
    return <Login />
  }

  showLogin()
  return (
    <div>
      <div className="header">
        <div className="logo" ref = {el => logo = el}>
          GOALIFY
        </div>
        <div className="menu">
          <div className="menu-item" ref = {el => menu_item1 = el} >ABOUT</div>
          <div className="menu-item" ref = {el => menu_item2 = el} ><Login /> </div>
          <div className="menu-item" ref = {el => menu_item3 = el}><Register /></div>
        </div>
      </div>
    </div>
  )

}