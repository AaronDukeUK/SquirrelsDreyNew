import React, { useState } from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import VizSensor from 'react-visibility-sensor'
import { Fade } from '@material-ui/core'
import Img from 'gatsby-image/withIEPolyfill'
import './Hours.sass'

const getHours = graphql`
  {
    file(name: { eq: "clock" }) {
      name
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const Hours = () => {
  const data = useStaticQuery(getHours)
  let [active, setActive] = useState(false)
  return (
    <section className="homeSectionContainer">
      <VizSensor
        onChange={isVisible => {
          setActive(isVisible)
        }}
        partialVisibility
      >
        <div className="homeSection">

          <div className="homeText">
            <p className="lead">
              When are <span className="italic">we</span> open?
            </p>
            <p>Weds - 1800 to 2130</p>
            <p>Thur - 1800 to 2130</p>
            <p>Fri - 1800 to 2130</p>
            <p>Sat - 1800 to 2130</p>
            <p>Sun - 1200 to 1600</p>

            <h2 className="coloredPink">Hours.</h2>
          </div>

          <Fade in={active} timeout={3000}>
            <div className="homeImage">
              <Img
                className="Image"
                alt={data.file.name}
                fluid={data.file.childImageSharp.fluid}
                objectFit="cover"
              />
            </div>
          </Fade>

        </div>
      </VizSensor>
    </section>
  )
}

export default Hours
