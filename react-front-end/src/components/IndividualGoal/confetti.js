import React from 'react'
// import useWindowSize from 'react-use/lib/useWindowSize'
import Confetti from 'react-confetti'

export default function Confeti() {
  //alert(window.innerHeight)
  // const { width, height } = useWindowSize()
  return (
    <Confetti
      width={window.innerWidth}
      height={window.innerHeight}
      tweenDuration={5000}
    />
  )
}