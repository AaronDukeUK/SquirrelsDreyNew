import React, { useState } from 'react'
import { graphql, useStaticQuery, Link } from 'gatsby'
import VizSensor from 'react-visibility-sensor'
import { Fade, Slide } from '@material-ui/core'
import Img from 'gatsby-image/withIEPolyfill'
import './Speed.sass'

const getSpeed = graphql`
  {
    file(name: { eq: "speed" }) {
      name
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const Speed = () => {
  const data = useStaticQuery(getSpeed)
  let [active, setActive] = useState(false)
  return (
    <section className="homeSectionContainer">
      <VizSensor
        onChange={isVisible => {
          setActive(isVisible)
        }}
        partialVisibility
      >
        <div className="homeSection speed">
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
          <Slide in={active} direction="left" timeout={1500}>
            <div className="homeText">
              <p className="lead">
                Mobile browsing <span className="italic">dominates</span> todays
                world <span className="coloredYellow punch">.</span>
              </p>
              <p>
                Generating <span className="italic">blazing-fast</span>{' '}
                websites, suited to any needs.
              </p>
              <p>
                Fully optimized, <span className="italic">handcrafted</span>{' '}
                code with speed and security in mind.
              </p>
              <Link className="link speedLink" to="/about">
                How are my websites optimized?
              </Link>
              <h2 className="coloredYellow">Speed.</h2>
            </div>
          </Slide>
        </div>
      </VizSensor>
    </section>
  )
}

export default Speed
