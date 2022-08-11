import React, {useRef, useEffect} from "react"
import "./content.css"

export default function Content({timeline}) {

  let h1 = useRef(null);
  let pText = useRef(null);
  let btn = useRef(null);

  useEffect(()=> {
    timeline.from([h1.children, pText, btn], 1, {
      opacity: 0,
      y: "100",
      skewY: 10,
      stagger: {
        amount: .4
      }
    }, "-=1")
  })

  return (
    <div>
      <div className="content">
        <h1 className="content-inner-bold" ref = {el => h1 = el}>
          <div>Hard work beats talent</div>
          <br />
          <div>When talent doesnt work hard</div>
        </h1>
        <p ref = {el => pText = el}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        <button ref = {el => btn = el}>Discover</button>
      </div>
    </div>
  )

}