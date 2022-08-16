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
          <div>Meet, Chat </div>
          <br />
          <div>and accomplish goals together !</div>
        </h1>
        <p ref = {el => pText = el}>Goalify is a goal oriented social platform. It's a place where people with similar goals can meet, chat, track goals and be accountable for completing them successfully.</p>
        <button ref = {el => btn = el}>Discover</button>
      </div>
    </div>
  )

}