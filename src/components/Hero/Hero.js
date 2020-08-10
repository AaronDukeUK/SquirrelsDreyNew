import React from 'react'

import './Hero.sass'

const Hero = () => {
  return (
    <section className="heroContainer">
      <div className="line"></div>
      <div className="line"></div>
      <div className="line"></div>
      <div className="heroText">
        <h1>Aaron Duke</h1>
        <p className="heroLead">Freelance Web Developer - Norfolk, UK.</p>
      </div>
    </section>
  )
}

export default Hero
