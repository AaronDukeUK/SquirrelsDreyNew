import React, { useState } from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import VizSensor from 'react-visibility-sensor'
import { Fade } from '@material-ui/core'
import Img from 'gatsby-image/withIEPolyfill'
import './XmasHours.sass'

const getXmasHours = graphql`
  {
    file(name: { eq: "xmasclock" }) {
      name
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const XmasHours = () => {
  const data = useStaticQuery(getXmasHours)
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
              Our Festive <span className="italic">opening</span> hours
            </p>
            <p>1st to 24th - Normal Hours</p>
            <p>Christmas Day - 1200 to 1600 </p>
            <p>Boxing Day - Closed</p>
            <p>27th & 28th - Closed</p>
            <p>29th & 30th - 1800 to 2130</p>
            <p>New Year's Eve - 1800 to 2130</p>
            <p>1st Jan to 18th Jan - Closed</p>

            <h2 className="coloredPink">FESTIVE.</h2>
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

export default XmasHours
