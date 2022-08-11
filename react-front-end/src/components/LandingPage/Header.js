import React from "react"
import "./header.css"

export default function Header() {

  return (
    <div>
      <div className="header">
        <div className="logo">
          GOALIFY
        </div>
        <div className="menu">
          <div className="menu-item">About</div>
          <div className="menu-item">Sign in</div>
          <div className="menu-item">Register</div>
        </div>
      </div>
    </div>
  )

}