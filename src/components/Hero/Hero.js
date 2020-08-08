import React from 'react'

import './Hero.sass'

const Hero = () => {
  return (
    <div className="heroContainer">
      <div className="line blue"></div>
      <div className="line green"></div>
      <div className="line orange"></div>
      <div>
        <h1 className="whiteText">Aaron Duke</h1>
        <h3 className="whiteText">Web Developer - Norfolk, UK.</h3>
      </div>
    </div>
  )
}

export default Hero
