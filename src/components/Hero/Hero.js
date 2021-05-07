import React from 'react'
import { Slide } from '@material-ui/core'
import './Hero.sass'

const Hero = () => {
  return (
    <section className="heroContainer">
      <Slide in direction="right" timeout={1500}>
        <div className="heroText">
          <h1>Squirrels Drey</h1>
          <p className="heroLead">Country Pub & Restaurant - Norfolk, UK.</p>
        </div>
      </Slide>
    </section>
  )
}

export default Hero
