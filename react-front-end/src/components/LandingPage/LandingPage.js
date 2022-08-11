import React from "react"
import Content from "./Content"
import Header from "./Header"
import Images from "./Images"
import "./landingPage.css"
import {gsap, Power3} from 'gsap'

export default function LandingPage() {

  let tl = new gsap.timeline();
  let ease = Power3.easeOut();

  return (
    <div className="goalify">
      <Header timeline= {tl} ease= {ease} />
      <div className="container">
        <Content timeline= {tl}/>
        <Images />
      </div>
    </div>
  )

}