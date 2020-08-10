import React from 'react'
import { Fade, Slide } from '@material-ui/core'
import './Hero.sass'

const Hero = () => {
  return (
    <section className="heroContainer">
      <div className="line"></div>
      <div className="line"></div>
      <div className="line"></div>
      <Slide in direction="right" timeout={1500}>
        <div className="heroText">
          <h1>Aaron Duke</h1>
          <p className="heroLead">Freelance Web Developer - Norfolk, UK.</p>
        </div>
      </Slide>
    </section>
  )
}

export default Hero
