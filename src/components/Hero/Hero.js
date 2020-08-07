import React from 'react'

import './Hero.sass'

const Hero = () => {
  return (
    <div className="container">
      <div className="line blue"></div>
      <div className="line green"></div>
      <div className="line orange"></div>
      <div>
        <h1 className="whiteText">Hello.</h1>
        <p className="whiteText">Aaron Duke - Web Developer - Norfolk, UK.</p>
      </div>
    </div>
  )
}

export default Hero
